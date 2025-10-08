import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Calendar, Tag, ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "スポーツ選手の運勢：占星術から見る成功の鍵 | 住まい運勢チェッカー",
  description: "占星術の視点からスポーツ選手の運勢を分析し、成功の鍵を探ります。",
  keywords: "スポーツ,占星術,運勢,アスリート,成功",
}

export default function SportsAstrologyPage() {
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
          <span>スポーツ選手の運勢：占星術から見る成功の鍵</span>
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
                  スポーツ・エンターテイメント
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">2024-02-20</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <Clock className="w-4 h-4" />
                <span className="text-sm">15分で読めます</span>
              </div>
            </div>
            <CardTitle className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
              スポーツ選手の運勢：占星術から見る成功の鍵
            </CardTitle>
          </CardHeader>
        </Card>

        {/* 記事本文 */}
        <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardContent className="p-6 md:p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h1 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
                スポーツ選手の運勢：占星術から見る成功の鍵
              </h1>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                スポーツの世界では、才能、努力、そして運が成功を左右します。多くの一流アスリートが占星術やその他の占術を活用していることをご存知でしょうか？この記事では、占星術の視点からスポーツ選手の運勢を分析し、成功の鍵を探ります。
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-100">
                占星術とスポーツパフォーマンスの関係
              </h2>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                占星術では、生まれた時の天体の配置がその人の性格、才能、運命に影響を与えると考えられています。スポーツ選手の場合、以下の要素が特に重要です：
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">火星の影響</h3>

              <ul className="list-disc pl-5 mb-4">
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  <strong className="font-bold text-gray-800 dark:text-gray-100">競争心と闘争本能</strong>
                  ：火星が強い選手は、勝負への執着心が強く、プレッシャーに強い傾向があります
                </li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  <strong className="font-bold text-gray-800 dark:text-gray-100">瞬発力と爆発力</strong>
                  ：火星の配置により、短距離走やパワー系競技での才能が決まります
                </li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  <strong className="font-bold text-gray-800 dark:text-gray-100">怪我のリスク</strong>
                  ：火星が凶角にある場合、怪我をしやすい傾向があります
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">太陽の配置</h3>

              <ul className="list-disc pl-5 mb-4">
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  <strong className="font-bold text-gray-800 dark:text-gray-100">リーダーシップ</strong>
                  ：太陽が強い選手は、チームの中心となりやすく、キャプテンシーを発揮します
                </li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  <strong className="font-bold text-gray-800 dark:text-gray-100">持久力</strong>
                  ：太陽の状態により、長期間にわたる活躍が可能かどうかが分かります
                </li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  <strong className="font-bold text-gray-800 dark:text-gray-100">注目度</strong>
                  ：太陽が良い配置にある選手は、メディアからの注目を集めやすくなります
                </li>
              </ul>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-100">星座別スポーツ適性</h2>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">牡羊座（3/21-4/19）</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong className="font-bold text-gray-800 dark:text-gray-100">適性競技</strong>
                ：短距離走、ボクシング、格闘技
                <br />
                <strong className="font-bold text-gray-800 dark:text-gray-100">特徴</strong>
                ：瞬発力に優れ、勝負への執着心が強い。ただし、持久力に課題がある場合も。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">牡牛座（4/20-5/20）</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong className="font-bold text-gray-800 dark:text-gray-100">適性競技</strong>：重量挙げ、相撲、ゴルフ
                <br />
                <strong className="font-bold text-gray-800 dark:text-gray-100">特徴</strong>
                ：粘り強さと安定性が武器。一度身につけた技術を確実に発揮できる。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">双子座（5/21-6/21）</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong className="font-bold text-gray-800 dark:text-gray-100">適性競技</strong>
                ：テニス、卓球、フェンシング
                <br />
                <strong className="font-bold text-gray-800 dark:text-gray-100">特徴</strong>
                ：機敏性と適応力に優れる。戦術的な競技で力を発揮。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">蟹座（6/22-7/22）</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong className="font-bold text-gray-800 dark:text-gray-100">適性競技</strong>
                ：水泳、シンクロナイズドスイミング
                <br />
                <strong className="font-bold text-gray-800 dark:text-gray-100">特徴</strong>
                ：水との親和性が高く、チームワークを重視する競技に向いている。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">獅子座（7/23-8/22）</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong className="font-bold text-gray-800 dark:text-gray-100">適性競技</strong>
                ：陸上競技、体操、フィギュアスケート
                <br />
                <strong className="font-bold text-gray-800 dark:text-gray-100">特徴</strong>
                ：観客を魅了する華やかなパフォーマンスが得意。プレッシャーをエネルギーに変える。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">乙女座（8/23-9/22）</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong className="font-bold text-gray-800 dark:text-gray-100">適性競技</strong>
                ：体操、新体操、アーチェリー
                <br />
                <strong className="font-bold text-gray-800 dark:text-gray-100">特徴</strong>
                ：完璧主義で細かい技術の習得が得意。継続的な練習を苦にしない。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">天秤座（9/23-10/23）</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong className="font-bold text-gray-800 dark:text-gray-100">適性競技</strong>
                ：フィギュアスケート、新体操、ダンス
                <br />
                <strong className="font-bold text-gray-800 dark:text-gray-100">特徴</strong>
                ：美的センスに優れ、バランス感覚が抜群。芸術性を求められる競技に向いている。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">蠍座（10/24-11/22）</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong className="font-bold text-gray-800 dark:text-gray-100">適性競技</strong>
                ：格闘技、ボクシング、レスリング
                <br />
                <strong className="font-bold text-gray-800 dark:text-gray-100">特徴</strong>
                ：集中力と精神力が強く、極限状態でも力を発揮できる。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">射手座（11/23-12/21）</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong className="font-bold text-gray-800 dark:text-gray-100">適性競技</strong>
                ：アーチェリー、乗馬、マラソン
                <br />
                <strong className="font-bold text-gray-800 dark:text-gray-100">特徴</strong>
                ：目標に向かって一直線に進む力がある。長距離競技や精密性を要する競技に適している。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">山羊座（12/22-1/19）</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong className="font-bold text-gray-800 dark:text-gray-100">適性競技</strong>：登山、スキー、長距離走
                <br />
                <strong className="font-bold text-gray-800 dark:text-gray-100">特徴</strong>
                ：忍耐力と持久力に優れ、長期間の努力を継続できる。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">水瓶座（1/20-2/18）</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong className="font-bold text-gray-800 dark:text-gray-100">適性競技</strong>
                ：スノーボード、サーフィン、新しいスポーツ
                <br />
                <strong className="font-bold text-gray-800 dark:text-gray-100">特徴</strong>
                ：独創性があり、従来の枠にとらわれない新しいスタイルを生み出す。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">魚座（2/19-3/20）</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong className="font-bold text-gray-800 dark:text-gray-100">適性競技</strong>：水泳、ダイビング、ヨガ
                <br />
                <strong className="font-bold text-gray-800 dark:text-gray-100">特徴</strong>
                ：直感力に優れ、流れるような美しい動きが得意。
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-100">
                成功するアスリートの共通点
              </h2>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                占星術的に成功しやすいアスリートには、以下の共通点があります：
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">1. 強い火星</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                競争心と闘争本能を司る火星が良い配置にあることで、勝負への執着心と瞬発力を発揮できます。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">2. 安定した土星</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                忍耐力と継続力を表す土星が良い状態にあることで、長期間の厳しい練習に耐えることができます。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">
                3. バランスの取れた天体配置
              </h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                一つの天体だけが強すぎると、偏った能力になりがち。バランスの取れた配置が理想的です。
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-100">運気の波を読む</h2>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                アスリートのパフォーマンスには波があります。占星術では、以下の要素で運気の波を読むことができます：
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">
                トランジット（運行天体の影響）
              </h3>

              <ul className="list-disc pl-5 mb-4">
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  <strong className="font-bold text-gray-800 dark:text-gray-100">木星の影響</strong>
                  ：約12年周期で各星座を移動し、その時期に該当する分野で成功しやすくなります
                </li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  <strong className="font-bold text-gray-800 dark:text-gray-100">土星の影響</strong>
                  ：約29年周期で試練と成長をもたらし、真の実力が試されます
                </li>
                <li className="mb-1 text-gray-600 dark:text-gray-300">
                  <strong className="font-bold text-gray-800 dark:text-gray-100">火星の影響</strong>
                  ：約2年周期で競技力に直接影響を与えます
                </li>
              </ul>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">
                プログレッション（進行法）
              </h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                生まれた時の天体配置が時間とともにどう変化するかを見ることで、人生の大きな転換期を予測できます。
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-100">実際の活用方法</h2>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">1. 競技選択</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                自分の星座や天体配置を知ることで、最も適した競技を選択できます。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">2. 練習計画</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                運気の良い時期に重要な大会や練習を設定することで、効果を最大化できます。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">3. メンタルケア</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                占星術的な特徴を理解することで、自分の弱点を補強し、強みを活かす方法が分かります。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">4. 引退時期の判断</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                土星回帰（約29歳）や木星回帰（約35歳）などの重要な時期を参考に、引退やセカンドキャリアを考えることができます。
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-100">注意点とバランス</h2>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                占星術は有用なツールですが、以下の点に注意が必要です：
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">1. 努力の重要性</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                占星術は可能性を示すものであり、実際の成功には努力が不可欠です。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">2. 科学的根拠</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                占星術には科学的根拠がないため、参考程度に留めることが大切です。
              </p>

              <h3 className="text-xl font-bold mb-3 mt-6 text-gray-800 dark:text-gray-100">3. 個人差</h3>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                同じ星座でも、生まれた時間や場所により詳細な配置は異なります。
              </p>

              <h2 className="text-2xl font-bold mb-4 mt-8 text-gray-800 dark:text-gray-100">まとめ</h2>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                占星術は、スポーツ選手の才能や適性を理解するための一つの視点として活用できます。自分の星座的特徴を知ることで、より効果的な練習方法や競技選択ができるかもしれません。
              </p>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                ただし、最も重要なのは日々の努力と継続です。占星術を参考にしながらも、自分自身の可能性を信じて挑戦し続けることが、真の成功への道となるでしょう。
              </p>

              <p className="mb-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <strong className="font-bold text-gray-800 dark:text-gray-100">
                  あなたも自分の星座的特徴を知って、スポーツライフをより充実させてみませんか？
                </strong>
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
