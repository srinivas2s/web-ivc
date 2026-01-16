import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // reactCompiler has been moved to top level in newer Next.js versions
  },
  // @ts-ignore - Types might not be updated yet for this new option
  reactCompiler: true,
};

export default nextConfig;
