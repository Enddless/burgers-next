/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://testologia.site/*'
      }
    ],
    domains: ['localhost']
  }
};

export default nextConfig;

