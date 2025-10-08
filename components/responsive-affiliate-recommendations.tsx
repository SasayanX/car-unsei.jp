"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, TrendingUp, MapPin, ExternalLink, Monitor, Smartphone } from "lucide-react"
import { useEffect, useState } from "react"

interface ResponsiveAffiliateRecommendationsProps {
  score: number
  address: string
}

export function ResponsiveAffiliateRecommendations({ score, address }: ResponsiveAffiliateRecommendationsProps) {
  const [screenSize, setScreenSize] = useState<"mobile" | "tablet" | "desktop">("mobile")
  const [showAffiliates, setShowAffiliates] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setScreenSize("mobile")
        setShowAffiliates(false) // スマホでは非表示
      } else if (width < 1024) {
        setScreenSize("tablet")
        setShowAffiliates(true) // タブレットでは表示
      } else {
        setScreenSize("desktop")
        setShowAffiliates(true) // PCでは表示
      }
    }

    checkScreenSize()
    window.addEventListener("resize", checkScreenSize)
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  // スマホの場合は何も表示しない
  if (!showAffiliates) {
    return (
      <div className="md:hidden">
        {/* スマホ用の軽量な代替コンテンツ */}
        <Card className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 border-blue-200 dark:border-blue-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-blue-700 dark:text-blue-300">
              <Smartphone className="w-4 h-4" />
              <span className="text-sm font-medium">💡 より詳しい住まい情報は大画面でご覧ください</span>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const getRecommendationMessage = (score: number) => {
    if (score >= 80) {
      return {
        title: "🌟 さらなる運気アップのチャンス！",
        message: "素晴らしい運勢です！さらに理想的な住まいで運気を最大化しませんか？",
        type: "upgrade",
      }
    } else if (score >= 60) {
      return {
        title: "📈 運気向上の可能性を探る",
        message: "良い運勢ですが、もっと運気の良い場所があるかもしれません。",
        type: "explore",
      }
    } else {
      return {
        title: "🔄 運気改善のための住環境見直し",
        message: "運気向上のため、新しい住まいを検討してみませんか？",
        type: "improve",
      }
    }
  }

  const recommendation = getRecommendationMessage(score)

  // A8.netアフィリエイトリンク（実際のリンクに置き換えてください）
  const affiliateLinks = {
    suumo: "https://px.a8.net/svt/ejp?a8mat=3N9YQQ+XXXXXX+XXXX+XXXXX",
    homes: "https://px.a8.net/svt/ejp?a8mat=3N9YQQ+XXXXXX+XXXX+XXXXX",
    moving: "https://px.a8.net/svt/ejp?a8mat=3N9YQQ+XXXXXX+XXXX+XXXXX",
    investment: "https://px.a8.net/svt/ejp?a8mat=3N9YQQ+XXXXXX+XXXX+XXXXX",
  }

  const handleAffiliateClick = (service: string, url: string) => {
    // アフィリエイトクリック追跡
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "affiliate_click", {
        service: service,
        score: score,
        address: address,
        screen_size: screenSize,
      })
    }
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="hidden md:block">
      {" "}
      {/* スマホでは完全に非表示 */}
      <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-700">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
            <Monitor className="w-5 h-5" />
            {recommendation.title}
            <span className="text-xs bg-green-100 dark:bg-green-800 px-2 py-1 rounded-full">
              {screenSize === "desktop" ? "PC版" : "タブレット版"}
            </span>
          </CardTitle>
          <p className="text-green-700 dark:text-green-300">{recommendation.message}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* 不動産検索サービス */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              理想の住まい探し
            </h3>

            <div className={`grid gap-3 ${screenSize === "desktop" ? "md:grid-cols-2" : "grid-cols-1"}`}>
              <Button
                onClick={() => handleAffiliateClick("suumo", affiliateLinks.suumo)}
                className="flex items-center justify-between p-4 h-auto bg-orange-500 hover:bg-orange-600 text-white"
              >
                <div className="text-left">
                  <div className="font-semibold">SUUMO</div>
                  <div className="text-xs opacity-90">日本最大級の不動産サイト</div>
                </div>
                <ExternalLink className="w-4 h-4" />
              </Button>

              <Button
                onClick={() => handleAffiliateClick("homes", affiliateLinks.homes)}
                className="flex items-center justify-between p-4 h-auto bg-green-500 hover:bg-green-600 text-white"
              >
                <div className="text-left">
                  <div className="font-semibold">HOME'S</div>
                  <div className="text-xs opacity-90">豊富な物件情報</div>
                </div>
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* 引っ越しサービス（低スコア時のみ） */}
          {score < 70 && (
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                <Truck className="w-4 h-4" />
                引っ越しサービス
              </h3>

              <Button
                onClick={() => handleAffiliateClick("moving", affiliateLinks.moving)}
                className="w-full flex items-center justify-between p-4 h-auto bg-blue-500 hover:bg-blue-600 text-white"
              >
                <div className="text-left">
                  <div className="font-semibold">引っ越し一括見積もり</div>
                  <div className="text-xs opacity-90">最安値の引っ越し業者を比較</div>
                </div>
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          )}

          {/* 不動産投資（高スコア + PC時のみ） */}
          {score >= 75 && screenSize === "desktop" && (
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                資産運用・投資
              </h3>

              <Button
                onClick={() => handleAffiliateClick("investment", affiliateLinks.investment)}
                className="w-full flex items-center justify-between p-4 h-auto bg-purple-500 hover:bg-purple-600 text-white"
              >
                <div className="text-left">
                  <div className="font-semibold">不動産投資セミナー</div>
                  <div className="text-xs opacity-90">運気の良いあなたに最適な投資機会</div>
                </div>
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          )}

          {/* 画面サイズ別メッセージ */}
          <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border border-yellow-200 dark:border-yellow-700">
            <p className="text-sm text-yellow-800 dark:text-yellow-200">
              💡 <strong>大画面特典：</strong>
              {screenSize === "desktop"
                ? "PC版では全ての住まい情報サービスをご利用いただけます！"
                : "タブレット版では厳選した住まい情報をご提供しています！"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
