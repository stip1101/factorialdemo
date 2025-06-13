'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Star, Flame } from 'lucide-react'
import AnimatedLeaderboard from './AnimatedLeaderboard'

interface Ambassador {
  id: string
  rank: number
  name: string
  points: number
  level: number
  streak: number
  tasksCompleted: number
  isCurrentUser?: boolean
}

const ambassadors: Ambassador[] = [
  {
    id: '1',
    rank: 1,
    name: 'CryptoKing999',
    points: 15420,
    level: 15,
    streak: 45,
    tasksCompleted: 156,
  },
  {
    id: '2',
    rank: 2,
    name: 'BlockchainBae',
    points: 12890,
    level: 13,
    streak: 32,
    tasksCompleted: 134,
  },
  {
    id: '3',
    rank: 3,
    name: 'DefiDominator',
    points: 11650,
    level: 12,
    streak: 28,
    tasksCompleted: 121,
  },
  {
    id: '4',
    rank: 4,
    name: 'NFTWhale2024',
    points: 9840,
    level: 11,
    streak: 22,
    tasksCompleted: 98,
  },
  {
    id: '5',
    rank: 5,
    name: 'MetaverseBuilder',
    points: 8650,
    level: 10,
    streak: 18,
    tasksCompleted: 87,
  },
  {
    id: '6',
    rank: 6,
    name: 'CryptoNinja47',
    points: 7420,
    level: 9,
    streak: 15,
    tasksCompleted: 74,
    isCurrentUser: true,
  },
]

const stats = [
  { label: 'Total Ambassadors', value: '2.4K', icon: Users },
  { label: 'Weekly Growth', value: '+12%', icon: TrendingUp },
  { label: 'Top Streak', value: '89d', icon: Flame },
  { label: 'Avg Level', value: '8.2', icon: Star },
]

export default function Growth() {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'all'>('week')



  return (
    <div className="p-4 space-y-4">
      <div className="text-center mb-6">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
          <h1 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Leaderboard</h1>
          <p className="text-white/90 text-sm drop-shadow-md">Top performers this period</p>
        </div>
      </div>

      {/* Period Selector */}
      <div className="glass-card p-2 mb-4">
        <div className="flex bg-gray-600/30 rounded-xl p-1">
          {(['week', 'month', 'all'] as const).map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                selectedPeriod === period
                  ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg'
                  : 'text-glass-muted hover:text-glass-secondary'
              }`}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="stat-card p-3 text-center"
            >
              <div className="flex justify-center mb-2">
                <div className="icon-container-small">
                  <IconComponent className="text-amber-400" size={16} />
                </div>
              </div>
              <div className="text-lg font-semibold text-glass-primary">{stat.value}</div>
              <div className="text-xs text-glass-muted">{stat.label}</div>
            </motion.div>
          )
        })}
      </div>

      {/* Animated Leaderboard */}
      <AnimatedLeaderboard ambassadors={ambassadors} />
    </div>
  )
} 