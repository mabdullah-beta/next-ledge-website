// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Leave experimental empty unless you need specific flags;
  // removing unknown experimental flags reduces breakage on upgrade.
  experimental: {},
};

module.exports = nextConfig;
