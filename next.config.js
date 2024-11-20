require('path')

const mainConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  }
}
/** @type {import('next').NextConfig} */
module.exports = {
  ...mainConfig,
  output: 'standalone',
  logging: {
    fetches: {
      fullUrl: true
    }
  }
}
