import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle, Car, Calculator, Eye } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "【都市伝説】呪いのナンバープレート「4229」の真相を数秘術で解明 | 愛車運勢診断",
  description:
    "ネットで囁かれる恐怖の数字4229。81画理論では32点の悪運、それが数秘術8番のパワーで増幅される恐ろしい真相を専門家が解明します。",
  keywords: "4229,呪い,ナンバープレート,都市伝説,数秘術,81画理論,事故,怪談",
}

export default function CursedNumber4229Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* 警告バナー */}
        <Alert className="border-red-500 bg-red-950/50 text-red-100">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            この記事はエンターテイメント目的の創作です。実際の事故や不幸とは関係ありません。
          </AlertDescription>
        </Alert>

        {/* ヘッダー */}
        <Card className="bg-black/80 border-red-500/30 text-white">
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="destructive">都市伝説</Badge>
              <Badge variant="outline" className="text-red-400 border-red-400">
                2025年6月7日
              </Badge>
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold text-red-400">
              【都市伝説】呪いのナンバープレート「4229」の真相を数秘術で解明
            </CardTitle>
            <p className="text-gray-300 mt-4">
              ネットの掲示板で囁かれる恐怖の数字「4229」。このナンバープレートを持つ車に乗ると事故が多発するという都市伝説の真相を、数秘術の専門家が科学的に分析しました。
            </p>
          </CardHeader>
        </Card>

        {/* 都市伝説の内容 */}
        <Card className="bg-gray-900/80 border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-400">
              <Eye className="h-5 w-5" />
              ネットで語られる恐怖体験
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-red-500">
              <p className="text-gray-300 italic">
                「4229のナンバープレートの車を買ってから、立て続けに不幸が起きている。
                小さな接触事故、突然の故障、そして家族の体調不良...
                偶然とは思えない。この数字には何か呪いがかかっているのではないか？」
              </p>
              <p className="text-gray-500 text-sm mt-2">- 某掲示板より</p>
            </div>

            <div className="bg-gray-800/50 p-4 rounded-lg border-l-4 border-red-500">
              <p className="text-gray-300 italic">
                「友人の車が4229だったんだけど、一緒に乗るたびに何かトラブルが起きる。
                渋滞に巻き込まれる、駐車場が見つからない、急に雨が降り出す...
                最初は偶然だと思っていたけど、あまりにも続くので怖くなった。」
              </p>
              <p className="text-gray-500 text-sm mt-2">- SNSの投稿より</p>
            </div>
          </CardContent>
        </Card>

        {/* 数秘術による分析 */}
        <Card className="bg-gray-900/80 border-gray-700 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-purple-400">
              <Calculator className="h-5 w-5" />
              専門家による科学的分析
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">81画理論による分析</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-red-950/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-400 mb-2">個別数字の運勢</h4>
                  <ul className="space-y-1 text-sm">
                    <li>4: 大凶 (20点) - 災難・不幸・悲運</li>
                    <li>2: 大凶 (20点) - 分裂・絶縁・決別</li>
                    <li>2: 大凶 (20点) - 分裂・絶縁・決別</li>
                    <li>9: 凶 (30点) - 孤立・絶縁・決裂</li>
                  </ul>
                </div>
                <div className="bg-yellow-950/30 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-400 mb-2">組み合わせ数字</h4>
                  <ul className="space-y-1 text-sm">
                    <li>42: 吉 (65点) - 傷心・衝突・精神</li>
                    <li>22: 大凶 (20点) - 無力・不器用・挫折</li>
                    <li>29: 中吉 (80点) - 独特・特殊・癖</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-4 bg-red-900/50 rounded-lg">
                <p className="text-red-300 font-semibold">総合スコア: 32.25点 (中凶・注意運)</p>
                <p className="text-gray-300 text-sm mt-2">個別数字がすべて凶数で、基本的に悪い運勢を示しています。</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-purple-400 mb-3">数秘術による分析</h3>
              <div className="bg-purple-950/30 p-4 rounded-lg">
                <p className="text-purple-300 mb-2">
                  4 + 2 + 2 + 9 = 17 → 1 + 7 = <span className="text-2xl font-bold text-purple-400">8</span>
                </p>
                <p className="text-purple-300">
                  数秘術8番: <span className="font-semibold">パワフルカー</span>
                </p>
                <p className="text-gray-300 text-sm mt-2">力強い・成功志向・物質的豊かさのエネルギーを持つ数字</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 恐ろしい真相 */}
        <Card className="bg-red-950/20 border-red-500/50 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-red-400">
              <AlertTriangle className="h-5 w-5" />
              恐ろしい真相が判明
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-black/50 p-6 rounded-lg border border-red-500/30">
              <h3 className="text-xl font-bold text-red-400 mb-4">悪運の増幅現象</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                4229の真の恐ろしさは、単なる悪運ではありません。81画理論では32点という低い運勢を示しますが、
                問題は数秘術8番の「パワフル」なエネルギーです。
              </p>
              <p className="text-red-300 font-semibold leading-relaxed mb-4">
                通常なら成功や豊かさをもたらす8番のパワーが、基盤となる悪運を増幅してしまうのです。
                小さな不運が大きな災難に、軽微なトラブルが深刻な事故に発展する可能性が高まります。
              </p>
              <p className="text-gray-300 leading-relaxed">
                これが「呪いのナンバープレート」と呼ばれる所以です。
                悪運そのものではなく、悪運を強力に増幅する数字の組み合わせだったのです。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 対処法 */}
        <Card className="bg-green-950/20 border-green-500/50 text-white">
          <CardHeader>
            <CardTitle className="text-green-400">もし4229の車をお持ちの方へ</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-gray-300">
              数秘術の専門家によると、以下の方法で悪運の増幅を抑制できる可能性があります：
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• 車内に浄化作用のあるアイテム（水晶、塩など）を置く</li>
              <li>• 定期的な車の清掃と整備を心がける</li>
              <li>• 安全運転を特に意識し、無理な運転は避ける</li>
              <li>• 可能であれば、ナンバープレートの変更を検討する</li>
            </ul>
          </CardContent>
        </Card>

        {/* 診断リンク */}
        <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0">
          <CardContent className="p-6 text-center">
            <Car className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">あなたの愛車のナンバープレートは大丈夫？</h3>
            <p className="mb-4">81画理論と数秘術で詳しく分析してみましょう</p>
            <Link
              href="/"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
            >
              今すぐ無料診断する
            </Link>
          </CardContent>
        </Card>

        {/* 免責事項 */}
        <Card className="bg-gray-800/50 border-gray-600 text-gray-400">
          <CardContent className="p-4">
            <p className="text-sm">
              ※この記事はエンターテイメント目的の創作です。実際の事故や不幸、特定のナンバープレートとは関係ありません。
              運転時は常に安全運転を心がけ、科学的根拠に基づいた判断を行ってください。
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
