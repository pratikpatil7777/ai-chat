/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    typedRoutes: true,
    instrumentationHook: true
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production'
  },
  eslint: {
    dirs: ['src']
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.microsoft.com'
      },
      {
        protocol: 'https',
        hostname: '**.americanexpress.com'
      }
    ]
  },
  output: 'standalone'
};

module.exports = nextConfig;
