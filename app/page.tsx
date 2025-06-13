'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  DynamicMyHub, 
  DynamicBoard, 
  DynamicGrowth, 
  DynamicTabNavigation 
} from './components/DynamicComponents'
import type { Tab } from './types'

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('hub')

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
        return <DynamicMyHub />
      case 'board':
        return <DynamicBoard />
      case 'growth':
        return <DynamicGrowth />
      default:
        return <DynamicMyHub />
    }
  }

  return (
    <div className="min-h-screen" suppressHydrationWarning>
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
      <DynamicTabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  )
} 