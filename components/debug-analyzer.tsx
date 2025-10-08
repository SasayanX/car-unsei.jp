"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { analyzeAddress } from "../utils/address-analyzer"
import { Bug, Calculator, Eye } from "lucide-react"

export function DebugAnalyzer() {
  const [testAddress, setTestAddress] = useState("1-1-6")
  const [analysis, setAnalysis] = useState<any>(null)

  const handleDebugAnalyze = () => {
    const result = analyzeAddress(testAddress, true) // デバッグ情報付きで分析
    setAnalysis(result)
  }

  return (
    <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-orange-800 dark:text-orange-200">
          <Bug className="w-5 h-5" />
          住所分析デバッガー
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            value={testAddress}
            onChange={(e) => setTestAddress(e.target.value)}
            placeholder="テスト住所を入力"
            className="flex-1"
          />
          <Button onClick={handleDebugAnalyze} className="flex items-center gap-2">
            <Calculator className="w-4 h-4" />
            分析
          </Button>
        </div>

        {analysis && (
          <div className="space-y-4">
            {/* 最終結果 */}
            <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                <Eye className="w-4 h-4" />
                最終結果
              </h3>
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{analysis.weightedScore}点</div>
            </div>

            {/* デバッグ情報 */}
            {analysis.debug && (
              <div className="space-y-3">
                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <h4 className="font-medium mb-2">1. 数字抽出</h4>
                  <p className="text-sm">抽出された数字: [{analysis.debug.extractedNumbers.join(", ")}]</p>
                  <p className="text-sm">フィルター後: [{analysis.debug.filteredNumbers.join(", ")}]</p>
                </div>

                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <h4 className="font-medium mb-2">2. 組み合わせ生成</h4>
                  {analysis.debug.generatedCombinations.map((combo: any, i: number) => (
                    <Badge key={i} variant={combo.isValid ? "default" : "secondary"} className="mr-2 mb-1">
                      {combo.original} ({combo.isValid ? "有効" : "無効"})
                    </Badge>
                  ))}
                </div>

                <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded">
                  <h4 className="font-medium mb-2">3. スコア計算</h4>
                  <p className="text-sm">
                    個別数字スコア: [{analysis.debug.individualScores.join(", ")}] → 平均{" "}
                    {analysis.debug.individualAverage.toFixed(1)}点
                  </p>
                  <p className="text-sm">
                    組み合わせスコア: [{analysis.debug.combinationScores.join(", ")}] → 平均{" "}
                    {analysis.debug.combinationAverage.toFixed(1)}点
                  </p>
                  <p className="text-sm font-medium">重み付き計算: {analysis.debug.weightCalculation}</p>
                </div>

                <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
                  <h4 className="font-medium mb-2">4. 詳細分析</h4>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-medium">個別数字:</span>
                      {analysis.individualAnalysis.map((item: any, i: number) => (
                        <Badge key={i} className="ml-2 mb-1">
                          {item.number}: {item.score}点 ({item.type})
                        </Badge>
                      ))}
                    </div>
                    <div>
                      <span className="text-sm font-medium">組み合わせ:</span>
                      {analysis.combinationAnalysis.map((item: any, i: number) => (
                        <Badge key={i} className="ml-2 mb-1">
                          {item.number}: {item.score}点 ({item.type})
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
