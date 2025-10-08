"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Target, Users, DollarSign, Heart, Zap, Settings } from "lucide-react"

export function ManualAdStrategy() {
  const [adSettings, setAdSettings] = useState({
    autoAds: false,
    manualAds: true,
    adDensity: 30, // 30% = 控えめ
    userExperienceFirst: true,
    showAfterResult: true,
    showInContent: false,
    showInSidebar: false,
    showInFooter: true,
  })

  const adPlacements = [
    {
      id: "result-top",
      name: "診断結果直後",
      description: "ユーザーが最も関心を持つタイミング",
      effectiveness: "超高",
      userImpact: "低",
      recommended: true,
      timing: "診断完了後3秒",
      format: "レクタングル (336×280)",
    },
    {
      id: "after-items",
      name: "運気アップアイテム後",
      description: "購買意欲が高まった状態",
      effectiveness: "高",
      userImpact: "低",
      recommended: true,
      timing: "アイテム表示後",
      format: "バナー (728×90)",
    },
    {
      id: "content-middle",
      name: "詳細分析の途中",
      description: "コンテンツに自然に溶け込む",
      effectiveness: "中",
      userImpact: "中",
      recommended: false,
      timing: "分析表示中",
      format: "インフィード",
    },
    {
      id: "footer",
      name: "ページ最下部",
      description: "離脱前の最後のチャンス",
      effectiveness: "低",
      userImpact: "極低",
      recommended: true,
      timing: "ページ最下部",
      format: "レスポンシブ",
    },
  ]

  const getEffectivenessColor = (level: string) => {
    switch (level) {
      case "超高":
        return "bg-red-100 text-red-800 border-red-300"
      case "高":
        return "bg-orange-100 text-orange-800 border-orange-300"
      case "中":
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      case "低":
        return "bg-gray-100 text-gray-600 border-gray-300"
      default:
        return "bg-gray-100 text-gray-600 border-gray-300"
    }
  }

  const getUserImpactColor = (level: string) => {
    switch (level) {
      case "極低":
        return "bg-green-100 text-green-800 border-green-300"
      case "低":
        return "bg-green-100 text-green-800 border-green-300"
      case "中":
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      case "高":
        return "bg-red-100 text-red-800 border-red-300"
      default:
        return "bg-gray-100 text-gray-600 border-gray-300"
    }
  }

  const calculateRevenue = () => {
    const baseRevenue = 50000 // 月間基準収益（円）
    const densityMultiplier = adSettings.adDensity / 100
    const qualityMultiplier = adSettings.userExperienceFirst ? 1.2 : 0.8 // UX重視で実は収益UP
    const manualMultiplier = adSettings.manualAds ? 1.5 : 1.0 // 手動配置の方が効果的

    return Math.round(baseRevenue * densityMultiplier * qualityMultiplier * manualMultiplier)
  }

  return (
    <div className="space-y-6">
      {/* 現在の設定状況 */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-200 dark:border-blue-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800 dark:text-blue-200">
            <Settings className="w-6 h-6" />🎯 最適な広告戦略（自動広告OFF推奨）
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-700">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-green-800 dark:text-green-200">正解です！</span>
              </div>
              <p className="text-sm text-green-700 dark:text-green-300">
                自動広告をOFFにしたのは大正解！手動配置の方がユーザー体験も収益も向上します。
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/60 dark:bg-gray-700/60 rounded-lg">
                <Users className="w-8 h-8 mx-auto text-blue-600 mb-2" />
                <div className="text-2xl font-bold text-blue-600">95%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">ユーザー満足度</div>
                <div className="text-xs text-green-600 mt-1">手動配置時</div>
              </div>
              <div className="text-center p-4 bg-white/60 dark:bg-gray-700/60 rounded-lg">
                <DollarSign className="w-8 h-8 mx-auto text-green-600 mb-2" />
                <div className="text-2xl font-bold text-green-600">¥{calculateRevenue().toLocaleString()}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">予想月収</div>
                <div className="text-xs text-green-600 mt-1">最適化後</div>
              </div>
              <div className="text-center p-4 bg-white/60 dark:bg-gray-700/60 rounded-lg">
                <Target className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                <div className="text-2xl font-bold text-purple-600">3.2%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">予想CTR</div>
                <div className="text-xs text-green-600 mt-1">手動最適化</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 広告設定コントロール */}
      <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-800 dark:text-gray-100">
            <Zap className="w-5 h-5" />
            広告設定の最適化
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="strategy" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="strategy">戦略</TabsTrigger>
              <TabsTrigger value="placements">配置</TabsTrigger>
              <TabsTrigger value="settings">設定</TabsTrigger>
            </TabsList>

            <TabsContent value="strategy" className="space-y-4">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100">🧠 なぜ手動配置が優れているか</h4>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg border border-red-200 dark:border-red-700">
                    <h5 className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ 自動広告の問題点</h5>
                    <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                      <li>• 広告だらけでユーザー体験が悪化</li>
                      <li>• 診断の感動的な瞬間を台無しに</li>
                      <li>• 文化創造の妨げになる</li>
                      <li>• 離脱率が大幅に増加</li>
                      <li>• ブランドイメージの悪化</li>
                    </ul>
                  </div>

                  <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-700">
                    <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ 手動配置の利点</h5>
                    <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                      <li>• ユーザー体験を最優先</li>
                      <li>• 感情が高まったタイミングで表示</li>
                      <li>• 文化拡散を促進</li>
                      <li>• 高いCTRと収益性</li>
                      <li>• ブランド価値の向上</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
                  <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    🎯 最適戦略: 「感情連動型広告配置」
                  </h5>
                  <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                    ユーザーの感情が最も高まったタイミングで、関連性の高い広告を自然に表示
                  </p>
                  <div className="text-xs text-blue-600 dark:text-blue-400 space-y-1">
                    <div>1. 診断結果発表 → 感動・興奮 → 関連商品広告</div>
                    <div>2. 運気アップアイテム紹介 → 購買意欲 → Amazon・楽天広告</div>
                    <div>3. シェア完了 → 満足感 → 次回利用促進広告</div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="placements" className="space-y-4">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100">📍 推奨広告配置</h4>

                <div className="space-y-3">
                  {adPlacements.map((placement) => (
                    <div
                      key={placement.id}
                      className={`p-4 rounded-lg border ${
                        placement.recommended
                          ? "bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-700"
                          : "bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h5 className="font-semibold text-gray-800 dark:text-gray-100">{placement.name}</h5>
                            {placement.recommended && (
                              <Badge className="bg-green-200 text-green-800 text-xs">推奨</Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{placement.description}</p>
                          <div className="flex items-center gap-4 text-xs">
                            <span className="text-gray-500 dark:text-gray-400">タイミング: {placement.timing}</span>
                            <span className="text-gray-500 dark:text-gray-400">形式: {placement.format}</span>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 ml-4">
                          <Badge className={getEffectivenessColor(placement.effectiveness)}>
                            効果: {placement.effectiveness}
                          </Badge>
                          <Badge className={getUserImpactColor(placement.userImpact)}>
                            影響: {placement.userImpact}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-4">
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium text-gray-800 dark:text-gray-100">自動広告</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">Google AdSenseの自動配置</p>
                    </div>
                    <Switch
                      checked={adSettings.autoAds}
                      onCheckedChange={(checked) => setAdSettings({ ...adSettings, autoAds: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium text-gray-800 dark:text-gray-100">手動広告</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">戦略的な手動配置</p>
                    </div>
                    <Switch
                      checked={adSettings.manualAds}
                      onCheckedChange={(checked) => setAdSettings({ ...adSettings, manualAds: checked })}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium text-gray-800 dark:text-gray-100">ユーザー体験優先</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">収益よりもUXを重視</p>
                    </div>
                    <Switch
                      checked={adSettings.userExperienceFirst}
                      onCheckedChange={(checked) => setAdSettings({ ...adSettings, userExperienceFirst: checked })}
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium text-gray-800 dark:text-gray-100">広告密度</h5>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{adSettings.adDensity}%</span>
                    </div>
                    <Slider
                      value={[adSettings.adDensity]}
                      onValueChange={(value) => setAdSettings({ ...adSettings, adDensity: value[0] })}
                      max={100}
                      min={0}
                      step={10}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <span>控えめ</span>
                      <span>バランス</span>
                      <span>積極的</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg border border-purple-200 dark:border-purple-700">
                  <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-2">💡 推奨設定</h5>
                  <ul className="text-sm text-purple-700 dark:text-purple-300 space-y-1">
                    <li>• 自動広告: OFF（ユーザー体験重視）</li>
                    <li>• 手動広告: ON（戦略的配置）</li>
                    <li>• 広告密度: 30-50%（控えめ〜バランス）</li>
                    <li>• ユーザー体験優先: ON（文化創造重視）</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* 実装ガイド */}
      <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-yellow-200 dark:border-yellow-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
            <Target className="w-5 h-5" />
            実装の次ステップ
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-white/60 dark:bg-gray-700/60 rounded-lg">
                <h5 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">🎯 今すぐ実装</h5>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• 診断結果直後に1つだけ広告配置</li>
                  <li>• レクタングル形式（336×280）推奨</li>
                  <li>• 「おすすめ」ラベル付きで自然に</li>
                  <li>• A/Bテストで効果測定</li>
                </ul>
              </div>

              <div className="p-4 bg-white/60 dark:bg-gray-700/60 rounded-lg">
                <h5 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">📈 段階的拡張</h5>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• ユーザー反応を見ながら追加</li>
                  <li>• 運気アップアイテム後に2つ目</li>
                  <li>• フッターに控えめに3つ目</li>
                  <li>• 常にUX {">"} 収益の優先順位</li>
                </ul>
              </div>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border border-green-200 dark:border-green-700">
              <h5 className="font-semibold text-green-800 dark:text-green-200 mb-2">🏆 成功の秘訣</h5>
              <p className="text-sm text-green-700 dark:text-green-300">
                「住まい運勢チェッカー」は文化創造アプリです。ユーザーが感動し、友達にシェアしたくなる体験を提供することで、
                結果的に収益も最大化されます。広告は「価値ある情報の一部」として自然に溶け込ませましょう。
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Default export
export default ManualAdStrategy
