/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        port: '',
        pathname: '/kurashi_frontpage_files/**'
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/ench-app/**'
      }
      // /res.cloudinary.com
    ]
  },
  experimental: {
    typedRoutes: true,
    staticGenerationMaxConcurrency: 1
  }
}

export default nextConfig
