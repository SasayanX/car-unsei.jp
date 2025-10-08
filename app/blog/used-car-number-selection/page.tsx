import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "中古車購入時のナンバープレート選びガイド | 愛車運勢診断",
  description:
    "中古車を購入する際のナンバープレート選びのポイントを解説。運勢の良いナンバーで愛車ライフを充実させましょう。",
  keywords: "中古車,ナンバープレート,選び方,運勢,81画理論,車購入",
}

export default function UsedCarNumberSelectionPage() {
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
          <span>中古車ナンバー選び</span>
        </nav>

        {/* メイン記事 */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <Badge className="w-fit mb-4">中古車・ナンバー選び</Badge>
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              中古車購入時のナンバープレート選びガイド
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>2025年5月5日</span>
              <span>7分で読めます</span>
            </div>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              中古車を購入する際のナンバープレート選びのポイントを解説。運勢の良いナンバーで愛車ライフを充実させましょう。
            </p>

            <h2 className="text-2xl font-bold mb-4">中古車購入時のナンバー変更について</h2>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">📋 変更可能なタイミング</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>名義変更時（購入時）</li>
                <li>住所変更時</li>
                <li>希望ナンバー申請時</li>
                <li>車検時（一部条件あり）</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">運勢の良いナンバーの選び方</h2>

            <div className="space-y-4 mb-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 dark:text-green-200">🍀 大吉数字（100点）</h4>
                <p>
                  <strong>
                    1, 3, 5, 6, 11, 13, 15, 16, 21, 23, 24, 31, 32, 33, 35, 39, 41, 45, 47, 52, 61, 65, 81
                  </strong>
                </p>
                <p className="text-sm">成功運、金運、健康運に優れた数字です。</p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-800 dark:text-yellow-200">⭐ 中吉数字（80点）</h4>
                <p>
                  <strong>8, 18, 25, 48, 58, 68, 78, 79</strong>
                </p>
                <p className="text-sm">安定した運勢を保つ数字です。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">中古車特有の注意点</h2>

            <ol className="list-decimal list-inside space-y-3 mb-6">
              <li>
                <strong>前オーナーの運勢を引き継がない</strong>
                <br />
                ナンバー変更により、前の持ち主の運勢の影響を断ち切れます。
              </li>
              <li>
                <strong>車の履歴との相性</strong>
                <br />
                事故歴がある車には特に吉数を選ぶことをおすすめします。
              </li>
              <li>
                <strong>予算との兼ね合い</strong>
                <br />
                希望ナンバーには追加費用がかかることを考慮しましょう。
              </li>
            </ol>

            <h2 className="text-2xl font-bold mb-4">中古車購入者に人気のナンバー</h2>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4">🚗 中古車オーナーの選択傾向</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">コスパ重視派</h4>
                  <ul className="text-sm space-y-1">
                    <li>
                      <strong>8</strong> - 末広がりで金運アップ（80点）
                    </li>
                    <li>
                      <strong>3</strong> - 活動的で前向き（100点）
                    </li>
                    <li>
                      <strong>7</strong> - ラッキーセブン（65点）
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">運勢重視派</h4>
                  <ul className="text-sm space-y-1">
                    <li>
                      <strong>1</strong> - 新しいスタート（100点）
                    </li>
                    <li>
                      <strong>5</strong> - 成功・実現（100点）
                    </li>
                    <li>
                      <strong>6</strong> - 福徳・歓喜（100点）
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">おすすめナンバー組み合わせ</h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">💰 金運重視</h4>
                <ul className="text-sm space-y-1">
                  <li>8888 - 末広がりの最強金運</li>
                  <li>1688 - 一路発発（いちろはっぱつ）</li>
                  <li>2888 - 二重の発展</li>
                </ul>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">🛡️ 安全運転重視</h4>
                <ul className="text-sm space-y-1">
                  <li>1122 - 良い夫婦（安全運転）</li>
                  <li>3939 - サンキューサンキュー</li>
                  <li>7777 - ラッキーセブン</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">手続きの流れ</h2>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-bold">希望ナンバー申請</h4>
                  <p className="text-sm">陸運局または代行業者で申請</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-bold">名義変更手続き</h4>
                  <p className="text-sm">車検証の名義を変更</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-bold">ナンバープレート交付</h4>
                  <p className="text-sm">新しいナンバープレートを受け取り</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">💡 診断活用のコツ</h3>
              <p>
                中古車購入前に、候補のナンバーを当サイトで診断してみましょう。
                複数の候補を比較することで、最適なナンバーを選択できます。
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">まとめ</h2>

            <p>
              中古車購入は新しいスタートの機会です。運勢の良いナンバープレートを選ぶことで、
              より良いカーライフを送ることができるでしょう。事前の診断と計画的な手続きで、
              理想的なナンバーを手に入れましょう。
            </p>
          </CardContent>
        </Card>

        {/* 関連記事 */}
        <Card className="bg-gray-50 dark:bg-gray-800 border-0 shadow-lg mb-6">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">関連記事</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/blog/luxury-car-number-trends"
                className="block p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
              >
                <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">高級車オーナーのナンバー傾向</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">成功者が選ぶナンバープレートの秘密</p>
              </Link>
              <Link
                href="/blog/accident-prevention-numbers"
                className="block p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
              >
                <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">事故を避けるナンバー選び</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">安全運転をサポートする数字の力</p>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* 診断へのリンク */}
        <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">中古車のナンバー選びに診断を活用しませんか？</h3>
            <p className="mb-4">購入前に運勢をチェック</p>
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
