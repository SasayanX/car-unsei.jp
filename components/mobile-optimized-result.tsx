"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Smartphone, Monitor } from "lucide-react"

interface MobileOptimizedResultProps {
  score: number
  address: string
}

export function MobileOptimizedResult({ score, address }: MobileOptimizedResultProps) {
  return (
    <div className="md:hidden space-y-4">
      {/* スマホ専用の軽量な結果表示 */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
        <CardContent className="p-4">
          <div className="text-center space-y-2">
            <Smartphone className="w-6 h-6 mx-auto text-blue-600" />
            <h3 className="font-semibold text-blue-800 dark:text-blue-200">スマホ最適化表示</h3>
            <p className="text-sm text-blue-700 dark:text-blue-300">快適な診断体験のため、広告を最小限に抑えています</p>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-600 dark:text-gray-400 mt-3">
              <Monitor className="w-4 h-4" />
              <span>詳細情報は大画面でご覧ください</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
