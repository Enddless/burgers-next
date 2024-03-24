/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <=== enables static exports
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://testologia.site/*'
      }
    ],
    unoptimized: true,
    domains: ['localhost']
  },
  basePath: '/burgers-next',
  assetPrefix: '/'
};

export default nextConfig;

