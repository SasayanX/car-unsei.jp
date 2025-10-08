"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, DollarSign, Target, TrendingUp } from "lucide-react"

export function A8AffiliateGuide() {
  return (
    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border-green-200 dark:border-green-700">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
          <DollarSign className="w-5 h-5" />
          A8.net アフィリエイト実装ガイド
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* ステップ1: A8.net登録 */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
              1
            </span>
            A8.net に登録
          </h3>
          <div className="pl-8 space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-300">日本最大級のアフィリエイトサービスに無料登録</p>
            <Button
              onClick={() => window.open("https://www.a8.net/", "_blank")}
              className="bg-green-500 hover:bg-green-600 text-white"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              A8.net 公式サイト
            </Button>
          </div>
        </div>

        {/* ステップ2: プログラム検索 */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
              2
            </span>
            おすすめプログラムを検索
          </h3>
          <div className="pl-8 space-y-3">
            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-3 bg-white dark:bg-gray-700 rounded-lg border">
                <h4 className="font-medium text-orange-600 dark:text-orange-400">🏠 不動産系</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 mt-1 space-y-1">
                  <li>• SUUMO（成果報酬：500-2000円）</li>
                  <li>• HOME'S（成果報酬：300-1500円）</li>
                  <li>• アパマンショップ</li>
                  <li>• エイブル</li>
                </ul>
              </div>
              <div className="p-3 bg-white dark:bg-gray-700 rounded-lg border">
                <h4 className="font-medium text-blue-600 dark:text-blue-400">🚚 引っ越し系</h4>
                <ul className="text-sm text-gray-600 dark:text-gray-300 mt-1 space-y-1">
                  <li>• 引っ越し侍（成果報酬：1000-3000円）</li>
                  <li>• サカイ引越センター</li>
                  <li>• アート引越センター</li>
                  <li>• SUUMO引っ越し</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ステップ3: 提携申請 */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
              3
            </span>
            提携申請のコツ
          </h3>
          <div className="pl-8 space-y-2">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
              <p className="text-sm text-blue-800 dark:text-blue-200">
                <strong>申請時のポイント：</strong>
                <br />
                「住所診断アプリで不動産・引っ越しに興味のあるユーザーに適切に紹介します」
              </p>
            </div>
          </div>
        </div>

        {/* ステップ4: 実装方法 */}
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
              4
            </span>
            実装のベストプラクティス
          </h3>
          <div className="pl-8 space-y-3">
            <div className="space-y-2">
              <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
                <Target className="w-3 h-3 mr-1" />
                スコア別最適化
              </Badge>
              <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>
                  • <strong>高スコア（80+）：</strong>投資用不動産、高級賃貸
                </li>
                <li>
                  • <strong>中スコア（60-79）：</strong>一般賃貸、住み替え
                </li>
                <li>
                  • <strong>低スコア（-59）：</strong>引っ越し、運気改善
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 収益予測 */}
        <div className="p-4 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg border border-green-200 dark:border-green-700">
          <h4 className="font-semibold text-green-800 dark:text-green-200 flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4" />
            収益予測（月間1000診断の場合）
          </h4>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div>
              <div className="text-lg font-bold text-green-600 dark:text-green-400">5-10件</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">成約予想</div>
            </div>
            <div>
              <div className="text-lg font-bold text-green-600 dark:text-green-400">1-2%</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">コンバージョン率</div>
            </div>
            <div>
              <div className="text-lg font-bold text-green-600 dark:text-green-400">5,000-15,000円</div>
              <div className="text-xs text-gray-600 dark:text-gray-400">月間収益予想</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
