import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "ナンバープレート診断とは？81画理論を車に応用した新しい占い | 愛車運勢診断",
  description:
    "ナンバープレート診断の基本的な仕組みを解説。81画理論を車のナンバーに応用した診断方法について詳しく説明します。",
  keywords: "ナンバープレート診断,81画理論,車占い,数秘術,運勢診断",
}

export default function WhatIsCarNumberDiagnosisPage() {
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
          <span>ナンバープレート診断とは</span>
        </nav>

        {/* メイン記事 */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <Badge className="w-fit mb-4">診断方法・基礎知識</Badge>
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              ナンバープレート診断とは？81画理論を車に応用した新しい占い
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>2025年4月20日</span>
              <span>6分で読めます</span>
            </div>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              ナンバープレート診断は、姓名判断で使われる81画理論を車のナンバープレートに応用した新しい占い方法です。
              あなたの愛車のナンバーから運勢を読み解く仕組みを詳しく解説します。
            </p>

            <h2 className="text-2xl font-bold mb-4">81画理論とは</h2>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">📚 理論の基礎</h3>
              <p className="mb-3">
                81画理論は、姓名判断において名前の画数から運勢を占う伝統的な方法です。
                1から81までの各数字に固有の意味と運勢が割り当てられています。
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>古代中国の易学に基づく数秘術</li>
                <li>日本の姓名判断で広く使用</li>
                <li>各数字に具体的な意味と点数を設定</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">診断の仕組み</h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <h4 className="font-bold">ナンバーの数字を抽出</h4>
                  <p className="text-sm">「品川 500 あ 1234」から「1234」を取得</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <h4 className="font-bold">各桁の数字を分析</h4>
                  <p className="text-sm">1, 2, 3, 4それぞれの意味を81画理論で判定</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <h4 className="font-bold">合計値を計算</h4>
                  <p className="text-sm">1+2+3+4=10として、10の運勢を判定</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <h4 className="font-bold">総合評価を算出</h4>
                  <p className="text-sm">各要素の点数を組み合わせて最終スコアを決定</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">数字の分類と意味</h2>

            <div className="space-y-4 mb-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 dark:text-green-200">🍀 大吉数（100点）</h4>
                <p className="text-sm mb-2">
                  <strong>
                    1, 3, 5, 6, 11, 13, 15, 16, 21, 23, 24, 31, 32, 33, 35, 39, 41, 45, 47, 52, 61, 65, 81
                  </strong>
                </p>
                <p className="text-sm">成功運、金運、健康運に優れた数字です。</p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-800 dark:text-yellow-200">⭐ 中吉数（80点）</h4>
                <p className="text-sm mb-2">
                  <strong>8, 18, 25, 48, 58, 68, 78, 79</strong>
                </p>
                <p className="text-sm">安定した運勢を保つ数字です。</p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-blue-800 dark:text-blue-200">✨ 吉数（65点）</h4>
                <p className="text-sm mb-2">
                  <strong>7, 17, 29, 37, 38, 51, 57, 63, 67, 71, 75, 77</strong>
                </p>
                <p className="text-sm">良好な運勢を示す数字です。</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-red-800 dark:text-red-200">⚠️ 大凶数（20点）</h4>
                <p className="text-sm mb-2">
                  <strong>2, 4, 12, 14, 20, 22, 42, 44, 72, 74</strong>
                </p>
                <p className="text-sm">注意が必要な数字です。</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">診断の活用方法</h2>

            <ol className="list-decimal list-inside space-y-3 mb-6">
              <li>
                <strong>新車購入時のナンバー選び</strong>
                <br />
                希望ナンバー制度を利用して運勢の良い数字を選択
              </li>
              <li>
                <strong>中古車購入時の判断材料</strong>
                <br />
                既存のナンバーの運勢をチェックして購入を検討
              </li>
              <li>
                <strong>現在の愛車の運勢確認</strong>
                <br />
                今乗っている車のナンバーから運勢を知る
              </li>
              <li>
                <strong>ナンバー変更の検討</strong>
                <br />
                運勢が悪い場合は変更を検討する材料として活用
              </li>
            </ol>

            <h2 className="text-2xl font-bold mb-4">診断の信頼性について</h2>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">🔍 科学的根拠について</h3>
              <p className="mb-3">
                ナンバープレート診断は占いの一種であり、科学的根拠はありません。
                しかし、以下のような心理的効果が期待できます：
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>良い結果による安心感とポジティブ思考</li>
                <li>愛車への愛着の向上</li>
                <li>運転時の注意力向上</li>
                <li>数字選びの楽しみ</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">実際の診断例</h2>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-4">例：ナンバー「1234」の場合</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>1</strong>：出立・活躍・急上昇（100点）
                </p>
                <p>
                  <strong>2</strong>：分裂・絶縁・決別（20点）
                </p>
                <p>
                  <strong>3</strong>：活動・積極的・陽気（100点）
                </p>
                <p>
                  <strong>4</strong>：災難・不幸・悲運（20点）
                </p>
                <p>
                  <strong>合計10</strong>：破滅・陥没・混乱（40点）
                </p>
                <p className="font-bold mt-3">総合評価：56点（中程度）</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">まとめ</h2>

            <p>
              ナンバープレート診断は、伝統的な81画理論を現代の車社会に応用した新しい占い方法です。
              科学的根拠はありませんが、愛車選びや運転への意識向上に役立てることができます。
              楽しみながら活用していただければと思います。
            </p>

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
                  <Link
                    href="/blog/used-car-number-selection"
                    className="block p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">中古車購入時のナンバー選び</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">中古車でも運勢の良いナンバーを選ぶコツ</p>
                  </Link>
                  <Link
                    href="/blog/does-car-number-fortune-work"
                    className="block p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">ナンバー占いは当たるのか</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">科学的検証と心理的効果について</p>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* 診断へのリンク */}
        <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">実際にナンバープレート診断を体験してみませんか？</h3>
            <p className="mb-4">81画理論で愛車の運勢をチェック</p>
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
