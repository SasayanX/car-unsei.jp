"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getCarNumerologyData, calculateNumerologyNumber } from "../data/car-numerology-data"
import { Sparkles, Car, Heart, Briefcase, Users } from "lucide-react"

interface CarNumerologyAnalysisProps {
  carNumber: string
}

export function CarNumerologyAnalysis({ carNumber }: CarNumerologyAnalysisProps) {
  const numerologyNumber = calculateNumerologyNumber(carNumber)
  const numerologyData = getCarNumerologyData(carNumber)

  const isMasterNumber = [11, 22, 33].includes(numerologyNumber)

  return (
    <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border-purple-200 dark:border-purple-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-600" />
          車の数秘術診断
          {isMasterNumber && (
            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">マスターナンバー</Badge>
          )}
        </CardTitle>
        <div className="text-sm text-gray-600 dark:text-gray-400">あなたの愛車の性格とエネルギーを数秘術で分析</div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* メイン数字とタイプ */}
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
  )
}
