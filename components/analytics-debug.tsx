"use client"

import { useEffect } from "react"

export function AnalyticsDebug() {
  useEffect(() => {
    // Google Analytics の読み込み状況をチェック
    const checkGA = () => {
      if (typeof window !== "undefined") {
        console.log("=== Google Analytics Debug ===")
        console.log("gtag function exists:", typeof window.gtag !== "undefined")
        console.log("dataLayer exists:", typeof window.dataLayer !== "undefined")
        console.log("dataLayer content:", window.dataLayer)

        // テストイベントを送信
        if (typeof window.gtag !== "undefined") {
          window.gtag("event", "debug_test", {
            event_category: "debug",
            event_label: "analytics_test",
          })
          console.log("Test event sent to GA")
        }
      }
    }

    // 少し遅延させてチェック
    setTimeout(checkGA, 2000)
  }, [])

  return null
}
