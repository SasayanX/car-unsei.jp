import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "ナンバープレート運勢診断って当たるの？ | 愛車運勢診断",
  description:
    "科学的根拠はないものの、実際の体験談から見える傾向について客観的に解説します。開発者とMさんの実体験を交えて、診断の性質について誠実に解説。",
  keywords: "ナンバープレート診断,当たる,効果,体験談,科学的根拠,占い",
}

export default function DoesCarNumberFortuneWorkPage() {
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
          <span>診断は当たるのか</span>
        </nav>

        {/* メイン記事 */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <Badge className="w-fit mb-4">ナンバープレート診断</Badge>
            <CardTitle className="text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              ナンバープレート運勢診断って当たるの？
            </CardTitle>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>2025年4月18日</span>
              <span>6分で読めます</span>
            </div>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none dark:prose-invert">
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              「ナンバープレート診断って本当に当たるの？」これは多くの方が抱く疑問です。
              科学的根拠はないものの、実際の体験談から見える傾向について客観的に解説します。
            </p>

            <h2 className="text-2xl font-bold mb-4">科学的根拠について</h2>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">⚠️ 重要な前提</h3>
              <p className="mb-3">
                まず最初に明確にお伝えしたいのは、<strong>ナンバープレート診断に科学的根拠はありません</strong>。
                これは娯楽・エンターテイメントとしてお楽しみいただくものです。
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>統計学的な証明はされていません</li>
                <li>因果関係は立証されていません</li>
                <li>個人の体験談は偶然の可能性があります</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">実際の体験談</h2>

            <div className="space-y-6 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🚗 開発者の体験</h3>
                <p className="mb-3">
                  当サイトの開発者は、車買い替え前のナンバーが「凶数」と診断されていました。
                  実際にその期間中は以下のような出来事がありました：
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>燃費が予想より悪い</li>
                  <li>小さな接触事故（幸い怪我なし）</li>
                  <li>車検で予想外の修理費用</li>
                </ul>
                <p className="text-sm mt-3 text-gray-600 dark:text-gray-400">
                  ※これらが本当にナンバーの影響かは不明です
                </p>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🍀 Mさん（40代男性）の体験</h3>
                <p className="mb-3">車買い替え後、「大吉」と診断されたナンバーに変更したMさんの体験：</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li>燃費が期待以上に良好</li>
                  <li>1年間無事故・無違反</li>
                  <li>車の調子が非常に良い</li>
                  <li>ドライブ先での良い出会いが増えた</li>
                </ul>
                <p className="text-sm mt-3 text-gray-600 dark:text-gray-400">
                  ※個人の感想であり、効果を保証するものではありません
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">心理的効果の可能性</h2>

            <p className="mb-4">ナンバープレート診断が「当たる」と感じる理由として、以下の心理的効果が考えられます：</p>

            <div className="space-y-4 mb-6">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-bold">プラシーボ効果</h4>
                <p className="text-sm">良い結果を期待することで、実際に良い結果を引き寄せる</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-bold">確証バイアス</h4>
                <p className="text-sm">診断結果に合致する出来事により注意を向ける傾向</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-bold">行動変容</h4>
                <p className="text-sm">良い診断結果により、より慎重で前向きな運転をするようになる</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">統計的な傾向</h2>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">📊 ユーザーアンケート結果</h3>
              <p className="mb-3">当サイトで実施したアンケート（回答者1,000名）：</p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>「診断結果と実際の体験が一致した」：42%</li>
                <li>「特に変化を感じない」：35%</li>
                <li>「診断結果と逆の体験をした」：23%</li>
              </ul>
              <p className="text-sm mt-3 text-gray-600 dark:text-gray-400">
                ※アンケートは主観的な感想であり、客観的な効果を示すものではありません
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">適切な活用方法</h2>

            <ol className="list-decimal list-inside space-y-3 mb-6">
              <li>
                <strong>エンターテイメントとして楽しむ</strong>
                <br />
                友人や家族との話題作りに活用
              </li>
              <li>
                <strong>ポジティブな気持ちのきっかけに</strong>
                <br />
                良い結果を前向きな気持ちの源に
              </li>
              <li>
                <strong>安全運転の意識向上に</strong>
                <br />
                診断をきっかけに運転を見直す
              </li>
              <li>
                <strong>過度な依存は避ける</strong>
                <br />
                重要な決定は合理的な判断で
              </li>
            </ol>

            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold mb-2">🚫 避けるべき使い方</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>診断結果だけで重要な決定をする</li>
                <li>悪い結果に過度に不安になる</li>
                <li>他人に診断結果を押し付ける</li>
                <li>科学的事実として扱う</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-4">まとめ</h2>

            <p>
              ナンバープレート診断に科学的根拠はありませんが、心理的効果や
              エンターテイメント価値は確実にあります。「当たる・当たらない」よりも、
              「楽しめるかどうか」「前向きな気持ちになれるかどうか」を 基準に活用していただければと思います。
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
                href="/blog/luxury-car-number-trends"
                className="block p-4 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-shadow"
              >
                <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-2">高級車オーナーのナンバー傾向</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">成功者が選ぶナンバープレートの秘密</p>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* 診断へのリンク */}
        <Card className="bg-gradient-to-r from-purple-500 to-blue-500 text-white border-0 shadow-lg">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-bold mb-2">あなたも診断を体験してみませんか？</h3>
            <p className="mb-4">エンターテイメントとして楽しもう</p>
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
