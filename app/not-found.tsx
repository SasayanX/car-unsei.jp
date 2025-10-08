import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-4xl font-bold mb-4">ページが見つかりません</h1>
      <p className="text-xl mb-8 text-gray-600 max-w-md">お探しのページは移動したか、削除された可能性があります。</p>
      <div className="space-y-4">
        <Button asChild size="lg">
          <Link href="/">トップページに戻る</Link>
        </Button>
        <div className="pt-4">
          <Link href="/blog" className="text-blue-600 hover:underline">
            ブログ記事一覧を見る
          </Link>
        </div>
      </div>
    </div>
  )
}
