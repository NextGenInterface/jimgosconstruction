import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow testing the dev server from other devices on the local network
  allowedDevOrigins: ["192.168.100.39"],
};

export default nextConfig;
