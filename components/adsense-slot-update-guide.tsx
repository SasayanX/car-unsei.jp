"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Copy, ExternalLink } from "lucide-react"

export function AdSenseSlotUpdateGuide() {
  const [slotIds, setSlotIds] = useState({
    result: "",
    content: "",
    items: "",
    footer: "",
  })

  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const adPlacements = [
    {
      id: "result",
      name: "診断結果後広告",
      location: "診断結果表示直後",
      currentSlot: "8610241854",
      priority: "最高",
      expectedCTR: "3-5%",
      description: "ユーザーの興奮度が最高の瞬間",
    },
    {
      id: "content",
      name: "詳細分析内広告",
      location: "詳細分析の途中",
      currentSlot: "7766782092",
      priority: "中",
      expectedCTR: "2-3%",
      description: "コンテンツに自然に溶け込む",
    },
    {
      id: "items",
      name: "アイテム後広告",
      location: "運気アップアイテム後",
      currentSlot: "7759344556",
      priority: "高",
      expectedCTR: "4-6%",
      description: "購買意欲が高まった状態",
    },
    {
      id: "footer",
      name: "フッター広告",
      location: "ページ最下部",
      currentSlot: "5655925392",
      priority: "低",
      expectedCTR: "1-2%",
      description: "離脱前の最後のチャンス",
    },
  ]

  const generateUpdatedCode = () => {
    const updates = adPlacements
      .map((placement) => {
        const newSlotId = slotIds[placement.id as keyof typeof slotIds] || placement.currentSlot
        return `// ${placement.name}
<AdSenseAd adSlot="${newSlotId}" adFormat="auto" className="my-6" label="${placement.name.replace("広告", "")}" />`
      })
      .join("\n\n")

    return updates
  }

  const allSlotsEntered = Object.values(slotIds).every((slot) => slot.trim() !== "")

  return (
    <div className="space-y-6">
      {/* ステータスヘッダー */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800">
            <CheckCircle className="w-6 h-6" />🎉 AdSense広告ユニット4つ設定完了！
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="text-lg font-bold text-green-800 mb-2">次のステップ: スロットIDを更新</h3>
              <p className="text-green-600">作成した4つの広告ユニットのスロットIDを入力してください</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* スロットID入力フォーム */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-800">📝 新しいスロットIDを入力</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {adPlacements.map((placement) => (
              <div key={placement.id} className="p-4 bg-gray-50 rounded-lg border">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-800">{placement.name}</h4>
                    <p className="text-sm text-gray-600">{placement.location}</p>
                  </div>
                  <div className="text-right">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-300 mb-1">{placement.priority}優先度</Badge>
                    <div className="text-xs text-gray-500">CTR: {placement.expectedCTR}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-gray-600">現在のスロットID:</span>
                    <code className="bg-gray-200 px-2 py-1 rounded text-gray-800">{placement.currentSlot}</code>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">新しいスロットID:</label>
                    <Input
                      type="text"
                      placeholder="例: 1234567890"
                      value={slotIds[placement.id as keyof typeof slotIds]}
                      onChange={(e) =>
                        setSlotIds((prev) => ({
                          ...prev,
                          [placement.id]: e.target.value,
                        }))
                      }
                      className="font-mono"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 更新されたコード表示 */}
      {allSlotsEntered && (
        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-800">
              <Copy className="w-6 h-6" />📋 更新されたコード
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-700">app/page.tsx の更新箇所:</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(generateUpdatedCode(), "updated-code")}
                  >
                    {copiedCode === "updated-code" ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copiedCode === "updated-code" ? "コピー済み" : "コピー"}
                  </Button>
                </div>
                <pre className="text-xs bg-gray-100 p-3 rounded overflow-x-auto">
                  <code>{generateUpdatedCode()}</code>
                </pre>
              </div>

              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">✅ 更新手順</h4>
                <ol className="text-sm text-green-700 space-y-1">
                  <li>1. 上記のコードをコピー</li>
                  <li>2. app/page.tsx の該当箇所を更新</li>
                  <li>3. 変更をコミット・プッシュ</li>
                  <li>4. Vercelで自動デプロイ確認</li>
                  <li>5. 本番サイトで広告表示をテスト</li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* 次のステップ */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <div className="text-4xl">🎯</div>
            <h3 className="text-xl font-bold text-purple-800">スロットID更新後の次のステップ</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-3 bg-white rounded border">
                <h4 className="font-semibold text-purple-800 mb-2">1. デプロイ確認</h4>
                <p className="text-sm text-purple-700">Vercelで自動デプロイが完了したか確認</p>
              </div>
              <div className="p-3 bg-white rounded border">
                <h4 className="font-semibold text-purple-800 mb-2">2. 広告表示テスト</h4>
                <p className="text-sm text-purple-700">本番サイトで実際に広告が表示されるかテスト</p>
              </div>
              <div className="p-3 bg-white rounded border">
                <h4 className="font-semibold text-purple-800 mb-2">3. マーケティング開始</h4>
                <p className="text-sm text-purple-700">SNS投稿とインフルエンサーアプローチ開始</p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-yellow-100 rounded-lg border border-yellow-300">
              <h4 className="font-semibold text-yellow-800 mb-2">💰 収益化開始まであと少し！</h4>
              <p className="text-sm text-yellow-700">
                スロットIDを更新してデプロイすれば、いよいよ収益化が本格的に開始されます！
                <br />
                文化として定着すれば月収50万円も夢ではありません！
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 緊急アクション */}
      <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <div className="text-4xl">⚡</div>
            <h3 className="text-xl font-bold text-red-800">今すぐ実行！</h3>
            <div className="space-y-2">
              <Button
                size="lg"
                className="w-full bg-red-600 hover:bg-red-700"
                onClick={() => window.open("https://www.google.com/adsense/", "_blank")}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                AdSense管理画面でスロットIDを確認
              </Button>
              <p className="text-sm text-red-600">⏰ スロットIDを入力して、収益化を完了させましょう！</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
