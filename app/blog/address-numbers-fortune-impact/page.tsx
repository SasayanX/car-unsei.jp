import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Home, Calculator, TrendingUp } from "lucide-react"
import { RelatedArticles } from "@/components/related-articles"

export const metadata = {
  title: "住所の数字が運勢に与える影響とは？ | 住まい運勢チェッカー",
  description:
    "住所に含まれる数字が住む人の運勢にどのような影響を与えるのかを詳しく解説。数字の持つ意味と運勢への作用を理解しましょう。",
  keywords: "住所,数字,運勢,影響,住まい,風水,数秘術",
}

export default function AddressNumbersFortuneImpactPage() {
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
          <span>住所の数字が運勢に与える影響とは？</span>
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
                住所運勢
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">2024年1月15日</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">5分で読めます</span>
            </div>
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              住所の数字が運勢に与える影響とは？
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none dark:prose-invert">
            <div className="space-y-6">
              <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Home className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <p className="text-blue-800 dark:text-blue-200 font-medium">
                  住所の番地に含まれる数字は、住む人の運勢に大きな影響を与えると考えられています。
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <Calculator className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  番地の数字による吉凶判定
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  住所診断では数字の吉凶が最も重要です。抽象的な意味よりも運勢の良し悪しが核心となります。
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">大吉数</h3>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• 非常に良い運勢</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">大凶数</h3>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• 非常に悪い運勢</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">中吉数</h3>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• まあまあ良い運勢</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">中凶数</h3>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• まあまあ悪い運勢</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">吉数</h3>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• 良い運勢</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">凶数</h3>
                    <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                      <li>• 悪い運勢</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">番地数字の吉凶一覧</h2>

                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20">
                    <h3 className="font-bold text-red-800 dark:text-red-200">1番地: 大吉 (スコア100)</h3>
                    <p className="text-red-700 dark:text-red-300">出立・活躍・急上昇</p>
                  </div>

                  <div className="p-4 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20">
                    <h3 className="font-bold text-orange-800 dark:text-orange-200">2番地: 大凶 (スコア20)</h3>
                    <p className="text-orange-700 dark:text-orange-300">分裂・絶縁・決別</p>
                  </div>

                  <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20">
                    <h3 className="font-bold text-yellow-800 dark:text-yellow-200">3番地: 大吉 (スコア100)</h3>
                    <p className="text-yellow-700 dark:text-yellow-300">活動・積極的・陽気</p>
                  </div>

                  <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20">
                    <h3 className="font-bold text-green-800 dark:text-green-200">4番地: 大凶 (スコア20)</h3>
                    <p className="text-green-700 dark:text-green-300">災難・不幸・悲運</p>
                  </div>

                  <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20">
                    <h3 className="font-bold text-blue-800 dark:text-blue-200">5番地: 大吉 (スコア100)</h3>
                    <p className="text-blue-700 dark:text-blue-300">成功・実現</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                  運勢への具体的な影響
                </h2>

                <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-3">住所の数字が影響する分野</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-purple-600 dark:text-purple-300 font-bold">仕</span>
                      </div>
                      <p className="font-medium text-gray-800 dark:text-gray-100">仕事運</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">キャリアの発展</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-pink-100 dark:bg-pink-800 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-pink-600 dark:text-pink-300 font-bold">恋</span>
                      </div>
                      <p className="font-medium text-gray-800 dark:text-gray-100">恋愛運</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">人間関係の質</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-green-600 dark:text-green-300 font-bold">金</span>
                      </div>
                      <p className="font-medium text-gray-800 dark:text-gray-100">金運</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">財政状況の改善</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">実践的な活用方法</h2>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-3">住所選びのポイント</h3>
                  <ol className="text-yellow-700 dark:text-yellow-300 space-y-2">
                    <li>1. 現在の人生の目標を明確にする</li>
                    <li>2. 目標に合った数字の意味を理解する</li>
                    <li>3. 複数の数字の組み合わせを考慮する</li>
                    <li>4. 実際に住んでみて変化を観察する</li>
                  </ol>
                  <p className="text-yellow-700 dark:text-yellow-300 mt-4">
                    部屋番号は軽微な影響のため基本的に無視して良いでしょう。
                  </p>
                </div>
              </section>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-2">
                  あなたの住所の運勢を今すぐチェック！
                </h3>
                <p className="text-blue-700 dark:text-blue-300 mb-4">無料で簡単に診断できます</p>
                <Link
                  href="/"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                >
                  診断を始める
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 関連記事 */}
        <RelatedArticles currentSlug="address-numbers-fortune-impact" />
      </div>
    </div>
  )
}
