import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "syd.cloud.appwrite.ios",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
