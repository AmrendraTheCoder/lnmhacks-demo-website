import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.orchidfoundation.info",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.jim-nielsen.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
