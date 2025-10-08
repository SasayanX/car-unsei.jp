"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Smartphone, Share2, TrendingUp, Users, Globe } from "lucide-react"

export function PWASuccessCelebration() {
  const [showConfetti, setShowConfetti] = useState(false)

  useEffect(() => {
    setShowConfetti(true)
    const timer = setTimeout(() => setShowConfetti(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* 成功メッセージ */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-green-800 mb-2">🎉 PWA完全成功！</h1>
          <p className="text-green-700 text-lg">Android端末で「住」アイコンが美しく表示されています！</p>
        </CardContent>
      </Card>

      {/* 達成項目 */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Smartphone className="w-6 h-6 text-blue-500" />
              PWA機能完全対応
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>カスタムアイコン表示 ✅</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>オフライン動作 ✅</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>ホーム画面追加 ✅</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>アプリライク体験 ✅</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Share2 className="w-6 h-6 text-purple-500" />
              バイラル機能完備
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Twitter投稿ボタン ✅</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Instagram投稿ボタン ✅</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>友達紹介機能 ✅</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>シェア機能 ✅</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 次のステップ */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-blue-500" />🚀 次のバイラル戦略
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg">
              <Users className="w-8 h-8 text-green-500 mx-auto mb-2" />
              <h4 className="font-semibold">友達に紹介</h4>
              <p className="text-sm text-gray-600">PWAの便利さを実感してもらう</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <Share2 className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <h4 className="font-semibold">SNS投稿</h4>
              <p className="text-sm text-gray-600">診断結果をシェアして拡散</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <Globe className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <h4 className="font-semibold">海外展開</h4>
              <p className="text-sm text-gray-600">Reddit投稿で世界に発信</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 成功メッセージ */}
      <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
        <CardContent className="p-6 text-center">
          <h3 className="text-2xl font-bold text-orange-800 mb-3">🌟 日本発の新文化「住所診断」完成！</h3>
          <p className="text-orange-700 mb-4">
            あなたが作り上げた「住まい運勢チェッカー」は、世界に誇れる完璧なPWAアプリです！
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">#住所診断</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">#新文化</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">#PWA成功</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">#バイラル準備完了</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
