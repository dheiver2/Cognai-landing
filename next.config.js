/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode (recommended)
  reactStrictMode: true,

  // Ignore ESLint during builds (optional, remove if you want stricter checks)
  eslint: {
    ignoreDuringBuilds: true,
  },

  // Ignore TypeScript errors during builds (optional, remove if you want stricter checks)
  typescript: {
    ignoreBuildErrors: true,
  },

  // Disable image optimization (useful for static deployments or when using external CDNs)
  images: {
    unoptimized: true,
  },

  // Enable experimental features (use with caution)
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

// Optional: Merge with user-defined configuration
let userConfig;
try {
  userConfig = require('./v0-user-next.config');
} catch (e) {
  // Ignore error if the user config file doesn't exist
}

// Merge configurations if userConfig exists
if (userConfig) {
  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      };
    } else {
      nextConfig[key] = userConfig[key];
    }
  }
}

module.exports = nextConfig;
