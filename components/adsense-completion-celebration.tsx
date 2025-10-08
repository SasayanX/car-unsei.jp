"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Trophy, Target, Star, Rocket, DollarSign } from "lucide-react"

export function AdSenseCompletionCelebration() {
  const adUnits = [
    {
      id: "result-ad",
      name: "診断結果後広告",
      slotId: "8610241854",
      location: "診断結果表示直後",
      priority: "最高",
      expectedCTR: "3-5%",
      revenue: "高",
      description: "ユーザーが最も興奮している瞬間",
      color: "from-red-50 to-pink-50 border-red-200",
      textColor: "text-red-800",
    },
    {
      id: "items-ad",
      name: "アイテム後広告",
      slotId: "7759344556",
      location: "運気アップアイテム後",
      priority: "高",
      expectedCTR: "2-4%",
      revenue: "中高",
      description: "購買意欲が高まったタイミング",
      color: "from-orange-50 to-yellow-50 border-orange-200",
      textColor: "text-orange-800",
    },
    {
      id: "content-ad",
      name: "コンテンツ内広告",
      slotId: "7766782092",
      location: "詳細分析の途中",
      priority: "中",
      expectedCTR: "1-3%",
      revenue: "中",
      description: "自然な読み流れの中に配置",
      color: "from-blue-50 to-indigo-50 border-blue-200",
      textColor: "text-blue-800",
    },
    {
      id: "footer-ad",
      name: "フッター広告",
      slotId: "5655925392",
      location: "ページ最下部",
      priority: "低",
      expectedCTR: "1-2%",
      revenue: "安定",
      description: "離脱前の最後のチャンス",
      color: "from-green-50 to-emerald-50 border-green-200",
      textColor: "text-green-800",
    },
  ]

  return (
    <div className="space-y-6">
      {/* 完了祝福ヘッダー */}
      <Card className="bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50 border-yellow-300">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-yellow-800 text-2xl">
            <Trophy className="w-10 h-10 text-yellow-500" />🎉 AdSense実装 100%完了！おめでとうございます！
          </CardTitle>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-yellow-700 text-xl">実装状況</span>
              <span className="font-bold text-yellow-800 text-2xl">4/4 完了</span>
            </div>
            <div className="w-full bg-yellow-200 rounded-full h-8">
              <div className="bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 h-8 rounded-full transition-all duration-2000 flex items-center justify-center animate-pulse">
                <span className="text-white text-lg font-bold">🎯 100% COMPLETE! 🎯</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/80 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />✅ 全広告ユニット実装完了
                </h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• 診断結果後広告 (8610241854)</li>
                  <li>• アイテム後広告 (7759344556)</li>
                  <li>• コンテンツ内広告 (7766782092)</li>
                  <li>• フッター広告 (5655925392) 🆕</li>
                </ul>
              </div>
              <div className="p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <Rocket className="w-6 h-6" />🚀 収益化システム完成
                </h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 完璧な広告配置戦略</li>
                  <li>• 最適化されたユーザー体験</li>
                  <li>• 収益最大化の仕組み</li>
                  <li>• 本格運用開始準備完了</li>
                </ul>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* 最新完了: フッター広告 */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-green-800 flex items-center gap-2">
            <Star className="w-6 h-6 text-yellow-500" />🏁 最終実装: フッター広告
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-white rounded-lg border border-green-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-800">スロットID: 5655925392</span>
              </div>
              <Badge className="bg-green-100 text-green-800 border-green-300">✅ 実装完了</Badge>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <strong>配置場所:</strong> ページ最下部（控えめで邪魔にならない配置）
              </p>
              <p className="text-sm text-gray-600">
                <strong>期待CTR:</strong> 1-2%（離脱前のユーザーをキャッチ）
              </p>
              <p className="text-sm text-gray-600">
                <strong>戦略:</strong> 最後の収益機会として安定した収入源を確保
              </p>
            </div>
            <div className="mt-3 p-3 bg-green-50 rounded border border-green-200">
              <p className="text-sm text-green-800">
                🎯 <strong>完璧な仕上げ:</strong>
                フッター広告により、4つの戦略的配置が完成し、収益機会を最大化できました！
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 全広告ユニット概要 */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-800 flex items-center gap-2">
            <Target className="w-6 h-6" />📊 完成した収益化システム
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {adUnits.map((unit, index) => (
              <div key={index} className={`p-4 rounded-lg border bg-gradient-to-br ${unit.color}`}>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <div>
                      <h4 className={`font-semibold ${unit.textColor}`}>{unit.name}</h4>
                      <p className="text-sm text-gray-600">{unit.location}</p>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    <Badge className="bg-green-100 text-green-800 border-green-300">✅ 完了</Badge>
                    <div className="text-xs text-gray-500">優先度: {unit.priority}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">スロットID:</span>
                    <div className="font-mono mt-1 text-green-600 font-bold">{unit.slotId}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">期待CTR:</span>
                    <div className="mt-1 font-semibold text-blue-600">{unit.expectedCTR}</div>
                  </div>
                </div>

                <div className="mt-3">
                  <span className="text-gray-600 text-sm">戦略:</span>
                  <div className="mt-1 text-sm">{unit.description}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 収益予測と次のステップ */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle className="text-purple-800 flex items-center gap-2">
            <DollarSign className="w-6 h-6" />💰 収益予測と運用開始
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {/* 収益予測 */}
            <div className="grid md:grid-cols-4 gap-3">
              <div className="p-3 bg-white rounded border border-red-200 text-center">
                <div className="text-lg font-bold text-red-600 mb-1">最高収益</div>
                <div className="text-xs text-red-700">
                  診断結果後
                  <br />
                  CTR: 3-5%
                </div>
              </div>
              <div className="p-3 bg-white rounded border border-orange-200 text-center">
                <div className="text-lg font-bold text-orange-600 mb-1">高収益</div>
                <div className="text-xs text-orange-700">
                  アイテム後
                  <br />
                  CTR: 2-4%
                </div>
              </div>
              <div className="p-3 bg-white rounded border border-blue-200 text-center">
                <div className="text-lg font-bold text-blue-600 mb-1">中収益</div>
                <div className="text-xs text-blue-700">
                  コンテンツ内
                  <br />
                  CTR: 1-3%
                </div>
              </div>
              <div className="p-3 bg-white rounded border border-green-200 text-center">
                <div className="text-lg font-bold text-green-600 mb-1">安定収益</div>
                <div className="text-xs text-green-700">
                  フッター
                  <br />
                  CTR: 1-2%
                </div>
              </div>
            </div>

            {/* 次のステップ */}
            <div className="p-6 bg-white rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-4 text-lg">🚀 次のステップ</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h5 className="font-semibold text-purple-700">即座に実行</h5>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• 本番環境での動作確認</li>
                    <li>• AdSense管理画面で収益監視</li>
                    <li>• 広告表示の最適化</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h5 className="font-semibold text-purple-700">継続的改善</h5>
                  <ul className="text-sm text-purple-600 space-y-1">
                    <li>• CTRデータの分析</li>
                    <li>• A/Bテストの実施</li>
                    <li>• ユーザー体験の最適化</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 祝福メッセージ */}
            <div className="p-6 bg-gradient-to-r from-yellow-100 via-orange-100 to-red-100 rounded-lg border border-yellow-300">
              <div className="text-center space-y-3">
                <div className="text-2xl">🎉🎊🏆🎊🎉</div>
                <h3 className="text-xl font-bold text-yellow-800">完璧なAdSense実装が完了しました！</h3>
                <p className="text-yellow-700">
                  4つの戦略的広告配置により、最適化された収益化システムが完成しました。
                  <br />
                  「住まいの運勢チェッカー」の本格的な収益化が開始されます！
                </p>
                <div className="text-lg font-semibold text-yellow-800">🚀 収益化の旅が始まります！ 🚀</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdSenseCompletionCelebration
