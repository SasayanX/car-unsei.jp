import { fortuneData } from "../data/fortune-data"

export interface NumberAnalysis {
  number: number
  score: number
  type: string
  description: string
}

export interface AddressAnalysis {
  originalAddress: string
  numbers: number[]
  combinations: number[]
  individualAnalysis: NumberAnalysis[]
  combinationAnalysis: NumberAnalysis[]
  totalScore: number
  averageScore: number
  weightedScore: number
  debug?: {
    extractedNumbers: number[]
    filteredNumbers: number[]
    generatedCombinations: { number: number; isValid: boolean; original: string }[]
    individualScores: number[]
    combinationScores: number[]
    individualAverage: number
    combinationAverage: number
    weightCalculation: string
  }
}

// 数字抽出を高速化
function extractAllDigits(address: string): number[] {
  const matches = address.match(/\d/g)
  return matches ? matches.map(Number) : []
}

// 組み合わせ生成を最適化
function generateTwoDigitCombinations(numbers: number[]): { number: number; isValid: boolean; original: string }[] {
  const combinations: { number: number; isValid: boolean; original: string }[] = []

  for (let i = 0; i < numbers.length - 1; i++) {
    const combo = numbers[i] * 10 + numbers[i + 1] // 文字列操作を避けて高速化
    const isValid = combo <= 81 && combo > 0

    combinations.push({
      number: combo,
      isValid,
      original: `${numbers[i]}${numbers[i + 1]}`,
    })
  }

  return combinations
}

// 分析処理を最適化
export function analyzeAddress(address: string, includeDebug = false): AddressAnalysis {
  // 数字抽出を高速化
  const extractedNumbers = extractAllDigits(address)
  const numbers = extractedNumbers.filter((n) => n >= 1 && n <= 9)

  // 組み合わせ生成
  const combinations = generateTwoDigitCombinations(numbers)

  // 個別分析を最適化
  const individualAnalysis: NumberAnalysis[] = numbers.map((num) => {
    const data = fortuneData[num]
    return data
      ? {
          number: num,
          score: data.score,
          type: data.type,
          description: data.description,
        }
      : {
          number: num,
          score: 50,
          type: "普通",
          description: "標準的な運勢です",
        }
  })

  // 組み合わせ分析を最適化
  const combinationAnalysis: NumberAnalysis[] = combinations
    .filter((combo) => combo.isValid)
    .map((combo) => {
      const data = fortuneData[combo.number]
      return data
        ? {
            number: combo.number,
            score: data.score,
            type: data.type,
            description: data.description,
          }
        : {
            number: combo.number,
            score: 50,
            type: "普通",
            description: "標準的な運勢",
          }
    })

  // スコア計算を最適化
  const individualScores = individualAnalysis.map((a) => a.score)
  const combinationScores = combinationAnalysis.map((a) => a.score)

  const totalScore = [...individualScores, ...combinationScores].reduce((sum, score) => sum + score, 0)
  const allScoresLength = individualScores.length + combinationScores.length
  const averageScore = allScoresLength > 0 ? Math.round(totalScore / allScoresLength) : 50

  // 重み付きスコア計算を最適化
  const individualAvg =
    individualScores.length > 0 ? individualScores.reduce((sum, score) => sum + score, 0) / individualScores.length : 50

  const combinationAvg =
    combinationScores.length > 0
      ? combinationScores.reduce((sum, score) => sum + score, 0) / combinationScores.length
      : individualAvg

  const weightedScore = Math.round(individualAvg * 0.7 + combinationAvg * 0.3)

  const result: AddressAnalysis = {
    originalAddress: address,
    numbers,
    combinations: combinations.map((c) => c.number),
    individualAnalysis,
    combinationAnalysis,
    totalScore,
    averageScore,
    weightedScore,
  }

  // デバッグ情報（必要時のみ）
  if (includeDebug) {
    result.debug = {
      extractedNumbers,
      filteredNumbers: numbers,
      generatedCombinations: combinations,
      individualScores,
      combinationScores,
      individualAverage: individualAvg,
      combinationAverage: combinationAvg,
      weightCalculation: `${individualAvg.toFixed(1)} × 0.7 + ${combinationAvg.toFixed(1)} × 0.3 = ${weightedScore}`,
    }
  }

  return result
}
