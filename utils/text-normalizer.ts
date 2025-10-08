// 全角数字を半角数字に変換
function convertFullWidthToHalfWidth(text: string): string {
  return text.replace(/[０-９]/g, (char) => {
    return String.fromCharCode(char.charCodeAt(0) - 0xfee0)
  })
}

// 車のナンバープレート入力を正規化
export function normalizeCarNumberInput(input: string): string {
  if (!input) return ""

  // 全角数字を半角数字に変換
  let normalized = convertFullWidthToHalfWidth(input)

  // 不要な文字を除去（地名、ひらがな、カタカナ、漢字、アルファベット）
  normalized = normalized
    .replace(/[あ-ん]/g, "") // ひらがな除去
    .replace(/[ア-ン]/g, "") // カタカナ除去
    .replace(/[一-龯]/g, "") // 漢字除去（地名）
    .replace(/[a-zA-Z]/g, "") // アルファベット除去
    .replace(/[\s-]/g, "") // スペースとハイフン除去
    .trim()

  return normalized
}

// 住所用の正規化関数（既存のまま保持）
export function normalizeAddressInput(input: string): string {
  if (!input) return ""

  // 全角数字を半角数字に変換
  let normalized = convertFullWidthToHalfWidth(input)

  // 住所特有の文字を正規化
  normalized = normalized
    .replace(/丁目/g, "-")
    .replace(/番地/g, "-")
    .replace(/番/g, "-")
    .replace(/号/g, "")
    .replace(/の/g, "-")
    .replace(/[\s　]/g, "") // 全角・半角スペース除去
    .replace(/-+/g, "-") // 連続するハイフンを1つに
    .replace(/^-|-$/g, "") // 先頭・末尾のハイフン除去
    .trim()

  return normalized
}
