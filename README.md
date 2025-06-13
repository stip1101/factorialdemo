# Fractal Ambassador Demo

A beautiful Telegram Mini App demo for an ambassador program built with Next.js, Framer Motion, and Tailwind CSS.

## Features

- 🎨 **Beautiful gradient backgrounds** with animated elements
- 🖤 **Black glass-morphism UI elements** for modern aesthetics  
- 📱 **Three main sections**: My HUB, Board, Growth
- ✨ **Smooth animations** powered by Framer Motion
- 🚀 **Interactive components** with hover effects and micro-interactions
- 📊 **Gamified experience** with levels, points, streaks, and achievements
- 🏆 **Leaderboard system** to encourage competition
- 📋 **Task management** with submission workflows

## Sections

### 🏠 My HUB
- Personal ambassador profile
- Level progression with thermal/droplet aesthetics
- Achievement system
- Statistics dashboard
- Multiplier bonuses

### 📋 Board  
- Available tasks for ambassadors
- Task categories (Social, Content, Community, Special)
- Difficulty levels and rewards
- Submission workflow with links
- Progress tracking

### 📈 Growth
- Community leaderboard
- Ranking visualization with podium
- Personal position tracking
- Growth insights and statistics
- Time-based filtering (Week, Month, All Time)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## For Telegram Mini App

4. **Use ngrok for local testing:**
   ```bash
   ngrok http 3000
   ```

5. **Deploy to Vercel for production:**
   ```bash
   npm run build
   ```

## Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **Framer Motion** - Smooth animations and gestures
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icons
- **Telegram Web App SDK** - Telegram integration

## Project Structure

```
fractalDemo/
├── app/
│   ├── components/
│   │   ├── MyHub.tsx      # Ambassador profile section
│   │   ├── Board.tsx      # Tasks and missions section  
│   │   ├── Growth.tsx     # Leaderboard section
│   │   └── TabNavigation.tsx # Bottom navigation
│   ├── globals.css        # Global styles with custom animations
│   ├── layout.tsx         # Root layout with Telegram integration
│   └── page.tsx           # Main page with tab switching
├── types/
│   └── telegram-webapp.d.ts # Telegram WebApp type definitions
└── ...config files
```

## Key Features Implemented

- ✅ Responsive mobile-first design
- ✅ Glass-morphism UI with backdrop blur
- ✅ Animated gradient backgrounds
- ✅ Telegram WebApp SDK integration
- ✅ Interactive task submission flow
- ✅ Gamified progression system
- ✅ Real-time animations and micro-interactions
- ✅ Modern TypeScript architecture

## Demo Data

The app contains realistic demo data including:
- Sample ambassador profiles
- Various task types and difficulties
- Leaderboard rankings
- Achievement systems
- Statistics and progress tracking

Perfect for showcasing to clients and stakeholders!

## License

This is a demo project for presentation purposes. 