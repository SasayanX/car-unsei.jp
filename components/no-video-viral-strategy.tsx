"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Camera, ImageIcon, Users, Zap, Copy, Share2, Star } from "lucide-react"
import { useState } from "react"

export function NoVideoViralStrategy() {
  const [copiedContent, setCopiedContent] = useState<string | null>(null)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedContent(text)
    setTimeout(() => setCopiedContent(null), 2000)
  }

  // 動画なしバイラル戦略
  const noVideoStrategies = [
    {
      platform: "Instagram",
      icon: "📷",
      method: "画像投稿",
      difficulty: "超簡単",
      impact: "高",
      description: "スクリーンショット + テキストオーバーレイ",
      actions: [
        "診断結果のスクリーンショットを撮影",
        "Canvaで文字を重ねる",
        "ストーリーズで投稿",
        "ハッシュタグ #住所診断 #新文化 追加",
      ],
    },
    {
      platform: "Twitter/X",
      icon: "🐦",
      method: "スレッド投稿",
      difficulty: "簡単",
      impact: "超高",
      description: "連続ツイートで体験談を詳しく",
      actions: ["1/7 形式で体験談を分割", "各ツイートに画像添付", "最後にサイトURLを投稿", "リツイート促進文を追加"],
    },
    {
      platform: "TikTok",
      icon: "🎵",
      method: "静止画スライド",
      difficulty: "簡単",
      impact: "超高",
      description: "画像スライドショー + 音楽",
      actions: [
        "診断画面を複数スクショ",
        "TikTokのスライドショー機能使用",
        "トレンド音楽を追加",
        "テキストで解説を重ねる",
      ],
    },
  ]

  // 簡単コンテンツテンプレート
  const easyContent = [
    {
      type: "Instagram投稿文",
      content: `🏠✨ 住所で運勢がわかるって知ってた？

私の診断結果：○○点！
意外と当たってる😳

日本発の新しい文化「住所診断」
友達にも教えたくなる面白さ💫

#住所診断 #住まい運勢チェッカー #新文化 #占い好きと繋がりたい #日本文化

👆ストーリーズでやり方シェア中`,
      platform: "Instagram",
    },
    {
      type: "Twitterスレッド",
      content: `🧵1/5 住所で運勢診断してみたら人生変わった話

私の住所「○○○○」を診断したら○○点

最初は半信半疑だったけど...

#住所診断 #新文化`,
      platform: "Twitter",
    },
    {
      type: "TikTok説明文",
      content: `住所で運勢がわかる時代🏠✨

日本で生まれた新しい文化
「住所診断」やってみた結果...

#住所診断 #占い #新文化 #日本 #バズり中`,
      platform: "TikTok",
    },
  ]

  // 画像作成ガイド
  const imageGuide = [
    {
      step: 1,
      title: "診断結果をスクショ",
      description: "サイトで診断完了後、結果画面をスクリーンショット",
      tip: "縦長で撮影するとSNS映えします",
    },
    {
      step: 2,
      title: "Canvaで装飾",
      description: "無料のCanvaで文字やエフェクトを追加",
      tip: "「Instagram投稿」テンプレートを使用",
    },
    {
      step: 3,
      title: "ハッシュタグ追加",
      description: "#住所診断 #新文化 #占い などを追加",
      tip: "各プラットフォームの推奨数を守る",
    },
    {
      step: 4,
      title: "投稿 & 拡散",
      description: "複数プラットフォームに同時投稿",
      tip: "ストーリーズでも再投稿",
    },
  ]

  return (
    <div className="space-y-6">
      {/* 動画なし戦略 */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <Zap className="w-6 h-6" />🎯 動画なしでもバイラル可能！
          </CardTitle>
          <p className="text-green-600">画像とテキストだけで十分効果的です</p>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {noVideoStrategies.map((strategy, index) => (
              <div key={index} className="p-4 bg-white rounded-lg border border-green-200">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{strategy.icon}</span>
                    <div>
                      <h3 className="font-semibold text-green-800">{strategy.platform}</h3>
                      <p className="text-sm text-green-600">{strategy.method}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-blue-100 text-blue-800">{strategy.difficulty}</Badge>
                    <Badge className="bg-orange-100 text-orange-800">効果: {strategy.impact}</Badge>
                  </div>
                </div>
                <p className="text-gray-700 mb-3">{strategy.description}</p>
                <div className="space-y-2">
                  <h4 className="font-medium text-gray-800">📋 実行手順:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {strategy.actions.map((action, actionIndex) => (
                      <li key={actionIndex} className="flex items-start gap-2">
                        <span className="text-green-600 font-bold">{actionIndex + 1}.</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 簡単コンテンツテンプレート */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <Copy className="w-6 h-6" />📝 コピペ可能コンテンツ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {easyContent.map((content, index) => (
              <div key={index} className="p-4 bg-white rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-blue-800">{content.type}</h3>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-100 text-blue-800">{content.platform}</Badge>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => copyToClipboard(content.content)}
                      className={copiedContent === content.content ? "bg-green-100 text-green-700" : ""}
                    >
                      {copiedContent === content.content ? (
                        "✓ コピー済み"
                      ) : (
                        <>
                          <Copy className="w-4 h-4 mr-1" />
                          コピー
                        </>
                      )}
                    </Button>
                  </div>
                </div>
                <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 whitespace-pre-line">
                  {content.content}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 画像作成ガイド */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-800">
            <ImageIcon className="w-6 h-6" />🎨 5分で作れる画像コンテンツ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {imageGuide.map((step, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-purple-200">
                <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-purple-800 mb-2">{step.title}</h3>
                  <p className="text-gray-700 mb-2">{step.description}</p>
                  <div className="text-sm text-purple-600 bg-purple-50 p-2 rounded">💡 {step.tip}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 超簡単バイラル戦術 */}
      <Card className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <div className="text-4xl">🚀</div>
            <h3 className="text-2xl font-bold">超簡単バイラル戦術</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-white/20 rounded-lg backdrop-blur">
                <div className="text-3xl mb-2">📱</div>
                <h4 className="font-bold mb-2">スクショ投稿</h4>
                <p className="text-sm">診断結果をスクショして「やってみた」投稿</p>
              </div>
              <div className="p-4 bg-white/20 rounded-lg backdrop-blur">
                <div className="text-3xl mb-2">💬</div>
                <h4 className="font-bold mb-2">体験談投稿</h4>
                <p className="text-sm">「住所診断したら○○だった」体験談</p>
              </div>
              <div className="p-4 bg-white/20 rounded-lg backdrop-blur">
                <div className="text-3xl mb-2">🔄</div>
                <h4 className="font-bold mb-2">友達タグ</h4>
                <p className="text-sm">「@友達名 これやってみて！」でタグ付け</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 今すぐできること */}
      <Card className="border-4 border-green-500 bg-green-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <Star className="w-6 h-6" />⚡ 今すぐできること（5分以内）
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="p-3 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">1. Instagram Stories投稿</h4>
              <p className="text-sm text-gray-600 mb-2">
                診断結果をスクショ → ストーリーズに投稿 → 「やってみて」スタンプ追加
              </p>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                <Camera className="w-4 h-4 mr-1" />
                今すぐ投稿
              </Button>
            </div>

            <div className="p-3 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">2. Twitter投稿</h4>
              <p className="text-sm text-gray-600 mb-2">上記テンプレートをコピー → 診断結果を追加 → ツイート</p>
              <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                <Share2 className="w-4 h-4 mr-1" />
                ツイート作成
              </Button>
            </div>

            <div className="p-3 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">3. 友達に直接シェア</h4>
              <p className="text-sm text-gray-600 mb-2">LINEやDMで「これ面白いからやってみて」と送信</p>
              <Button size="sm" className="bg-green-500 hover:bg-green-600">
                <Users className="w-4 h-4 mr-1" />
                友達に送信
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
