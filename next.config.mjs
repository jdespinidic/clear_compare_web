/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  allowedDevOrigins: ['*.daytona.work'],
  // The homepage and loan-application pages are the pixel-exact Webflow build,
  // served as self-hosted static documents from /public/webflow-site so they
  // bypass the React/Tailwind app shell entirely (guaranteeing they render
  // identically to the original Webflow site). Assets live under /public/webflow.
  async rewrites() {
    return [
      { source: '/', destination: '/webflow-site/index.html' },
      { source: '/apply/personal-loan', destination: '/webflow-site/apply/personal-loan.html' },
      { source: '/apply/car-loans', destination: '/webflow-site/apply/car-loans.html' },
    ];
  },
};

export default nextConfig;
