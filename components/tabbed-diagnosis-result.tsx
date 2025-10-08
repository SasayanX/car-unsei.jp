"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, User, Car, Heart, Briefcase, Users, Sparkles } from "lucide-react"
import { getFortuneComment } from "../data/fortune-data"
import { getFortuneTypeColor, getFortuneEmoji, getScoreColor } from "../utils/fortune-colors"
import { getCarNumerologyData, calculateNumerologyNumber } from "../data/car-numerology-data"
import { AdSenseAd } from "./adsense-integration"
import type { CarNumberAnalysis } from "../utils/car-number-analyzer"

interface TabbedDiagnosisResultProps {
  analysis: CarNumberAnalysis
  carNumber: string
}

export function TabbedDiagnosisResult({ analysis, carNumber }: TabbedDiagnosisResultProps) {
  const [activeTab, setActiveTab] = useState<"fortune" | "personality">("fortune")

  const fortuneComment = getFortuneComment(analysis.weightedScore)
  const scoreColors = getScoreColor(analysis.weightedScore)

  // 数秘術データ
  const numerologyNumber = calculateNumerologyNumber(carNumber)
  const numerologyData = getCarNumerologyData(carNumber)
  const isMasterNumber = [11, 22, 33].includes(numerologyNumber)

  return (
    <div className="space-y-6">
      {/* メインスコア表示（運勢のみ） */}
      <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg transition-colors duration-300">
        <CardContent className="p-8 text-center">
          <div className="space-y-4">
            <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              {analysis.weightedScore}
            </div>
            <div className="text-xl text-gray-600 dark:text-gray-300">/ 100点</div>
            {fortuneComment && scoreColors && (
              <div className={`space-y-3 p-4 rounded-lg ${fortuneComment.bgColor} dark:bg-gray-700/50`}>
                <Badge
                  className={`text-lg px-4 py-2 border font-semibold ${scoreColors.full} dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500`}
                >
                  {fortuneComment.title}
                </Badge>
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed">{fortuneComment.message}</p>
              </div>
            )}
            {/* 文化参加メッセージ */}
            <div className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
              <p className="text-sm text-blue-700 dark:text-blue-200">
                🎉 おめでとうございます！あなたは<strong>ナンバープレート診断文化</strong>の創造者の一人です！
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* タブ切り替えボタン */}
      <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
        <CardContent className="p-0">
          <div className="flex">
            <Button
              variant={activeTab === "fortune" ? "default" : "ghost"}
              onClick={() => setActiveTab("fortune")}
              className={`flex-1 rounded-none rounded-tl-lg h-14 text-base font-medium ${
                activeTab === "fortune"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              }`}
            >
              <Star className="w-5 h-5 mr-2" />
              運勢詳細
            </Button>
            <Button
              variant={activeTab === "personality" ? "default" : "ghost"}
              onClick={() => setActiveTab("personality")}
              className={`flex-1 rounded-none rounded-tr-lg h-14 text-base font-medium ${
                activeTab === "personality"
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
              }`}
            >
              <User className="w-5 h-5 mr-2" />
              性格分析
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* タブコンテンツ */}
      {activeTab === "fortune" && (
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg transition-colors duration-300">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-gray-100">
              <Star className="w-5 h-5 text-yellow-500" />
              運勢の詳細分析
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 個別数字の分析 */}
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">
                個別数字の運勢 ({analysis.individualAnalysis.length}個)
              </h3>
              {analysis.individualAnalysis.length === 0 ? (
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border border-yellow-200 dark:border-yellow-700">
                  <p className="text-yellow-700 dark:text-yellow-200">
                    ⚠️ 個別数字が見つかりませんでした。
                    <br />
                    抽出された数字: [{analysis.numbers.join(", ")}]
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {analysis.individualAnalysis.map((item, index) => {
                    const colors = getFortuneTypeColor(item.type)
                    const emoji = getFortuneEmoji(item.type)
                    return (
                      <div
                        key={index}
                        className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{item.number}</span>
                          <div className="text-right">
                            <div className="font-bold text-blue-600 dark:text-blue-400 mb-1">{item.score}点</div>
                            <Badge
                              className={`border font-medium ${colors.full} dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500`}
                            >
                              {emoji} {item.type}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>

            {/* 広告配置: 運勢タブ内 */}
            <AdSenseAd adSlot="7766782092" adFormat="auto" className="my-4" label="関連情報" />

            {/* 組み合わせ数字の分析 */}
            {analysis.combinationAnalysis.length > 0 && (
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">連続数字の運勢</h3>
                <div className="space-y-3">
                  {analysis.combinationAnalysis.map((item, index) => {
                    const colors = getFortuneTypeColor(item.type)
                    const emoji = getFortuneEmoji(item.type)
                    return (
                      <div
                        key={index}
                        className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{item.number}</span>
                          <div className="text-right">
                            <div className="font-bold text-blue-600 dark:text-blue-400 mb-1">{item.score}点</div>
                            <Badge
                              className={`border font-medium ${colors.full} dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500`}
                            >
                              {emoji} {item.type}
                            </Badge>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {activeTab === "personality" && (
        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-600" />
              あなたの愛車の性格分析
              {isMasterNumber && (
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">マスターナンバー</Badge>
              )}
            </CardTitle>
            <div className="text-sm text-gray-600 dark:text-gray-400">数秘術に基づく性格とエネルギー分析</div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* メイン性格タイプ */}
            <div className="text-center p-6 rounded-lg" style={{ backgroundColor: `${numerologyData.color}20` }}>
              <div className="text-6xl mb-2">{numerologyData.emoji}</div>
              <div className="text-4xl font-bold mb-2" style={{ color: numerologyData.color }}>
                {numerologyNumber}
              </div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">{numerologyData.name}</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{numerologyData.personality}</p>
            </div>

            {/* エネルギー特性 */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-purple-600" />
                  <span className="font-semibold text-purple-800 dark:text-purple-200">エネルギー特性</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{numerologyData.energy}</p>
              </div>

              <div className="p-4 bg-white/60 dark:bg-gray-800/60 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Car className="w-4 h-4 text-blue-600" />
                  <span className="font-semibold text-blue-800 dark:text-blue-200">運転スタイル</span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">{numerologyData.drivingStyle}</p>
              </div>
            </div>

            {/* 適性と用途 */}
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <Users className="w-4 h-4 text-green-600" />
                  <span className="font-semibold text-green-800 dark:text-green-200">この車に向いている人・用途</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {numerologyData.suitableFor.map((item, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Heart className="w-4 h-4 text-pink-600" />
                    <span className="font-semibold text-pink-800 dark:text-pink-200">家族との相性</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{numerologyData.familyCompatibility}</p>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-4 h-4 text-blue-600" />
                    <span className="font-semibold text-blue-800 dark:text-blue-200">ビジネス活用</span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">{numerologyData.businessUse}</p>
                </div>
              </div>
            </div>

            {/* マスターナンバーの特別説明 */}
            {isMasterNumber && (
              <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg border-2 border-purple-300 dark:border-purple-700">
                <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2 flex items-center gap-2">
                  ✨ マスターナンバーの特別な意味
                </h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">
                  {numerologyNumber === 11 &&
                    "直感力と霊感が強く、特別な使命を持つ車です。運転中にひらめきや重要な気づきを得やすいでしょう。"}
                  {numerologyNumber === 22 &&
                    "大きな夢や目標を現実化する力を持つ車です。長期的なプロジェクトや重要な移動に力を発揮します。"}
                  {numerologyNumber === 33 &&
                    "無条件の愛と癒しのエネルギーを持つ車です。乗る人すべてに安らぎと希望を与える特別な存在です。"}
                </p>
              </div>
            )}

            {/* 計算過程の表示 */}
            <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg text-xs text-gray-600 dark:text-gray-400">
              <span className="font-semibold">計算過程:</span> {carNumber} → 数字抽出・合計 → {numerologyNumber}
              {isMasterNumber && " (マスターナンバーとして確定)"}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
