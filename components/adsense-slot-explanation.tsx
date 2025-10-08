"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, DollarSign, Settings } from "lucide-react"

export function AdSenseSlotExplanation() {
  return (
    <div className="space-y-6">
      {/* 現在の状況 */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-blue-800">
            <Settings className="w-6 h-6" />
            現在の AdSense 設定状況
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <div className="font-semibold text-green-800">パブリッシャーID</div>
                <div className="text-sm text-green-600">ca-pub-3409171148853394</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <div className="font-semibold text-green-800">ads.txt</div>
                <div className="text-sm text-green-600">設置済み</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <div className="font-semibold text-green-800">広告配置</div>
                <div className="text-sm text-green-600">4箇所実装済み</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              <div>
                <div className="font-semibold text-yellow-800">スロットID</div>
                <div className="text-sm text-yellow-600">仮のIDを使用中</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* スロットIDの必要性 */}
      <Card className="bg-white border-gray-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-gray-800">
            <DollarSign className="w-6 h-6 text-green-600" />
            スロットIDは必要？不要？
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 結論 */}
          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
            <h3 className="font-bold text-green-800 mb-2">📊 結論：どちらでも収益化可能！</h3>
            <p className="text-green-700">
              現在の設定でも広告は表示され、収益化は始まります。 ただし、スロットIDを設定すると
              <strong>より詳細な分析と最適化</strong>が可能になります。
            </p>
          </div>

          {/* 比較表 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 現在の設定 */}
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-3">🔵 現在の設定（自動広告）</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>広告は自動で表示される</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>収益化は開始される</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>設定が簡単</span>
                </div>
                <div className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-yellow-600" />
                  <span>詳細分析は限定的</span>
                </div>
              </div>
            </div>

            {/* スロットID設定後 */}
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-800 mb-3">🟢 スロットID設定後</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>広告配置を完全制御</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>詳細な収益分析</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>A/Bテスト可能</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>収益最適化しやすい</span>
                </div>
              </div>
            </div>
          </div>

          {/* 推奨アクション */}
          <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200">
            <h3 className="font-bold text-purple-800 mb-2">🚀 推奨アクション</h3>
            <div className="space-y-2 text-purple-700">
              <p>
                <strong>今すぐ：</strong> 現在の設定でデプロイして収益化開始
              </p>
              <p>
                <strong>後で：</strong> 時間があるときにスロットIDを設定して最適化
              </p>
              <p>
                <strong>優先度：</strong> まずは文化拡散とユーザー獲得が最重要！
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 次のステップ */}
      <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
        <CardHeader>
          <CardTitle className="text-orange-800">🎯 次にやること</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
              <Badge className="bg-red-500 text-white">1</Badge>
              <div>
                <div className="font-semibold">本番デプロイ</div>
                <div className="text-sm text-gray-600">現在の設定で収益化開始</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
              <Badge className="bg-orange-500 text-white">2</Badge>
              <div>
                <div className="font-semibold">マーケティング開始</div>
                <div className="text-sm text-gray-600">SNSで文化拡散活動</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
              <Badge className="bg-yellow-500 text-white">3</Badge>
              <div>
                <div className="font-semibold">ユーザー獲得</div>
                <div className="text-sm text-gray-600">友達紹介機能活用</div>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 bg-white rounded-lg border">
              <Badge className="bg-green-500 text-white">4</Badge>
              <div>
                <div className="font-semibold">スロットID最適化</div>
                <div className="text-sm text-gray-600">余裕があるときに実施</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
