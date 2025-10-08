import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Droplets, Car, Sparkles, Shield, Clock, AlertTriangle, Zap, Target } from "lucide-react"
import { generateBlogPostJsonLd, generateHowToJsonLd } from "@/lib/json-ld"

export const metadata: Metadata = {
  title: "雨天走行後の正しいボディケア方法 | 愛車を錆から守る完全ガイド",
  description:
    "雨の日のドライブ後、愛車のボディを錆や汚れから守る正しいケア方法を解説。プロが教える効果的な洗車テクニックと、長期間美しさを保つ秘訣をご紹介します。",
  keywords: "雨天走行,ボディケア,洗車,錆対策,車メンテナンス,梅雨,コーティング,ワックス",
  alternates: {
    canonical: "https://car-unsei.jp/blog/rainy-season-car-body-care",
  },
  openGraph: {
    title: "雨天走行後の正しいボディケア方法 | 愛車を錆から守る完全ガイド",
    description:
      "雨の日のドライブ後、愛車のボディを錆や汚れから守る正しいケア方法を解説。プロが教える効果的な洗車テクニックと、長期間美しさを保つ秘訣をご紹介します。",
    url: "https://car-unsei.jp/blog/rainy-season-car-body-care",
    images: [
      {
        url: "https://car-unsei.jp/images/car-body-care-hero.png",
        width: 800,
        height: 450,
        alt: "雨天走行後の車のボディケア",
      },
    ],
  },
}

export default function RainySeasonCarBodyCarePage() {
  // ブログ記事用JSON-LD
  const blogPostJsonLd = generateBlogPostJsonLd(
    "雨天走行後の正しいボディケア方法",
    "雨の日のドライブ後、愛車のボディを錆や汚れから守る正しいケア方法を解説。プロが教える効果的な洗車テクニックと、長期間美しさを保つ秘訣をご紹介します。",
    "rainy-season-car-body-care",
    "2025-06-03",
    "https://car-unsei.jp/images/car-body-care-hero.png",
    "車運勢チェッカー編集部",
    ["雨天走行", "ボディケア", "洗車", "錆対策", "車メンテナンス", "梅雨", "コーティング"],
  )

  // 洗車手順のHowTo JSON-LD
  const washingHowToJsonLd = generateHowToJsonLd(
    "雨天走行後の正しい洗車方法",
    "雨の日のドライブ後に行う効果的な洗車手順を詳しく解説します。",
    [
      {
        name: "予備洗い",
        text: "高圧水で泥や砂などの大きな汚れを洗い流します。",
      },
      {
        name: "下回り洗浄",
        text: "塩分や泥を除去するため、車の下回りを重点的に洗浄します。",
      },
      {
        name: "ボディ洗浄",
        text: "上から下へ、カーシャンプーで優しく洗浄します。",
      },
      {
        name: "すすぎ",
        text: "シャンプーを完全に洗い流し、水滴を残さないようにします。",
      },
      {
        name: "乾燥・仕上げ",
        text: "マイクロファイバークロスで水分を拭き取り、ワックスやコーティングを施します。",
      },
    ],
    "PT30M",
    ["カーシャンプー", "マイクロファイバークロス", "ワックス"],
    ["高圧洗浄機", "洗車用スポンジ", "バケツ"],
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
      <Script
        id="washing-howto-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(washingHowToJsonLd),
        }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* ヘッダー */}
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-xl">
            <CardHeader className="text-center pb-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Droplets className="w-8 h-8 text-blue-500" />
                <Car className="w-8 h-8 text-gray-600" />
                <Sparkles className="w-8 h-8 text-yellow-500" />
              </div>
              <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-slate-600 dark:from-blue-400 dark:to-slate-400 bg-clip-text text-transparent">
                雨天走行後の正しいボディケア方法
              </CardTitle>
              <p className="text-gray-600 dark:text-gray-300 mt-2">愛車を錆や汚れから守る、プロ直伝の完全ガイド</p>
              <div className="flex items-center justify-center gap-4 mt-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>10分で読めます</span>
                </div>
                <Badge variant="secondary">車メンテナンス</Badge>
                <Badge variant="secondary">梅雨対策</Badge>
                <Badge variant="secondary">洗車</Badge>
              </div>
            </CardHeader>
          </Card>

          {/* 緊急度アラート */}
          <Alert className="border-red-200 bg-red-50 dark:bg-red-900/20">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800 dark:text-red-200">
              <strong>重要警告：</strong> 雨天走行後24時間以内にケアしないと、塩分や酸性雨による腐食が進行します！
            </AlertDescription>
          </Alert>

          {/* なぜ雨天走行後のケアが重要なのか */}
          <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100">
                <Shield className="w-6 h-6 text-red-500" />
                雨天走行後のケアが愛車の寿命を左右する理由
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800">
                  <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2">雨がもたらすダメージ</h4>
                  <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                    <li>• 酸性雨による塗装の劣化</li>
                    <li>• 道路の塩分による錆の発生</li>
                    <li>• 泥や砂による細かい傷</li>
                    <li>• 水垢・ウォータースポットの形成</li>
                  </ul>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">適切なケアの効果</h4>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• 車の資産価値を維持</li>
                    <li>• 塗装の美しさを長期保持</li>
                    <li>• 錆や腐食の完全予防</li>
                    <li>• 次回洗車時の作業軽減</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">💰 経済的メリット</h4>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  定期的なボディケアにより、3年後の下取り価格が<strong>平均15-20万円</strong>
                  高くなるという調査結果があります。 月1回のプロ洗車代（3,000円）より、はるかにお得な投資です。
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 雨天走行後の緊急対応（24時間以内） */}
          <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100">
                <Zap className="w-6 h-6 text-orange-500" />
                緊急対応！雨天走行後24時間以内にやるべきこと
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200">即座に（帰宅後すぐ）</h4>
                  </div>
                  <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                    <li>• 下回りの簡易水洗い</li>
                    <li>• ホイール周りの泥落とし</li>
                    <li>• ドアの隙間の水分除去</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">6時間以内</h4>
                  </div>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• ボディ全体の水洗い</li>
                    <li>• 水滴の完全除去</li>
                    <li>• 目立つ汚れの除去</li>
                  </ul>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    <h4 className="font-semibold text-green-800 dark:text-green-200">24時間以内</h4>
                  </div>
                  <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                    <li>• 本格的な洗車</li>
                    <li>• ワックス・コーティング</li>
                    <li>• 内装の湿気対策</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* プロ直伝の洗車手順 */}
          <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100">
                <Target className="w-6 h-6 text-blue-500" />
                プロ直伝！雨天走行後の完璧洗車手順
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                {/* ステップ1 */}
                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      1
                    </span>
                    <h4 className="font-semibold text-blue-800 dark:text-blue-200">予備洗い（5分）</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-700 dark:text-blue-300">
                    <div>
                      <h5 className="font-medium mb-2">🎯 重点箇所</h5>
                      <ul className="space-y-1">
                        <li>• ホイールハウス内</li>
                        <li>• フロントグリル</li>
                        <li>• ナンバープレート周り</li>
                        <li>• ドアの下端</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">⚠️ 注意点</h5>
                      <ul className="space-y-1">
                        <li>• 高圧で一気に洗い流す</li>
                        <li>• 泥が乾く前に作業</li>
                        <li>• 上から下へ順番に</li>
                        <li>• エンジンルームは避ける</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* ステップ2 */}
                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      2
                    </span>
                    <h4 className="font-semibold text-purple-800 dark:text-purple-200">下回り重点洗浄（10分）</h4>
                  </div>
                  <div className="bg-white/50 dark:bg-gray-700/50 p-3 rounded text-sm text-purple-700 dark:text-purple-300">
                    <h5 className="font-medium mb-2">🔧 プロのコツ</h5>
                    <p>
                      「下回りの塩分除去が最重要。特に海沿いを走行した場合は、サスペンション周りとマフラーを重点的に。
                      この作業を怠ると、見えない部分から錆が進行し、修理費が数十万円になることも。」
                    </p>
                    <p className="text-xs italic mt-2">— 洗車専門店オーナー 佐藤さん（経験20年）</p>
                  </div>
                </div>

                {/* ステップ3 */}
                <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                      3
                    </span>
                    <h4 className="font-semibold text-green-800 dark:text-green-200">ボディ洗浄（15分）</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-green-700 dark:text-green-300">
                    <div>
                      <h5 className="font-medium mb-2">🧽 洗浄順序</h5>
                      <ol className="space-y-1">
                        <li>1. ルーフ → フロントガラス</li>
                        <li>2. ボンネット → トランク</li>
                        <li>3. サイドパネル（上から下）</li>
                        <li>4. バンパー → ホイール</li>
                      </ol>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">💡 効果的な方法</h5>
                      <ul className="space-y-1">
                        <li>• 2バケツ法（洗浄用・すすぎ用）</li>
                        <li>• マイクロファイバーミット使用</li>
                        <li>• 直線的な動きで洗浄</li>
                        <li>• こまめなすすぎ</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 仕上げとコーティング */}
          <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100">
                <Sparkles className="w-6 h-6 text-yellow-500" />
                仕上げとコーティング：美しさを長期間維持
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">ワックス</h4>
                  <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                    <li>• 持続期間：1-2ヶ月</li>
                    <li>• 費用：1,000-3,000円</li>
                    <li>• 効果：艶出し・撥水</li>
                    <li>• 作業時間：30分</li>
                  </ul>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">ポリマーコーティング</h4>
                  <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                    <li>• 持続期間：3-6ヶ月</li>
                    <li>• 費用：3,000-8,000円</li>
                    <li>• 効果：強力な保護膜</li>
                    <li>• 作業時間：45分</li>
                  </ul>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">ガラスコーティング</h4>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• 持続期間：1-3年</li>
                    <li>• 費用：50,000-150,000円</li>
                    <li>• 効果：最強の保護</li>
                    <li>• 作業：プロ施工推奨</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 梅雨時期の特別対策 */}
          <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100">
                <Droplets className="w-6 h-6 text-blue-500" />
                梅雨時期限定！特別対策メニュー
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-green-600">✅ 毎回やるべきこと</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 雨天走行後は必ず下回り洗浄</li>
                    <li>• ドアゴムの水分除去</li>
                    <li>• ホイールナットの錆チェック</li>
                    <li>• 排水口の詰まり確認</li>
                    <li>• バッテリー端子の清掃</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-blue-600">🔄 週1回のメンテナンス</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• 本格的な洗車とワックス</li>
                    <li>• タイヤの空気圧チェック</li>
                    <li>• ワイパーゴムの点検</li>
                    <li>• エアコンフィルター確認</li>
                    <li>• 車内の除湿・換気</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* まとめ */}
          <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-100">
                まとめ：愛車を長く美しく保つために
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                雨天走行後のボディケアは、愛車の美しさと価値を維持する最も重要なメンテナンスです。
                特に梅雨時期は、毎回の丁寧なケアが将来の大きな差となって現れます。
              </p>
              <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">今日から始める3つの習慣</h4>
                <ol className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>1. 雨天走行後24時間以内の洗車を徹底</li>
                  <li>2. 下回り洗浄を必ず実施</li>
                  <li>3. 月1回のコーティングメンテナンス</li>
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
                <h3 className="text-lg font-bold mb-2">関連記事</h3>
                <p className="text-blue-100 mb-4 text-sm">梅雨時期の車内湿気・カビ対策</p>
                <Link
                  href="/blog/rainy-season-car-humidity-prevention"
                  className="inline-block bg-white text-blue-600 px-4 py-2 rounded font-bold hover:bg-gray-100 transition-colors text-sm"
                >
                  記事を読む
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
            <span>雨天走行後のボディケア</span>
          </nav>
        </div>
      </div>
    </>
  )
}
