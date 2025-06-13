/** @type {import('next').NextConfig} */
const nextConfig = {
  // Убираем статический экспорт для Vercel
  // output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  // Базовый путь только для production на GitHub Pages
  // Для Vercel не нужен basePath
  ...(process.env.GITHUB_PAGES && {
    output: 'export',
    trailingSlash: true,
    assetPrefix: '/fractalDemo',
    basePath: '/fractalDemo',
  }),
}

module.exports = nextConfig 