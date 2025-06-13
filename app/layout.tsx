import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import TelegramThemeProvider from './components/TelegramThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fractal Ambassador',
  description: 'Ambassador program for Fractal',
  other: {
    'telegram-web-app-capable': 'yes',
    'telegram-web-app-status-bar-style': 'default',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <script 
          src="https://telegram.org/js/telegram-web-app.js" 
          defer
        />
        <meta name="telegram-web-app-capable" content="yes" />
        <meta name="telegram-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
      </head>
      <body className={`${inter.className} h-full antialiased safe-area-padding`}>
        <TelegramThemeProvider>
          {children}
        </TelegramThemeProvider>
      </body>
    </html>
  )
} 