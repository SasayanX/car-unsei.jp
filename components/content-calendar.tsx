"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, TrendingUp, Users } from "lucide-react"

interface ContentItem {
  date: string
  title: string
  type: "blog" | "feature" | "campaign"
  priority: "high" | "medium" | "low"
  estimatedTraffic: string
  keywords: string[]
  status: "planned" | "in-progress" | "completed"
}

export function ContentCalendar() {
  const [selectedWeek, setSelectedWeek] = useState(0)

  const contentPlan: ContentItem[] = [
    // 第1週
    {
      date: "2024-06-10",
      title: "夏の車内温度対策と運勢アップ術",
      type: "blog",
      priority: "high",
      estimatedTraffic: "200-300 PV/日",
      keywords: ["車内温度", "夏 車", "暑さ対策"],
      status: "planned",
    },
    {
      date: "2024-06-12",
      title: "診断結果シェア機能強化",
      type: "feature",
      priority: "high",
      estimatedTraffic: "シェア率+50%",
      keywords: ["SNS", "シェア", "バイラル"],
      status: "planned",
    },
    {
      date: "2024-06-14",
      title: "お盆帰省の安全運転ナンバー特集",
      type: "blog",
      priority: "high",
      estimatedTraffic: "300-400 PV/日",
      keywords: ["お盆", "帰省", "安全運転"],
      status: "planned",
    },

    // 第2週
    {
      date: "2024-06-17",
      title: "47都道府県別ナンバー運勢ガイド",
      type: "blog",
      priority: "high",
      estimatedTraffic: "500-700 PV/日",
      keywords: ["都道府県", "ナンバー", "地域"],
      status: "planned",
    },
    {
      date: "2024-06-19",
      title: "リアルタイム診断数表示機能",
      type: "feature",
      priority: "medium",
      estimatedTraffic: "滞在時間+30%",
      keywords: ["リアルタイム", "社会的証明"],
      status: "planned",
    },
    {
      date: "2024-06-21",
      title: "夏祭り・花火大会の駐車場運勢",
      type: "blog",
      priority: "medium",
      estimatedTraffic: "150-250 PV/日",
      keywords: ["夏祭り", "花火大会", "駐車場"],
      status: "planned",
    },

    // 第3週
    {
      date: "2024-06-24",
      title: "車ナンバー相性診断機能",
      type: "feature",
      priority: "high",
      estimatedTraffic: "診断数+40%",
      keywords: ["相性", "診断", "カップル"],
      status: "planned",
    },
    {
      date: "2024-06-26",
      title: "海水浴場アクセス＆駐車場運勢マップ",
      type: "blog",
      priority: "medium",
      estimatedTraffic: "200-300 PV/日",
      keywords: ["海水浴", "アクセス", "駐車場"],
      status: "planned",
    },
    {
      date: "2024-06-28",
      title: "希望ナンバー申請ガイド2024夏",
      type: "blog",
      priority: "high",
      estimatedTraffic: "400-500 PV/日",
      keywords: ["希望ナンバー", "申請", "2024"],
      status: "planned",
    },

    // 第4週
    {
      date: "2024-07-01",
      title: "7月の車運勢カレンダー",
      type: "blog",
      priority: "medium",
      estimatedTraffic: "100-200 PV/日",
      keywords: ["7月", "運勢", "カレンダー"],
      status: "planned",
    },
    {
      date: "2024-07-03",
      title: "診断履歴・お気に入り機能",
      type: "feature",
      priority: "medium",
      estimatedTraffic: "リピート率+25%",
      keywords: ["履歴", "お気に入り", "リピート"],
      status: "planned",
    },
    {
      date: "2024-07-05",
      title: "夏の長距離ドライブ運勢ガイド",
      type: "blog",
      priority: "medium",
      estimatedTraffic: "250-350 PV/日",
      keywords: ["長距離", "ドライブ", "夏休み"],
      status: "planned",
    },
  ]

  const weeks = [
    { label: "第1週 (6/10-6/16)", range: [0, 3] },
    { label: "第2週 (6/17-6/23)", range: [3, 6] },
    { label: "第3週 (6/24-6/30)", range: [6, 9] },
    { label: "第4週 (7/1-7/7)", range: [9, 12] },
  ]

  const currentWeekContent = contentPlan.slice(weeks[selectedWeek].range[0], weeks[selectedWeek].range[1])

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "low":
        return "bg-green-100 text-green-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "blog":
        return "bg-blue-100 text-blue-800"
      case "feature":
        return "bg-purple-100 text-purple-800"
      case "campaign":
        return "bg-orange-100 text-orange-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* ヘッダー */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <Calendar className="w-6 h-6" />
            コンテンツカレンダー：4週間集中プラン
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white/60 rounded-lg">
              <TrendingUp className="w-8 h-8 mx-auto text-green-600 mb-2" />
              <div className="text-2xl font-bold text-green-600">目標PV</div>
              <div className="text-sm text-gray-600">1日500-800PV</div>
            </div>
            <div className="text-center p-4 bg-white/60 rounded-lg">
              <Users className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-600">新規記事</div>
              <div className="text-sm text-gray-600">週3本ペース</div>
            </div>
            <div className="text-center p-4 bg-white/60 rounded-lg">
              <Clock className="w-8 h-8 mx-auto text-purple-600 mb-2" />
              <div className="text-2xl font-bold text-purple-600">機能追加</div>
              <div className="text-sm text-gray-600">週1-2機能</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 週選択 */}
      <div className="flex flex-wrap gap-2">
        {weeks.map((week, index) => (
          <Button
            key={index}
            variant={selectedWeek === index ? "default" : "outline"}
            onClick={() => setSelectedWeek(index)}
          >
            {week.label}
          </Button>
        ))}
      </div>

      {/* コンテンツ詳細 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {currentWeekContent.map((item, index) => (
          <Card key={index} className="h-full">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between mb-2">
                <Badge className={getTypeColor(item.type)}>{item.type}</Badge>
                <Badge className={getPriorityColor(item.priority)}>{item.priority}</Badge>
              </div>
              <CardTitle className="text-base leading-tight">{item.title}</CardTitle>
              <div className="text-sm text-gray-600">{item.date}</div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-1">予想効果</div>
                <div className="text-sm text-green-600 font-medium">{item.estimatedTraffic}</div>
              </div>

              <div>
                <div className="text-sm font-medium text-gray-700 mb-1">対象キーワード</div>
                <div className="flex flex-wrap gap-1">
                  {item.keywords.map((keyword, keyIndex) => (
                    <Badge key={keyIndex} variant="outline" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Badge variant={item.status === "completed" ? "default" : "secondary"} className="text-xs">
                  {item.status === "planned" && "計画中"}
                  {item.status === "in-progress" && "作業中"}
                  {item.status === "completed" && "完了"}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 週間サマリー */}
      <Card>
        <CardHeader>
          <CardTitle>週間目標サマリー</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-3">今週の重点施策</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  高優先度コンテンツの確実な公開
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  機能追加によるユーザー体験向上
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  SEOキーワードの戦略的配置
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">期待される効果</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  週間PV数: 2,000-3,000増加
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  新規ユーザー: 40-60%増加
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-purple-500" />
                  滞在時間: 20-30%向上
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
