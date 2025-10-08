import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Building, AlertTriangle, Home } from "lucide-react"
import { RelatedArticles } from "@/components/related-articles"

export const metadata = {
  title: "マンション・アパートでの住所診断の注意点 | 住まい運勢診断",
  description: "集合住宅での住所診断において重要なポイントと、部屋番号の扱い方について詳しく解説します。",
  keywords: "マンション,アパート,住所診断,番地,部屋番号,集合住宅",
}

export default function ApartmentAddressDiagnosisPage() {
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
          <span>マンション・アパートでの住所診断の注意点</span>
        </nav>

        {/* 戻るボタン */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          ブログ一覧に戻る
        </Link>

        {/* メイン記事 */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-purple-600 dark:text-purple-400 font-medium bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
                住所診断
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">2024年2月5日</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">5分で読めます</span>
            </div>
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              マンション・アパートでの住所診断の注意点
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none dark:prose-invert">
            <div className="space-y-6">
              <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Building className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <p className="text-blue-800 dark:text-blue-200 font-medium">
                  集合住宅での住所診断では、番地の数字が最も重要で、部屋番号の影響は軽微です。
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <Home className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  集合住宅での住所の構造
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  マンションやアパートの住所は「○○市○○町1-2-3 ○○マンション
                  405号室」のような構造になっています。住まい運勢診断では、この中で最も重要なのは**番地の数字（1-2-3の部分）**です。
                </p>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    重要なポイント
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        ✓
                      </span>
                      <p className="text-yellow-700 dark:text-yellow-300">
                        **番地の数字**：運勢に大きな影響（重要度：高）
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-gray-400 text-white rounded-full flex items-center justify-center text-sm">
                        △
                      </span>
                      <p className="text-yellow-700 dark:text-yellow-300">**部屋番号**：影響は軽微（重要度：低）</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  なぜ部屋番号の影響は軽微なのか？
                </h2>

                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">1. エネルギーの源泉</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      住所の運勢エネルギーは、その土地や建物の位置から発生します。番地はその場所を特定する根本的な数字であり、部屋番号は建物内での位置を示すに過ぎません。
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">2. 影響の範囲</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      番地の数字は建物全体とその土地に影響を与えますが、部屋番号の影響は個室レベルに限定されます。そのため、全体的な運勢への影響は限定的です。
                    </p>
                  </div>

                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">3. 診断の実用性</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      部屋番号まで考慮すると診断が複雑になりすぎ、実用的ではありません。番地の数字による診断で十分な精度が得られます。
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">集合住宅での診断方法</h2>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-4">診断手順</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </span>
                      <div>
                        <p className="font-medium text-blue-800 dark:text-blue-200">住所から番地を抽出</p>
                        <p className="text-blue-700 dark:text-blue-300 text-sm">
                          例：「東京都渋谷区神南1-2-3」→「1-2-3」
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </span>
                      <div>
                        <p className="font-medium text-blue-800 dark:text-blue-200">数字を合計して一桁にする</p>
                        <p className="text-blue-700 dark:text-blue-300 text-sm">1+2+3=6</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </span>
                      <div>
                        <p className="font-medium text-blue-800 dark:text-blue-200">吉凶を判定</p>
                        <p className="text-blue-700 dark:text-blue-300 text-sm">6は大吉数（福徳・歓喜・地位）</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center text-sm">
                        ×
                      </span>
                      <div>
                        <p className="font-medium text-gray-600 dark:text-gray-400">部屋番号は基本的に無視</p>
                        <p className="text-gray-500 dark:text-gray-500 text-sm">405号室などは考慮しない</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">よくある質問</h2>

                <div className="space-y-4">
                  <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">
                      Q: 部屋番号が4や9など不吉な数字の場合は？
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      A:
                      部屋番号の影響は軽微なため、過度に心配する必要はありません。番地の数字が良ければ、全体的な運勢は良好です。
                    </p>
                  </div>

                  <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">Q: 同じ建物の住人は皆同じ運勢？</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      A:
                      番地による基本的な運勢傾向は同じですが、個人の生年月日や名前、生活習慣などにより実際の運勢は変わります。
                    </p>
                  </div>

                  <div className="p-4 border border-gray-200 dark:border-gray-600 rounded-lg">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">
                      Q: 引っ越しを検討する際の判断基準は？
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      A: 番地の数字による運勢が重要です。部屋番号よりも、建物の番地に注目して物件を選びましょう。
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">まとめ</h2>
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <ul className="space-y-2 text-green-700 dark:text-green-300">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400">•</span>
                      集合住宅では**番地の数字**が運勢に最も大きな影響を与える
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400">•</span>
                      **部屋番号の影響は軽微**で、基本的に無視して良い
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400">•</span>
                      物件選びでは部屋番号よりも**建物の番地**に注目する
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 dark:text-green-400">•</span>
                      診断は番地の数字のみで十分な精度が得られる
                    </li>
                  </ul>
                </div>
              </section>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-2">
                  あなたの住所の運勢を診断してみませんか？
                </h3>
                <p className="text-purple-700 dark:text-purple-300 mb-4">番地の数字から正確な運勢を判定します</p>
                <Link
                  href="/"
                  className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors"
                >
                  今すぐ診断する
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 関連記事 */}
        <RelatedArticles currentSlug="apartment-room-number-fortune" />
      </div>
    </div>
  )
}
