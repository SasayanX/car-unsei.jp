import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, ArrowRight } from "lucide-react"

export function SisterSiteRecommendation() {
  return (
    <Card className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border-purple-200 dark:border-purple-700">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Home className="h-5 w-5 text-purple-600" />
          <span className="text-purple-700 dark:text-purple-300">こちらもおすすめ</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border border-purple-200 dark:border-purple-600">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white">住まい運勢診断</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                住所の数字で運勢を診断。同じ81画理論を使用した姉妹サイト
              </p>
            </div>
            <Link
              href="https://ie-unsei.jp/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-3 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors text-sm"
            >
              診断する
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
            💡 車のナンバーと住所、両方チェックしてより良い運勢を！
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
