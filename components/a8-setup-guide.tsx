"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Search, ExternalLink, Target, DollarSign, Users } from "lucide-react"
import { useState } from "react"

export function A8SetupGuide() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  const toggleStep = (stepNumber: number) => {
    setCompletedSteps((prev) =>
      prev.includes(stepNumber) ? prev.filter((n) => n !== stepNumber) : [...prev, stepNumber],
    )
  }

  const recommendedPrograms = [
    {
      category: "不動産検索",
      programs: [
        { name: "SUUMO", commission: "500-2000円", difficulty: "易", priority: "高" },
        { name: "HOME'S", commission: "300-1500円", difficulty: "易", priority: "高" },
        { name: "アパマンショップ", commission: "1000-3000円", difficulty: "中", priority: "中" },
        { name: "エイブル", commission: "800-2500円", difficulty: "中", priority: "中" },
      ],
    },
    {
      category: "引っ越し",
      programs: [
        { name: "引っ越し侍", commission: "2000-5000円", difficulty: "易", priority: "高" },
        { name: "SUUMO引っ越し", commission: "1500-4000円", difficulty: "易", priority: "高" },
        { name: "サカイ引越センター", commission: "3000-8000円", difficulty: "中", priority: "中" },
        { name: "アート引越センター", commission: "2500-6000円", difficulty: "中", priority: "中" },
      ],
    },
    {
      category: "不動産投資",
      programs: [
        { name: "不動産投資セミナー", commission: "5000-20000円", difficulty: "高", priority: "低" },
        { name: "不動産クラウドファンディング", commission: "1000-10000円", difficulty: "中", priority: "中" },
      ],
    },
  ]

  const setupSteps = [
    {
      id: 1,
      title: "A8.net管理画面にログイン",
      description: "契約完了後、管理画面にアクセス",
      action: "ログイン確認",
    },
    {
      id: 2,
      title: "プログラム検索",
      description: "「不動産」「引っ越し」で検索",
      action: "検索実行",
    },
    {
      id: 3,
      title: "提携申請",
      description: "おすすめプログラムに提携申請",
      action: "申請送信",
    },
    {
      id: 4,
      title: "承認待ち",
      description: "1-7日で承認通知が届く",
      action: "承認確認",
    },
    {
      id: 5,
      title: "広告リンク取得",
      description: "承認後、広告リンクを取得",
      action: "リンク取得",
    },
    {
      id: 6,
      title: "サイトに実装",
      description: "取得したリンクをサイトに設置",
      action: "実装完了",
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "易":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "中":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "高":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "高":
        return "bg-red-500"
      case "中":
        return "bg-yellow-500"
      case "低":
        return "bg-gray-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="space-y-6">
      {/* セットアップステップ */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            A8.net セットアップ手順
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {setupSteps.map((step) => (
              <div
                key={step.id}
                className={`flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                  completedSteps.includes(step.id)
                    ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-700"
                    : "bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                }`}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleStep(step.id)}
                  className={`p-1 ${
                    completedSteps.includes(step.id) ? "text-green-600 dark:text-green-400" : "text-gray-400"
                  }`}
                >
                  <CheckCircle className="w-5 h-5" />
                </Button>
                <div className="flex-1">
                  <div className="font-medium text-gray-900 dark:text-gray-100">
                    STEP {step.id}: {step.title}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{step.description}</div>
                </div>
                <Badge variant="outline">{step.action}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* おすすめプログラム */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-600" />
            住所診断と相性抜群のプログラム
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {recommendedPrograms.map((category) => (
              <div key={category.category}>
                <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {category.category}
                </h3>
                <div className="grid gap-3">
                  {category.programs.map((program) => (
                    <div
                      key={program.name}
                      className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border"
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-2 h-8 rounded ${getPriorityColor(program.priority)}`} />
                        <div>
                          <div className="font-medium text-gray-900 dark:text-gray-100">{program.name}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">報酬: {program.commission}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className={getDifficultyColor(program.difficulty)}>{program.difficulty}</Badge>
                        <Badge variant="outline">優先度: {program.priority}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 検索のコツ */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="w-5 h-5 text-purple-600" />
            A8.net プログラム検索のコツ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">検索キーワード</h4>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• 「不動産」</li>
                  <li>• 「引っ越し」</li>
                  <li>• 「賃貸」</li>
                  <li>• 「住宅」</li>
                  <li>• 「マンション」</li>
                </ul>
              </div>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">提携のコツ</h4>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• サイト内容を詳しく記載</li>
                  <li>• 住所診断との関連性をアピール</li>
                  <li>• 真面目な運営姿勢を示す</li>
                  <li>• 複数プログラムに同時申請</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 次のアクション */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200">🎯 今すぐやること</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <Button
                onClick={() => window.open("https://www.a8.net/", "_blank")}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                A8.net ログイン
              </Button>
              <Button
                variant="outline"
                className="border-purple-300 text-purple-700 dark:border-purple-600 dark:text-purple-300"
              >
                プログラム検索
              </Button>
              <Button
                variant="outline"
                className="border-green-300 text-green-700 dark:border-green-600 dark:text-green-300"
              >
                提携申請開始
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
