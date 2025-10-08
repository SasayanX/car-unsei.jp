import type { AddressAnalysis } from "./address-analyzer"

export interface HistoryItem {
  id: string
  address: string
  analysis: AddressAnalysis
  timestamp: number
}

export interface FavoriteItem {
  id: string
  address: string
  analysis: AddressAnalysis
  timestamp: number
  note?: string
}

// 履歴管理
export const historyStorage = {
  getAll: (): HistoryItem[] => {
    if (typeof window === "undefined") return []
    try {
      const data = localStorage.getItem("address-fortune-history")
      return data ? JSON.parse(data) : []
    } catch {
      return []
    }
  },

  add: (address: string, analysis: AddressAnalysis): void => {
    if (typeof window === "undefined") return
    try {
      const history = historyStorage.getAll()
      const newItem: HistoryItem = {
        id: Date.now().toString(),
        address,
        analysis,
        timestamp: Date.now(),
      }

      // 最新を先頭に、最大50件まで保存
      const updatedHistory = [newItem, ...history.slice(0, 49)]
      localStorage.setItem("address-fortune-history", JSON.stringify(updatedHistory))
    } catch (error) {
      console.error("履歴の保存に失敗しました:", error)
    }
  },

  remove: (id: string): void => {
    if (typeof window === "undefined") return
    try {
      const history = historyStorage.getAll()
      const filtered = history.filter((item) => item.id !== id)
      localStorage.setItem("address-fortune-history", JSON.stringify(filtered))
    } catch (error) {
      console.error("履歴の削除に失敗しました:", error)
    }
  },

  clear: (): void => {
    if (typeof window === "undefined") return
    try {
      localStorage.removeItem("address-fortune-history")
    } catch (error) {
      console.error("履歴のクリアに失敗しました:", error)
    }
  },
}

// お気に入り管理
export const favoriteStorage = {
  getAll: (): FavoriteItem[] => {
    if (typeof window === "undefined") return []
    try {
      const data = localStorage.getItem("address-fortune-favorites")
      return data ? JSON.parse(data) : []
    } catch {
      return []
    }
  },

  add: (address: string, analysis: AddressAnalysis, note?: string): void => {
    if (typeof window === "undefined") return
    try {
      const favorites = favoriteStorage.getAll()

      // 既に存在する場合は更新
      const existingIndex = favorites.findIndex((item) => item.address === address)
      if (existingIndex >= 0) {
        favorites[existingIndex] = {
          ...favorites[existingIndex],
          analysis,
          note,
          timestamp: Date.now(),
        }
      } else {
        const newItem: FavoriteItem = {
          id: Date.now().toString(),
          address,
          analysis,
          timestamp: Date.now(),
          note,
        }
        favorites.unshift(newItem)
      }

      localStorage.setItem("address-fortune-favorites", JSON.stringify(favorites))
    } catch (error) {
      console.error("お気に入りの保存に失敗しました:", error)
    }
  },

  remove: (id: string): void => {
    if (typeof window === "undefined") return
    try {
      const favorites = favoriteStorage.getAll()
      const filtered = favorites.filter((item) => item.id !== id)
      localStorage.setItem("address-fortune-favorites", JSON.stringify(filtered))
    } catch (error) {
      console.error("お気に入りの削除に失敗しました:", error)
    }
  },

  isFavorite: (address: string): boolean => {
    const favorites = favoriteStorage.getAll()
    return favorites.some((item) => item.address === address)
  },
}
