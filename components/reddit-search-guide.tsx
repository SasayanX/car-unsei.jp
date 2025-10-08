"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, ExternalLink, Users, TrendingUp } from "lucide-react"

export function RedditSearchGuide() {
  const subreddits = [
    {
      name: "r/numerology",
      members: "15.2k",
      description: "数秘術コミュニティ - 数字の力を信じる人々",
      url: "https://www.reddit.com/r/numerology/",
      relevance: "最高",
      reason: "住所の数字パワーと完全一致",
    },
    {
      name: "r/astrology",
      members: "500k+",
      description: "占星術コミュニティ - 最大の占いコミュニティ",
      url: "https://www.reddit.com/r/astrology/",
      relevance: "高",
      reason: "占い好きが集まる場所",
    },
    {
      name: "r/spirituality",
      members: "1M+",
      description: "スピリチュアル全般 - 幅広い精神世界",
      url: "https://www.reddit.com/r/spirituality/",
      relevance: "高",
      reason: "新しいスピリチュアル手法として",
    },
    {
      name: "r/tarot",
      members: "300k+",
      description: "タロット占いコミュニティ",
      url: "https://www.reddit.com/r/tarot/",
      relevance: "中",
      reason: "占い手法の一つとして紹介可能",
    },
    {
      name: "r/psychic",
      members: "200k+",
      description: "サイキック・超能力コミュニティ",
      url: "https://www.reddit.com/r/psychic/",
      relevance: "中",
      reason: "直感的な占いとして",
    },
    {
      name: "r/Japan",
      members: "800k+",
      description: "日本文化コミュニティ",
      url: "https://www.reddit.com/r/Japan/",
      relevance: "高",
      reason: "日本発の新文化として",
    },
  ]

  const searchSteps = [
    {
      step: 1,
      title: "Reddit.comにアクセス",
      description: "ブラウザでreddit.comを開く",
      action: "サイトを開く",
    },
    {
      step: 2,
      title: "検索バーを使用",
      description: "上部の検索バーに「numerology」と入力",
      action: "検索実行",
    },
    {
      step: 3,
      title: "コミュニティタブ選択",
      description: "検索結果で「Communities」タブをクリック",
      action: "タブ切り替え",
    },
    {
      step: 4,
      title: "適切なコミュニティ選択",
      description: "メンバー数とルールを確認して参加",
      action: "Join押下",
    },
  ]

  return (
    <div className="space-y-6">
      {/* 検索手順 */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <Search className="w-6 h-6" />
            Reddit占いカテゴリの見つけ方
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-3">📋 簡単4ステップ</h3>
              <div className="space-y-3">
                {searchSteps.map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-blue-800">{step.title}</div>
                      <div className="text-sm text-blue-600">{step.description}</div>
                    </div>
                    <Badge variant="outline" className="text-blue-600 border-blue-300">
                      {step.action}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3 bg-yellow-100 rounded-lg border border-yellow-300">
              <h4 className="font-semibold text-yellow-800 mb-2">💡 検索のコツ</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• 「numerology」「astrology」「spirituality」で検索</li>
                <li>• メンバー数が多いコミュニティを選ぶ</li>
                <li>• ルールを必ず読んでから投稿</li>
                <li>• アクティブなコミュニティかチェック</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* おすすめSubreddit一覧 */}
      <Card className="bg-white border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-800">
            <Users className="w-6 h-6" />
            おすすめ占い系Subreddit
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {subreddits.map((sub, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <h3 className="font-semibold text-gray-800">{sub.name}</h3>
                    <Badge className="bg-gray-200 text-gray-700">{sub.members} メンバー</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      className={
                        sub.relevance === "最高"
                          ? "bg-red-100 text-red-800 border-red-300"
                          : sub.relevance === "高"
                            ? "bg-orange-100 text-orange-800 border-orange-300"
                            : "bg-yellow-100 text-yellow-800 border-yellow-300"
                      }
                    >
                      関連度: {sub.relevance}
                    </Badge>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => window.open(sub.url, "_blank")}
                      className="text-blue-600 border-blue-300"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      開く
                    </Button>
                  </div>
                </div>
                <p className="text-gray-600 mb-2">{sub.description}</p>
                <div className="text-sm text-blue-600 bg-blue-50 p-2 rounded">💡 理由: {sub.reason}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 投稿テンプレート */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <TrendingUp className="w-6 h-6" />
            投稿テンプレート（コピペ用）
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">📝 r/numerology用</h4>
              <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 whitespace-pre-line">
                {`🏠 I discovered address numerology and it changed my life

After moving from "1424-1" (score: 52) to "3-1-8" (score: 89), everything changed - got motivated, business boomed, paid off debts, and found love!

This made me realize house numbers have the same power as name numerology. I created a tool to help others find their lucky addresses.

What's your address score? 🔮`}
              </div>
              <Button
                size="sm"
                className="mt-2 bg-green-600 hover:bg-green-700"
                onClick={() =>
                  navigator.clipboard.writeText(`🏠 I discovered address numerology and it changed my life

After moving from "1424-1" (score: 52) to "3-1-8" (score: 89), everything changed - got motivated, business boomed, paid off debts, and found love!

This made me realize house numbers have the same power as name numerology. I created a tool to help others find their lucky addresses.

What's your address score? 🔮`)
                }
              >
                コピー
              </Button>
            </div>

            <div className="p-4 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-2">📝 r/Japan用</h4>
              <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 whitespace-pre-line">
                {`🇯🇵 New Japanese cultural phenomenon: Address Fortune Telling

I created a uniquely Japanese concept - using your house address numbers for fortune telling, similar to how we use kanji strokes in name fortune telling.

After my own address change transformed my life, I built this tool to share this new cultural practice.

Is this something that could catch on globally? 🏠✨`}
              </div>
              <Button
                size="sm"
                className="mt-2 bg-green-600 hover:bg-green-700"
                onClick={() =>
                  navigator.clipboard.writeText(`🇯🇵 New Japanese cultural phenomenon: Address Fortune Telling

I created a uniquely Japanese concept - using your house address numbers for fortune telling, similar to how we use kanji strokes in name fortune telling.

After my own address change transformed my life, I built this tool to share this new cultural practice.

Is this something that could catch on globally? 🏠✨`)
                }
              >
                コピー
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 緊急アクション */}
      <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <CardContent className="p-6 text-center">
          <div className="space-y-4">
            <div className="text-4xl">🌍</div>
            <h3 className="text-2xl font-bold">世界に日本文化を発信！</h3>
            <p className="text-lg">住所診断を世界的な文化現象にしましょう</p>
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100"
              onClick={() => window.open("https://www.reddit.com/r/numerology/", "_blank")}
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              r/numerologyを開く
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
