"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Share2, Zap, Target, Star, Flame, Rocket } from "lucide-react"

interface ViralFactor {
  name: string
  current: number
  target: number
  impact: "high" | "medium" | "low"
  difficulty: "easy" | "medium" | "hard"
  actions: string[]
}

export function ViralStrategyAnalyzer() {
  const [selectedStrategy, setSelectedStrategy] = useState<string>("immediate")

  const viralFactors: ViralFactor[] = [
    {
      name: "話題性・ユニークさ",
      current: 70,
      target: 90,
      impact: "high",
      difficulty: "medium",
      actions: [
        "有名人の車ナンバーを診断して話題作り",
        "「運勢最悪ナンバー」ランキング発表",
        "地域別「最強ナンバー」マップ作成",
        "AI予測：2024年最も運勢の良いナンバー",
      ],
    },
    {
      name: "シェアしやすさ",
      current: 60,
      target: 85,
      impact: "high",
      difficulty: "easy",
      actions: [
        "診断結果の画像自動生成機能",
        "「友達と比較」機能追加",
        "シェア特典（隠れた運勢情報）",
        "インスタストーリー最適化",
      ],
    },
    {
      name: "エンターテイメント性",
      current: 75,
      target: 90,
      impact: "high",
      difficulty: "medium",
      actions: [
        "診断結果にアニメーション追加",
        "音声読み上げ機能",
        "ゲーム要素（レアナンバー発見）",
        "毎日変わる「今日のラッキーナンバー」",
      ],
    },
    {
      name: "社会的証明",
      current: 40,
      target: 80,
      impact: "medium",
      difficulty: "easy",
      actions: [
        "「今日○○人が診断」リアルタイム表示",
        "人気ナンバーランキング",
        "体験談・口コミ機能",
        "著名人の推薦コメント",
      ],
    },
    {
      name: "タイミング・トレンド",
      current: 50,
      target: 85,
      impact: "high",
      difficulty: "hard",
      actions: [
        "話題のニュースと関連付け",
        "季節イベントとの連動",
        "SNSトレンドハッシュタグ活用",
        "インフルエンサーとのコラボ",
      ],
    },
  ]

  const viralStrategies = {
    immediate: {
      title: "今すぐできる施策",
      icon: Zap,
      items: [
        {
          action: "有名人の車ナンバー診断企画",
          description: "芸能人やYouTuberの愛車ナンバーを診断して話題作り",
          effort: "低",
          impact: "高",
          timeframe: "1-3日",
        },
        {
          action: "「最悪ナンバー」ランキング発表",
          description: "運勢の悪いナンバーをランキング化して注目を集める",
          effort: "低",
          impact: "中",
          timeframe: "1日",
        },
        {
          action: "Twitter/TikTokでの積極発信",
          description: "診断結果の面白い例を定期的に投稿",
          effort: "中",
          impact: "中",
          timeframe: "継続",
        },
      ],
    },
    content: {
      title: "コンテンツ強化",
      icon: Star,
      items: [
        {
          action: "地域別最強ナンバーマップ",
          description: "47都道府県の最も運勢の良いナンバーを調査・発表",
          effort: "中",
          impact: "高",
          timeframe: "1週間",
        },
        {
          action: "車種別相性診断",
          description: "車種とナンバーの相性を診断する新機能",
          effort: "高",
          impact: "高",
          timeframe: "2週間",
        },
        {
          action: "運勢カレンダー機能",
          description: "ナンバー別の日々の運勢を表示",
          effort: "高",
          impact: "中",
          timeframe: "3週間",
        },
      ],
    },
    social: {
      title: "SNS戦略",
      icon: Share2,
      items: [
        {
          action: "インフルエンサーコラボ",
          description: "車系YouTuberや占い師とのコラボ企画",
          effort: "中",
          impact: "高",
          timeframe: "2-4週間",
        },
        {
          action: "ハッシュタグキャンペーン",
          description: "#愛車運勢診断チャレンジ で拡散促進",
          effort: "低",
          impact: "中",
          timeframe: "1週間",
        },
        {
          action: "TikTok動画コンテンツ",
          description: "診断結果の面白い反応動画を作成",
          effort: "中",
          impact: "高",
          timeframe: "継続",
        },
      ],
    },
  }

  const currentStrategy = viralStrategies[selectedStrategy as keyof typeof viralStrategies]

  const getImpactColor = (impact: string) => {
    switch (impact) {
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

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* ヘッダー */}
      <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-800">
            <Flame className="w-6 h-6" />
            バズらせる戦略分析
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white/60 rounded-lg">
              <Rocket className="w-8 h-8 mx-auto text-red-600 mb-2" />
              <div className="text-2xl font-bold text-red-600">目標</div>
              <div className="text-sm text-gray-600">月間10万PV</div>
            </div>
            <div className="text-center p-4 bg-white/60 rounded-lg">
              <TrendingUp className="w-8 h-8 mx-auto text-orange-600 mb-2" />
              <div className="text-2xl font-bold text-orange-600">現状</div>
              <div className="text-sm text-gray-600">日間100-200PV</div>
            </div>
            <div className="text-center p-4 bg-white/60 rounded-lg">
              <Target className="w-8 h-8 mx-auto text-purple-600 mb-2" />
              <div className="text-2xl font-bold text-purple-600">必要</div>
              <div className="text-sm text-gray-600">50倍の成長</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* バイラル要因分析 */}
      <Card>
        <CardHeader>
          <CardTitle>バイラル要因分析</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {viralFactors.map((factor, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-medium">{factor.name}</span>
                <div className="flex gap-2">
                  <Badge className={getImpactColor(factor.impact)}>{factor.impact} impact</Badge>
                  <Badge className={getDifficultyColor(factor.difficulty)}>{factor.difficulty}</Badge>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Progress value={factor.current} className="flex-1" />
                <span className="text-sm text-gray-600 min-w-[80px]">
                  {factor.current}% → {factor.target}%
                </span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* 戦略選択 */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: "immediate", label: "今すぐ施策", icon: Zap },
          { id: "content", label: "コンテンツ強化", icon: Star },
          { id: "social", label: "SNS戦略", icon: Share2 },
        ].map(({ id, label, icon: Icon }) => (
          <Button
            key={id}
            variant={selectedStrategy === id ? "default" : "outline"}
            onClick={() => setSelectedStrategy(id)}
            className="flex items-center gap-2"
          >
            <Icon className="w-4 h-4" />
            {label}
          </Button>
        ))}
      </div>

      {/* 戦略詳細 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <currentStrategy.icon className="w-5 h-5" />
            {currentStrategy.title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {currentStrategy.items.map((item, index) => (
              <Card key={index} className="h-full">
                <CardHeader className="pb-3">
                  <CardTitle className="text-base">{item.action}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <div className="flex justify-between text-xs">
                    <span>工数: {item.effort}</span>
                    <span>効果: {item.impact}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {item.timeframe}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 緊急提案 */}
      <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
        <CardHeader>
          <CardTitle className="text-red-800">🔥 今週末にできる緊急バズ施策</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="p-4 bg-white/60 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">「芸能人の愛車ナンバー診断」企画</h4>
            <ul className="text-sm space-y-1">
              <li>• 話題の芸能人の愛車ナンバーを調査・診断</li>
              <li>• 結果をTwitter/TikTokで発信</li>
              <li>• 「あの人の運勢は？」でエンゲージメント獲得</li>
              <li>• ファンによる拡散を期待</li>
            </ul>
          </div>

          <div className="p-4 bg-white/60 rounded-lg">
            <h4 className="font-semibold text-red-800 mb-2">「最悪ナンバーランキング」発表</h4>
            <ul className="text-sm space-y-1">
              <li>• 運勢スコアの低いナンバーTOP10を発表</li>
              <li>• 「あなたの車は大丈夫？」で不安を煽る</li>
              <li>• 対策方法も併せて提案</li>
              <li>• 話題性と実用性を両立</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
