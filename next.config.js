/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logos-world.net',
      },
      {
        protocol: 'https',
        hostname: 'www.onlyfans.tv',
      },
    ],
  },
  // Optimize loading performance
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

module.exports = nextConfig

