import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { RelatedArticles } from "@/components/related-articles"

export const metadata = {
  title: "土地診断の決定版：購入前に知っておくべき運気の見極め方 | 住まい運勢診断",
  description:
    "土地購入の前に必ず確認したい運勢診断法を徹底解説。地形・方角・周辺環境から土地が持つ潜在的なエネルギーを分析し、あなたに最適な土地選びをサポートします。",
  keywords: "土地診断,地相,土地運勢,土地選び,不動産診断,風水,地形診断,土地購入",
}

export default function LandDiagnosisCompletePage() {
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
          <span>土地診断の決定版</span>
        </nav>

        {/* 記事ヘッダー */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                土地診断
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">2025年5月30日</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">10分で読めます</span>
            </div>
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              土地診断の決定版：購入前に知っておくべき運気の見極め方
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300 text-lg mt-4">
              土地購入の前に必ず確認したい運勢診断法を徹底解説。地形・方角・周辺環境から土地が持つ潜在的なエネルギーを分析し、あなたに最適な土地選びをサポートします。
            </p>
          </CardHeader>
        </Card>

        {/* 記事本文 */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">土地診断とは？</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                土地診断は、古来より伝わる地相学と現代の81画理論を組み合わせた診断手法です。土地の形状、方角、周辺環境、そして住所の数字を総合的に分析し、その土地が持つ運勢エネルギーを読み解きます。
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                土地は建物の基盤となる重要な要素であり、住む人の運勢に長期的な影響を与えるため、購入前の診断は非常に重要です。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">土地診断の重要な要素</h2>
              <div className="space-y-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">1. 地形と形状</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    土地の形状（正方形、長方形、三角形など）や地形（平地、傾斜地、高台など）は、エネルギーの流れに大きく影響します。
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">2. 方角と向き</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    土地の向きや道路との関係は重要な診断要素です。南向き、東向きなど、それぞれの方角が持つ特性を理解する必要があります。
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">3. 周辺環境</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    近隣の建物、道路、川、山などの周辺環境も土地の運勢に影響を与えます。特に水の流れや道路の配置は重要です。
                  </p>
                </div>
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <h3 className="font-bold text-orange-800 dark:text-orange-300 mb-2">4. 住所の数字</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    土地の住所に含まれる数字を81画理論で分析し、その土地が持つ数的エネルギーを読み解きます。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">良い土地の条件</h2>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">理想的な地形</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                <li>正方形または長方形の整った形状</li>
                <li>適度な高さがあり、水はけが良い</li>
                <li>南または東に開けている</li>
                <li>背後に山や高い建物がある（バックアップ）</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">避けるべき土地の特徴</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>三角形や不整形な土地</li>
                <li>低湿地や水はけの悪い土地</li>
                <li>T字路や行き止まりの突き当たり</li>
                <li>墓地や病院の近く</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">土地診断の実践手順</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                <li>土地の基本情報（住所、面積、形状）を確認</li>
                <li>現地調査で地形と周辺環境をチェック</li>
                <li>方角と道路との関係を測定</li>
                <li>住所の数字を81画理論で分析</li>
                <li>総合的な運勢評価を算出</li>
                <li>改善案や活用法をアドバイス</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">用途別土地診断</h2>

              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">住宅用地</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    家族の健康と幸せを重視し、子育て環境や老後の安心感を考慮した診断を行います。
                  </p>
                </div>
                <div className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">商業用地</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    ビジネスの成功と繁栄を目的とし、集客力や収益性を重視した診断を実施します。
                  </p>
                </div>
                <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 p-4 rounded-lg">
                  <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-2">投資用地</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    将来的な価値上昇と安定した収益を見込める土地かどうかを運勢的観点から分析します。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">土地診断の活用事例</h2>
              <div className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 p-6 rounded-lg">
                <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-3">成功事例：理想の住宅地選び</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Aさんは土地診断を活用して、家族にとって最適な住宅地を見つけることができました。南向きの整形地で、住所の数字も吉数という理想的な条件でした。
                </p>
                <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-3">注意事例：避けるべき土地の特徴</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Bさんは価格の安さに惹かれて三角形の土地を検討していましたが、土地診断により運勢的に不適切であることが判明し、別の土地を選択しました。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">まとめ</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                土地診断は、一生に一度の大きな買い物である土地選びにおいて、運勢的な観点から重要な判断材料を提供します。価格や立地条件だけでなく、土地が持つエネルギーも考慮することで、より満足度の高い土地選びが可能になります。
              </p>
            </section>
          </CardContent>
        </Card>

        {/* 診断へのリンク */}
        <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">あなたの土地の運勢を診断してみませんか？</h3>
            <p className="mb-4">住所から土地の運勢を無料で診断</p>
            <Link
              href="/"
              className="inline-block bg-white text-green-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              今すぐ診断する
            </Link>
          </CardContent>
        </Card>

        {/* 関連記事 */}
        <RelatedArticles currentSlug="land-diagnosis-complete-guide" />
      </div>
    </div>
  )
}
