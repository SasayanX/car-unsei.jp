"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, TrendingUp, Heart, Home, Quote, Lightbulb, DollarSign, Zap, Shield } from "lucide-react"

interface SuccessStory {
  id: string
  name: string
  age: string
  beforeScore: number
  afterScore: number
  beforeAddress: string
  afterAddress: string
  improvements: string[]
  story: string
  timeframe: string
  isFounder?: boolean
}

const successStories: SuccessStory[] = [
  {
    id: "founder",
    name: "開発者自身",
    age: "サイト創設者",
    beforeScore: 20, // 1424-1の正確なスコア
    afterScore: 100, // 3-1-8の正確なスコア
    beforeAddress: "2002（運勢スコア20点）",
    afterAddress: "111（運勢スコア100点）",
    improvements: ["やる気向上", "借金完済", "ビジネス絶好調", "恋愛成就", "交通トラブル解消"],
    story:
      "2002のナンバーの車に乗っていた頃は本当に最悪でした。追突事故に遭い、しかも相手のバイクが逃走、駐車禁止切符を4回も切られ、タイヤパンクまで頻発。そこから思い切って111のナンバーの車に買い替えたところ、人生が激変！事故もトラブルも一切なくなり、急に周りの女性から声をかけられるようになり、モテ始めた。この体験から「車のナンバープレートにも姓名判断と同様の数字のパワーがある！」と気づき、このサイトを作りました。",
    timeframe: "車買い替え後",
    isFounder: true,
  },
  {
    id: "m-san",
    name: "Mさん",
    age: "40代男性",
    beforeScore: 32,
    afterScore: 87,
    beforeAddress: "旧ナンバー（運勢スコア32点）",
    afterAddress: "新ナンバー（運勢スコア87点）",
    improvements: ["仕事運上昇", "家族関係改善", "健康増進", "金運アップ"],
    story:
      "長年乗っていた車のナンバーを愛車運勢チェッカーで診断したところ、32点と低いことが判明。転職活動も上手くいかず、腰痛に悩まされる日々でした。思い切って87点の高スコアナンバーに変更したところ、驚くべき変化が！車を運転していると「なぜか気分が良くなる」と感じるようになり、1ヶ月後には憧れの会社からヘッドハンティングの連絡が。腰痛も徐々に改善し、家族との関係も円満に。妻が「最近優しくなった」と喜んでくれています。ナンバーを変えただけなのに、こんなに変わるとは思いませんでした！",
    timeframe: "1ヶ月",
  },
]

export function SuccessStories() {
  return (
    <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg transition-colors duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-gray-100">
          <Star className="w-6 h-6 text-yellow-500" />
          愛車運勢診断で人生が変わった方々の実体験をご紹介
        </CardTitle>
        <p className="text-gray-600 dark:text-gray-300 text-sm">
          愛車運勢診断で人生が変わった方々の実体験をご紹介
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {successStories.map((story) => (
          <div
            key={story.id}
            className={`p-6 rounded-lg border ${
              story.isFounder
                ? "bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 border-yellow-200 dark:border-yellow-700"
                : "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border-purple-200 dark:border-purple-700"
            }`}
          >
            {/* 創設者バッジ */}
            {story.isFounder && (
              <div className="mb-4">
                <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                  <Lightbulb className="w-3 h-3 mr-1" />
                  サイト創設者の実体験
                </Badge>
              </div>
            )}

            {/* ヘッダー情報 */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg ${
                    story.isFounder
                      ? "bg-gradient-to-r from-yellow-500 to-orange-500"
                      : "bg-gradient-to-r from-purple-500 to-pink-500"
                  }`}
                >
                  {story.isFounder ? "🚗" : story.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-800 dark:text-gray-100">{story.name}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{story.age}</p>
                </div>
              </div>
              <Badge
                className={`text-white border-0 ${
                  story.isFounder
                    ? "bg-gradient-to-r from-orange-500 to-red-500"
                    : "bg-gradient-to-r from-green-500 to-blue-500"
                }`}
              >
                {story.timeframe}で変化
              </Badge>
            </div>

            {/* スコア比較 */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="text-center p-3 bg-red-50 dark:bg-red-900/30 rounded-lg border border-red-200 dark:border-red-700">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">車買い替え前</p>
                <div className="text-2xl font-bold text-red-600 dark:text-red-400">{story.beforeScore}点</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{story.beforeAddress}</p>
              </div>
              <div className="text-center p-3 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-700">
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">車買い替え後</p>
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">{story.afterScore}点</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{story.afterAddress}</p>
              </div>
            </div>

            {/* 改善点 */}
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-500" />
                人生の変化
              </h4>
              <div className="flex flex-wrap gap-2">
                {story.improvements.map((improvement, index) => (
                  <Badge
                    key={index}
                    className="bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/50 dark:to-blue-900/50 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-600"
                  >
                    {improvement === "昇進" && <TrendingUp className="w-3 h-3 mr-1" />}
                    {improvement === "恋愛成就" && <Heart className="w-3 h-3 mr-1" />}
                    {improvement === "人間関係改善" && <Star className="w-3 h-3 mr-1" />}
                    {improvement === "収入アップ" && <TrendingUp className="w-3 h-3 mr-1" />}
                    {improvement === "借金完済" && <DollarSign className="w-3 h-3 mr-1" />}
                    {improvement === "ビジネス絶好調" && <Zap className="w-3 h-3 mr-1" />}
                    {improvement === "アイデア創出力向上" && <Lightbulb className="w-3 h-3 mr-1" />}
                    {improvement === "金運アップ" && <DollarSign className="w-3 h-3 mr-1" />}
                    {improvement === "やる気向上" && <Lightbulb className="w-3 h-3 mr-1" />}
                    {improvement === "交通トラブル解消" && <Zap className="w-3 h-3 mr-1" />}
                    {improvement === "仕事運上昇" && <TrendingUp className="w-3 h-3 mr-1" />}
                    {improvement === "家族関係改善" && <Heart className="w-3 h-3 mr-1" />}
                    {improvement === "健康増進" && <Shield className="w-3 h-3 mr-1" />}
                    {improvement}
                  </Badge>
                ))}
              </div>
            </div>

            {/* 体験談 */}
            <div className="relative">
              <Quote className="absolute top-0 left-0 w-6 h-6 text-purple-400 dark:text-purple-300 opacity-50" />
              <blockquote className="pl-8 text-gray-700 dark:text-gray-200 leading-relaxed italic">
                "{story.story}"
              </blockquote>
            </div>

            {/* 信頼性バッジ */}
            <div className="mt-4 pt-4 border-t border-purple-200 dark:border-purple-700">
              <div className="flex items-center justify-center gap-2 text-sm text-purple-600 dark:text-purple-300">
                <Home className="w-4 h-4" />
                <span>{story.isFounder ? "サイト開発者の実体験です" : "実際の利用者様の体験談です"}</span>
              </div>
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="text-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg border border-yellow-200 dark:border-yellow-700">
          <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-2">
            🌟 あなたも運勢の良いナンバーを見つけませんか？
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            開発者自身が体験した数字のパワーを、あなたも実感してください！
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
