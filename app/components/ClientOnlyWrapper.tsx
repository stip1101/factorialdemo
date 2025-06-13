'use client'

import { Suspense, useState, useEffect } from 'react'
import { useTelegramTheme } from './TelegramThemeProvider'

interface ClientOnlyWrapperProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

function ClientContent({ children }: { children: React.ReactNode }) {
  const { isClient } = useTelegramTheme()
  
  if (!isClient) {
    return null
  }
  
  return <>{children}</>
}

export default function ClientOnlyWrapper({ children, fallback }: ClientOnlyWrapperProps) {
  return (
    <Suspense fallback={fallback || <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-green-50" />}>
      <ClientContent>{children}</ClientContent>
    </Suspense>
  )
}

// Хук для безопасного использования на клиенте
export function useIsClient() {
  const [isClient, setIsClient] = useState(false)
  
  useEffect(() => {
    setIsClient(true)
  }, [])
  
  return isClient
} 