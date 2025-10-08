"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Copy, CheckCircle, AlertTriangle, Lightbulb } from "lucide-react"

export function AdImplementationGuide() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const adUnits = [
    {
      id: "result-ad",
      name: "診断結果後広告",
      slot: "1234567890",
      format: "rectangle",
      priority: "最高",
      description: "診断結果表示の3秒後に表示される最も効果的な広告",
    },
    {
      id: "items-ad",
      name: "アイテム後広告",
      slot: "2345678901",
      format: "horizontal",
      priority: "高",
      description: "運気アップアイテム紹介後の購買意欲が高いタイミング",
    },
    {
      id: "footer-ad",
      name: "フッター広告",
      slot: "3456789012",
      format: "auto",
      priority: "中",
      description: "ページ最下部の控えめな配置",
    },
  ]

  const generateAdCode = (adUnit: (typeof adUnits)[0]) => {
    return `{/* ${adUnit.name} */}
<AdSenseAd 
  adSlot="${adUnit.slot}"
  adFormat="${adUnit.format}"
  className="my-6"
  label="おすすめ"
/>`
  }

  const generateComponentCode = () => {
    return `// components/optimized-adsense.tsx
"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface OptimizedAdSenseProps {
  adSlot: string
  adFormat?: "auto" | "rectangle" | "horizontal"
  className?: string
  label?: string
  delayMs?: number // 表示遅延（ミリ秒）
  showOnlyAfterInteraction?: boolean // ユーザー操作後のみ表示
}

export function OptimizedAdSense({ 
  adSlot, 
  adFormat = "auto", 
  className, 
  label,
  delayMs = 0,
  showOnlyAfterInteraction = false
}: OptimizedAdSenseProps) {
  const [shouldShow, setShouldShow] = useState(!showOnlyAfterInteraction && delayMs === 0)
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    // ユーザー操作の検知
    if (showOnlyAfterInteraction) {
      const handleInteraction = () => {
        setHasInteracted(true)
        if (delayMs === 0) setShouldShow(true)
      }

      window.addEventListener('scroll', handleInteraction, { once: true })
      window.addEventListener('click', handleInteraction, { once: true })
      
      return () => {
        window.removeEventListener('scroll', handleInteraction)
        window.removeEventListener('click', handleInteraction)
      }
    }
  }, [showOnlyAfterInteraction, delayMs])

  useEffect(() => {
    // 遅延表示
    if (delayMs > 0 && (!showOnlyAfterInteraction || hasInteracted)) {
      const timer = setTimeout(() => setShouldShow(true), delayMs)
      return () => clearTimeout(timer)
    }
  }, [delayMs, showOnlyAfterInteraction, hasInteracted])

  useEffect(() => {
    // AdSense広告の初期化
    if (shouldShow && typeof window !== 'undefined') {
      try {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
      } catch (error) {
        console.error('AdSense error:', error)
      }
    }
  }, [shouldShow])

  if (!shouldShow) return null

  return (
    <div className={className}>
      {label && (
        <div className="text-center mb-2">
          <Badge variant="outline" className="text-xs text-gray-500">
            {label}
          </Badge>
        </div>
      )}
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  )
}`
  }

  const generateUsageCode = () => {
    return `// app/page.tsx での使用例

{/* 診断結果表示後、3秒遅延で表示 */}
{analysis && (
  <>
    {/* 診断結果 */}
    <Card className="bg-white/80 backdrop-blur-sm">
      <CardContent className="p-8 text-center">
        <div className="text-6xl font-bold text-purple-600">
          {analysis.weightedScore}
        </div>
        {/* ... 結果表示 ... */}
      </CardContent>
    </Card>

    {/* 感動の余韻を残してから広告表示 */}
    <OptimizedAdSense
      adSlot="1234567890"
      adFormat="rectangle"
      className="my-6"
      label="あなたにおすすめ"
      delayMs={3000}
      showOnlyAfterInteraction={true}
    />

    {/* 運気アップアイテム */}
    <FortuneItems score={analysis.weightedScore} />

    {/* 購買意欲が高まったタイミングで広告 */}
    <OptimizedAdSense
      adSlot="2345678901"
      adFormat="horizontal"
      className="my-6"
      label="関連商品"
    />
  </>
)}`
  }

  return (
    <div className="space-y-6">
      <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
            <Code className="w-6 h-6" />
            🛠️ 手動広告の実装ガイド
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-blue-800 dark:text-blue-200">スマートな実装方針</span>
              </div>
              <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                <li>• ユーザーの感情が高まったタイミングで表示</li>
                <li>• 遅延表示でユーザー体験を保護</li>
                <li>• インタラクション後のみ表示オプション</li>
                <li>• 自然なラベル付きで広告感を軽減</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white/80 dark:bg-gray-800/90 backdrop-blur-sm border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-gray-800 dark:text-gray-100">実装コード</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="component" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="component">コンポーネント</TabsTrigger>
              <TabsTrigger value="usage">使用方法</TabsTrigger>
              <TabsTrigger value="units">広告ユニット</TabsTrigger>
            </TabsList>

            <TabsContent value="component" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">最適化されたAdSenseコンポーネント</h4>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(generateComponentCode(), "component")}
                  >
                    {copiedCode === "component" ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copiedCode === "component" ? "コピー済み" : "コピー"}
                  </Button>
                </div>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto">
                  <pre>{generateComponentCode()}</pre>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="usage" className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-800 dark:text-gray-100">実際の使用例</h4>
                  <Button size="sm" variant="outline" onClick={() => copyToClipboard(generateUsageCode(), "usage")}>
                    {copiedCode === "usage" ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copiedCode === "usage" ? "コピー済み" : "コピー"}
                  </Button>
                </div>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg text-sm font-mono overflow-x-auto">
                  <pre>{generateUsageCode()}</pre>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="units" className="space-y-4">
              <div className="space-y-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-100">推奨広告ユニット設定</h4>
                <div className="space-y-3">
                  {adUnits.map((unit) => (
                    <div key={unit.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h5 className="font-medium text-gray-800 dark:text-gray-100">{unit.name}</h5>
                          <p className="text-sm text-gray-600 dark:text-gray-300">{unit.description}</p>
                        </div>
                        <Badge
                          className={
                            unit.priority === "最高"
                              ? "bg-red-100 text-red-800"
                              : unit.priority === "高"
                                ? "bg-orange-100 text-orange-800"
                                : "bg-yellow-100 text-yellow-800"
                          }
                        >
                          {unit.priority}
                        </Badge>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          スロット: {unit.slot} | 形式: {unit.format}
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => copyToClipboard(generateAdCode(unit), unit.id)}
                        >
                          {copiedCode === unit.id ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* 注意事項 */}
      <Card className="bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800">
        <CardContent className="p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1" />
            <div>
              <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">⚠️ 実装時の注意点</h4>
              <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                <li>• パブリッシャーIDを実際のIDに変更してください</li>
                <li>• 広告スロットIDはAdSense管理画面で作成したものを使用</li>
                <li>• 最初は1つの広告から始めて、効果を測定しながら追加</li>
                <li>• ユーザーフィードバックを常に監視</li>
                <li>• AdSenseポリシーを遵守してください</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Default export
export default AdImplementationGuide
