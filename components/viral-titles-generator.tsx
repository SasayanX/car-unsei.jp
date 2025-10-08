"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, TrendingUp, Zap, Star } from "lucide-react"
import { useState } from "react"

export function ViralTitlesGenerator() {
  const [copiedTitle, setCopiedTitle] = useState<string | null>(null)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedTitle(text)
    setTimeout(() => setCopiedTitle(null), 2000)
  }

  const viralTitles = [
    {
      category: "体験談・変化",
      icon: "💫",
      viralScore: 95,
      titles: [
        "My house number changed my life - here's the crazy story 🏠✨",
        "I moved from address 1424 to 318 and everything changed (not clickbait)",
        "This Japanese address reading predicted my entire life transformation",
        "My landlord thought I was crazy until this happened...",
        "Why I paid $2000 extra rent just to change my house number",
        "The address that saved my marriage (and my bank account)",
        "I was skeptical about house numbers until I tried this Japanese method",
      ],
    },
    {
      category: "驚き・発見",
      icon: "🤯",
      viralScore: 90,
      titles: [
        "Your house number reveals more than your horoscope ever could",
        "Japanese people have been doing THIS with addresses for centuries",
        "The hidden power in your house number that nobody talks about",
        "What your address says about you will blow your mind",
        "This ancient Japanese practice is taking over the internet",
        "The one thing about your address you never knew mattered",
        "Why successful people always check this before moving",
      ],
    },
    {
      category: "文化・トレンド",
      icon: "🇯🇵",
      viralScore: 85,
      titles: [
        "New Japanese trend: Reading fortunes from house addresses",
        "Japan's latest cultural export is changing how we see addresses",
        "The Japanese art of address numerology is going global",
        "From Japan with love: The address fortune telling revolution",
        "Why everyone in Japan checks their address score before moving",
        "Japanese wisdom: Your house number is your destiny",
        "The cultural phenomenon Japan gave the world: Address readings",
      ],
    },
    {
      category: "実用・ハウツー",
      icon: "🔮",
      viralScore: 80,
      titles: [
        "How to calculate your house's fortune score (Japanese method)",
        "The simple trick to find your perfect address using numbers",
        "Before you sign that lease, check your address score",
        "House hunting? This Japanese method will change everything",
        "The 5-minute address check that could transform your life",
        "Why you should never ignore your house number again",
        "The ultimate guide to choosing a lucky address",
      ],
    },
    {
      category: "質問・参加型",
      icon: "❓",
      viralScore: 88,
      titles: [
        "What's your address score? Mine was 89 and here's what happened...",
        "Drop your house number below - I'll read your fortune",
        "Anyone else notice their luck changed after moving addresses?",
        "What does your house number say about you? (Results inside)",
        "Is your address holding you back? Let's find out together",
        "Share your address score - the results might surprise you",
        "Who else believes house numbers affect your life?",
      ],
    },
    {
      category: "緊急性・FOMO",
      icon: "⚡",
      viralScore: 92,
      titles: [
        "Everyone's checking their address score - here's why you should too",
        "This address reading trend is exploding (and for good reason)",
        "Don't move anywhere until you read this about house numbers",
        "The address mistake 90% of people make (and how to avoid it)",
        "Why smart people are obsessing over their house numbers right now",
        "The address secret that's changing lives worldwide",
        "Stop everything and check your house number - seriously",
      ],
    },
  ]

  const redditSpecific = [
    {
      subreddit: "r/numerology",
      titles: [
        "House number numerology changed my life - anyone else experienced this?",
        "Japanese address numerology: The missing piece in Western numerology?",
        "My address score was 23 vs 89 - the difference was life-changing",
        "Combining address numbers with name numerology - game changer!",
      ],
    },
    {
      subreddit: "r/astrology",
      titles: [
        "Your house number might be more important than your birth chart",
        "Japanese address astrology: The practice Western astrology missed",
        "How I use both astrology AND address numerology for major decisions",
        "My Saturn return coincided with moving to a high-score address",
      ],
    },
    {
      subreddit: "r/Japan",
      titles: [
        "Japanese address fortune telling: Cultural practice or modern trend?",
        "How Japan turned house numbers into a spiritual practice",
        "The Japanese cultural export that's quietly taking over the world",
        "Traditional Japanese wisdom meets modern apartment hunting",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      {/* バイラルタイトル一覧 */}
      {viralTitles.map((category, categoryIndex) => (
        <Card key={categoryIndex} className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{category.icon}</span>
                <span className="text-purple-800">{category.category}</span>
              </div>
              <Badge className="bg-purple-600 text-white">
                <Star className="w-4 h-4 mr-1" />
                バイラル度 {category.viralScore}%
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {category.titles.map((title, titleIndex) => (
                <div
                  key={titleIndex}
                  className="flex items-center justify-between p-3 bg-white rounded-lg border border-purple-200 hover:border-purple-400 transition-colors"
                >
                  <span className="text-gray-800 flex-1 pr-4">{title}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(title)}
                    className={`${
                      copiedTitle === title
                        ? "bg-green-100 text-green-700 border-green-300"
                        : "text-purple-600 border-purple-300 hover:bg-purple-50"
                    }`}
                  >
                    {copiedTitle === title ? (
                      <>✓ コピー済み</>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-1" />
                        コピー
                      </>
                    )}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}

      {/* Reddit専用タイトル */}
      <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-orange-800">
            <TrendingUp className="w-6 h-6" />
            Reddit専用最適化タイトル
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {redditSpecific.map((reddit, index) => (
              <div key={index} className="p-4 bg-white rounded-lg border border-orange-200">
                <h4 className="font-semibold text-orange-800 mb-3 flex items-center gap-2">
                  <Badge className="bg-orange-100 text-orange-800">{reddit.subreddit}</Badge>
                  専用タイトル
                </h4>
                <div className="space-y-2">
                  {reddit.titles.map((title, titleIndex) => (
                    <div key={titleIndex} className="flex items-center justify-between p-2 bg-orange-50 rounded border">
                      <span className="text-gray-700 flex-1 pr-3">{title}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => copyToClipboard(title)}
                        className="text-orange-600 border-orange-300 hover:bg-orange-100"
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 最強推奨タイトル */}
      <Card className="border-4 border-gold bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 text-white">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <div className="text-4xl">🏆</div>
            <h3 className="text-2xl font-bold">最強バイラルタイトル TOP3</h3>
            <div className="space-y-3">
              {[
                "My house number changed my life - here's the crazy story 🏠✨",
                "What's your address score? Mine was 89 and here's what happened...",
                "Everyone's checking their address score - here's why you should too",
              ].map((title, index) => (
                <div key={index} className="p-3 bg-white/20 rounded-lg backdrop-blur">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">
                      #{index + 1}: {title}
                    </span>
                    <Button
                      size="sm"
                      className="bg-white text-yellow-600 hover:bg-gray-100"
                      onClick={() => copyToClipboard(title)}
                    >
                      <Copy className="w-4 h-4 mr-1" />
                      コピー
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* タイトル作成のコツ */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <Zap className="w-6 h-6" />
            バイラルタイトルの法則
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-semibold text-blue-800">✅ 効果的な要素</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• 個人的な体験談 ("My", "I")</li>
                <li>• 具体的な数字 (89, 1424)</li>
                <li>• 感情的な言葉 (crazy, blow your mind)</li>
                <li>• 緊急性 (everyone's doing, don't miss)</li>
                <li>• 質問形式 (What's your...?)</li>
                <li>• 絵文字の効果的使用 🏠✨</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-blue-800">❌ 避けるべき要素</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• 宣伝っぽい表現</li>
                <li>• 長すぎるタイトル</li>
                <li>• 専門用語の多用</li>
                <li>• 曖昧な表現</li>
                <li>• スパムっぽいキーワード</li>
                <li>• 過度な大文字使用</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
