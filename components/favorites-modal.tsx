"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { favoriteStorage, type FavoriteItem } from "../utils/storage"
import { getFortuneComment } from "../data/fortune-data"
import { getScoreColor } from "../utils/fortune-colors"
import { X, Trash2, Heart, RotateCcw, Edit3, Save } from "lucide-react"

interface FavoritesModalProps {
  isOpen: boolean
  onClose: () => void
  onSelectAddress: (address: string) => void
}

export function FavoritesModal({ isOpen, onClose, onSelectAddress }: FavoritesModalProps) {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([])
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editNote, setEditNote] = useState("")

  useEffect(() => {
    if (isOpen) {
      setFavorites(favoriteStorage.getAll())
    }
  }, [isOpen])

  const handleDelete = (id: string) => {
    favoriteStorage.remove(id)
    setFavorites(favoriteStorage.getAll())
  }

  const handleSelectAddress = (address: string) => {
    onSelectAddress(address)
    onClose()
  }

  const handleEditNote = (item: FavoriteItem) => {
    setEditingId(item.id)
    setEditNote(item.note || "")
  }

  const handleSaveNote = (item: FavoriteItem) => {
    favoriteStorage.add(item.address, item.analysis, editNote)
    setFavorites(favoriteStorage.getAll())
    setEditingId(null)
    setEditNote("")
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
            <Heart className="w-5 h-5 text-red-600" />
            お気に入り
          </CardTitle>
          <Button variant="outline" size="sm" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent className="overflow-y-auto max-h-[60vh]">
          {favorites.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <Heart className="w-12 h-12 mx-auto mb-4 text-gray-300" />
              <p>まだお気に入りがありません</p>
              <p className="text-sm">診断結果画面でハートボタンを押してお気に入り登録できます</p>
            </div>
          ) : (
            <div className="space-y-4">
              {favorites.map((item) => {
                const comment = getFortuneComment(item.analysis.weightedScore)
                const scoreColors = getScoreColor(item.analysis.weightedScore)
                return (
                  <div key={item.id} className="border rounded-lg p-4 hover:bg-gray-50">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">{item.address}</h3>
                        <p className="text-sm text-gray-500">{formatDate(item.timestamp)}</p>
                        {editingId === item.id ? (
                          <div className="mt-2 flex gap-2">
                            <Input
                              value={editNote}
                              onChange={(e) => setEditNote(e.target.value)}
                              placeholder="メモを入力..."
                              className="text-sm"
                            />
                            <Button size="sm" onClick={() => handleSaveNote(item)}>
                              <Save className="w-4 h-4" />
                            </Button>
                          </div>
                        ) : (
                          item.note && <p className="text-sm text-gray-600 mt-1 italic">"{item.note}"</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-purple-600">{item.analysis.weightedScore}点</div>
                          <Badge className={`${scoreColors.full} border font-medium text-sm`}>
                            {comment.title.split("・")[0]}
                          </Badge>
                        </div>
                        <div className="flex flex-col gap-1">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEditNote(item)}
                            className="text-blue-600 hover:text-blue-700"
                          >
                            <Edit3 className="w-4 h-4" />
                          </Button>
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
