"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, TrendingUp, Target, Lightbulb } from "lucide-react"
import { useState } from "react"

export function KeywordResearch() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)

  const highPotentialKeywords = [
    { keyword: "住所 運勢 無料", volume: 1500, competition: "低", intent: "情報" },
    { keyword: "マンション 部屋番号 運勢", volume: 800, competition: "低", intent: "情報" },
    { keyword: "住所診断 当たる", volume: 600, competition: "低", intent: "情報" },
    { keyword: "番地 占い 無料", volume: 900, competition: "低", intent: "情報" },
    { keyword: "住まい 風水 診断", volume: 2100, competition: "中", intent: "情報" },
    { keyword: "住所 数字 意味", volume: 700, competition: "低", intent: "情報" },
    { keyword: "家 運勢", volume: 1200, competition: "中", intent: "情報" },
    { keyword: "住所診断", volume: 900, competition: "低", intent: "情報" },
    { keyword: "住まい運勢", volume: 700, competition: "低", intent: "情報" },
    { keyword: "番地診断", volume: 400, competition: "低", intent: "情報" },
    // Bing/Yahoo! JAPAN 向けキーワード
    { keyword: "家の運勢", volume: 300, competition: "低", intent: "情報" },
    { keyword: "住居 運勢", volume: 250, competition: "低", intent: "情報" },
  ]

  const longTailKeywords = [
    "住所で運勢がわかるって本当",
    "マンションの部屋番号は運勢に影響する",
    "住所診断 科学的根拠",
    "番地の数字 運勢 関係",
    "住所占い 無料 当たる",
    "住まいの運勢チェック方法",
    "住所診断 信憑性",
    "住所の数字 意味 一覧",
    // Bing/Yahoo! JAPAN 向けキーワード
    "家の運勢を上げる方法",
    "住居の運勢診断",
  ]

  const contentIdeas = [
    {
      title: "住所診断の科学的根拠について",
      keywords: ["住所診断 科学的根拠", "住所占い 信憑性"],
      type: "記事",
      priority: "高",
    },
    {
      title: "マンション・アパートの部屋番号と運勢",
      keywords: ["マンション 部屋番号 運勢", "アパート 住所 占い"],
      type: "記事",
      priority: "高",
    },
    {
      title: "各数字の意味と運勢への影響",
      keywords: ["住所 数字 意味", "番地 数字 運勢"],
      type: "詳細ページ",
      priority: "中",
    },
    {
      title: "地域別住所診断の特徴",
      keywords: ["東京 住所診断", "大阪 住まい運勢"],
      type: "地域ページ",
      priority: "中",
    },
    // Bing/Yahoo! JAPAN 向けコンテンツアイデア
    {
      title: "家の運勢を上げるための風水術",
      keywords: ["家の運勢", "風水"],
      type: "記事",
      priority: "中",
    },
    {
      title: "住居の運勢診断でわかること",
      keywords: ["住居 運勢", "運勢診断"],
      type: "記事",
      priority: "中",
    },
  ]

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5" />
            キーワード調査ツール
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="キーワードを入力..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1"
              />
              <Button onClick={() => setShowSuggestions(!showSuggestions)}>検索</Button>
            </div>

            {showSuggestions && (
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <p className="text-blue-800 dark:text-blue-200 font-medium mb-2">💡 関連キーワード候補</p>
                <div className="flex flex-wrap gap-2">
                  {longTailKeywords.slice(0, 6).map((keyword, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-800"
                    >
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            高ポテンシャルキーワード
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {highPotentialKeywords.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg"
              >
                <div className="flex-1">
                  <div className="font-medium text-gray-900 dark:text-gray-100">{item.keyword}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    月間検索数: {item.volume.toLocaleString()}回 | 検索意図: {item.intent}
                  </div>
                </div>
                <Badge
                  variant={
                    item.competition === "低" ? "default" : item.competition === "中" ? "secondary" : "destructive"
                  }
                >
                  競合{item.competition}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            コンテンツアイデア
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {contentIdeas.map((idea, index) => (
              <div key={index} className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">{idea.title}</h3>
                  <div className="flex gap-2">
                    <Badge variant="outline">{idea.type}</Badge>
                    <Badge variant={idea.priority === "高" ? "destructive" : "secondary"}>{idea.priority}</Badge>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mt-2">
                  {idea.keywords.map((keyword, kidx) => (
                    <Badge key={kidx} variant="outline" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/30 dark:to-blue-900/30">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5" />
            今週の実行計画
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
              <div className="font-medium text-green-600 dark:text-green-400">今日</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">「マンション 部屋番号 運勢」記事の構成作成</div>
            </div>
            <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
              <div className="font-medium text-blue-600 dark:text-blue-400">明日</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">「住所診断 科学的根拠」記事の執筆開始</div>
            </div>
            <div className="p-3 bg-white dark:bg-gray-800 rounded-lg">
              <div className="font-medium text-purple-600 dark:text-purple-400">今週末</div>
              <div className="text-sm text-gray-600 dark:text-gray-300">FAQ充実化（20個の質問追加）</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
