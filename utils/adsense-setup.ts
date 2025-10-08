// Google AdSense セットアップガイド

export const adSenseSetupGuide = {
  steps: [
    {
      step: 1,
      title: "Google AdSense アカウント作成",
      description: "https://www.google.com/adsense/ でアカウントを作成",
      details: ["サイトのURLを登録", "支払い情報を設定", "税務情報を入力", "審査を待つ（通常1-14日）"],
    },
    {
      step: 2,
      title: "サイトをAdSenseに追加",
      description: "承認後、サイトを AdSense に追加",
      details: [
        "AdSense管理画面でサイトを追加",
        "ads.txt ファイルをサイトルートに配置",
        "AdSense コードをサイトに実装",
      ],
    },
    {
      step: 3,
      title: "広告ユニット作成",
      description: "効果的な広告配置のための設定",
      details: ["ディスプレイ広告ユニットを作成", "レスポンシブ設定を有効化", "広告サイズを最適化", "配置場所を決定"],
    },
  ],

  bestPractices: [
    "ユーザー体験を最優先に考える",
    "コンテンツと広告のバランスを保つ",
    "モバイルファーストで設計する",
    "A/Bテストで継続的に改善する",
    "AdSense ポリシーを遵守する",
  ],

  expectedRevenue: {
    phase1: "月間 ¥10,000-30,000 (1,000-3,000 PV/日)",
    phase2: "月間 ¥50,000-150,000 (5,000-15,000 PV/日)",
    phase3: "月間 ¥200,000-500,000 (20,000-50,000 PV/日)",
    phase4: "月間 ¥1,000,000+ (100,000+ PV/日)",
  },
}

// 広告配置の最適化設定
export const adPlacementConfig = {
  // 診断結果直後（最も効果的）
  resultTop: {
    format: "rectangle",
    priority: "high",
    expectedCTR: "3-5%",
  },

  // 詳細分析の途中（自然な配置）
  contentMiddle: {
    format: "auto",
    priority: "medium",
    expectedCTR: "2-3%",
  },

  // 運気アップアイテム後（購買意欲が高い）
  afterItems: {
    format: "horizontal",
    priority: "high",
    expectedCTR: "4-6%",
  },

  // フッター（離脱前の最後のチャンス）
  footer: {
    format: "auto",
    priority: "low",
    expectedCTR: "1-2%",
  },
}
