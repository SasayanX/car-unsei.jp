"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, Globe, Sparkles, Heart, Share2 } from "lucide-react"

export function CulturalImpact() {
  const culturalMilestones = [
    {
      phase: "Phase 1: 認知拡大",
      status: "進行中",
      description: "SNSでの口コミ拡散",
      metrics: "1,000+ ユーザー",
      color: "bg-blue-100 text-blue-800 border-blue-300",
    },
    {
      phase: "Phase 2: 文化浸透",
      status: "準備中",
      description: "メディア掲載・インフルエンサー活用",
      metrics: "10,000+ ユーザー目標",
      color: "bg-yellow-100 text-yellow-800 border-yellow-300",
    },
    {
      phase: "Phase 3: 社会現象化",
      status: "計画中",
      description: "テレビ・雑誌での特集",
      metrics: "100,000+ ユーザー目標",
      color: "bg-green-100 text-green-800 border-green-300",
    },
    {
      phase: "Phase 4: 文化定着",
      status: "未来",
      description: "車購入時の必須チェック項目に",
      metrics: "1,000,000+ ユーザー目標",
      color: "bg-purple-100 text-purple-800 border-purple-300",
    },
  ]

  const culturalFeatures = [
    {
      icon: "🚗",
      title: "車選びの新基準",
      description: "価格・性能に加えて「運勢」も重要な要素に",
    },
    {
      icon: "📱",
      title: "SNS新ジャンル",
      description: "ナンバープレート診断投稿が新しいSNSトレンドに",
    },
    {
      icon: "🔮",
      title: "現代版数秘術",
      description: "古典数秘術をナンバープレートに応用した新しい開運法",
    },
    {
      icon: "🎯",
      title: "自動車業界革命",
      description: "車選びに運勢要素が加わる",
    },
  ]

  return (
    <div className="space-y-6">
      {/* 文化的インパクト */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-6 h-6 text-purple-600" />🌟 新しい日本文化の誕生
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-center p-6 bg-white/80 rounded-lg">
            <div className="text-4xl mb-4">🚗✨</div>
            <h3 className="text-2xl font-bold text-purple-800 mb-2">ナンバープレート診断文化</h3>
            <p className="text-gray-700 leading-relaxed">
              血液型占い、星座占いに続く、
              <br />
              <strong className="text-purple-600">日本発の新しい占い文化</strong>
            </p>
          </div>

          {/* 文化的特徴 */}
          <div className="grid md:grid-cols-2 gap-4">
            {culturalFeatures.map((feature, index) => (
              <div key={index} className="p-4 bg-white/60 rounded-lg border border-purple-200">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h4 className="font-semibold text-purple-800 mb-1">{feature.title}</h4>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 文化浸透ロードマップ */}
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            文化浸透ロードマップ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {culturalMilestones.map((milestone, index) => (
              <div key={index} className="relative">
                {index < culturalMilestones.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-gray-300"></div>
                )}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="font-semibold text-gray-800">{milestone.phase}</h3>
                      <Badge className={milestone.color}>{milestone.status}</Badge>
                    </div>
                    <p className="text-gray-600 mb-1">{milestone.description}</p>
                    <p className="text-sm font-medium text-purple-600">{milestone.metrics}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 社会への影響 */}
      <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="w-5 h-5 text-green-600" />
            社会への影響予測
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white/60 rounded-lg">
              <div className="text-3xl mb-2">🚙</div>
              <h4 className="font-semibold text-green-800 mb-2">自動車業界</h4>
              <p className="text-sm text-gray-600">車両紹介に運勢情報が標準装備</p>
            </div>
            <div className="text-center p-4 bg-white/60 rounded-lg">
              <div className="text-3xl mb-2">📺</div>
              <h4 className="font-semibold text-green-800 mb-2">メディア</h4>
              <p className="text-sm text-gray-600">朝の情報番組でナンバープレート運勢コーナー</p>
            </div>
            <div className="text-center p-4 bg-white/60 rounded-lg">
              <div className="text-3xl mb-2">🎓</div>
              <h4 className="font-semibold text-green-800 mb-2">学術研究</h4>
              <p className="text-sm text-gray-600">数字と心理学の新しい研究分野</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 文化創造への参加呼びかけ */}
      <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
        <CardContent className="p-6 text-center">
          <div className="space-y-4">
            <div className="text-4xl">🚀</div>
            <h3 className="text-xl font-bold text-orange-800">あなたも新文化の創造者になりませんか？</h3>
            <p className="text-gray-700 leading-relaxed">
              このナンバープレート診断を友達にシェアすることで、
              <br />
              日本の新しい文化づくりに参加できます！
            </p>
            <div className="flex justify-center gap-4">
              <Button className="bg-orange-500 hover:bg-orange-600">
                <Share2 className="w-4 h-4 mr-2" />
                文化を広める
              </Button>
              <Button variant="outline" className="border-orange-300 text-orange-700">
                <Heart className="w-4 h-4 mr-2" />
                応援する
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 将来のビジョン */}
      <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-indigo-600" />
            2030年の日本社会
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-white/60 rounded-lg border border-indigo-200">
              <h4 className="font-semibold text-indigo-800 mb-2">🚗 車購入時の新常識</h4>
              <p className="text-sm text-gray-600">
                「価格はいくら？」「燃費は？」「ナンバーの運勢は？」が当たり前の質問に
              </p>
            </div>
            <div className="p-4 bg-white/60 rounded-lg border border-indigo-200">
              <h4 className="font-semibold text-indigo-800 mb-2">🏢 企業の社用車選び</h4>
              <p className="text-sm text-gray-600">会社設立時にナンバープレート運勢を考慮するのが一般的に</p>
            </div>
            <div className="p-4 bg-white/60 rounded-lg border border-indigo-200">
              <h4 className="font-semibold text-indigo-800 mb-2">🌍 海外展開</h4>
              <p className="text-sm text-gray-600">「Japanese Car Number Fortune」として世界に輸出される日本文化</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
