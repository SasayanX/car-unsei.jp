import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "事故を避けるナンバープレートの選び方 | 愛車運勢診断",
  description: "交通事故を避けるためのナンバープレート選びを数秘術の観点から解説。安全運転をサポートする数字の力とは？",
  keywords: "交通事故,安全運転,ナンバープレート,数秘術,事故防止,運転安全",
}

export default function AccidentPreventionNumbersPage() {
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
          <span>事故防止ナンバー</span>
        </nav>

        {/* メイン記事 */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <Badge className="w-fit mb-4">交通安全・数秘術</Badge>
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              事故を避けるナンバープレートの選び方
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>2025年5月1日</span>
              <span>8分で読めます</span>
            </div>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              交通事故を避けるためのナンバープレート選びを数秘術の観点から解説。安全運転をサポートする数字の力について詳しく見ていきましょう。
            </p>

            <h2 className="text-2xl font-bold mb-4">安全運転をサポートする数字</h2>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4">🛡️ 実際に高得点の安全数字</h3>
              <div className="space-y-3">
                <div>
                  <strong>7</strong> - 成長・発展・進歩（65点）
                </div>
                <div>
                  <strong>8</strong> - 意志・活発・達成（80点）
                </div>
                <div>
                  <strong>11</strong> - 独立・安定・聡明（100点）
                </div>
                <div>
                  <strong>13</strong> - 賢明・知恵・利口（100点）
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">避けるべき危険な数字</h2>

            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">⚠️ 実際に低得点の数字</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>2</strong> - 分裂・絶縁・決別（20点）
                </li>
                <li>
                  <strong>4</strong> - 災難・不幸・悲運（20点）
                </li>
                <li>
                  <strong>12</strong> - 誤解・錯覚・絶縁（20点）
                </li>
                <li>
                  <strong>14</strong> - 絶望・破滅・波乱（20点）
                </li>
                <li>
                  <strong>20</strong> - 崩壊・陥没・混乱（30点）
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">おすすめの安全ナンバー組み合わせ</h2>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">🚗 ファミリーカー向け</h4>
                <ul className="text-sm space-y-1">
                  <li>
                    <strong>1313</strong> - 賢明・知恵の組み合わせ（100点×2）
                  </li>
                  <li>
                    <strong>1515</strong> - 堅実・着実な安全運転（100点×2）
                  </li>
                  <li>
                    <strong>3333</strong> - 活動・積極的・陽気（100点×4）
                  </li>
                </ul>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h4 className="font-bold mb-2">🏍️ 通勤・業務用</h4>
                <ul className="text-sm space-y-1">
                  <li>
                    <strong>8888</strong> - 意志・活発・達成の最強組み合わせ
                  </li>
                  <li>
                    <strong>1616</strong> - 指導・地位・財産（100点×2）
                  </li>
                  <li>
                    <strong>7777</strong> - 成長・発展・進歩の連続
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">数字の組み合わせ効果</h2>

            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold">同じ数字の繰り返し</h4>
                <p className="text-sm">7777、8888など。その数字の力を最大化します。</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold">昇順の組み合わせ</h4>
                <p className="text-sm">1234、5678など。成長と発展を表します。</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold">対称の組み合わせ</h4>
                <p className="text-sm">1881、7337など。バランスと調和を生みます。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">日本の交通事故とナンバーの関係</h2>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4">📈 日本で避けられがちなナンバー</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">希望者が少ない数字</h4>
                  <ul className="text-sm space-y-1">
                    <li>
                      <strong>4</strong> - 「死」を連想（20点）
                    </li>
                    <li>
                      <strong>42</strong> - 「死に」を連想（20点）
                    </li>
                    <li>
                      <strong>49</strong> - 「死苦」を連想（30点）
                    </li>
                    <li>
                      <strong>44</strong> - 「死死」を連想（20点）
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">人気の安全ナンバー</h4>
                  <ul className="text-sm space-y-1">
                    <li>
                      <strong>8</strong> - 「末広がり」で人気（80点）
                    </li>
                    <li>
                      <strong>7</strong> - 「ラッキーセブン」（65点）
                    </li>
                    <li>
                      <strong>3</strong> - 「三位一体」で安定（100点）
                    </li>
                    <li>
                      <strong>5</strong> - 「五大」で完全（100点）
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">実際の事故統計との関係</h2>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">📊 統計的な傾向</h3>
              <p className="mb-3">※以下は統計的傾向であり、科学的根拠はありません。参考程度にお考えください。</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>「4」を含むナンバーの事故率がやや高い傾向</li>
                <li>「7」「8」を含むナンバーの事故率が低い傾向</li>
                <li>ゾロ目ナンバーは運転が慎重になる傾向</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">心理的効果の重要性</h2>

            <p className="mb-4">
              ナンバープレートの数字が直接事故を防ぐわけではありませんが、以下の心理的効果が期待できます：
            </p>

            <ol className="list-decimal list-inside space-y-2 mb-6">
              <li>
                <strong>安心感の向上</strong> - 良い数字により精神的安定
              </li>
              <li>
                <strong>注意力の向上</strong> - 特別なナンバーへの愛着から慎重運転
              </li>
              <li>
                <strong>ポジティブ思考</strong> - 良い運勢への期待から前向きな運転
              </li>
              <li>
                <strong>責任感の向上</strong> - 選んだナンバーへの責任感
              </li>
            </ol>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">💡 安全運転の基本</h3>
              <p>
                どんなに良いナンバーを選んでも、基本的な安全運転が最も重要です。
                ナンバープレートは「お守り」として、安全運転の意識向上に役立てましょう。
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">まとめ</h2>

            <p>
              事故防止に効果的とされるナンバープレートの選び方をご紹介しました。
              数字の力を信じる信じないに関わらず、安全運転への意識を高める
              きっかけとして活用していただければと思います。
            </p>

            <h2 className="text-2xl font-bold mb-4">地域別の安全ナンバー傾向</h2>

            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold">北海道・東北地方</h4>
                <p className="text-sm">雪道運転が多いため「8」（安定）「11」（慎重）を好む傾向。</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold">関東地方</h4>
                <p className="text-sm">交通量が多いため「13」（賢明）「15」（堅実）を選択する人が多い。</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-bold">関西地方</h4>
                <p className="text-sm">運転マナーを重視し「7」（成長）「16」（指導）を好む。</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-bold">九州・沖縄地方</h4>
                <p className="text-sm">家族の安全を重視し「6」（福徳）「21」（独立）を選ぶ傾向。</p>
              </div>
            </div>
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
                href="/blog/what-is-car-number-diagnosis"
                className="block p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
              >
                <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">ナンバープレート診断とは</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">診断の基本的な仕組みを解説</p>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* 診断へのリンク */}
        <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">あなたの愛車の安全運勢を診断してみませんか？</h3>
            <p className="mb-4">事故防止の観点から分析</p>
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
