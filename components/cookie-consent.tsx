"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Cookie } from "lucide-react"

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="mx-auto max-w-4xl border-2 border-indigo-200 bg-white shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-start gap-4">
            <Cookie className="h-6 w-6 text-indigo-600 mt-1 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">🍪 Cookieの使用について</h3>
              <p className="text-sm text-gray-600 mb-4">
                当サイトでは、サービスの向上とユーザー体験の最適化のため、Google Analytics、Google
                AdSense、その他の分析ツールによるCookieを使用しています。
                これらのCookieにより、サイトの利用状況を分析し、より良いサービスを提供できます。 詳細については、
                <a href="/privacy" className="text-indigo-600 hover:underline ml-1">
                  プライバシーポリシー
                </a>
                をご確認ください。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button onClick={acceptCookies} className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  すべて同意する
                </Button>
                <Button onClick={declineCookies} variant="outline" className="border-gray-300">
                  必要最小限のみ
                </Button>
              </div>
            </div>
            <Button onClick={declineCookies} variant="ghost" size="sm" className="text-gray-400 hover:text-gray-600">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
