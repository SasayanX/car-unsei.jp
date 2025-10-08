import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { RelatedArticles } from "@/components/related-articles"

export const metadata = {
  title: "建物診断完全ガイド：物件選びで失敗しないための運勢チェック法 | 住まい運勢診断",
  description:
    "マンション・一戸建て・オフィスビルなど、あらゆる建物の運勢を診断する方法を解説。住所だけでなく、建物自体が持つエネルギーを読み解き、最適な物件選びをサポートします。",
  keywords: "建物診断,マンション診断,一戸建て診断,物件選び,建物運勢,不動産診断,住まい選び",
}

export default function BuildingDiagnosisGuidePage() {
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
          <span>建物診断完全ガイド</span>
        </nav>

        {/* 記事ヘッダー */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 px-3 py-1 rounded-full text-sm font-medium">
                建物診断
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">2025年5月28日</span>
              <span className="text-gray-500 dark:text-gray-400 text-sm">9分で読めます</span>
            </div>
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              建物診断完全ガイド：物件選びで失敗しないための運勢チェック法
            </CardTitle>
            <p className="text-gray-600 dark:text-gray-300 text-lg mt-4">
              マンション・一戸建て・オフィスビルなど、あらゆる建物の運勢を診断する方法を解説。住所だけでなく、建物自体が持つエネルギーを読み解き、最適な物件選びをサポートします。
            </p>
          </CardHeader>
        </Card>

        {/* 記事本文 */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-8 space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">建物診断とは？</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                建物診断は、住所診断をさらに発展させた診断手法です。住所の数字だけでなく、建物の構造、階数、築年数、方角などの要素を総合的に分析し、その建物が持つ運勢エネルギーを読み解きます。
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                特に不動産投資や新居選びにおいて、建物自体の持つ潜在的な力を知ることで、より良い選択ができるようになります。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">建物診断の基本要素</h2>
              <div className="space-y-4">
                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h3 className="font-bold text-purple-800 dark:text-purple-300 mb-2">1. 建物の階数</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    建物の階数は重要な診断要素です。3階建て、5階建て、10階建てなど、それぞれの数字が持つ意味を81画理論で分析します。
                  </p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 dark:text-blue-300 mb-2">2. 建物の向き・方角</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    建物の正面が向いている方角は、エネルギーの流れに大きく影響します。東向き、南向きなど、それぞれの特性を理解することが重要です。
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h3 className="font-bold text-green-800 dark:text-green-300 mb-2">3. 築年数と建築年</h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    建物が建てられた年や築年数も運勢に影響します。特に建築年の数字の組み合わせは重要な診断ポイントです。
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">建物タイプ別診断法</h2>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">マンション・アパート診断</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                集合住宅では、建物全体の運勢と個別の部屋の運勢の両方を考慮します。エントランスの向き、エレベーターの位置、共用部分の配置なども重要な要素です。
              </p>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">一戸建て診断</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                一戸建ての場合は、建物の形状、玄関の位置、庭の配置なども診断に含まれます。特に玄関の向きは家全体の運気を左右する重要な要素です。
              </p>

              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">オフィスビル診断</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                商業用建物では、ビジネス運に特化した診断を行います。エントランスの豪華さ、フロア構成、テナント配置なども考慮に入れます。
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">実践的な建物診断の手順</h2>
              <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                <li>建物の基本情報（住所、階数、築年数）を収集</li>
                <li>建物の向きと周辺環境を確認</li>
                <li>81画理論に基づいて各要素の数字を分析</li>
                <li>総合的な運勢スコアを算出</li>
                <li>改善点や注意点をアドバイス</li>
              </ol>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">建物診断の活用例</h2>
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 p-6 rounded-lg">
                <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-3">不動産投資での活用</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  投資物件を選ぶ際に、建物診断を活用することで、将来的な収益性や入居率の予測に役立てることができます。
                </p>
                <h3 className="font-bold text-gray-800 dark:text-gray-100 mb-3">新居選びでの活用</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  家族の幸せや健康を願って新居を選ぶ際に、建物診断を参考にすることで、より良い住環境を見つけることができます。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">まとめ</h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                建物診断は、住所診断と組み合わせることで、より精密で実用的な運勢分析が可能になります。物件選びの新しい視点として、ぜひ活用してみてください。
              </p>
            </section>
          </CardContent>
        </Card>

        {/* 診断へのリンク */}
        <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">あなたの建物の運勢を診断してみませんか？</h3>
            <p className="mb-4">住所から建物の運勢を無料で診断</p>
            <Link
              href="/"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              今すぐ診断する
            </Link>
          </CardContent>
        </Card>

        {/* 関連記事 */}
        <RelatedArticles currentSlug="building-diagnosis-guide" />
      </div>
    </div>
  )
}
