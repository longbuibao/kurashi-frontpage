/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    staticGenerationMaxConcurrency: 2,
    staticGenerationMinPagesPerWorker: 10
  },
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
  }
}

export default nextConfig
