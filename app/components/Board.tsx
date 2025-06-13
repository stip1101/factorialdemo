'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Share2, 
  Video, 
  Users, 
  MessageSquare,
  TestTube,
  Clock, 
  Star, 
  CheckCircle
} from 'lucide-react'
import TaskModal from './TaskModal'

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

const tasks: Task[] = [
  {
    id: '1',
    title: 'Share Weekly Update',
    description: 'Share our latest development update on your social media platforms.',
    reward: 150,
    timeEstimate: '5 min',
    difficulty: 'Easy',
    category: 'Social',
    icon: Share2,
  },
  {
    id: '2',
    title: 'Create Tutorial Video',
    description: 'Create a 3-5 minute tutorial explaining key features.',
    reward: 500,
    timeEstimate: '2 hours',
    difficulty: 'Hard',
    category: 'Content',
    icon: Video,
  },
  {
    id: '3',
    title: 'Host Community AMA',
    description: 'Organize and host AMA session in Discord community.',
    reward: 300,
    timeEstimate: '1 hour',
    difficulty: 'Medium',
    category: 'Community',
    icon: MessageSquare,
  },
  {
    id: '4',
    title: 'Recruit New Members',
    description: 'Invite 5 new active members with your referral link.',
    reward: 250,
    timeEstimate: '1 week',
    difficulty: 'Medium',
    category: 'Community',
    icon: Users,
  },
  {
    id: '5',
    title: 'Beta Feature Testing',
    description: 'Test beta features and provide detailed feedback.',
    reward: 400,
    timeEstimate: '3 hours',
    difficulty: 'Medium',
    category: 'Special',
    icon: TestTube,
    completed: true,
  },
]

export default function Board() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [submitUrl, setSubmitUrl] = useState('')
  const [showSubmitForm, setShowSubmitForm] = useState(false)

  const handleTaskClick = (task: Task) => {
    if (!task.completed) {
      setSelectedTask(task)
    }
  }

  const handleSubmitWork = () => {
    if (submitUrl.trim()) {
      setShowSubmitForm(false)
      setSelectedTask(null)
      setSubmitUrl('')
      setTimeout(() => {
        alert('Work submitted successfully! 🎉')
      }, 100)
    }
  }

  const getDifficultyColor = (difficulty: Task['difficulty']) => {
    switch (difficulty) {
      case 'Easy': return 'bg-emerald-400/20 text-emerald-300 border-emerald-400/40'
      case 'Medium': return 'bg-amber-400/20 text-amber-300 border-amber-400/40'
      case 'Hard': return 'bg-red-400/20 text-red-300 border-red-400/40'
    }
  }

  return (
    <div className="p-4 space-y-4">
      <div className="text-center mb-6">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
          <h1 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Task Board</h1>
          <p className="text-white/90 text-sm drop-shadow-md">Complete tasks to earn rewards</p>
        </div>
      </div>

      {/* Stats */}
      <div className="glass-card p-4 mb-4">
        <div className="grid grid-cols-3 divide-x divide-gray-500/30">
          <div className="text-center px-3">
            <div className="text-xl font-semibold text-glass-primary">12</div>
            <div className="text-xs text-glass-muted uppercase tracking-wide">Available</div>
          </div>
          <div className="text-center px-3">
            <div className="text-xl font-semibold text-glass-primary">8</div>
            <div className="text-xs text-glass-muted uppercase tracking-wide">Completed</div>
          </div>
          <div className="text-center px-3">
            <div className="text-xl font-semibold text-glass-primary">2.1K</div>
            <div className="text-xs text-glass-muted uppercase tracking-wide">Points</div>
          </div>
        </div>
      </div>

      {/* Tasks */}
      <div className="space-y-3">
        {tasks.map((task, index) => {
          const IconComponent = task.icon
          
          return (
            <motion.div
              key={task.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => handleTaskClick(task)}
              className={`task-card p-4 relative ${
                task.completed 
                  ? 'opacity-60 cursor-not-allowed' 
                  : 'cursor-pointer'
              }`}
            >
              <div className="flex items-start space-x-3">
                <div className={`icon-container ${
                  task.completed ? 'bg-emerald-400/30 border-emerald-400/40' : ''
                }`}>
                  {task.completed ? (
                    <CheckCircle className="text-emerald-300" size={20} />
                  ) : (
                    <IconComponent className="text-white" size={20} />
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-glass-primary font-medium">{task.title}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="text-amber-400" size={14} fill="currentColor" />
                      <span className="text-glass-primary text-sm font-medium">{task.reward}</span>
                    </div>
                  </div>
                  
                  <p className="text-glass-secondary text-sm mb-2">{task.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Clock className="text-glass-muted" size={14} />
                        <span className="text-glass-muted text-xs">{task.timeEstimate}</span>
                      </div>
                    </div>
                    
                    <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(task.difficulty)}`}>
                      {task.difficulty}
                    </div>
                  </div>
                </div>
              </div>
              
              {task.completed && (
                <div className="absolute top-3 right-3 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="text-black" size={16} />
                </div>
              )}
            </motion.div>
          )
        })}
      </div>

      {/* Task Modal */}
      {selectedTask && (
        <TaskModal
          task={selectedTask}
          showSubmitForm={showSubmitForm}
          submitUrl={submitUrl}
          onClose={() => setSelectedTask(null)}
          onStartTask={() => setShowSubmitForm(true)}
          onSubmit={handleSubmitWork}
          onCancel={() => setShowSubmitForm(false)}
          onUrlChange={setSubmitUrl}
        />
      )}
    </div>
  )
} 