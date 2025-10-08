"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { historyStorage, favoriteStorage } from "../utils/storage"
import { Database, Wifi, WifiOff, CheckCircle, XCircle } from "lucide-react"

export function OfflineStorageTest() {
  const [isOnline, setIsOnline] = useState(true)
  const [testResults, setTestResults] = useState<{
    localStorage: boolean
    historyAccess: boolean
    favoriteAccess: boolean
    cacheStatus: string
  }>({
    localStorage: false,
    historyAccess: false,
    favoriteAccess: false,
    cacheStatus: "未確認",
  })

  useEffect(() => {
    setIsOnline(navigator.onLine)

    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    // オフライン機能のテスト
    runOfflineTests()

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  const runOfflineTests = async () => {
    const results = {
      localStorage: false,
      historyAccess: false,
      favoriteAccess: false,
      cacheStatus: "未確認",
    }

    // LocalStorage テスト
    try {
      localStorage.setItem("test", "value")
      localStorage.removeItem("test")
      results.localStorage = true
    } catch (error) {
      console.error("LocalStorage test failed:", error)
    }

    // 履歴アクセステスト
    try {
      const history = historyStorage.getAll()
      results.historyAccess = Array.isArray(history)
    } catch (error) {
      console.error("History access test failed:", error)
    }

    // お気に入りアクセステスト
    try {
      const favorites = favoriteStorage.getAll()
      results.favoriteAccess = Array.isArray(favorites)
    } catch (error) {
      console.error("Favorites access test failed:", error)
    }

    // Cache API テスト
    if ("caches" in window) {
      try {
        const cacheNames = await caches.keys()
        results.cacheStatus = cacheNames.length > 0 ? `${cacheNames.length}個のキャッシュ` : "キャッシュなし"
      } catch (error) {
        results.cacheStatus = "アクセス不可"
      }
    } else {
      results.cacheStatus = "未対応"
    }

    setTestResults(results)
  }

  const testOfflineFunction = async () => {
    // オフライン機能の実際のテスト
    try {
      // 履歴に新しいアイテムを追加
      const testAnalysis = {
        originalAddress: "テスト住所123",
        numbers: [1, 2, 3],
        combinations: [12, 23],
        individualAnalysis: [{ number: 1, score: 95, type: "大吉", description: "テスト" }],
        combinationAnalysis: [],
        totalScore: 95,
        averageScore: 95,
        weightedScore: 95,
      }

      historyStorage.add("テスト住所123", testAnalysis)

      // 追加されたかチェック
      const history = historyStorage.getAll()
      const added = history.some((item) => item.address === "テスト住所123")

      if (added) {
        alert("✅ オフライン機能テスト成功！\n履歴の保存・読み込みが正常に動作しています。")
        // テストデータを削除
        const testItem = history.find((item) => item.address === "テスト住所123")
        if (testItem) {
          historyStorage.remove(testItem.id)
        }
      } else {
        alert("❌ オフライン機能テスト失敗")
      }
    } catch (error) {
      alert("❌ オフライン機能テストでエラーが発生しました")
      console.error("Offline test error:", error)
    }
  }

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Database className="w-5 h-5 text-blue-600" />
          オフライン機能テスト
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* 接続状態 */}
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            {isOnline ? <Wifi className="w-5 h-5 text-green-600" /> : <WifiOff className="w-5 h-5 text-red-600" />}
            <span className="font-medium">{isOnline ? "オンライン" : "オフライン"}</span>
          </div>
          <Badge variant={isOnline ? "default" : "destructive"}>{isOnline ? "接続中" : "切断中"}</Badge>
        </div>

        {/* テスト結果 */}
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-800">機能テスト結果</h4>

          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <span className="text-sm">LocalStorage</span>
              <div className="flex items-center gap-1">
                {testResults.localStorage ? (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-600" />
                )}
                <span className="text-xs">{testResults.localStorage ? "利用可能" : "利用不可"}</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <span className="text-sm">履歴機能</span>
              <div className="flex items-center gap-1">
                {testResults.historyAccess ? (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-600" />
                )}
                <span className="text-xs">{testResults.historyAccess ? "動作中" : "エラー"}</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <span className="text-sm">お気に入り機能</span>
              <div className="flex items-center gap-1">
                {testResults.favoriteAccess ? (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                ) : (
                  <XCircle className="w-4 h-4 text-red-600" />
                )}
                <span className="text-xs">{testResults.favoriteAccess ? "動作中" : "エラー"}</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <span className="text-sm">キャッシュ</span>
              <span className="text-xs text-gray-600">{testResults.cacheStatus}</span>
            </div>
          </div>
        </div>

        {/* テスト実行ボタン */}
        <div className="pt-4 border-t">
          <Button onClick={testOfflineFunction} className="w-full" variant="outline">
            オフライン機能をテスト
          </Button>
          <p className="text-xs text-gray-500 mt-2 text-center">履歴の保存・読み込み機能をテストします</p>
        </div>

        {/* オフライン時の注意事項 */}
        {!isOnline && (
          <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
            <h5 className="font-semibold text-yellow-800 mb-2">⚠️ オフライン時の制限</h5>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• 新しい診断は過去データを使用</li>
              <li>• 運気アップアイテムのAmazon検索は利用不可</li>
              <li>• アプリ共有機能は制限される場合があります</li>
              <li>• 接続復旧時に最新データに同期されます</li>
            </ul>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
