"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Share2, Twitter, Instagram, Copy, Check } from "lucide-react"
import { trackShare } from "@/utils/analytics"

interface EnhancedSNSShareProps {
  carNumber: string
  score: number
  fortuneLevel: string
  personalityType?: string
}

export function EnhancedSNSShare({ carNumber, score, fortuneLevel, personalityType }: EnhancedSNSShareProps) {
  const [copied, setCopied] = useState(false)

  const baseText = personalityType
    ? `🚗 愛車運勢・性格診断結果 🚗\n\nナンバー: ${carNumber}\n運勢スコア: ${score}点 (${fortuneLevel})\n性格タイプ: ${personalityType}\n\n日本初の総合分析で愛車の隠された特性が判明！\n\n#愛車運勢診断 #愛車性格診断 #ナンバープレート診断 #車の運勢 #数秘術 #81画理論`
    : `🚗 愛車運勢診断結果 🚗\n\nナンバー: ${carNumber}\n運勢スコア: ${score}点 (${fortuneLevel})\n\n81画理論による本格診断で愛車の運勢が判明！\n\n#愛車運勢診断 #ナンバープレート診断 #車の運勢 #81画理論`

  const shareUrl = "https://car-unsei.jp"

  const shareToTwitter = () => {
    const twitterText = `${baseText}\n\n${shareUrl}`
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(twitterText)}`
    window.open(twitterUrl, "_blank", "width=600,height=400")
    trackShare("twitter", score)
  }

  const shareToInstagram = () => {
    // Instagram Stories用のテキストをクリップボードにコピー
    const instagramText = `${baseText}\n\n詳細はプロフィールリンクから → ${shareUrl}`
    navigator.clipboard.writeText(instagramText)
    alert(
      "Instagram用のテキストをコピーしました！\nInstagramアプリでストーリーズを作成し、テキストを貼り付けてください。",
    )
    trackShare("instagram", score)
  }

  const copyToClipboard = async () => {
    const fullText = `${baseText}\n\n${shareUrl}`
    try {
      await navigator.clipboard.writeText(fullText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
      trackShare("clipboard", score)
    } catch (err) {
      console.error("コピーに失敗しました:", err)
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-yellow-600 dark:text-yellow-400"
    if (score >= 80) return "text-green-600 dark:text-green-400"
    if (score >= 70) return "text-blue-600 dark:text-blue-400"
    if (score >= 60) return "text-purple-600 dark:text-purple-400"
    return "text-gray-600 dark:text-gray-400"
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="flex items-center justify-center gap-2">
          <Share2 className="w-5 h-5" />
          診断結果をシェア
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* 診断結果プレビュー */}
        <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg">
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold">🚗 {carNumber}</div>
            <div className={`text-3xl font-bold ${getScoreColor(score)}`}>{score}点</div>
            <Badge variant="secondary" className="text-sm">
              {fortuneLevel}
            </Badge>
            {personalityType && <div className="text-sm text-gray-600 dark:text-gray-400">性格: {personalityType}</div>}
          </div>
        </div>

        {/* シェアボタン */}
        <div className="grid grid-cols-1 gap-3">
          <Button onClick={shareToTwitter} className="w-full bg-blue-500 hover:bg-blue-600 text-white">
            <Twitter className="w-4 h-4 mr-2" />
            Twitterでシェア
          </Button>

          <Button onClick={shareToInstagram} variant="outline" className="w-full">
            <Instagram className="w-4 h-4 mr-2" />
            Instagram Storiesでシェア
          </Button>

          <Button onClick={copyToClipboard} variant="outline" className="w-full">
            {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
            {copied ? "コピー完了！" : "テキストをコピー"}
          </Button>
        </div>

        {/* ハッシュタグ説明 */}
        <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
          シェア時は #愛車運勢診断 #愛車性格診断 のハッシュタグをお使いください
        </div>
      </CardContent>
    </Card>
  )
}
