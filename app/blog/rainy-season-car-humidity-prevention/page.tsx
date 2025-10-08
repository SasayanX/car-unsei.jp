import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import Script from "next/script"
import {
  Droplets,
  Wind,
  AlertTriangle,
  CheckCircle,
  Car,
  Home,
  ThermometerSun,
  Shield,
  Clock,
  Star,
} from "lucide-react"
import { generateBlogPostJsonLd } from "@/lib/json-ld"

export const metadata = {
  title: "梅雨時期の車内湿気・カビ対策完全ガイド | 愛車運勢チェッカー",
  description:
    "梅雨の車内湿気とカビを徹底予防！プロが教える効果的な対策方法と、おすすめグッズをご紹介。健康で快適なドライブを実現しましょう。",
  keywords: "梅雨,車内,湿気,カビ対策,除湿,防カビ,車,メンテナンス,健康,快適ドライブ",
  alternates: {
    canonical: "https://car-unsei.jp/blog/rainy-season-car-humidity-prevention",
  },
  openGraph: {
    title: "梅雨時期の車内湿気・カビ対策完全ガイド | 愛車運勢チェッカー",
    description:
      "梅雨の車内湿気とカビを徹底予防！プロが教える効果的な対策方法と、おすすめグッズをご紹介。健康で快適なドライブを実現しましょう。",
    url: "https://car-unsei.jp/blog/rainy-season-car-humidity-prevention",
    images: [
      {
        url: "https://car-unsei.jp/images/humidity-prevention-hero.png",
        width: 800,
        height: 450,
        alt: "車内の湿気対策とカビ予防",
      },
    ],
  },
}

export default function RainySeasonHumidityPreventionPage() {
  // ブログ記事用JSON-LD
  const blogPostJsonLd = generateBlogPostJsonLd(
    "梅雨時期の車内湿気・カビ対策完全ガイド",
    "梅雨の車内湿気とカビを徹底予防！プロが教える効果的な対策方法と、おすすめグッズをご紹介。健康で快適なドライブを実現しましょう。",
    "rainy-season-car-humidity-prevention",
    "2025-06-01",
    "https://car-unsei.jp/images/humidity-prevention-hero.png",
    "車運勢チェッカー編集部",
    ["梅雨", "車内", "湿気", "カビ対策", "除湿", "防カビ", "車", "メンテナンス", "健康"],
  )

  return (
    <>
      {/* JSON-LD構造化データ */}
      <Script
        id="blog-post-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostJsonLd),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* ヘッダー */}
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Droplets className="w-8 h-8 text-blue-500" />
                <Car className="w-8 h-8 text-gray-600" />
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 dark:from-blue-400 dark:to-teal-400 bg-clip-text text-transparent">
                梅雨時期の車内湿気・カビ対策完全ガイド
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                健康で快適なドライブを実現する、プロ直伝の湿気・カビ予防術
              </p>
              <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>8分で読めます</span>
                </div>
                <Badge variant="secondary">車メンテナンス</Badge>
                <Badge variant="secondary">梅雨対策</Badge>
              </div>
            </CardHeader>
          </Card>

          {/* 緊急度アラート */}
          <Alert className="border-orange-200 bg-orange-50 dark:bg-orange-900/20">
            <AlertTriangle className="h-4 w-4 text-orange-600" />
            <AlertDescription className="text-orange-800 dark:text-orange-200">
              <strong>今すぐチェック！</strong>{" "}
              車内にカビ臭さを感じたら、健康被害の可能性があります。早急な対策が必要です。
            </AlertDescription>
          </Alert>

          {/* なぜ車内湿気対策が重要なのか */}
          <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100">
                <Shield className="w-6 h-6 text-red-500" />
                なぜ車内湿気対策が最重要なのか
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">健康への影響</h4>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• アレルギー症状の悪化</li>
                    <li>• 呼吸器系トラブル</li>
                    <li>• 皮膚炎の原因</li>
                    <li>• 免疫力の低下</li>
                  </ul>
                </div>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">車への影響</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• 内装の劣化促進</li>
                    <li>• 電子機器の故障</li>
                    <li>• 異臭の発生</li>
                    <li>• 資産価値の低下</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 即効性のある対策 */}
          <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100">
                <CheckCircle className="w-6 h-6 text-green-500" />
                今すぐできる！即効性のある湿気対策
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* 対策1: 換気 */}
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <div className="flex items-center gap-2 mb-3">
                  <Wind className="w-5 h-5 text-green-600" />
                  <h4 className="font-semibold text-green-800 dark:text-green-200">1. 効果的な換気方法</h4>
                </div>
                <div className="space-y-3 text-sm text-green-700 dark:text-green-300">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium mb-2">乗車前（30秒）</h5>
                      <ul className="space-y-1">
                        <li>• 対角線上の窓を2つ開ける</li>
                        <li>• エアコンを外気導入で最大風量</li>
                        <li>• ドアを数回開閉して空気を入れ替え</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">降車後（必須）</h5>
                      <ul className="space-y-1">
                        <li>• 窓を少し開けて駐車（安全な場所のみ）</li>
                        <li>• サンルーフがあれば少し開放</li>
                        <li>• 車内の濡れたものは必ず持ち出す</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 対策2: エアコン活用 */}
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <div className="flex items-center gap-2 mb-3">
                  <ThermometerSun className="w-5 h-5 text-blue-600" />
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200">2. エアコンの正しい使い方</h4>
                </div>
                <div className="space-y-3 text-sm text-blue-700 dark:text-blue-300">
                  <div className="bg-white/50 dark:bg-gray-700/50 p-3 rounded">
                    <h5 className="font-medium mb-2">🌟 プロのコツ</h5>
                    <ul className="space-y-1">
                      <li>• 冷房 + 除湿モードを併用</li>
                      <li>• 内気循環は最初の5分のみ、その後外気導入</li>
                      <li>• 降車10分前にA/Cをオフ、送風のみで乾燥</li>
                      <li>• 週1回は暖房で車内を完全乾燥</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 対策3: 除湿グッズ */}
              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="w-5 h-5 text-purple-600" />
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200">3. おすすめ除湿グッズ</h4>
                </div>
                <div className="space-y-3 text-sm text-purple-700 dark:text-purple-300">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white/50 dark:bg-gray-700/50 p-3 rounded">
                      <h5 className="font-medium mb-2">即効性重視</h5>
                      <ul className="space-y-1">
                        <li>• 車用除湿剤（シートの下に設置）</li>
                        <li>• 竹炭シート（天然素材で安心）</li>
                        <li>• 新聞紙（緊急時の応急処置）</li>
                      </ul>
                    </div>
                    <div className="bg-white/50 dark:bg-gray-700/50 p-3 rounded">
                      <h5 className="font-medium mb-2">長期効果</h5>
                      <ul className="space-y-1">
                        <li>• 車載用除湿機（USB給電式）</li>
                        <li>• 調湿木炭（繰り返し使用可能）</li>
                        <li>• 防カビスプレー（月1回使用）</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* カビ発生時の対処法 */}
          <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100">
                <AlertTriangle className="w-6 h-6 text-orange-500" />
                すでにカビが発生している場合の対処法
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert className="border-red-200 bg-red-50 dark:bg-red-900/20">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800 dark:text-red-200">
                  <strong>重要：</strong> カビの除去作業は必ずマスクと手袋を着用し、換気の良い場所で行ってください。
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <h4 className="font-semibold mb-3">段階的除去手順</h4>
                  <ol className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        1
                      </span>
                      <span>車内の物をすべて取り出し、掃除機で表面の汚れを除去</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        2
                      </span>
                      <span>アルコール系クリーナーで拭き取り（革シートは専用クリーナー使用）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        3
                      </span>
                      <span>UV殺菌ライトで30分間照射（可能な場合）</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                        4
                      </span>
                      <span>完全乾燥後、防カビスプレーを全体に散布</span>
                    </li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 予防のための日常習慣 */}
          <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100">
                <Home className="w-6 h-6 text-blue-500" />
                湿気を防ぐ日常習慣
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">✅ やるべきこと</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 雨の日は乗車前に必ず換気</li>
                    <li>• 濡れた傘は車外で水を切る</li>
                    <li>• 週1回は晴れた日に窓全開で乾燥</li>
                    <li>• フロアマットは定期的に洗浄・乾燥</li>
                    <li>• エアコンフィルターを3ヶ月で交換</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-red-600">❌ 避けるべきこと</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 濡れた衣類を車内に放置</li>
                    <li>• 内気循環のみでの長時間運転</li>
                    <li>• 飲み物をこぼしたまま放置</li>
                    <li>• 窓を閉め切ったままの長期駐車</li>
                    <li>• 湿った靴での乗車</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* まとめ */}
          <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-100">
                まとめ：健康で快適な梅雨のドライブを
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                車内の湿気・カビ対策は、健康と愛車の両方を守る重要なメンテナンスです。
                特に梅雨時期は、毎日の小さな心がけが大きな差を生みます。
              </p>
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">今日から始める3つのポイント</h4>
                <ol className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>1. 乗車前30秒の換気を習慣化</li>
                  <li>2. 除湿グッズを車内に常備</li>
                  <li>3. 週1回の完全乾燥タイムを設ける</li>
                </ol>
              </div>
            </CardContent>
          </Card>

          {/* 関連記事・診断へのリンク */}
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">あなたの愛車の運勢は？</h3>
                <p className="text-purple-100 mb-4 text-sm">ナンバープレートから運勢を診断</p>
                <Link
                  href="/"
                  className="inline-block bg-white text-purple-600 px-4 py-2 rounded font-bold hover:bg-gray-100 transition-colors text-sm"
                >
                  無料診断する
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-blue-500 to-teal-500 text-white border-0 shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-bold mb-2">次回予告</h3>
                <p className="text-blue-100 mb-4 text-sm">ワイパーゴムの点検と交換タイミング</p>
                <Link
                  href="/blog"
                  className="inline-block bg-white text-blue-600 px-4 py-2 rounded font-bold hover:bg-gray-100 transition-colors text-sm"
                >
                  ブログ一覧へ
                </Link>
              </CardContent>
            </Card>
          </div>

          {/* パンくずリスト */}
          <nav className="text-sm text-gray-600 dark:text-gray-400">
            <Link href="/" className="hover:text-purple-600 dark:hover:text-purple-400">
              ホーム
            </Link>
            <span className="mx-2">›</span>
            <Link href="/blog" className="hover:text-purple-600 dark:hover:text-purple-400">
              ブログ
            </Link>
            <span className="mx-2">›</span>
            <span>梅雨時期の車内湿気・カビ対策</span>
          </nav>
        </div>
      </div>
    </>
  )
}
