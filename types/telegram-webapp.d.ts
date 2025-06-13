declare global {
  interface Window {
    Telegram?: {
      WebApp: {
        ready(): void
        expand(): void
        close(): void
        setHeaderColor(color: string): void
        setBackgroundColor(color: string): void
        MainButton: {
          setText(text: string): void
          onClick(callback: () => void): void
          show(): void
          hide(): void
          enable(): void
          disable(): void
        }
        BackButton: {
          show(): void
          hide(): void
          onClick(callback: () => void): void
        }
        initData: string
        initDataUnsafe: {
          user?: {
            id: number
            first_name: string
            last_name?: string
            username?: string
            language_code?: string
            is_premium?: boolean
          }
        }
        platform: string
        colorScheme: 'light' | 'dark'
        themeParams: {
          bg_color: string
          text_color: string
          hint_color: string
          link_color: string
          button_color: string
          button_text_color: string
        }
        isExpanded: boolean
        viewportHeight: number
        viewportStableHeight: number
      }
    }
  }
}

export {} 