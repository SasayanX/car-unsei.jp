import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "愛車運勢診断 - ナンバープレート運勢チェッカー",
    short_name: "愛車運勢診断",
    description:
      "愛車の運勢を診断！プロの姓名判断鑑定師が監修したナンバープレート診断で、あなたの愛車の運勢を占います。",
    start_url: "/?utm_source=pwa",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    orientation: "portrait-primary",
    scope: "/",
    lang: "ja",
    dir: "ltr",
    categories: ["entertainment", "lifestyle", "utilities"],
    prefer_related_applications: false,
    icons: [
      {
        src: "/icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-128x128.png",
        sizes: "128x128",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-152x152.png",
        sizes: "152x152",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any maskable",
      },
      {
        src: "/icon-384x384.png",
        sizes: "384x384",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any maskable",
      },
    ],
    screenshots: [
      {
        src: "/screenshot-mobile.png",
        sizes: "390x844",
        type: "image/png",
        form_factor: "narrow",
        label: "愛車運勢診断のメイン画面",
      },
    ],
    shortcuts: [
      {
        name: "運勢診断",
        short_name: "診断",
        description: "愛車の運勢を今すぐ診断",
        url: "/?shortcut=diagnosis",
        icons: [
          {
            src: "/icon-192x192.png",
            sizes: "192x192",
          },
        ],
      },
    ],
  }
}
