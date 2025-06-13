'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { User, Award, Zap, Star, Target, Users } from 'lucide-react'
import CircularProgress from './CircularProgress'

const stats = [
  { label: 'Tasks', value: '42', icon: Target, color: 'text-blue-400' },
  { label: 'Points', value: '1.3K', icon: Star, color: 'text-amber-400' },
  { label: 'Streak', value: '15d', icon: Zap, color: 'text-orange-400' },
  { label: 'Refs', value: '8', icon: Users, color: 'text-emerald-400' },
]

const achievements = [
  { title: 'First Steps', description: 'Complete first task', unlocked: true },
  { title: 'Social Pro', description: 'Share 10 posts', unlocked: true },
  { title: 'Leader', description: 'Reach 1K points', unlocked: true },
  { title: 'Influencer', description: 'Get 50 referrals', unlocked: false },
  { title: 'Legend', description: '30-day streak', unlocked: false },
]

export default function MyHub() {
  return (
    <div className="p-4 space-y-4">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="profile-card p-5"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="icon-container">
              <User className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-glass-primary">@cryptoninja47</h1>
              <p className="text-sm text-glass-secondary">Elite Ambassador</p>
            </div>
          </div>
          <div className="icon-container-small">
            <span className="text-gradient font-bold text-lg">7</span>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-glass-secondary">Level Progress</span>
            <span className="text-sm font-medium text-glass-primary">68%</span>
          </div>
          
          {/* Анимированный круговой прогресс */}
          <div className="flex items-center justify-center mb-4">
            <CircularProgress progress={68} level={7} />
          </div>
        </div>
        
        <div className="mt-4 glass-card p-3">
          <div className="flex items-center justify-center space-x-2 text-amber-400">
            <Zap size={16} />
            <span className="font-medium text-glass-primary">2.5x Active</span>
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="stat-card p-4 text-center"
            >
              <div className="flex justify-center mb-2">
                <div className="icon-container-small">
                  <IconComponent className={stat.color} size={18} />
                </div>
              </div>
              <div className="text-xl font-semibold text-glass-primary">{stat.value}</div>
              <div className="text-xs text-glass-muted uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          )
        })}
      </div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="glass-card p-5"
      >
        <div className="flex items-center space-x-2 mb-4">
          <div className="icon-container-small">
            <Award className="text-amber-400" size={18} />
          </div>
          <h2 className="text-lg font-semibold text-glass-primary">Achievements</h2>
        </div>
        
        <div className="space-y-3">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className={`p-3 ${
                achievement.unlocked 
                  ? 'achievement-card' 
                  : 'achievement-card-locked'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    achievement.unlocked 
                      ? 'bg-amber-400/30 text-amber-300 border border-amber-400/40' 
                      : 'bg-gray-600/30 text-gray-400 border border-gray-500/40'
                  }`}>
                    {achievement.unlocked ? '✓' : '○'}
                  </div>
                  <div>
                    <h3 className={`font-medium ${
                      achievement.unlocked ? 'text-glass-primary' : 'text-glass-muted'
                    }`}>
                      {achievement.title}
                    </h3>
                    <p className={`text-xs ${
                      achievement.unlocked ? 'text-glass-secondary' : 'text-gray-400'
                    }`}>
                      {achievement.description}
                    </p>
                  </div>
                </div>
                {achievement.unlocked && (
                  <Star className="text-amber-400" size={16} fill="currentColor" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  )
} 