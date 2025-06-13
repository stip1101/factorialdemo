'use client'

import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, X, Target } from 'lucide-react'

interface Task {
  id: string
  title: string
  description: string
  reward: number
  timeEstimate: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  category: 'Social' | 'Content' | 'Community' | 'Special'
  icon: any
  completed?: boolean
}

interface TaskModalProps {
  task: Task | null
  showSubmitForm: boolean
  submitUrl: string
  onClose: () => void
  onStartTask: () => void
  onSubmit: () => void
  onCancel: () => void
  onUrlChange: (url: string) => void
}

export default function TaskModal({
  task,
  showSubmitForm,
  submitUrl,
  onClose,
  onStartTask,
  onSubmit,
  onCancel,
  onUrlChange
}: TaskModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!task || !mounted) return null

  const modalContent = (
    <div 
      className="fixed inset-0 flex items-center justify-center p-4"
      style={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 10000,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(8px)'
      }}
    >
      <AnimatePresence>
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="modal-card p-5 w-full max-w-md max-h-[80vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-glass-primary">{task.title}</h2>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-600/50 hover:bg-gray-500/50 flex items-center justify-center text-gray-300 hover:text-white transition-colors"
            >
              <X size={18} />
            </button>
          </div>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-glass-primary font-medium mb-2">Description</h3>
              <p className="text-glass-secondary text-sm">{task.description}</p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-glass-muted text-xs mb-1 uppercase tracking-wide">Reward</h4>
                <div className="flex items-center space-x-1">
                  <Star className="text-amber-400" size={14} fill="currentColor" />
                  <span className="text-glass-primary font-medium">{task.reward}</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-glass-muted text-xs mb-1 uppercase tracking-wide">Time</h4>
                <span className="text-glass-primary">{task.timeEstimate}</span>
              </div>
            </div>
            
            <div className="glass-card p-3">
              <h4 className="text-amber-300 font-medium mb-1 text-sm">Requirements</h4>
              <p className="text-glass-secondary text-xs">
                Follow community guidelines and brand assets. Review within 24-48 hours.
              </p>
            </div>
            
            {!showSubmitForm ? (
              <button
                onClick={onStartTask}
                className="w-full btn-primary flex items-center justify-center space-x-2"
              >
                <span>Start Task</span>
                <Target size={16} />
              </button>
            ) : (
              <div className="space-y-3">
                <div>
                  <label className="block text-glass-primary font-medium mb-2 text-sm">
                    Submit Your Work
                  </label>
                  <input
                    type="url"
                    value={submitUrl}
                    onChange={(e) => onUrlChange(e.target.value)}
                    placeholder="Paste submission link..."
                    className="w-full p-3 bg-gray-600/50 backdrop-blur-sm border border-gray-500/40 rounded-2xl text-glass-primary placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:border-amber-400/50"
                  />
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={onCancel}
                    className="flex-1 btn-secondary"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={onSubmit}
                    disabled={!submitUrl.trim()}
                    className="flex-1 btn-primary disabled:opacity-50"
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Background overlay - click to close */}
      <div 
        className="absolute inset-0 -z-10"
        onClick={onClose}
      />
    </div>
  )

  return createPortal(modalContent, document.body)
} 