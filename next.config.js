/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  lintOnSave: false,
  trailingSlash: true,
  generateBuildId: ()=> 'fitable-deploy'
}

module.exports = nextConfig
