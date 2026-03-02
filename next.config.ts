import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "covers.openlibrary.org" }],
    dangerouslyAllowLocalIP: true,
  },
};

export default nextConfig;
