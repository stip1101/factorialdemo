'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Crown, Trophy, Medal, Star, Flame, TrendingUp } from 'lucide-react'

interface LeaderProps {
  ambassador: {
    id: string
    rank: number
    name: string
    points: number
    level: number
    streak: number
    isCurrentUser?: boolean
  }
  index: number
}

interface TopThreeProps {
  leaders: LeaderProps['ambassador'][]
}

const TopThreePodium = ({ leaders }: TopThreeProps) => {
  const podiumHeights = [16, 20, 12] // heights for 2nd, 1st, 3rd
  const podiumOrder = [leaders[1], leaders[0], leaders[2]] // 2nd, 1st, 3rd
  
  return (
    <div className="glass-card p-6 mb-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-white drop-shadow-lg mb-2">🏆 Champions</h3>
        <div className="w-20 h-1 bg-gradient-to-r from-amber-400 to-yellow-400 rounded-full mx-auto"></div>
      </div>
      
      <div className="flex items-end justify-center space-x-2">
        {podiumOrder.map((leader, podiumIndex) => {
          if (!leader) return null
          
          const actualRank = leader.rank
          const height = podiumHeights[podiumIndex]
          
          const getRankIcon = () => {
            switch (actualRank) {
              case 1: return <Crown className="text-amber-400" size={24} />
              case 2: return <Trophy className="text-gray-300" size={20} />
              case 3: return <Medal className="text-amber-600" size={18} />
              default: return null
            }
          }
          
          const getRankColor = () => {
            switch (actualRank) {
              case 1: return 'from-amber-400/30 to-yellow-400/30 border-amber-400/50'
              case 2: return 'from-gray-300/30 to-gray-400/30 border-gray-300/50'
              case 3: return 'from-amber-600/30 to-orange-600/30 border-amber-600/50'
              default: return ''
            }
          }
          
          return (
            <motion.div
              key={leader.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ 
                delay: podiumIndex * 0.2,
                type: "spring",
                stiffness: 100
              }}
              className="flex flex-col items-center"
            >
              {/* Avatar */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getRankColor()} border-2 flex items-center justify-center mb-2 relative`}
              >
                {getRankIcon()}
                {actualRank === 1 && (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full flex items-center justify-center"
                  >
                    ✨
                  </motion.div>
                )}
              </motion.div>
              
              {/* Name */}
              <div className="text-center mb-2">
                <div className={`text-sm font-bold ${
                  leader.isCurrentUser ? 'text-amber-300' : 'text-white'
                } drop-shadow-md truncate max-w-20`}>
                  {leader.name.length > 8 ? leader.name.slice(0, 8) + '...' : leader.name}
                </div>
                <div className="flex items-center justify-center space-x-1 mt-1">
                  <Star className="text-amber-400" size={12} fill="currentColor" />
                  <span className="text-xs text-white/90 font-medium">
                    {leader.points.toLocaleString()}
                  </span>
                </div>
              </div>
              
              {/* Podium */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: `${height * 4}px` }}
                transition={{ delay: 0.5 + podiumIndex * 0.1, duration: 0.8 }}
                className={`w-16 bg-gradient-to-t ${
                  actualRank === 1 
                    ? 'from-amber-500/40 to-amber-400/60' 
                    : actualRank === 2
                    ? 'from-gray-400/40 to-gray-300/60'
                    : 'from-amber-600/40 to-orange-500/60'
                } rounded-t-lg border-t-2 ${
                  actualRank === 1 
                    ? 'border-amber-400' 
                    : actualRank === 2
                    ? 'border-gray-300'
                    : 'border-amber-600'
                } relative`}
              >
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-white font-bold text-xs">
                  #{actualRank}
                </div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

const LeaderRow = ({ ambassador, index }: LeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.6 + index * 0.1 }}
      whileHover={{ scale: 1.02, x: 4 }}
      className={`leader-card p-4 ${
        ambassador.isCurrentUser ? 'ring-2 ring-amber-400/50 bg-amber-400/5' : ''
      }`}
    >
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gray-600/40 backdrop-blur-sm border border-gray-500/40 flex items-center justify-center">
            <span className="text-white font-bold text-sm">#{ambassador.rank}</span>
          </div>
          
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 border border-blue-400/40 flex items-center justify-center">
            <span className="text-white font-bold text-sm">
              {ambassador.name.charAt(0).toUpperCase()}
            </span>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className={`font-semibold ${
              ambassador.isCurrentUser ? 'text-amber-300' : 'text-white'
            } drop-shadow-sm`}>
              {ambassador.name}
            </h3>
            {ambassador.isCurrentUser && (
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-xs bg-amber-400/20 text-amber-300 px-2 py-0.5 rounded-full border border-amber-400/40"
              >
                You
              </motion.span>
            )}
          </div>
          
          <div className="flex items-center space-x-4 text-xs text-white/70">
            <div className="flex items-center space-x-1">
              <TrendingUp size={12} />
              <span>Lv.{ambassador.level}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Flame size={12} />
              <span>{ambassador.streak}d</span>
            </div>
          </div>
        </div>
        
        <div className="text-right">
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-1 justify-end"
          >
            <Star className="text-amber-400" size={16} fill="currentColor" />
            <span className="font-bold text-white drop-shadow-sm">
              {ambassador.points.toLocaleString()}
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

interface AnimatedLeaderboardProps {
  ambassadors: LeaderProps['ambassador'][]
}

export default function AnimatedLeaderboard({ ambassadors }: AnimatedLeaderboardProps) {
  const topThree = ambassadors.slice(0, 3)
  const remaining = ambassadors.slice(3)
  
  return (
    <div className="space-y-4">
      <TopThreePodium leaders={topThree} />
      
      {remaining.length > 0 && (
        <div className="space-y-3">
          {remaining.map((ambassador, index) => (
            <LeaderRow 
              key={ambassador.id} 
              ambassador={ambassador} 
              index={index} 
            />
          ))}
        </div>
      )}
    </div>
  )
} 