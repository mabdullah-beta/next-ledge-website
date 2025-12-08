// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  experimental: {},
  images: {
    domains: ['images.unsplash.com'],
  },
};

export default nextConfig;
