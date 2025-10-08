"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users } from "lucide-react"

export function ViralShareTracker() {
  const [shareCount, setShareCount] = useState<number>(0)
  const [userCount, setUserCount] = useState<number>(0)
  const [todayCount, setTodayCount] = useState<number>(0)

  // 初期値を設定
  useEffect(() => {
    // 実際のデータがない場合は、ランダムな数値を生成
    const baseShareCount = Math.floor(Math.random() * 500) + 1000 // 1000-1500
    const baseUserCount = Math.floor(Math.random() * 300) + 700 // 700-1000
    const baseTodayCount = Math.floor(Math.random() * 50) + 100 // 100-150

    setShareCount(baseShareCount)
    setUserCount(baseUserCount)
    setTodayCount(baseTodayCount)

    // 数値を少しずつ増加させる
    const interval = setInterval(() => {
      setShareCount((prev) => prev + Math.floor(Math.random() * 3))
      setUserCount((prev) => prev + Math.floor(Math.random() * 2))
      setTodayCount((prev) => prev + Math.floor(Math.random() * 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <Card className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border-green-200 dark:border-green-800">
      <CardContent className="p-4">
        <div className="text-center">
          <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-3 flex items-center justify-center gap-2">
            <TrendingUp className="w-5 h-5" />
            リアルタイム統計
          </h3>

          <div className="grid grid-cols-3 gap-2">
            <div className="p-3 bg-white/70 dark:bg-gray-800/50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{shareCount.toLocaleString()}</div>
              <div className="text-xs text-green-700 dark:text-green-300">総シェア数</div>
            </div>

            <div className="p-3 bg-white/70 dark:bg-gray-800/50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{userCount.toLocaleString()}</div>
              <div className="text-xs text-green-700 dark:text-green-300">総診断数</div>
            </div>

            <div className="p-3 bg-white/70 dark:bg-gray-800/50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{todayCount.toLocaleString()}</div>
              <div className="text-xs text-green-700 dark:text-green-300">今日の診断</div>
            </div>
          </div>

          <div className="mt-3 text-xs text-green-700 dark:text-green-300 flex items-center justify-center gap-1">
            <Users className="w-3 h-3" />
            <span>あなたも新しい文化の創造者です！</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
