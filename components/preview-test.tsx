"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PreviewTest() {
  const [count, setCount] = useState(0)
  const [status, setStatus] = useState("正常")

  const handleTest = () => {
    try {
      setCount((prev) => prev + 1)
      setStatus("テスト成功")
      console.log("テスト実行:", count + 1)
    } catch (error) {
      setStatus("エラー発生")
      console.error("テストエラー:", error)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-4">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">プレビューテスト</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <p className="text-lg">カウント: {count}</p>
              <p className="text-sm text-gray-600">ステータス: {status}</p>
            </div>

            <Button onClick={handleTest} className="w-full">
              テスト実行
            </Button>

            <div className="text-xs text-gray-500 space-y-1">
              <p>✅ React レンダリング</p>
              <p>✅ State 管理</p>
              <p>✅ イベントハンドリング</p>
              <p>✅ UI コンポーネント</p>
            </div>

            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-green-700">
                このページが正常に表示されていれば、基本的な機能は動作しています。
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
