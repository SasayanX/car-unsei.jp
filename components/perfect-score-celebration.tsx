"use client"

import { useEffect, useState, useRef } from "react"
import confetti from "canvas-confetti"
import { motion } from "framer-motion"

interface PerfectScoreCelebrationProps {
  score: number
}

export function PerfectScoreCelebration({ score }: PerfectScoreCelebrationProps) {
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

  if (!showCelebration) return null

  return (
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
  )
}
