"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SEODebugPanel() {
  const [checkResults, setCheckResults] = useState<any>(null)

  const runSEOCheck = async () => {
    const results = {
      canonicalTags: await checkCanonicalTags(),
      metaTags: await checkMetaTags(),
      sitemap: await checkSitemap(),
      internalLinks: await checkInternalLinks(),
    }
    setCheckResults(results)
  }

  const checkCanonicalTags = async () => {
    // 現在のページのcanonicalタグをチェック
    const canonical = document.querySelector('link[rel="canonical"]')
    return {
      exists: !!canonical,
      url: canonical?.getAttribute("href") || "なし",
      isCorrect: canonical?.getAttribute("href")?.includes(window.location.pathname) || false,
    }
  }

  const checkMetaTags = async () => {
    const title = document.querySelector("title")?.textContent
    const description = document.querySelector('meta[name="description"]')?.getAttribute("content")
    const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute("content")
    const ogDescription = document.querySelector('meta[property="og:description"]')?.getAttribute("content")

    return {
      title: title || "なし",
      description: description || "なし",
      ogTitle: ogTitle || "なし",
      ogDescription: ogDescription || "なし",
      hasAllRequired: !!(title && description && ogTitle && ogDescription),
    }
  }

  const checkSitemap = async () => {
    try {
      const response = await fetch("/sitemap.xml")
      const isAccessible = response.ok
      const contentType = response.headers.get("content-type")
      return {
        accessible: isAccessible,
        contentType: contentType || "unknown",
        status: response.status,
      }
    } catch (error) {
      return {
        accessible: false,
        error: "アクセスエラー",
      }
    }
  }

  const checkInternalLinks = async () => {
    const links = document.querySelectorAll('a[href^="/"]')
    const internalLinks = Array.from(links).map((link) => ({
      href: link.getAttribute("href"),
      text: link.textContent?.trim() || "テキストなし",
    }))

    return {
      count: internalLinks.length,
      links: internalLinks.slice(0, 10), // 最初の10個のみ表示
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>SEO状況チェック</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={runSEOCheck} className="w-full">
          SEOチェック実行
        </Button>

        {checkResults && (
          <div className="space-y-4">
            {/* Canonicalタグチェック */}
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-2">Canonicalタグ</h3>
              <Badge variant={checkResults.canonicalTags.exists ? "default" : "destructive"}>
                {checkResults.canonicalTags.exists ? "設定済み" : "未設定"}
              </Badge>
              <p className="text-sm mt-2">URL: {checkResults.canonicalTags.url}</p>
              <Badge variant={checkResults.canonicalTags.isCorrect ? "default" : "destructive"}>
                {checkResults.canonicalTags.isCorrect ? "正しい" : "要修正"}
              </Badge>
            </div>

            {/* メタタグチェック */}
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-2">メタタグ</h3>
              <Badge variant={checkResults.metaTags.hasAllRequired ? "default" : "destructive"}>
                {checkResults.metaTags.hasAllRequired ? "完備" : "不足あり"}
              </Badge>
              <div className="text-sm mt-2 space-y-1">
                <p>タイトル: {checkResults.metaTags.title}</p>
                <p>説明: {checkResults.metaTags.description}</p>
              </div>
            </div>

            {/* サイトマップチェック */}
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-2">サイトマップ</h3>
              <Badge variant={checkResults.sitemap.accessible ? "default" : "destructive"}>
                {checkResults.sitemap.accessible ? "アクセス可能" : "エラー"}
              </Badge>
              <p className="text-sm mt-2">ステータス: {checkResults.sitemap.status || "エラー"}</p>
            </div>

            {/* 内部リンクチェック */}
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-2">内部リンク</h3>
              <p className="text-sm">検出数: {checkResults.internalLinks.count}個</p>
              <div className="mt-2 space-y-1 text-xs">
                {checkResults.internalLinks.links.map((link: any, index: number) => (
                  <div key={index} className="flex justify-between">
                    <span>{link.href}</span>
                    <span className="text-gray-500">{link.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
