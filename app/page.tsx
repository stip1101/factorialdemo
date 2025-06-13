'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import MyHub from './components/MyHub'
import Board from './components/Board'
import Growth from './components/Growth'
import TabNavigation from './components/TabNavigation'

export type Tab = 'hub' | 'board' | 'growth'

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('hub')

  useEffect(() => {
    // Initialize Telegram WebApp
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      window.Telegram.WebApp.ready()
      window.Telegram.WebApp.expand()
      window.Telegram.WebApp.setHeaderColor('#000000')
      window.Telegram.WebApp.setBackgroundColor('#FFF9E3')
    }
  }, [])

  const pageVariants = {
    initial: { opacity: 0, x: 20 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: -20 }
  }

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.3
  }

  const renderActiveTab = () => {
    switch (activeTab) {
      case 'hub':
        return <MyHub />
      case 'board':
        return <Board />
      case 'growth':
        return <Growth />
      default:
        return <MyHub />
    }
  }

  return (
    <div className="min-h-screen">
      {/* Main content */}
      <main className="pb-32">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
          >
            {renderActiveTab()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Tab Navigation - fixed at bottom */}
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
} 