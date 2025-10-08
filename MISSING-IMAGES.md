# 不足している画像ファイル一覧

## 🚨 最優先（SEO・SNSに影響）

### 1. OG画像（SNSシェア用）
```
ファイル: /public/images/og-image.png
サイズ: 1200×630px
用途: Facebook, Twitter, LINE等でシェアされた時の画像
推奨内容:
  - サイト名「愛車運勢診断」
  - キャッチコピー「車のナンバーで運勢・性格がわかる」
  - 車のアイコンやナンバープレートのイラスト
  - 背景: グラデーション（青〜シアン）
```

### 2. Apple Touch Icon
```
ファイル: /public/apple-touch-icon.png
サイズ: 180×180px
用途: iPhoneホーム画面に追加時のアイコン
推奨内容:
  - 車のシンプルなアイコン
  - 背景色: #2563eb（青）
  - 角丸不要（iOSが自動処理）
```

## 📱 PWAアイコン（必須）

以下すべて同じデザインでサイズ違い：

```
/public/icon-72x72.png (72×72px)
/public/icon-96x96.png (96×96px)
/public/icon-128x128.png (128×128px)
/public/icon-144x144.png (144×144px)
/public/icon-152x152.png (152×152px)
/public/icon-192x192.png (192×192px)
/public/icon-384x384.png (384×384px)
/public/icon-512x512.png (512×512px)
```

**推奨作成方法:**
1. 512×512pxのマスター画像を作成
2. オンラインツールでリサイズ
   - https://realfavicongenerator.net/
   - https://www.pwabuilder.com/imageGenerator

**デザイン案:**
- 車のシンプルなアイコン（白）
- 背景: グラデーション（青→シアン）
- 中央に車のシルエット
- 「運勢」の文字（小さく）

## 📸 スクリーンショット

```
ファイル: /public/screenshot-mobile.png
サイズ: 390×844px（iPhone標準）
用途: PWAインストール時のプレビュー
推奨内容:
  - 実際のサイトのスクリーンショット
  - メイン診断画面を表示
```

## 🎨 作成ツール

### 無料ツール
1. **Canva** (https://www.canva.com/)
   - テンプレート豊富
   - 日本語対応
   - 推奨サイズプリセットあり

2. **Figma** (https://www.figma.com/)
   - プロ仕様
   - 正確なサイズ指定可能

3. **GIMP** (無料Photoshop代替)
   - オープンソース
   - 高機能

### アイコン生成ツール
1. **PWA Builder** (https://www.pwabuilder.com/imageGenerator)
   - 1枚から全サイズ自動生成
   - PWA最適化済み

2. **RealFaviconGenerator** (https://realfavicongenerator.net/)
   - 全プラットフォーム対応
   - プレビュー機能付き

## 📋 作成手順（推奨）

### Step 1: マスター画像作成
1. Canvaで512×512pxのキャンバス作成
2. 車のアイコン+「愛車運勢診断」テキスト配置
3. 背景グラデーション（#2563eb → #06b6d4）
4. PNG形式でエクスポート

### Step 2: OG画像作成
1. Canvaで1200×630pxのキャンバス作成
2. 大きく「愛車運勢診断」タイトル
3. サブタイトル「車のナンバーで運勢・性格診断」
4. 車のイラスト配置
5. PNG形式でエクスポート → `og-image.png`

### Step 3: アイコン各サイズ生成
1. PWA Builderに512px画像アップロード
2. 全サイズ一括生成
3. ZIPダウンロード
4. `/public/` に配置

### Step 4: スクリーンショット作成
1. ブラウザでサイトを開く（モバイル表示）
2. スクリーンショット撮影
3. 390×844pxにリサイズ
4. `screenshot-mobile.png` として保存

## ⏱️ 所要時間目安

- OG画像: 15分
- PWAアイコン: 20分（ツール使用で10分）
- Apple Touch Icon: 5分
- スクリーンショット: 5分

**合計: 約30-45分**

## ✅ 完成後の確認

### OG画像の確認
- https://www.opengraph.xyz/
- URLを入力してプレビュー

### PWAアイコンの確認
- Chrome DevTools → Application → Manifest
- アイコンが正しく読み込まれているか確認

### Twitter Cardの確認
- https://cards-dev.twitter.com/validator
- URLを入力してプレビュー

