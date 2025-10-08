"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Users, Gift, Share2, Trophy, Heart, Copy, QrCode } from "lucide-react"
import type { AddressAnalysis } from "../utils/address-analyzer"

interface FriendReferralProps {
  userAnalysis?: AddressAnalysis
  userAddress?: string
}

export function FriendReferral({ userAnalysis, userAddress }: FriendReferralProps) {
  const [referralCode, setReferralCode] = useState("")
  const [friendsReferred, setFriendsReferred] = useState(0)
  const [showQR, setShowQR] = useState(false)

  useEffect(() => {
    // ユーザー固有の紹介コードを生成
    const generateReferralCode = () => {
      const userId = localStorage.getItem("user-id") || Date.now().toString()
      return `SUMAI${userId.slice(-6).toUpperCase()}`
    }

    setReferralCode(generateReferralCode())

    // 紹介実績を取得
    const referred = localStorage.getItem("friends-referred")
    if (referred) {
      setFriendsReferred(Number.parseInt(referred))
    }
  }, [])

  const generateReferralUrl = () => {
    const baseUrl = window.location.origin
    return `${baseUrl}?ref=${referralCode}`
  }

  const generateInviteMessage = () => {
    if (userAnalysis && userAddress) {
      const score = userAnalysis.weightedScore
      const emoji = score >= 80 ? "🌟" : score >= 60 ? "😊" : "🤔"

      return `${emoji} 私の住まいの運勢は${score}点でした！

📍 ${userAddress}

あなたの住所の運勢も気になりませんか？
新しい日本文化「住所診断」を一緒に楽しみましょう！

${generateReferralUrl()}

#住まい運勢チェッカー #住所診断 #新文化`
    }

    return `🏠✨ 住まい運勢チェッカーを発見！

あなたの住所に隠された運勢パワーを診断してみませんか？
日本発の新しい文化を一緒に体験しましょう！

${generateReferralUrl()}

#住まい運勢チェッカー #住所診断`
  }

  const copyInviteMessage = async () => {
    try {
      await navigator.clipboard.writeText(generateInviteMessage())
      alert("招待メッセージをコピーしました！")
    } catch (error) {
      console.error("Copy failed:", error)
    }
  }

  const shareToSNS = (platform: string) => {
    const message = encodeURIComponent(generateInviteMessage())
    const url = generateReferralUrl()

    switch (platform) {
      case "twitter":
        window.open(`https://twitter.com/intent/tweet?text=${message}`, "_blank")
        break
      case "line":
        window.open(
          `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(url)}&text=${message}`,
          "_blank",
        )
        break
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, "_blank")
        break
    }
  }

  const getReferralRewards = () => {
    const rewards = [
      { threshold: 1, reward: "🎉 文化創造者バッジ", unlocked: friendsReferred >= 1 },
      { threshold: 3, reward: "⭐ 運勢マスター称号", unlocked: friendsReferred >= 3 },
      { threshold: 5, reward: "🏆 バイラル達成賞", unlocked: friendsReferred >= 5 },
      { threshold: 10, reward: "👑 文化大使認定", unlocked: friendsReferred >= 10 },
    ]
    return rewards
  }

  return (
    <Card className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 border-pink-200 dark:border-pink-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-pink-800 dark:text-pink-200">
          <Users className="w-6 h-6" />🤝 友だち紹介で文化を広めよう！
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* 紹介実績 */}
        <div className="text-center p-4 bg-white/60 dark:bg-gray-700/60 rounded-lg">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{friendsReferred}</div>
          <div className="text-sm text-gray-600 dark:text-gray-300">人の友だちが参加</div>
          <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">あなたは文化創造に貢献しています！</div>
        </div>

        {/* 紹介方法 */}
        <div className="space-y-4">
          <h4 className="font-semibold text-gray-800 dark:text-gray-100">📱 簡単3ステップで紹介</h4>

          <div className="grid gap-3">
            <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <div className="font-medium text-blue-800 dark:text-blue-200">メッセージをコピー</div>
                <div className="text-sm text-blue-600 dark:text-blue-300">あなた専用の招待メッセージ</div>
              </div>
              <Button size="sm" onClick={copyInviteMessage} className="bg-blue-600 hover:bg-blue-700">
                <Copy className="w-4 h-4 mr-1" />
                コピー
              </Button>
            </div>

            <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-1">
                <div className="font-medium text-green-800 dark:text-green-200">SNSでシェア</div>
                <div className="text-sm text-green-600 dark:text-green-300">Twitter、LINE、Facebookで拡散</div>
              </div>
              <div className="flex gap-1">
                <Button size="sm" variant="outline" onClick={() => shareToSNS("twitter")}>
                  𝕏
                </Button>
                <Button size="sm" variant="outline" onClick={() => shareToSNS("line")}>
                  LINE
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="flex-1">
                <div className="font-medium text-purple-800 dark:text-purple-200">一緒に楽しむ</div>
                <div className="text-sm text-purple-600 dark:text-purple-300">友だちと運勢を比べて盛り上がろう</div>
              </div>
              <Heart className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        {/* 紹介コード */}
        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-gray-800 dark:text-gray-100">あなたの紹介コード</span>
            <Button size="sm" variant="outline" onClick={() => setShowQR(!showQR)}>
              <QrCode className="w-4 h-4 mr-1" />
              QR
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <Input value={referralCode} readOnly className="font-mono text-center text-lg font-bold" />
            <Button size="sm" onClick={() => navigator.clipboard.writeText(referralCode)}>
              <Copy className="w-4 h-4" />
            </Button>
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">
            友だちがこのコードで参加すると、あなたにポイントが入ります
          </div>
        </div>

        {/* 報酬システム */}
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-2">
            <Gift className="w-5 h-5 text-yellow-600" />
            文化創造者への報酬
          </h4>

          <div className="space-y-2">
            {getReferralRewards().map((reward, index) => (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-lg border ${
                  reward.unlocked
                    ? "bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700"
                    : "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      reward.unlocked ? "bg-green-600 text-white" : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {reward.unlocked ? "✓" : reward.threshold}
                  </div>
                  <div>
                    <div
                      className={`font-medium ${
                        reward.unlocked ? "text-green-800 dark:text-green-200" : "text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {reward.reward}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{reward.threshold}人紹介で獲得</div>
                  </div>
                </div>
                {reward.unlocked && <Badge className="bg-green-200 text-green-800 border-green-300">獲得済み</Badge>}
              </div>
            ))}
          </div>
        </div>

        {/* 特別企画 */}
        <div className="p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg border border-yellow-200 dark:border-yellow-700">
          <div className="flex items-center gap-2 mb-2">
            <Trophy className="w-5 h-5 text-yellow-600" />
            <span className="font-semibold text-yellow-800 dark:text-yellow-200">🎊 特別企画</span>
          </div>
          <div className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
            <p>
              • <strong>月間MVP:</strong> 最も多く紹介した人に特別称号
            </p>
            <p>
              • <strong>文化大使:</strong> 10人紹介で永続的な特別バッジ
            </p>
            <p>
              • <strong>創設者特典:</strong> 初期メンバーには限定特典
            </p>
          </div>
        </div>

        {/* 成功事例 */}
        <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
          <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 紹介のコツ</h5>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>• 自分の診断結果を先にシェアして興味を引く</li>
            <li>• 「新しい日本文化」という特別感をアピール</li>
            <li>• 家族や同僚と一緒に診断して比較を楽しむ</li>
            <li>• 引っ越し予定の友だちには特におすすめ</li>
          </ul>
        </div>

        {/* アクションボタン */}
        <div className="grid grid-cols-2 gap-3">
          <Button onClick={() => shareToSNS("twitter")} className="bg-blue-500 hover:bg-blue-600 text-white">
            <Share2 className="w-4 h-4 mr-2" />
            Twitterで紹介
          </Button>
          <Button
            onClick={copyInviteMessage}
            variant="outline"
            className="border-purple-300 text-purple-700 hover:bg-purple-50"
          >
            <Copy className="w-4 h-4 mr-2" />
            メッセージコピー
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
