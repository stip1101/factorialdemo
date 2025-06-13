'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Home, Clipboard, TrendingUp } from 'lucide-react'
import { Tab } from '../page'

interface TabNavigationProps {
  activeTab: Tab
  setActiveTab: (tab: Tab) => void
}

const tabs = [
  { id: 'hub' as Tab, label: 'Profile', icon: Home },
  { id: 'board' as Tab, label: 'Tasks', icon: Clipboard },
  { id: 'growth' as Tab, label: 'Ranking', icon: TrendingUp },
]

export default function TabNavigation({ activeTab, setActiveTab }: TabNavigationProps) {
  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50" 
      style={{ 
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999
      }}
    >
      <div className="mx-4 glass-nav p-2" style={{ marginBottom: `calc(1rem + env(safe-area-inset-bottom))` }}>
        <div className="grid grid-cols-3 gap-2">
          {tabs.map((tab) => {
            const IconComponent = tab.icon
            const isActive = activeTab === tab.id
            
            return (
              <motion.button
                key={tab.id}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`relative py-3 px-4 flex flex-col items-center space-y-1 transition-all duration-300 ${
                  isActive ? 'tab-active' : 'tab-inactive'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-600/50"
                    style={{
                      boxShadow: `
                        0 8px 25px -5px rgba(0, 0, 0, 0.4),
                        0 4px 16px 0 rgba(31, 38, 135, 0.3),
                        inset 0 1px 0 rgba(255, 255, 255, 0.1)
                      `
                    }}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <div className="relative z-10">
                  <IconComponent 
                    size={20} 
                    className={`${
                      isActive ? 'text-white' : 'text-gray-400'
                    } transition-colors duration-300`} 
                  />
                </div>
                
                <span className={`relative z-10 text-xs font-medium transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-gray-400'
                }`}>
                  {tab.label}
                </span>
                
                {/* Активный индикатор */}
                {isActive && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-400 rounded-full shadow-lg"
                    transition={{ delay: 0.1 }}
                  />
                )}
              </motion.button>
            )
          })}
        </div>
      </div>
    </div>
  )
} 