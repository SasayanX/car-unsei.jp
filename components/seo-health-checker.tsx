"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, XCircle } from "lucide-react"

interface SEOIssue {
  type: "error" | "warning" | "success"
  message: string
  fix?: string
}

export function SEOHealthChecker() {
  const [issues, setIssues] = useState<SEOIssue[]>([])
  const [isChecking, setIsChecking] = useState(false)

  const runSEOHealthCheck = async () => {
    setIsChecking(true)
    const foundIssues: SEOIssue[] = []

    // 1. Canonicalタグチェック
    const canonicals = document.querySelectorAll('link[rel="canonical"]')
    if (canonicals.length === 0) {
      foundIssues.push({
        type: "error",
        message: "Canonicalタグが見つかりません",
        fix: "各ページにcanonicalタグを追加してください",
      })
    } else if (canonicals.length > 1) {
      foundIssues.push({
        type: "warning",
        message: `重複するcanonicalタグが${canonicals.length}個あります`,
        fix: "重複するcanonicalタグを削除してください",
      })
    } else {
      const canonical = canonicals[0]
      const href = canonical.getAttribute("href")
      if (href && !href.startsWith("https://car-unsei.jp")) {
        foundIssues.push({
          type: "error",
          message: "Canonical URLが正しくありません",
          fix: "https://car-unsei.jp で始まるURLに修正してください",
        })
      } else {
        foundIssues.push({
          type: "success",
          message: "Canonicalタグは正常です",
        })
      }
    }

    // 2. メタタグチェック
    const title = document.querySelector("title")?.textContent
    const description = document.querySelector('meta[name="description"]')?.getAttribute("content")

    if (!title || title.length < 30) {
      foundIssues.push({
        type: "error",
        message: "タイトルが短すぎるか存在しません",
        fix: "30文字以上のタイトルを設定してください",
      })
    }

    if (!description || description.length < 120) {
      foundIssues.push({
        type: "error",
        message: "メタディスクリプションが短すぎるか存在しません",
        fix: "120文字以上のメタディスクリプションを設定してください",
      })
    }

    // 3. 構造化データチェック
    const jsonLdScripts = document.querySelectorAll('script[type="application/ld+json"]')
    if (jsonLdScripts.length === 0) {
      foundIssues.push({
        type: "warning",
        message: "構造化データが見つかりません",
        fix: "JSON-LDで構造化データを追加してください",
      })
    } else {
      foundIssues.push({
        type: "success",
        message: `構造化データが${jsonLdScripts.length}個見つかりました`,
      })
    }

    // 4. 内部リンクチェック
    const internalLinks = document.querySelectorAll('a[href^="/"]')
    if (internalLinks.length < 3) {
      foundIssues.push({
        type: "warning",
        message: "内部リンクが少なすぎます",
        fix: "関連ページへの内部リンクを増やしてください",
      })
    }

    // 5. 画像のalt属性チェック
    const images = document.querySelectorAll("img")
    const imagesWithoutAlt = Array.from(images).filter((img) => !img.getAttribute("alt"))
    if (imagesWithoutAlt.length > 0) {
      foundIssues.push({
        type: "warning",
        message: `${imagesWithoutAlt.length}個の画像にalt属性がありません`,
        fix: "すべての画像にalt属性を追加してください",
      })
    }

    setIssues(foundIssues)
    setIsChecking(false)
  }

  const getIcon = (type: string) => {
    switch (type) {
      case "error":
        return <XCircle className="w-4 h-4 text-red-500" />
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />
      case "success":
        return <CheckCircle className="w-4 h-4 text-green-500" />
      default:
        return null
    }
  }

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "error":
        return "destructive"
      case "warning":
        return "secondary"
      case "success":
        return "default"
      default:
        return "outline"
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>SEOヘルスチェック</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={runSEOHealthCheck} disabled={isChecking} className="w-full">
          {isChecking ? "チェック中..." : "SEOヘルスチェック実行"}
        </Button>

        {issues.length > 0 && (
          <div className="space-y-3">
            <h3 className="font-semibold">検出された問題</h3>
            {issues.map((issue, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg">
                {getIcon(issue.type)}
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-1">
                    <Badge variant={getBadgeVariant(issue.type)}>{issue.type.toUpperCase()}</Badge>
                    <span className="font-medium">{issue.message}</span>
                  </div>
                  {issue.fix && <p className="text-sm text-gray-600 dark:text-gray-400">{issue.fix}</p>}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h4 className="font-semibold mb-2">Google Search Console対策</h4>
          <ul className="text-sm space-y-1">
            <li>• 代替ページ問題: canonicalタグの統一</li>
            <li>• 404エラー: 存在しないページのリンクを修正</li>
            <li>• リダイレクト問題: 不要なリダイレクトを削除</li>
            <li>• 重複コンテンツ: canonicalタグで正規ページを指定</li>
            <li>• クロール済み未登録: コンテンツ品質の向上</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
