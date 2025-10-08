"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Users, Plus, Trash2, Share2 } from "lucide-react"
import { analyzeAddress } from "../utils/address-analyzer"
import { getFortuneComment } from "../data/fortune-data"

interface GroupMember {
  id: string
  name: string
  address: string
  score?: number
  rank?: number
}

export function GroupDiagnosis() {
  const [groupMembers, setGroupMembers] = useState<GroupMember[]>([])
  const [newMemberName, setNewMemberName] = useState("")
  const [newMemberAddress, setNewMemberAddress] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [groupResults, setGroupResults] = useState<GroupMember[]>([])

  const addMember = () => {
    if (!newMemberName.trim() || !newMemberAddress.trim()) return

    const newMember: GroupMember = {
      id: Date.now().toString(),
      name: newMemberName.trim(),
      address: newMemberAddress.trim(),
    }

    setGroupMembers([...groupMembers, newMember])
    setNewMemberName("")
    setNewMemberAddress("")
  }

  const removeMember = (id: string) => {
    setGroupMembers(groupMembers.filter((member) => member.id !== id))
  }

  const analyzeGroup = async () => {
    if (groupMembers.length === 0) return

    setIsAnalyzing(true)

    // 各メンバーの診断を実行
    const results = await Promise.all(
      groupMembers.map(async (member) => {
        await new Promise((resolve) => setTimeout(resolve, 500)) // 演出用の遅延
        const analysis = analyzeAddress(member.address)
        return {
          ...member,
          score: analysis.weightedScore,
        }
      }),
    )

    // スコア順にソートしてランキング作成
    const sortedResults = results
      .sort((a, b) => (b.score || 0) - (a.score || 0))
      .map((member, index) => ({
        ...member,
        rank: index + 1,
      }))

    setGroupResults(sortedResults)
    setIsAnalyzing(false)
  }

  const generateGroupShareMessage = () => {
    if (groupResults.length === 0) return ""

    const winner = groupResults[0]
    const memberList = groupResults.map((member) => `${member.rank}位: ${member.name} (${member.score}点)`).join("\n")

    return `🏆 住まい運勢バトル結果発表！

👑 優勝: ${winner.name} (${winner.score}点)

📊 全体結果:
${memberList}

みんなで住所診断を楽しみました！
あなたも参加してみませんか？

#住まい運勢チェッカー #住所診断バトル #新文化

${window.location.origin}`
  }

  const shareGroupResults = async () => {
    const message = generateGroupShareMessage()

    if (navigator.share) {
      try {
        await navigator.share({
          title: "住まい運勢バトル結果",
          text: message,
        })
      } catch (error) {
        console.error("Share failed:", error)
      }
    } else {
      try {
        await navigator.clipboard.writeText(message)
        alert("結果をクリップボードにコピーしました！")
      } catch (error) {
        console.error("Copy failed:", error)
      }
    }
  }

  const getRankEmoji = (rank: number) => {
    switch (rank) {
      case 1:
        return "👑"
      case 2:
        return "🥈"
      case 3:
        return "🥉"
      default:
        return "🏅"
    }
  }

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return "bg-yellow-100 text-yellow-800 border-yellow-300"
      case 2:
        return "bg-gray-100 text-gray-800 border-gray-300"
      case 3:
        return "bg-orange-100 text-orange-800 border-orange-300"
      default:
        return "bg-blue-100 text-blue-800 border-blue-300"
    }
  }

  return (
    <Card className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
          <Users className="w-6 h-6" />👥 グループ診断バトル
        </CardTitle>
        <p className="text-sm text-green-600 dark:text-green-300">
          友だちや家族と一緒に診断して、誰の住まいが最強か競おう！
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* メンバー追加 */}
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-800 dark:text-gray-100">参加メンバーを追加</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <Input
              placeholder="名前（例: 田中さん）"
              value={newMemberName}
              onChange={(e) => setNewMemberName(e.target.value)}
            />
            <Input
              placeholder="住所（例: 1-2-3）"
              value={newMemberAddress}
              onChange={(e) => setNewMemberAddress(e.target.value)}
            />
            <Button onClick={addMember} disabled={!newMemberName.trim() || !newMemberAddress.trim()}>
              <Plus className="w-4 h-4 mr-1" />
              追加
            </Button>
          </div>
        </div>

        {/* メンバーリスト */}
        {groupMembers.length > 0 && (
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800 dark:text-gray-100">参加メンバー ({groupMembers.length}人)</h4>
            <div className="space-y-2">
              {groupMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between p-3 bg-white/60 dark:bg-gray-700/60 rounded-lg border"
                >
                  <div>
                    <span className="font-medium text-gray-800 dark:text-gray-100">{member.name}</span>
                    <span className="text-sm text-gray-600 dark:text-gray-300 ml-2">{member.address}</span>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => removeMember(member.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 診断実行 */}
        {groupMembers.length > 0 && (
          <div className="text-center">
            <Button
              onClick={analyzeGroup}
              disabled={isAnalyzing}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
            >
              {isAnalyzing ? "診断中..." : `${groupMembers.length}人まとめて診断！`}
            </Button>
          </div>
        )}

        {/* 結果表示 */}
        {groupResults.length > 0 && (
          <div className="space-y-4">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-2">🏆 診断結果発表！</h3>
              <p className="text-green-600 dark:text-green-300">優勝は{groupResults[0].name}さん！</p>
            </div>

            <div className="space-y-3">
              {groupResults.map((member) => {
                const comment = getFortuneComment(member.score || 0)
                return (
                  <div
                    key={member.id}
                    className={`p-4 rounded-lg border ${
                      member.rank === 1
                        ? "bg-yellow-50 dark:bg-yellow-900/30 border-yellow-300 dark:border-yellow-700"
                        : "bg-white/60 dark:bg-gray-700/60 border-gray-200 dark:border-gray-600"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{getRankEmoji(member.rank || 0)}</span>
                        <div>
                          <span className="font-bold text-lg text-gray-800 dark:text-gray-100">{member.name}</span>
                          <div className="text-sm text-gray-600 dark:text-gray-300">{member.address}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{member.score}</div>
                        <Badge className={getRankColor(member.rank || 0)}>{member.rank}位</Badge>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{comment.title}</div>
                  </div>
                )
              })}
            </div>

            {/* シェアボタン */}
            <div className="text-center pt-4">
              <Button onClick={shareGroupResults} className="bg-blue-600 hover:bg-blue-700 text-white">
                <Share2 className="w-4 h-4 mr-2" />
                結果をシェアして自慢しよう！
              </Button>
            </div>
          </div>
        )}

        {/* 使い方のヒント */}
        <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700">
          <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 グループ診断の楽しみ方</h5>
          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
            <li>• 家族全員の住所を比較して最強の部屋を発見</li>
            <li>• 友だちグループで運勢バトル開催</li>
            <li>• 職場の同僚と休憩時間に盛り上がる</li>
            <li>• 結果をSNSでシェアして話題作り</li>
            <li>• 引っ越し候補地を事前にチェック</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}
