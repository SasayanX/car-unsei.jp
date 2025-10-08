import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RelatedArticles } from "@/components/related-articles"
import Link from "next/link"

export const metadata = {
  title: "住所運勢を無料で診断！プロ監修の本格的な住まい診断サービス | 住まい運勢診断",
  description:
    "「住所で運勢がわかるって本当？」「無料で信頼できる診断はある？」そんな疑問をお持ちの方に、完全無料で利用できる住所運勢診断サービスをご紹介します。プロ監修の本格的な診断で、あなたの住まいの運勢を詳しく分析。",
  keywords: "住所運勢,無料診断,プロ監修,住まい診断,81画理論,姓名判断,住所占い",
  openGraph: {
    title: "住所運勢を無料で診断！プロ監修の本格的な住まい診断サービス",
    description:
      "完全無料で利用できる住所運勢診断サービス。プロ監修の本格的な診断で、あなたの住まいの運勢を詳しく分析します。",
    type: "article",
    publishedTime: "2025-05-15T00:00:00.000Z",
  },
}

export default function AddressFortuneFreePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "住所運勢を無料で診断！プロ監修の本格的な住まい診断サービス",
    description:
      "完全無料で利用できる住所運勢診断サービス。プロ監修の本格的な診断で、あなたの住まいの運勢を詳しく分析します。",
    author: {
      "@type": "Organization",
      name: "住まい運勢診断",
    },
    publisher: {
      "@type": "Organization",
      name: "住まい運勢診断",
    },
    datePublished: "2025-05-15T00:00:00.000Z",
    dateModified: "2025-05-15T00:00:00.000Z",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

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
            <span>住所運勢を無料で診断！プロ監修の本格的な住まい診断サービス</span>
          </nav>

          {/* 記事ヘッダー */}
          <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                  住所診断
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">2025年5月15日</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">7分で読めます</span>
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
                住所運勢を無料で診断！プロ監修の本格的な住まい診断サービス
              </CardTitle>
            </CardHeader>
          </Card>

          {/* 記事本文 */}
          <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8 space-y-6">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  「住所で運勢がわかるって本当？」「無料で信頼できる診断はある？」そんな疑問をお持ちの方に、完全無料で利用できる住所運勢診断サービスをご紹介します。
                </p>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
                  なぜ住所で運勢がわかるのか？
                </h2>
                <p>
                  住所運勢診断は、約100年の歴史を持つ<strong>81画理論</strong>
                  に基づいています。この理論は、熊崎健翁によって確立された姓名判断の基礎理論を、現代の住環境に応用したものです。
                </p>
                <p>
                  住所に含まれる数字には、それぞれ固有の運勢エネルギーが宿っており、そこに住む人の運気に影響を与えると考えられています。
                </p>

                <div className="my-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center text-gray-500 dark:text-gray-400">
                  <p className="text-sm">スポンサー</p>
                  <div className="h-24 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded mt-2">
                    広告スペース
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">プロ監修の信頼性</h2>
                <p>
                  当サービスの診断アルゴリズムは、姓名判断の専門家による監修を受けています。単なる占いではなく、以下の要素を総合的に分析します：
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>健康運</strong>：住環境が健康に与える影響
                  </li>
                  <li>
                    <strong>金運</strong>：経済的な豊かさへの影響
                  </li>
                  <li>
                    <strong>恋愛運</strong>：人間関係や恋愛への影響
                  </li>
                  <li>
                    <strong>仕事運</strong>：キャリアや成功への影響
                  </li>
                  <li>
                    <strong>学業運</strong>：学習や成長への影響
                  </li>
                  <li>
                    <strong>家庭運</strong>：家族関係や家庭の調和への影響
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">完全無料で安心</h2>
                <p>
                  多くの占いサイトでは、詳細な診断結果を見るために料金が発生しますが、当サービスは
                  <strong>完全無料</strong>です。
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">無料で提供される内容</h3>
                  <ul className="text-blue-700 dark:text-blue-300 space-y-1">
                    <li>✓ 6つのカテゴリー別運勢スコア</li>
                    <li>✓ 詳細な運勢解説</li>
                    <li>✓ 運気向上のアドバイス</li>
                    <li>✓ ラッキーアイテムの提案</li>
                    <li>✓ 診断履歴の保存</li>
                  </ul>
                </div>

                <div className="my-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center text-gray-500 dark:text-gray-400">
                  <p className="text-sm">スポンサー</p>
                  <div className="h-24 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded mt-2">
                    広告スペース
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">個人情報不要で安心</h2>
                <p>
                  診断に必要なのは<strong>住所の番地部分のみ</strong>
                  です。氏名や生年月日、詳細な住所は一切不要で、プライバシーを完全に保護します。
                </p>
                <p>例：「1丁目2番地3号」または「123番地」など、番地の数字部分だけを入力するだけで診断が可能です。</p>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">実際の診断体験</h2>
                <p>
                  診断は非常にシンプルです。住所の番地を入力するだけで、瞬時に以下のような詳細な結果が表示されます：
                </p>
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-3">診断結果例</h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>健康運：85点（大吉）</div>
                    <div>金運：72点（吉）</div>
                    <div>恋愛運：68点（吉）</div>
                    <div>仕事運：91点（大吉）</div>
                    <div>学業運：76点（吉）</div>
                    <div>家庭運：83点（大吉）</div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">今すぐ無料診断を体験</h2>
                <p>
                  住所運勢診断は、引っ越しを検討している方、新築を計画している方、現在の住まいの運勢を知りたい方に最適です。
                </p>
                <p>完全無料で、個人情報の入力も不要。今すぐあなたの住まいの運勢を確認してみませんか？</p>

                <div className="text-center mt-8">
                  <Link
                    href="/"
                    className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    今すぐ無料で診断する
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="my-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center text-gray-500 dark:text-gray-400">
            <p className="text-sm">スポンサー</p>
            <div className="h-24 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded mt-2">
              広告スペース
            </div>
          </div>
          <RelatedArticles currentSlug="address-fortune-free" />
        </div>
      </div>
    </>
  )
}
