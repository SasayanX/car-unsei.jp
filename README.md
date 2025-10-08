# 愛車運勢診断

車のナンバープレートから運勢と性格を無料で診断するWebアプリケーションです。

## 技術スタック

- **フレームワーク**: Next.js 15.2.4
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **ホスティング**: Netlify
- **Analytics**: Google Analytics

## 主な機能

- 車のナンバープレート運勢診断（81画理論）
- 数秘術による性格分析
- 運勢と性格の総合診断
- SNSシェア機能
- PWA対応

## Netlifyへのデプロイ手順

### 1. Netlifyアカウントの準備

1. [Netlify](https://www.netlify.com/)にアクセスしてアカウントを作成
2. GitHubアカウントと連携

### 2. リポジトリの準備

1. このプロジェクトをGitHubリポジトリにプッシュ
```bash
git add .
git commit -m "Migrate from Vercel to Netlify"
git push origin main
```

### 3. Netlifyでのデプロイ設定

1. Netlifyダッシュボードで「Add new site」→「Import an existing project」を選択
2. GitHubリポジトリを選択
3. ビルド設定は自動的に`netlify.toml`から読み込まれます：
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18

### 4. 環境変数の設定（必要に応じて）

Netlifyのサイト設定で環境変数を追加：
- Site settings → Environment variables

### 5. デプロイ

設定完了後、自動的にデプロイが開始されます。

## ローカル開発

```bash
# 依存関係のインストール
npm install

# 開発サーバーの起動
npm run dev

# ビルド
npm run build

# 本番サーバーの起動
npm start
```

## 移行作業の記録

### VercelからNetlifyへの移行内容

1. ✅ `netlify.toml` を作成
2. ✅ `vercel.json` を削除
3. ✅ `@vercel/analytics` を削除
4. ✅ `next.config.mjs` をNetlify向けに調整
5. ✅ `@netlify/plugin-nextjs` を追加

## ライセンス

© 2025 愛車運勢診断

