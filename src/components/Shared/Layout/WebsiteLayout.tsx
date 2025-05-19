// components/layouts/WebsiteLayout.tsx
import type { ReactNode } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

interface WebsiteLayoutProps {
  children: ReactNode
}

export default function WebsiteLayout({ children }: WebsiteLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
