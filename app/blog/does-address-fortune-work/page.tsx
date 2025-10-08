import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Search, Users, TrendingUp, AlertCircle } from "lucide-react"
import { RelatedArticles } from "@/components/related-articles"

export const metadata = {
  title: "住所運勢診断って当たるの？実際の体験談から検証 | 住まい運勢診断",
  description:
    "住所運勢診断の精度について、科学的根拠と実際の体験談を交えて客観的に解説します。開発者とユーザーの実体験も紹介。",
  keywords: "住所運勢診断,当たる,精度,体験談,科学的根拠,効果",
}

export default function DoesAddressFortuneWorkPage() {
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
          <span>住所運勢診断って当たるの？</span>
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
                検証・体験談
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">2024年2月10日</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">7分で読めます</span>
            </div>
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              住所運勢診断って当たるの？実際の体験談から検証
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none dark:prose-invert">
            <div className="space-y-6">
              <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <Search className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <p className="text-blue-800 dark:text-blue-200 font-medium">
                  住所運勢診断の精度について、科学的視点と実際の体験談から客観的に検証してみました。
                </p>
              </div>

              {/* 重要な前提 */}
              <section>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h2 className="text-xl font-bold text-yellow-800 dark:text-yellow-200 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    まず最初にお伝えしたいこと
                  </h2>
                  <div className="space-y-2 text-yellow-700 dark:text-yellow-300">
                    <p className="font-medium">
                      住所運勢診断には**科学的・医学的根拠はありません**。これは最初に明確にしておきたい重要なポイントです。
                    </p>
                    <p>
                      しかし、実際に診断を受けた多くの方から「そういった傾向が強い」「影響を受けていると感じる」という声をいただいているのも事実です。
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  実際の体験談
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                  ここでは、実際に住所運勢診断を活用された方々の体験談をご紹介します。これらは個人の体験であり、効果を保証するものではありませんが、参考として共有いたします。
                </p>

                {/* 開発者の体験談 */}
                <div className="mb-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg border border-yellow-200 dark:border-yellow-700">
                  <div className="mb-4">
                    <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      サイト開発者の実体験
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg border border-red-200 dark:border-red-700">
                        <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">引っ越し前（1424-1）</h3>
                        <div className="text-red-700 dark:text-red-300 space-y-1">
                          <p className="text-lg font-bold">運勢スコア：52点</p>
                          <ul className="text-sm space-y-1">
                            <li>• やる気がなく無気力状態</li>
                            <li>• 借金地獄でボロボロ</li>
                            <li>• 人生に希望が見えない</li>
                          </ul>
                        </div>
                      </div>
                      <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-700">
                        <h3 className="font-bold text-green-800 dark:text-green-200 mb-2">引っ越し後（3-1-8）</h3>
                        <div className="text-green-700 dark:text-green-300 space-y-1">
                          <p className="text-lg font-bold">運勢スコア：89点</p>
                          <ul className="text-sm space-y-1">
                            <li>• やる気が湧いてきた</li>
                            <li>• ビジネスが絶好調</li>
                            <li>• 借金を完済できた</li>
                            <li>• 優しい彼女ができた</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <blockquote className="italic text-gray-700 dark:text-gray-200 border-l-4 border-orange-400 pl-4">
                      "1424-1に住んでいた頃はやる気がなく、借金地獄でボロボロの状態でした。そこから思い切って3-1-8へ引っ越したところ、人生が激変！この体験から「住所の番地にも姓名判断と同様の数字のパワーがある！」と気づき、このサイトを作りました。"
                    </blockquote>
                  </div>
                </div>

                {/* Nさんの体験談 */}
                <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
                  <div className="mb-4">
                    <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      利用者Nさん（20代女性）の体験
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg border border-red-200 dark:border-red-700">
                        <h3 className="font-bold text-red-800 dark:text-red-200 mb-2">引っ越し前</h3>
                        <div className="text-red-700 dark:text-red-300 space-y-1">
                          <p className="text-lg font-bold">運勢スコア：32点</p>
                          <p className="text-sm">低スコアの住所に居住</p>
                        </div>
                      </div>
                      <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-700">
                        <h3 className="font-bold text-green-800 dark:text-green-200 mb-2">引っ越し後</h3>
                        <div className="text-green-700 dark:text-green-300 space-y-1">
                          <p className="text-lg font-bold">運勢スコア：87点</p>
                          <ul className="text-sm space-y-1">
                            <li>• 2ヶ月で職場での昇進</li>
                            <li>• 素敵な彼氏ができた</li>
                            <li>• 人間関係が改善</li>
                            <li>• 収入がアップ</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <blockquote className="italic text-gray-700 dark:text-gray-200 border-l-4 border-purple-400 pl-4">
                      "運勢チェッカーで自分の住所が32点と低いことを知り、思い切って引っ越しを決意。87点の高スコア番地に移住してから、わずか2ヶ月で職場での昇進が決まり、素敵な彼氏もできました。毎日が充実していて、引っ越して本当に良かったです！"
                    </blockquote>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                  なぜ「当たる」と感じるのか？
                </h2>

                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">1. 環境の変化による心理的効果</h3>
                    <p className="text-blue-700 dark:text-blue-300 text-sm">
                      引っ越しという大きな環境変化が、気持ちの切り替えや新しい行動パターンを促進する可能性があります。
                    </p>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h3 className="font-bold text-green-800 dark:text-green-200 mb-2">2. 意識の変化</h3>
                    <p className="text-green-700 dark:text-green-300 text-sm">
                      「運勢の良い住所に住んでいる」という意識が、前向きな行動や積極的な姿勢を促す可能性があります。
                    </p>
                  </div>

                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-2">3. 確証バイアス</h3>
                    <p className="text-purple-700 dark:text-purple-300 text-sm">
                      良い出来事があった時に「やはり住所の影響だ」と感じやすくなる心理的傾向も考えられます。
                    </p>
                  </div>

                  <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <h3 className="font-bold text-orange-800 dark:text-orange-200 mb-2">4. 偶然の一致</h3>
                    <p className="text-orange-700 dark:text-orange-300 text-sm">
                      人生には様々な変化があり、引っ越しのタイミングと良い出来事が偶然重なることもあります。
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />
                  診断の活用方法
                </h2>

                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-4">おすすめの活用スタンス</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        ✓
                      </span>
                      <p className="text-gray-700 dark:text-gray-300">**参考程度に楽しむ** - 娯楽として気軽に活用</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        ✓
                      </span>
                      <p className="text-gray-700 dark:text-gray-300">**住所選びの一要素** - 他の条件と合わせて検討</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        ✓
                      </span>
                      <p className="text-gray-700 dark:text-gray-300">
                        **気持ちの切り替え** - 新生活への前向きなきっかけ
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        ×
                      </span>
                      <p className="text-gray-700 dark:text-gray-300">
                        **過度な期待は禁物** - 診断結果に人生を委ねない
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">まとめ</h2>
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                  <div className="space-y-3">
                    <p className="text-gray-700 dark:text-gray-300">
                      住所運勢診断に科学的根拠はありませんが、実際に「影響を感じる」という体験談は数多く寄せられています。
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      重要なのは、診断結果を**絶対的なもの**として捉えるのではなく、**人生をより良くするためのきっかけの一つ**として活用することです。
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 font-medium">
                      最終的には、あなた自身の努力と行動が人生を決定づけます。住所運勢診断は、その背中を押してくれる小さなツールとして楽しんでいただければと思います。
                    </p>
                  </div>
                </div>
              </section>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-purple-800 dark:text-purple-200 mb-2">
                  あなたも住所運勢診断を体験してみませんか？
                </h3>
                <p className="text-purple-700 dark:text-purple-300 mb-4">参考程度に、気軽にお試しください</p>
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
        <RelatedArticles currentSlug="does-address-fortune-work" />
      </div>
    </div>
  )
}
