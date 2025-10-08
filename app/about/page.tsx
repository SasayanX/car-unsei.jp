import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Award, Star, Users, Crown, BookOpen, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "運営者情報 | 愛車運勢診断",
  description:
    "カナウ四柱推命代表・金雨輝龍による愛車運勢診断の運営者情報。日本占術協会認定の四柱推命鑑定士として、確かな知識と経験をもとにサービスを提供しています。",
  keywords: "金雨輝龍, カナウ四柱推命, 四柱推命鑑定士, 姓名判断, 横浜の名付け王, 運営者情報",
  openGraph: {
    title: "運営者情報 | 愛車運勢診断",
    description: "カナウ四柱推命代表・金雨輝龍による愛車運勢診断の運営者情報",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* ヘッダー */}
        <div className="text-center mb-8">
          <nav className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Link href="/" className="hover:text-purple-600">
              ホーム
            </Link>
            <span className="mx-2">/</span>
            <span>運営者・監修者情報</span>
          </nav>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">運営者・監修者情報</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">プロの四柱推命鑑定士による愛車運勢診断サービス</p>
        </div>

        {/* メインプロフィールカード */}
        <Card className="mb-8 shadow-xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white p-6">
            <div className="flex items-center gap-3">
              <Star className="h-8 w-8 text-yellow-300" />
              <div>
                <CardTitle className="text-3xl font-bold">金雨輝龍（かなうきりゅう）</CardTitle>
                <p className="text-purple-100 text-lg">カナウ四柱推命 代表・Google Play公式タロットアプリ監修者</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="grid md:grid-cols-3 gap-0">
              {/* プロフィール写真 */}
              <div className="md:col-span-1 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-gray-800 dark:to-gray-700 p-6 flex items-center justify-center">
                <div className="relative">
                  <Image
                    src="/images/kanau-kiryuu-profile.png"
                    alt="金雨輝龍 プロフィール写真"
                    width={280}
                    height={280}
                    className="rounded-full shadow-2xl border-4 border-white"
                    priority
                  />
                  <div className="absolute -bottom-2 -right-2 bg-purple-600 text-white p-2 rounded-full">
                    <Crown className="h-6 w-6" />
                  </div>
                </div>
              </div>

              {/* プロフィール詳細 */}
              <div className="md:col-span-2 p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
                  <BookOpen className="h-6 w-6 text-purple-600" />
                  プロフィール
                </h3>
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="leading-relaxed">
                    愛車運勢診断の運営責任者として、確かな占術知識と豊富な鑑定経験をもとに、
                    皆様の愛車選びをサポートしています。
                  </p>
                  <p className="leading-relaxed">
                    「横浜の名付け王」の異名を持ち、数多くの方々の人生の重要な決断をお手伝いしてきました。
                    ナンバープレートの数字に込められた運勢の力を、現代の生活に活かせる形でお伝えしています。
                  </p>
                  <p className="leading-relaxed">
                    ナンバープレートの数字に込められた運勢の力を、現代のカーライフに活かせる形でお伝えしています。
                  </p>
                </div>

                {/* 資格・認定バッジ */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">資格・認定</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300 px-3 py-1">
                      <Award className="h-4 w-4 mr-1" />
                      日本占術協会認定四柱推命鑑定士
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-300 px-3 py-1">
                      <Award className="h-4 w-4 mr-1" />
                      姓名判断鑑定師
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 border-green-300 px-3 py-1">
                      <Award className="h-4 w-4 mr-1" />
                      開運命名師
                    </Badge>
                    <Badge className="bg-purple-100 text-purple-800 border-purple-300 px-3 py-1">
                      <Crown className="h-4 w-4 mr-1" />
                      横浜の名付け王
                    </Badge>
                    <Badge className="bg-indigo-100 text-indigo-800 border-indigo-300 px-3 py-1">
                      <Star className="h-4 w-4 mr-1" />
                      Google Play公式アプリ監修者
                    </Badge>
                  </div>
                </div>

                {/* プロ認定ボタン */}
                <div className="mt-6 flex gap-3">
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 text-sm">
                    プロ認定
                  </Badge>
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 text-sm">
                    <Star className="h-4 w-4 mr-1" />
                    横浜の名付け王
                  </Badge>
                  <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 text-sm">
                    <Crown className="h-4 w-4 mr-1" />
                    Google Play公式監修者
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 専門分野・得意占術 */}
        <Card className="mb-8 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Users className="h-6 w-6" />
              専門分野・得意占術
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "四柱推命",
                  desc: "生年月日から運勢を詳細分析",
                  icon: <Star className="h-8 w-8 text-yellow-500" />,
                  color: "from-yellow-400 to-orange-500",
                },
                {
                  name: "姓名判断",
                  desc: "名前の画数から運勢を鑑定",
                  icon: <BookOpen className="h-8 w-8 text-blue-500" />,
                  color: "from-blue-400 to-indigo-500",
                },
                {
                  name: "数秘術",
                  desc: "数字の持つ神秘的な力を活用",
                  icon: <Award className="h-8 w-8 text-purple-500" />,
                  color: "from-purple-400 to-pink-500",
                },
                {
                  name: "手相",
                  desc: "手のひらから人生を読み解く",
                  icon: <Heart className="h-8 w-8 text-red-500" />,
                  color: "from-red-400 to-pink-500",
                },
                {
                  name: "タロット",
                  desc: "カードで未来の可能性を探る",
                  icon: <Crown className="h-8 w-8 text-green-500" />,
                  color: "from-green-400 to-teal-500",
                },
                {
                  name: "六星占術",
                  desc: "運命の流れを的確に把握",
                  icon: <Star className="h-8 w-8 text-indigo-500" />,
                  color: "from-indigo-400 to-purple-500",
                },
              ].map((skill, index) => (
                <div key={index} className="group">
                  <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group-hover:scale-105">
                    <div
                      className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center mb-4 mx-auto`}
                    >
                      {skill.icon}
                    </div>
                    <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-2 text-center">{skill.name}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed">{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 連絡先情報 */}
        <Card className="mb-8 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
            <CardTitle className="text-2xl flex items-center gap-2">
              <Mail className="h-6 w-6" />
              お問い合わせ先
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center p-4 bg-blue-50 dark:bg-gray-800 rounded-lg">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-3">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <p className="font-medium text-gray-900 dark:text-white mb-2">メールアドレス</p>
                <a
                  href="mailto:kanaukiryu@gmail.com"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-center break-all"
                >
                  kanaukiryu@gmail.com
                </a>
              </div>

              <div className="flex flex-col items-center p-4 bg-green-50 dark:bg-gray-800 rounded-lg">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mb-3">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <p className="font-medium text-gray-900 dark:text-white mb-2">電話番号</p>
                <a
                  href="tel:090-6483-3637"
                  className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300"
                >
                  090-6483-3637
                </a>
              </div>

              <div className="flex flex-col items-center p-4 bg-purple-50 dark:bg-gray-800 rounded-lg">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-3">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <p className="font-medium text-gray-900 dark:text-white mb-2">活動拠点</p>
                <p className="text-gray-600 dark:text-gray-400 text-center">愛車運勢診断</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* サイト運営方針 */}
        <Card className="mb-8 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-gray-700 to-gray-900 text-white">
            <CardTitle className="text-2xl">サイト運営方針</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                <strong className="text-purple-600 dark:text-purple-400">愛車運勢診断</strong>
                は、古来より伝わる姓名判断と現代のカーライフを結びつけ、
                皆様の愛車選びをサポートすることを目的としています。
              </p>
              <p>
                ナンバープレートに含まれる数字の持つ意味を81画理論に基づいて分析し、
                科学的根拠と伝統的な占術知識を組み合わせた独自の診断システムを提供しています。
              </p>
              <p>
                すべての情報は、長年の鑑定経験と専門知識に基づいて作成されており、
                ユーザーの皆様に価値ある情報をお届けできるよう日々努めています。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* フッターナビゲーション */}
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">サービスのご利用にあたっては、以下もご確認ください</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/disclaimer"
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors shadow-md"
            >
              免責事項
            </Link>
            <Link
              href="/privacy"
              className="px-6 py-3 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg transition-colors shadow-md"
            >
              プライバシーポリシー
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg transition-colors shadow-md"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
