"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, X, Smartphone, Menu } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [showManualInstall, setShowManualInstall] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [isAndroid, setIsAndroid] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)

  useEffect(() => {
    // デバイス判定
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent)
    const android = /Android/.test(navigator.userAgent)
    setIsIOS(iOS)
    setIsAndroid(android)

    // スタンドアロンモード判定
    const standalone = window.matchMedia("(display-mode: standalone)").matches
    setIsStandalone(standalone)

    // Android Chrome用のインストールプロンプト
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)

      const dismissed = localStorage.getItem("pwa-install-dismissed")
      if (dismissed) {
        const dismissedTime = Number.parseInt(dismissed)
        const now = Date.now()
        const hoursPassed = (now - dismissedTime) / (1000 * 60 * 60)

        if (hoursPassed < 24) {
          return
        } else {
          localStorage.removeItem("pwa-install-dismissed")
        }
      }

      setShowInstallPrompt(true)
    }

    window.addEventListener("beforeinstallprompt", handler)

    // 手動インストール案内の表示判定
    const checkManualInstall = () => {
      if (!standalone && (android || iOS)) {
        const manualDismissed = localStorage.getItem("pwa-manual-dismissed")
        if (!manualDismissed) {
          setTimeout(() => {
            if (!deferredPrompt && !standalone) {
              setShowManualInstall(true)
            }
          }, 5000) // 5秒後に表示
        } else {
          const dismissedTime = Number.parseInt(manualDismissed)
          const now = Date.now()
          const hoursPassed = (now - dismissedTime) / (1000 * 60 * 60)

          if (hoursPassed >= 24) {
            localStorage.removeItem("pwa-manual-dismissed")
            setTimeout(() => {
              if (!deferredPrompt && !standalone) {
                setShowManualInstall(true)
              }
            }, 5000)
          }
        }
      }
    }

    checkManualInstall()

    return () => {
      window.removeEventListener("beforeinstallprompt", handler)
    }
  }, [deferredPrompt, isStandalone])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice

    if (outcome === "accepted") {
      console.log("PWAがインストールされました")
    }

    setDeferredPrompt(null)
    setShowInstallPrompt(false)
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
    setDeferredPrompt(null)
    localStorage.setItem("pwa-install-dismissed", Date.now().toString())
  }

  const handleManualDismiss = () => {
    setShowManualInstall(false)
    localStorage.setItem("pwa-manual-dismissed", Date.now().toString())
  }

  // 既にインストール済みの場合は表示しない
  if (isStandalone) {
    return null
  }

  // 自動インストールプロンプト（Android Chrome）
  if (showInstallPrompt && deferredPrompt) {
    return (
      <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-80">
        <Card className="bg-white shadow-lg border-purple-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Smartphone className="w-6 h-6 text-purple-600 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">アプリをインストール</h3>
                <p className="text-sm text-gray-600 mb-3">ホーム画面に追加して、いつでも簡単にアクセス！</p>
                <div className="flex gap-2">
                  <Button onClick={handleInstall} size="sm" className="bg-purple-600 hover:bg-purple-700">
                    <Download className="w-4 h-4 mr-1" />
                    インストール
                  </Button>
                  <Button onClick={handleDismiss} variant="outline" size="sm">
                    後で
                  </Button>
                </div>
              </div>
              <Button onClick={handleDismiss} variant="ghost" size="sm" className="p-1 h-auto">
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // iOS用の手動インストール案内
  if (showManualInstall && isIOS) {
    return (
      <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-80">
        <Card className="bg-white shadow-lg border-blue-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Smartphone className="w-6 h-6 text-blue-600 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">アプリとして追加</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Safari の共有ボタン <span className="inline-block">📤</span> から
                  <br />
                  「ホーム画面に追加」を選択してください
                </p>
                <Button onClick={handleManualDismiss} variant="outline" size="sm">
                  <X className="w-4 h-4 mr-1" />
                  閉じる
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Android用の手動インストール案内
  if (showManualInstall && isAndroid) {
    return (
      <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-80">
        <Card className="bg-white shadow-lg border-green-200">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Menu className="w-6 h-6 text-green-600 mt-1" />
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">アプリとして追加</h3>
                <p className="text-sm text-gray-600 mb-2">
                  ブラウザのメニュー（⋮）から
                  <br />
                  「アプリをインストール」または
                  <br />
                  「ホーム画面に追加」を選択
                </p>
                <div className="bg-green-50 p-2 rounded text-xs text-green-700 mb-3">
                  💡 アンインストール後は手動でのインストールが必要です
                </div>
                <Button onClick={handleManualDismiss} variant="outline" size="sm">
                  <X className="w-4 h-4 mr-1" />
                  閉じる
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return null
}
