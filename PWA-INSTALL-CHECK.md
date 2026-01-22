# PWA インストールモーダル表示確認ガイド

## 🔍 Chrome DevTools での確認手順

### 1. Application タブでインストール可能性をチェック

1. **Chrome DevTools を開く**
   ```
   F12 または Ctrl + Shift + I
   ```

2. **Application タブ → Manifest**
   - ✅ すべてのフィールドが正しく表示されているか
   - ✅ アイコンが表示されているか
   - ✅ エラーメッセージがないか

3. **Application タブ → Service Workers**
   - ✅ Status: "activated and running"
   - ✅ Scope: "https://car-unsei.jp/"

### 2. インストール可能性の確認

**Console タブで以下を実行:**

```javascript
// インストールプロンプトが発火するかテスト
window.addEventListener('beforeinstallprompt', (e) => {
  console.log('✅ PWAインストール可能！beforeinstallpromptイベント発火');
  e.preventDefault();
  window.deferredPrompt = e;
});

// 既にインストール済みか確認
if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('✅ 既にインストール済み');
} else {
  console.log('⚠️ 未インストール');
}
```

### 3. エンゲージメントスコアの確認

**Console タブで実行:**

```javascript
// Site Engagement の確認（Chrome 内部情報）
// chrome://site-engagement/ で確認可能
```

**直接確認する方法:**
```
chrome://site-engagement/
```
↑ このURLをブラウザに入力して、`car-unsei.jp` のエンゲージメントスコアを確認

---

## ⚠️ エンゲージメント要件

### Chrome のインストールプロンプト表示条件

1. **技術要件（すべて満たしている）:**
   - ✅ HTTPS配信
   - ✅ valid manifest.json
   - ✅ Service Worker登録
   - ✅ 192x192 と 512x512 のアイコン

2. **ユーザーエンゲージメント要件:**
   - ⏱️ **最低30秒以上の滞在**
   - 🔄 **複数回の訪問（通常2回以上）**
   - 👆 **ユーザーの操作（クリック、スクロール、入力など）**
   - 📅 **訪問間隔: 少なくとも5分以上の間隔**

### エンゲージメントスコアの計算

- 訪問回数
- 滞在時間
- インタラクション（クリック、スクロール）
- ブックマーク
- ホームスクリーンへの追加

**スコアが一定値を超えるとプロンプトが表示されます。**

---

## 🎯 インストールプロンプトを強制的に表示する方法

### 方法1: エンゲージメントチェックを無効化（開発・テスト用）

**Chrome フラグを設定:**

1. Chromeで以下にアクセス:
   ```
   chrome://flags/#bypass-app-banner-engagement-checks
   ```

2. "Bypass user engagement checks" を **Enabled** に設定

3. Chromeを再起動

4. サイトにアクセスすると即座にプロンプトが表示される

### 方法2: DevTools で手動トリガー

1. **DevTools → Application タブ**

2. **左メニューから "Manifest"**

3. アイコンとマニフェスト情報の下に表示される:
   ```
   [ Install app ]
   ```
   このボタンをクリック → インストールダイアログが表示される

### 方法3: コードで強制的にプロンプト表示

`app/layout.tsx` または専用コンポーネントに以下を追加:

```typescript
'use client'

import { useEffect, useState } from 'react'

export function InstallPWA() {
  const [installPrompt, setInstallPrompt] = useState<any>(null)

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault()
      setInstallPrompt(e)
    }
    
    window.addEventListener('beforeinstallprompt', handler)
    
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = () => {
    if (installPrompt) {
      installPrompt.prompt()
      installPrompt.userChoice.then((choiceResult: any) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt')
        }
        setInstallPrompt(null)
      })
    }
  }

  // インストールボタンを表示（エンゲージメント関係なく常に表示）
  if (!installPrompt) return null

  return (
    <button onClick={handleInstall}>
      📱 アプリをインストール
    </button>
  )
}
```

---

## 🧪 テスト手順

### ローカル環境でのテスト

1. **シークレットモードで開く**
   ```
   Ctrl + Shift + N
   ```

2. **localhost にアクセス**
   ```
   http://localhost:3000
   ```

3. **エンゲージメントチェックをバイパス**
   - `chrome://flags/#bypass-app-banner-engagement-checks` を有効化

4. **サイトを操作**
   - スクロール、クリック、診断を実行

5. **30秒待機**

6. **プロンプトが表示されるか確認**

### 本番環境でのテスト

1. **通常モードでアクセス**
   ```
   https://car-unsei.jp
   ```

2. **以下を実行:**
   - サイトを閉じる
   - 5分以上待つ
   - 再度アクセス
   - 診断を1回実行
   - 30秒以上滞在
   - サイトを閉じる
   - 再度アクセス

3. **2回目の訪問でプロンプトが表示される可能性が高い**

---

## 📱 手動インストール方法（エンドユーザー向け）

エンゲージメント要件を満たさない場合でも、ユーザーは手動でインストールできます:

### Chrome（PC）
1. アドレスバー右側の **⊕ アイコン** をクリック
2. 「インストール」をクリック

### Chrome（Android）
1. メニュー（⋮）をタップ
2. 「アプリをインストール」をタップ

### Safari（iOS）
1. 共有ボタン（□↑）をタップ
2. 「ホーム画面に追加」をタップ

### Edge（PC）
1. アドレスバー右側の **+** アイコンをクリック
2. 「アプリをインストール」をクリック

---

## 🔧 トラブルシューティング

### プロンプトが表示されない場合

#### チェック1: 既にインストール済みではないか
```javascript
if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log('既にインストール済み');
}
```

#### チェック2: manifest.json にエラーがないか
```
DevTools → Application → Manifest
```
エラーメッセージを確認

#### チェック3: Service Worker が動作しているか
```
DevTools → Application → Service Workers
```
Status が "activated and running" か確認

#### チェック4: アイコンが正しく読み込まれているか
```
DevTools → Network タブ
```
- /icon-192x192.png が 200 OK
- /icon-512x512.png が 200 OK

#### チェック5: HTTPS で配信されているか
```
アドレスバーに 🔒 マークが表示されているか
```

#### チェック6: エンゲージメントスコアが低い
```
chrome://site-engagement/
```
`car-unsei.jp` のスコアが 0 またはとても低い場合：
- 複数回訪問する
- 各訪問で30秒以上滞在
- サイトを操作する

---

## 💡 推奨: 常時表示のインストールボタンを追加

エンゲージメント要件に依存せず、ユーザーがいつでもインストールできるボタンを追加することを推奨します。

### 実装例

```typescript
// components/InstallButton.tsx
'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // 既にインストール済みかチェック
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
    }

    const handler = (e: any) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }

    window.addEventListener('beforeinstallprompt', handler)

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) {
      // フォールバック: 手動インストールの案内を表示
      alert('ブラウザのメニューから「アプリをインストール」を選択してください')
      return
    }

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    
    if (outcome === 'accepted') {
      console.log('User accepted the install prompt')
      setIsInstalled(true)
    }
    
    setDeferredPrompt(null)
  }

  // 既にインストール済みの場合は表示しない
  if (isInstalled) return null

  return (
    <Button onClick={handleInstall} variant="outline" size="sm">
      📱 アプリをインストール
    </Button>
  )
}
```

この実装により:
- ✅ `beforeinstallprompt` イベントが発火すればそれを使用
- ✅ イベントが発火しない場合は手動インストールの案内を表示
- ✅ エンゲージメント要件に関係なくボタンが表示される

---

## 📊 確認結果の記録

### 実行日時: _______________

#### PWA要件
- [ ] HTTPS配信
- [ ] manifest.json 読み込み成功
- [ ] Service Worker 登録済み
- [ ] アイコン 192x192 読み込み成功
- [ ] アイコン 512x512 読み込み成功

#### エンゲージメント
- [ ] エンゲージメントスコア: _____ 
- [ ] 訪問回数: _____ 回
- [ ] 滞在時間: _____ 秒

#### インストールプロンプト
- [ ] `beforeinstallprompt` イベント発火
- [ ] インストールモーダル表示
- [ ] 手動インストール可能

### メモ:
_____________________________________________
_____________________________________________
_____________________________________________

