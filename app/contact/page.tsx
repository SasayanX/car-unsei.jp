import type { Metadata } from "next"
import { ContactForm } from "@/components/contact-form"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "お問い合わせ | 愛車運勢診断",
  description:
    "愛車運勢診断へのお問い合わせはこちらから。サービスに関するご質問、技術的なお困りごと、改善のご提案などを受け付けています。",
}

export default function ContactPage({ searchParams }: { searchParams: { success?: string } }) {
  const isSuccess = searchParams.success === "true"

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">お問い合わせ</h1>

        {isSuccess && (
          <Alert className="mb-6 border-green-200 bg-green-50 dark:bg-green-900/30 dark:border-green-700">
            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
            <AlertDescription className="text-green-700 dark:text-green-200">
              お問い合わせを受け付けました。24時間以内にご返信いたします。
            </AlertDescription>
          </Alert>
        )}

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">お問い合わせフォーム</h2>
          <ContactForm />
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">運営者情報</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300">運営者</h3>
              <p>愛車運勢診断運営チーム</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300">所在地</h3>
              <p>〒224-0029 神奈川県横浜市緑区中山3-1-8-207</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300">メールアドレス</h3>
              <p>kanaukiryu@gmail.com</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300">電話番号</h3>
              <p>090-6483-3637</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700 dark:text-gray-300">対応時間</h3>
              <p>平日 10:00〜18:00（土日祝日・年末年始を除く）</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
