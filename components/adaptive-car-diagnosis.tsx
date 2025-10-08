"use client"

import { useState } from "react"
import { DiagnosisModeSelector } from "./diagnosis-mode-selector"
import { CombinedCarAnalysis } from "./combined-car-analysis"
import { CarNumerologyAnalysis } from "./car-numerology-analysis"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getFortuneComment } from "../data/fortune-data"
import { getScoreColor } from "../utils/fortune-colors"

interface AdaptiveCarDiagnosisProps {
  carNumber: string
  analysis: any
}

export function AdaptiveCarDiagnosis({ carNumber, analysis }: AdaptiveCarDiagnosisProps) {
  const [selectedMode, setSelectedMode] = useState<"quick" | "detailed" | "fortune" | "personality">("detailed")

  const renderQuickDiagnosis = () => {
    const fortuneComment = getFortuneComment(analysis.weightedScore)
    const scoreColors = getScoreColor(analysis.weightedScore)

    return (
      <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-center">⚡ クイック診断結果</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
            {analysis.weightedScore}
          </div>
          <div className="text-xl text-gray-600 dark:text-gray-300">/ 100点</div>

          {fortuneComment && scoreColors && (
            <div className={`space-y-3 p-4 rounded-lg ${fortuneComment.bgColor} dark:bg-gray-700/50`}>
              <Badge className={`text-lg px-4 py-2 border font-semibold ${scoreColors.full}`}>
                {fortuneComment.title}
              </Badge>
              <p className="text-gray-700 dark:text-gray-200">{fortuneComment.message}</p>
            </div>
          )}

          <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
            <p className="text-sm text-blue-700 dark:text-blue-200">
              💡 より詳しい分析は「詳細統合診断」をお試しください
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  const renderFortuneDiagnosis = () => {
    return (
      <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle>🌟 運勢特化診断（81画理論）</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">{analysis.weightedScore}点</div>
            <p className="text-gray-600 dark:text-gray-300">伝統的な数字の運勢分析</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-2">個別数字の運勢</h4>
              <div className="space-y-1">
                {analysis.individualAnalysis.map((item: any, index: number) => (
                  <div key={index} className="flex justify-between text-sm p-2 bg-gray-50 dark:bg-gray-700 rounded">
                    <span className="font-medium">{item.number}</span>
                    <span>
                      {item.score}点 ({item.type})
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-2">組み合わせの運勢</h4>
              <div className="space-y-1">
                {analysis.combinationAnalysis.map((item: any, index: number) => (
                  <div key={index} className="flex justify-between text-sm p-2 bg-blue-50 dark:bg-blue-900/30 rounded">
                    <span className="font-medium">{item.number}</span>
                    <span>
                      {item.score}点 ({item.type})
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      <DiagnosisModeSelector onModeSelect={setSelectedMode} selectedMode={selectedMode} />

      {selectedMode === "quick" && renderQuickDiagnosis()}
      {selectedMode === "detailed" && <CombinedCarAnalysis carNumber={carNumber} />}
      {selectedMode === "fortune" && renderFortuneDiagnosis()}
      {selectedMode === "personality" && <CarNumerologyAnalysis carNumber={carNumber} />}
    </div>
  )
}
