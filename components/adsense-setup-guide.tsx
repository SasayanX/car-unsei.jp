"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock, AlertCircle, ExternalLink, Copy, FileText, DollarSign } from "lucide-react"

export function AdSenseSetupGuide() {
  const [currentStep, setCurrentStep] = useState(1)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])
  const [adsTxtGenerated, setAdsTxtGenerated] = useState(false)

  const steps = [
    {
      id: 1,
      title: "AdSense申し込み完了",
      description: "Google AdSenseアカウントの作成",
      status: "completed",
      duration: "完了",
    },
    {
      id: 2,
      title: "サイト追加・審査待ち",
      description: "サイトをAdSenseに追加して審査を受ける",
      status: "current",
      duration: "1-14日",
    },
    {
      id: 3,
      title: "ads.txt設置",
      description: "サイトルートにads.txtファイルを配置",
      status: "pending",
      duration: "5分",
    },
    {
      id: 4,
      title: "AdSenseコード実装",
      description: "自動広告コードをサイトに追加",
      status: "pending",
      duration: "10分",
    },
    {
      id: 5,
      title: "広告ユニット作成",
      description: "効果的な広告配置の設定",
      status: "pending",
      duration: "30分",
    },
    {
      id: 6,
      title: "収益最適化",
      description: "A/Bテストと配置最適化",
      status: "pending",
      duration: "継続的",
    },
  ]

  const generateAdsTxt = () => {
    const adsTxtContent = `google.com, pub-XXXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
# 住まい運勢チェッカー - AdSense ads.txt
# 生成日: ${new Date().toLocaleDateString("ja-JP")}
# 注意: pub-XXXXXXXXXXXXXXXXXを実際のパブリッシャーIDに変更してください`

    const blob = new Blob([adsTxtContent], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "ads.txt"
    a.click()
    URL.revokeObjectURL(url)
    setAdsTxtGenerated(true)
  }

  const copyAdSenseCode = () => {
    const adSenseCode = `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX"
     crossorigin="anonymous"></script>`

    navigator.clipboard.writeText(adSenseCode)
    alert("AdSenseコードをクリップボードにコピーしました！")
  }

  const auditChecklist = [
    {
      category: "コンテンツ品質",
      items: [
        "オリジナルで価値のあるコンテンツ",
        "十分な量のコンテンツ（20ページ以上推奨）",
        "定期的な更新",
        "ユーザーにとって有用な情報",
      ],
    },
    {
      category: "サイト構造",
      items: ["明確なナビゲーション", "プライバシーポリシーの設置", "利用規約の設置", "お問い合わせページ"],
    },
    {
      category: "技術要件",
      items: ["モバイルフレンドリー", "高速な読み込み速度", "SSL証明書（HTTPS）", "適切なメタタグ"],
    },
    {
      category: "ユーザー体験",
      items: ["直感的な操作性", "エラーページの適切な処理", "アクセシビリティ対応", "クロスブラウザ対応"],
    },
  ]

  const revenueProjection = {
    phase1: { users: "1,000", revenue: "¥5,000-15,000", period: "1-3ヶ月目" },
    phase2: { users: "10,000", revenue: "¥30,000-80,000", period: "3-6ヶ月目" },
    phase3: { users: "50,000", revenue: "¥150,000-400,000", period: "6-12ヶ月目" },
    phase4: { users: "100,000+", revenue: "¥500,000+", period: "1年目以降" },
  }

  return (
    <div className="space-y-6">
      {/* 進捗状況 */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
            <DollarSign className="w-6 h-6" />🎉 AdSense収益化への道のり
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-4xl mb-2">📈</div>
              <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">
                収益化まであと{6 - completedSteps.length}ステップ！
              </h3>
              <Progress value={(completedSteps.length / 6) * 100} className="w-full" />
              <p className="text-sm text-green-600 dark:text-green-300 mt-2">
                進捗: {completedSteps.length}/6 ステップ完了
              </p>
            </div>

            <div className="space-y-3">
              {steps.map((step) => (
                <div
                  key={step.id}
                  className={`flex items-center gap-3 p-3 rounded-lg border ${
                    step.status === "completed"
                      ? "bg-green-100 dark:bg-green-900/30 border-green-300 dark:border-green-700"
                      : step.status === "current"
                        ? "bg-blue-100 dark:bg-blue-900/30 border-blue-300 dark:border-blue-700"
                        : "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                  }`}
                >
                  <div className="flex-shrink-0">
                    {step.status === "completed" ? (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    ) : step.status === "current" ? (
                      <Clock className="w-6 h-6 text-blue-600" />
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-500" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-100">{step.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
                  </div>
                  <Badge
                    className={
                      step.status === "completed"
                        ? "bg-green-200 text-green-800"
                        : step.status === "current"
                          ? "bg-blue-200 text-blue-800"
                          : "bg-gray-200 text-gray-600"
                    }
                  >
                    {step.duration}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 詳細ガイド */}
      <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-gray-100">
            <FileText className="w-5 h-5" />
            次にやること
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="current" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="current">今すぐやること</TabsTrigger>
              <TabsTrigger value="audit">審査対策</TabsTrigger>
              <TabsTrigger value="setup">技術設定</TabsTrigger>
              <TabsTrigger value="revenue">収益予測</TabsTrigger>
            </TabsList>

            <TabsContent value="current" className="space-y-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">🚀 今すぐ実行すべきこと</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-800 dark:text-blue-200">AdSense管理画面を確認</h5>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        サイトが正しく追加されているか、審査状況を確認してください
                      </p>
                      <Button
                        size="sm"
                        className="mt-2 bg-blue-600 hover:bg-blue-700"
                        onClick={() => window.open("https://www.google.com/adsense/", "_blank")}
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        AdSense管理画面
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-800 dark:text-blue-200">ads.txtファイルを準備</h5>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        審査通過後すぐに設置できるよう、ads.txtファイルを事前に準備
                      </p>
                      <Button size="sm" className="mt-2" variant="outline" onClick={generateAdsTxt}>
                        <FileText className="w-4 h-4 mr-1" />
                        ads.txtダウンロード
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h5 className="font-medium text-blue-800 dark:text-blue-200">コンテンツ充実</h5>
                      <p className="text-sm text-blue-700 dark:text-blue-300">
                        審査期間中もコンテンツを追加し、サイトの価値を高めましょう
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="audit" className="space-y-4">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100">📋 AdSense審査チェックリスト</h4>
                {auditChecklist.map((category, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                  >
                    <h5 className="font-medium text-gray-800 dark:text-gray-100 mb-3">{category.category}</h5>
                    <div className="space-y-2">
                      {category.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="setup" className="space-y-4">
              <div className="space-y-4">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border border-yellow-200 dark:border-yellow-700">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-3">⚙️ 技術設定（審査通過後）</h4>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-yellow-800 dark:text-yellow-200">1. AdSenseコード取得</h5>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-2">
                        審査通過後、AdSense管理画面から自動広告コードを取得
                      </p>
                      <Button size="sm" variant="outline" onClick={copyAdSenseCode}>
                        <Copy className="w-4 h-4 mr-1" />
                        サンプルコードをコピー
                      </Button>
                    </div>

                    <div>
                      <h5 className="font-medium text-yellow-800 dark:text-yellow-200">2. layout.tsxに追加</h5>
                      <div className="bg-gray-800 text-green-400 p-3 rounded text-sm font-mono mt-2">
                        {`<head>
  <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
</head>`}
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-yellow-800 dark:text-yellow-200">3. ads.txt設置</h5>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">
                        Vercelの場合: public/ads.txt として配置
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="revenue" className="space-y-4">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100">💰 収益予測シミュレーション</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(revenueProjection).map(([phase, data]) => (
                    <div
                      key={phase}
                      className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-700"
                    >
                      <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                        {phase.replace("phase", "Phase ")}
                      </h5>
                      <div className="space-y-1 text-sm">
                        <p className="text-green-700 dark:text-green-300">
                          <strong>ユーザー数:</strong> {data.users}
                        </p>
                        <p className="text-green-700 dark:text-green-300">
                          <strong>月間収益:</strong> {data.revenue}
                        </p>
                        <p className="text-green-600 dark:text-green-400">
                          <strong>期間:</strong> {data.period}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">📊 収益最大化のポイント</h5>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• ユーザー体験を最優先に、自然な広告配置</li>
                    <li>• 診断結果表示後が最も効果的な広告タイミング</li>
                    <li>• モバイルユーザーが多いため、レスポンシブ広告を重視</li>
                    <li>• A/Bテストで継続的に配置を最適化</li>
                    <li>• 文化拡散が進むほど収益も比例して増加</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* 審査期間中の注意事項 */}
      <Card className="bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-6 h-6 text-orange-600 mt-1" />
            <div>
              <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">⚠️ 審査期間中の注意事項</h4>
              <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                <li>• サイトの大幅な変更は避ける</li>
                <li>• 定期的にコンテンツを追加する</li>
                <li>• トラフィックを増やす努力を継続</li>
                <li>• AdSenseポリシーを再確認する</li>
                <li>• 審査結果は通常1-14日で通知される</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
