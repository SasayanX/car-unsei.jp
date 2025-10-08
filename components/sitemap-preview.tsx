"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { existingBlogPosts } from "@/data/existing-blog-posts"
import { Copy, ExternalLink, FileText, CheckCircle } from "lucide-react"

export function SitemapPreview() {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-16 right-4 z-50 bg-green-600 hover:bg-green-700 text-white shadow-lg"
        size="sm"
      >
        サイトマップ内容確認
      </Button>
    )
  }

  const baseUrl = "https://car-unsei.jp"
  const currentDate = new Date().toISOString()

  // 静的ページ
  const staticPages = [
    { url: `${baseUrl}/`, priority: 1.0, changeFreq: "daily" },
    { url: `${baseUrl}/blog`, priority: 0.8, changeFreq: "weekly" },
    { url: `${baseUrl}/faq`, priority: 0.7, changeFreq: "monthly" },
    { url: `${baseUrl}/contact`, priority: 0.6, changeFreq: "monthly" },
    { url: `${baseUrl}/about`, priority: 0.7, changeFreq: "monthly" },
    { url: `${baseUrl}/privacy`, priority: 0.3, changeFreq: "yearly" },
    { url: `${baseUrl}/terms`, priority: 0.3, changeFreq: "yearly" },
    { url: `${baseUrl}/disclaimer`, priority: 0.3, changeFreq: "yearly" },
  ]

  // ブログ記事
  const blogPages = existingBlogPosts.map((post) => {
    const isRainySeasonPost = post.category === "車メンテナンス・梅雨対策"
    return {
      url: `${baseUrl}/blog/${post.slug}`,
      priority: isRainySeasonPost ? 0.7 : 0.6,
      changeFreq: "monthly",
      lastModified: new Date(post.date).toISOString(),
      title: post.title,
      category: post.category,
      date: post.date,
    }
  })

  const allPages = [...staticPages, ...blogPages]

  // XML生成
  const generateSitemapXML = () => {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
${blogPages
  .map(
    (page) => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`
    return xml
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generateSitemapXML())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("コピーに失敗しました:", err)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            サイトマップ内容プレビュー
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 統計情報 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{allPages.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">総URL数</div>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{staticPages.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">静的ページ</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">{blogPages.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">ブログ記事</div>
            </div>
            <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">
                {blogPages.filter((p) => p.priority === 0.7).length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">高優先度記事</div>
            </div>
          </div>

          {/* 最新記事確認 */}
          <div>
            <h3 className="font-bold text-lg mb-3">🆕 最新記事がサイトマップに含まれているか確認</h3>
            <div className="space-y-2">
              {blogPages.slice(0, 5).map((page, index) => (
                <div
                  key={page.url}
                  className={`p-3 rounded-lg ${
                    index === 0
                      ? "bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 border-2 border-green-300"
                      : "bg-gray-50 dark:bg-gray-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {index === 0 && <CheckCircle className="w-5 h-5 text-green-600" />}
                    <div className="flex-1">
                      <div className="font-medium">{page.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{page.url}</div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant={page.priority === 0.7 ? "default" : "secondary"}>優先度: {page.priority}</Badge>
                        <Badge variant="outline">{page.date}</Badge>
                        <Badge variant="outline">{page.category}</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 梅雨記事確認 */}
          <div>
            <h3 className="font-bold text-lg mb-3">🌧️ 梅雨記事がすべて含まれているか確認</h3>
            <div className="grid gap-2">
              {blogPages
                .filter((page) => page.category === "車メンテナンス・梅雨対策")
                .map((page) => (
                  <div key={page.url} className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="font-medium">{page.title}</span>
                      <Badge className="bg-blue-600">優先度: {page.priority}</Badge>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{page.url}</div>
                  </div>
                ))}
            </div>
          </div>

          {/* XML プレビュー */}
          <div>
            <h3 className="font-bold text-lg mb-3">📄 実際のXML内容（最初の10行）</h3>
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <pre>
                {generateSitemapXML().split("\n").slice(0, 15).join("\n")}
                ...
                {`</urlset>`}
              </pre>
            </div>
          </div>

          {/* アクションボタン */}
          <div className="flex gap-3 pt-4 border-t">
            <Button onClick={() => window.open("/sitemap.xml", "_blank")} className="flex items-center gap-2">
              <ExternalLink className="w-4 h-4" />
              実際のサイトマップを開く
            </Button>
            <Button onClick={copyToClipboard} variant="outline" className="flex items-center gap-2">
              {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "コピー完了!" : "XMLをコピー"}
            </Button>
            <Button onClick={() => setIsOpen(false)} variant="secondary">
              閉じる
            </Button>
          </div>

          {/* 重要な確認ポイント */}
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
            <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">✅ 確認ポイント</h4>
            <ul className="text-sm text-yellow-700 dark:text-yellow-400 space-y-1">
              <li>• 最新記事「雨の日の安全運転テクニック」が最上位に表示されているか</li>
              <li>• 梅雨記事4本すべてが優先度0.7で設定されているか</li>
              <li>• 総URL数が{allPages.length}個になっているか</li>
              <li>• 各記事のlastModifiedが正しい日付になっているか</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
