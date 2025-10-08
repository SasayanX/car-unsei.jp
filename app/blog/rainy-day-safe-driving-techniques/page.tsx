import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Eye, Car, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"
import Script from "next/script"
import { generateBlogPostJsonLd, generateHowToJsonLd } from "@/lib/json-ld"

export const metadata = {
  title: "雨の日の安全運転テクニック完全ガイド | 事故率4倍を回避する実践的方法",
  description:
    "雨天時の事故率は晴天時の4倍！プロドライバー直伝の安全運転テクニックで、視界不良・スリップ・追突を完全回避。車間距離の正しい取り方から緊急時の対処法まで完全解説。",
  keywords: "雨の日,安全運転,雨天運転,事故防止,スリップ対策,視界確保,車間距離,梅雨,運転テクニック,交通安全",
  openGraph: {
    title: "雨の日の安全運転テクニック完全ガイド | 事故率4倍を回避する実践的方法",
    description:
      "雨天時の事故率は晴天時の4倍！プロドライバー直伝の安全運転テクニックで、視界不良・スリップ・追突を完全回避。",
    images: [
      {
        url: "/images/rainy-driving-safety.jpg",
        width: 1200,
        height: 630,
        alt: "雨の日の安全運転テクニック",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "雨の日の安全運転テクニック完全ガイド",
    description: "雨天時の事故率は晴天時の4倍！プロ直伝の安全運転テクニックで事故を完全回避。",
    images: ["/images/rainy-driving-safety.jpg"],
  },
}

const blogPostingLD = generateBlogPostJsonLd(
  "雨の日の安全運転テクニック完全ガイド",
  "雨天時の事故率は晴天時の4倍！プロドライバー直伝の安全運転テクニックで、視界不良・スリップ・追突を完全回避。車間距離の正しい取り方から緊急時の対処法まで完全解説。",
  "rainy-day-safe-driving-techniques",
  "2025-06-04",
  "/images/rainy-driving-safety.jpg",
  "愛車運勢チェッカー編集部",
  ["雨の日", "安全運転", "雨天運転", "事故防止", "スリップ対策", "視界確保", "車間距離", "梅雨"],
)

const howToLD = generateHowToJsonLd(
  "雨の日の安全運転テクニック",
  "雨天時の事故を防ぐための実践的な運転テクニック",
  [
    {
      name: "出発前の準備",
      text: "ワイパー、ライト、タイヤの点検を行い、雨天運転の準備を整える",
      image: "/images/pre-drive-check.jpg",
    },
    {
      name: "適切な車間距離の確保",
      text: "晴天時の2倍以上の車間距離を取り、急ブレーキに備える",
      image: "/images/safe-distance.jpg",
    },
    {
      name: "速度調整と視界確保",
      text: "制限速度より10-20km/h減速し、ライトとワイパーで視界を確保する",
      image: "/images/speed-control.jpg",
    },
    {
      name: "スリップ対策の実践",
      text: "急ハンドル・急ブレーキを避け、滑らかな運転操作を心がける",
      image: "/images/slip-prevention.jpg",
    },
  ],
  "PT15M",
  ["ワイパー", "ライト", "タイヤゲージ"],
  ["雨具", "タオル", "予備時間"],
)

export default function RainyDaySafeDrivingPage() {
  return (
    <>
      <Script
        id="blog-posting-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingLD) }}
      />
      <Script id="how-to-ld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLD) }} />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* パンくずリスト */}
          <nav className="text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
              ホーム
            </Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
              ブログ
            </Link>
            <span className="mx-2">›</span>
            <span>雨の日の安全運転テクニック</span>
          </nav>

          {/* ヘッダー */}
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center space-y-4">
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                <Badge variant="destructive" className="bg-red-500">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  緊急度：高
                </Badge>
                <Badge variant="secondary">交通安全・梅雨対策</Badge>
                <Badge variant="outline">12分で読めます</Badge>
              </div>
              <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 dark:from-red-400 dark:to-orange-400 bg-clip-text text-transparent leading-tight">
                雨の日の安全運転テクニック完全ガイド
              </CardTitle>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                雨天時の事故率は晴天時の<span className="font-bold text-red-600">約4倍</span>
                ！プロドライバー直伝の安全運転テクニックで、視界不良・スリップ・追突を完全回避しましょう。
              </p>
              <div className="flex items-center justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                <span>📅 2025年6月4日</span>
                <span>👤 愛車運勢チェッカー編集部</span>
                <span>🔄 最終更新: 2025年6月4日</span>
              </div>
            </CardHeader>
          </Card>

          {/* 緊急警告 */}
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border-red-200 dark:border-red-800">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-lg font-bold text-red-800 dark:text-red-300 mb-2">
                    ⚠️ 雨天時の事故リスクについて
                  </h3>
                  <ul className="space-y-2 text-red-700 dark:text-red-300">
                    <li>
                      • 雨天時の交通事故発生率は晴天時の<strong>約4倍</strong>
                    </li>
                    <li>
                      • 視界不良による追突事故が<strong>65%増加</strong>
                    </li>
                    <li>
                      • スリップによる単独事故が<strong>3.2倍</strong>に増加
                    </li>
                    <li>
                      • 制動距離が<strong>1.5〜2倍</strong>に延長
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 目次 */}
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                この記事で学べること
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    出発前の安全点検方法
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    適切な車間距離の取り方
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    視界確保のテクニック
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    スリップ防止の運転操作
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    緊急時の対処法
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    速度調整の基準
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    プロドライバーの実体験
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    雨天運転チェックリスト
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* 出発前の準備 */}
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Car className="w-6 h-6 text-blue-600" />
                1. 出発前の安全点検（所要時間：5分）
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                雨天時の安全運転は、出発前の準備で8割が決まります。以下の点検を必ず行いましょう。
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-blue-800 dark:text-blue-300">🔧 必須点検項目</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-sm font-medium">
                        1
                      </span>
                      <div>
                        <strong>ワイパーゴムの状態</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          ビビリ音、拭き残し、ゴムの劣化をチェック
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-sm font-medium">
                        2
                      </span>
                      <div>
                        <strong>ライト類の動作確認</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          ヘッドライト、テールランプ、ウインカーの点灯確認
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-sm font-medium">
                        3
                      </span>
                      <div>
                        <strong>タイヤの溝深さ</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          1.6mm以下は危険！できれば3mm以上を推奨
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-green-800 dark:text-green-300">✅ 車内環境の準備</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded text-sm font-medium">
                        A
                      </span>
                      <div>
                        <strong>エアコンの除湿設定</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400">窓の曇り防止のため、除湿モードをON</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded text-sm font-medium">
                        B
                      </span>
                      <div>
                        <strong>シートポジションの調整</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400">視界を最大限確保できる位置に調整</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 px-2 py-1 rounded text-sm font-medium">
                        C
                      </span>
                      <div>
                        <strong>ミラーの角度確認</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          雨滴で見えにくくなる前に最適な角度に調整
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 車間距離の確保 */}
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Shield className="w-6 h-6 text-green-600" />
                2. 適切な車間距離の確保
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                <h4 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">🎯 雨天時の車間距離の基準</h4>
                <p className="text-yellow-700 dark:text-yellow-300">
                  晴天時の<strong>2倍以上</strong>の車間距離を確保することが安全運転の基本です。
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">40km/h</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">市街地</div>
                  <div className="text-lg font-semibold text-blue-800 dark:text-blue-300">40m以上</div>
                </div>
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">60km/h</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">郊外道路</div>
                  <div className="text-lg font-semibold text-green-800 dark:text-green-300">60m以上</div>
                </div>
                <div className="text-center p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">80km/h</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">高速道路</div>
                  <div className="text-lg font-semibold text-red-800 dark:text-red-300">100m以上</div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-lg">💡 車間距離の測り方</h4>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <ol className="space-y-2">
                    <li>
                      <strong>1. 前車が通過した地点を確認</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                        電柱、看板、橋脚などの固定物を目印にする
                      </p>
                    </li>
                    <li>
                      <strong>2. 秒数をカウント</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                        「1001、1002、1003...」とゆっくり数える
                      </p>
                    </li>
                    <li>
                      <strong>3. 安全な秒数の確保</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 ml-4">
                        雨天時は最低でも<strong>4秒以上</strong>の間隔を保つ
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 視界確保のテクニック */}
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Eye className="w-6 h-6 text-purple-600" />
                3. 視界確保のテクニック
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                雨天時の事故の多くは視界不良が原因です。以下のテクニックで最大限の視界を確保しましょう。
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-purple-800 dark:text-purple-300">💡 ライト使用の基本</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded text-sm font-medium">
                        昼間
                      </span>
                      <div>
                        <strong>デイライト・スモールライト</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          他車からの視認性向上のため、昼間でも点灯
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded text-sm font-medium">
                        夕方
                      </span>
                      <div>
                        <strong>ヘッドライト（ロービーム）</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          薄暗くなったら早めに点灯、対向車への配慮も忘れずに
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-300 px-2 py-1 rounded text-sm font-medium">
                        夜間
                      </span>
                      <div>
                        <strong>ハイビーム（適切に使用）</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          対向車がいない時のみ、視界確保のため積極的に使用
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-orange-800 dark:text-orange-300">🌧️ ワイパー使用のコツ</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300 px-2 py-1 rounded text-sm font-medium">
                        小雨
                      </span>
                      <div>
                        <strong>間欠モード</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          2-3秒間隔で適度に作動、ゴムの劣化を防ぐ
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300 px-2 py-1 rounded text-sm font-medium">
                        中雨
                      </span>
                      <div>
                        <strong>低速連続モード</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400">常時作動で視界を確保、速度は控えめに</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300 px-2 py-1 rounded text-sm font-medium">
                        大雨
                      </span>
                      <div>
                        <strong>高速連続モード</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          最高速度で作動、必要に応じて一時停車も検討
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* スリップ対策 */}
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                4. スリップ防止の運転操作
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">⚠️ スリップの3大原因</h4>
                <ul className="space-y-1 text-red-700 dark:text-red-300">
                  <li>
                    • <strong>急ハンドル</strong>：カーブでの急激なハンドル操作
                  </li>
                  <li>
                    • <strong>急ブレーキ</strong>：パニックブレーキによるタイヤロック
                  </li>
                  <li>
                    • <strong>急加速</strong>：発進時や追い越し時の急激なアクセル操作
                  </li>
                </ul>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-blue-800 dark:text-blue-300">✅ 正しい運転操作</h4>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                      <strong className="text-blue-800 dark:text-blue-300">ハンドル操作</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        ゆっくりと滑らかに回す。急激な操作は絶対に避ける。
                      </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                      <strong className="text-blue-800 dark:text-blue-300">ブレーキ操作</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        早めに軽く踏み始め、徐々に力を加える。ポンピングブレーキも有効。
                      </p>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3">
                      <strong className="text-blue-800 dark:text-blue-300">アクセル操作</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        発進時は特に慎重に。半クラッチを活用してスムーズに加速。
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-green-800 dark:text-green-300">🎯 速度調整の基準</h4>
                  <div className="space-y-3">
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                      <strong className="text-green-800 dark:text-green-300">市街地（40km/h制限）</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        → <strong>30km/h以下</strong>で走行
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                      <strong className="text-green-800 dark:text-green-300">郊外道路（60km/h制限）</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        → <strong>45km/h以下</strong>で走行
                      </p>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3">
                      <strong className="text-green-800 dark:text-green-300">高速道路（80km/h制限）</strong>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                        → <strong>60km/h以下</strong>で走行
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* プロの実体験 */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-full p-3 flex-shrink-0">
                  <Car className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">🚕 プロドライバーの実体験</h3>
                  <blockquote className="text-blue-700 dark:text-blue-300 italic border-l-4 border-blue-300 pl-4">
                    「タクシー運転手として20年間、雨の日も毎日運転していますが、一番大切なのは『余裕』です。時間にも心にも余裕を持って、いつもの半分の速度で走ることを心がけています。お客様の命をお預かりしている責任もありますが、雨の日に急いで良いことは一つもありません。」
                  </blockquote>
                  <p className="text-sm text-blue-600 dark:text-blue-400 mt-2">
                    — 東京都内タクシー運転手 田中さん（経験年数20年）
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 緊急時の対処法 */}
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
                5. 緊急時の対処法
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-red-800 dark:text-red-300">🚨 スリップした時の対処</h4>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 px-2 py-1 rounded text-sm font-medium">
                        1
                      </span>
                      <div>
                        <strong>慌てずにアクセルを緩める</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          急ブレーキは厳禁。まずはアクセルから足を離す
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 px-2 py-1 rounded text-sm font-medium">
                        2
                      </span>
                      <div>
                        <strong>ハンドルを進行方向に向ける</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          車が向かいたい方向にハンドルを切る（カウンターステア）
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-300 px-2 py-1 rounded text-sm font-medium">
                        3
                      </span>
                      <div>
                        <strong>車が安定したら徐々に減速</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          グリップが回復したら、ゆっくりとブレーキを踏む
                        </p>
                      </div>
                    </li>
                  </ol>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-orange-800 dark:text-orange-300">⚡ 視界不良時の対処</h4>
                  <ol className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300 px-2 py-1 rounded text-sm font-medium">
                        1
                      </span>
                      <div>
                        <strong>ハザードランプを点灯</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400">後続車に危険を知らせる</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300 px-2 py-1 rounded text-sm font-medium">
                        2
                      </span>
                      <div>
                        <strong>安全な場所で一時停車</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          コンビニ、パーキングエリアなどで雨が弱まるまで待機
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-300 px-2 py-1 rounded text-sm font-medium">
                        3
                      </span>
                      <div>
                        <strong>無理な運転は避ける</strong>
                        <p className="text-sm text-gray-600 dark:text-gray-400">予定より遅れても安全を最優先に</p>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* チェックリスト */}
          <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <CheckCircle className="w-6 h-6 text-green-600" />
                雨天運転チェックリスト
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-bold text-green-800 dark:text-green-300">📋 出発前チェック</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">ワイパーゴムの状態確認</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">ライト類の動作確認</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">タイヤの溝深さチェック</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">エアコン除湿設定</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">ミラー角度調整</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-bold text-blue-800 dark:text-blue-300">🚗 運転中チェック</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">車間距離2倍以上確保</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">制限速度-10〜20km/h</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">ライト点灯（昼間も）</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">急操作の回避</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm">定期的な休憩</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 関連記事 */}
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl">🔗 関連記事</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <Link
                  href="/blog/accident-prevention-numbers"
                  className="block p-4 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg hover:shadow-md transition-shadow"
                >
                  <h4 className="font-bold text-red-800 dark:text-red-300 mb-2">
                    事故を避けるナンバープレートの選び方
                  </h4>
                  <p className="text-sm text-red-600 dark:text-red-400">
                    交通安全をサポートする数字の力で、さらなる安全運転を実現
                  </p>
                </Link>
                <Link
                  href="/blog/rainy-season-wiper-maintenance"
                  className="block p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg hover:shadow-md transition-shadow"
                >
                  <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">
                    ワイパーゴムの点検と交換タイミング
                  </h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">
                    雨天時の視界確保に欠かせないワイパーメンテナンス
                  </p>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* まとめ */}
          <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 shadow-xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">雨の日も安全運転で快適なドライブを！</h3>
              <p className="mb-6 text-lg">
                今回ご紹介したテクニックを実践して、雨天時の事故リスクを大幅に軽減しましょう。
                <br />
                あなたの愛車のナンバープレートも運勢診断で安全運転をサポート！
              </p>
              <Link
                href="/"
                className="inline-block bg-white text-purple-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg"
              >
                愛車の運勢を今すぐ診断 →
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
