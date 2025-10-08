import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Home, ArrowRight, Star, TrendingUp } from "lucide-react"

export const metadata: Metadata = {
  title: "愛車ナンバーと住所、どちらの運勢診断が重要？比較解説 | 愛車運勢診断",
  description:
    "ナンバープレート診断と住所診断、どちらがより重要？81画理論に基づく両方の特徴と使い分けを詳しく解説。相乗効果で運勢アップを目指しましょう。",
  keywords: "ナンバープレート診断,住所診断,81画理論,運勢比較,数秘術,姓名判断",
  openGraph: {
    title: "愛車ナンバーと住所、どちらの運勢診断が重要？",
    description: "ナンバープレート診断と住所診断の特徴と使い分けを詳しく解説",
    type: "article",
  },
}

export default function CarVsAddressFortuneComparison() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <article className="max-w-4xl mx-auto space-y-8">
        {/* ヘッダー */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                比較解説
              </Badge>
              <Badge variant="outline">81画理論</Badge>
            </div>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              愛車ナンバーと住所、どちらの運勢診断が重要？
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300 mt-4">
              同じ81画理論を使用する2つの診断方法の特徴と使い分けを詳しく解説
            </p>
          </CardHeader>
        </Card>

        {/* パンくずリスト */}
        <nav className="text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-purple-600">
            ホーム
          </Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-purple-600">
            ブログ
          </Link>
          <span className="mx-2">›</span>
          <span>愛車ナンバーと住所の運勢診断比較</span>
        </nav>

        {/* 比較表 */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-purple-600" />
              診断方法の比較
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {/* ナンバープレート診断 */}
              <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-4">
                  <Car className="h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold text-blue-700 dark:text-blue-300">ナンバープレート診断</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>移動・行動運に影響</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>交通安全・ドライブ運</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>車を使った仕事運</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>変更が比較的容易</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm"
                  >
                    愛車診断をする
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* 住所診断 */}
              <div className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg border border-green-200 dark:border-green-700">
                <div className="flex items-center gap-2 mb-4">
                  <Home className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-bold text-green-700 dark:text-green-300">住所診断</h3>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>基盤・安定運に影響</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>家庭運・健康運</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>長期的な運勢への影響</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="h-4 w-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                    <span>より根本的な運勢</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Link
                    href="https://ie-unsei.jp/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors text-sm"
                  >
                    住所診断をする
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 使い分けのポイント */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>どちらを優先すべき？使い分けのポイント</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-lg mb-3 text-blue-700 dark:text-blue-300">
                  ナンバープレート診断がおすすめの方
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• 車での移動が多い方</li>
                  <li>• 営業や配送など車を使った仕事をしている方</li>
                  <li>• ドライブが趣味の方</li>
                  <li>• 交通安全を重視したい方</li>
                  <li>• 手軽に運勢改善を試したい方</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-3 text-green-700 dark:text-green-300">
                  住所診断がおすすめの方
                </h4>
                <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <li>• 引っ越しを検討している方</li>
                  <li>• 家庭運を重視したい方</li>
                  <li>• 長期的な運勢を知りたい方</li>
                  <li>• 健康運が気になる方</li>
                  <li>• 根本的な運勢改善を目指したい方</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 相乗効果 */}
        <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 shadow-lg">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4 text-center">💡 両方チェックで相乗効果！</h3>
            <p className="text-center mb-4">
              ナンバープレートと住所、両方の運勢を良くすることで、より強力な開運効果が期待できます。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="px-6 py-3 bg-white text-purple-600 rounded-lg font-bold hover:bg-gray-100 transition-colors text-center"
              >
                愛車運勢診断
              </Link>
              <Link
                href="https://ie-unsei.jp/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-green-600 rounded-lg font-bold hover:bg-gray-100 transition-colors text-center"
              >
                住所運勢診断
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* 81画理論について */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>共通の理論基盤：81画理論</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              両診断とも、熊崎健翁が確立した81画理論を基盤としています。この理論は約100年の歴史を持ち、
              数字の持つエネルギーを1から81までの画数で分類し、それぞれの吉凶を判定します。
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              同じ理論を使用しているため、ナンバープレートと住所の診断結果には一定の関連性があり、
              両方を良い数字にすることで、より調和の取れた運勢を築くことができます。
            </p>
          </CardContent>
        </Card>

        {/* 関連記事 */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle>関連記事</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/blog/81-theory-history"
                className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <h4 className="font-semibold mb-2">81画理論の歴史的背景</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">理論の起源と発展について詳しく解説</p>
              </Link>
              <Link
                href="/blog/how-car-number-diagnosis-works"
                className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <h4 className="font-semibold mb-2">ナンバープレート診断の仕組み</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">診断の流れをわかりやすく説明</p>
              </Link>
            </div>
          </CardContent>
        </Card>
      </article>
    </div>
  )
}
