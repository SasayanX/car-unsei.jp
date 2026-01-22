# PWA インストールモーダル チェックリスト

## 🔍 確認事項

### 1. アイコンファイルの存在確認
✅ すべてのアイコンが正しく生成されました：
- ✅ icon-72x72.png
- ✅ icon-96x96.png
- ✅ icon-128x128.png
- ✅ icon-144x144.png
- ✅ icon-152x152.png
- ✅ icon-192x192.png
- ✅ icon-384x384.png
- ✅ icon-512x512.png
- ✅ apple-touch-icon.png

### 2. マニフェストファイル確認

#### ブラウザのデベロッパーツールで確認：
1. Chrome DevTools を開く（F12）
2. **Application** タブを選択
3. 左側メニューの **Manifest** をクリック
4. エラーがないか確認

#### 確認ポイント：
- [ ] Manifest が正しく読み込まれているか
- [ ] すべてのアイコンパスが正しいか（404エラーがないか）
- [ ] アイコンが表示されているか

### 3. Service Worker の確認

#### デベロッパーツールで確認：
1. **Application** タブ → **Service Workers**
2. Service Worker が登録されているか確認
3. Status が "activated and running" になっているか

### 4. PWA インストール条件

PWAがインストール可能になるための必須条件：
- [x] HTTPSで配信されている（または localhost）
- [x] manifest.json が存在する
- [x] 192x192 以上のアイコンが存在する
- [ ] Service Worker が登録されている
- [ ] start_url が正しく設定されている
- [ ] name または short_name が設定されている
- [ ] display が設定されている

### 5. よくある問題と解決方法

#### 問題1: "Add to Home Screen" が表示されない
**原因:**
- Service Worker が正しく登録されていない
- キャッシュが古い

**解決方法:**
```bash
# ブラウザのキャッシュをクリア
Ctrl + Shift + Delete

# または、シークレットモードで確認
Ctrl + Shift + N
```

#### 問題2: アイコンが表示されない
**原因:**
- アイコンのパスが間違っている
- ファイルが存在しない

**解決方法:**
1. デベロッパーツールの **Network** タブでアイコンの読み込みを確認
2. 404エラーがないか確認

#### 問題3: マニフェストエラー
**原因:**
- JSONの構文エラー
- 必須フィールドが不足

**解決方法:**
1. manifest.json のJSON構文を確認
2. オンラインの JSON Validator でチェック

### 6. ローカルでのテスト方法

```bash
# 開発サーバーを起動
npm run dev

# または
pnpm dev
```

ブラウザで `http://localhost:3000` にアクセスして、以下を確認：

1. **Chrome:**
   - アドレスバーに「インストール」アイコンが表示されるか
   - 右上のメニュー → 「アプリをインストール」が表示されるか

2. **Edge:**
   - アドレスバーに「+」アイコンが表示されるか

3. **モバイル（Chrome/Safari）:**
   - ホーム画面に追加のプロンプトが表示されるか

### 7. 本番環境でのテスト

Netlify デプロイ後：
1. `https://car-unsei.jp` にアクセス
2. デベロッパーツールで Lighthouse を実行
3. PWA スコアを確認

```bash
# Lighthouse CLI でチェック
npx lighthouse https://car-unsei.jp --view
```

### 8. デバッグコマンド

```bash
# Service Worker の確認
chrome://serviceworker-internals/

# マニフェストの確認
https://car-unsei.jp/manifest.webmanifest

# アイコンの確認
https://car-unsei.jp/icon-192x192.png
https://car-unsei.jp/icon-512x512.png
```

## 🛠️ 修正が必要な場合

### アイコンを再生成
```bash
python resize-icons.py
```

### キャッシュをクリア
```bash
# Service Worker を unregister
# Chrome DevTools → Application → Service Workers → Unregister

# ブラウザキャッシュをクリア
# Settings → Privacy → Clear browsing data
```

## 📝 Next.js 特有の注意点

1. `app/manifest.ts` が優先される（Next.js 14+）
2. `public/` フォルダ内のファイルは `/` から参照
3. ビルド後に `/manifest.webmanifest` として生成される

## ✅ チェック結果

実行日時: _______________________

### 確認項目
- [ ] すべてのアイコンファイルが存在する
- [ ] manifest.json にエラーがない
- [ ] Service Worker が動作している
- [ ] HTTPSで配信されている
- [ ] インストールモーダルが表示される

### 備考
__________________________________________________
__________________________________________________
__________________________________________________
