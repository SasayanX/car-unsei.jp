"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Clock, CheckCircle, XCircle, RefreshCw, ExternalLink } from "lucide-react"

export function AdSenseStatusTracker() {
  const [applicationDate] = useState(new Date()) // 申し込み日
  const [daysSinceApplication, setDaysSinceApplication] = useState(0)
  const [estimatedDaysRemaining, setEstimatedDaysRemaining] = useState(14)
  const [currentStatus, setCurrentStatus] = useState<"pending" | "approved" | "rejected">("pending")

  useEffect(() => {
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - applicationDate.getTime())
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    setDaysSinceApplication(diffDays)
    setEstimatedDaysRemaining(Math.max(0, 14 - diffDays))
  }, [applicationDate])

  const getStatusIcon = () => {
    switch (currentStatus) {
      case "pending":
        return <Clock className="w-6 h-6 text-yellow-600" />
      case "approved":
        return <CheckCircle className="w-6 h-6 text-green-600" />
      case "rejected":
        return <XCircle className="w-6 h-6 text-red-600" />
    }
  }

  const getStatusColor = () => {
    switch (currentStatus) {
      case "pending":
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      case "approved":
        return "bg-green-100 text-green-800 border-green-300"
      case "rejected":
        return "bg-red-100 text-red-800 border-red-300"
    }
  }

  const getStatusMessage = () => {
    switch (currentStatus) {
      case "pending":
        return `審査中... あと${estimatedDaysRemaining}日程度で結果が出る予定です`
      case "approved":
        return "おめでとうございます！審査に通過しました"
      case "rejected":
        return "審査に通りませんでした。改善後に再申請できます"
    }
  }

  const progressPercentage = Math.min((daysSinceApplication / 14) * 100, 100)

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-gray-800">
          {getStatusIcon()}
          AdSense実装状況
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <Badge className="bg-green-100 text-green-800 border-green-300 text-lg px-4 py-2 mb-2">✅ 実装完了</Badge>
          <p className="text-sm text-gray-600">AdSenseコードが正常に実装されました</p>
        </div>

        {/* 実装状況 */}
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-800">🛠️ 実装チェックリスト</h4>

          <div className="space-y-2">
            <div className="flex items-center justify-between p-2 bg-green-50 rounded border border-green-200">
              <span className="text-sm">AdSenseスクリプト</span>
              <Badge className="bg-green-200 text-green-800 text-xs">✅ 完了</Badge>
            </div>

            <div className="flex items-center justify-between p-2 bg-green-50 rounded border border-green-200">
              <span className="text-sm">パブリッシャーID</span>
              <Badge className="bg-green-200 text-green-800 text-xs">✅ 設定済み</Badge>
            </div>

            <div className="flex items-center justify-between p-2 bg-green-50 rounded border border-green-200">
              <span className="text-sm">ads.txtファイル</span>
              <Badge className="bg-green-200 text-green-800 text-xs">✅ 配置済み</Badge>
            </div>

            <div className="flex items-center justify-between p-2 bg-green-50 rounded border border-green-200">
              <span className="text-sm">広告配置</span>
              <Badge className="bg-green-200 text-green-800 text-xs">✅ 4箇所配置</Badge>
            </div>
          </div>
        </div>

        {/* パブリッシャー情報 */}
        <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-2">📊 設定情報</h4>
          <div className="text-sm text-blue-700 space-y-1">
            <p>
              <strong>パブリッシャーID:</strong> ca-pub-3409171148853394
            </p>
            <p>
              <strong>広告配置:</strong> 戦略的4箇所
            </p>
            <p>
              <strong>ads.txt:</strong> /ads.txt に配置済み
            </p>
            <p>
              <strong>実装方式:</strong> 手動最適化配置
            </p>
          </div>
        </div>

        {/* 次のステップ */}
        <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
          <h4 className="font-semibold text-yellow-800 mb-2">🚀 次にやること</h4>
          <ul className="text-sm text-yellow-700 space-y-1">
            <li>• AdSense管理画面で広告ユニットを作成</li>
            <li>• 実際の広告スロットIDに更新</li>
            <li>• 本番環境にデプロイして動作確認</li>
            <li>• 収益データの分析開始</li>
          </ul>
        </div>

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => window.open("https://www.google.com/adsense/", "_blank")}
            className="flex-1"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            AdSense管理画面
          </Button>
          <Button variant="outline" size="sm" onClick={() => window.location.reload()}>
            <RefreshCw className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
