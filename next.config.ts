import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  async redirects() {
    return [
      {
        source: "/test-packages",
        destination: "/driving-lessons/driving-test-lessons-brisbane",
        permanent: false,
      },
      {
        source: "/driving-lessons/test-brisbane",
        destination: "/driving-lessons/driving-test-lessons-brisbane",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
