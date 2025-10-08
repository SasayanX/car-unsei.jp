import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, Search, CheckCircle, ExternalLink } from "lucide-react"

export const metadata = {
  title: "愛車運勢・性格診断 — ナンバープレートの数字で運気と性格を診断！",
  description:
    "ナンバープレートの数字だけで愛車の運気と性格を診断する新サービス。個人情報不要で安心、エンタメ感覚で楽しめる愛車運勢・性格診断をご紹介します。",
  keywords: "愛車運勢診断,愛車性格診断,ナンバープレート,運気,車,エンターテインメント,数秘術",
}

export default function ServiceIntroductionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* パンくずリスト */}
        <nav className="text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">
            ホーム
          </Link>
          <span className="mx-2">›</span>
          <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400">
            ブログ
          </Link>
          <span className="mx-2">›</span>
          <span>サービス紹介</span>
        </nav>

        {/* 戻るボタン */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          ブログ一覧に戻る
        </Link>

        {/* メイン記事 */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded">
                サービス紹介
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">2025年4月15日</span>
              <span className="text-sm text-gray-500 dark:text-gray-400">5分で読めます</span>
            </div>
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              「愛車運勢・性格診断」— ナンバープレートの数字で運気と性格を診断！
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none dark:prose-invert">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                愛車のナンバープレートを見て、「この数字の組み合わせは運気が良いのかな？」「どんな性格の車なんだろう？」と気になったことはありませんか？
                そんなあなたにぴったりの新サービスが
                <strong className="text-blue-700 dark:text-blue-300">「愛車運勢・性格診断」</strong>（
                <a
                  href="https://www.car-unsei.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                >
                  https://www.car-unsei.jp/
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
                ）です。
              </p>

              <div className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">
                  ナンバープレートに込められたパワー
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  「愛車運勢・性格診断」は、姓名判断や数秘術で使われる"数字のパワー"をナンバープレートに応用した、まったく新しい愛車診断サービスです。
                  生年月日や氏名などの入力は不要。ナンバープレートの数字だけを入力するだけで、あなたの愛車の運勢と性格を手軽にチェックできます。
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2">
                  <Search className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  サービスの特徴
                </h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-800 dark:text-gray-100">ナンバープレートの数字だけでOK！</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        地名や車種名、生年月日といった個人情報は一切不要。
                        プライバシーを守りながら、誰でも気軽に診断できます。
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-800 dark:text-gray-100">運勢と性格の両方がわかる！</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        愛車の運勢だけでなく、数字から導き出される「車の性格」も診断。
                        あなたの愛車がどんな個性を持っているのかがわかります。
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-800 dark:text-gray-100">エンタメ感覚で楽しめる！</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        診断結果はエンターテインメントとして楽しめる内容。
                        友達や家族とシェアして盛り上がるのにぴったりです。
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-bold text-gray-800 dark:text-gray-100">今の車も、これからの車もチェック！</p>
                      <p className="text-gray-700 dark:text-gray-300">
                        今乗っている車も、これから購入予定の車も、ナンバーを入力するだけで運気と性格を診断。
                        車選びの新しい視点として活用できます。
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">こんな人におすすめ！</h2>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">
                      ✓
                    </span>
                    愛車のナンバーが持つ意味が知りたい
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">
                      ✓
                    </span>
                    新車のナンバー選びの参考にしたい
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">
                      ✓
                    </span>
                    友人や家族と一緒に盛り上がりたい
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">
                      ✓
                    </span>
                    車と自分の相性を知りたい
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">
                      ✓
                    </span>
                    数字や数秘術に興味がある
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">使い方はとっても簡単</h2>
                <ol className="space-y-4">
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </span>
                    <p className="text-gray-700 dark:text-gray-300">サイトにアクセス</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </span>
                    <p className="text-gray-700 dark:text-gray-300">ナンバープレートの数字を入力</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </span>
                    <p className="text-gray-700 dark:text-gray-300">運勢と性格の診断結果をチェック！</p>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </span>
                    <p className="text-gray-700 dark:text-gray-300">結果を家族や友人とシェアして楽しもう</p>
                  </li>
                </ol>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">
                  運気アップのヒントも満載！
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  診断結果には、愛車の運気を上げるための簡単なアドバイスや注意点も掲載。
                  「車内をきれいに保つ」「定期的なメンテナンス」など、今日からできる開運アクションもわかります。
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">まとめ</h2>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-gray-500 text-white rounded-full flex items-center justify-center text-xs">
                      •
                    </span>
                    「愛車運勢・性格診断」は数秘術の原理をナンバープレートに応用した新サービス
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-gray-500 text-white rounded-full flex items-center justify-center text-xs">
                      •
                    </span>
                    ナンバープレートの数字だけで運勢と性格を診断、個人情報不要で安心
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-gray-500 text-white rounded-full flex items-center justify-center text-xs">
                      •
                    </span>
                    今の車も新車も気軽にチェックできる
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-gray-500 text-white rounded-full flex items-center justify-center text-xs">
                      •
                    </span>
                    家族や友達と盛り上がれるエンタメ体験
                  </li>
                </ul>
              </div>

              <div className="text-center space-y-4">
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  愛車との関係をもっと深く、運気アップのヒントも手に入れたいなら、
                  ぜひ「愛車運勢・性格診断」を試してみてください。
                  あなたの車が持つパワーと個性を知れば、きっと友達にも教えたくなるはずです！
                </p>
                <p className="font-bold text-blue-700 dark:text-blue-300">（今すぐ「愛車運勢診断」で検索！）</p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg text-sm text-yellow-700 dark:text-yellow-300">
                ※本サービスはエンターテインメント目的です。診断結果は参考としてお楽しみください。
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg text-center">
                <h3 className="text-xl font-bold text-blue-800 dark:text-blue-200 mb-2">
                  あなたも愛車運勢・性格診断を体験してみませんか？
                </h3>
                <p className="text-blue-700 dark:text-blue-300 mb-4">ナンバープレートの数字だけで簡単診断！</p>
                <Link
                  href="/"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                >
                  今すぐ診断する
                </Link>
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
                    href="/blog/does-car-number-fortune-work"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    愛車運勢診断って当たるの？
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
                    href="/blog/how-car-number-diagnosis-works"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    3分でわかる愛車運勢診断の仕組み
                  </Link>
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  愛車運勢診断がどのように行われるのか、基本的な仕組みを簡単に解説します。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
