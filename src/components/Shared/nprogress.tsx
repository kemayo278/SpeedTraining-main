"use client"

import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import NProgress from "nprogress"

export function NavigationProgress() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Configuration de NProgress
    NProgress.configure({
      showSpinner: false,
      easing: "ease",
      speed: 300,
      minimum: 0.1,
    })

    // Démarrer la barre de progression
    NProgress.start()

    // Terminer la barre de progression après un court délai
    const timer = setTimeout(() => {
      NProgress.done()
    }, 300)

    return () => {
      clearTimeout(timer)
      NProgress.remove()
    }
  }, [pathname, searchParams])

  return null
}
