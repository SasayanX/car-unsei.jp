"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, BellOff, Smartphone, Wifi, WifiOff, Share, Home, AlertCircle } from "lucide-react"

export function PWAFeatures() {
  const [isOnline, setIsOnline] = useState(true)
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission>("default")
  const [isInstalled, setIsInstalled] = useState(false)
  const [swRegistration, setSwRegistration] = useState<ServiceWorkerRegistration | null>(null)
  const [swError, setSwError] = useState<string | null>(null)

  useEffect(() => {
    // オンライン状態の監視
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)

    // 通知許可状態の確認
    if ("Notification" in window) {
      setNotificationPermission(Notification.permission)
    }

    // PWAインストール状態の確認
    const checkInstallStatus = () => {
      const isStandalone = window.matchMedia("(display-mode: standalone)").matches
      const isInWebAppiOS = (window.navigator as any).standalone === true
      setIsInstalled(isStandalone || isInWebAppiOS)
    }

    checkInstallStatus()

    // Service Worker の登録
    if ("serviceWorker" in navigator) {
      // プレビュー環境では Service Worker をスキップ
      const isPreviewEnvironment =
        window.location.hostname.includes("vusercontent.net") ||
        window.location.hostname.includes("localhost") ||
        window.location.hostname.includes("vercel.app")

      if (isPreviewEnvironment) {
        console.log("Preview environment detected, skipping Service Worker registration")
        setSwError("プレビュー環境のため Service Worker は無効です")
      } else {
        navigator.serviceWorker
          .register("/sw.js", {
            scope: "/",
            updateViaCache: "none",
          })
          .then((registration) => {
            console.log("Service Worker registered successfully:", registration)
            setSwRegistration(registration)
            setSwError(null)
          })
          .catch((error) => {
            console.error("Service Worker registration failed:", error)
            setSwError("本番環境でのみ利用可能")
          })
      }
    } else {
      setSwError("Service Worker not supported in this browser")
    }

    return () => {
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  const requestNotificationPermission = async () => {
    if ("Notification" in window) {
      try {
        const permission = await Notification.requestPermission()
        setNotificationPermission(permission)

        if (permission === "granted") {
          new Notification("住まい運勢チェッカー", {
            body: "通知が有効になりました！毎日の運勢をお知らせします。",
            icon: "/icon-192x192.png",
          })
        }
      } catch (error) {
        console.error("Notification permission request failed:", error)
      }
    }
  }

  const sendTestNotification = () => {
    if (notificationPermission === "granted") {
      new Notification("テスト通知", {
        body: "住まい運勢チェッカーのテスト通知です！",
        icon: "/icon-192x192.png",
        badge: "/icon-192x192.png",
      })
    }
  }

  const shareApp = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "住まい運勢チェッカー",
          text: "あなたの住所に宿る運勢パワーを診断してみませんか？",
          url: window.location.href,
        })
      } catch (error) {
        console.error("Share failed:", error)
      }
    } else {
      // フォールバック: クリップボードにコピー
      try {
        await navigator.clipboard.writeText(window.location.href)
        alert("アプリのURLをクリップボードにコピーしました！")
      } catch (error) {
        console.error("Clipboard copy failed:", error)
      }
    }
  }

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-purple-600" />
          アプリ機能
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Service Worker エラー表示 */}
        {swError && (
          <div className="flex items-center gap-2 p-3 bg-red-50 rounded-lg border border-red-200">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <div className="flex-1">
              <span className="text-sm font-medium text-red-800">Service Worker エラー</span>
              <p className="text-xs text-red-600 mt-1">{swError}</p>
            </div>
          </div>
        )}

        {/* インストール状態 */}
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Home className={`w-5 h-5 ${isInstalled ? "text-green-600" : "text-gray-600"}`} />
            <span className="font-medium">{isInstalled ? "アプリとしてインストール済み" : "ブラウザで表示中"}</span>
          </div>
          {isInstalled && <span className="text-sm text-green-600">✓ インストール済み</span>}
        </div>

        {/* オンライン状態 */}
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            {isOnline ? <Wifi className="w-5 h-5 text-green-600" /> : <WifiOff className="w-5 h-5 text-red-600" />}
            <span className="font-medium">{isOnline ? "オンライン" : "オフライン"}</span>
          </div>
          <span className="text-sm text-gray-600">
            {isOnline ? "最新データ利用可能" : swRegistration ? "キャッシュデータで動作" : "制限モード"}
          </span>
        </div>

        {/* 通知設定 */}
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            {notificationPermission === "granted" ? (
              <Bell className="w-5 h-5 text-green-600" />
            ) : (
              <BellOff className="w-5 h-5 text-gray-600" />
            )}
            <span className="font-medium">プッシュ通知</span>
          </div>
          <div className="flex gap-2">
            {notificationPermission === "default" && (
              <Button onClick={requestNotificationPermission} size="sm" variant="outline">
                有効にする
              </Button>
            )}
            {notificationPermission === "granted" && (
              <Button onClick={sendTestNotification} size="sm" variant="outline">
                テスト送信
              </Button>
            )}
            {notificationPermission === "granted" && <span className="text-sm text-green-600">有効</span>}
            {notificationPermission === "denied" && <span className="text-sm text-red-600">無効</span>}
          </div>
        </div>

        {/* アプリ共有 */}
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Share className="w-5 h-5 text-blue-600" />
            <span className="font-medium">アプリを共有</span>
          </div>
          <Button onClick={shareApp} size="sm" variant="outline">
            <Share className="w-4 h-4 mr-1" />
            共有
          </Button>
        </div>

        {/* PWA特徴 */}
        <div className="grid grid-cols-2 gap-3">
          <div className="text-center p-3 bg-purple-50 rounded-lg">
            <div className="text-2xl mb-1">📱</div>
            <div className="text-sm font-medium">アプリライク</div>
            <div className="text-xs text-gray-600">ネイティブアプリのような操作感</div>
          </div>
          <div className="text-center p-3 bg-blue-50 rounded-lg">
            <div className="text-2xl mb-1">⚡</div>
            <div className="text-sm font-medium">高速起動</div>
            <div className="text-xs text-gray-600">瞬時に起動してすぐ使える</div>
          </div>
          <div className="text-center p-3 bg-green-50 rounded-lg">
            <div className="text-2xl mb-1">📶</div>
            <div className="text-sm font-medium">オフライン対応</div>
            <div className="text-xs text-gray-600">
              {swRegistration ? "ネット接続なしでも利用可能" : "Service Worker待機中"}
            </div>
          </div>
          <div className="text-center p-3 bg-orange-50 rounded-lg">
            <div className="text-2xl mb-1">🔔</div>
            <div className="text-sm font-medium">プッシュ通知</div>
            <div className="text-xs text-gray-600">重要なお知らせを受信</div>
          </div>
        </div>

        {/* 使用方法のヒント */}
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-2">💡 PWAの使い方</h4>
          <ul className="text-sm text-blue-700 space-y-1">
            <li>• ホーム画面に追加してアプリのように使用</li>
            <li>• オフラインでも過去の診断結果を確認可能</li>
            <li>• 通知を有効にして運勢情報をお届け</li>
            <li>• 友達にアプリを共有して一緒に楽しもう</li>
          </ul>
        </div>

        {/* Service Worker 状態 */}
        <div className="p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">Service Worker</span>
            <span
              className={`text-xs px-2 py-1 rounded ${
                swRegistration
                  ? "bg-green-100 text-green-800"
                  : swError?.includes("プレビュー") || swError?.includes("本番環境")
                    ? "bg-blue-100 text-blue-800"
                    : "bg-yellow-100 text-yellow-800"
              }`}
            >
              {swRegistration
                ? "アクティブ"
                : swError?.includes("プレビュー") || swError?.includes("本番環境")
                  ? "プレビュー環境"
                  : "登録中"}
            </span>
          </div>
          {swError && !swRegistration && <p className="text-xs text-gray-500 mt-1">{swError}</p>}
        </div>
      </CardContent>
    </Card>
  )
}
