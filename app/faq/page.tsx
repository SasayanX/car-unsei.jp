import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata = {
  title: "よくある質問 | ナンバープレート診断の疑問解決 | 愛車運勢チェッカー",
  description:
    "ナンバープレート診断に関するよくある質問と回答。車のナンバー選び、診断精度、無料の理由など、愛車運勢チェッカーの疑問を解決します。",
  keywords: "ナンバープレート診断,FAQ,よくある質問,愛車運勢,占い,姓名判断,車のナンバー,診断精度,無料診断",
}

export default function FAQPage() {
  const faqs = [
    {
      question: "ナンバープレート診断は本当に無料ですか？",
      answer: "はい、完全無料でご利用いただけます。登録や課金は一切不要です。何度でも診断していただけます。",
    },
    {
      question: "車のナンバープレートの地名部分やひらがな部分も入力する必要がありますか？",
      answer:
        "いいえ、車のナンバープレートの地名部分やひらがな部分は入力しないでください。診断に使用するのはナンバープレートの数字部分のみです。",
    },
    {
      question: "全角数字と半角数字、どちらで入力すればよいですか？",
      answer:
        "どちらでも大丈夫です。システムが自動的に認識して正しく診断します。「１２３」でも「123」でも同じ結果になります。",
    },
    {
      question: "診断結果の精度はどの程度ですか？",
      answer:
        "プロの姓名判断鑑定師が姓名判断の81画理論をナンバープレートに応用して開発したシステムです。多くの方から「当たっている」とのお声をいただいています。",
    },
    {
      question: "車購入前のナンバー診断はできますか？",
      answer: "はい、可能です。購入予定の車のナンバーを入力して診断することで、新車の運勢を事前に確認できます。",
    },
    {
      question: "同じナンバーの車を使う家族は同じ運勢になりますか？",
      answer:
        "ナンバープレートの基本的な運勢エネルギーは同じですが、個人の生年月日や姓名によって影響の受け方は異なります。",
    },
    {
      question: "低い点数が出た場合、どうすればよいですか？",
      answer:
        "車内の浄化、カーアクセサリーの活用、車の清掃などで運気を改善できます。また、車の買い替えを検討される場合は、事前に新しいナンバーの診断をおすすめします。",
    },
    {
      question: "診断結果をSNSでシェアできますか？",
      answer: "はい、TwitterやInstagramでのシェア機能をご用意しています。友達と結果を比較して楽しんでいただけます。",
    },
    {
      question: "海外のナンバープレートでも診断できますか？",
      answer: "申し訳ございませんが、現在は日本のナンバープレート表記にのみ対応しています。",
    },
    {
      question: "診断履歴は保存されますか？",
      answer: "ブラウザのローカルストレージに保存されます。履歴機能から過去の診断結果を確認できます。",
    },
    {
      question: "ナンバープレート診断の理論的根拠は何ですか？",
      answer:
        "姓名判断で使用される81画理論をナンバープレートの数字に応用しています。数字の持つエネルギーと運勢の関係性を分析します。",
    },
    {
      question: "新車購入の場合、ナンバーが決まる前に診断できますか？",
      answer:
        "ナンバーが正式に決定してからの診断をおすすめします。仮のナンバーでは正確な診断ができない場合があります。",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* ヘッダー */}
        <Card className="text-center bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
              よくある質問
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300">ナンバープレート診断に関するよくある質問と回答</p>
          </CardHeader>
        </Card>

        {/* パンくずリスト */}
        <nav className="text-sm text-gray-600 dark:text-gray-400">
          <Link href="/" className="hover:text-purple-600 dark:hover:text-purple-400">
            ホーム
          </Link>
          <span className="mx-2">›</span>
          <span>よくある質問</span>
        </nav>

        {/* FAQ一覧 */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-800 dark:text-gray-100 flex items-start gap-3">
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                    Q
                  </span>
                  {faq.question}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-3">
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">
                    A
                  </span>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* SEO強化セクション */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              ナンバープレート診断について
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                ナンバープレート診断の特徴
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                <li>• プロの姓名判断鑑定師監修による本格診断</li>
                <li>• 81画理論に基づく科学的アプローチ</li>
                <li>• 完全無料・登録不要で利用可能</li>
                <li>• 車購入前のナンバー事前チェックに最適</li>
                <li>• SNSシェア機能で友達と結果を比較</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* 診断へのリンク */}
        <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">他にご質問がございましたら</h3>
            <p className="mb-4">まずは実際に診断をお試しください</p>
            <Link
              href="/"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              ナンバープレート診断を試す
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
