import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RelatedArticles } from "@/components/related-articles"
import Link from "next/link"

export const metadata = {
  title: "住所診断とは？姓名判断理論を住所に応用した新しい占い | 住まい運勢診断",
  description:
    "住所診断は、古来より受け継がれる姓名判断の知恵を現代の住環境に応用した画期的なシステムです。あなたの住まいに秘められた運勢エネルギーを知ることで、より良い人生を歩むヒントが得られます。",
  keywords: "住所診断,姓名判断,81画理論,住まい占い,運勢診断,住所運勢,数秘術",
  openGraph: {
    title: "住所診断とは？姓名判断理論を住所に応用した新しい占い",
    description: "姓名判断理論を住所に応用した革新的な占いシステム。住まいに秘められた運勢エネルギーを解明します。",
    type: "article",
    publishedTime: "2025-04-15T00:00:00.000Z",
  },
}

export default function WhatIsAddressDiagnosisPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "住所診断とは？姓名判断理論を住所に応用した新しい占い",
    description: "姓名判断理論を住所に応用した革新的な占いシステム。住まいに秘められた運勢エネルギーを解明します。",
    author: {
      "@type": "Organization",
      name: "住まい運勢診断",
    },
    publisher: {
      "@type": "Organization",
      name: "住まい運勢診断",
    },
    datePublished: "2025-04-15T00:00:00.000Z",
    dateModified: "2025-04-15T00:00:00.000Z",
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
            <span>住所診断とは？姓名判断理論を住所に応用した新しい占い</span>
          </nav>

          {/* 記事ヘッダー */}
          <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                  基礎知識
                </span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">2025年4月15日</span>
                <span className="text-gray-500 dark:text-gray-400 text-sm">6分で読めます</span>
              </div>
              <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
                住所診断とは？姓名判断理論を住所に応用した新しい占い
              </CardTitle>
            </CardHeader>
          </Card>

          {/* 記事本文 */}
          <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
            <CardContent className="p-8 space-y-6">
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  住所診断は、古来より受け継がれる姓名判断の知恵を現代の住環境に応用した画期的なシステムです。あなたの住まいに秘められた運勢エネルギーを知ることで、より良い人生を歩むヒントが得られます。
                </p>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">住所診断の基本概念</h2>
                <p>
                  住所診断とは、<strong>住所の番地に含まれる数字</strong>
                  を分析し、その住まいが持つ運勢エネルギーを読み解く占術です。
                </p>
                <p>
                  この手法は、熊崎健翁が確立した<strong>81画理論</strong>
                  を基礎としており、姓名判断で使われる数字の吉凶判定を住所に応用したものです。
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">81画理論とは</h3>
                  <p className="text-blue-700 dark:text-blue-300">
                    1から81までの数字それぞれに固有の意味と吉凶が割り当てられた、姓名判断の基礎理論。古代中国の河図洛書に由来し、約100年の歴史を持つ確立された体系です。
                  </p>
                </div>

                <div className="my-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center text-gray-500 dark:text-gray-400">
                  <p className="text-sm">スポンサー</p>
                  <div className="h-24 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded mt-2">
                    広告スペース
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">
                  なぜ住所で運勢がわかるのか？
                </h2>
                <p>
                  東洋思想では、<strong>数字には霊的なエネルギーが宿る</strong>
                  と考えられています。住所の番地は、その土地と建物に刻まれた「数字の印」として、以下のような影響を与えるとされています：
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>環境エネルギー</strong>：住まい全体の気の流れ
                  </li>
                  <li>
                    <strong>居住者への影響</strong>：そこに住む人の運気
                  </li>
                  <li>
                    <strong>生活の質</strong>：日常生活の充実度
                  </li>
                  <li>
                    <strong>人間関係</strong>：家族や近隣との関係性
                  </li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">診断の仕組み</h2>
                <p>住所診断では、以下のステップで運勢を分析します：</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold">数字の抽出</h4>
                      <p className="text-gray-600 dark:text-gray-400">住所の番地から数字を抽出し、合計値を算出</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold">81画理論による判定</h4>
                      <p className="text-gray-600 dark:text-gray-400">合計値を81で割った余りから吉凶を判定</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold">カテゴリー別分析</h4>
                      <p className="text-gray-600 dark:text-gray-400">健康運、金運、恋愛運など6つの分野で詳細分析</p>
                    </div>
                  </div>
                </div>

                <div className="my-8 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-center text-gray-500 dark:text-gray-400">
                  <p className="text-sm">スポンサー</p>
                  <div className="h-24 flex items-center justify-center border-2 border-dashed border-gray-300 dark:border-gray-600 rounded mt-2">
                    広告スペース
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">従来の占いとの違い</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-700">
                        <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">項目</th>
                        <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">住所診断</th>
                        <th className="border border-gray-300 dark:border-gray-600 p-3 text-left">従来の占い</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">必要な情報</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">住所の番地のみ</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">氏名、生年月日など</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">プライバシー</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">完全保護</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">個人情報が必要</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">診断対象</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">住環境の運勢</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">個人の運勢</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-600 p-3 font-medium">活用場面</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">引っ越し、新築検討</td>
                        <td className="border border-gray-300 dark:border-gray-600 p-3">人生相談、将来予測</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">住所診断の活用方法</h2>
                <p>住所診断は、以下のような場面で活用できます：</p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                    <h4 className="font-bold text-green-800 dark:text-green-300 mb-2">引っ越し検討時</h4>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      候補物件の住所を事前に診断し、運勢の良い住まいを選択
                    </p>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 dark:text-blue-300 mb-2">新築・購入時</h4>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">土地選びや建物の配置決定の参考として活用</p>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                    <h4 className="font-bold text-purple-800 dark:text-purple-300 mb-2">現在の住まい分析</h4>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      今の住環境の運勢を知り、生活改善のヒントを得る
                    </p>
                  </div>
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                    <h4 className="font-bold text-orange-800 dark:text-orange-300 mb-2">投資物件選び</h4>
                    <p className="text-orange-700 dark:text-orange-300 text-sm">
                      不動産投資において運勢の良い物件を選択
                    </p>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mt-8 mb-4">今すぐ住所診断を体験</h2>
                <p>
                  住所診断は、現代のライフスタイルに合わせて開発された新しい占術です。個人情報を一切使わずに、あなたの住まいの運勢を詳しく知ることができます。
                </p>
                <p>引っ越しや新築を検討している方、現在の住まいの運勢を知りたい方は、ぜひ一度お試しください。</p>

                <div className="text-center mt-8">
                  <Link
                    href="/"
                    className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    住所診断を無料で体験する
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
          <RelatedArticles currentSlug="what-is-address-diagnosis" />
        </div>
      </div>
    </>
  )
}
