"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Monitor, Smartphone, Target, TrendingUp, CheckCircle, AlertTriangle } from "lucide-react"

export function AdSenseAdTypesGuide() {
  const [selectedAdType, setSelectedAdType] = useState("display")

  const adTypes = [
    {
      id: "display",
      name: "ディスプレイ広告",
      icon: <Monitor className="w-5 h-5" />,
      description: "最も一般的で使いやすい広告形式",
      pros: ["設定が簡単", "レスポンシブ対応", "幅広い広告主", "安定した収益", "コンテンツに馴染みやすい"],
      cons: ["CTRが比較的低い場合がある", "競合が多い"],
      bestFor: "コンテンツサイト、ブログ、アプリ",
      revenue: "中〜高",
      difficulty: "簡単",
      recommended: true,
    },
    {
      id: "infeed",
      name: "インフィード広告",
      icon: <Smartphone className="w-5 h-5" />,
      description: "コンテンツの流れに自然に溶け込む広告",
      pros: ["ユーザー体験を損なわない", "高いCTR", "モバイルに最適", "ネイティブ感が強い"],
      cons: ["設定がやや複雑", "デザインの調整が必要", "コンテンツとの区別が重要"],
      bestFor: "ニュースサイト、SNS風サイト、リスト形式コンテンツ",
      revenue: "高",
      difficulty: "中級",
      recommended: false,
    },
    {
      id: "article",
      name: "記事内広告",
      icon: <Target className="w-5 h-5" />,
      description: "記事の段落間に挿入される広告",
      pros: ["読者の注意を引きやすい", "コンテンツとの親和性が高い", "自動配置可能"],
      cons: ["記事が長い場合のみ効果的", "読者体験への影響", "配置位置の最適化が必要"],
      bestFor: "長文記事、ブログ投稿、ニュース記事",
      revenue: "中",
      difficulty: "中級",
      recommended: false,
    },
    {
      id: "multiplex",
      name: "Multiplex広告",
      icon: <TrendingUp className="w-5 h-5" />,
      description: "複数の広告を格子状に表示",
      pros: ["高い収益性", "複数広告の同時表示", "ユーザーの選択肢が多い"],
      cons: ["ページの読み込み速度への影響", "デザインとの調和が難しい", "モバイルでは効果が限定的"],
      bestFor: "デスクトップ中心のサイト、比較サイト",
      revenue: "高",
      difficulty: "上級",
      recommended: false,
    },
  ]

  const ourSiteRecommendations = [
    {
      location: "診断結果後",
      adType: "ディスプレイ広告",
      reason: "ユーザーが最も興奮している瞬間。シンプルで効果的",
      format: "レスポンシブ",
      priority: "最高",
      status: "✅ 実装済み",
    },
    {
      location: "詳細分析の途中",
      adType: "ディスプレイ広告",
      reason: "コンテンツに自然に溶け込む。読み進める流れを邪魔しない",
      format: "レスポンシブ",
      priority: "高",
      status: "🔄 次に実装",
    },
    {
      location: "運気アップアイテム後",
      adType: "ディスプレイ広告",
      reason: "購買意欲が高まったタイミング。関連商品広告が効果的",
      format: "レクタングル",
      priority: "高",
      status: "🔄 次に実装",
    },
    {
      location: "フッター",
      adType: "ディスプレイ広告",
      reason: "離脱前の最後のチャンス。負荷が少ない",
      format: "バナー",
      priority: "中",
      status: "🔄 次に実装",
    },
  ]

  const getRevenueColor = (revenue: string) => {
    switch (revenue) {
      case "高":
        return "text-green-600 bg-green-100"
      case "中〜高":
        return "text-blue-600 bg-blue-100"
      case "中":
        return "text-yellow-600 bg-yellow-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "簡単":
        return "text-green-600 bg-green-100"
      case "中級":
        return "text-yellow-600 bg-yellow-100"
      case "上級":
        return "text-red-600 bg-red-100"
      default:
        return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-purple-800">
            <Target className="w-6 h-6" />
            AdSense広告タイプ完全ガイド
          </CardTitle>
          <p className="text-purple-600">住まい運勢チェッカーに最適な広告タイプを選択しましょう！</p>
        </CardHeader>
      </Card>

      {/* 結論：推奨事項 */}
      <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <CheckCircle className="w-6 h-6" />🎯 結論：全てディスプレイ広告がベスト！
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-white/60 rounded-lg border border-green-200">
            <h4 className="font-semibold text-green-800 mb-2">✅ 住まい運勢チェッカーに最適な理由</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>
                • <strong>シンプルな診断アプリ</strong> → 複雑な広告は不要
              </li>
              <li>
                • <strong>短時間の利用</strong> → 素早く表示されるディスプレイ広告が最適
              </li>
              <li>
                • <strong>モバイル中心</strong> → レスポンシブ対応が重要
              </li>
              <li>
                • <strong>初回実装</strong> → 設定が簡単で安定している
              </li>
              <li>
                • <strong>文化創造フェーズ</strong> → ユーザー体験を最優先
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-3 bg-white/60 rounded border">
              <h5 className="font-semibold text-green-800 mb-1">💰 収益面のメリット</h5>
              <ul className="text-xs text-green-700 space-y-1">
                <li>• 幅広い広告主からの需要</li>
                <li>• 安定した収益性</li>
                <li>• 最適化が自動で行われる</li>
              </ul>
            </div>
            <div className="p-3 bg-white/60 rounded border">
              <h5 className="font-semibold text-green-800 mb-1">🎨 UX面のメリット</h5>
              <ul className="text-xs text-green-700 space-y-1">
                <li>• ユーザー体験を損なわない</li>
                <li>• 読み込み速度が速い</li>
                <li>• デザインに馴染みやすい</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 詳細比較 */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-800">📊 広告タイプ詳細比較</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedAdType} onValueChange={setSelectedAdType} className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              {adTypes.map((type) => (
                <TabsTrigger key={type.id} value={type.id} className="text-xs">
                  {type.icon}
                  <span className="ml-1 hidden sm:inline">{type.name.split("広告")[0]}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {adTypes.map((type) => (
              <TabsContent key={type.id} value={type.id} className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-gray-800">{type.name}</h3>
                      {type.recommended && (
                        <Badge className="bg-green-100 text-green-800 border-green-300">🌟 推奨</Badge>
                      )}
                    </div>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                  </div>
                  <div className="flex flex-col gap-2 ml-4">
                    <Badge className={`text-xs px-2 py-1 ${getRevenueColor(type.revenue)}`}>
                      💰 {type.revenue}収益
                    </Badge>
                    <Badge className={`text-xs px-2 py-1 ${getDifficultyColor(type.difficulty)}`}>
                      🔧 {type.difficulty}
                    </Badge>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      メリット
                    </h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      {type.pros.map((pro, index) => (
                        <li key={index}>• {pro}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                    <h4 className="font-semibold text-orange-800 mb-2 flex items-center gap-1">
                      <AlertTriangle className="w-4 h-4" />
                      デメリット
                    </h4>
                    <ul className="text-sm text-orange-700 space-y-1">
                      {type.cons.map((con, index) => (
                        <li key={index}>• {con}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-1">🎯 最適な用途</h4>
                  <p className="text-sm text-blue-700">{type.bestFor}</p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* 我々のサイトでの推奨配置 */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800">🏠 住まい運勢チェッカーでの最適配置</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            {ourSiteRecommendations.map((rec, index) => (
              <div key={index} className="p-4 bg-white/60 rounded-lg border">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-blue-800">{rec.location}</h4>
                  <div className="flex items-center gap-2">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-300 text-xs">{rec.adType}</Badge>
                    <Badge
                      className={
                        rec.priority === "最高"
                          ? "bg-red-100 text-red-800 border-red-300 text-xs"
                          : rec.priority === "高"
                            ? "bg-orange-100 text-orange-800 border-orange-300 text-xs"
                            : "bg-yellow-100 text-yellow-800 border-yellow-300 text-xs"
                      }
                    >
                      {rec.priority}優先度
                    </Badge>
                    <span className="text-xs">{rec.status}</span>
                  </div>
                </div>
                <p className="text-sm text-blue-700 mb-1">{rec.reason}</p>
                <p className="text-xs text-blue-600">形式: {rec.format}</p>
              </div>
            ))}
          </div>

          <div className="p-4 bg-blue-100 rounded-lg border border-blue-300">
            <h4 className="font-semibold text-blue-800 mb-2">📋 実装計画</h4>
            <ol className="text-sm text-blue-700 space-y-1">
              <li>
                1. <strong>全て「ディスプレイ広告」で作成</strong> ✅
              </li>
              <li>
                2. <strong>サイズは「レスポンシブ」を選択</strong> ✅
              </li>
              <li>
                3. <strong>残り3つの広告ユニットを同じ手順で作成</strong> 🔄
              </li>
              <li>
                4. <strong>各スロットIDを順次更新</strong> 🔄
              </li>
              <li>
                5. <strong>本番環境で動作確認</strong> 🔄
              </li>
            </ol>
          </div>
        </CardContent>
      </Card>

      {/* 将来の拡張可能性 */}
      <Card className="bg-gray-50 border-gray-200">
        <CardHeader>
          <CardTitle className="text-gray-800">🚀 将来の拡張可能性</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p className="text-sm text-gray-600">現在はディスプレイ広告で開始し、サイトが成長したら以下を検討：</p>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-3 bg-white rounded border">
              <h5 className="font-semibold text-gray-800 mb-1">📈 トラフィック増加後</h5>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• インフィード広告の追加</li>
                <li>• A/Bテストで最適化</li>
                <li>• 記事コンテンツ追加時は記事内広告</li>
              </ul>
            </div>
            <div className="p-3 bg-white rounded border">
              <h5 className="font-semibold text-gray-800 mb-1">💡 機能拡張後</h5>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• 詳細レポート機能追加時</li>
                <li>• ユーザー登録機能追加時</li>
                <li>• コミュニティ機能追加時</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdSenseAdTypesGuide
