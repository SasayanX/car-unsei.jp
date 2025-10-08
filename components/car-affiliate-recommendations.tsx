"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, TrendingUp, ShoppingCart, Wrench, ExternalLink } from "lucide-react"

interface CarAffiliateRecommendationsProps {
  score: number
  carNumber: string
}

export function CarAffiliateRecommendations({ score, carNumber }: CarAffiliateRecommendationsProps) {
  const getRecommendationMessage = (score: number) => {
    if (score >= 80) {
      return {
        title: "🌟 さらなる運気アップのチャンス！",
        message: "素晴らしい運勢です！さらに理想的な愛車で運気を最大化しませんか？",
        type: "upgrade",
      }
    } else if (score >= 60) {
      return {
        title: "📈 運気向上の可能性を探る",
        message: "良い運勢ですが、もっと運気の良いナンバーの車があるかもしれません。",
        type: "explore",
      }
    } else {
      return {
        title: "🔄 運気改善のための愛車見直し",
        message: "運気向上のため、新しい愛車を検討してみませんか？",
        type: "improve",
      }
    }
  }

  const recommendation = getRecommendationMessage(score)

  // 実際のA8.netアフィリエイトリンク
  const affiliateLinks = {
    carClub: "https://px.a8.net/svt/ejp?a8mat=457907+M12XM+4ZD8+5YRHE", // CARCLUB
    carSensor: "https://px.a8.net/svt/ejp?a8mat=3N9YQQ+XXXXXX+XXXX+XXXXX", // カーセンサー（要設定）
    gooNet: "https://px.a8.net/svt/ejp?a8mat=3N9YQQ+XXXXXX+XXXX+XXXXX", // グーネット（要設定）
    carBuy: "https://px.a8.net/svt/ejp?a8mat=3N9YQQ+XXXXXX+XXXX+XXXXX", // 車買取（要設定）
  }

  const handleAffiliateClick = (service: string, url: string) => {
    // アフィリエイトクリック追跡
    if (typeof window !== "undefined" && (window as any).gtag) {
      ;(window as any).gtag("event", "affiliate_click", {
        service: service,
        score: score,
        car_number: carNumber,
      })
    }
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-blue-200 dark:border-blue-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
          <Car className="w-5 h-5" />
          {recommendation.title}
        </CardTitle>
        <p className="text-blue-700 dark:text-blue-300">{recommendation.message}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* カー用品専門店CARCLUB（メイン推奨） */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <Wrench className="w-4 h-4" />
            運気アップカー用品
          </h3>

          <Button
            onClick={() => handleAffiliateClick("carclub", affiliateLinks.carClub)}
            className="w-full flex items-center justify-between p-4 h-auto bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white shadow-lg"
          >
            <div className="text-left">
              <div className="font-semibold text-lg">カー用品専門店CARCLUB</div>
              <div className="text-sm opacity-90">運気アップアイテムが豊富！まとめ買いで1000円OFF</div>
            </div>
            <ExternalLink className="w-5 h-5" />
          </Button>
        </div>

        {/* 中古車検索サービス（低スコア時のみ） */}
        {score < 70 && (
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              理想の愛車探し
            </h3>

            <div className="grid md:grid-cols-2 gap-3">
              <Button
                onClick={() => handleAffiliateClick("carSensor", affiliateLinks.carSensor)}
                className="flex items-center justify-between p-4 h-auto bg-red-500 hover:bg-red-600 text-white"
              >
                <div className="text-left">
                  <div className="font-semibold">カーセンサー</div>
                  <div className="text-xs opacity-90">日本最大級の中古車サイト</div>
                </div>
                <ExternalLink className="w-4 h-4" />
              </Button>

              <Button
                onClick={() => handleAffiliateClick("gooNet", affiliateLinks.gooNet)}
                className="flex items-center justify-between p-4 h-auto bg-green-500 hover:bg-green-600 text-white"
              >
                <div className="text-left">
                  <div className="font-semibold">グーネット</div>
                  <div className="text-xs opacity-90">豊富な車両情報</div>
                </div>
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}

        {/* 車買取サービス（低スコア時のみ） */}
        {score < 60 && (
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              車買取サービス
            </h3>

            <Button
              onClick={() => handleAffiliateClick("carBuy", affiliateLinks.carBuy)}
              className="w-full flex items-center justify-between p-4 h-auto bg-orange-500 hover:bg-orange-600 text-white"
            >
              <div className="text-left">
                <div className="font-semibold">車買取一括査定</div>
                <div className="text-xs opacity-90">最高値で愛車を売却</div>
              </div>
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* 特別メッセージ */}
        <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border border-yellow-200 dark:border-yellow-700">
          <p className="text-sm text-yellow-800 dark:text-yellow-200">
            💡 <strong>運勢診断特典：</strong>
            {score >= 80
              ? "高運勢のあなたには高品質なカー用品で運気をさらにアップ！"
              : score >= 60
                ? "運気向上のためのカー用品で愛車をパワーアップしましょう！"
                : "新しい愛車とカー用品で運気をリセットしましょう！"}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
