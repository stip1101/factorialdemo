'use client'

import React from 'react'
import { useSpring, animated } from '@react-spring/web'

interface CircularProgressProps {
  progress: number
  level: number
  className?: string
}

export default function CircularProgress({ progress, level, className = '' }: CircularProgressProps) {
  const circumference = 2 * Math.PI * 45
  
  const { dashoffset, scale, glow } = useSpring({
    dashoffset: circumference - (progress / 100) * circumference,
    scale: progress > 80 ? 1.05 : 1,
    glow: progress > 80 ? 1 : 0,
    config: { tension: 300, friction: 30 }
  })

  const { numberOpacity } = useSpring({
    numberOpacity: 1,
    from: { numberOpacity: 0 },
    delay: 300,
    config: { tension: 200, friction: 20 }
  })

  const getProgressColor = () => {
    if (progress >= 80) return '#F59E0B' // amber-500
    if (progress >= 60) return '#10B981' // emerald-500
    if (progress >= 40) return '#3B82F6' // blue-500
    return '#8B5CF6' // violet-500
  }

  const getLevelColor = () => {
    if (level >= 10) return 'text-amber-300'
    if (level >= 7) return 'text-emerald-300'
    if (level >= 5) return 'text-blue-300'
    return 'text-violet-300'
  }

  return (
    <div className={`relative ${className}`}>
      <animated.div 
                 style={{ transform: scale.to((s: number) => `scale(${s})`) }}
        className="relative w-24 h-24"
      >
        {/* Background Circle */}
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="8"
            className="drop-shadow-sm"
          />
          
          {/* Progress Circle */}
          <animated.circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke={getProgressColor()}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={dashoffset}
            className="drop-shadow-lg transition-all duration-300"
            style={{
              filter: glow.to((g: number) => g > 0 ? `drop-shadow(0 0 10px ${getProgressColor()})` : 'none')
            }}
          />
        </svg>
        
        {/* Center Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <animated.div 
            style={{ opacity: numberOpacity }}
            className="text-center"
          >
            <div className="text-xl font-bold text-white drop-shadow-lg">
              {Math.round(progress)}%
            </div>
            <div className={`text-xs font-medium ${getLevelColor()} drop-shadow-md`}>
              Level {level}
            </div>
          </animated.div>
        </div>
        
        {/* Sparkle Effects for High Progress */}
        {progress > 90 && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <animated.div
                key={i}
                className="absolute w-2 h-2 bg-amber-300 rounded-full"
                style={{
                  top: `${20 + i * 20}%`,
                  left: `${10 + i * 30}%`,
                  animation: `sparkle 2s infinite ${i * 0.5}s`,
                }}
              />
            ))}
          </div>
        )}
      </animated.div>
      
      {/* Progress Label */}
      <div className="text-center mt-2">
        <div className="text-xs font-medium text-white/90 drop-shadow-md">
          {progress < 100 ? 'In Progress' : 'Completed!'}
        </div>
      </div>

      <style jsx>{`
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
} 