export interface FortuneItem {
  name: string
  category: string
  description: string
  placement: string
  effect: string
  emoji: string
  priority: number
  searchKeyword?: string // Amazon検索用キーワード
}

// 全アイテムのプール
const allFortuneItems: FortuneItem[] = [
  // 観葉植物系（大幅に追加）
  {
    name: "パキラ",
    category: "観葉植物",
    description: "「発財樹」とも呼ばれる金運アップの代表的な観葉植物",
    placement: "リビングの南東角、玄関近く",
    effect: "金運・仕事運向上",
    emoji: "🌿",
    priority: 1,
    searchKeyword: "パキラ 観葉植物",
  },
  {
    name: "金のなる木",
    category: "観葉植物",
    description: "金運を呼び込む縁起の良い多肉植物",
    placement: "玄関、リビング",
    effect: "金運・財運向上",
    emoji: "🌱",
    priority: 1,
    searchKeyword: "金のなる木 多肉植物",
  },
  {
    name: "サンスベリア",
    category: "観葉植物",
    description: "空気清浄効果が高く、邪気を払うとされる観葉植物",
    placement: "寝室、書斎、トイレ",
    effect: "健康運・浄化",
    emoji: "🪴",
    priority: 2,
    searchKeyword: "サンスベリア 観葉植物",
  },
  {
    name: "ポトス",
    category: "観葉植物",
    description: "育てやすく、恋愛運と人間関係運を向上させる",
    placement: "リビング、寝室",
    effect: "恋愛運・人間関係",
    emoji: "🍃",
    priority: 2,
    searchKeyword: "ポトス 観葉植物",
  },
  {
    name: "ドラセナ",
    category: "観葉植物",
    description: "「幸福の木」として親しまれ、運気回復に効果的",
    placement: "リビング、玄関",
    effect: "運気回復・幸福",
    emoji: "🌳",
    priority: 1,
    searchKeyword: "ドラセナ 幸福の木",
  },
  {
    name: "観音竹",
    category: "観葉植物",
    description: "邪気を払い、家庭円満をもたらす縁起の良い植物",
    placement: "玄関、リビング",
    effect: "家庭円満・厄除け",
    emoji: "🎍",
    priority: 2,
    searchKeyword: "観音竹 観葉植物",
  },
  {
    name: "モンステラ",
    category: "観葉植物",
    description: "ハート型の葉が愛情運を高め、金運も向上させる人気の観葉植物",
    placement: "リビング、寝室",
    effect: "恋愛運・金運",
    emoji: "🌿",
    priority: 2,
    searchKeyword: "モンステラ 観葉植物",
  },
  {
    name: "ガジュマル",
    category: "観葉植物",
    description: "「多幸の木」と呼ばれ、精霊が宿るとされる神聖な植物",
    placement: "玄関、リビング",
    effect: "全体運・幸福",
    emoji: "🌳",
    priority: 1,
    searchKeyword: "ガジュマル 観葉植物",
  },
  {
    name: "ユッカ",
    category: "観葉植物",
    description: "「青年の木」として成長と発展の象徴。仕事運アップに効果的",
    placement: "書斎、オフィス、リビング",
    effect: "仕事運・成長運",
    emoji: "🌿",
    priority: 2,
    searchKeyword: "ユッカ 青年の木",
  },
  {
    name: "ベンジャミン",
    category: "観葉植物",
    description: "「愛の木」として人間関係を良好にし、家庭運を向上させる",
    placement: "リビング、ダイニング",
    effect: "家庭運・人間関係",
    emoji: "🌳",
    priority: 2,
    searchKeyword: "ベンジャミン 観葉植物",
  },
  {
    name: "アイビー",
    category: "観葉植物",
    description: "「永遠の愛」を象徴し、恋愛運と結婚運を高める",
    placement: "寝室、リビング、窓際",
    effect: "恋愛運・結婚運",
    emoji: "🍃",
    priority: 3,
    searchKeyword: "アイビー 観葉植物",
  },
  {
    name: "フィカス・ウンベラータ",
    category: "観葉植物",
    description: "ハート型の大きな葉が愛情を呼び込み、調和をもたらす",
    placement: "リビング、寝室",
    effect: "恋愛運・調和",
    emoji: "💚",
    priority: 2,
    searchKeyword: "フィカス ウンベラータ",
  },
  {
    name: "オリーブの木",
    category: "観葉植物",
    description: "平和と繁栄の象徴。家庭に安定と豊かさをもたらす",
    placement: "玄関、ベランダ、リビング",
    effect: "家庭運・平和",
    emoji: "🫒",
    priority: 2,
    searchKeyword: "オリーブの木 観葉植物",
  },

  // 浄化アイテム
  {
    name: "盛り塩",
    category: "浄化アイテム",
    description: "空間を浄化し、邪気を払う伝統的な開運アイテム",
    placement: "玄関、各部屋の四隅、水回り",
    effect: "空間浄化・厄除け",
    emoji: "🧂",
    priority: 1,
    searchKeyword: "盛り塩 浄化",
  },
  {
    name: "竹炭",
    category: "浄化アイテム",
    description: "湿気と悪い気を吸収し、空間を浄化する",
    placement: "各部屋の隅、クローゼット",
    effect: "浄化・湿気対策",
    emoji: "🎋",
    priority: 1,
    searchKeyword: "竹炭 浄化",
  },
  {
    name: "セージ",
    category: "浄化アイテム",
    description: "燃やすことで強力な浄化効果を発揮するハーブ",
    placement: "全室（燃やして使用）",
    effect: "強力浄化・リセット",
    emoji: "🌿",
    priority: 2,
    searchKeyword: "ホワイトセージ 浄化",
  },
  {
    name: "白いキャンドル",
    category: "浄化アイテム",
    description: "火の力で空間を浄化し、新しいエネルギーを呼ぶ",
    placement: "リビング、寝室（安全な場所）",
    effect: "浄化・エネルギー活性化",
    emoji: "🕯️",
    priority: 2,
    searchKeyword: "白いキャンドル 浄化",
  },

  // パワーストーン
  {
    name: "水晶クラスター",
    category: "パワーストーン",
    description: "空間のエネルギーを浄化し、運気を安定させる",
    placement: "リビングのテーブル、寝室",
    effect: "全体運・浄化",
    emoji: "💎",
    priority: 2,
    searchKeyword: "水晶クラスター パワーストーン",
  },
  {
    name: "アメジスト",
    category: "パワーストーン",
    description: "心を落ち着かせ、直感力を高める紫の水晶",
    placement: "寝室、書斎",
    effect: "精神安定・直感力",
    emoji: "💜",
    priority: 3,
    searchKeyword: "アメジスト パワーストーン",
  },
  {
    name: "黒曜石",
    category: "パワーストーン",
    description: "強力な魔除け効果があり、負のエネルギーを遮断",
    placement: "玄関、寝室",
    effect: "魔除け・保護",
    emoji: "⚫",
    priority: 2,
    searchKeyword: "黒曜石 パワーストーン",
  },

  // 風水アイテム
  {
    name: "八角鏡",
    category: "風水アイテム",
    description: "良い気を増幅させ、運気を拡散する風水鏡",
    placement: "玄関正面、リビング",
    effect: "運気拡大・開運",
    emoji: "🪞",
    priority: 2,
    searchKeyword: "八角鏡 風水",
  },
  {
    name: "円形鏡",
    category: "風水アイテム",
    description: "悪い気を跳ね返し、良い気を増幅させる",
    placement: "玄関（外向き）、リビング",
    effect: "厄除け・気の調整",
    emoji: "🪞",
    priority: 3,
    searchKeyword: "円形鏡 風水",
  },
  {
    name: "風鈴",
    category: "風水アイテム",
    description: "良い音で邪気を払い、涼やかな気を呼ぶ",
    placement: "ベランダ、窓際",
    effect: "浄化・リフレッシュ",
    emoji: "🎐",
    priority: 3,
    searchKeyword: "風鈴 風水",
  },

  // 縁起物・干支
  {
    name: "招き猫（金）",
    category: "縁起物",
    description: "金運と商売繁盛を招く縁起物",
    placement: "玄関、リビング、仕事部屋",
    effect: "金運・商売繁盛",
    emoji: "🐱",
    priority: 2,
    searchKeyword: "招き猫 金運",
  },
  {
    name: "龍の置物",
    category: "干支・縁起物",
    description: "最強の開運シンボル。全体運を大幅に向上させる",
    placement: "玄関、リビングの東側",
    effect: "全体運・成功運",
    emoji: "🐉",
    priority: 1,
    searchKeyword: "龍 置物 風水",
  },
  {
    name: "虎の置物",
    category: "干支・縁起物",
    description: "邪気を払い、勇気と決断力を与える",
    placement: "玄関、書斎",
    effect: "厄除け・勇気",
    emoji: "🐅",
    priority: 2,
    searchKeyword: "虎 置物 風水",
  },
  {
    name: "兎の置物",
    category: "干支・縁起物",
    description: "飛躍と向上の象徴。新しいチャンスを呼ぶ",
    placement: "リビング、寝室",
    effect: "飛躍・チャンス",
    emoji: "🐰",
    priority: 2,
    searchKeyword: "兎 置物 風水",
  },
  {
    name: "馬の置物",
    category: "干支・縁起物",
    description: "仕事運と出世運を高める。エネルギッシュな気を呼ぶ",
    placement: "書斎、仕事部屋",
    effect: "仕事運・出世運",
    emoji: "🐴",
    priority: 2,
    searchKeyword: "馬 置物 風水",
  },
  {
    name: "象の置物",
    category: "干支・縁起物",
    description: "安定と繁栄の象徴。家庭運と財運を向上させる",
    placement: "リビング、玄関",
    effect: "家庭運・財運",
    emoji: "🐘",
    priority: 2,
    searchKeyword: "象 置物 風水",
  },

  // その他
  {
    name: "ラベンダー",
    category: "アロマ・植物",
    description: "リラックス効果があり、ストレスを軽減する",
    placement: "寝室、リビング",
    effect: "リラックス・安眠",
    emoji: "💜",
    priority: 3,
    searchKeyword: "ラベンダー アロマ",
  },
]

// スコア帯別の最適なアイテムを1つ選択（観葉植物を優先的に選択）
export const getFortuneItem = (score: number): FortuneItem => {
  if (score >= 90) {
    // 超高運勢：龍の置物
    return allFortuneItems.find((item) => item.name === "龍の置物") || allFortuneItems[0]
  } else if (score >= 85) {
    // 高運勢：ガジュマル（多幸の木）
    return allFortuneItems.find((item) => item.name === "ガジュマル") || allFortuneItems[0]
  } else if (score >= 80) {
    // 高運勢：金のなる木
    return allFortuneItems.find((item) => item.name === "金のなる木") || allFortuneItems[0]
  } else if (score >= 75) {
    // 良運勢：パキラ
    return allFortuneItems.find((item) => item.name === "パキラ") || allFortuneItems[0]
  } else if (score >= 70) {
    // 良運勢：モンステラ
    return allFortuneItems.find((item) => item.name === "モンステラ") || allFortuneItems[0]
  } else if (score >= 65) {
    // 中運勢：ユッカ（青年の木）
    return allFortuneItems.find((item) => item.name === "ユッカ") || allFortuneItems[0]
  } else if (score >= 60) {
    // 中運勢：ベンジャミン
    return allFortuneItems.find((item) => item.name === "ベンジャミン") || allFortuneItems[0]
  } else if (score >= 55) {
    // やや低運勢：フィカス・ウンベラータ
    return allFortuneItems.find((item) => item.name === "フィカス・ウンベラータ") || allFortuneItems[0]
  } else if (score >= 50) {
    // やや低運勢：オリーブの木
    return allFortuneItems.find((item) => item.name === "オリーブの木") || allFortuneItems[0]
  } else if (score >= 45) {
    // 低運勢：サンスベリア
    return allFortuneItems.find((item) => item.name === "サンスベリア") || allFortuneItems[0]
  } else if (score >= 40) {
    // 低運勢：盛り塩
    return allFortuneItems.find((item) => item.name === "盛り塩") || allFortuneItems[0]
  } else if (score >= 30) {
    // 要注意：竹炭
    return allFortuneItems.find((item) => item.name === "竹炭") || allFortuneItems[0]
  } else {
    // 大凶：ドラセナ（幸福の木）
    return allFortuneItems.find((item) => item.name === "ドラセナ") || allFortuneItems[0]
  }
}

// カテゴリー別の色分け
export const getCategoryColor = (category: string) => {
  switch (category) {
    case "観葉植物":
      return "bg-green-100 text-green-800 border-green-300"
    case "浄化アイテム":
      return "bg-blue-100 text-blue-800 border-blue-300"
    case "パワーストーン":
      return "bg-purple-100 text-purple-800 border-purple-300"
    case "風水アイテム":
      return "bg-yellow-100 text-yellow-800 border-yellow-300"
    case "縁起物":
      return "bg-red-100 text-red-800 border-red-300"
    case "干支・縁起物":
      return "bg-orange-100 text-orange-800 border-orange-300"
    case "アロマ・植物":
      return "bg-pink-100 text-pink-800 border-pink-300"
    default:
      return "bg-gray-100 text-gray-800 border-gray-300"
  }
}

// Amazon検索URLを生成
export const getAmazonSearchUrl = (searchKeyword: string): string => {
  const encodedKeyword = encodeURIComponent(searchKeyword)
  return `https://www.amazon.co.jp/s?k=${encodedKeyword}&tag=sc0a-22`
}
