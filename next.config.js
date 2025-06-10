const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  experimental: {
    serverActions: {},
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    config.resolve.alias["@components"] = path.resolve(__dirname, "src/app/components");
    return config;
  },
};

module.exports = nextConfig;
