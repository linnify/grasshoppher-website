module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    sprFlushToDisk: false,
    styledComponents: true,
  },

  async headers() {
    return [
      {
        source: "/fonts/BebasNeue/FontsFree-Net-BebasNeueRegular.ttf",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};
