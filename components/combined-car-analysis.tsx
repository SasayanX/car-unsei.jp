"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CarNumerologyAnalysis } from "./car-numerology-analysis"
import { analyzeCarNumber } from "../utils/car-number-analyzer"
import { getCarNumerologyData } from "../data/car-numerology-data"
import { Scale, Zap, Heart } from "lucide-react"

interface CombinedCarAnalysisProps {
  carNumber: string
}

export function CombinedCarAnalysis({ carNumber }: CombinedCarAnalysisProps) {
  const traditionalAnalysis = analyzeCarNumber(carNumber)
  const numerologyData = getCarNumerologyData(carNumber)

  // 総合スコアの計算（81画理論70% + 数秘術適性30%）
  const numerologyScore = getNumerologyScore(numerologyData.number)
  const combinedScore = Math.round(traditionalAnalysis.weightedScore * 0.7 + numerologyScore * 0.3)

  // 相性分析
  const compatibility = analyzeCompatibility(traditionalAnalysis.weightedScore, numerologyScore)

  return (
    <div className="space-y-6">
      {/* 総合結果サマリー */}
      <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Scale className="w-5 h-5" />
            総合診断結果
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold">{traditionalAnalysis.weightedScore}点</div>
              <div className="text-sm opacity-90">81画理論</div>
            </div>
            <div>
              <div className="text-3xl font-bold">{numerologyScore}点</div>
              <div className="text-sm opacity-90">数秘術適性</div>
            </div>
            <div>
              <div className="text-4xl font-bold">{combinedScore}点</div>
              <div className="text-sm opacity-90">総合スコア</div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-white/20 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-4 h-4" />
              <span className="font-semibold">相性分析</span>
            </div>
            <p className="text-sm">{compatibility.message}</p>
            <Badge className={`mt-2 ${compatibility.color}`}>{compatibility.level}</Badge>
          </div>
        </CardContent>
      </Card>

      {/* タブ形式の詳細分析 */}
      <Tabs defaultValue="traditional" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="traditional">81画理論</TabsTrigger>
          <TabsTrigger value="numerology">数秘術</TabsTrigger>
          <TabsTrigger value="combined">総合分析</TabsTrigger>
        </TabsList>

        <TabsContent value="traditional" className="space-y-4">
          {/* 既存の81画理論分析結果を表示 */}
          <Card>
            <CardHeader>
              <CardTitle>伝統的な81画理論による分析</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600">{traditionalAnalysis.weightedScore}点</div>
                  <p className="text-gray-600">数字の組み合わせによる運勢分析</p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">個別数字分析</h4>
                    <div className="space-y-1">
                      {traditionalAnalysis.individualAnalysis.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>{item.number}</span>
                          <span>
                            {item.score}点 ({item.type})
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">組み合わせ分析</h4>
                    <div className="space-y-1">
                      {traditionalAnalysis.combinationAnalysis.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>{item.number}</span>
                          <span>
                            {item.score}点 ({item.type})
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="numerology">
          <CarNumerologyAnalysis carNumber={carNumber} />
        </TabsContent>

        <TabsContent value="combined" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                統合分析レポート
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
                <h4 className="font-bold mb-2">🎯 あなたの愛車の特徴</h4>
                <p className="text-sm mb-3">
                  81画理論では<strong>{traditionalAnalysis.weightedScore}点</strong>、 数秘術では
                  <strong>「{numerologyData.name}」</strong>の性格を持っています。
                </p>
                <p className="text-sm">{getIntegratedAdvice(traditionalAnalysis.weightedScore, numerologyData)}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ 強み・活用法</h4>
                  <ul className="text-sm space-y-1 text-green-700 dark:text-green-300">
                    <li>• {numerologyData.suitableFor[0]}に最適</li>
                    <li>• {numerologyData.drivingStyle}</li>
                    <li>• {getTraditionalStrength(traditionalAnalysis.weightedScore)}</li>
                  </ul>
                </div>

                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">⚠️ 注意点・改善案</h4>
                  <ul className="text-sm space-y-1 text-yellow-700 dark:text-yellow-300">
                    <li>• {getTraditionalWeakness(traditionalAnalysis.weightedScore)}</li>
                    <li>• {getNumerologyAdvice(numerologyData.number)}</li>
                    <li>• 定期的なメンテナンスで運気維持</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// ヘルパー関数
function getNumerologyScore(number: number): number {
  const scores: Record<number, number> = {
    1: 85,
    2: 75,
    3: 90,
    4: 70,
    5: 80,
    6: 85,
    7: 65,
    8: 90,
    9: 80,
    11: 95,
    22: 95,
    33: 100,
  }
  return scores[number] || 70
}

function analyzeCompatibility(traditionalScore: number, numerologyScore: number) {
  const diff = Math.abs(traditionalScore - numerologyScore)

  if (diff <= 10) {
    return {
      level: "完璧な調和",
      message: "81画理論と数秘術の両方で高い適性を示しています。理想的な愛車です。",
      color: "bg-green-500 text-white",
    }
  } else if (diff <= 20) {
    return {
      level: "良好な相性",
      message: "伝統的な運勢と現代的な性格分析がバランス良く調和しています。",
      color: "bg-blue-500 text-white",
    }
  } else {
    return {
      level: "個性的な特徴",
      message: "ユニークな特徴を持つ車です。使い方次第で大きな力を発揮します。",
      color: "bg-purple-500 text-white",
    }
  }
}

function getIntegratedAdvice(score: number, numerologyData: any): string {
  if (score >= 80) {
    return `高い運勢スコアと「${numerologyData.name}」の特性により、${numerologyData.suitableFor[0]}や${numerologyData.businessUse}で特に力を発揮するでしょう。`
  } else if (score >= 60) {
    return `安定した運勢と「${numerologyData.name}」の性格で、${numerologyData.familyCompatibility}。日常使いに最適です。`
  } else {
    return `「${numerologyData.name}」の特性を活かし、${numerologyData.suitableFor[0]}から始めることで運気向上が期待できます。`
  }
}

function getTraditionalStrength(score: number): string {
  if (score >= 80) return "数字の組み合わせが非常に良好"
  if (score >= 60) return "安定した数字のエネルギー"
  return "改善の余地がある数字配置"
}

function getTraditionalWeakness(score: number): string {
  if (score >= 80) return "現状維持で十分"
  if (score >= 60) return "時々お清めやメンテナンスを"
  return "浄化アイテムで運気改善を"
}

function getNumerologyAdvice(number: number): string {
  const advice: Record<number, string> = {
    1: "リーダーシップを発揮する場面で活用",
    2: "協調性を大切にした運転を心がけて",
    3: "楽しい気持ちを忘れずに",
    4: "安全運転を最優先に",
    5: "新しい場所への冒険を楽しんで",
    6: "家族との時間を大切に",
    7: "一人の時間も大切にして",
    8: "目標達成のためのパートナーとして",
    9: "社会貢献の気持ちを持って",
    11: "直感を信じて運転を",
    22: "大きな目標に向かって活用",
    33: "愛と奉仕の心で",
  }
  return advice[number] || "バランスを大切に"
}
