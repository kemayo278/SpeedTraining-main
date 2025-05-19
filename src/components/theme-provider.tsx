"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  // Assurez-vous que le composant est monté côté client avant de rendre
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <>{children}</>
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

// Contexte pour accéder au thème dans n'importe quel composant
export const ThemeContext = createContext({
  theme: "",
  setTheme: (_theme: string) => {},
})

export const useTheme = () => useContext(ThemeContext)
