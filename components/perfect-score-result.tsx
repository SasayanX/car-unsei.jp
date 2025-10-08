"use client"

import { useEffect, useState, useRef } from "react"
import confetti from "canvas-confetti"
import { motion } from "framer-motion"
import { getFortuneComment } from "@/data/fortune-data"

interface PerfectScoreResultProps {
  score: number
}

export function PerfectScoreResult({ score }: PerfectScoreResultProps) {
  const [showCelebration, setShowCelebration] = useState(false)
  const [opacity, setOpacity] = useState(1)
  const celebrationRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (score >= 100) {
      setShowCelebration(true)

      // キラキラ紙吹雪を発射
      const duration = 5 * 1000
      const animationEnd = Date.now() + duration
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min
      }

      const interval: NodeJS.Timeout = setInterval(() => {
        const timeLeft = animationEnd - Date.now()

        if (timeLeft <= 0) {
          return clearInterval(interval)
        }

        const particleCount = 50 * (timeLeft / duration)

        // 金色と虹色の紙吹雪を発射
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          colors: ["#FFD700", "#FFA500", "#FF8C00"],
        })
        confetti({
          ...defaults,
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          colors: ["#FF0000", "#FF7F00", "#FFFF00", "#00FF00", "#0000FF", "#4B0082", "#9400D3"],
        })
      }, 250)

      return () => {
        clearInterval(interval)
      }
    }
  }, [score])

  useEffect(() => {
    const handleScroll = () => {
      if (celebrationRef.current) {
        const rect = celebrationRef.current.getBoundingClientRect()
        const windowHeight = window.innerHeight
        const visibleHeight = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top)
        const newOpacity = Math.max(0, Math.min(1, visibleHeight / windowHeight))
        setOpacity(newOpacity)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // 初期ロード時に一度実行

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // 100点未満の場合は何も表示しない
  if (score < 100) return null

  const comment = getFortuneComment(score)

  return (
    <>
      {/* 紙吹雪エフェクト */}
      {showCelebration && (
        <motion.div
          className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center"
          style={{ opacity }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1, delay: 4 }}
          onAnimationComplete={() => setShowCelebration(false)}
        >
          <div className="relative w-full h-full">
            {/* キラキラエフェクト */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-yellow-400 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2 + Math.random() * 3,
                  delay: Math.random() * 2,
                }}
              />
            ))}

            {/* 中央のメッセージ */}
            <motion.div
              ref={celebrationRef}
              className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300 p-8 rounded-lg shadow-2xl border-4 border-yellow-500"
              initial={{ scale: 0, rotate: -10 }}
              animate={{
                scale: 1,
                rotate: 0,
                boxShadow: [
                  "0 0 10px 5px rgba(255, 215, 0, 0.3)",
                  "0 0 20px 10px rgba(255, 215, 0, 0.5)",
                  "0 0 10px 5px rgba(255, 215, 0, 0.3)",
                ],
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h2
                className="text-4xl font-bold text-yellow-800 text-center mb-4"
                animate={{
                  textShadow: [
                    "0 0 5px rgba(255, 215, 0, 0.5)",
                    "0 0 10px rgba(255, 215, 0, 0.8)",
                    "0 0 5px rgba(255, 215, 0, 0.5)",
                  ],
                }}
                transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
              >
                🎊 満点達成！ 🎊
              </motion.h2>
              <p className="text-xl text-yellow-700 text-center">
                このナンバーは神域級のパワーナンバー！
                <br />
                特別な幸運が訪れるでしょう！
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}

      {/* 100点満点の特別スコア表示 - 枠なしだが背景ありバージョン */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full max-w-3xl mx-auto mb-8 text-center"
      >
        <div className="relative overflow-hidden p-8 rounded-lg">
          {/* 黄金色の背景 - 枠なし */}
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 via-amber-200 to-yellow-300 animate-golden-pulse opacity-90 rounded-lg"></div>

          {/* 虹色の装飾ボーダー - 7色グラデーション */}
          <div
            className="absolute top-0 left-0 w-full h-2 rounded-t-lg"
            style={{
              background: "linear-gradient(to right, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #6366f1, #a855f7)",
            }}
          ></div>
          <div
            className="absolute bottom-0 left-0 w-full h-2 rounded-b-lg"
            style={{
              background: "linear-gradient(to left, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #6366f1, #a855f7)",
            }}
          ></div>

          <div className="relative z-10 space-y-6">
            {/* 100点の大きな表示 - 7色グラデーション（左から右）+ 色相回転アニメーション */}
            <motion.div
              className="text-8xl font-bold bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(to right, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #6366f1, #a855f7)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                backgroundSize: "400% 100%",
              }}
              animate={{
                scale: [1, 1.05, 1],
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                filter: ["hue-rotate(0deg)", "hue-rotate(360deg)", "hue-rotate(0deg)"],
              }}
              transition={{
                scale: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                backgroundPosition: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                filter: { duration: 5, repeat: Number.POSITIVE_INFINITY },
              }}
            >
              100
            </motion.div>

            <div className="text-2xl text-yellow-600 font-bold">/ 100点</div>

            {/* タイトル - 7色グラデーション（右から左）+ 逆方向色相回転 */}
            <motion.h2
              className="text-4xl font-bold bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(to left, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #6366f1, #a855f7)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                backgroundSize: "400% 100%",
              }}
              animate={{
                scale: [1, 1.03, 1],
                backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
                filter: ["hue-rotate(0deg)", "hue-rotate(-360deg)", "hue-rotate(0deg)"],
              }}
              transition={{
                scale: { duration: 2.5, repeat: Number.POSITIVE_INFINITY },
                backgroundPosition: { duration: 4, repeat: Number.POSITIVE_INFINITY },
                filter: { duration: 6, repeat: Number.POSITIVE_INFINITY },
              }}
            >
              {comment.title}
            </motion.h2>

            <div className="flex justify-center mb-6">
              <motion.div
                className="text-7xl" // 8xl から 7xl に変更
                animate={{
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{
                  rotate: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                🌟
              </motion.div>
            </div>

            <motion.div
              className="text-lg font-medium text-center whitespace-pre-line leading-relaxed max-w-2xl mx-auto text-yellow-800" // text-xl から text-lg に変更
              animate={{
                textShadow: [
                  "0 0 3px rgba(255, 215, 0, 0.3)",
                  "0 0 6px rgba(255, 215, 0, 0.6)",
                  "0 0 3px rgba(255, 215, 0, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              {comment.message}
            </motion.div>

            {/* 文化参加メッセージ */}
            <div className="mt-6 p-4 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg border border-yellow-400">
              <p className="text-lg text-yellow-800 dark:text-yellow-200 font-bold">
                🎉 おめでとうございます！あなたは<strong>ナンバープレート診断文化</strong>の創造者の一人です！
              </p>
            </div>

            <div className="mt-8 flex justify-center">
              <motion.div
                className="px-6 py-3 text-white rounded-full font-bold text-lg shadow-lg"
                style={{
                  background:
                    "linear-gradient(to right, #ef4444, #f97316, #eab308, #22c55e, #3b82f6, #6366f1, #a855f7)",
                  backgroundSize: "400% 100%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  filter: ["hue-rotate(0deg)", "hue-rotate(360deg)", "hue-rotate(0deg)"],
                }}
                transition={{
                  backgroundPosition: { duration: 3, repeat: Number.POSITIVE_INFINITY },
                  filter: { duration: 4, repeat: Number.POSITIVE_INFINITY },
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                🎉 神域級パワーナンバー認定！ 🎉
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}
