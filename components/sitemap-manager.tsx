"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getSiteUrls, type SitemapUrl } from "@/utils/sitemap-generator"
import { ExternalLink, CheckCircle, AlertCircle, RefreshCw } from "lucide-react"

export function SitemapManager() {
  const [urls, setUrls] = useState<SitemapUrl[]>([])
  const [isChecking, setIsChecking] = useState(false)
  const [lastGenerated, setLastGenerated] = useState<string>("")

  useEffect(() => {
    setUrls(getSiteUrls())
    setLastGenerated(new Date().toLocaleString("ja-JP"))
  }, [])

  const handleRefreshSitemap = async () => {
    setIsChecking(true)
    try {
      // サイトマップを再生成（実際にはAPI呼び出し）
      const response = await fetch("/sitemap.xml")
      if (response.ok) {
        setLastGenerated(new Date().toLocaleString("ja-JP"))
        alert("サイトマップが正常に更新されました！")
      } else {
        throw new Error("サイトマップの更新に失敗しました")
      }
    } catch (error) {
      alert("エラーが発生しました: " + (error as Error).message)
    } finally {
      setIsChecking(false)
    }
  }

  const getPriorityColor = (priority: number) => {
    if (priority >= 0.8) return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
    if (priority >= 0.5) return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
    return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
  }

  const getFrequencyColor = (frequency: string) => {
    switch (frequency) {
      case "daily":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "weekly":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      case "monthly":
        return "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      {/* サイトマップ概要 */}
      <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-gray-100">
            <CheckCircle className="w-5 h-5 text-green-500" />
            XMLサイトマップ管理
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{urls.length}</div>
              <div className="text-sm text-green-700 dark:text-green-300">登録URL数</div>
            </div>
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">XML</div>
              <div className="text-sm text-blue-700 dark:text-blue-300">形式</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
              <div className="text-sm font-bold text-purple-600 dark:text-purple-400">{lastGenerated}</div>
              <div className="text-sm text-purple-700 dark:text-purple-300">最終更新</div>
            </div>
          </div>

          <div className="flex gap-4">
            <Button onClick={handleRefreshSitemap} disabled={isChecking} className="flex items-center gap-2">
              <RefreshCw className={`w-4 h-4 ${isChecking ? "animate-spin" : ""}`} />
              {isChecking ? "更新中..." : "サイトマップ更新"}
            </Button>
            <Button
              variant="outline"
              onClick={() => window.open("/sitemap.xml", "_blank")}
              className="flex items-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              サイトマップを表示
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* URL一覧 */}
      <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-800 dark:text-gray-100">登録URL一覧</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {urls.map((urlData, index) => (
              <div
                key={index}
                className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-800 dark:text-gray-100">{urlData.url}</span>
                  <div className="flex gap-2">
                    <Badge className={getPriorityColor(urlData.priority || 0.5)}>
                      優先度: {urlData.priority || 0.5}
                    </Badge>
                    <Badge className={getFrequencyColor(urlData.changeFrequency || "weekly")}>
                      {urlData.changeFrequency || "weekly"}
                    </Badge>
                  </div>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  最終更新: {urlData.lastModified || "未設定"}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AdSense審査への効果 */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-gray-100">
            <AlertCircle className="w-5 h-5 text-green-500" />
            AdSense審査への効果
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">SEO効果</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• Googleによるサイト構造の理解促進</li>
                <li>• インデックス化の高速化</li>
                <li>• 検索順位の向上</li>
                <li>• クロール効率の改善</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">審査評価</h4>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>• サイトの専門性アピール</li>
                <li>• コンテンツの網羅性証明</li>
                <li>• 技術的な信頼性向上</li>
                <li>• ユーザビリティの改善</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
