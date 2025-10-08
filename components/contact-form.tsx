"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    // フォームの送信はFormspreeが処理するため、ここでは何もしない
    // ただし、送信中の状態は表示するために維持
    setIsSubmitting(true)
    // Formspreeはページをリダイレクトするため、このコードは実行されない可能性がある
    setTimeout(() => setIsSubmitting(false), 2000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <form action="https://formspree.io/f/mkgbwqnq" method="POST" onSubmit={handleSubmit} className="space-y-4">
      {/* お名前 */}
      <div>
        <Label htmlFor="name" className="text-gray-700 dark:text-gray-200">
          お名前 <span className="text-red-500">*</span>
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
          placeholder="山田太郎"
          required
          className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
        />
      </div>

      {/* メールアドレス */}
      <div>
        <Label htmlFor="email" className="text-gray-700 dark:text-gray-200">
          メールアドレス <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          placeholder="example@email.com"
          required
          className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
        />
      </div>

      {/* お問い合わせ種別 */}
      <div>
        <Label htmlFor="category" className="text-gray-700 dark:text-gray-200">
          お問い合わせ種別 <span className="text-red-500">*</span>
        </Label>
        <Select
          name="category"
          value={formData.category}
          onValueChange={(value) => handleInputChange("category", value)}
          required
        >
          <SelectTrigger className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600">
            <SelectValue placeholder="お問い合わせの種別を選択してください" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="service">サービスに関するご質問</SelectItem>
            <SelectItem value="technical">技術的なお困りごと</SelectItem>
            <SelectItem value="suggestion">改善のご提案</SelectItem>
            <SelectItem value="business">ビジネス・提携に関するお問い合わせ</SelectItem>
            <SelectItem value="media">メディア・取材に関するお問い合わせ</SelectItem>
            <SelectItem value="other">その他</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* 件名 */}
      <div>
        <Label htmlFor="subject" className="text-gray-700 dark:text-gray-200">
          件名 <span className="text-red-500">*</span>
        </Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          value={formData.subject}
          onChange={(e) => handleInputChange("subject", e.target.value)}
          placeholder="お問い合わせの件名を入力してください"
          required
          className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
        />
      </div>

      {/* お問い合わせ内容 */}
      <div>
        <Label htmlFor="message" className="text-gray-700 dark:text-gray-200">
          お問い合わせ内容 <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          placeholder="お問い合わせ内容を詳しくご記入ください"
          required
          rows={6}
          className="mt-1 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600"
        />
      </div>

      {/* Formspreeのリダイレクト設定 */}
      <input
        type="hidden"
        name="_next"
        value={
          typeof window !== "undefined" ? `${window.location.origin}/contact?success=true` : "/contact?success=true"
        }
      />

      {/* 送信ボタン */}
      <Button
        type="submit"
        disabled={
          isSubmitting ||
          !formData.name ||
          !formData.email ||
          !formData.subject ||
          !formData.category ||
          !formData.message
        }
        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            送信中...
          </>
        ) : (
          "お問い合わせを送信"
        )}
      </Button>

      {/* 注意事項 */}
      <p className="text-xs text-gray-500 dark:text-gray-400">
        <span className="text-red-500">*</span> は必須項目です。
        お問い合わせいただいた内容は、プライバシーポリシーに基づき適切に管理いたします。
      </p>
    </form>
  )
}
