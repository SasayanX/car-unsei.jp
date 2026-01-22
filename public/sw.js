const CACHE_NAME = "car-unsei-v3"
const STATIC_CACHE = "static-v3"
const DYNAMIC_CACHE = "dynamic-v3"

// キャッシュするファイル
const STATIC_FILES = [
  "/",
  "/manifest.webmanifest",
  "/icon-72x72.png",
  "/icon-96x96.png",
  "/icon-128x128.png",
  "/icon-144x144.png",
  "/icon-152x152.png",
  "/icon-192x192.png",
  "/icon-384x384.png",
  "/icon-512x512.png",
  "/apple-touch-icon.png",
  "/offline.html"
]

// インストール時
self.addEventListener("install", (event) => {
  console.log("Service Worker: Installing...")
  event.waitUntil(
    caches
      .open(STATIC_CACHE)
      .then((cache) => {
        console.log("Service Worker: Caching static files")
        return cache.addAll(STATIC_FILES)
      })
      .then(() => {
        console.log("Service Worker: Skip waiting")
        return self.skipWaiting()
      })
      .catch((error) => {
        console.error("Service Worker: Install failed", error)
      }),
  )
})

// アクティベート時
self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activating...")
  event.waitUntil(
    Promise.all([
      // 古いキャッシュを削除
      caches
        .keys()
        .then((cacheNames) => {
          return Promise.all(
            cacheNames.map((cacheName) => {
              if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
                console.log("Service Worker: Deleting old cache", cacheName)
                return caches.delete(cacheName)
              }
            }),
          )
        }),
      // クライアントを制御
      self.clients.claim(),
    ]),
  )
})

// フェッチ時
self.addEventListener("fetch", (event) => {
  // GET リクエストのみ処理
  if (event.request.method !== "GET") {
    return
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // キャッシュにあればそれを返す
      if (cachedResponse) {
        return cachedResponse
      }

      // ネットワークから取得を試行
      return fetch(event.request)
        .then((response) => {
          // レスポンスが有効でない場合はそのまま返す
          if (!response || response.status !== 200 || response.type !== "basic") {
            return response
          }

          // レスポンスをクローンしてキャッシュに保存
          const responseToCache = response.clone()
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(event.request, responseToCache)
          })

          return response
        })
        .catch(() => {
          // ネットワークエラー時はオフラインページを返す
          if (event.request.destination === "document") {
            return caches.match("/offline.html")
          }
        })
    }),
  )
})

// メッセージ受信
self.addEventListener("message", (event) => {
  console.log("Service Worker: Message received", event.data)

  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting()
  }

  if (event.data && event.data.type === "CLEAR_CACHE") {
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            return caches.delete(cacheName)
          }),
        )
      })
      .then(() => {
        console.log("Service Worker: All caches cleared")
      })
  }
})

// プッシュ通知（将来の拡張用）
self.addEventListener("push", (event) => {
  console.log("Service Worker: Push received")
  // プッシュ通知の処理
})

// バックグラウンド同期（将来の拡張用）
self.addEventListener("sync", (event) => {
  console.log("Service Worker: Background sync")
  // バックグラウンド同期の処理
})
