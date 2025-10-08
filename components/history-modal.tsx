"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { historyStorage, type HistoryItem } from "../utils/storage"
import { getFortuneComment } from "../data/fortune-data"
import { getScoreColor } from "../utils/fortune-colors"
import { X, Trash2, Clock, RotateCcw } from "lucide-react"

interface HistoryModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectAddress: (address: string) => void
}

export function HistoryModal({ isOpen, onClose, onSelectAddress }: HistoryModalProps) {
  const [history, setHistory] = useState<HistoryItem[]>([])

  useEffect(() => {
    if (isOpen) {
      setHistory(historyStorage.getAll())
    }
  }, [isOpen])

  const handleDelete = (id: string) => {
    historyStorage.remove(id)
    setHistory(historyStorage.getAll())
  }

  const handleClearAll = () => {
    if (confirm("全ての履歴を削除しますか？")) {
      historyStorage.clear()
      setHistory([])
    }
  }

  const handleSelectAddress = (address: string) => {
    onSelectAddress(address)
    onClose()
  }

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString("ja-JP", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <Card className="w-full max-w-2xl max-h-[80vh] overflow-hidden">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600" />
            診断履歴
          </CardTitle>
          <div className="flex gap-2">
            {history.length > 0 && (
              <Button variant="outline" size="sm" onClick={handleClearAll}>
                <Trash2 className="w-4 h-4 mr-1" />
                全削除
              </Button>
            )}
            <Button variant="outline" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="overflow-y-auto max-h-[60vh]">
          {history.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Clock className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>まだ診断履歴がありません</p>
              <p className="text-sm">住所を診断すると履歴が表示されます</p>
            </div>
          ) : (
            <div className="space-y-4">
              {history.map((item) => {
                const comment = getFortuneComment(item.analysis.weightedScore)
                const scoreColors = getScoreColor(item.analysis.weightedScore)
                return (
                  <div key={item.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{item.address}</h3>
                        <p className="text-sm text-gray-500">{formatDate(item.timestamp)}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-purple-600">{item.analysis.weightedScore}点</div>
                          <Badge className={`${scoreColors.full} border font-medium text-sm`}>
                            {comment.title.split("・")[0]}
                          </Badge>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleDelete(item.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleSelectAddress(item.address)}
                        className="flex items-center gap-1"
                      >
                        <RotateCcw className="w-4 h-4" />
                        再診断
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
