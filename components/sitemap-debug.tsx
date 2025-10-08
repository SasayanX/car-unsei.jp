"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { existingBlogPosts } from "@/data/existing-blog-posts"
import { ExternalLink, FileText, Calendar, Tag } from "lucide-react"

export function SitemapDebug() {
  const [isOpen, setIsOpen] = useState(false)

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
        size="sm"
      >
        サイトマップ確認
      </Button>
    )
  }

  // 梅雨記事のフィルタリング
  const rainySeasonPosts = existingBlogPosts.filter((post) => post.category === "車メンテナンス・梅雨対策")

  // 最新記事の確認
  const latestPost = existingBlogPosts[0]

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            サイトマップ確認ダッシュボード
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 統計情報 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{existingBlogPosts.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">総記事数</div>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="text-2xl font-bold text-green-600">{rainySeasonPosts.length}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">梅雨記事数</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">
                {new Set(existingBlogPosts.map((post) => post.category)).size}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">カテゴリ数</div>
            </div>
            <div className="text-center p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">{latestPost?.date}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">最新記事日付</div>
            </div>
          </div>

          {/* 最新記事 */}
          <div>
            <h3 className="font-bold text-lg mb-3">📰 最新記事</h3>
            {latestPost && (
              <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-blue-600 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-bold text-blue-800 dark:text-blue-300">{latestPost.title}</h4>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">{latestPost.excerpt}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline">{latestPost.category}</Badge>
                      <Badge variant="secondary">{latestPost.date}</Badge>
                      <Badge variant="outline">{latestPost.readTime}</Badge>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 梅雨記事一覧 */}
          <div>
            <h3 className="font-bold text-lg mb-3">🌧️ 梅雨対策記事シリーズ</h3>
            <div className="space-y-3">
              {rainySeasonPosts.map((post, index) => (
                <div
                  key={post.slug}
                  className="p-3 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg"
                >
                  <div className="flex items-start gap-3">
                    <span className="bg-green-600 text-white px-2 py-1 rounded text-sm font-medium">{index + 1}</span>
                    <div className="flex-1">
                      <h4 className="font-semibold text-green-800 dark:text-green-300">{post.title}</h4>
                      <p className="text-sm text-green-600 dark:text-green-400 mt-1">
                        /blog/{post.slug} ({post.date})
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* カテゴリ別統計 */}
          <div>
            <h3 className="font-bold text-lg mb-3">📊 カテゴリ別記事数</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {Object.entries(
                existingBlogPosts.reduce(
                  (acc, post) => {
                    acc[post.category] = (acc[post.category] || 0) + 1
                    return acc
                  },
                  {} as Record<string, number>,
                ),
              ).map(([category, count]) => (
                <div key={category} className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-gray-600" />
                    <span className="text-sm font-medium">{category}</span>
                  </div>
                  <div className="text-lg font-bold text-blue-600 mt-1">{count}記事</div>
                </div>
              ))}
            </div>
          </div>

          {/* アクションボタン */}
          <div className="flex gap-3 pt-4 border-t">
            <Button
              onClick={() => window.open("/sitemap.xml", "_blank")}
              className="flex items-center gap-2"
              variant="outline"
            >
              <ExternalLink className="w-4 h-4" />
              実際のサイトマップを確認
            </Button>
            <Button onClick={() => setIsOpen(false)} variant="secondary">
              閉じる
            </Button>
          </div>

          {/* デバッグ情報 */}
          <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 p-3 rounded">
            <strong>デバッグ情報:</strong>
            <br />
            最新記事スラッグ: {latestPost?.slug}
            <br />
            梅雨記事スラッグ: {rainySeasonPosts.map((p) => p.slug).join(", ")}
            <br />
            生成時刻: {new Date().toLocaleString("ja-JP")}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
