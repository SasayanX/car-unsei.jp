"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, TrendingUp, ExternalLink, Target } from "lucide-react"

export function AdSenseProgressTracker() {
  const adUnits = [
    {
      id: "result-ad",
      name: "診断結果後広告",
      slotId: "8610241854",
      status: "completed",
      location: "診断結果表示直後",
      priority: "最高",
      expectedCTR: "3-5%",
      description: "✅ 実装完了！ユーザーが最も興奮している瞬間",
    },
    {
      id: "items-ad",
      name: "アイテム後広告",
      slotId: "7759344556",
      status: "completed",
      location: "運気アップアイテム後",
      priority: "高",
      expectedCTR: "2-4%",
      description: "✅ 実装完了！購買意欲が高まったタイミング",
    },
    {
      id: "content-ad",
      name: "コンテンツ内広告",
      slotId: "7766782092",
      status: "completed",
      location: "詳細分析の途中",
      priority: "中",
      expectedCTR: "1-3%",
      description: "✅ 実装完了！自然な読み流れの中に配置",
    },
    {
      id: "footer-ad",
      name: "フッター広告",
      slotId: "未作成",
      status: "pending",
      location: "ページ最下部",
      priority: "低",
      expectedCTR: "1-2%",
      description: "離脱前の最後のチャンス",
    },
  ]

  const completedCount = adUnits.filter((unit) => unit.status === "completed").length
  const progressPercentage = (completedCount / adUnits.length) * 100

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case "pending":
        return <Clock className="w-5 h-5 text-yellow-600" />
      default:
        return <Clock className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 border-green-300">✅ 実装済み</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">⏳ 作成待ち</Badge>
      default:
        return <Badge className="bg-gray-100 text-gray-600 border-gray-300">未対応</Badge>
    }
  }

  return (
    <div className="space-y-6">
      {/* 進捗ヘッダー */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <TrendingUp className="w-6 h-6" />🎉 AdSense実装進捗: 75%完了！
          </CardTitle>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-green-700">実装状況</span>
              <span className="font-bold text-green-800">{completedCount}/4 完了</span>
            </div>
            <div className="w-full bg-green-200 rounded-full h-4">
              <div
                className="bg-green-600 h-4 rounded-full transition-all duration-500 flex items-center justify-center"
                style={{ width: `${progressPercentage}%` }}
              >
                <span className="text-white text-xs font-bold">{Math.round(progressPercentage)}%</span>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-3 bg-white/60 rounded border">
                <h4 className="font-semibold text-green-800 mb-1">✅ 実装済み</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 診断結果後広告 (8610241854)</li>
                  <li>• アイテム後広告 (7759344556)</li>
                  <li>• コンテンツ内広告 (7766782092)</li>
                </ul>
              </div>
              <div className="p-3 bg-white/60 rounded border">
                <h4 className="font-semibold text-green-800 mb-1">🔄 残り作業</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• フッター広告の作成のみ</li>
                </ul>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* 最新実装: アイテム後広告 */}
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800">🆕 最新実装: アイテム後広告</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-white rounded-lg border border-blue-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-800">スロットID: 7759344556</span>
              </div>
              <Badge className="bg-green-100 text-green-800 border-green-300">✅ 実装完了</Badge>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <strong>配置場所:</strong> 運気アップアイテム紹介後（購買意欲が高まったタイミング）
              </p>
              <p className="text-sm text-gray-600">
                <strong>期待CTR:</strong> 2-4%（Amazon・楽天などの関連商品広告が効果的）
              </p>
              <p className="text-sm text-gray-600">
                <strong>戦略:</strong> ユーザーが開運アイテムに興味を持った直後の最適なタイミング
              </p>
            </div>
            <div className="mt-3 p-3 bg-green-50 rounded border border-green-200">
              <p className="text-sm text-green-800">
                💡 <strong>実装のポイント:</strong>
                運気アップアイテムで購買意欲が高まった直後に配置することで、関連商品への誘導が効果的になります。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 全体進捗 */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-800">📊 全広告ユニット実装状況</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {adUnits.map((unit, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg border ${
                  unit.status === "completed" ? "bg-green-50 border-green-200" : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    {getStatusIcon(unit.status)}
                    <div>
                      <h4 className="font-semibold text-gray-800">{unit.name}</h4>
                      <p className="text-sm text-gray-600">{unit.location}</p>
                    </div>
                  </div>
                  <div className="text-right space-y-1">
                    {getStatusBadge(unit.status)}
                    <div className="text-xs text-gray-500">優先度: {unit.priority}</div>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">スロットID:</span>
                    <div
                      className={`font-mono mt-1 ${
                        unit.status === "completed" ? "text-green-600 font-bold" : "text-gray-400"
                      }`}
                    >
                      {unit.slotId}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-600">期待CTR:</span>
                    <div className="mt-1 font-semibold text-blue-600">{unit.expectedCTR}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">状態:</span>
                    <div className="mt-1">{unit.description}</div>
                  </div>
                </div>

                {unit.status === "pending" && (
                  <div className="mt-3 p-2 bg-yellow-50 rounded border border-yellow-200">
                    <p className="text-xs text-yellow-700">
                      💡 AdSense管理画面で「{unit.name}」を作成してスロットIDを取得してください
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 次のステップ */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Target className="w-8 h-8 text-purple-600" />
              <h3 className="text-xl font-bold text-purple-800">次のステップ</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="p-4 bg-white rounded border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2">3. コンテンツ内広告を作成</h4>
                <p className="text-sm text-purple-700 mb-2">詳細分析の途中に配置する自然な広告</p>
                <Button
                  size="sm"
                  onClick={() => window.open("https://www.google.com/adsense/", "_blank")}
                  className="bg-purple-600 hover:bg-purple-700 text-white"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  AdSense管理画面
                </Button>
              </div>

              <div className="p-4 bg-white rounded border border-purple-200">
                <h4 className="font-semibold text-purple-800 mb-2">4. フッター広告を作成</h4>
                <p className="text-sm text-purple-700 mb-2">ページ最下部の控えめな配置</p>
                <div className="text-xs text-purple-600">優先度: 低（時間があるときに実装）</div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-green-100 rounded-lg border border-green-300">
              <p className="text-sm text-green-800">
                🎉 <strong>素晴らしい進歩です！</strong>
                <br />
                2つの重要な広告ユニットが実装され、収益化が本格的に開始されました！
                <br />
                残り2つも同じ手順で作成して、収益を最大化しましょう！
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdSenseProgressTracker
