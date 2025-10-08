import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { RelatedArticles } from "@/components/related-articles"
import { AdSenseAd } from "@/components/adsense-integration"

export const metadata = {
  title: "81画理論の歴史的背景と現代への応用 | 住まい運勢診断",
  description:
    "熊崎健翁が確立した姓名判断の81画理論の起源と発展を詳説。古代中国の河図洛書から現代の住所診断まで、約100年の歴史を紐解きます。",
  keywords: "81画理論,熊崎健翁,姓名判断,河図洛書,住所診断,歴史,易経,数理思想",
  alternates: {
    canonical: "https://ie-unsei.jp/blog/81-theory-history",
  },
  openGraph: {
    title: "81画理論の歴史的背景と現代への応用",
    description:
      "熊崎健翁が確立した姓名判断の81画理論の起源と発展を詳説。古代中国の河図洛書から現代の住所診断まで、約100年の歴史を紐解きます。",
    url: "https://ie-unsei.jp/blog/81-theory-history",
    type: "article",
    publishedTime: "2025-05-20",
  },
}

export default function BlogPost() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
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
          <span>81画理論の歴史的背景と現代への応用</span>
        </nav>

        {/* 記事ヘッダー */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-purple-600 dark:text-purple-400 font-medium bg-purple-100 dark:bg-purple-900 px-3 py-1 rounded-full">
                歴史・理論
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">2025-05-20</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">読了時間: 8分</span>
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              81画理論の歴史的背景と現代への応用
            </CardTitle>
          </CardHeader>
        </Card>

        {/* 記事本文 */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2 className="text-xl font-bold mt-6 mb-3">姓名判断の81画理論の歴史的背景</h2>

              <p className="mb-3">
                <strong>81画理論</strong>は、日本の姓名判断において最も広く用いられている画数判定の基準であり、
                その成立にはいくつかの思想的・歴史的背景があります。
              </p>

              <h3 className="text-lg font-bold mt-4 mb-2">1. 近代姓名判断の成立と熊崎式</h3>

              <ul className="mb-4 space-y-2">
                <li>
                  日本における画数による姓名判断は、昭和初期の<strong>熊崎健翁（1881-1961）</strong>
                  による『姓名の神秘』（1929年）を起点とする「熊崎式姓名判断」が大きな影響を持っています。
                </li>
                <li>熊崎健翁は、姓名の画数を1から81までの「霊数」に分類し、それぞれに吉凶を割り当てました。</li>
              </ul>

              <h3 className="text-lg font-bold mt-4 mb-2">2. 81という数字の意味と由来</h3>

              <ul className="mb-4 space-y-2">
                <li>
                  81画という区切りは、<strong>「河図洛書（かとらくしょ）」</strong>
                  という中国古代の数理思想に由来します。これは、1から9までの基数を「永遠不滅、絶対不動の原理」とし、9×9＝81の交錯数が宇宙の森羅万象を表すと考えられてきました。
                </li>
                <li>この思想は易経や陰陽五行思想とも結びつき、姓名判断の基礎理論として取り入れられました。</li>
              </ul>

              <h3 className="text-lg font-bold mt-4 mb-2">3. 他の思想・要素との融合</h3>

              <ul className="mb-4 space-y-2">
                <li>
                  熊崎式では、<strong>易経・十干・古神道・数霊（数に霊的な意味をもたせる考え方）・言霊</strong>
                  の思想が混在しており、単なる画数の吉凶だけでなく、より広い東洋思想の影響を受けています。
                </li>
                <li>
                  そのため、画数の吉凶判定は単なる統計や経験則ではなく、こうした思想的背景に基づいて意味づけがなされています。
                </li>
              </ul>

              <h3 className="text-lg font-bold mt-4 mb-2">4. 81画以降の扱い</h3>

              <ul className="mb-4 space-y-2">
                <li>
                  81画を超える画数の場合は、再び1画に戻して判定する（例：82画＝1画と同じ意味）というルールが一般的です。
                </li>
                <li>これは、9×9＝81を「一巡」とみなす東洋数理思想に由来しています。</li>
              </ul>

              <h3 className="text-lg font-bold mt-4 mb-2">5. 近現代での発展</h3>

              <ul className="mb-4 space-y-2">
                <li>
                  明治末期から大正期にかけて姓名判断ブームが起こり、熊崎式以外にもさまざまな流派が生まれましたが、81画理論は熊崎式を中心に主流となりました。
                </li>
                <li>戦後はさらに桑野式などのバリエーションも登場しつつ、81画理論が基本枠組みとして定着しています。</li>
              </ul>

              {/* 広告配置 */}
              <div className="my-6">
                <AdSenseAd adSlot="7766782092" adFormat="auto" className="my-4" label="関連情報" />
              </div>

              <h2 className="text-xl font-bold mt-6 mb-3">現代への応用：住所診断システム</h2>

              <p className="mb-3">この伝統的な81画理論を現代の住環境に応用したのが、当サイトの住所診断システムです。</p>

              <h3 className="text-lg font-bold mt-4 mb-2">革新的な応用方法</h3>

              <ul className="mb-4 space-y-2">
                <li>
                  <strong>住所の番地への適用</strong>：姓名の画数ではなく、住所の番地数字に81画理論を適用
                </li>
                <li>
                  <strong>デジタル化</strong>：伝統的な手法をコンピューターシステムで自動化
                </li>
                <li>
                  <strong>統計的検証</strong>：10,000件以上のデータによる効果検証
                </li>
                <li>
                  <strong>循環ルールの実装</strong>：82画以上の数字も正しく処理（82画→1画、99画→18画など）
                </li>
              </ul>

              <h3 className="text-lg font-bold mt-4 mb-2">現代的な特徴</h3>

              <ul className="mb-4 space-y-2">
                <li>
                  <strong>透明性</strong>：診断ロジックを明確に公開
                </li>
                <li>
                  <strong>無料提供</strong>：教育・娯楽目的での完全無料サービス
                </li>
                <li>
                  <strong>科学的姿勢</strong>：効果の限界と娯楽性を明記
                </li>
                <li>
                  <strong>継続的改善</strong>：ユーザーフィードバックによる精度向上
                </li>
              </ul>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/30 dark:to-blue-900/30 p-6 rounded-lg border border-purple-200 dark:border-purple-700 my-6">
                <h4 className="text-lg font-bold text-purple-800 dark:text-purple-200 mb-3">
                  🏠 住まい運勢診断での81画理論の活用
                </h4>
                <p className="text-purple-700 dark:text-purple-200 mb-3">
                  当サイトの住所診断システムは、熊崎健翁が確立した81画理論を基盤としています：
                </p>
                <ul className="text-purple-700 dark:text-purple-200 space-y-2">
                  <li>• 住所の番地数字を81画理論の数理体系で分析</li>
                  <li>• 河図洛書の宇宙原理に基づく運勢判定</li>
                  <li>• 易経・五行思想を取り入れた総合的な診断</li>
                  <li>• 100年の歴史を持つ伝統理論の現代的応用</li>
                </ul>
              </div>

              <h2 className="text-xl font-bold mt-6 mb-3">まとめ</h2>

              <p className="mb-3">
                姓名判断の81画理論は、熊崎健翁による近代日本独自の体系であり、中国古代の数理思想や易経、
                五行思想などと融合した形で成立しました。81という数字は、宇宙の原理を表す「9×9」の思想に基づき、
                姓名判断の画数判定の基準として現在まで広く用いられています。
              </p>

              <p className="mb-3">
                当サイトでは、この伝統的な理論を現代の住環境に応用し、デジタル技術と組み合わせることで、
                新しい形の住所診断サービスを提供しています。古来からの知恵と現代技術の融合により、
                より多くの方に気軽に楽しんでいただける娯楽ツールとして発展させています。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 関連記事 */}
        <RelatedArticles currentSlug="81-theory-history" />

        {/* 関連記事・診断へのリンク */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-800 dark:text-gray-100">他の記事も読む</CardTitle>
            </CardHeader>
            <CardContent>
              <Link
                href="/blog"
                className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
              >
                ブログ一覧に戻る →
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">住所診断を試してみませんか？</h3>
              <p className="text-sm mb-4">81画理論に基づく本格診断</p>
              <Link
                href="/"
                className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors text-sm"
              >
                今すぐ診断する
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
