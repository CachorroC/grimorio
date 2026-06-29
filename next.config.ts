import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    'beta.rsasesorjuridico.com'
  ],
  cacheComponents: true,
  output         : 'standalone',
  typedRoutes    : true,
};

export default nextConfig;
// @ts-check
