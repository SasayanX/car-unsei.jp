"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Heart, Scale, Clock, Star } from "lucide-react"

interface DiagnosisModeProps {
  onModeSelect: (mode: "quick" | "detailed" | "fortune" | "personality") => void
  selectedMode: string
}

export function DiagnosisModeSelector({ onModeSelect, selectedMode }: DiagnosisModeProps) {
  const modes = [
    {
      id: "quick",
      name: "クイック診断",
      icon: <Zap className="w-5 h-5" />,
      time: "30秒",
      description: "運勢スコアを素早くチェック",
      features: ["総合スコア", "基本的な運勢", "簡単アドバイス"],
      color: "bg-blue-500",
      popular: false,
    },
    {
      id: "detailed",
      name: "詳細統合診断",
      icon: <Scale className="w-5 h-5" />,
      time: "2分",
      description: "運勢×性格の完全分析",
      features: ["81画理論", "数秘術性格", "統合アドバイス", "相性分析", "運気アップ法"],
      color: "bg-purple-500",
      popular: true,
    },
    {
      id: "fortune",
      name: "運勢特化診断",
      icon: <Star className="w-5 h-5" />,
      time: "1分",
      description: "伝統的な81画理論による運勢分析",
      features: ["数字組み合わせ", "運勢スコア", "吉凶判定"],
      color: "bg-green-500",
      popular: false,
    },
    {
      id: "personality",
      name: "性格特化診断",
      icon: <Heart className="w-5 h-5" />,
      time: "1分",
      description: "数秘術による愛車の性格分析",
      features: ["車の性格", "運転スタイル", "適性分析"],
      color: "bg-pink-500",
      popular: false,
    },
  ]

  return (
    <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="text-center">🎯 診断モードを選択</CardTitle>
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          あなたの知りたい内容に合わせて診断方法を選べます
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {modes.map((mode) => (
            <div
              key={mode.id}
              className={`relative p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedMode === mode.id
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                  : "border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500"
              }`}
              onClick={() => onModeSelect(mode.id as any)}
            >
              {mode.popular && <Badge className="absolute -top-2 -right-2 bg-red-500 text-white">人気</Badge>}

              <div className="flex items-start gap-3 mb-3">
                <div className={`p-2 rounded-lg ${mode.color} text-white`}>{mode.icon}</div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800 dark:text-gray-100">{mode.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Clock className="w-3 h-3 text-gray-500" />
                    <span className="text-xs text-gray-500">{mode.time}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{mode.description}</p>

              <div className="space-y-1">
                {mode.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">{feature}</span>
                  </div>
                ))}
              </div>

              {selectedMode === mode.id && (
                <div className="mt-3 p-2 bg-blue-100 dark:bg-blue-900/30 rounded text-center">
                  <span className="text-xs text-blue-700 dark:text-blue-300 font-medium">選択中</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-lg">
          <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">💡 おすすめの使い分け</h4>
          <div className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
            <p>
              <strong>初回の方:</strong> 詳細統合診断で全体像を把握
            </p>
            <p>
              <strong>時間がない方:</strong> クイック診断で要点をチェック
            </p>
            <p>
              <strong>特定の興味:</strong> 運勢特化 or 性格特化診断
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
