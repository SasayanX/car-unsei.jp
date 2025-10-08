import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "高級車オーナーが選ぶナンバープレートの傾向分析 | 愛車運勢診断",
  description:
    "フェラーリ、ランボルギーニ、ポルシェなど高級車オーナーが好むナンバープレートの数字を分析。成功者が選ぶ数字の秘密とは？",
  keywords: "高級車,ナンバープレート,フェラーリ,ランボルギーニ,ポルシェ,成功者,数字選び",
}

export default function LuxuryCarNumberTrendsPage() {
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
          <span>高級車ナンバー傾向</span>
        </nav>

        {/* メイン記事 */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <Badge className="w-fit mb-4">高級車・ナンバー分析</Badge>
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              高級車オーナーが選ぶナンバープレートの傾向分析
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>2025年5月10日</span>
              <span>10分で読めます</span>
            </div>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              フェラーリ、ランボルギーニ、ポルシェなど高級車オーナーが好むナンバープレートの数字を81画理論で分析。成功者が選ぶ数字の秘密に迫ります。
            </p>

            <h2 className="text-2xl font-bold mb-4">日本で人気のナンバーランキング</h2>

            <div className="bg-gradient-to-r from-gold-50 to-yellow-50 dark:from-yellow-900/20 dark:to-gold-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4">🏆 希望ナンバー申込数ランキング（全国）</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">4桁ナンバー</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>
                      <strong>1</strong> - 出立・活躍・急上昇（100点）
                    </li>
                    <li>
                      <strong>8</strong> - 意志・活発・達成（80点）
                    </li>
                    <li>
                      <strong>3</strong> - 活動・積極的・陽気（100点）
                    </li>
                    <li>
                      <strong>5</strong> - 成功・実現（100点）
                    </li>
                    <li>
                      <strong>7</strong> - 成長・発展・進歩（65点）
                    </li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-bold mb-2">4桁ナンバー</h4>
                  <ol className="list-decimal list-inside space-y-1 text-sm">
                    <li>
                      <strong>1111</strong> - 最強の出立運
                    </li>
                    <li>
                      <strong>8888</strong> - 達成運の極致
                    </li>
                    <li>
                      <strong>1122</strong> - バランス型
                    </li>
                    <li>
                      <strong>1188</strong> - 成功×達成
                    </li>
                    <li>
                      <strong>3333</strong> - 活動運の連続
                    </li>
                  </ol>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">高級車オーナーに人気の数字</h2>

            <div className="bg-gold-50 dark:bg-yellow-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4">🏆 実際に大吉とされる数字</h3>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <strong>1</strong> - 出立・活躍・急上昇（100点）
                </li>
                <li>
                  <strong>3</strong> - 活動・積極的・陽気（100点）
                </li>
                <li>
                  <strong>5</strong> - 成功・実現（100点）
                </li>
                <li>
                  <strong>6</strong> - 福徳・歓喜・地位（100点）
                </li>
                <li>
                  <strong>8</strong> - 意志・活発・達成（80点）
                </li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold mb-4">ブランド別の傾向</h2>

            <div className="space-y-4 mb-6">
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-red-800 dark:text-red-200">🏎️ フェラーリオーナー</h4>
                <p>情熱的な「3」「7」「9」を好む傾向。特に「3737」「7979」などの組み合わせが人気。</p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-800 dark:text-yellow-200">🐂 ランボルギーニオーナー</h4>
                <p>力強さを表す「1」「8」を選択。「1188」「8811」など対称的な数字を好む。</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800 dark:text-gray-200">🏁 ポルシェオーナー</h4>
                <p>精密性を重視し「11」「22」「33」などのゾロ目を選ぶ傾向。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">地域別の選択傾向</h2>

            <div className="space-y-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800 dark:text-blue-200">🗼 関東地方</h4>
                <p>ビジネス志向が強く「8」「1」を好む。「1188」「8811」などの組み合わせが人気。</p>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-orange-800 dark:text-orange-200">🏯 関西地方</h4>
                <p>個性を重視し「3」「7」を選択。「3737」「7777」など印象的な数字を好む。</p>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 dark:text-green-200">🌸 九州地方</h4>
                <p>縁起を重視し「6」「5」を選ぶ傾向。「5656」「6666」などの福徳数字が人気。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">年代別の選択傾向</h2>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-purple-800 dark:text-purple-200">👨‍💼 20-30代</h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• SNS映えする「1111」「8888」</li>
                  <li>• 個性的な「1234」「9876」</li>
                  <li>• 誕生日や記念日の数字</li>
                </ul>
              </div>
              <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-indigo-800 dark:text-indigo-200">👔 40-50代</h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• ビジネス運重視「8」「1」</li>
                  <li>• 安定志向「6」「5」</li>
                  <li>• 品格のある組み合わせ</li>
                </ul>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-bold text-gray-800 dark:text-gray-200">🎩 60代以上</h4>
                <ul className="text-sm space-y-1 mt-2">
                  <li>• 伝統的な吉数「3」「5」「6」</li>
                  <li>• シンプルなゾロ目</li>
                  <li>• 健康運重視の選択</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">成功者が避ける数字</h2>

            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">⚠️ 実際に凶数とされる数字</h3>
              <ul className="list-disc list-inside space-y-1">
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
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">価格帯別の選択傾向</h2>

            <ul className="space-y-3 mb-6">
              <li>
                <strong>1000万円以上</strong>：シンプルなゾロ目（1111、8888）
              </li>
              <li>
                <strong>3000万円以上</strong>：希少な組み合わせ（1234、9876）
              </li>
              <li>
                <strong>5000万円以上</strong>：オークション落札の特別ナンバー
              </li>
            </ul>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">💡 あなたの愛車にも応用</h3>
              <p>
                高級車オーナーの選択を参考に、あなたの愛車にも運勢の良いナンバーを選んでみませんか？
                81画理論に基づく診断で最適な数字を見つけることができます。
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">まとめ</h2>

            <p>
              高級車オーナーのナンバープレート選択には明確な傾向があります。成功者たちが選ぶ数字には、
              金運や成功運を高める意味が込められており、これらの知識を活用することで、
              あなたの愛車選びにも役立てることができるでしょう。
            </p>

            {/* 関連記事 */}
            <Card className="bg-gray-50 dark:bg-gray-800 border-0 shadow-lg mb-6">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">関連記事</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link
                    href="/blog/accident-prevention-numbers"
                    className="block p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">
                      事故を避けるナンバープレートの選び方
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">安全運転をサポートする数字の力について</p>
                  </Link>
                  <Link
                    href="/blog/used-car-number-selection"
                    className="block p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">中古車購入時のナンバー選び</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">中古車でも運勢の良いナンバーを選ぶコツ</p>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* 診断へのリンク */}
        <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">あなたの愛車のナンバープレート運勢を診断してみませんか？</h3>
            <p className="mb-4">高級車オーナーと同じ基準で分析</p>
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
