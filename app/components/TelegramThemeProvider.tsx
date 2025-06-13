'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

interface TelegramTheme {
  bg_color?: string
  text_color?: string
  hint_color?: string
  link_color?: string
  button_color?: string
  button_text_color?: string
  secondary_bg_color?: string
  header_bg_color?: string
  accent_text_color?: string
  section_bg_color?: string
  section_header_text_color?: string
  subtitle_text_color?: string
  destructive_text_color?: string
}

interface TelegramThemeContextType {
  theme: TelegramTheme | null
  isClient: boolean
}

const TelegramThemeContext = createContext<TelegramThemeContextType>({
  theme: null,
  isClient: false
})

export const useTelegramTheme = () => useContext(TelegramThemeContext)

export default function TelegramThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<TelegramTheme | null>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const tg = window.Telegram.WebApp
      setTheme(tg.themeParams)
      
      // Инициализация Telegram WebApp
      tg.ready()
      tg.expand()
    }
  }, [])

  return (
    <TelegramThemeContext.Provider value={{ theme, isClient }}>
      {children}
    </TelegramThemeContext.Provider>
  )
} 