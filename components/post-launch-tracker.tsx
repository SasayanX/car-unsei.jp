"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, Share2, Users, Globe, CheckCircle, Clock, Target, Zap } from "lucide-react"

export function PostLaunchTracker() {
  const [timeElapsed, setTimeElapsed] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 1)
    }, 60000) // 1分ごと更新

    return () => clearInterval(timer)
  }, [])

  const formatTime = (minutes: number) => {
    const hours = Math.floor(minutes / 60)
    const mins = minutes % 60
    return hours > 0 ? `${hours}時間${mins}分` : `${mins}分`
  }

  const launchStatus = [
    { platform: "note", status: "完了", icon: "📝", color: "bg-green-100 text-green-800" },
    { platform: "Reddit", status: "完了", icon: "🔴", color: "bg-green-100 text-green-800" },
    { platform: "Twitter/X", status: "準備中", icon: "𝕏", color: "bg-yellow-100 text-yellow-800" },
    { platform: "Instagram", status: "準備中", icon: "📷", color: "bg-yellow-100 text-yellow-800" },
    { platform: "TikTok", status: "準備中", icon: "🎵", color: "bg-gray-100 text-gray-600" },
  ]

  const expectedMetrics = {
    note: { views: "500-2000", engagement: "5-15%", timeframe: "24時間" },
    reddit: { views: "1000-5000", engagement: "10-25%", timeframe: "48時間" },
    total: { users: "50-200", conversions: "2-8%", viral: "5-20%" },
  }

  return (
    <div className="space-y-6">
      {/* 投稿完了ステータス */}
      <Card className="border-4 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-green-800">
            <CheckCircle className="w-8 h-8 text-green-600" />🚀 投稿完了！世界展開スタート
          </CardTitle>
          <p className="text-green-700">
            経過時間: <strong>{formatTime(timeElapsed)}</strong> | ステータス:{" "}
            <Badge className="bg-green-600 text-white ml-2">アクティブ配信中</Badge>
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            {launchStatus.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-medium">{item.platform}</span>
                </div>
                <Badge className={item.color}>{item.status}</Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* リアルタイム予想メトリクス */}
      <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <TrendingUp className="w-6 h-6" />📊 予想パフォーマンス（24-48時間）
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-4">
            {/* note予想 */}
            <div className="p-4 bg-white rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">📝 note予想</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>ビュー数:</span>
                  <span className="font-medium text-blue-600">{expectedMetrics.note.views}</span>
                </div>
                <div className="flex justify-between">
                  <span>エンゲージメント:</span>
                  <span className="font-medium text-blue-600">{expectedMetrics.note.engagement}</span>
                </div>
                <div className="flex justify-between">
                  <span>ピーク時間:</span>
                  <span className="font-medium text-blue-600">{expectedMetrics.note.timeframe}</span>
                </div>
              </div>
            </div>

            {/* Reddit予想 */}
            <div className="p-4 bg-white rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">🔴 Reddit予想</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>ビュー数:</span>
                  <span className="font-medium text-purple-600">{expectedMetrics.reddit.views}</span>
                </div>
                <div className="flex justify-between">
                  <span>エンゲージメント:</span>
                  <span className="font-medium text-purple-600">{expectedMetrics.reddit.engagement}</span>
                </div>
                <div className="flex justify-between">
                  <span>ピーク時間:</span>
                  <span className="font-medium text-purple-600">{expectedMetrics.reddit.timeframe}</span>
                </div>
              </div>
            </div>

            {/* 総合予想 */}
            <div className="p-4 bg-white rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">🌍 総合予想</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>新規ユーザー:</span>
                  <span className="font-medium text-green-600">{expectedMetrics.total.users}</span>
                </div>
                <div className="flex justify-between">
                  <span>コンバージョン:</span>
                  <span className="font-medium text-green-600">{expectedMetrics.total.conversions}</span>
                </div>
                <div className="flex justify-between">
                  <span>バイラル可能性:</span>
                  <span className="font-medium text-green-600">{expectedMetrics.total.viral}</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 次のアクション計画 */}
      <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-orange-800">
            <Target className="w-6 h-6" />🎯 次の24時間アクションプラン
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {/* 即座にやること */}
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                <Zap className="w-5 h-5" />🚨 即座にやること（1-2時間以内）
              </h4>
              <ul className="space-y-2 text-sm text-red-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  投稿のパフォーマンスを1時間ごとにチェック
                </li>
                <li className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  コメントや質問に迅速に返信
                </li>
                <li className="flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Twitter/Xで投稿をクロスプロモーション
                </li>
                <li className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  友人・知人にシェアを依頼
                </li>
              </ul>
            </div>

            {/* 6時間以内 */}
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <h4 className="font-semibold text-yellow-800 mb-3">⏰ 6時間以内</h4>
              <ul className="space-y-1 text-sm text-yellow-700">
                <li>• Instagram Stories で投稿を紹介</li>
                <li>• 関連するFacebookグループに投稿</li>
                <li>• LinkedInで専門的な角度から投稿</li>
                <li>• 初期反応を分析してタイトル最適化</li>
              </ul>
            </div>

            {/* 24時間以内 */}
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3">📅 24時間以内</h4>
              <ul className="space-y-1 text-sm text-green-700">
                <li>• TikTok動画版を作成・投稿</li>
                <li>• YouTube Shorts で解説動画</li>
                <li>• 他のRedditコミュニティにも展開</li>
                <li>• 反応の良いコメントをまとめて追加投稿</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* バイラル成功の兆候 */}
      <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Globe className="w-6 h-6" />🌟 バイラル成功の兆候をチェック
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold mb-3">✅ 良い兆候</h4>
              <ul className="space-y-1 text-sm">
                <li>• コメント数 > ビュー数の5%</li>
                <li>• シェア数が急激に増加</li>
                <li>• 他言語でのコメント出現</li>
                <li>• インフルエンサーの反応</li>
                <li>• メディアからの問い合わせ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">🚀 バイラル確定サイン</h4>
              <ul className="space-y-1 text-sm">
                <li>• 1時間で100+エンゲージメント</li>
                <li>• 他プラットフォームで言及</li>
                <li>• ニュースサイトで取り上げ</li>
                <li>• 海外からのアクセス急増</li>
                <li>• パロディ・模倣投稿の出現</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 成功確率メーター */}
      <Card className="border-2 border-gold bg-gradient-to-br from-yellow-50 to-orange-50">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-orange-800">🎯 バイラル成功確率</h3>
            <div className="text-6xl font-bold text-orange-600">78%</div>
            <Progress value={78} className="w-full h-4" />
            ull h-4" /> ull h-4" />
            <p className="text-orange-700">
              note + Reddit の組み合わせは<strong>非常に効果的</strong>！<br />
              次の24時間が勝負です 🔥
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
