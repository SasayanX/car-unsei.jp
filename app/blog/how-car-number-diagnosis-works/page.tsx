import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "3分でわかるナンバープレート運勢診断の仕組み | 愛車運勢診断",
  description:
    "ナンバープレート運勢診断がどのように行われるのか、基本的な仕組みを簡単に解説します。数字の抽出から吉凶判定まで、診断の流れをわかりやすく説明。",
  keywords: "ナンバープレート診断,仕組み,81画理論,数字抽出,吉凶判定,診断方法",
}

export default function HowCarNumberDiagnosisWorksPage() {
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
          <span>診断の仕組み</span>
        </nav>

        {/* メイン記事 */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <Badge className="w-fit mb-4">ナンバープレート診断</Badge>
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              3分でわかるナンバープレート運勢診断の仕組み
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>2025年4月21日</span>
              <span>3分で読めます</span>
            </div>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              ナンバープレート運勢診断がどのように行われるのか、基本的な仕組みを簡単に解説します。数字の抽出から吉凶判定まで、診断の流れをわかりやすく説明します。
            </p>

            <h2 className="text-2xl font-bold mb-4">診断の基本的な流れ</h2>

            <div className="space-y-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">ナンバープレート入力</h3>
                  <p className="mb-3">
                    「品川330あ1234」のような形式でナンバープレートを入力します。
                    地域名、分類番号、ひらがな、一連指定番号すべてを含めて入力してください。
                  </p>
                  <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded text-sm">
                    <strong>入力例：</strong> 品川330あ1234、横浜501さ7890
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">数字の抽出</h3>
                  <p className="mb-3">
                    入力されたナンバープレートから数字部分のみを自動抽出します。
                    地域名やひらがなは除外し、純粋な数字のみを取得します。
                  </p>
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded text-sm">
                    <strong>抽出例：</strong> 品川330あ1234 → 3301234
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">運勢分析</h3>
                  <p className="mb-3">
                    抽出した数字を個別に分析し、さらに隣接する2桁の組み合わせも分析します。
                    各数字とその組み合わせの運勢を81画理論に基づいて評価します。
                  </p>
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded text-sm">
                    <strong>分析例：</strong> 3, 3, 1, 2, 3, 4 → 個別分析 + 33, 31, 12, 23, 34の組み合わせ分析
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">運勢判定</h3>
                  <p className="mb-3">
                    計算された数字に基づいて、各運勢項目の吉凶を判定します。
                    交通安全運、金運、人間関係運など複数の観点から分析します。
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">81画理論の数字分類</h2>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">🌟 大吉数（100点）</h4>
                <p className="text-sm mb-2">
                  1, 3, 5, 6, 11, 13, 15, 16, 21, 23, 24, 31, 32, 33, 35, 39, 41, 45, 47, 52, 61, 65, 81
                </p>
                <p className="text-xs">成功、発展、繁栄を表す</p>
              </div>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-800 dark:text-yellow-200 mb-2">⭐ 中吉数（80点）</h4>
                <p className="text-sm mb-2">8, 18, 25, 48, 58, 68, 78, 79</p>
                <p className="text-xs">安定、調和を表す</p>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <h4 className="font-bold text-red-800 dark:text-red-200 mb-2">⚠️ 大凶数（20点）</h4>
                <p className="text-sm mb-2">2, 4, 12, 14, 20, 22, 42, 44, 72, 74</p>
                <p className="text-xs">注意、困難を表す</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">具体的な診断例</h2>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-3">📝 診断例：品川330あ1234</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>
                    <strong>入力：</strong>
                  </span>
                  <span>品川330あ1234</span>
                </div>
                <div className="flex justify-between">
                  <span>
                    <strong>数字抽出：</strong>
                  </span>
                  <span>3, 3, 0, 1, 2, 3, 4</span>
                </div>
                <div className="flex justify-between">
                  <span>
                    <strong>有効数字：</strong>
                  </span>
                  <span>3, 3, 1, 2, 3, 4 (0を除外)</span>
                </div>
                <div className="flex justify-between">
                  <span>
                    <strong>個別分析：</strong>
                  </span>
                  <span>3(100点), 3(100点), 1(100点), 2(20点), 3(100点), 4(20点)</span>
                </div>
                <div className="flex justify-between">
                  <span>
                    <strong>組み合わせ分析：</strong>
                  </span>
                  <span>33(100点), 31(100点), 12(20点), 23(100点), 34(30点)</span>
                </div>
                <div className="flex justify-between">
                  <span>
                    <strong>総合スコア：</strong>
                  </span>
                  <span>72点</span>
                </div>
                <div className="flex justify-between">
                  <span>
                    <strong>判定：</strong>
                  </span>
                  <span>「吉・良運」→ 良い運勢</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">システムの特徴</h2>

            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>
                <strong>瞬時判定</strong>：入力から結果表示まで数秒
              </li>
              <li>
                <strong>詳細分析</strong>：複数の運勢項目を同時に診断
              </li>
              <li>
                <strong>アドバイス付き</strong>：具体的な改善提案を提供
              </li>
              <li>
                <strong>履歴保存</strong>：過去の診断結果を記録
              </li>
            </ul>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">💡 診断精度について</h3>
              <p className="text-sm">
                当システムは伝統的な81画理論に基づいていますが、
                科学的根拠はありません。エンターテイメントとしてお楽しみください。
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">まとめ</h2>

            <p>
              ナンバープレート運勢診断は、シンプルな4ステップで行われます。
              伝統的な数秘術をデジタル技術で自動化することで、
              誰でも簡単に愛車の運勢をチェックできるシステムとなっています。
            </p>
          </CardContent>
        </Card>

        {/* 診断へのリンク */}
        <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">実際に診断を体験してみませんか？</h3>
            <p className="mb-4">仕組みを理解したら実際に試してみよう</p>
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
