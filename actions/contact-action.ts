"use server"

export async function submitContactForm(formData: FormData) {
  // フォームデータの取得
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const category = formData.get("category") as string
  const message = formData.get("message") as string

  // バリデーション
  if (!name || !email || !subject || !category || !message) {
    return {
      success: false,
      message: "必須項目が入力されていません。",
    }
  }

  // メールアドレスの簡単なバリデーション
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "有効なメールアドレスを入力してください。",
    }
  }

  try {
    // 実際の実装では、ここでメール送信やデータベース保存を行います
    // 現在はシミュレーション
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // ログ出力（開発環境での確認用）
    console.log("お問い合わせ受信:", {
      name,
      email,
      subject,
      category,
      message,
      timestamp: new Date().toISOString(),
    })

    // 実際の実装例：
    // 1. データベースに保存
    // await saveContactToDatabase({ name, email, subject, category, message })

    // 2. 管理者にメール通知
    // await sendNotificationEmail({ name, email, subject, category, message })

    // 3. 自動返信メール送信
    // await sendAutoReplyEmail(email, name)

    return {
      success: true,
      message: "お問い合わせを受け付けました。",
    }
  } catch (error) {
    console.error("お問い合わせ送信エラー:", error)
    return {
      success: false,
      message: "送信に失敗しました。しばらく時間をおいて再度お試しください。",
    }
  }
}
