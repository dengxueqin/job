/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    // WakaTime API Key 将通过环境变量来处理
    WAKATIME_API_KEY: process.env.WAKATIME_API_KEY,
  },
}

module.exports = nextConfig 