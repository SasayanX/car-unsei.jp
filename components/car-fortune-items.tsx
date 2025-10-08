"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getCarFortuneItem, getCategoryColor, getAmazonSearchUrl } from "../data/car-fortune-items"
import { Sparkles, Car, Target, Gift, ExternalLink } from "lucide-react"

interface CarFortuneItemsProps {
  score: number
}

export function CarFortuneItems({ score }: CarFortuneItemsProps) {
  const item = getCarFortuneItem(score)

  const getScoreMessage = (score: number) => {
    if (score >= 90) {
      return "伝説級の運勢です！最強の愛車開運アイテムをご紹介します。"
    } else if (score >= 80) {
      return "素晴らしい運勢です！さらなる交通安全と運気向上のアイテムをどうぞ。"
    } else if (score >= 70) {
      return "とても良い運勢です！安全運転と運気アップアイテムがおすすめです。"
    } else if (score >= 60) {
      return "良い運勢です。縁起の良いカーアイテムで運気を維持しましょう。"
    } else if (score >= 50) {
      return "運勢は普通です。車内のエネルギーを整えるアイテムがおすすめです。"
    } else if (score >= 40) {
      return "運気改善のチャンスです。浄化アイテムで車内環境を整えましょう。"
    } else if (score >= 30) {
      return "運気向上が必要です。強力な浄化アイテムをお試しください。"
    } else {
      return "運気の大幅改善が必要です。幸福を呼ぶカーアイテムから始めましょう。"
    }
  }

  const handleAmazonSearch = () => {
    if (item.searchKeyword) {
      const url = getAmazonSearchUrl(item.searchKeyword)
      window.open(url, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-yellow-500" />
          おすすめ愛車運気アップアイテム
        </CardTitle>
        <p className="text-sm text-gray-600">{getScoreMessage(score)}</p>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {/* メインアイテム */}
          <div className="p-6 rounded-lg border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
            {/* 背景装飾 */}
            <div className="absolute top-2 right-2 opacity-20">
              <Gift className="w-16 h-16 text-blue-600" />
            </div>

            <div className="relative z-10">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-4xl">{item.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-800">{item.name}</h3>
                      {item.searchKeyword && (
                        <Button
                          onClick={handleAmazonSearch}
                          size="sm"
                          className="bg-orange-500 hover:bg-orange-600 text-white text-xs px-3 py-1 h-auto"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Amazonで探す
                        </Button>
                      )}
                    </div>
                    <Badge className={`${getCategoryColor(item.category)} text-sm`}>{item.category}</Badge>
                  </div>
                </div>
                <Badge className="bg-blue-200 text-blue-800 border-blue-400 text-sm font-semibold px-3 py-1 ml-2">
                  ✨ 特におすすめ
                </Badge>
              </div>

              <p className="text-gray-700 mb-4 text-lg leading-relaxed">{item.description}</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                  <Car className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-blue-600 block mb-1">おすすめの設置場所</span>
                    <p className="text-sm text-gray-700">{item.placement}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white/60 rounded-lg">
                  <Target className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="text-sm font-semibold text-green-600 block mb-1">期待できる効果</span>
                    <p className="text-sm text-gray-700">{item.effect}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* アドバイス */}
          <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">💡 愛車運気アップのコツ</h4>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• アイテムは清潔に保ち、感謝の気持ちを込めて扱いましょう</li>
              <li>• 定期的にお手入れをして、良い状態を維持してください</li>
              <li>• 車内は整理整頓を心がけ、清潔な環境を保ちましょう</li>
              <li>• 安全運転を心がけ、ポジティブな気持ちで運転することが大切です</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
