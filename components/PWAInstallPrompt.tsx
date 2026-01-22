"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, X, Smartphone, RefreshCw, AlertCircle, CheckCircle, Users } from "lucide-react"

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [showManualInstall, setShowManualInstall] = useState(false)
  const [isAndroid, setIsAndroid] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)
  const [showDevPanel, setShowDevPanel] = useState(false)
  const [debugInfo, setDebugInfo] = useState<any>({})
  const [pwaScore, setPwaScore] = useState(0)
  const [engagementScore, setEngagementScore] = useState(0)
  const [showEngagementPrompt, setShowEngagementPrompt] = useState(false)

  // ユーザーエンゲージメントを追跡
  const trackEngagement = () => {
    const engagement = {
      clicks: Number.parseInt(localStorage.getItem("pwa-clicks") || "0"),
      scrolls: Number.parseInt(localStorage.getItem("pwa-scrolls") || "0"),
      timeSpent: Number.parseInt(localStorage.getItem("pwa-time-spent") || "0"),
      visits: Number.parseInt(localStorage.getItem("pwa-visits") || "0"),
      interactions: Number.parseInt(localStorage.getItem("pwa-interactions") || "0"),
    }

    // エンゲージメントスコアを計算（100点満点）
    let score = 0
    score += Math.min(engagement.clicks * 5, 25) // クリック数（最大25点）
    score += Math.min(engagement.scrolls * 3, 15) // スクロール数（最大15点）
    score += Math.min((engagement.timeSpent / 1000 / 60) * 10, 30) // 滞在時間（最大30点）
    score += Math.min(engagement.visits * 10, 20) // 訪問回数（最大20点）
    score += Math.min(engagement.interactions * 2, 10) // その他の相互作用（最大10点）

    setEngagementScore(Math.round(score))
    return { engagement, score: Math.round(score) }
  }

  useEffect(() => {
    // デバッグモード判定
    const isDebug =
      window.location.hostname === "localhost" ||
      window.location.search.includes("debug=true") ||
      window.location.search.includes("pwa=debug")
    setShowDevPanel(isDebug)

    // デバイス・ブラウザ判定
    const userAgent = navigator.userAgent || ""
    const isMobileDevice = /Mobile|Android|iPhone|iPad|iPod|Windows Phone/i.test(userAgent)
    const isAndroidDevice = /Android/i.test(userAgent)
    const isIOSDevice = /iPhone|iPad|iPod/i.test(userAgent)
    const isChrome = /Chrome/.test(userAgent) && !/Edg/.test(userAgent)
    const isSafari = /Safari/.test(userAgent) && !/Chrome/.test(userAgent)
    const isHttps = window.location.protocol === "https:" || window.location.hostname === "localhost"

    setIsAndroid(isAndroidDevice)
    setIsIOS(isIOSDevice)
    setIsMobile(isMobileDevice)

    // スタンドアロンモード判定
    const standalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window as any).navigator.standalone === true ||
      window.location.search.includes("utm_source=pwa")
    setIsStandalone(standalone)

    // 訪問回数を記録
    const visits = Number.parseInt(localStorage.getItem("pwa-visits") || "0") + 1
    localStorage.setItem("pwa-visits", visits.toString())

    // 滞在時間を記録
    const startTime = Date.now()
    const updateTimeSpent = () => {
      const timeSpent = Number.parseInt(localStorage.getItem("pwa-time-spent") || "0")
      localStorage.setItem("pwa-time-spent", (timeSpent + Date.now() - startTime).toString())
    }

    // PWA要件チェック
    const checkPWARequirements = async () => {
      let score = 0
      const requirements = {
        https: isHttps,
        serviceWorker: false,
        manifest: false,
        installable: false,
        icons: false,
        engagement: false,
      }

      // Service Worker チェック
      if ("serviceWorker" in navigator) {
        try {
          const registration = await navigator.serviceWorker.getRegistration()
          requirements.serviceWorker = !!registration
          if (registration) score += 20
        } catch (e) {
          console.error("Service Worker check failed:", e)
        }
      }

      // Manifest チェック
      try {
        const response = await fetch("/manifest.json")
        if (response.ok && response.headers.get("content-type")?.includes("application/json")) {
          const manifestText = await response.text()
          try {
            const manifest = JSON.parse(manifestText)
            requirements.manifest = !!(manifest.name && manifest.start_url && manifest.display)
            requirements.icons = !!(manifest.icons && manifest.icons.length >= 2)
            if (requirements.manifest) score += 30
            if (requirements.icons) score += 20
          } catch (parseError) {
            console.error("Manifest JSON parse failed:", parseError)
            requirements.manifest = false
            requirements.icons = false
          }
        } else {
          console.warn(
            "Manifest not found or invalid content-type:",
            response.status,
            response.headers.get("content-type"),
          )
          requirements.manifest = false
          requirements.icons = false
        }
      } catch (e) {
        console.error("Manifest fetch failed:", e)
        requirements.manifest = false
        requirements.icons = false
      }

      // HTTPS チェック
      if (isHttps) {
        requirements.https = true
        score += 20
      }

      // エンゲージメントチェック
      const { engagement, score: engScore } = trackEngagement()
      requirements.engagement = engScore >= 30
      if (requirements.engagement) score += 10

      setPwaScore(score)

      const debug = {
        userAgent,
        isAndroid: isAndroidDevice,
        isIOS: isIOSDevice,
        isMobile: isMobileDevice,
        isChrome,
        isSafari,
        isStandalone: standalone,
        isHttps,
        hostname: window.location.hostname,
        manifestSupport: "onbeforeinstallprompt" in window,
        requirements,
        score,
        engagement,
        engagementScore: engScore,
        visits,
      }

      setDebugInfo(debug)
      console.log("PWA Requirements Check:", debug)
    }

    checkPWARequirements()

    // beforeinstallpromptイベントリスナー
    const handler = (e: Event) => {
      console.log("🎉 beforeinstallprompt event fired!", e)
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)

      // 却下履歴をチェック
      const dismissed = localStorage.getItem("pwa-install-dismissed")
      if (dismissed) {
        const dismissedTime = Number.parseInt(dismissed)
        const now = Date.now()
        const hoursPassed = (now - dismissedTime) / (1000 * 60 * 60)

        if (hoursPassed < 1) {
          console.log("PWA prompt dismissed recently, skipping")
          return
        } else {
          localStorage.removeItem("pwa-install-dismissed")
        }
      }

      setTimeout(() => {
        setShowInstallPrompt(true)
      }, 1000)
    }

    window.addEventListener("beforeinstallprompt", handler)

    // エンゲージメント追跡イベント
    const clickHandler = () => {
      const clicks = Number.parseInt(localStorage.getItem("pwa-clicks") || "0") + 1
      localStorage.setItem("pwa-clicks", clicks.toString())
      trackEngagement()
    }

    const scrollHandler = () => {
      const scrolls = Number.parseInt(localStorage.getItem("pwa-scrolls") || "0") + 1
      localStorage.setItem("pwa-scrolls", scrolls.toString())
      trackEngagement()
    }

    const interactionHandler = () => {
      const interactions = Number.parseInt(localStorage.getItem("pwa-interactions") || "0") + 1
      localStorage.setItem("pwa-interactions", interactions.toString())
      trackEngagement()
    }

    // イベントリスナーを追加
    document.addEventListener("click", clickHandler)
    document.addEventListener("scroll", scrollHandler, { passive: true })
    document.addEventListener("touchstart", interactionHandler, { passive: true })
    document.addEventListener("keydown", interactionHandler)

    // 手動インストールバナーの表示判定
    const checkManualInstall = () => {
      if (!standalone && isChrome) {
        const manualDismissed = localStorage.getItem("pwa-manual-dismissed")
        const forceSkip = localStorage.getItem("pwa-force-skip")
        const lastShown = Number.parseInt(localStorage.getItem("pwa-manual-last-shown") || "0")
        const now = Date.now()
        const hoursSinceLastShown = (now - lastShown) / (1000 * 60 * 60)

        // 強制スキップされている場合は表示しない
        if (forceSkip) {
          return
        }

        // エンゲージメントスコアを取得
        const { score: currentEngScore } = trackEngagement()

        // エンゲージメントスコアが30以上、または訪問回数が2回以上の場合
        if (currentEngScore >= 30 || visits >= 2 || (!manualDismissed && hoursSinceLastShown > 1)) {
          setTimeout(() => {
            if (!deferredPrompt) {
              console.log("Showing manual install banner (engagement:", currentEngScore, ")")
              setShowManualInstall(true)
              localStorage.setItem("pwa-manual-last-shown", now.toString())
            }
          }, 3000)
        }
      }
    }

    // エンゲージメント促進プロンプトの表示判定
    const checkEngagementPrompt = () => {
      if (!standalone && isAndroidDevice && isChrome && engagementScore < 30) {
        const engagementPromptShown = localStorage.getItem("pwa-engagement-prompt-shown")
        if (!engagementPromptShown && visits >= 1) {
          setTimeout(() => {
            setShowEngagementPrompt(true)
            localStorage.setItem("pwa-engagement-prompt-shown", "true")
          }, 10000) // 10秒後に表示
        }
      }
    }

    setTimeout(checkManualInstall, 2000)
    setTimeout(checkEngagementPrompt, 8000)

    // クリーンアップ
    return () => {
      window.removeEventListener("beforeinstallprompt", handler)
      document.removeEventListener("click", clickHandler)
      document.removeEventListener("scroll", scrollHandler)
      document.removeEventListener("touchstart", interactionHandler)
      document.removeEventListener("keydown", interactionHandler)
      updateTimeSpent()
    }
  }, [])

  const handleInstall = async () => {
    if (deferredPrompt) {
      try {
        await deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice
        console.log("Install prompt outcome:", outcome)

        if (outcome === "accepted") {
          console.log("PWA installed successfully!")
        }
      } catch (error) {
        console.error("Install prompt error:", error)
      }

      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    } else {
      console.log("No deferred prompt available, showing manual install")
      setShowManualInstall(true)
    }
  }

  const handleDismiss = () => {
    setShowInstallPrompt(false)
    localStorage.setItem("pwa-install-dismissed", Date.now().toString())
  }

  const handleManualDismiss = (forceSkip = false) => {
    setShowManualInstall(false)
    localStorage.setItem("pwa-manual-dismissed", Date.now().toString())

    if (forceSkip) {
      localStorage.setItem("pwa-force-skip", "true")
    }
  }

  const handleEngagementDismiss = () => {
    setShowEngagementPrompt(false)
  }

  const resetPWAState = async () => {
    const keysToRemove = [
      "pwa-install-dismissed",
      "pwa-manual-dismissed",
      "pwa-installed",
      "pwa-visits",
      "pwa-clicks",
      "pwa-scrolls",
      "pwa-time-spent",
      "pwa-interactions",
      "pwa-manual-last-shown",
      "pwa-force-skip",
      "pwa-engagement-prompt-shown",
    ]

    keysToRemove.forEach((key) => localStorage.removeItem(key))

    if ("serviceWorker" in navigator) {
      try {
        const registration = await navigator.serviceWorker.ready
        if (registration.active) {
          registration.active.postMessage({ type: "CLEAR_CACHE" })
        }
        await registration.update()
      } catch (e) {
        console.error("Failed to update service worker:", e)
      }
    }

    window.location.reload()
  }

  // 既にインストール済みの場合は表示しない（デバッグパネル以外）
  if (isStandalone && !showDevPanel) {
    return null
  }

  return (
    <>
      {/* 強化されたデバッグパネル */}
      {showDevPanel && (
        <div className="fixed top-4 right-4 z-50 bg-white border border-gray-300 rounded-lg p-4 text-xs max-w-sm shadow-lg overflow-auto max-h-[90vh]">
          <div className="font-bold mb-3 text-gray-800 flex justify-between">
            <span>PWA Debug Panel</span>
            <span className="text-xs bg-blue-100 text-blue-800 px-1 rounded">v3.0</span>
          </div>

          <div className="mb-3">
            <div className="font-semibold mb-1">PWA Score: {pwaScore}/100</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
              <div
                className={`h-2 rounded-full ${
                  pwaScore >= 80 ? "bg-green-500" : pwaScore >= 60 ? "bg-yellow-500" : "bg-red-500"
                }`}
                style={{ width: `${pwaScore}%` }}
              ></div>
            </div>
            <div className="font-semibold mb-1">Engagement Score: {engagementScore}/100</div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className={`h-2 rounded-full ${
                  engagementScore >= 50 ? "bg-green-500" : engagementScore >= 30 ? "bg-yellow-500" : "bg-red-500"
                }`}
                style={{ width: `${engagementScore}%` }}
              ></div>
            </div>
          </div>

          <div className="space-y-1 text-xs mb-3">
            <div className="flex items-center gap-2">
              {debugInfo.requirements?.https ? (
                <CheckCircle className="w-3 h-3 text-green-500" />
              ) : (
                <AlertCircle className="w-3 h-3 text-red-500" />
              )}
              <span>HTTPS: {debugInfo.isHttps ? "✅" : "❌"}</span>
            </div>
            <div className="flex items-center gap-2">
              {debugInfo.requirements?.serviceWorker ? (
                <CheckCircle className="w-3 h-3 text-green-500" />
              ) : (
                <AlertCircle className="w-3 h-3 text-red-500" />
              )}
              <span>Service Worker: {debugInfo.requirements?.serviceWorker ? "✅" : "❌"}</span>
            </div>
            <div className="flex items-center gap-2">
              {debugInfo.requirements?.manifest ? (
                <CheckCircle className="w-3 h-3 text-green-500" />
              ) : (
                <AlertCircle className="w-3 h-3 text-red-500" />
              )}
              <span>Manifest: {debugInfo.requirements?.manifest ? "✅" : "❌"}</span>
            </div>
            <div className="flex items-center gap-2">
              {debugInfo.requirements?.icons ? (
                <CheckCircle className="w-3 h-3 text-green-500" />
              ) : (
                <AlertCircle className="w-3 h-3 text-red-500" />
              )}
              <span>Icons: {debugInfo.requirements?.icons ? "✅" : "❌"}</span>
            </div>
            <div className="flex items-center gap-2">
              {debugInfo.requirements?.engagement ? (
                <CheckCircle className="w-3 h-3 text-green-500" />
              ) : (
                <AlertCircle className="w-3 h-3 text-yellow-500" />
              )}
              <span>Engagement: {debugInfo.requirements?.engagement ? "✅" : "❌"}</span>
            </div>
          </div>

          <div className="space-y-1 text-xs mb-3 border-t border-gray-200 pt-2">
            <div className="flex items-center gap-2">
              {debugInfo.isAndroid ? (
                <CheckCircle className="w-3 h-3 text-green-500" />
              ) : (
                <AlertCircle className="w-3 h-3 text-yellow-500" />
              )}
              <span>Android: {debugInfo.isAndroid ? "✅" : "❌"}</span>
            </div>
            <div className="flex items-center gap-2">
              {debugInfo.isChrome ? (
                <CheckCircle className="w-3 h-3 text-green-500" />
              ) : (
                <AlertCircle className="w-3 h-3 text-yellow-500" />
              )}
              <span>Chrome: {debugInfo.isChrome ? "✅" : "❌"}</span>
            </div>
            <div className="flex items-center gap-2">
              {deferredPrompt ? (
                <CheckCircle className="w-3 h-3 text-green-500" />
              ) : (
                <AlertCircle className="w-3 h-3 text-red-500" />
              )}
              <span>Install Prompt: {deferredPrompt ? "✅" : "❌"}</span>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-2 mt-2 text-xs">
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div>Visits: {debugInfo.visits || 0}</div>
              <div>Clicks: {debugInfo.engagement?.clicks || 0}</div>
              <div>Scrolls: {debugInfo.engagement?.scrolls || 0}</div>
              <div>Time: {Math.round((debugInfo.engagement?.timeSpent || 0) / 1000)}s</div>
            </div>
          </div>

          <div className="space-y-1 mt-3 border-t border-gray-200 pt-2">
            <Button onClick={resetPWAState} size="sm" variant="outline" className="w-full text-xs">
              <RefreshCw className="w-3 h-3 mr-1" />
              Reset All Data
            </Button>
            <Button onClick={handleInstall} size="sm" variant="outline" className="w-full text-xs">
              Trigger Install
            </Button>
            <Button onClick={() => setShowManualInstall(true)} size="sm" variant="outline" className="w-full text-xs">
              Show Manual Install
            </Button>
          </div>
        </div>
      )}

      {/* エンゲージメント促進プロンプト */}
      {showEngagementPrompt && isAndroid && (
        <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-80">
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 shadow-lg border-purple-200">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-purple-600 mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">サイトを楽しんでいただけていますか？</h3>
                  <p className="text-sm text-gray-600 mb-3">
                    もう少しサイトを使っていただくと、アプリとしてインストールできるようになります！
                  </p>
                  <div className="bg-purple-50 p-2 rounded text-xs text-purple-700 mb-3">
                    💡 診断を試したり、記事を読んだりしてみてください
                  </div>
                  <Button onClick={handleEngagementDismiss} variant="outline" size="sm">
                    <X className="w-4 h-4 mr-1" />
                    了解
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* 自動インストールプロンプト */}
      {showInstallPrompt && deferredPrompt && (
        <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-80">
          <Card className="bg-white shadow-lg border-purple-200">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Smartphone className="w-6 h-6 text-purple-600 mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">🎉 アプリをインストール</h3>
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
      )}

      {/* 手動インストール案内（全デバイス対応） */}
      {showManualInstall && (
        <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-80">
          <Card className="bg-white shadow-lg border-blue-200">
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <Smartphone className="w-6 h-6 text-blue-600 mt-1" />
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">📱 アプリとしてインストール</h3>
                  <p className="text-sm text-gray-600 mb-2">
                    このサイトはアプリとして
                    <br />
                    インストールできます！
                  </p>
                  <div className="bg-blue-50 p-3 rounded text-xs text-blue-700 mb-3">
                    <div className="font-semibold mb-2">📋 インストール手順：</div>
                    {isAndroid ? (
                      <ol className="list-decimal list-inside space-y-1">
                        <li>Chrome ブラウザのメニュー（⋮）を開く</li>
                        <li>
                          <strong>「アプリをインストール」</strong>を選択
                        </li>
                        <li>「インストール」ボタンをタップ</li>
                      </ol>
                    ) : isIOS ? (
                      <ol className="list-decimal list-inside space-y-1">
                        <li>共有ボタン（□↑）をタップ</li>
                        <li>
                          <strong>「ホーム画面に追加」</strong>を選択
                        </li>
                        <li>「追加」ボタンをタップ</li>
                      </ol>
                    ) : (
                      <ol className="list-decimal list-inside space-y-1">
                        <li>アドレスバー右側の <strong>⊕ アイコン</strong> をクリック</li>
                        <li>または Chrome メニュー（⋮）を開く</li>
                        <li>
                          <strong>「愛車運勢診断をインストール」</strong>を選択
                        </li>
                      </ol>
                    )}
                    <div className="mt-2 text-xs text-blue-600">
                      ※ メニューに表示されない場合は、もう少しサイトを使ってみてください
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button onClick={() => handleManualDismiss(true)} variant="outline" size="sm" className="text-xs">
                      今後表示しない
                    </Button>
                    <Button onClick={() => handleManualDismiss()} variant="ghost" size="sm" className="p-1 h-auto">
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
