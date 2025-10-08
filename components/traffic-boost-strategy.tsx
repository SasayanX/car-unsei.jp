"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Users, Share2, Search, Calendar, Target, BarChart3, Zap } from "lucide-react"

interface TrafficStrategy {
  category: string
  strategies: {
    name: string
    difficulty: "easy" | "medium" | "hard"
    impact: "low" | "medium" | "high"
    timeframe: string
    description: string
    actionItems: string[]
  }[]
}

export function TrafficBoostStrategy() {
  const [selectedCategory, setSelectedCategory] = useState<string>("immediate")

  const trafficStrategies: TrafficStrategy[] = [
    {
      category: "immediate",
      strategies: [
        {
          name: "SNSシェア最適化",
          difficulty: "easy",
          impact: "medium",
          timeframe: "1-3日",
          description: "診断結果のシェア機能を強化してバイラル効果を狙う",
          actionItems: [
            "診断結果画像の自動生成機能追加",
            "Twitter/Instagram最適化されたシェアテキスト",
            "シェア特典（隠れた運勢情報など）の追加",
            "ハッシュタグ戦略の実装",
          ],
        },
        {
          name: "リアルタイム診断数表示",
          difficulty: "easy",
          impact: "medium",
          timeframe: "1日",
          description: "「今日○○人が診断しました」で社会的証明を演出",
          actionItems: [
            "診断数カウンター実装",
            "リアルタイム更新機能",
            "地域別診断数表示",
            "人気ナンバーランキング表示",
          ],
        },
      ],
    },
    {
      category: "content",
      strategies: [
        {
          name: "季節コンテンツ強化",
          difficulty: "medium",
          impact: "high",
          timeframe: "1週間",
          description: "季節に合わせた車関連コンテンツで検索流入を増加",
          actionItems: [
            "夏の車内温度対策記事",
            "お盆帰省の安全運転記事",
            "夏祭り・花火大会の駐車場運勢",
            "海水浴場への車でのアクセス記事",
          ],
        },
        {
          name: "地域特化コンテンツ",
          difficulty: "medium",
          impact: "high",
          timeframe: "2週間",
          description: "都道府県別の車ナンバー運勢で地域検索を狙う",
          actionItems: [
            "47都道府県別ナンバー運勢",
            "地域別交通安全祈願神社紹介",
            "ご当地ナンバープレート運勢",
            "地域別駐車場運勢マップ",
          ],
        },
      ],
    },
    {
      category: "seo",
      strategies: [
        {
          name: "ロングテールキーワード攻略",
          difficulty: "medium",
          impact: "high",
          timeframe: "2-4週間",
          description: "競合の少ないキーワードで上位表示を狙う",
          actionItems: [
            "「車 ナンバー 4桁 運勢」系キーワード",
            "「希望ナンバー おすすめ 2024」",
            "「車 購入 吉日 カレンダー」",
            "「駐車場 番号 運勢」",
          ],
        },
        {
          name: "内部リンク最適化",
          difficulty: "easy",
          impact: "medium",
          timeframe: "3日",
          description: "既存記事間の内部リンクを強化してSEO効果向上",
          actionItems: [
            "関連記事の自動表示機能",
            "記事内の適切な箇所に内部リンク追加",
            "パンくずナビゲーション強化",
            "サイト内検索機能の追加",
          ],
        },
      ],
    },
    {
      category: "viral",
      strategies: [
        {
          name: "診断結果の多様化",
          difficulty: "medium",
          impact: "high",
          timeframe: "1週間",
          description: "より詳細で面白い診断結果でリピート率向上",
          actionItems: [
            "月別・季節別運勢の追加",
            "相性診断機能（車同士の相性）",
            "運勢カレンダー機能",
            "過去の診断履歴機能",
          ],
        },
        {
          name: "ゲーミフィケーション",
          difficulty: "hard",
          impact: "high",
          timeframe: "2-3週間",
          description: "ゲーム要素を追加してエンゲージメント向上",
          actionItems: [
            "診断回数に応じたバッジシステム",
            "レアナンバー発見チャレンジ",
            "友達紹介ポイントシステム",
            "月間診断ランキング",
          ],
        },
      ],
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "hard":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "low":
        return "bg-gray-100 text-gray-800"
      case "medium":
        return "bg-blue-100 text-blue-800"
      case "high":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const currentStrategies = trafficStrategies.find((s) => s.category === selectedCategory)?.strategies || []

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* ヘッダー */}
      <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-800">
            <TrendingUp className="w-6 h-6" />
            アドセンス再審査対策：トラフィック増加戦略
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white/60 rounded-lg">
              <Users className="w-8 h-8 mx-auto text-blue-600 mb-2" />
              <div className="text-2xl font-bold text-blue-600">目標</div>
              <div className="text-sm text-gray-600">1日500PV</div>
            </div>
            <div className="text-center p-4 bg-white/60 rounded-lg">
              <Calendar className="w-8 h-8 mx-auto text-green-600 mb-2" />
              <div className="text-2xl font-bold text-green-600">期間</div>
              <div className="text-sm text-gray-600">4-6週間</div>
            </div>
            <div className="text-center p-4 bg-white/60 rounded-lg">
              <Target className="w-8 h-8 mx-auto text-purple-600 mb-2" />
              <div className="text-2xl font-bold text-purple-600">重点</div>
              <div className="text-sm text-gray-600">SEO + SNS</div>
            </div>
            <div className="text-center p-4 bg-white/60 rounded-lg">
              <Zap className="w-8 h-8 mx-auto text-orange-600 mb-2" />
              <div className="text-2xl font-bold text-orange-600">優先度</div>
              <div className="text-sm text-gray-600">即効性重視</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* カテゴリー選択 */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: "immediate", label: "即効性対策", icon: Zap },
          { id: "content", label: "コンテンツ強化", icon: BarChart3 },
          { id: "seo", label: "SEO対策", icon: Search },
          { id: "viral", label: "バイラル施策", icon: Share2 },
        ].map(({ id, label, icon: Icon }) => (
          <Button
            key={id}
            variant={selectedCategory === id ? "default" : "outline"}
            onClick={() => setSelectedCategory(id)}
            className="flex items-center gap-2"
          >
            <Icon className="w-4 h-4" />
            {label}
          </Button>
        ))}
      </div>

      {/* 戦略詳細 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {currentStrategies.map((strategy, index) => (
          <Card key={index} className="h-full">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-lg">{strategy.name}</CardTitle>
                <div className="flex flex-col gap-1">
                  <Badge className={getDifficultyColor(strategy.difficulty)}>{strategy.difficulty}</Badge>
                  <Badge className={getImpactColor(strategy.impact)}>{strategy.impact} impact</Badge>
                </div>
              </div>
              <div className="text-sm text-gray-600">実装期間: {strategy.timeframe}</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">{strategy.description}</p>

              <div>
                <h4 className="font-semibold mb-2">実装項目</h4>
                <ul className="space-y-1">
                  {strategy.actionItems.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 進捗トラッカー */}
      <Card>
        <CardHeader>
          <CardTitle>実装進捗トラッカー</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>即効性対策</span>
                <span>0/8 完了</span>
              </div>
              <Progress value={0} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>コンテンツ強化</span>
                <span>0/8 完了</span>
              </div>
              <Progress value={0} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>SEO対策</span>
                <span>0/8 完了</span>
              </div>
              <Progress value={0} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>バイラル施策</span>
                <span>0/8 完了</span>
              </div>
              <Progress value={0} className="h-2" />
            </div>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">今週の重点項目</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• SNSシェア機能の強化</li>
              <li>• リアルタイム診断数表示の実装</li>
              <li>• 夏季コンテンツの作成開始</li>
              <li>• 内部リンク最適化</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
