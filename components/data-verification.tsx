"use client"

import { fortuneData, fortuneStats } from "../data/fortune-data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function DataVerification() {
  const totalNumbers = Object.keys(fortuneData).length

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle>吉凶表データ検証</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-600">総数字数: {totalNumbers}/81</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {Object.entries(fortuneStats).map(([type, count]) => (
              <div key={type} className="text-center">
                <Badge variant="outline" className="mb-1">
                  {type}
                </Badge>
                <p className="text-lg font-bold">{count}個</p>
              </div>
            ))}
          </div>

          <div className="text-xs text-gray-500">
            <p>OCRデータから抽出した実際の吉凶表に基づいています</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
