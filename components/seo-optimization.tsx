"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Search, Target, BarChart3 } from "lucide-react"
import { useState } from "react"

export function SEOOptimization() {
  const [showDetails, setShowDetails] = useState(false)

  const currentMetrics = {
    impressions: 19,
    clicks: 3,
    ctr: 15.8,
    avgPosition: 8.5,
  }

  const targetKeywords = [
    { keyword: "住所 運勢", volume: 1200, difficulty: "低", current: 8 },
    { keyword: "住まい 診断", volume: 800, difficulty: "低", current: 12 },
    { keyword: "番地 占い", volume: 600, difficulty: "低", current: 15 },
    { keyword: "住所 占い", volume: 2100, difficulty: "中", current: 25 },
    { keyword: "家 運勢", volume: 1800, difficulty: "中", current: 18 },
    { keyword: "住所診断", volume: 900, difficulty: "低", current: 6 },
    { keyword: "住まい運勢", volume: 700, difficulty: "低", current: 4 },
    { keyword: "番地診断", volume: 400, difficulty: "低", current: 9 },
  ]

  const nextActions = [
    {
      title: "ロングテールキーワード記事作成",
      description: "「マンション 部屋番号 運勢」「アパート 住所 占い」など具体的なキーワードで記事作成",
      priority: "高",
      impact: "大",
    },
    {
      title: "地域別ランディングページ",
      description: "「東京 住所診断」「大阪 住まい運勢」など地域特化ページ作成",
      priority: "高",
      impact: "大",
    },
    {
      title: "FAQ充実化",
      description: "「住所で運勢がわかるのは本当？」など検索されやすい質問を追加",
      priority: "中",
      impact: "中",
    },
    {
      title: "構造化データ強化",
      description: "FAQ、レビュー、組織情報の構造化データを追加",
      priority: "中",
      impact: "中",
    },
  ]

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30 border-green-200 dark:border-green-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-300">
            <TrendingUp className="w-6 h-6" />
            検索流入成果レポート
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{currentMetrics.impressions}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">表示回数</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{currentMetrics.clicks}</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">クリック数</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{currentMetrics.ctr}%</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">CTR</div>
            </div>
            <div className="text-center p-4 bg-white dark:bg-gray-800 rounded-lg">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {currentMetrics.avgPosition}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">平均順位</div>
            </div>
          </div>

          <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg">
            <p className="text-green-800 dark:text-green-200 font-medium">
              🎉 素晴らしい成果！CTR 15.8%は業界平均の3倍以上です！
            </p>
            <p className="text-green-700 dark:text-green-300 text-sm mt-1">
              この調子で検索順位を上げれば、さらに多くの流入が期待できます。
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            ターゲットキーワード分析
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {targetKeywords.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
              >
                <div className="flex-1">
                  <div className="font-medium text-gray-900 dark:text-gray-100">{item.keyword}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    月間検索数: {item.volume.toLocaleString()}回
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    variant={
                      item.difficulty === "低" ? "default" : item.difficulty === "中" ? "secondary" : "destructive"
                    }
                  >
                    {item.difficulty}
                  </Badge>
                  <div className="text-right">
                    <div className="font-bold text-purple-600 dark:text-purple-400">{item.current}位</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">現在順位</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            次のアクション計画
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {nextActions.map((action, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">{action.title}</h3>
                  <div className="flex gap-2">
                    <Badge variant={action.priority === "高" ? "destructive" : "secondary"}>{action.priority}</Badge>
                    <Badge variant={action.impact === "大" ? "default" : "outline"}>効果{action.impact}</Badge>
                  </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">{action.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            予想成果
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">100+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">1ヶ月後の表示回数</div>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">20+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">1ヶ月後のクリック数</div>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">500+</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">3ヶ月後の表示回数</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center">
        <Button
          onClick={() => setShowDetails(!showDetails)}
          className="bg-gradient-to-r from-green-600 to-blue-600 text-white"
        >
          {showDetails ? "詳細を隠す" : "詳細戦略を表示"}
        </Button>
      </div>

      {showDetails && (
        <Card className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30">
          <CardHeader>
            <CardTitle>詳細SEO戦略</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">1. コンテンツ拡充戦略</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>「住所診断とは？科学的根拠と娯楽性について」記事作成</li>
                <li>「各数字の意味と運勢への影響」詳細ページ</li>
                <li>「住所診断の歴史と文化的背景」記事</li>
                <li>「よくある質問100選」ページ</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2. 技術的SEO改善</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>Core Web Vitals最適化</li>
                <li>モバイルファーストインデックス対応強化</li>
                <li>内部リンク構造の最適化</li>
                <li>画像のalt属性とファイル名最適化</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-2">3. ローカルSEO対策</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-300">
                <li>都道府県別ランディングページ作成</li>
                <li>地域特化キーワードでの最適化</li>
                <li>Googleマイビジネス登録（該当する場合）</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
