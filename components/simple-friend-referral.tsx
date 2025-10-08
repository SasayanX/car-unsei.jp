"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, Copy, Share2, CheckCircle, Gift, Heart } from "lucide-react"
import type { AddressAnalysis } from "../utils/address-analyzer"
import { simpleReferralTracking } from "../utils/simple-referral-tracking"

interface SimpleFriendReferralProps {
  userAnalysis?: AddressAnalysis
  userAddress?: string
}

export function SimpleFriendReferral({ userAnalysis, userAddress }: SimpleFriendReferralProps) {
  const [referralCode, setReferralCode] = useState("")
  const [friendsReferred, setFriendsReferred] = useState(0)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // 紹介統計を取得
    const stats = simpleReferralTracking.getReferralStats()
    setReferralCode(stats.code)
    setFriendsReferred(stats.referred)
  }, [])

  // 1. メッセージコピー機能（超簡単実装）
  const generateInviteMessage = () => {
    if (userAnalysis && userAddress) {
      const score = userAnalysis.weightedScore
      const emoji = score >= 80 ? "🌟" : score >= 60 ? "😊" : "🤔"

      return `${emoji} 私の愛車のナンバー「${userAddress}」の運勢は${score}点でした！

🚗 ${userAddress}

あなたの愛車のナンバーの運勢も気になりませんか？
新しい日本文化「ナンバープレート診断」を一緒に楽しみましょう！

${window.location.origin}?ref=${referralCode}

#愛車運勢診断 #ナンバープレート診断 #新文化`
    }

    return `🚗✨ 愛車運勢診断を発見！

あなたの愛車のナンバーに隠された運勢パワーを診断してみませんか？
日本発の新しい文化を一緒に体験しましょう！

${window.location.origin}?ref=${referralCode}

#愛車運勢診断 #ナンバープレート診断 #新文化`
  }

  const copyInviteMessage = async () => {
    try {
      await navigator.clipboard.writeText(generateInviteMessage())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (error) {
      // フォールバック: テキストエリアを使用
      const textArea = document.createElement("textarea")
      textArea.value = generateInviteMessage()
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand("copy")
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // 2. SNSシェア機能（超簡単実装）
  const shareToSNS = (platform: string) => {
    const message = encodeURIComponent(generateInviteMessage())
    const url = encodeURIComponent(`${window.location.origin}?ref=${referralCode}`)

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${message}`,
      line: `https://social-plugins.line.me/lineit/share?url=${url}&text=${message}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      instagram: `https://www.instagram.com/create/story/?media=${url}&text=${message}`,
    }

    if (shareUrls[platform as keyof typeof shareUrls]) {
      window.open(shareUrls[platform as keyof typeof shareUrls], "_blank", "width=600,height=400")
    }
  }

  // ネイティブシェア（モバイル対応）
  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "愛車運勢診断",
          text: generateInviteMessage(),
          url: `${window.location.origin}?ref=${referralCode}`,
        })
      } catch (error) {
        console.log("Share cancelled")
      }
    } else {
      // フォールバック: コピー
      copyInviteMessage()
    }
  }

  // 報酬レベルの取得
  const getRewardLevel = () => {
    if (friendsReferred >= 10) return { title: "👑 文化大使", color: "bg-purple-100 text-purple-800 border-purple-300" }
    if (friendsReferred >= 5)
      return { title: "🏆 バイラル達成", color: "bg-yellow-100 text-yellow-800 border-yellow-300" }
    if (friendsReferred >= 3) return { title: "⭐ 運勢マスター", color: "bg-blue-100 text-blue-800 border-blue-300" }
    if (friendsReferred >= 1) return { title: "🎉 文化創造者", color: "bg-green-100 text-green-800 border-green-300" }
    return { title: "新規メンバー", color: "bg-gray-100 text-gray-600 border-gray-300" }
  }

  const reward = getRewardLevel()

  return (
    <Card className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-pink-900/20 dark:to-purple-900/20 border-pink-200 dark:border-pink-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-pink-800 dark:text-pink-200">
          <Users className="w-6 h-6" />🤝 友だちに紹介して文化を広めよう！
        </CardTitle>
        <p className="text-sm text-pink-600 dark:text-pink-300">あなたも新しい日本文化の創造者になりませんか？</p>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* 紹介実績 */}
        <div className="text-center p-4 bg-white/60 dark:bg-gray-700/60 rounded-lg">
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">{friendsReferred}</div>
          <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">人の友だちが参加</div>
          <Badge className={`${reward.color} font-medium`}>{reward.title}</Badge>
          {friendsReferred > 0 && (
            <div className="text-xs text-purple-600 dark:text-purple-400 mt-2">あなたは文化創造に貢献しています！</div>
          )}
        </div>

        {/* あなたの紹介コード */}
        <div className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg text-center">
          <div className="text-sm text-gray-600 dark:text-gray-300 mb-1">あなたの紹介コード</div>
          <div className="text-xl font-bold font-mono text-purple-600 dark:text-purple-400">{referralCode}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            友だちがこのコードで参加すると、あなたにポイントが入ります
          </div>
        </div>

        {/* 簡単2ステップ */}
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-800 dark:text-gray-100 flex items-center gap-2">
            <Gift className="w-5 h-5 text-yellow-600" />📱 簡単2ステップで紹介
          </h4>

          <div className="grid gap-3">
            {/* ステップ1: コピー */}
            <div className="flex items-center gap-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="flex-1">
                <div className="font-medium text-blue-800 dark:text-blue-200">メッセージをコピー</div>
                <div className="text-sm text-blue-600 dark:text-blue-300">あなた専用の招待メッセージ</div>
              </div>
              <Button
                size="sm"
                onClick={copyInviteMessage}
                className={`${copied ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"} text-white`}
              >
                {copied ? <CheckCircle className="w-4 h-4 mr-1" /> : <Copy className="w-4 h-4 mr-1" />}
                {copied ? "コピー済み" : "コピー"}
              </Button>
            </div>

            {/* ステップ2: シェア */}
            <div className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-700">
              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="flex-1">
                <div className="font-medium text-green-800 dark:text-green-200">SNSでシェア</div>
                <div className="text-sm text-green-600 dark:text-green-300">Twitter、LINE、Facebookで拡散</div>
              </div>
              <div className="flex gap-1">
                <Button size="sm" variant="outline" onClick={() => shareToSNS("twitter")} title="Twitterでシェア">
                  𝕏
                </Button>
                <Button size="sm" variant="outline" onClick={() => shareToSNS("line")} title="LINEでシェア">
                  LINE
                </Button>
                <Button size="sm" variant="outline" onClick={() => shareToSNS("facebook")} title="Facebookでシェア">
                  FB
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => shareToSNS("instagram")}
                  title="Instagramでシェア"
                  className="bg-pink-50 text-pink-600 border-pink-200 hover:bg-pink-100"
                >
                  📷
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* ワンタップシェア */}
        <div className="grid grid-cols-2 gap-3">
          <Button onClick={handleNativeShare} className="bg-purple-600 hover:bg-purple-700 text-white">
            <Share2 className="w-4 h-4 mr-2" />
            ワンタップシェア
          </Button>
          <Button onClick={() => shareToSNS("twitter")} className="bg-blue-500 hover:bg-blue-600 text-white">
            𝕏 ツイート
          </Button>
        </div>

        {/* 次の報酬まで */}
        {friendsReferred < 10 && (
          <div className="p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border border-yellow-200 dark:border-yellow-700">
            <div className="flex items-center gap-2 mb-2">
              <Gift className="w-4 h-4 text-yellow-600" />
              <span className="font-semibold text-yellow-800 dark:text-yellow-200">次の報酬まで</span>
            </div>
            <div className="text-sm text-yellow-700 dark:text-yellow-300">
              {friendsReferred === 0 && "あと1人紹介で「🎉 文化創造者」バッジ獲得！"}
              {friendsReferred >= 1 &&
                friendsReferred < 3 &&
                `あと${3 - friendsReferred}人で「⭐ 運勢マスター」称号獲得！`}
              {friendsReferred >= 3 &&
                friendsReferred < 5 &&
                `あと${5 - friendsReferred}人で「🏆 バイラル達成」賞獲得！`}
              {friendsReferred >= 5 && friendsReferred < 10 && `あと${10 - friendsReferred}人で「👑 文化大使」認定！`}
            </div>
          </div>
        )}

        {/* 紹介のコツ */}
        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
          <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
            <Heart className="w-4 h-4" />💡 紹介のコツ
          </h5>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>• 自分の診断結果を先にシェアして興味を引く</li>
            <li>• 「新しい日本文化」という特別感をアピール</li>
            <li>• 家族や友だちと一緒に診断して比較を楽しむ</li>
            <li>• 車好きの人には特におすすめ</li>
          </ul>
        </div>

        {/* 文化創造メッセージ */}
        <div className="text-center p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
          <div className="text-sm text-purple-700 dark:text-purple-200">
            🌟 あなたの紹介で<strong>新しい日本文化</strong>が生まれます！
            <br />
            一緒に「ナンバープレート診断文化」を世界に広めましょう！
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
