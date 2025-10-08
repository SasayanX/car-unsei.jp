import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Car,
  Heart,
  Zap,
  Shield,
  Star,
  Users,
  Target,
  Sparkles,
  CheckCircle,
  ArrowRight,
  Calculator,
  Crown,
} from "lucide-react"
import Link from "next/link"
import { RelatedArticles } from "@/components/related-articles"
import { SEOEnhancedImage } from "@/components/seo-enhanced-image"
import { BreadcrumbNavigation } from "@/components/breadcrumb-navigation"
import { ReadingProgress } from "@/components/reading-progress"

export const metadata: Metadata = {
  title: "【新機能】数秘術による愛車性格診断が登場！プロ監修の本格的な性格分析 | 愛車運勢・性格診断",
  description:
    "数秘術の専門知識を活用した革新的な愛車性格診断機能が新登場！ナンバープレートから愛車の隠された性格を解明。プロ監修による信頼性の高い診断で、あなたの愛車の真の性格を発見しましょう。",
  openGraph: {
    title: "【新機能】数秘術による愛車性格診断が登場！プロ監修の本格的な性格分析",
    description:
      "数秘術の専門知識を活用した革新的な愛車性格診断機能が新登場！ナンバープレートから愛車の隠された性格を解明。",
    type: "article",
    images: [
      {
        url: "/images/car-personality-diagnosis-hero.png",
        width: 1200,
        height: 630,
        alt: "数秘術による愛車性格診断",
      },
    ],
  },
}

export default function CarPersonalityNumerologyDiagnosisPage() {
  const personalityTypes = [
    {
      type: "リーダーカー (1)",
      icon: Crown,
      description: "行動力・独立心が強く、新しいことに挑戦するエネルギー",
      traits: ["積極的", "先駆的", "独立的"],
      color: "bg-red-500",
    },
    {
      type: "サポートカー (2)",
      icon: Users,
      description: "協調性や気配りに優れ、家族やパートナーシップを大切にする",
      traits: ["協調的", "思いやり", "バランス"],
      color: "bg-blue-500",
    },
    {
      type: "楽しみカー (3)",
      icon: Sparkles,
      description: "明るく陽気で、ドライブやレジャーに最適",
      traits: ["創造的", "楽観的", "表現力豊か"],
      color: "bg-purple-500",
    },
    {
      type: "安定カー (4)",
      icon: Shield,
      description: "安全運転・堅実志向。日常使いや家族の送迎に安心感",
      traits: ["安定的", "実用的", "信頼性"],
      color: "bg-green-500",
    },
    {
      type: "自由カー (5)",
      icon: Zap,
      description: "行動範囲が広く、旅行や冒険にぴったり",
      traits: ["自由", "冒険", "変化"],
      color: "bg-orange-500",
    },
    {
      type: "ファミリーカー (6)",
      icon: Heart,
      description: "愛情や家庭運が強く、家族の絆を深める",
      traits: ["愛情", "責任感", "家庭的"],
      color: "bg-pink-500",
    },
  ]

  const features = [
    {
      title: "数秘術の専門知識",
      description: "古代から伝わる数秘術の理論を現代の車診断に応用",
      icon: Calculator,
    },
    {
      title: "プロ監修の信頼性",
      description: "金雨輝龍先生による専門的な監修で高い精度を実現",
      icon: Star,
    },
    {
      title: "詳細な性格分析",
      description: "13の数秘術タイプから愛車の個性を詳しく解析",
      icon: Target,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
      <ReadingProgress />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <BreadcrumbNavigation
          items={[
            { label: "ホーム", href: "/" },
            { label: "ブログ", href: "/blog" },
            { label: "数秘術による愛車性格診断", href: "/blog/car-personality-numerology-diagnosis" },
          ]}
        />

        {/* ヒーロー画像 */}
        <SEOEnhancedImage
          src="/images/car-personality-diagnosis-hero.png"
          alt="数秘術による愛車性格診断のイメージ"
          width={800}
          height={400}
          priority
          className="mb-8"
          caption="数秘術の力で愛車の隠された性格を解明"
        />

        {/* 新機能バッジ */}
        <div className="flex items-center gap-2 mb-6">
          <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 text-lg">
            🎉 NEW FEATURE
          </Badge>
          <Badge variant="outline" className="text-purple-600 border-purple-600">
            プロ監修
          </Badge>
        </div>

        {/* タイトル */}
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6 leading-tight">
          【新機能】数秘術による
          <br />
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            愛車性格診断
          </span>
          が登場！
        </h1>

        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
          古代から伝わる数秘術の知恵を現代の愛車診断に応用した、革新的な性格診断機能が新登場！
          あなたの愛車に隠された真の性格を、プロ監修の本格的な分析で解明します。
        </p>

        {/* 新機能の特徴 */}
        <Card className="mb-8 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Sparkles className="w-6 h-6 text-purple-600" />
              新機能の特徴
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30"
                >
                  <feature.icon className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 数秘術とは */}
        <Card className="mb-8 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Calculator className="w-6 h-6 text-blue-600" />
              数秘術とは？
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              数秘術は、数字に神秘的な意味があるとする古代からの学問です。
              ピタゴラスが体系化したとされ、「数字は宇宙の言語」として、
              人や物事の本質を数字から読み解く技術として発展してきました。
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">数秘術の基本原理</h4>
              <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  数字には固有のエネルギーと意味がある
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  複数の数字を組み合わせることで深い洞察が得られる
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  個人や物事の性格・特性を数値から分析できる
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* 愛車性格診断の仕組み */}
        <Card className="mb-8 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Car className="w-6 h-6 text-green-600" />
              愛車性格診断の仕組み
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              ナンバープレートの数字を数秘術の理論に基づいて分析し、
              愛車の隠された性格特性を1〜9、11、22、33の数字タイプに分類します。
            </p>

            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">診断プロセス</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <span className="text-green-700 dark:text-green-300">ナンバープレートの数字を抽出</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <span className="text-green-700 dark:text-green-300">数秘術の計算法で基本数を算出</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <span className="text-green-700 dark:text-green-300">性格タイプを判定・詳細分析</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 6つの性格タイプ */}
        <Card className="mb-8 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Heart className="w-6 h-6 text-pink-600" />
              数秘術による愛車タイプ
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {personalityTypes.map((type, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 ${type.color} rounded-full flex items-center justify-center`}>
                      <type.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-100">{type.type}</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-3">{type.description}</p>
                  <div className="space-y-1">
                    {type.traits.map((trait, traitIndex) => (
                      <div key={traitIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{trait}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 追加説明 */}
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          ※ここでは代表的な6タイプを紹介。実際の診断では1〜9、11、22、33の全13タイプで詳細分析します。
        </p>

        {/* プロ監修の信頼性 */}
        <Card className="mb-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Star className="w-6 h-6 text-yellow-600" />
              プロ監修による信頼性
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-100">金雨輝龍先生 監修</h4>
                <p className="text-gray-600 dark:text-gray-300">数秘術・姓名判断の専門家</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              長年にわたり数秘術と姓名判断の研究を続けてきた金雨輝龍先生の監修により、
              理論的根拠に基づいた信頼性の高い診断を実現しています。 古典的な数秘術の知識と現代的な解釈を組み合わせ、
              より実用的で分かりやすい診断結果をお届けします。
            </p>
          </CardContent>
        </Card>

        {/* 従来機能との違い */}
        <Card className="mb-8 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Target className="w-6 h-6 text-indigo-600" />
              従来の運勢診断との違い
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-3">従来の運勢診断</h4>
                <ul className="space-y-2 text-sm text-blue-700 dark:text-blue-300">
                  <li>• 吉凶の判定が中心</li>
                  <li>• 運勢の良し悪しを評価</li>
                  <li>• 数値的な結果表示</li>
                </ul>
              </div>
              <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-3">新・性格診断</h4>
                <ul className="space-y-2 text-sm text-purple-700 dark:text-purple-300">
                  <li>• 性格特性の詳細分析</li>
                  <li>• 愛車の個性を理解</li>
                  <li>• 具体的な特徴説明</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 利用方法 */}
        <Card className="mb-8 bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl">
              <Zap className="w-6 h-6 text-orange-600" />
              今すぐ試してみよう！
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              新機能の愛車性格診断は、メインページから簡単にアクセスできます。
              ナンバープレートを入力するだけで、あなたの愛車の隠された性格が明らかに！
            </p>
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3"
            >
              <Link href="/">
                愛車性格診断を試す
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        <Separator className="my-8" />

        {/* 関連記事 */}
        <RelatedArticles currentSlug="car-personality-numerology-diagnosis" />
      </div>
    </div>
  )
}
