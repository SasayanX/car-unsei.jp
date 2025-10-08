export interface CarNumerologyData {
  number: number
  name: string
  personality: string
  energy: string
  suitableFor: string[]
  drivingStyle: string
  familyCompatibility: string
  businessUse: string
  color: string
  emoji: string
}

export const carNumerologyData: Record<number, CarNumerologyData> = {
  1: {
    number: 1,
    name: "リーダーカー",
    personality: "行動力・独立心が強く、新しいことに挑戦するエネルギー。ドライバーを前向きに導く。",
    energy: "積極的・先駆的・独立的",
    suitableFor: ["起業家", "営業職", "新規事業", "一人旅"],
    drivingStyle: "積極的で決断力のある運転",
    familyCompatibility: "家族のリーダーシップを発揮",
    businessUse: "新規開拓や営業活動に最適",
    color: "#FF6B6B",
    emoji: "🔥",
  },
  2: {
    number: 2,
    name: "サポートカー",
    personality: "協調性や気配りに優れ、家族やパートナーシップを大切にする。穏やかな運転や同乗者との調和を生む。",
    energy: "協調的・思いやり・バランス",
    suitableFor: ["夫婦", "カップル", "チームワーク", "介護"],
    drivingStyle: "安全で思いやりのある運転",
    familyCompatibility: "家族の絆を深める",
    businessUse: "チームワークや協力関係を重視する業務",
    color: "#4ECDC4",
    emoji: "🤝",
  },
  3: {
    number: 3,
    name: "楽しみカー",
    personality: "明るく陽気で、ドライブやレジャーに最適。遊び心やワクワク感をもたらす。",
    energy: "創造的・楽観的・表現力豊か",
    suitableFor: ["レジャー", "友人との外出", "クリエイティブ活動", "趣味"],
    drivingStyle: "楽しく自由な運転スタイル",
    familyCompatibility: "家族に笑顔と楽しさを提供",
    businessUse: "クリエイティブ業界や接客業に向く",
    color: "#FFE66D",
    emoji: "🎉",
  },
  4: {
    number: 4,
    name: "安定カー",
    personality: "安全運転・堅実志向。日常使いや家族の送迎に安心感を与える。",
    energy: "安定的・実用的・信頼性",
    suitableFor: ["通勤", "送迎", "日常使い", "長期利用"],
    drivingStyle: "慎重で計画的な運転",
    familyCompatibility: "家族に安心と安定を提供",
    businessUse: "堅実な業務や定期的な移動に最適",
    color: "#95E1D3",
    emoji: "🛡️",
  },
  5: {
    number: 5,
    name: "自由カー",
    personality: "行動範囲が広く、旅行や冒険にぴったり。変化や刺激を楽しみたい人向け。",
    energy: "自由・冒険・変化",
    suitableFor: ["旅行", "アウトドア", "探検", "転勤族"],
    drivingStyle: "自由で冒険的な運転",
    familyCompatibility: "家族に新しい体験を提供",
    businessUse: "営業や出張の多い業務に向く",
    color: "#A8E6CF",
    emoji: "🌍",
  },
  6: {
    number: 6,
    name: "ファミリーカー",
    personality: "愛情や家庭運が強く、家族の絆を深める。家族旅行や送迎におすすめ。",
    energy: "愛情・責任感・家庭的",
    suitableFor: ["家族旅行", "子育て", "介護", "地域活動"],
    drivingStyle: "家族思いの安全運転",
    familyCompatibility: "家族の中心的存在",
    businessUse: "サービス業や教育関係に向く",
    color: "#FFB6C1",
    emoji: "👨‍👩‍👧‍👦",
  },
  7: {
    number: 7,
    name: "個室カー",
    personality: "静寂や内省を大切にし、一人の時間や落ち着いたドライブに向く。",
    energy: "内省的・神秘的・独立的",
    suitableFor: ["一人旅", "瞑想", "研究", "芸術活動"],
    drivingStyle: "静かで集中した運転",
    familyCompatibility: "家族に落ち着きと深い思考を促す",
    businessUse: "研究職や専門職に向く",
    color: "#DDA0DD",
    emoji: "🧘‍♂️",
  },
  8: {
    number: 8,
    name: "パワフルカー",
    personality: "エネルギッシュで、ビジネスや営業、成功運を高めたい人に最適。",
    energy: "力強い・成功志向・物質的豊かさ",
    suitableFor: ["ビジネス", "営業", "成功追求", "権力者"],
    drivingStyle: "力強く自信に満ちた運転",
    familyCompatibility: "家族に成功と豊かさをもたらす",
    businessUse: "経営者や管理職に最適",
    color: "#FFD700",
    emoji: "💪",
  },
  9: {
    number: 9,
    name: "模範カー",
    personality: "社会性や思いやりがあり、ルールを守る落ち着いた大人の車。",
    energy: "完成・奉仕・普遍的愛",
    suitableFor: ["社会貢献", "ボランティア", "教育", "指導"],
    drivingStyle: "模範的で思いやりのある運転",
    familyCompatibility: "家族に高い理想と思いやりを示す",
    businessUse: "教育や社会貢献事業に向く",
    color: "#87CEEB",
    emoji: "🌟",
  },
  11: {
    number: 11,
    name: "インスピレーションカー",
    personality: "直感やひらめきをもたらし、特別な縁や出会いを引き寄せる。個性的で目立つ存在。",
    energy: "直感的・霊感的・特別な使命",
    suitableFor: ["芸術家", "スピリチュアル", "特別な出会い", "創作活動"],
    drivingStyle: "直感的で独特な運転スタイル",
    familyCompatibility: "家族に特別な体験とインスピレーションを与える",
    businessUse: "クリエイティブ業界や精神的な仕事に向く",
    color: "#E6E6FA",
    emoji: "✨",
  },
  22: {
    number: 22,
    name: "パワースポットカー",
    personality: "大きな目標や夢を現実化する力。安定感とスケールの大きさで、長距離や大人数にも向く。",
    energy: "実現力・建設的・大規模な影響力",
    suitableFor: ["大きなプロジェクト", "長距離移動", "大人数", "社会的影響"],
    drivingStyle: "安定感があり大きなスケールの運転",
    familyCompatibility: "家族の大きな夢や目標を支援",
    businessUse: "大企業や大規模プロジェクトに最適",
    color: "#20B2AA",
    emoji: "🏗️",
  },
  33: {
    number: 33,
    name: "カリスマカー",
    personality: "無償の愛や奉仕、癒しのエネルギーを持ち、人を惹きつける魅力。家族や仲間に安心感を与える。",
    energy: "無条件の愛・癒し・カリスマ性",
    suitableFor: ["癒し", "奉仕活動", "リーダーシップ", "人を惹きつける"],
    drivingStyle: "愛情深く包容力のある運転",
    familyCompatibility: "家族全体を癒し、結束を強める",
    businessUse: "ヒーリング業界やカウンセリングに向く",
    color: "#FF69B4",
    emoji: "💖",
  },
}

// ナンバープレートから数秘術の数字を計算
export function calculateNumerologyNumber(carNumber: string): number {
  // 数字のみを抽出
  const numbers = carNumber
    .replace(/[^0-9]/g, "")
    .split("")
    .map(Number)

  if (numbers.length === 0) return 1

  console.log(`入力: ${carNumber}`)
  console.log(`抽出された数字: ${numbers.join(", ")}`)

  // 数字を合計
  let sum = numbers.reduce((acc, num) => acc + num, 0)
  console.log(`初回合計: ${sum}`)

  // マスターナンバーをチェック
  if (sum === 11 || sum === 22 || sum === 33) {
    console.log(`マスターナンバー: ${sum}`)
    return sum
  }

  // 一桁になるまで足し続ける
  while (sum > 9) {
    const oldSum = sum
    sum = sum
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, num) => acc + num, 0)

    console.log(`${oldSum} → ${sum}`)

    // 計算途中でマスターナンバーが出た場合
    if (sum === 11 || sum === 22 || sum === 33) {
      console.log(`計算途中でマスターナンバー: ${sum}`)
      return sum
    }
  }

  console.log(`最終結果: ${sum}`)
  return sum
}

export function getCarNumerologyData(carNumber: string): CarNumerologyData {
  const numerologyNumber = calculateNumerologyNumber(carNumber)
  return carNumerologyData[numerologyNumber] || carNumerologyData[1]
}
