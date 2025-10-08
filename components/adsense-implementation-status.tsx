"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, Clock, AlertCircle, TrendingUp, Copy } from "lucide-react"
import { useState } from "react"

export function AdSenseImplementationStatus() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const adUnits = [
    {
      id: "result-ad",
      name: "診断結果後広告",
      slotId: "8610241854",
      status: "completed",
      location: "診断結果表示直後",
      priority: "最高",
      currentCode: `<AdSenseAd adSlot="8610241854" adFormat="auto" className="my-6" label="おすすめ" />`,
      description: "✅ 実際のスロットIDで実装済み！",
    },
    {
      id: "items-ad",
      name: "アイテム後広告",
      slotId: "未作成",
      status: "pending",
      location: "運気アップアイテム後",
      priority: "高",
      currentCode: `<AdSenseAd adSlot="2345678901" adFormat="auto" className="my-4" label="関連情報" />`,
      description: "次に作成すべき広告ユニット",
    },
    {
      id: "content-ad",
      name: "コンテンツ内広告",
      slotId: "未作成",
      status: "pending",
      location: "詳細分析の途中",
      priority: "中",
      currentCode: `<AdSenseAd adSlot="3456789012" adFormat="horizontal" className="my-6" label="あなたにおすすめ" />`,
      description: "インフィード広告として効果的",
    },
    {
      id: "footer-ad",
      name: "フッター広告",
      slotId: "未作成",
      status: "pending",
      location: "ページ最下部",
      priority: "低",
      currentCode: `<AdSenseAd adSlot="4567890123" adFormat="auto" className="mt-8" label="スポンサー" />`,
      description: "離脱前の最後のチャンス",
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case "pending":
        return <Clock className="w-5 h-5 text-yellow-600" />
      default:
        return <AlertCircle className="w-5 h-5 text-red-600" />
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800 border-green-300">✅ 実装済み</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">⏳ 作成待ち</Badge>
      default:
        return <Badge className="bg-red-100 text-red-800 border-red-300">❌ 未対応</Badge>
    }
  }

  const completedCount = adUnits.filter((unit) => unit.status === "completed").length
  const progressPercentage = (completedCount / adUnits.length) * 100

  return (
    <div className="space-y-6">
      {/* 進捗状況ヘッダー */}
      <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <TrendingUp className="w-6 h-6" />🎉 AdSense実装状況
          </CardTitle>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-green-700">進捗状況</span>
              <span className="font-bold text-green-800">{completedCount}/4 完了</span>
            </div>
            <div className="w-full bg-green-200 rounded-full h-3">
              <div
                className="bg-green-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-green-600">🚀 最初の広告ユニットが実装されました！収益化開始です！</p>
          </div>
        </CardHeader>
      </Card>

      {/* 実装済み広告の詳細 */}
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-blue-800">🎯 実装済み: 診断結果後広告</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 bg-white rounded-lg border border-blue-200">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-800">スロットID: 8610241854</span>
              </div>
              <Badge className="bg-green-100 text-green-800 border-green-300">✅ 実装完了</Badge>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <strong>配置場所:</strong> 診断結果表示の直後（最も効果的な位置）
              </p>
              <p className="text-sm text-gray-600">
                <strong>期待CTR:</strong> 3-5%（ユーザーの興奮度が最高の瞬間）
              </p>
              <p className="text-sm text-gray-600">
                <strong>広告形式:</strong> レスポンシブ（自動サイズ調整）
              </p>
            </div>
            <div className="mt-3 p-3 bg-gray-50 rounded border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">実装コード:</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => copyToClipboard(adUnits[0].currentCode, "result-code")}
                >
                  {copiedCode === "result-code" ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copiedCode === "result-code" ? "コピー済み" : "コピー"}
                </Button>
              </div>
              <code className="text-xs text-gray-600 bg-gray-100 p-2 rounded block">{adUnits[0].currentCode}</code>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 全広告ユニット一覧 */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-800">📊 全広告ユニット実装状況</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {adUnits.map((unit, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg border">
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

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">スロットID:</span>
                    <span
                      className={`font-mono ${
                        unit.status === "completed" ? "text-green-600 font-bold" : "text-gray-400"
                      }`}
                    >
                      {unit.slotId}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{unit.description}</p>

                  {unit.status === "pending" && (
                    <div className="mt-2 p-2 bg-yellow-50 rounded border border-yellow-200">
                      <p className="text-xs text-yellow-700">
                        💡 AdSense管理画面で「{unit.name}」を作成してスロットIDを取得してください
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 次のステップ */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <div className="text-4xl">🚀</div>
            <h3 className="text-xl font-bold text-purple-800">次のステップ</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="p-3 bg-white rounded border">
                <h4 className="font-semibold text-purple-800 mb-2">1. 残り3つの広告ユニット作成</h4>
                <p className="text-sm text-purple-700">AdSense管理画面で残りの広告ユニットを作成</p>
              </div>
              <div className="p-3 bg-white rounded border">
                <h4 className="font-semibold text-purple-800 mb-2">2. スロットIDを順次更新</h4>
                <p className="text-sm text-purple-700">取得したスロットIDをコードに反映</p>
              </div>
              <div className="p-3 bg-white rounded border">
                <h4 className="font-semibold text-purple-800 mb-2">3. 本番環境で動作確認</h4>
                <p className="text-sm text-purple-700">実際のサイトで広告表示をチェック</p>
              </div>
              <div className="p-3 bg-white rounded border">
                <h4 className="font-semibold text-purple-800 mb-2">4. 収益データの監視開始</h4>
                <p className="text-sm text-purple-700">AdSense管理画面で収益を追跡</p>
              </div>
            </div>
            <div className="mt-4 p-4 bg-green-100 rounded-lg border border-green-300">
              <p className="text-sm text-green-800">
                🎉 <strong>おめでとうございます！</strong>
                最初の広告ユニットが実装され、収益化が開始されました！
                <br />
                残りの3つも同じ手順で作成して、収益を最大化しましょう！
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdSenseImplementationStatus
