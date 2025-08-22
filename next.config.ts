import type { NextConfig } from "next";

const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self';",
      "img-src 'self' data: https:;",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://securepubads.g.doubleclick.net;",
      "connect-src 'self' https://googleads.g.doubleclick.net https://pagead2.googlesyndication.com https://tpc.googlesyndication.com;",
      "frame-src 'self' https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://pagead2.googlesyndication.com;",
      "style-src 'self' 'unsafe-inline' https:;",
      "font-src 'self' data: https:;",
    ].join(" "),
  },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
];

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)", // apply to all routes
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
