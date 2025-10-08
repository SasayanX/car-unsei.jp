import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "ナンバープレート運勢を無料で診断！プロ監修の本格的な愛車診断サービス | 愛車運勢診断",
  description:
    "完全無料で利用できるナンバープレート運勢診断サービス。プロ監修の本格的な診断で、あなたの愛車の運勢を詳しく分析します。",
  keywords: "ナンバープレート診断,無料診断,愛車運勢,81画理論,車選び,ナンバー選び",
}

export default function CarNumberFortuneFreePage() {
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
          <span>無料ナンバープレート診断</span>
        </nav>

        {/* メイン記事 */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <Badge className="w-fit mb-4">ナンバープレート診断</Badge>
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              ナンバープレート運勢を無料で診断！プロ監修の本格的な愛車診断サービス
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>2025年5月15日</span>
              <span>7分で読めます</span>
            </div>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              「ナンバープレートで運勢がわかるって本当？」「無料で信頼できる診断はある？」そんな疑問をお持ちの方に、完全無料で利用できるナンバープレート運勢診断サービスをご紹介します。
            </p>

            <h2 className="text-2xl font-bold mb-4">なぜナンバープレートで運勢がわかるのか？</h2>

            <p>
              ナンバープレート診断は、約100年の歴史を持つ姓名判断の「81画理論」を車のナンバープレートに応用したものです。この理論では、数字にはそれぞれ固有のエネルギーがあり、私たちの運勢に影響を与えると考えられています。
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">🚗 診断できる運勢項目</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>交通安全運</li>
                <li>ドライブ運</li>
                <li>車両トラブル予防</li>
                <li>金運（燃費・維持費）</li>
                <li>人間関係運</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">完全無料で使える理由</h2>

            <p>当サービスが完全無料で提供できる理由は以下の通りです：</p>

            <ol className="list-decimal list-inside space-y-2 mb-6">
              <li>
                <strong>個人情報不要</strong>：ナンバープレートの数字のみで診断
              </li>
              <li>
                <strong>エンタメ性重視</strong>：楽しみながら運勢をチェック
              </li>
              <li>
                <strong>文化的価値</strong>：数字文化の普及を目的
              </li>
              <li>
                <strong>技術的効率</strong>：自動化により低コスト運営
              </li>
            </ol>

            <h2 className="text-2xl font-bold mb-4">プロ監修の信頼性</h2>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">📚 監修者プロフィール</h3>
              <p>
                当サービスは、姓名判断歴20年以上の専門家が監修。81画理論の正統な解釈に基づき、現代の車社会に適応した診断システムを構築しています。
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">診断の流れ</h2>

            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-bold">ナンバープレート入力</h4>
                  <p>「品川330あ1234」のように入力</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-bold">数字抽出・分析</h4>
                  <p>AIが数字部分を抽出し、81画理論で分析</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-bold">結果表示</h4>
                  <p>詳細な運勢レポートを即座に表示</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">利用者の声</h2>

            <div className="space-y-4 mb-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="italic">
                  "新車購入時にナンバーを選ぶ参考になりました。診断結果通り、事故もなく快適なカーライフを送っています。"
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">- Tさん（30代男性）</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <p className="italic">"無料なのに本格的で驚きました。友人にも教えて、みんなで楽しんでいます。"</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">- Sさん（40代女性）</p>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">⚠️ ご利用上の注意</h3>
              <ul className="list-disc list-inside space-y-1">
                <li>診断結果はエンタメ目的です</li>
                <li>科学的根拠はありません</li>
                <li>運転は安全第一で行ってください</li>
                <li>ナンバー変更は法的手続きが必要です</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">今すぐ診断してみよう</h2>

            <p>
              あなたの愛車のナンバープレートには、どんな運勢が秘められているでしょうか？完全無料の診断で、今すぐ確認してみましょう。
            </p>
          </CardContent>
        </Card>

        {/* 関連記事 */}
        <Card className="bg-gray-50 dark:bg-gray-800 border-0 shadow-lg mb-6">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">関連記事</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Link
                href="/blog/what-is-car-number-diagnosis"
                className="block p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
              >
                <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">ナンバープレート診断とは</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">診断の基本的な仕組みを解説</p>
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

        {/* 診断へのリンク */}
        <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">今すぐ無料診断を試してみませんか？</h3>
            <p className="mb-4">ナンバープレートを入力するだけで即座に結果表示</p>
            <Link
              href="/"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              無料診断スタート
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
