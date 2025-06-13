import dynamic from 'next/dynamic'

// Динамически загружаемые компоненты без SSR
export const DynamicMyHub = dynamic(() => import('./MyHub'), { 
  ssr: false,
  loading: () => (
    <div className="p-4 space-y-4 animate-pulse">
      <div className="profile-card p-5">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-600/50 rounded-2xl"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-600/50 rounded w-32"></div>
            <div className="h-3 bg-gray-500/50 rounded w-24"></div>
          </div>
        </div>
      </div>
    </div>
  )
})

export const DynamicBoard = dynamic(() => import('./Board'), { 
  ssr: false,
  loading: () => (
    <div className="p-4 space-y-4 animate-pulse">
      <div className="text-center mb-6">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
          <div className="h-6 bg-gray-600/50 rounded mx-auto w-32 mb-2"></div>
          <div className="h-4 bg-gray-500/50 rounded mx-auto w-48"></div>
        </div>
      </div>
    </div>
  )
})

export const DynamicGrowth = dynamic(() => import('./Growth'), { 
  ssr: false,
  loading: () => (
    <div className="p-4 space-y-4 animate-pulse">
      <div className="text-center mb-6">
        <div className="bg-black/40 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
          <div className="h-6 bg-gray-600/50 rounded mx-auto w-32 mb-2"></div>
          <div className="h-4 bg-gray-500/50 rounded mx-auto w-48"></div>
        </div>
      </div>
    </div>
  )
})

export const DynamicTabNavigation = dynamic(() => import('./TabNavigation'), { 
  ssr: false,
  loading: () => (
    <div className="fixed bottom-0 left-0 right-0 z-50">
      <div className="mx-4 glass-nav p-2" style={{ marginBottom: `calc(1rem + env(safe-area-inset-bottom))` }}>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="py-3 px-4 flex flex-col items-center space-y-1 animate-pulse">
              <div className="w-5 h-5 bg-gray-600/50 rounded"></div>
              <div className="w-12 h-3 bg-gray-500/50 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}) 