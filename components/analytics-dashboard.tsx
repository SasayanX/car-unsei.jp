"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BarChart3, Users, Eye, TrendingUp, Share2, Heart, ExternalLink } from "lucide-react"

export function AnalyticsDashboard() {
  const [stats, setStats] = useState({
    dailyUsers: 0,
    pageViews: 0,
    diagnosisCount: 0,
    shareCount: 0,
    favoriteCount: 0,
    avgScore: 0,
  })

  const [isSetup, setIsSetup] = useState(false)

  useEffect(() => {
    // GA4設定状況をチェック
    const gaId = process.env.NEXT_PUBLIC_GA_ID
    setIsSetup(!!gaId && gaId !== "G-XXXXXXXXXX")

    // 模擬データ（実際のGA4データに置き換え予定）
    setStats({
      dailyUsers: 247,
      pageViews: 1156,
      diagnosisCount: 89,
      shareCount: 23,
      favoriteCount: 12,
      avgScore: 67.3,
    })
  }, [])

  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-blue-800">
          <BarChart3 className="w-6 h-6" />
          Google Analytics 4 ダッシュボード
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {!isSetup ? (
          <div className="text-center p-6 bg-yellow-50 rounded-lg border border-yellow-200">
            <h3 className="font-semibold text-yellow-800 mb-2">🔧 GA4設定が必要です</h3>
            <p className="text-sm text-yellow-700 mb-4">
              Google Analytics 4のトラッキングIDを環境変数に設定してください
            </p>
            <div className="space-y-2 text-xs text-yellow-600">
              <p>
                <strong>環境変数名:</strong> NEXT_PUBLIC_GA_ID
              </p>
              <p>
                <strong>値の例:</strong> G-XXXXXXXXXX
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-3"
              onClick={() => window.open("https://analytics.google.com/", "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              GA4設定画面へ
            </Button>
          </div>
        ) : (
          <>
            <div className="text-center mb-4">
              <Badge className="bg-green-200 text-green-800 border-green-300">✅ GA4設定完了</Badge>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/60 rounded-lg border border-blue-200">
                <Users className="w-6 h-6 mx-auto text-blue-600 mb-2" />
                <div className="text-2xl font-bold text-blue-600">{stats.dailyUsers}</div>
                <div className="text-sm text-gray-600">日間ユーザー</div>
              </div>

              <div className="text-center p-4 bg-white/60 rounded-lg border border-green-200">
                <Eye className="w-6 h-6 mx-auto text-green-600 mb-2" />
                <div className="text-2xl font-bold text-green-600">{stats.pageViews}</div>
                <div className="text-sm text-gray-600">ページビュー</div>
              </div>

              <div className="text-center p-4 bg-white/60 rounded-lg border border-purple-200">
                <TrendingUp className="w-6 h-6 mx-auto text-purple-600 mb-2" />
                <div className="text-2xl font-bold text-purple-600">{stats.diagnosisCount}</div>
                <div className="text-sm text-gray-600">診断実行数</div>
              </div>

              <div className="text-center p-4 bg-white/60 rounded-lg border border-orange-200">
                <Share2 className="w-6 h-6 mx-auto text-orange-600 mb-2" />
                <div className="text-2xl font-bold text-orange-600">{stats.shareCount}</div>
                <div className="text-sm text-gray-600">シェア数</div>
              </div>

              <div className="text-center p-4 bg-white/60 rounded-lg border border-red-200">
                <Heart className="w-6 h-6 mx-auto text-red-600 mb-2" />
                <div className="text-2xl font-bold text-red-600">{stats.favoriteCount}</div>
                <div className="text-sm text-gray-600">お気に入り</div>
              </div>

              <div className="text-center p-4 bg-white/60 rounded-lg border border-indigo-200">
                <BarChart3 className="w-6 h-6 mx-auto text-indigo-600 mb-2" />
                <div className="text-2xl font-bold text-indigo-600">{stats.avgScore}</div>
                <div className="text-sm text-gray-600">平均スコア</div>
              </div>
            </div>

            <div className="p-4 bg-white/60 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">📊 追跡中のイベント</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>✅ 診断実行 (diagnosis_completed)</li>
                <li>✅ シェア実行 (share)</li>
                <li>✅ お気に入り追加 (conversion)</li>
                <li>✅ 広告クリック (ad_click)</li>
                <li>✅ PWAインストール (conversion)</li>
              </ul>
            </div>
          </>
        )}

        <div className="text-center">
          <Button variant="outline" size="sm" onClick={() => window.open("https://analytics.google.com/", "_blank")}>
            <ExternalLink className="w-4 h-4 mr-1" />
            GA4管理画面
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
