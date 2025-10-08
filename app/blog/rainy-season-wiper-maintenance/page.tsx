import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Script from "next/script"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle, AlertTriangle, Clock, Calendar, ArrowRight } from "lucide-react"
import { generateBlogPostJsonLd, generateHowToJsonLd } from "@/lib/json-ld"

export const metadata: Metadata = {
  title: "ワイパーゴムの点検と交換タイミング | 梅雨時期の車メンテナンス",
  description:
    "梅雨時期に欠かせないワイパーゴムの点検方法と最適な交換タイミングを解説。安全運転のために知っておくべき劣化サインと、自分でできる簡単メンテナンス方法を紹介します。",
  alternates: {
    canonical: "https://car-unsei.jp/blog/rainy-season-wiper-maintenance",
  },
  openGraph: {
    title: "ワイパーゴムの点検と交換タイミング | 梅雨時期の車メンテナンス",
    description:
      "梅雨時期に欠かせないワイパーゴムの点検方法と最適な交換タイミングを解説。安全運転のために知っておくべき劣化サインと、自分でできる簡単メンテナンス方法を紹介します。",
    url: "https://car-unsei.jp/blog/rainy-season-wiper-maintenance",
    images: [
      {
        url: "https://car-unsei.jp/images/wiper-maintenance-hero.png",
        width: 800,
        height: 450,
        alt: "雨の日の車のワイパーとフロントガラス",
      },
    ],
  },
}

export default function WiperMaintenancePage() {
  // ブログ記事用JSON-LD
  const blogPostJsonLd = generateBlogPostJsonLd(
    "ワイパーゴムの点検と交換タイミング",
    "梅雨時期に欠かせないワイパーゴムの点検方法と最適な交換タイミングを解説。安全運転のために知っておくべき劣化サインと、自分でできる簡単メンテナンス方法を紹介します。",
    "rainy-season-wiper-maintenance",
    "2025-06-02",
    "https://car-unsei.jp/images/wiper-maintenance-hero.png",
    "車運勢チェッカー編集部",
    ["ワイパー", "梅雨", "車メンテナンス", "安全運転", "交換", "点検"],
  )

  // ハウツー用JSON-LD（ワイパー交換手順）
  const howToJsonLd = generateHowToJsonLd(
    "ワイパーゴムの交換方法",
    "自分でできるワイパーゴムの交換手順を詳しく解説します。",
    [
      {
        name: "準備",
        text: "新しいワイパーゴム（車種に合ったもの）を用意します。",
      },
      {
        name: "ワイパーを立てる",
        text: "ワイパーをフロントガラスから離れた状態にします。",
      },
      {
        name: "古いゴムの取り外し",
        text: "ワイパーブレードの留め具を外し、古いゴムを引き抜きます。",
      },
      {
        name: "新しいゴムの取り付け",
        text: "新しいゴムを同じ要領で差し込みます。",
      },
      {
        name: "動作確認",
        text: "ワイパーを元に戻し、正しく動作するか確認します。",
      },
    ],
    "PT15M",
    ["新しいワイパーゴム"],
    ["マイクロファイバークロス", "ウォッシャー液"],
  )

  return (
    <>
      {/* JSON-LD構造化データ */}
      <Script
        id="blog-post-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogPostJsonLd),
        }}
      />
      <Script
        id="howto-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToJsonLd),
        }}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <Link href="/blog" className="hover:underline">
              ブログ
            </Link>
            <span>/</span>
            <span>車メンテナンス・梅雨対策</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">ワイパーゴムの点検と交換タイミング</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>2025年6月2日</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>7分で読めます</span>
            </div>
          </div>
        </div>

        <div className="aspect-video relative rounded-lg overflow-hidden mb-8 bg-gray-100 flex items-center justify-center">
          <Image
            src="/images/wiper-maintenance-hero.png"
            alt="雨の日の車のワイパーとフロントガラス"
            width={800}
            height={450}
            className="w-full h-full object-cover"
          />
        </div>

        <Alert className="mb-8 border-amber-500 bg-amber-50">
          <AlertTriangle className="h-5 w-5 text-amber-500" />
          <AlertTitle className="text-amber-800">安全警告</AlertTitle>
          <AlertDescription className="text-amber-700">
            劣化したワイパーは視界不良を引き起こし、事故リスクを高めます。梅雨前の点検は必須です。
          </AlertDescription>
        </Alert>

        <div className="prose max-w-none mb-8">
          <h2>梅雨時期のワイパー点検が命を守る理由</h2>
          <p>
            梅雨時期、ワイパーは単なる「雨を払うための道具」ではありません。時速60kmで走行中、1秒間に約17mを進みます。
            ワイパーの不具合で視界が1秒でも遮られれば、その間に車は前方に17m進むことになります。
            これは大型トラック1台分以上の距離です。
          </p>
          <p>
            国土交通省の調査によると、雨天時の事故の約15%がワイパーの不具合や視界不良に関連しているとされています。
            梅雨前のワイパー点検は、あなたと家族の命を守る重要な安全対策なのです。
          </p>

          <h2>ワイパーゴム交換のタイミング：5つの劣化サイン</h2>
          <p>以下のサインが1つでも当てはまれば、交換時期が来ています：</p>
          <ol>
            <li>
              <strong>拭き残しやムラ</strong>：ワイパーを動かしても、フロントガラスに水滴や筋が残る
            </li>
            <li>
              <strong>異音</strong>：ワイパー作動時にキーキー音やビビリ音がする
            </li>
            <li>
              <strong>ゴムの亀裂や硬化</strong>：ゴム部分に亀裂が入っている、または硬くなっている
            </li>
            <li>
              <strong>ガラスへの接触不良</strong>：ゴムがガラスに均一に接触していない
            </li>
            <li>
              <strong>使用期間</strong>：最後の交換から6ヶ月〜1年以上経過している
            </li>
          </ol>

          <div className="my-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="text-blue-800 mb-3">プロの視点：最適な交換タイミング</h3>
            <p className="text-blue-700 mb-0">
              「ワイパーゴムは季節の変わり目、特に梅雨入り前と冬の到来前の年2回の交換が理想的です。紫外線や気温変化でゴムは劣化するため、見た目が良くても定期交換が安全への近道です。」
              <br />
              <span className="text-sm italic">— 自動車整備士 田中さん（経験15年）</span>
            </p>
          </div>

          <h2>30秒でできる！ワイパーゴムの簡易点検法</h2>
          <p>忙しい方でも実践できる、超簡単なワイパー点検方法をご紹介します：</p>
          <ol>
            <li>ワイパーを立てる</li>
            <li>ゴム部分を指で触り、硬くなっていないか確認</li>
            <li>ゴムの端を軽く引っ張り、すぐに千切れるようなら劣化のサイン</li>
            <li>ゴムの接地面に亀裂や欠けがないか目視確認</li>
            <li>ワイパーを元に戻し、ウォッシャー液を吹きかけて拭き取り具合をチェック</li>
          </ol>

          <h2>自分でできる！ワイパーゴム交換の手順</h2>
          <p>多くの車種では、専門知識がなくても自分でワイパーゴムを交換できます。基本的な手順は以下の通りです：</p>
          <ol>
            <li>
              <strong>準備</strong>：新しいワイパーゴム（車種に合ったもの）を用意
            </li>
            <li>
              <strong>ワイパーを立てる</strong>：フロントガラスから離れた状態にする
            </li>
            <li>
              <strong>古いゴムの取り外し</strong>：ワイパーブレードの留め具を外し、古いゴムを引き抜く
            </li>
            <li>
              <strong>新しいゴムの取り付け</strong>：新しいゴムを同じ要領で差し込む
            </li>
            <li>
              <strong>動作確認</strong>：ワイパーを元に戻し、正しく動作するか確認
            </li>
          </ol>
          <p>
            ※車種によって取り付け方法が異なる場合があります。取扱説明書や新しいワイパーゴムの説明書を参照してください。
          </p>

          <h2>プロに依頼する場合の費用と選び方</h2>
          <p>自分での交換に不安がある場合は、プロに依頼するのも良い選択です：</p>
          <ul>
            <li>
              <strong>カー用品店</strong>：1,000円〜3,000円程度（工賃込み）
            </li>
            <li>
              <strong>ディーラー</strong>：3,000円〜5,000円程度（純正品使用）
            </li>
            <li>
              <strong>整備工場</strong>：2,000円〜4,000円程度
            </li>
          </ul>
          <p>
            ワイパーゴムだけでなく、ブレード（腕の部分）ごと交換する場合は、さらに1,000円〜3,000円程度高くなります。
          </p>

          <h2>ワイパーゴム選びのポイント</h2>
          <p>ワイパーゴムには様々な種類があります。選ぶ際のポイントは：</p>
          <ul>
            <li>
              <strong>純正品 vs 社外品</strong>
              ：純正品は適合性が高いが価格も高め。社外品は価格が安いが、適合性を確認する必要あり
            </li>
            <li>
              <strong>シリコン製 vs ゴム製</strong>
              ：シリコン製は耐久性が高く寿命が長いが価格も高め。ゴム製は価格が安いが寿命は短め
            </li>
            <li>
              <strong>形状</strong>：U字フック、I字フック、サイドロックなど、車種によって適合する形状が異なる
            </li>
          </ul>

          <h2>梅雨時期のワイパー特別ケア</h2>
          <p>梅雨時期は特に以下のケアを心がけましょう：</p>
          <ul>
            <li>
              <strong>定期的な清掃</strong>：ワイパーゴムに付着した汚れを拭き取る
            </li>
            <li>
              <strong>ウォッシャー液の補充</strong>：良質なウォッシャー液を使用し、常に満タンに保つ
            </li>
            <li>
              <strong>撥水コーティング</strong>：フロントガラスに撥水コーティングを施すと、ワイパーの負担が減少
            </li>
            <li>
              <strong>使用後のケア</strong>
              ：長時間駐車する際は、ワイパーをガラスから離した状態にしておくと、ゴムの変形を防げる
            </li>
          </ul>

          <h2>まとめ：梅雨前の点検で安全運転を</h2>
          <p>
            ワイパーゴムの点検と交換は、梅雨時期の安全運転に欠かせない重要なメンテナンスです。
            劣化サインを見逃さず、適切なタイミングで交換することで、雨天時の視界を確保し、
            事故リスクを大幅に減らすことができます。
          </p>
          <p>
            特に梅雨入り前の今こそ、ワイパーの状態をチェックする絶好のタイミングです。
            この記事を参考に、ぜひ愛車のワイパーゴムをチェックしてみてください。
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-6">
            <h3 className="text-xl font-bold mb-4">この記事のポイント</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>ワイパーゴムの劣化は事故リスクを高める重大要因</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>梅雨入り前と冬の前の年2回の交換が理想的</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>30秒でできる簡易点検で安全を確保</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <span>多くの車種は自分で交換可能（1,000円〜3,000円の節約）</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">関連記事</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/blog/rainy-season-car-humidity-prevention" className="no-underline">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">梅雨時期の車内湿気・カビ対策完全ガイド</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    健康に直結する車内の湿気・カビ対策。30秒でできる換気法から本格的な除湿グッズまで、プロ直伝の予防術を完全解説。
                  </p>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="h-4 w-4 mr-1" />
                    <span>続きを読む</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
            <Link href="/blog/does-car-number-fortune-work" className="no-underline">
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <h4 className="font-bold mb-2">ナンバープレート運勢診断って当たるの？</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    科学的根拠はないものの、実際の体験談から見える傾向について客観的に解説します。
                  </p>
                  <div className="flex items-center text-sm">
                    <ArrowRight className="h-4 w-4 mr-1" />
                    <span>続きを読む</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <Button asChild className="px-8">
            <Link href="/">愛車の運勢を診断する</Link>
          </Button>
        </div>
      </div>
    </>
  )
}
