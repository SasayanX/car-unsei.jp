import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Compass, Wind } from "lucide-react"
import { RelatedArticles } from "@/components/related-articles"

export const metadata = {
  title: "風水で見る理想的な住まいの条件 | 住まい運勢チェッカー",
  description:
    "風水の観点から運気の良い住まいの条件を詳しく解説。方角、間取り、環境など、理想的な住まい選びのポイントをご紹介します。",
  keywords: "風水,住まい,理想,条件,方角,間取り,運気,住宅選び",
}

export default function IdealHomeFengshuiPage() {
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
          <span>風水で見る理想的な住まいの条件</span>
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
                風水・住まい
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">2024年1月20日</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">8分で読めます</span>
            </div>
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              風水で見る理想的な住まいの条件
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none dark:prose-invert">
            <div className="space-y-6">
              <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <Wind className="w-6 h-6 text-green-600 dark:text-green-400" />
                <p className="text-green-800 dark:text-green-200 font-medium">
                  風水の知恵を活用して、運気の良い理想的な住まいを見つけましょう。
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <Compass className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  風水の基本原理
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  風水は、環境と人間の調和を重視する古代中国の思想です。住まいの配置や方角、周辺環境が住む人の運気に大きな影響を与えると考えられています。
                </p>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">風水の三大要素</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-blue-600 dark:text-blue-300 text-2xl">気</span>
                      </div>
                      <p className="font-medium text-blue-800 dark:text-blue-200">気の流れ</p>
                      <p className="text-sm text-blue-700 dark:text-blue-300">エネルギーの循環</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-green-600 dark:text-green-300 text-2xl">形</span>
                      </div>
                      <p className="font-medium text-green-800 dark:text-green-200">形状・配置</p>
                      <p className="text-sm text-green-700 dark:text-green-300">建物の形と位置</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center mx-auto mb-2">
                        <span className="text-purple-600 dark:text-purple-300 text-2xl">方</span>
                      </div>
                      <p className="font-medium text-purple-800 dark:text-purple-200">方角・向き</p>
                      <p className="text-sm text-purple-700 dark:text-purple-300">八方位の影響</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">理想的な立地条件</h2>

                <div className="space-y-4">
                  <div className="p-4 border-l-4 border-green-500 bg-green-50 dark:bg-green-900/20">
                    <h3 className="font-bold text-green-800 dark:text-green-200">四神相応の地</h3>
                    <p className="text-green-700 dark:text-green-300">
                      東に青龍（川や道路）、西に白虎（低い丘）、南に朱雀（開けた場所）、北に玄武（山や高い建物）がある理想的な立地。
                    </p>
                  </div>

                  <div className="p-4 border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-900/20">
                    <h3 className="font-bold text-blue-800 dark:text-blue-200">水の流れ</h3>
                    <p className="text-blue-700 dark:text-blue-300">
                      緩やかに蛇行する川や、建物の前を左から右に流れる道路は金運アップに効果的。
                    </p>
                  </div>

                  <div className="p-4 border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20">
                    <h3 className="font-bold text-yellow-800 dark:text-yellow-200">日当たりと風通し</h3>
                    <p className="text-yellow-700 dark:text-yellow-300">
                      南向きで日当たりが良く、適度な風が通る環境は健康運と家族運を向上させる。
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">間取りの重要ポイント</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                    <h3 className="font-bold text-purple-800 dark:text-purple-200 mb-3">玄関の配置</h3>
                    <ul className="text-purple-700 dark:text-purple-300 space-y-2">
                      <li>• 南東または南向きが理想的</li>
                      <li>• 明るく清潔に保つ</li>
                      <li>• 正面に鏡を置かない</li>
                      <li>• 靴は整理整頓する</li>
                    </ul>
                  </div>

                  <div className="bg-pink-50 dark:bg-pink-900/20 p-6 rounded-lg">
                    <h3 className="font-bold text-pink-800 dark:text-pink-200 mb-3">寝室の条件</h3>
                    <ul className="text-pink-700 dark:text-pink-300 space-y-2">
                      <li>• 北または東向きが安眠に良い</li>
                      <li>• ベッドの頭を壁につける</li>
                      <li>• 鏡がベッドを映さない配置</li>
                      <li>• 電子機器を最小限にする</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                    <h3 className="font-bold text-orange-800 dark:text-orange-200 mb-3">キッチンの位置</h3>
                    <ul className="text-orange-700 dark:text-orange-300 space-y-2">
                      <li>• 東または南東が理想的</li>
                      <li>• コンロとシンクを離す</li>
                      <li>• 常に清潔に保つ</li>
                      <li>• 冷蔵庫は北側に配置</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                    <h3 className="font-bold text-blue-800 dark:text-blue-200 mb-3">リビングの配置</h3>
                    <ul className="text-blue-700 dark:text-blue-300 space-y-2">
                      <li>• 南向きで日当たり良好</li>
                      <li>• 家族が集まりやすい中央</li>
                      <li>• 観葉植物を配置</li>
                      <li>• 整理整頓を心がける</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">避けるべき立地・間取り</h2>

                <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-red-800 dark:text-red-200 mb-3">注意が必要な立地</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="text-red-700 dark:text-red-300 space-y-2">
                      <li>• T字路の突き当たり</li>
                      <li>• 高圧線の真下</li>
                      <li>• 墓地や病院の近く</li>
                      <li>• 急な坂道の途中</li>
                    </ul>
                    <ul className="text-red-700 dark:text-red-300 space-y-2">
                      <li>• 三角形の土地</li>
                      <li>• 袋小路の奥</li>
                      <li>• 川の合流点近く</li>
                      <li>• 高速道路の近く</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">運気アップのインテリア</h2>

                <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-4">五行を活用した色彩配置</h3>
                  <div className="grid grid-cols-5 gap-4 text-center">
                    <div>
                      <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2"></div>
                      <p className="font-medium text-gray-800 dark:text-gray-100">木</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">東・南東</p>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-2"></div>
                      <p className="font-medium text-gray-800 dark:text-gray-100">火</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">南</p>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                      <p className="font-medium text-gray-800 dark:text-gray-100">土</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">中央・南西</p>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-gray-400 rounded-full mx-auto mb-2"></div>
                      <p className="font-medium text-gray-800 dark:text-gray-100">金</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">西・北西</p>
                    </div>
                    <div>
                      <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-2"></div>
                      <p className="font-medium text-gray-800 dark:text-gray-100">水</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">北</p>
                    </div>
                  </div>
                </div>
              </section>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-2">
                  あなたの住所の風水をチェック！
                </h3>
                <p className="text-green-700 dark:text-green-300 mb-4">住所の数字から運勢を診断できます</p>
                <Link
                  href="/"
                  className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors"
                >
                  今すぐ診断する
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 関連記事 */}
        <RelatedArticles currentSlug="ideal-home-fengshui" />
      </div>
    </div>
  )
}
