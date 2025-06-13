import React from 'react'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fractal Ambassador',
  description: 'Ambassador Program Dashboard',
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
      </head>
      <body className={`${inter.className} h-full antialiased safe-area-padding`}>
        {children}
      </body>
    </html>
  )
} 