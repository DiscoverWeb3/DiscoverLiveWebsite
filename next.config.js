/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://192.168.20.10:3000/api/:path*',
      },
    ]
  },
}

module.exports = nextConfig
