/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'jpcandelier.com',
        port: '',
        pathname: '/img/**',
      },
    ],
  },
}

module.exports = nextConfig
