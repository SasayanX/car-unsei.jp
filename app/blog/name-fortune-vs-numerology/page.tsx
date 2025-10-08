import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { RelatedArticles } from "@/components/related-articles"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "姓名判断と数秘術の違い | 画数と数字の不思議な世界 | 住まい運勢チェッカー",
  description:
    "姓名判断と数秘術の根本的な違いを専門家が詳しく解説。81画理論と数秘術の計算方法、文化的背景、判定基準の違いを分かりやすく比較します。",
  keywords: "姓名判断, 数秘術, 81画理論, 画数, 占い比較, 数字占い",
  alternates: {
    canonical: "https://ie-unsei.jp/blog/name-fortune-vs-numerology",
  },
  openGraph: {
    title: "姓名判断と数秘術の違い | 画数と数字の不思議な世界",
    description: "姓名判断と数秘術の根本的な違いを専門家が詳しく解説。計算方法から文化的背景まで徹底比較。",
    url: "https://ie-unsei.jp/blog/name-fortune-vs-numerology",
    type: "article",
    publishedTime: "2025-01-29",
    authors: ["金雨輝龍"],
  },
}

export default function NameFortuneVsNumerologyPage() {
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
          <span>姓名判断と数秘術の違い</span>
        </nav>

        {/* 記事ヘッダー */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm text-purple-600 dark:text-purple-400 font-medium bg-purple-100 dark:bg-purple-900 px-3 py-1 rounded-full">
                占術比較
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">2025-01-29</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">読了時間: 15分</span>
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              「画数」と「数字」の不思議な世界
              <br />
              姓名判断と数秘術、どう違う？
            </CardTitle>
          </CardHeader>
        </Card>

        {/* 記事本文 */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div
              className="prose prose-lg dark:prose-invert max-w-none
                prose-headings:text-gray-800 dark:prose-headings:text-gray-100
                prose-p:text-gray-600 dark:prose-p:text-gray-300
                prose-strong:text-gray-800 dark:prose-strong:text-gray-100
                prose-ul:text-gray-600 dark:prose-ul:text-gray-300
                prose-ol:text-gray-600 dark:prose-ol:text-gray-300"
            >
              <p className="text-lg leading-relaxed">
                名前に隠された運命を読み解く――。このテーマで「姓名判断」と「数秘術」はよく比較されますが、実は
                <strong>"数字の扱い方"がまったく違う</strong>
                こと、ご存じでしょうか？今回は、その違いを面白く解説します。
              </p>

              <h2>姓名判断：漢字の画数に「吉凶」を宿す日本発の占い</h2>
              <p>
                姓名判断は、日本で発展した占い。名前を構成する漢字の画数を数え、天格・人格・地格・外格・総格などの「格」に分けて合計し、
                <strong>1～81の範囲で吉凶を判定</strong>します。
              </p>

              <h3>81という数字の意味</h3>
              <p>
                この81という数字は、中国の数理思想や易経の「9×9＝81」から来ていて、<strong>宇宙の完全数</strong>
                とされてきました。各画数には「大吉」「吉」「凶」などの意味が割り振られ、例えば「31画は大吉」「33画は吉」など、まるで"運勢の暗号表"のようです。
              </p>

              <p>
                面白いのは、同じ数字でも流派によって吉凶が違うことがある点。さらに、旧字体・新字体で画数が変わる、名字や名前が一文字だと「霊数」を足すなど、計算方法も多彩です。
              </p>

              <p>
                つまり、姓名判断は「日本語の漢字文化」と「東洋の数理哲学」が融合した、かなりローカルで複雑な"数字の運命学"なのです。
              </p>

              <h2>数秘術：数字そのものが「宇宙の言葉」</h2>
              <p>
                一方、数秘術（ヌメロロジー）は、古代ギリシャやユダヤのカバラ思想を源流とする「数字の神秘学」。名前や生年月日を特定の法則で数字に変換し、
                <strong>1～9（＋マスターナンバー11、22、33など）の"基本数字"に還元</strong>
                します。
              </p>

              <h3>計算方法の例</h3>
              <p>
                名前をアルファベットやひらがなに変換→対応する数字に置き換え→合計→一桁になるまで足す、という流れ。ここで出た数字が「あなたの本質」や「人生のテーマ」を表すとされます。
              </p>

              <p>
                ポイントは、<strong>数字そのものに普遍的な意味がある</strong>
                と考えること。「1＝始まり」「2＝調和」「3＝創造」…といった具合です。
              </p>

              <p>吉凶ではなく、性格や資質、人生の傾向を読み解く"数字の性格診断"とも言えます。</p>

              <h2>どこがどう違う？ざっくり比較</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold">
                        項目
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-purple-600">
                        姓名判断
                      </th>
                      <th className="border border-gray-300 dark:border-gray-600 px-4 py-3 text-left font-semibold text-blue-600">
                        数秘術
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">何を使う</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">漢字の画数（1～81）</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                        名前・生年月日を数字化（1～9等）
                      </td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">基準</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">吉凶の暗号表</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">数字の性格・象徴</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">計算方法</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                        画数を合計し、格ごとに判定
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                        数字に変換し、一桁に還元
                      </td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">結果の意味</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                        吉・凶・大吉など運勢を判定
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                        性格・資質・人生のテーマを解釈
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3 font-medium">文化背景</td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                        日本・中国の漢字文化、東洋哲学
                      </td>
                      <td className="border border-gray-300 dark:border-gray-600 px-4 py-3">
                        西洋の神秘思想、カバラ、ピタゴラス
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2>まとめ：数字の"顔"は占いごとに変わる！</h2>
              <p>
                <strong>姓名判断では</strong>「数字＝吉凶の鍵」
                <br />
                <strong>数秘術では</strong>「数字＝宇宙のキャラクター」
              </p>

              <p>
                同じ"数字"でも、その意味づけはまるで別世界！あなたの名前の画数が「凶」でも、数秘術では「個性豊かな7」となるかもしれません。
              </p>

              <p className="text-center font-medium">
                数字の見方を変えれば、運命も変わる――そんな不思議な世界を、ぜひ楽しんでみてください。
              </p>

              <p className="text-sm italic">
                （おまけ：ラッキーナンバーは自分で決めてもOK！という柔軟な考え方も、最近のトレンドです）
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 関連記事 */}
        <RelatedArticles currentSlug="name-fortune-vs-numerology" />

        {/* 関連記事・診断へのリンク */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-bold text-gray-800 dark:text-gray-100">他の記事も読む</CardTitle>
            </CardHeader>
            <CardContent>
              <Link
                href="/blog"
                className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
              >
                ブログ一覧に戻る →
              </Link>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-lg font-bold mb-2">住所運勢も確認してみませんか？</h3>
              <p className="text-sm mb-4">住所の数字にも、姓名判断と同じ81画理論が適用できます</p>
              <Link
                href="/"
                className="inline-block bg-white text-purple-600 px-4 py-2 rounded-lg font-bold hover:bg-gray-100 transition-colors text-sm"
              >
                住所運勢を診断する
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
