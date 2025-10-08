"use client"

import { Moon, Sun, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useTheme } from "./theme-provider"

export function ThemeToggle() {
  const { theme, setTheme, actualTheme } = useTheme()

  const themes = [
    {
      value: "light" as const,
      label: "ライト",
      icon: Sun,
      description: "明るいテーマ",
    },
    {
      value: "dark" as const,
      label: "ダーク",
      icon: Moon,
      description: "暗いテーマ",
    },
    {
      value: "system" as const,
      label: "システム",
      icon: Monitor,
      description: "端末設定に従う",
    },
  ]

  return (
    <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-lg">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">🎨 テーマ設定</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">お好みの表示モードを選択してください</p>
            <Badge
              className={`mt-2 ${
                actualTheme === "dark"
                  ? "bg-gray-700 text-gray-100 border-gray-600"
                  : "bg-gray-100 text-gray-800 border-gray-300"
              }`}
            >
              現在: {actualTheme === "dark" ? "ダークモード" : "ライトモード"}
            </Badge>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {themes.map((themeOption) => {
              const Icon = themeOption.icon
              const isActive = theme === themeOption.value

              return (
                <Button
                  key={themeOption.value}
                  variant={isActive ? "default" : "outline"}
                  onClick={() => setTheme(themeOption.value)}
                  className={`flex flex-col items-center gap-2 h-auto py-4 ${
                    isActive
                      ? "bg-purple-600 hover:bg-purple-700 text-white border-purple-600"
                      : "bg-white dark:bg-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-600"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{themeOption.label}</span>
                  <span className="text-xs opacity-75">{themeOption.description}</span>
                </Button>
              )
            })}
          </div>

          {/* テーマプレビュー */}
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600">
            <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">プレビュー</h4>
            <div className="space-y-2">
              <div className="p-3 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-600">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg font-bold text-purple-600 dark:text-purple-400">95</span>
                  <Badge className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 border-red-300 dark:border-red-700">
                    大吉
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  この住所はまさにパワースポット！住むだけで運気がどんどん上昇します。
                </p>
              </div>
            </div>
          </div>

          {/* ダークモードの利点 */}
          <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">💡 ダークモードの利点</h4>
            <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
              <li>• 目の疲労を軽減し、長時間の利用が快適</li>
              <li>• 暗い環境での視認性が向上</li>
              <li>• バッテリー消費を抑制（有機ELディスプレイ）</li>
              <li>• モダンで洗練された印象</li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// 簡易版テーマトグルボタン
export function ThemeToggleButton() {
  const { theme, setTheme, actualTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const getIcon = () => {
    switch (theme) {
      case "light":
        return Sun
      case "dark":
        return Moon
      default:
        return Monitor
    }
  }

  const Icon = getIcon()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100"
      title={`現在: ${theme === "system" ? "システム" : theme === "dark" ? "ダーク" : "ライト"}モード`}
    >
      <Icon className="w-5 h-5" />
    </Button>
  )
}
