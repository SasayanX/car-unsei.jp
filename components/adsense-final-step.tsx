"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Trophy, ExternalLink, Target, TrendingUp, Zap } from "lucide-react"

export function AdSenseFinalStep() {
  return (
    <div className="space-y-6">
      {/* 祝福ヘッダー */}
      <Card className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <Trophy className="w-8 h-8 text-yellow-500" />🎉 AdSense実装 75%完了！あと1つ！
          </CardTitle>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-green-700 text-lg">実装状況</span>
              <span className="font-bold text-green-800 text-xl">3/4 完了</span>
            </div>
            <div className="w-full bg-green-200 rounded-full h-6">
              <div
                className="bg-gradient-to-r from-green-500 to-emerald-600 h-6 rounded-full transition-all duration-1000 flex items-center justify-center"
                style={{ width: "75%" }}
              >
                <span className="text-white text-sm font-bold">75%</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/80 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />✅ 実装完了（3つ）
                </h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 診断結果後広告 (8610241854)</li>
                  <li>• アイテム後広告 (7759344556)</li>
                  <li>• コンテンツ内広告 (7766782092) 🆕</li>
                </ul>
              </div>
              <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5" />🎯 残り1つ
                </h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• フッター広告の作成</li>
                  <li>• 完了まであと少し！</li>
                </ul>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* 最新実装: コンテンツ内広告 */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800 flex items-center gap-2">
            <Zap className="w-6 h-6" />🆕 最新実装: コンテンツ内広告
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-white rounded-lg border border-blue-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-800">スロットID: 7766782092</span>
              </div>
              <Badge className="bg-green-100 text-green-800 border-green-300">✅ 実装完了</Badge>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <strong>配置場所:</strong> 詳細分析の途中（インフィード広告として自然に配置）
              </p>
              <p className="text-sm text-gray-600">
                <strong>期待CTR:</strong> 1-3%（読み流れを邪魔しない自然な配置）
              </p>
              <p className="text-sm text-gray-600">
                <strong>戦略:</strong> ユーザーがコンテンツに集中している最中の効果的な配置
              </p>
            </div>
            <div className="mt-3 p-3 bg-blue-50 rounded border border-blue-200">
              <p className="text-sm text-blue-800">
                💡 <strong>実装のポイント:</strong>
                詳細分析の途中に配置することで、ユーザーの読み流れを自然に保ちながら広告を表示できます。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 収益予測 */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle className="text-purple-800 flex items-center gap-2">
            <TrendingUp className="w-6 h-6" />📈 収益予測（3つの広告実装済み）
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg border border-purple-200 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">高収益</div>
              <div className="text-sm text-purple-700">
                診断結果後広告
                <br />
                <span className="font-semibold">CTR: 3-5%</span>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-purple-200 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">中収益</div>
              <div className="text-sm text-purple-700">
                アイテム後広告
                <br />
                <span className="font-semibold">CTR: 2-4%</span>
              </div>
            </div>
            <div className="p-4 bg-white rounded-lg border border-purple-200 text-center">
              <div className="text-2xl font-bold text-purple-600 mb-2">安定収益</div>
              <div className="text-sm text-purple-700">
                コンテンツ内広告
                <br />
                <span className="font-semibold">CTR: 1-3%</span>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-green-100 rounded-lg border border-green-300">
            <p className="text-sm text-green-800 text-center">
              🎯 <strong>3つの広告で収益基盤が完成！</strong>
              <br />
              主要な収益ポイントはすべて実装済みです。フッター広告は追加の収益源として機能します。
            </p>
          </div>
        </CardContent>
      </Card>

      {/* 最後のステップ */}
      <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Trophy className="w-8 h-8 text-yellow-600" />
              <h3 className="text-xl font-bold text-yellow-800">🏁 最後のステップ</h3>
            </div>

            <div className="p-6 bg-white rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-3 text-lg">4. フッター広告を作成</h4>
              <p className="text-sm text-yellow-700 mb-4">
                ページ最下部に配置する控えめな広告。離脱前の最後のチャンス！
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 rounded border border-yellow-200">
                  <p className="text-xs text-yellow-700">
                    💡 <strong>フッター広告の特徴:</strong>
                    <br />• 控えめで邪魔にならない配置
                    <br />• 離脱前のユーザーをキャッチ
                    <br />• 期待CTR: 1-2%
                  </p>
                </div>

                <Button
                  size="lg"
                  onClick={() => window.open("https://www.google.com/adsense/", "_blank")}
                  className="bg-yellow-600 hover:bg-yellow-700 text-white w-full"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  AdSense管理画面で最後の広告ユニットを作成
                </Button>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg border border-green-300">
              <p className="text-sm text-green-800">
                🚀 <strong>もうすぐ完成です！</strong>
                <br />
                あと1つの広告ユニットで、完璧な収益化システムが完成します！
                <br />
                頑張って最後まで進めましょう！ 💪✨
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdSenseFinalStep
