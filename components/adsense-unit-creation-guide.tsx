"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ExternalLink, Copy, CheckCircle, ArrowRight, Monitor, Smartphone, Settings } from "lucide-react"

export function AdSenseUnitCreationGuide() {
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
      size: "レクタングル (336×280)",
      placement: "診断結果表示の直後",
      priority: "最高",
      expectedCTR: "3-5%",
      description: "ユーザーが最も興奮している瞬間に表示",
    },
    {
      id: "items-ad",
      name: "アイテム後広告",
      size: "バナー (728×90) / モバイル (320×50)",
      placement: "運気アップアイテム紹介後",
      priority: "高",
      expectedCTR: "2-4%",
      description: "購買意欲が高まったタイミング",
    },
    {
      id: "content-ad",
      name: "コンテンツ内広告",
      size: "レスポンシブ",
      placement: "詳細分析の途中",
      priority: "中",
      expectedCTR: "1-3%",
      description: "自然にコンテンツに溶け込む",
    },
    {
      id: "footer-ad",
      name: "フッター広告",
      size: "レスポンシブ",
      placement: "ページ最下部",
      priority: "低",
      expectedCTR: "1-2%",
      description: "離脱前の最後のチャンス",
    },
  ]

  const steps = [
    {
      step: 1,
      title: "AdSense管理画面にログイン",
      description: "Google AdSenseにアクセスしてログイン",
      action: "ログイン",
      url: "https://www.google.com/adsense/",
      details: [
        "Googleアカウントでログイン",
        "パブリッシャーID ca-pub-3409171148853394 が表示されることを確認",
        "左側メニューから「広告」を選択",
      ],
    },
    {
      step: 2,
      title: "新しい広告ユニットを作成",
      description: "「広告ユニットごと」→「ディスプレイ広告」を選択",
      action: "作成開始",
      details: [
        "「広告ユニットごと」タブをクリック",
        "「ディスプレイ広告」を選択",
        "広告ユニット名を入力（例：診断結果後広告）",
      ],
    },
    {
      step: 3,
      title: "広告サイズを設定",
      description: "レスポンシブまたは固定サイズを選択",
      action: "サイズ設定",
      details: [
        "レスポンシブ（推奨）: 自動でサイズ調整",
        "固定サイズ: 336×280（レクタングル）推奨",
        "モバイル対応を必ず確認",
      ],
    },
    {
      step: 4,
      title: "広告コードを取得",
      description: "生成されたHTMLコードをコピー",
      action: "コード取得",
      details: ["「作成」ボタンをクリック", "生成されたHTMLコードをコピー", "data-ad-slot の値をメモ（重要！）"],
    },
  ]

  const generateUpdatedAdCode = (slotId: string, unitName: string) => {
    return `// ${unitName}用の更新されたコード
<AdSenseAd 
  adSlot="${slotId}"
  adFormat="auto"
  className="my-6"
  label="おすすめ"
/>`
  }

  return (
    <div className="space-y-6">
      {/* ヘッダー */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <Settings className="w-6 h-6" />📋 AdSense広告ユニット作成ガイド
          </CardTitle>
          <p className="text-blue-600">実際の広告スロットIDを取得して、収益化を完了させましょう！</p>
        </CardHeader>
      </Card>

      {/* ステップバイステップガイド */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-800">🚀 ステップバイステップ作成手順</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="steps" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="steps">作成手順</TabsTrigger>
              <TabsTrigger value="units">広告ユニット</TabsTrigger>
              <TabsTrigger value="implementation">実装方法</TabsTrigger>
            </TabsList>

            <TabsContent value="steps" className="space-y-4">
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    {index < steps.length - 1 && <div className="absolute left-6 top-12 w-0.5 h-16 bg-blue-300"></div>}
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-semibold text-gray-800">{step.title}</h3>
                          {step.url && (
                            <Button
                              size="sm"
                              onClick={() => window.open(step.url, "_blank")}
                              className="bg-blue-600 hover:bg-blue-700"
                            >
                              <ExternalLink className="w-4 h-4 mr-1" />
                              {step.action}
                            </Button>
                          )}
                        </div>
                        <p className="text-gray-600 mb-2">{step.description}</p>
                        <ul className="text-sm text-gray-500 space-y-1">
                          {step.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center gap-2">
                              <ArrowRight className="w-3 h-3 text-blue-600" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="units" className="space-y-4">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800">📊 作成すべき広告ユニット一覧</h4>
                <div className="space-y-3">
                  {adUnits.map((unit, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg border">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-800 mb-1">{unit.name}</h5>
                          <p className="text-sm text-gray-600 mb-2">{unit.description}</p>
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span>📐 {unit.size}</span>
                            <span>📍 {unit.placement}</span>
                            <span>📈 CTR: {unit.expectedCTR}</span>
                          </div>
                        </div>
                        <Badge
                          className={
                            unit.priority === "最高"
                              ? "bg-red-100 text-red-800 border-red-300"
                              : unit.priority === "高"
                                ? "bg-orange-100 text-orange-800 border-orange-300"
                                : unit.priority === "中"
                                  ? "bg-yellow-100 text-yellow-800 border-yellow-300"
                                  : "bg-gray-100 text-gray-600 border-gray-300"
                          }
                        >
                          {unit.priority}優先度
                        </Badge>
                      </div>
                      <div className="text-xs text-blue-600 bg-blue-50 p-2 rounded">
                        💡 AdSense管理画面で「{unit.name}」という名前で作成してください
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="implementation" className="space-y-4">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800">🔧 取得したスロットIDの実装方法</h4>

                <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <h5 className="font-semibold text-yellow-800 mb-2">⚠️ 重要：スロットIDの確認方法</h5>
                  <div className="text-sm text-yellow-700 space-y-2">
                    <p>AdSense管理画面で広告ユニットを作成すると、以下のようなコードが生成されます：</p>
                    <div className="bg-gray-800 text-green-400 p-3 rounded font-mono text-xs">
                      {`<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-3409171148853394"
     data-ad-slot="1234567890"
     data-ad-format="auto"></ins>`}
                    </div>
                    <p>
                      <strong>data-ad-slot="1234567890"</strong> の部分が重要です！
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <h5 className="font-semibold text-gray-800">📝 実装例</h5>
                  {adUnits.map((unit, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-gray-800">{unit.name}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            copyToClipboard(generateUpdatedAdCode("取得したスロットID", unit.name), unit.id)
                          }
                        >
                          {copiedCode === unit.id ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          {copiedCode === unit.id ? "コピー済み" : "コピー"}
                        </Button>
                      </div>
                      <div className="bg-gray-800 text-green-400 p-2 rounded text-xs font-mono">
                        {generateUpdatedAdCode("取得したスロットID", unit.name)}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-800 mb-2">🔄 更新手順</h5>
                  <ol className="text-sm text-blue-700 space-y-1">
                    <li>1. AdSense管理画面で4つの広告ユニットを作成</li>
                    <li>2. 各ユニットのスロットIDをメモ</li>
                    <li>3. app/page.tsx の AdSenseAd コンポーネントのadSlot属性を更新</li>
                    <li>4. 本番環境にデプロイして動作確認</li>
                  </ol>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* 画面別ガイド */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-800">
              <Monitor className="w-5 h-5" />
              デスクトップ版ガイド
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm text-purple-700 space-y-2">
              <p>
                <strong>1. 左メニュー「広告」をクリック</strong>
              </p>
              <p>
                <strong>2. 「広告ユニットごと」タブを選択</strong>
              </p>
              <p>
                <strong>3. 「ディスプレイ広告」をクリック</strong>
              </p>
              <p>
                <strong>4. 広告ユニット名を入力</strong>
              </p>
              <p>
                <strong>5. サイズを「レスポンシブ」に設定</strong>
              </p>
              <p>
                <strong>6. 「作成」ボタンをクリック</strong>
              </p>
            </div>
            <Button
              onClick={() => window.open("https://www.google.com/adsense/", "_blank")}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              AdSense管理画面を開く
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-green-800">
              <Smartphone className="w-5 h-5" />
              モバイル版ガイド
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm text-green-700 space-y-2">
              <p>
                <strong>1. ハンバーガーメニューをタップ</strong>
              </p>
              <p>
                <strong>2. 「広告」を選択</strong>
              </p>
              <p>
                <strong>3. 「+」ボタンをタップ</strong>
              </p>
              <p>
                <strong>4. 「ディスプレイ広告」を選択</strong>
              </p>
              <p>
                <strong>5. 名前とサイズを設定</strong>
              </p>
              <p>
                <strong>6. 「保存してコードを取得」</strong>
              </p>
            </div>
            <div className="p-3 bg-green-100 rounded border border-green-300">
              <p className="text-xs text-green-800">💡 モバイルでも同じ手順で作成できます</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* よくある質問 */}
      <Card className="bg-orange-50 border-orange-200">
        <CardHeader>
          <CardTitle className="text-orange-800">❓ よくある質問</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="p-3 bg-white rounded border">
              <h5 className="font-semibold text-gray-800 mb-1">Q: 広告ユニットはいくつ作ればいい？</h5>
              <p className="text-sm text-gray-600">
                A: まずは4つ作成してください。診断結果後、アイテム後、コンテンツ内、フッターの4箇所です。
              </p>
            </div>

            <div className="p-3 bg-white rounded border">
              <h5 className="font-semibold text-gray-800 mb-1">Q: サイズは何を選べばいい？</h5>
              <p className="text-sm text-gray-600">
                A: 「レスポンシブ」を選択してください。自動でデバイスに最適なサイズに調整されます。
              </p>
            </div>

            <div className="p-3 bg-white rounded border">
              <h5 className="font-semibold text-gray-800 mb-1">Q: スロットIDはどこに書いてある？</h5>
              <p className="text-sm text-gray-600">
                A: 生成されたHTMLコードの data-ad-slot="xxxxxxxxxx" の部分です。この数字をメモしてください。
              </p>
            </div>

            <div className="p-3 bg-white rounded border">
              <h5 className="font-semibold text-gray-800 mb-1">Q: 広告が表示されない場合は？</h5>
              <p className="text-sm text-gray-600">
                A:
                新しい広告ユニットは表示まで数時間かかることがあります。24時間待っても表示されない場合はサポートに連絡してください。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 次のステップ */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="p-6 text-center">
          <div className="space-y-4">
            <div className="text-4xl">🎯</div>
            <h3 className="text-xl font-bold text-green-800">広告ユニット作成後の次のステップ</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="p-3 bg-white rounded border">
                <h4 className="font-semibold text-green-800 mb-2">1. スロットIDを更新</h4>
                <p className="text-sm text-green-700">取得したスロットIDをコードに反映</p>
              </div>
              <div className="p-3 bg-white rounded border">
                <h4 className="font-semibold text-green-800 mb-2">2. 本番環境にデプロイ</h4>
                <p className="text-sm text-green-700">Vercelにデプロイして動作確認</p>
              </div>
              <div className="p-3 bg-white rounded border">
                <h4 className="font-semibold text-green-800 mb-2">3. 広告表示を確認</h4>
                <p className="text-sm text-green-700">実際のサイトで広告が表示されるかチェック</p>
              </div>
              <div className="p-3 bg-white rounded border">
                <h4 className="font-semibold text-green-800 mb-2">4. 収益データ分析</h4>
                <p className="text-sm text-green-700">AdSense管理画面で収益を監視</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Default export
export default AdSenseUnitCreationGuide
