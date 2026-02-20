import type { NextConfig } from "next";

// const withVideos = require('next-videos');

const nextConfig: NextConfig = {
  /* config options here */
  // ...withVideos(),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};



export default nextConfig;
