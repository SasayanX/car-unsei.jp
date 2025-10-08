import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "活躍するF1ドライバーとゼッケン番号の吉凶関係 | 愛車運勢診断",
  description:
    "ルイス・ハミルトン、マックス・フェルスタッペン、角田裕毅など世界で活躍するF1ドライバーのゼッケン番号を81画理論で分析。吉数を背負うレーサーたちの成功の秘密に迫ります。",
  keywords: "F1,ドライバー,ゼッケン番号,81画理論,数秘術,ハミルトン,フェルスタッペン,角田裕毅",
}

export default function F1DriversNumbersPage() {
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
          <span>F1ドライバーとゼッケン番号</span>
        </nav>

        {/* メイン記事 */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <Badge className="w-fit mb-4">モータースポーツ・数秘術</Badge>
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              活躍するF1ドライバーとゼッケン番号の吉凶関係
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>2025年5月25日</span>
              <span>12分で読めます</span>
            </div>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              F1の世界では、ドライバーが選ぶゼッケン番号にも運勢の影響があると言われています。81画理論を用いて、世界で活躍するF1ドライバーたちのゼッケン番号を分析してみましょう。
            </p>

            <h2 className="text-2xl font-bold mb-4">世界チャンピオンたちの番号分析</h2>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4">ルイス・ハミルトン（#44）</h3>
              <p>
                7度の世界チャンピオンに輝くハミルトンのゼッケン番号「44」は、81画理論では「破滅」を意味する凶数とされています。しかし、彼の場合は生年月日や名前の画数との組み合わせで、この数字が逆に強力なパワーを発揮していると考えられます。
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4">マックス・フェルスタッペン（#1）</h3>
              <p>
                現世界チャンピオンのフェルスタッペンが使用する「1」は、81画理論では「大吉」の最高位数字。リーダーシップと成功を象徴する数字で、彼の圧倒的な強さを数字が後押ししています。
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">日本人ドライバーの番号</h2>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4">角田裕毅（#22）</h3>
              <p>
                アルファタウリで活躍する角田選手の「22」は、81画理論では「薄弱」を意味する数字ですが、彼の持つ天性の才能と努力により、この数字のマイナス面を克服していると言えるでしょう。
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">吉数を持つドライバーたち</h2>

            <ul className="space-y-4 mb-6">
              <li>
                <strong>#3（リカルド）</strong>：「成功」を意味する吉数
              </li>
              <li>
                <strong>#11（ペレス）</strong>：「幸運」を象徴する数字
              </li>
              <li>
                <strong>#16（ルクレール）</strong>：「大成」を表す吉数
              </li>
              <li>
                <strong>#55（サインツ）</strong>：「発展」を意味する数字
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">ナンバー選びの戦略</h2>

            <p>
              F1ドライバーたちのゼッケン番号分析から分かることは、必ずしも吉数だけが成功をもたらすわけではないということです。重要なのは：
            </p>

            <ol className="list-decimal list-inside space-y-2 mb-6">
              <li>個人の生年月日との相性</li>
              <li>名前の画数との組み合わせ</li>
              <li>本人の努力と才能</li>
              <li>数字に対する信念とポジティブな気持ち</li>
            </ol>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">💡 愛車のナンバー選びへの応用</h3>
              <p>
                F1ドライバーの分析を参考に、あなたの愛車のナンバープレートも選んでみませんか？81画理論に基づく診断で、最適な数字を見つけることができます。
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">まとめ</h2>

            <p>
              F1の世界で活躍するドライバーたちのゼッケン番号分析から、数字の持つパワーの興味深い側面が見えてきました。あなたの愛車のナンバープレートも、きっと特別な意味を持っているはずです。
            </p>
          </CardContent>
        </Card>

        {/* 診断へのリンク */}
        <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">あなたの愛車のナンバープレート運勢を診断してみませんか？</h3>
            <p className="mb-4">F1ドライバーと同じ81画理論で分析</p>
            <Link
              href="/"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              今すぐ診断する
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
