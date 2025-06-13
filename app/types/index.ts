export type Tab = 'hub' | 'board' | 'growth'

export interface Task {
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

export interface Ambassador {
  rank: number
  name: string
  points: number
  change: number
  level: number
  streak: number
  isCurrentUser?: boolean
}

export interface Achievement {
  id: string
  title: string
  description: string
  icon: any
  unlocked: boolean
  progress?: number
  maxProgress?: number
  rarity: 'common' | 'rare' | 'epic' | 'legendary'
} 