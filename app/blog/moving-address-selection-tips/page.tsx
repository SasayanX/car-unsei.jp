import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, MapPin, CheckCircle, AlertTriangle } from "lucide-react"
import { RelatedArticles } from "@/components/related-articles"

export const metadata = {
  title: "引っ越し先の住所選びで注意すべきポイント | 住まい運勢チェッカー",
  description:
    "新しい住まいを選ぶ際の住所の数字や立地の運勢的な見方を詳しく解説。引っ越し成功のための実践的アドバイスをご紹介します。",
  keywords: "引っ越し,住所選び,住まい選び,運勢,数字,立地,新居",
}

export default function MovingAddressSelectionTipsPage() {
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
          <span>引っ越し先の住所選びで注意すべきポイント</span>
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
                引っ越し・住まい選び
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">2024年2月1日</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">7分で読めます</span>
            </div>
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              引っ越し先の住所選びで注意すべきポイント
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none dark:prose-invert">
            <div className="space-y-6">
              <div className="flex items-center gap-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <MapPin className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                <p className="text-orange-800 dark:text-orange-200 font-medium">
                  新しい住まい選びは人生の重要な決断。運勢の視点も取り入れて最適な選択をしましょう。
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                  住所選びの基本ステップ
                </h2>

                <div className="space-y-4">
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-2">ステップ1: 現在の状況を分析</h3>
                    <ul className="text-blue-700 dark:text-blue-300 space-y-1">
                      <li>• 現在の住所の数字とその影響を確認</li>
                      <li>• 改善したい運勢の分野を明確化</li>
                      <li>• 家族構成と将来の計画を考慮</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <h3 className="font-bold text-green-800 dark:text-green-200 mb-2">ステップ2: 目標設定</h3>
                    <ul className="text-green-700 dark:text-green-300 space-y-1">
                      <li>• 仕事運、恋愛運、金運など重視する分野</li>
                      <li>• 家族全員の運勢バランスを考慮</li>
                      <li>• 短期・長期の目標を設定</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-2">ステップ3: 候補地の選定</h3>
                    <ul className="text-purple-700 dark:text-purple-300 space-y-1">
                      <li>• 希望する数字の組み合わせをリストアップ</li>
                      <li>• 立地条件と運勢の両面から評価</li>
                      <li>• 複数の候補を比較検討</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">住所の数字別おすすめ用途</h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-3 border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20">
                      <h4 className="font-bold text-red-800 dark:text-red-200">1番地系</h4>
                      <p className="text-red-700 dark:text-red-300 text-sm">起業家、新事業、独立志向の方</p>
                    </div>

                    <div className="p-3 border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20">
                      <h4 className="font-bold text-orange-800 dark:text-orange-200">2番地系</h4>
                      <p className="text-orange-700 dark:text-orange-300 text-sm">新婚夫婦、協調性重視の方</p>
                    </div>

                    <div className="p-3 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20">
                      <h4 className="font-bold text-yellow-800 dark:text-yellow-200">3番地系</h4>
                      <p className="text-yellow-700 dark:text-yellow-300 text-sm">クリエイター、営業職の方</p>
                    </div>

                    <div className="p-3 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20">
                      <h4 className="font-bold text-green-800 dark:text-green-200">4番地系</h4>
                      <p className="text-green-700 dark:text-green-300 text-sm">安定志向、貯蓄重視の方</p>
                    </div>

                    <div className="p-3 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20">
                      <h4 className="font-bold text-blue-800 dark:text-blue-200">5番地系</h4>
                      <p className="text-blue-700 dark:text-blue-300 text-sm">自由業、旅行好きの方</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="p-3 border-l-4 border-indigo-500 bg-indigo-50 dark:bg-indigo-900/20">
                      <h4 className="font-bold text-indigo-800 dark:text-indigo-200">6番地系</h4>
                      <p className="text-indigo-700 dark:text-indigo-300 text-sm">家族重視、教育関係の方</p>
                    </div>

                    <div className="p-3 border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-900/20">
                      <h4 className="font-bold text-purple-800 dark:text-purple-200">7番地系</h4>
                      <p className="text-purple-700 dark:text-purple-300 text-sm">研究者、スピリチュアル志向</p>
                    </div>

                    <div className="p-3 border-l-4 border-pink-500 bg-pink-50 dark:bg-pink-900/20">
                      <h4 className="font-bold text-pink-800 dark:text-pink-200">8番地系</h4>
                      <p className="text-pink-700 dark:text-pink-300 text-sm">経営者、金運重視の方</p>
                    </div>

                    <div className="p-3 border-l-4 border-teal-500 bg-teal-50 dark:bg-teal-900/20">
                      <h4 className="font-bold text-teal-800 dark:text-teal-200">9番地系</h4>
                      <p className="text-teal-700 dark:text-teal-300 text-sm">人道主義、社会貢献志向</p>
                    </div>

                    <div className="p-3 border-l-4 border-gray-500 bg-gray-50 dark:bg-gray-700">
                      <h4 className="font-bold text-gray-800 dark:text-gray-200">0番地系</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">新しいスタート、リセット</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                  注意すべき住所パターン
                </h2>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-yellow-800 dark:text-yellow-200 mb-4">
                    避けた方が良い数字の組み合わせ
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">金運に注意</h4>
                      <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
                        <li>• 4-4の組み合わせ（停滞）</li>
                        <li>• 4-9の組み合わせ（苦労）</li>
                        <li>• 連続する下降数字</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-800 dark:text-yellow-200 mb-2">健康運に注意</h4>
                      <ul className="text-yellow-700 dark:text-yellow-300 text-sm space-y-1">
                        <li>• 病院番号と同じ数字</li>
                        <li>• 過度に陰の数字が多い</li>
                        <li>• バランスの悪い組み合わせ</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">実際の選び方のコツ</h2>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-4">チェックリスト</h3>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-700 dark:text-gray-300">現在の住所の運勢を分析済み</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-700 dark:text-gray-300">改善したい運勢分野を明確化</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-700 dark:text-gray-300">候補地の数字の意味を理解</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-700 dark:text-gray-300">立地条件も総合的に評価</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-700 dark:text-gray-300">家族全員の運勢を考慮</span>
                    </label>
                    <label className="flex items-center gap-3">
                      <input type="checkbox" className="w-4 h-4 text-purple-600" />
                      <span className="text-gray-700 dark:text-gray-300">予算と運勢のバランスを検討</span>
                    </label>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">引っ越し後の運勢変化</h2>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-green-800 dark:text-green-200 mb-3">変化を感じるタイミング</h3>
                  <div className="space-y-2 text-green-700 dark:text-green-300">
                    <p>
                      <strong>1ヶ月後:</strong> 環境の変化による心理的影響
                    </p>
                    <p>
                      <strong>3ヶ月後:</strong> 新しいリズムと習慣の定着
                    </p>
                    <p>
                      <strong>6ヶ月後:</strong> 人間関係や仕事面での変化
                    </p>
                    <p>
                      <strong>1年後:</strong> 総合的な運勢の変化を実感
                    </p>
                  </div>
                </div>
              </section>

              <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-orange-800 dark:text-orange-200 mb-2">
                  引っ越し前に現在の住所をチェック！
                </h3>
                <p className="text-orange-700 dark:text-orange-300 mb-4">今の住所の運勢を知ることから始めましょう</p>
                <Link
                  href="/"
                  className="inline-block bg-orange-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-700 transition-colors"
                >
                  住所診断を始める
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 関連記事 */}
        <RelatedArticles currentSlug="moving-address-selection-tips" />
      </div>
    </div>
  )
}
