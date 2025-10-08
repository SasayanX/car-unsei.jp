"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, ArrowRight, Target, Rocket, Users, TrendingUp, ExternalLink, Copy, Share2 } from "lucide-react"

export function NextActionPlan() {
  const [completedActions, setCompletedActions] = useState<string[]>([])

  const markCompleted = (actionId: string) => {
    setCompletedActions((prev) => [...prev, actionId])
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert("コピーしました！")
  }

  // 即座にやること（今日中）
  const immediateActions = [
    {
      id: "deploy",
      title: "🚀 本番デプロイ実行",
      description: "修正されたads.txtと最新機能を本番環境に反映",
      time: "5分",
      priority: "最高",
      action: "Vercelでデプロイボタンをクリック",
      status: "ready",
    },
    {
      id: "first-tweet",
      title: "📱 初回ツイート投稿",
      description: "住所診断文化の第一歩となるツイートを投稿",
      time: "10分",
      priority: "最高",
      action: "下記のテンプレートを使用してツイート",
      status: "ready",
    },
    {
      id: "test-sharing",
      title: "🔄 シェア機能テスト",
      description: "友達紹介とSNSシェアが正常に動作するか確認",
      time: "15分",
      priority: "高",
      action: "実際に診断してシェアボタンをテスト",
      status: "ready",
    },
  ]

  // 今週やること
  const weeklyActions = [
    {
      id: "daily-posts",
      title: "📅 毎日のSNS投稿",
      description: "住所診断の面白さを伝える投稿を毎日継続",
      time: "毎日30分",
      priority: "高",
      action: "朝・昼・夜の3回投稿",
      status: "ongoing",
    },
    {
      id: "influencer-reach",
      title: "🌟 インフルエンサーアプローチ",
      description: "住宅・占い・エンタメ系インフルエンサーに連絡",
      time: "3日",
      priority: "高",
      action: "DM送信とコラボ提案",
      status: "ready",
    },
    {
      id: "community-posts",
      title: "💬 コミュニティ投稿",
      description: "Reddit、はてブ、note等で話題作り",
      time: "継続",
      priority: "中",
      action: "各プラットフォームで投稿",
      status: "ready",
    },
  ]

  // SNS投稿テンプレート
  const tweetTemplates = [
    {
      type: "文化創造",
      text: "🏠✨ 新しい日本文化が誕生！「住所診断」で運勢がわかる時代に！\n\n私の住まいの運勢は○○点でした🎯\nあなたの住所の運勢は？\n\n#住まい運勢チェッカー #新しい文化 #住所診断\n\n👉 [サイトURL]",
    },
    {
      type: "体験談",
      text: "住所で運勢診断してみたら意外と当たってる😳\n\n数字の組み合わせで○○運が判定されるなんて知らなかった！\n\n友達にも教えたくなる面白さ✨\n\n#住まい運勢チェッカー #占い好きと繋がりたい\n\n👉 [サイトURL]",
    },
    {
      type: "話題性",
      text: "【話題】住所で運勢がわかる？！\n\n日本で生まれた新しい文化「住所診断」が面白すぎる🔥\n\n・番地の数字で運勢判定\n・81通りの詳細分析\n・友達と比較も可能\n\n#住まい運勢チェッカー #バズり中\n\n👉 [サイトURL]",
    },
  ]

  const progressPercentage = (completedActions.length / (immediateActions.length + weeklyActions.length)) * 100

  return (
    <div className="space-y-6">
      {/* 現在の状況 */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <Target className="w-6 h-6" />🎯 現在の状況：収益化準備完了！
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">技術的準備100%完了！</h3>
              <p className="text-green-600 mb-4">次は文化拡散フェーズです</p>
              <Progress value={progressPercentage} className="w-full mb-2" />
              <p className="text-sm text-green-600">アクション進捗: {Math.round(progressPercentage)}% 完了</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 bg-white/60 rounded-lg text-center">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-green-800">技術完成</h4>
                <p className="text-sm text-green-600">AdSense・PWA・SEO</p>
              </div>
              <div className="p-3 bg-white/60 rounded-lg text-center">
                <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <h4 className="font-semibold text-green-800">収益化準備</h4>
                <p className="text-sm text-green-600">ads.txt・広告配置</p>
              </div>
              <div className="p-3 bg-blue-50 rounded-lg text-center border border-blue-200">
                <Rocket className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <h4 className="font-semibold text-blue-800">次：文化拡散</h4>
                <p className="text-sm text-blue-600">マーケティング開始</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 今日中にやること */}
      <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-red-800">
            <ArrowRight className="w-6 h-6" />🚨 今日中にやること（最優先）
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {immediateActions.map((action, index) => (
              <div key={action.id} className="p-4 bg-white rounded-lg border border-red-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-red-800">{action.title}</h3>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-red-100 text-red-800 border-red-300">{action.priority}優先度</Badge>
                    <span className="text-sm text-red-600">{action.time}</span>
                  </div>
                </div>
                <p className="text-red-700 mb-3">{action.description}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-blue-600 bg-blue-50 p-2 rounded flex-1 mr-3">💡 {action.action}</div>
                  <Button
                    size="sm"
                    onClick={() => markCompleted(action.id)}
                    disabled={completedActions.includes(action.id)}
                    className={completedActions.includes(action.id) ? "bg-green-600" : "bg-red-600 hover:bg-red-700"}
                  >
                    {completedActions.includes(action.id) ? "完了" : "実行"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* SNS投稿テンプレート */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <Share2 className="w-6 h-6" />📱 SNS投稿テンプレート（即使用可能）
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-center mb-4">
              <h3 className="text-lg font-bold text-blue-800 mb-2">文化拡散の第一歩！</h3>
              <p className="text-blue-600">下記テンプレートをコピーして今すぐ投稿しましょう</p>
            </div>

            {tweetTemplates.map((template, index) => (
              <div key={index} className="p-4 bg-white rounded-lg border border-blue-200">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-blue-800">📝 {template.type}パターン</h4>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(template.text)}
                    className="text-blue-600 border-blue-300"
                  >
                    <Copy className="w-4 h-4 mr-1" />
                    コピー
                  </Button>
                </div>
                <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 whitespace-pre-line">{template.text}</div>
              </div>
            ))}

            <div className="p-3 bg-yellow-100 rounded-lg border border-yellow-300">
              <h4 className="font-semibold text-yellow-800 mb-2">🎯 投稿のコツ</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• [サイトURL] を実際のURLに置き換え</li>
                <li>• ○○点の部分を実際の診断結果に変更</li>
                <li>• 朝・昼・夜の時間帯に分けて投稿</li>
                <li>• ハッシュタグは必ず含める</li>
                <li>• 体験談は具体的に書く</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 今週の計画 */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-800">
            <Users className="w-6 h-6" />📅 今週の文化拡散計画
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {weeklyActions.map((action, index) => (
              <div key={action.id} className="p-4 bg-white rounded-lg border border-purple-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-purple-800">{action.title}</h3>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-purple-100 text-purple-800 border-purple-300">{action.priority}優先度</Badge>
                    <span className="text-sm text-purple-600">{action.time}</span>
                  </div>
                </div>
                <p className="text-purple-700 mb-3">{action.description}</p>
                <div className="text-sm text-blue-600 bg-blue-50 p-2 rounded">💡 {action.action}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 成功指標 */}
      <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-yellow-800">
            <TrendingUp className="w-6 h-6" />📊 成功指標（1週間目標）
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-yellow-800">100</div>
              <div className="text-sm text-yellow-600">ユーザー数</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-yellow-800">50</div>
              <div className="text-sm text-yellow-600">シェア数</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-yellow-800">10</div>
              <div className="text-sm text-yellow-600">友達紹介</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg">
              <div className="text-2xl font-bold text-yellow-800">¥500</div>
              <div className="text-sm text-yellow-600">初収益</div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-100 rounded-lg border border-yellow-300">
            <h4 className="font-semibold text-yellow-800 mb-2">🌟 文化定着の兆候</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• 「住所診断やってみた」という投稿が増える</li>
              <li>• 友達同士で診断結果を比較し始める</li>
              <li>• メディアが「新しい文化」として取り上げる</li>
              <li>• インフルエンサーが自発的に紹介する</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* 緊急アクション */}
      <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
        <CardContent className="p-6 text-center">
          <div className="space-y-4">
            <div className="text-4xl">🚀</div>
            <h3 className="text-2xl font-bold">今すぐ行動開始！</h3>
            <p className="text-lg">技術は完成しました。次は文化を創造する番です！</p>
            <div className="flex justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => window.open("https://twitter.com/compose/tweet", "_blank")}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                今すぐツイート
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
              >
                デプロイ実行
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
