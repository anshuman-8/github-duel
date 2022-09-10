/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    loader: 'akamai',
    path: '',
    domains: ['img.icons8.com'],
  },
  basePath: '/github-duel',
  assetPrefix: '/github-duel',
}

module.exports = nextConfig
