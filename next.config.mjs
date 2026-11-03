import { fileURLToPath } from 'node:url';
import path from 'node:path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // This repo is the workspace root (a stray lockfile in the home directory
  // otherwise makes Next infer the wrong root).
  turbopack: { root: path.dirname(fileURLToPath(import.meta.url)) },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'uaequick.com' },
      { protocol: 'https', hostname: '**.uaequick.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
  // Host canonicalisation is handled by Vercel (bare domain -> www.uaequick.com).
  // Never add a www/non-www redirect here: it loops against Vercel's rule.
  async redirects() {
    // Legacy WordPress pretty-URLs → new App Router paths (preserve SEO equity).
    return [
      { source: '/ac-services-air-conditioning-servicing-in-dubai', destination: '/services/ac-repair', permanent: true },
      { source: '/handyman-plumber', destination: '/services/handyman-plumber', permanent: true },
      { source: '/electrician-services', destination: '/services/electrician', permanent: true },
      { source: '/painting-partitions', destination: '/services/painting', permanent: true },
      { source: '/cleaning-services', destination: '/services/cleaning', permanent: true },
      { source: '/moving-relocating', destination: '/services/movers-packers', permanent: true },
      { source: '/interior-design', destination: '/services/interior-design', permanent: true },
      { source: '/garden-maintenance', destination: '/services/garden-maintenance', permanent: true },
      { source: '/swimming-pool-jacuzzi', destination: '/services/pool-maintenance', permanent: true },
      { source: '/quick-quote', destination: '/quote', permanent: true },
    ];
  },
};

export default nextConfig;
