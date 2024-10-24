/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['images.pexels.com'],
  },
  webpack: (config, {dev}) => {
    if (dev) {
      config.watchOptions = {
        poll: 800, // Check for changes every second
        aggregateTimeout: 200, // Delay before rebuilding
      }
    }
    return config
  },
}

export default nextConfig
