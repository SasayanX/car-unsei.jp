import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Calendar, Tag, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "タロット占いの起源：マルセイユ版タロットの謎 | 住まい運勢チェッカー",
  description: "タロットカードの歴史とマルセイユ版タロットの特徴について詳しく解説します。",
  keywords: "タロット占い,マルセイユ版,歴史,起源,占い",
}

export default function TarotOriginsPage() {
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
          <span>タロット占いの起源：マルセイユ版タロットの謎</span>
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
                  歴史・理論
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">2024-02-25</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">10分で読めます</span>
              </div>
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              タロット占いの起源：マルセイユ版タロットの謎
            </CardTitle>
          </CardHeader>
        </Card>

        {/* 記事本文 */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                タロット占いの起源：マルセイユ版タロットの謎
              </h1>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                タロットカードは、占いだけでなく、心理学や芸術の分野でも活用されています。その起源は中世ヨーロッパに遡り、特にマルセイユ版タロットは、現代のタロットカードの原型として重要な役割を果たしました。この記事では、タロットカードの起源と、マルセイユ版タロットの謎に迫ります。
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-100">タロットカードの誕生</h2>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                タロットカードの正確な起源については諸説ありますが、最も古い記録は15世紀のイタリアに遡ります。当初は「トリオンフィ」や「タロッキ」と呼ばれるカードゲームとして貴族の間で楽しまれていました。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">初期のタロットデッキ</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                初期のタロットデッキとして知られているのは、以下のものです：
              </p>

              <ul className="list-disc pl-5 mb-4">
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  <strong className="font-bold text-gray-800 dark:text-gray-100">
                    ヴィスコンティ・スフォルツァ・タロット
                  </strong>
                  ：1450年頃、イタリアのミラノで作られた豪華な手描きのデッキ
                </li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  <strong className="font-bold text-gray-800 dark:text-gray-100">マンテーニャ・タロット</strong>
                  ：1470年頃、イタリアの芸術家アンドレア・マンテーニャに関連するとされるデッキ
                </li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  <strong className="font-bold text-gray-800 dark:text-gray-100">ソラ・ブスカ・タロット</strong>
                  ：16世紀、北イタリアで作られたとされるデッキ
                </li>
              </ul>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                これらの初期のデッキは、現代のタロットとは異なる構造を持っていましたが、徐々に78枚構成の標準的なタロットの形に進化していきました。
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-100">
                マルセイユ版タロットの登場
              </h2>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                17世紀から18世紀にかけて、フランスのマルセイユで生産されたタロットデッキが、現代のタロットカードの原型となりました。マルセイユ版タロットの特徴は以下の通りです：
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">構成と特徴</h3>

              <ul className="list-disc pl-5 mb-4">
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  <strong className="font-bold text-gray-800 dark:text-gray-100">78枚構成</strong>
                  ：22枚の大アルカナと56枚の小アルカナからなる
                </li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  <strong className="font-bold text-gray-800 dark:text-gray-100">木版画による製作</strong>
                  ：手作業による色付けが特徴
                </li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  <strong className="font-bold text-gray-800 dark:text-gray-100">象徴的な図像</strong>
                  ：中世の象徴体系を反映した図像
                </li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  <strong className="font-bold text-gray-800 dark:text-gray-100">独特の色彩</strong>
                  ：原色を中心とした鮮やかな配色
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">主要な製作者</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                マルセイユ版タロットの主要な製作者には以下のような人物がいます：
              </p>

              <ul className="list-disc pl-5 mb-4">
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  <strong className="font-bold text-gray-800 dark:text-gray-100">ジャン・ノブレ</strong>：1650年頃に活動
                </li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  <strong className="font-bold text-gray-800 dark:text-gray-100">ニコラ・コンヴェール</strong>
                  ：1760年頃に活動
                </li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  <strong className="font-bold text-gray-800 dark:text-gray-100">ジャン＝バティスト・ベノワ</strong>
                  ：1780年頃に活動
                </li>
              </ul>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                これらの製作者によって作られたデッキは、デザインの細部に違いはあるものの、基本的な図像と構造は共通しています。
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-100">
                占術としてのタロットの発展
              </h2>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                タロットカードが占いの道具として使われるようになったのは、18世紀後半からです。この変化には、以下の人物が大きく貢献しました：
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">
                アントワーヌ・クール・ド・ジェブラン
              </h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                1781年、フランスの学者アントワーヌ・クール・ド・ジェブランは、タロットカードがエジプトの秘教的知識を伝えるものだという理論を発表しました。彼の著書「原始世界」では、タロットカードがエジプトの神官によって作られ、秘密の知識を保存するために設計されたと主張しています。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">
                ジャン＝バティスト・アリエット（エッテイラ）
              </h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                ジェブランの理論に影響を受けたフランスの占い師エッテイラは、タロットカードを占いの道具として体系化しました。1785年、彼は最初のタロット占い専用のデッキを作成し、カードの解釈方法を詳細に記した本を出版しました。
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-100">
                マルセイユ版タロットの謎
              </h2>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                マルセイユ版タロットには、いくつかの謎や興味深い特徴があります：
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">1. 図像の起源</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                マルセイユ版タロットの図像の多くは、中世の象徴体系や錬金術、カバラなどの神秘思想と関連していると考えられていますが、その正確な起源や意味については、今でも議論が続いています。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">2. 隠されたメッセージ</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                一部の研究者は、タロットカードには秘密のメッセージや教えが隠されていると主張しています。例えば、22枚の大アルカナは、人間の精神的な成長の過程を表しているという解釈があります。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">3. 製作技術の謎</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                マルセイユ版タロットの製作技術、特に色付けの方法や使用された顔料については、完全には解明されていません。当時の職人の技術や知識が、どのように伝承されていたのかも興味深い問題です。
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-100">
                現代におけるマルセイユ版タロット
              </h2>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                現代では、マルセイユ版タロットは、タロット占いの原点として尊重されています。多くのタロット研究家や占い師が、マルセイユ版タロットの伝統的な図像と解釈を重視しています。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">復刻版と現代的解釈</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                近年、以下のようなマルセイユ版タロットの復刻版や現代的解釈が出版されています：
              </p>

              <ul className="list-disc pl-5 mb-4">
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  <strong className="font-bold text-gray-800 dark:text-gray-100">CBD版マルセイユ・タロット</strong>
                  ：ジャン＝クロード・フリッチェによる忠実な復刻版
                </li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  <strong className="font-bold text-gray-800 dark:text-gray-100">カミーユ・フラマリオン版</strong>
                  ：19世紀の復刻版を元にした現代版
                </li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  <strong className="font-bold text-gray-800 dark:text-gray-100">
                    ジョドロフスキー・カモワン・タロット
                  </strong>
                  ：アレハンドロ・ジョドロフスキーとフィリップ・カモワンによる再解釈版
                </li>
              </ul>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                これらの復刻版は、伝統的なマルセイユ版タロットの魅力を現代に伝えるとともに、新たな解釈や視点を提供しています。
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-100">まとめ</h2>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                マルセイユ版タロットは、タロットカードの歴史において重要な位置を占めています。ゲームから占いの道具へと変化する過程で、マルセイユ版タロットは標準的なデザインとして確立され、現代のタロットカードの原型となりました。
              </p>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                その神秘的な図像と象徴性は、何世紀にもわたって人々を魅了し続けています。タロット占いに興味がある方は、ぜひマルセイユ版タロットの歴史と特徴を理解することから始めてみてください。伝統的なタロットの知恵が、あなたの人生に新たな洞察をもたらすかもしれません。
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
