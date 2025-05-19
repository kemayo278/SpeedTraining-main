import type React from "react"
import { Inter, Lato } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

import "./globals.css"
import { NavigationProgress } from "@/components/ui/nprogress"
import WebsiteLayout from "@/components/Shared/Layout/WebsiteLayout"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
  weight: ["400", "700"],
  style: ["normal", "italic"],
})

export const metadata = {
  title: "Kokitech Group Academy - Plateforme E-learning",
  description: "Développez vos compétences avec des formations de qualité dans divers domaines",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <Suspense>
            <NavigationProgress />
            <div className="relative flex min-h-screen flex-col">
              <WebsiteLayout>{children}</WebsiteLayout>
            </div>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
