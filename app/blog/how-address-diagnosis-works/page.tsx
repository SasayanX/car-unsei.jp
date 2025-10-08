import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "3分でわかる住所運勢診断の仕組み | 住まい運勢診断",
  description:
    "住所運勢診断がどのように行われるのか、基本的な仕組みを簡単に解説します。数字の抽出から吉凶判定まで、診断の流れをわかりやすく説明。",
  keywords: "住所運勢診断,仕組み,アルゴリズム,数字,吉凶,運勢,住所,診断方法",
}

export default function HowAddressDiagnosisWorks() {
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
          <span>3分でわかる住所運勢診断の仕組み</span>
        </nav>

        {/* 記事ヘッダー */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">3分でわかる住所運勢診断の仕組み</h1>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <span>2025年4月18日</span>
            <span className="mx-2">•</span>
            <span>3分で読めます</span>
          </div>
        </div>

        {/* 記事本文 */}
        <Card className="bg-white/90 dark:bg-gray-800/90 border-0 shadow-md">
          <CardContent className="p-6">
            <div className="prose dark:prose-invert max-w-none">
              <p>
                住所運勢診断は、あなたの住所から運勢を読み解くサービスです。「どうやって診断しているの？」と思われる方も多いでしょう。
                この記事では、住所運勢診断の基本的な仕組みをごく簡単に解説します。
              </p>

              <h2 className="text-xl font-bold mt-6 mb-3">診断の4ステップ</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h3 className="font-bold text-purple-700 dark:text-purple-300">ステップ1: 住所から数字を抽出</h3>
                  <p className="text-sm mt-2">
                    入力された住所から、番地などの数字部分を抽出します。例えば「東京都新宿区西新宿2-8-1」なら「2」「8」「1」を抽出します。
                    部屋番号は影響が軽微なため、基本的には考慮しません。
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-700 dark:text-blue-300">ステップ2: 各数字の吉凶を判定</h3>
                  <p className="text-sm mt-2">
                    抽出した数字それぞれの吉凶を判定します。例えば「2」「8」「1」なら、「2」は大凶、「8」は中吉、「1」は大吉といった具合に、
                    各数字の持つ意味を分析します。合計ではなく、個々の数字が重要です。
                  </p>
                </div>

                <div className="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg">
                  <h3 className="font-bold text-indigo-700 dark:text-indigo-300">ステップ3: 数字の組み合わせを分析</h3>
                  <p className="text-sm mt-2">
                    個々の数字だけでなく、数字の組み合わせや配置も重要です。
                    例えば「4」は単体では凶数ですが、「8」と組み合わさると「48」となり、「繁栄・末広がり」という良い意味を持つこともあります。
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h3 className="font-bold text-green-700 dark:text-green-300">ステップ4: 結果を表示</h3>
                  <p className="text-sm mt-2">
                    分析結果から、総合運や金運、健康運などの各運勢を算出し、わかりやすく表示します。
                    また、運勢を上げるためのアドバイスも提供します。
                  </p>
                </div>
              </div>

              <h2 className="text-xl font-bold mt-6 mb-3">数字の吉凶について</h2>
              <p>住所運勢診断の核心は、数字の吉凶判定です。例えば：</p>
              <ul className="list-disc pl-5 space-y-2 my-4">
                <li>
                  <strong className="text-green-600 dark:text-green-400">大吉の数字</strong>：1, 3, 5, 6, 11, 13, 15, 16
                  など
                </li>
                <li>
                  <strong className="text-red-600 dark:text-red-400">大凶の数字</strong>：2, 4, 12, 14, 22 など
                </li>
                <li>
                  <strong className="text-yellow-600 dark:text-yellow-400">中吉・吉の数字</strong>：7(吉), 8(中吉),
                  18(中吉) など
                </li>
              </ul>
              <p>
                ただし、数字単体だけでなく、組み合わせも重要です。例えば「4」は単体では凶数ですが、
                「8」と組み合わさると「48」となり、「繁栄・末広がり」という良い意味を持つこともあります。
              </p>

              <h2 className="text-xl font-bold mt-6 mb-3">まとめ</h2>
              <p>
                住所運勢診断は、住所から抽出した数字の吉凶を判定することで運勢を導き出します。
                科学的根拠はありませんが、多くの方が参考にされています。 詳しい数字の影響については、「
                <Link
                  href="/blog/address-numbers-fortune-impact"
                  className="text-purple-600 dark:text-purple-400 hover:underline"
                >
                  住所の数字が運勢に与える影響とは？
                </Link>
                」の記事をご覧ください。
              </p>

              <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-lg mt-6">
                <p className="text-sm">
                  <strong>注意：</strong>{" "}
                  住所運勢診断はあくまで参考程度にお楽しみください。重要な決断は、様々な要素を総合的に判断することをおすすめします。
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 関連記事 */}
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">関連記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="bg-white/80 dark:bg-gray-800/80 border-0 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-4">
                <h4 className="font-bold mb-2">
                  <Link
                    href="/blog/does-address-fortune-work"
                    className="text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    住所運勢診断って当たるの？
                  </Link>
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  科学的根拠はないものの、実際の体験談から見える傾向について客観的に解説します。
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white/80 dark:bg-gray-800/80 border-0 shadow-md hover:shadow-lg transition-all">
              <CardContent className="p-4">
                <h4 className="font-bold mb-2">
                  <Link
                    href="/blog/address-numbers-fortune-impact"
                    className="text-purple-600 dark:text-purple-400 hover:underline"
                  >
                    住所の数字が運勢に与える影響とは？
                  </Link>
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  住所に含まれる数字が、住む人の運勢にどのような影響を与えるのかを詳しく解説します。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* 診断へのリンク */}
        <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">あなたの住所の運勢を診断してみませんか？</h3>
            <p className="mb-4">無料で簡単に診断できます</p>
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
