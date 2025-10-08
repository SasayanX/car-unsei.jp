"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Wifi, WifiOff, RefreshCw } from "lucide-react"

export function OfflineIndicator() {
  const [isOnline, setIsOnline] = useState(true)
  const [showIndicator, setShowIndicator] = useState(false)

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true)
      setShowIndicator(true)
      // 3秒後に非表示
      setTimeout(() => setShowIndicator(false), 3000)
    }

    const handleOffline = () => {
      setIsOnline(false)
      setShowIndicator(true)
    }

    // 初期状態の設定
    setIsOnline(navigator.onLine)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  if (!showIndicator && isOnline) return null

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <Card className={`${isOnline ? "bg-green-100 border-green-300" : "bg-red-100 border-red-300"} shadow-lg`}>
        <CardContent className="p-3">
          <div className="flex items-center gap-2">
            {isOnline ? (
              <>
                <Wifi className="w-5 h-5 text-green-600" />
                <span className="text-green-800 font-medium">オンラインに復旧しました</span>
                <RefreshCw className="w-4 h-4 text-green-600 animate-spin" />
              </>
            ) : (
              <>
                <WifiOff className="w-5 h-5 text-red-600" />
                <span className="text-red-800 font-medium">オフラインモード</span>
                <span className="text-red-600 text-sm">キャッシュデータで動作中</span>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
