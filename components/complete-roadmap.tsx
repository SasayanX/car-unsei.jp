"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight, Target, Rocket, TrendingUp, ExternalLink } from "lucide-react"

export function CompleteRoadmap() {
  const [currentPhase, setCurrentPhase] = useState("monetization")

  // 完了済みタスク
  const completedTasks = [
    "✅ 基本機能開発完了",
    "✅ AdSenseパブリッシャーID設定",
    "✅ ads.txt設置",
    "✅ 友達紹介機能実装",
    "✅ PWA対応",
    "✅ SEO最適化",
    "✅ プライバシーポリシー・利用規約",
    "✅ 81画データ修正（110点）",
    "✅ 入力フィールド改善",
    "✅ ダークモード対応",
    "✅ レスポンシブデザイン",
    "✅ オフライン対応",
  ]

  // フェーズ別ロードマップ
  const phases = [
    {
      id: "monetization",
      title: "🎯 収益化完了",
      status: "current",
      priority: "最高",
      timeframe: "今すぐ〜3日",
      description: "AdSense収益化を完全に開始",
      tasks: [
        {
          task: "AdSense広告ユニット作成",
          status: "pending",
          priority: "最高",
          time: "30分",
          description: "4つの広告ユニットを作成してスロットIDを取得",
          action: "AdSense管理画面で作成",
        },
        {
          task: "実際のスロットIDに更新",
          status: "pending",
          priority: "最高",
          time: "15分",
          description: "取得したスロットIDをコードに反映",
          action: "コード更新",
        },
        {
          task: "本番環境デプロイ",
          status: "pending",
          priority: "最高",
          time: "10分",
          description: "Vercelに最新版をデプロイ",
          action: "デプロイ実行",
        },
        {
          task: "広告表示確認",
          status: "pending",
          priority: "高",
          time: "1時間",
          description: "実際のサイトで広告が表示されるかテスト",
          action: "動作確認",
        },
      ],
    },
    {
      id: "marketing",
      title: "📢 マーケティング開始",
      status: "next",
      priority: "高",
      timeframe: "3日〜2週間",
      description: "文化拡散とユーザー獲得",
      tasks: [
        {
          task: "SNS投稿開始",
          status: "ready",
          priority: "高",
          time: "毎日30分",
          description: "Twitter、Instagram、TikTokで定期投稿",
          action: "コンテンツ作成・投稿",
        },
        {
          task: "インフルエンサーアプローチ",
          status: "ready",
          priority: "高",
          time: "1週間",
          description: "住宅・占い系インフルエンサーに連絡",
          action: "DM送信・コラボ提案",
        },
        {
          task: "プレスリリース配信",
          status: "ready",
          priority: "中",
          time: "3日",
          description: "「新しい日本文化」としてメディアに発信",
          action: "PR作成・配信",
        },
        {
          task: "コミュニティ投稿",
          status: "ready",
          priority: "中",
          time: "継続",
          description: "Reddit、はてブ、note等で拡散",
          action: "コミュニティ参加",
        },
      ],
    },
    {
      id: "optimization",
      title: "⚡ 最適化・改善",
      status: "future",
      priority: "中",
      timeframe: "2週間〜1ヶ月",
      description: "収益とユーザー体験の最適化",
      tasks: [
        {
          task: "A/Bテスト実施",
          status: "planned",
          priority: "中",
          time: "継続",
          description: "広告配置、UI、コピーの最適化",
          action: "テスト設計・実行",
        },
        {
          task: "アナリティクス分析",
          status: "planned",
          priority: "中",
          time: "週1回",
          description: "ユーザー行動と収益データの分析",
          action: "データ分析・改善",
        },
        {
          task: "新機能追加",
          status: "planned",
          priority: "低",
          time: "随時",
          description: "ユーザーフィードバックに基づく機能追加",
          action: "開発・実装",
        },
        {
          task: "多言語対応",
          status: "planned",
          priority: "低",
          time: "1ヶ月",
          description: "英語版作成で海外展開",
          action: "翻訳・実装",
        },
      ],
    },
    {
      id: "scaling",
      title: "🚀 スケーリング",
      status: "future",
      priority: "低",
      timeframe: "1ヶ月〜3ヶ月",
      description: "事業拡大と収益最大化",
      tasks: [
        {
          task: "API化・B2B展開",
          status: "planned",
          priority: "低",
          time: "2ヶ月",
          description: "不動産会社向けAPI提供",
          action: "API開発・営業",
        },
        {
          task: "アプリ版開発",
          status: "planned",
          priority: "低",
          time: "3ヶ月",
          description: "ネイティブアプリ版リリース",
          action: "アプリ開発",
        },
        {
          task: "フランチャイズ展開",
          status: "planned",
          priority: "低",
          time: "6ヶ月",
          description: "他地域・他国への展開",
          action: "事業拡大",
        },
      ],
    },
  ]

  // 収益予測
  const revenueProjection = [
    { period: "1週間後", users: "100", revenue: "¥500", milestone: "初収益" },
    { period: "1ヶ月後", users: "1,000", revenue: "¥5,000", milestone: "月収5桁" },
    { period: "3ヶ月後", users: "10,000", revenue: "¥50,000", milestone: "月収5万" },
    { period: "6ヶ月後", users: "50,000", revenue: "¥200,000", milestone: "月収20万" },
    { period: "1年後", users: "100,000+", revenue: "¥500,000+", milestone: "月収50万+" },
  ]

  const getCurrentPhase = () => phases.find((p) => p.id === currentPhase) || phases[0]
  const currentPhaseData = getCurrentPhase()

  return (
    <div className="space-y-6">
      {/* 現在の状況サマリー */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <Target className="w-6 h-6" />🎯 現在の状況と次のステップ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* 進捗状況 */}
            <div className="text-center">
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="text-xl font-bold text-green-800 mb-2">開発完了！収益化フェーズ開始</h3>
              <Progress value={85} className="w-full mb-2" />
              <p className="text-sm text-green-600">全体進捗: 85% 完了</p>
            </div>

            {/* 完了済みタスク */}
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/60 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">✅ 完了済み ({completedTasks.length}項目)</h4>
                <div className="space-y-1 text-sm text-green-700 max-h-32 overflow-y-auto">
                  {completedTasks.map((task, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">🎯 今すぐやること</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-blue-700">
                    <ArrowRight className="w-3 h-3" />
                    <span>AdSense広告ユニット作成</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-blue-700">
                    <ArrowRight className="w-3 h-3" />
                    <span>スロットID更新</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-blue-700">
                    <ArrowRight className="w-3 h-3" />
                    <span>本番デプロイ</span>
                  </div>
                  <Button
                    size="sm"
                    className="w-full mt-2 bg-blue-600 hover:bg-blue-700"
                    onClick={() => window.open("https://www.google.com/adsense/", "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    AdSense管理画面を開く
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* フェーズ別詳細ロードマップ */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-800">
            <Rocket className="w-6 h-6" />📋 詳細ロードマップ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={currentPhase} onValueChange={setCurrentPhase} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              {phases.map((phase) => (
                <TabsTrigger
                  key={phase.id}
                  value={phase.id}
                  className={`text-xs ${
                    phase.status === "current"
                      ? "bg-blue-100 text-blue-800"
                      : phase.status === "next"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {phase.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {phases.map((phase) => (
              <TabsContent key={phase.id} value={phase.id} className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-800">{phase.title}</h3>
                    <div className="flex items-center gap-2">
                      <Badge
                        className={
                          phase.priority === "最高"
                            ? "bg-red-100 text-red-800 border-red-300"
                            : phase.priority === "高"
                              ? "bg-orange-100 text-orange-800 border-orange-300"
                              : phase.priority === "中"
                                ? "bg-yellow-100 text-yellow-800 border-yellow-300"
                                : "bg-gray-100 text-gray-600 border-gray-300"
                        }
                      >
                        {phase.priority}優先度
                      </Badge>
                      <Badge variant="outline">{phase.timeframe}</Badge>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{phase.description}</p>

                  <div className="space-y-3">
                    {phase.tasks.map((task, index) => (
                      <div key={index} className="p-3 bg-white rounded border">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-800">{task.task}</h4>
                          <div className="flex items-center gap-2">
                            <Badge
                              className={
                                task.status === "pending"
                                  ? "bg-blue-100 text-blue-800 border-blue-300"
                                  : task.status === "ready"
                                    ? "bg-green-100 text-green-800 border-green-300"
                                    : "bg-gray-100 text-gray-600 border-gray-300"
                              }
                            >
                              {task.status === "pending" ? "実行中" : task.status === "ready" ? "準備完了" : "計画中"}
                            </Badge>
                            <span className="text-xs text-gray-500">{task.time}</span>
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{task.description}</p>
                        <div className="text-xs text-blue-600 bg-blue-50 p-2 rounded">💡 アクション: {task.action}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* 収益予測 */}
      <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-yellow-800">
            <TrendingUp className="w-6 h-6" />💰 収益予測ロードマップ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-center mb-4">
              <div className="text-3xl mb-2">📈</div>
              <h3 className="text-lg font-bold text-yellow-800">文化が定着すれば月収50万円も可能！</h3>
            </div>

            <div className="grid gap-3">
              {revenueProjection.map((projection, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-medium text-yellow-800">{projection.period}</div>
                      <div className="text-sm text-yellow-600">{projection.users} ユーザー</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-yellow-800">{projection.revenue}</div>
                    <div className="text-xs text-yellow-600">{projection.milestone}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-3 bg-yellow-100 rounded-lg border border-yellow-300">
              <h4 className="font-semibold text-yellow-800 mb-2">🎯 成功の鍵</h4>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>�� 文化として定着させることが最重要</li>
                <li>• SNSでのバイラル拡散を狙う</li>
                <li>• インフルエンサーとのコラボで認知度向上</li>
                <li>• ユーザー体験を最優先に改善継続</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 緊急アクション */}
      <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <div className="text-4xl">🚨</div>
            <h3 className="text-xl font-bold text-red-800">今すぐやるべきこと（優先度：最高）</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 bg-white rounded border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">1. AdSense設定</h4>
                <p className="text-sm text-red-700 mb-2">広告ユニット作成とスロットID取得</p>
                <Button
                  size="sm"
                  className="w-full bg-red-600 hover:bg-red-700"
                  onClick={() => window.open("https://www.google.com/adsense/", "_blank")}
                >
                  今すぐ実行
                </Button>
              </div>
              <div className="p-3 bg-white rounded border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">2. コード更新</h4>
                <p className="text-sm text-red-700 mb-2">取得したスロットIDを反映</p>
                <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                  準備完了
                </Button>
              </div>
              <div className="p-3 bg-white rounded border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2">3. デプロイ</h4>
                <p className="text-sm text-red-700 mb-2">本番環境に最新版をデプロイ</p>
                <Button size="sm" className="w-full bg-red-600 hover:bg-red-700">
                  実行待ち
                </Button>
              </div>
            </div>
            <p className="text-sm text-red-600">⏰ この3ステップを完了すれば、収益化が開始されます！</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
