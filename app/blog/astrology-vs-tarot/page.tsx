import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Calendar, Tag, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "占星術とタロット占いの比較 | 住まい運勢チェッカー",
  description: "占星術とタロット占いの違い、それぞれの特徴と適用方法について詳しく解説します。",
  keywords: "占星術,タロット占い,比較,占い方法,運勢",
}

export default function AstrologyVsTarotPage() {
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
          <span>占星術とタロット占いの比較</span>
        </nav>

        {/* 戻るボタン */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          ブログ一覧に戻る
        </Link>

        {/* 記事ヘッダー */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <span className="text-sm text-purple-600 dark:text-purple-400 font-medium bg-purple-100 dark:bg-purple-900 px-2 py-1 rounded">
                  占術比較
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">2024-01-15</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">8分で読めます</span>
              </div>
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              占星術とタロット占いの比較
            </CardTitle>
          </CardHeader>
        </Card>

        {/* 記事本文 */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">占星術とタロット占いの比較</h1>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                占いの世界には数多くの手法がありますが、その中でも特に人気が高いのが占星術とタロット占いです。どちらも古い歴史を持ち、多くの人々に愛され続けていますが、そのアプローチや特徴は大きく異なります。この記事では、両者の違いを詳しく解説し、どちらがあなたに適しているかを判断する手助けをします。
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-100">占星術とは</h2>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                占星術は、天体の位置と動きが人間の性格や運命に影響を与えるという考えに基づいた占術です。生年月日、出生時刻、出生地から作成されるホロスコープ（天体配置図）を用いて、その人の性格、才能、運勢を読み解きます。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">占星術の特徴</h3>

              <ul className="list-disc pl-5 mb-4">
                <li className="mb-1 text-gray-600 dark:text-gray-300">生年月日などの具体的なデータに基づく</li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">長期的な性格や運勢の傾向を知ることができる</li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">12星座、惑星、ハウスなどの体系的な要素</li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">科学的・数学的な計算が必要</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-100">タロット占いとは</h2>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                タロット占いは、78枚のタロットカードを使用した占術です。カードに描かれた象徴的な図像の意味を解釈し、質問者の現在の状況や未来の可能性を読み取ります。カードの組み合わせやスプレッド（配置方法）によって、様々な角度から問題を分析できます。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">タロット占いの特徴</h3>

              <ul className="list-disc pl-5 mb-4">
                <li className="mb-1 text-gray-600 dark:text-gray-300">具体的な質問に対する答えを得られる</li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">現在の状況や近い未来に焦点を当てる</li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">直感的で象徴的な解釈</li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">カードの引き方により結果が変わる</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-100">主な違いの比較</h2>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">1. 情報源の違い</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong className="font-bold text-gray-800 dark:text-gray-100">占星術</strong>
                ：天体の位置という客観的なデータを使用
                <br />
                <strong className="font-bold text-gray-800 dark:text-gray-100">タロット</strong>
                ：カードの引き方という偶然性を重視
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">2. 時間的スパンの違い</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong className="font-bold text-gray-800 dark:text-gray-100">占星術</strong>
                ：生涯にわたる性格や運勢の傾向
                <br />
                <strong className="font-bold text-gray-800 dark:text-gray-100">タロット</strong>
                ：現在から数ヶ月程度の短期的な状況
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">3. 質問の性質</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong className="font-bold text-gray-800 dark:text-gray-100">占星術</strong>
                ：「私はどんな性格？」「今年の運勢は？」など包括的な質問
                <br />
                <strong className="font-bold text-gray-800 dark:text-gray-100">タロット</strong>
                ：「この恋愛はうまくいく？」「転職すべき？」など具体的な質問
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-100">どちらを選ぶべきか</h2>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">占星術がおすすめの人</h3>

              <ul className="list-disc pl-5 mb-4">
                <li className="mb-1 text-gray-600 dark:text-gray-300">自分の性格や才能を深く理解したい</li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">長期的な人生の方向性を知りたい</li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">論理的で体系的なアプローチを好む</li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">継続的に自己分析を行いたい</li>
              </ul>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">
                タロット占いがおすすめの人
              </h3>

              <ul className="list-disc pl-5 mb-4">
                <li className="mb-1 text-gray-600 dark:text-gray-300">具体的な悩みや問題がある</li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">今すぐ答えが欲しい</li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">直感的で象徴的な表現を理解できる</li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">状況に応じて柔軟に占いたい</li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-100">両方を組み合わせる方法</h2>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                実際には、占星術とタロット占いは相互補完的な関係にあります。占星術で大まかな性格や運勢の傾向を把握し、タロット占いで具体的な問題に対するアドバイスを得るという使い分けが効果的です。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">効果的な組み合わせ例</h3>

              <ul className="list-disc pl-5 mb-4">
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  占星術で今月の運勢を確認し、タロットで具体的な行動指針を得る
                </li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  占星術で相性を調べ、タロットで関係改善のアドバイスを求める
                </li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  占星術で適職を探り、タロットで転職のタイミングを見る
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-100">まとめ</h2>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                占星術とタロット占いは、それぞれ異なる特徴と利点を持つ占術です。占星術は長期的で包括的な視点を、タロット占いは短期的で具体的な視点を提供します。どちらが優れているということではなく、あなたの目的や好みに応じて選択することが大切です。
              </p>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                まずは両方を試してみて、自分にとってより有用で理解しやすい方法を見つけることをおすすめします。占いは人生の指針を得るためのツールであり、最終的な判断は常にあなた自身が行うものだということを忘れずに活用してください。
              </p>
            </div>
          </CardContent>
        </Card>

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
