"use client"

import type React from "react"

import { useState } from "react"
import { BarChart3, Bug, DollarSign, Home, LayoutDashboard, Map, Search, Shield, TrendingUp, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/components/theme-provider"
import { SEOOptimization } from "./seo-optimization"
import { KeywordResearch } from "./keyword-research"

const links = [
  { id: "dashboard", label: "ダッシュボード", icon: LayoutDashboard },
  { id: "profile", label: "プロフィール", icon: User },
  { id: "home", label: "ホームページ", icon: Home },
]

const tabs = [
  { id: "analytics", label: "アナリティクス", icon: BarChart3 },
  { id: "adsense", label: "AdSense", icon: DollarSign },
  { id: "roadmap", label: "ロードマップ", icon: Map },
  { id: "seo", label: "SEO分析", icon: TrendingUp },
  { id: "keywords", label: "キーワード", icon: Search },
  { id: "verification", label: "データ検証", icon: Shield },
  { id: "debug", label: "デバッグ", icon: Bug },
]

export function DevPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState(tabs[0].id)
  const { setTheme } = useTheme()

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">開発パネル</Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>開発パネル</SheetTitle>
          <SheetDescription>サイトのデバッグと管理に使用できるツール。</SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="flex items-center justify-between space-x-2">
            <label
              htmlFor="theme"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              テーマ
            </label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  テーマを選択
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>ライト</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>ダーク</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>システム</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center justify-between space-x-2">
            <label
              htmlFor="analytics"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              アナリティクス
            </label>
            <Switch id="analytics" />
          </div>
        </div>
        <div className="divide-border divide-y">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant="ghost"
              className="flex w-full items-center justify-start gap-2 p-2 data-[state=active]:bg-secondary data-[state=active]:text-muted-foreground"
              onClick={() => setActiveTab(tab.id)}
              data-state={activeTab === tab.id ? "active" : "inactive"}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </Button>
          ))}
        </div>
        <div className="mt-4">
          {activeTab === "analytics" && <div>アナリティクスコンテンツ</div>}
          {activeTab === "adsense" && <div>AdSenseコンテンツ</div>}
          {activeTab === "roadmap" && <div>ロードマップコンテンツ</div>}
          {activeTab === "seo" && <SEOOptimization />}
          {activeTab === "keywords" && <KeywordResearch />}
          {activeTab === "verification" && <div>データ検証コンテンツ</div>}
          {activeTab === "debug" && <div>デバッグコンテンツ</div>}
        </div>
      </SheetContent>
    </Sheet>
  )
}

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <a href={href} className="text-sm font-medium text-muted-foreground hover:text-foreground">
      {children}
    </a>
  )
}
