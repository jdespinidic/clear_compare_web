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
  // Old ClearCompare routes were removed when the site moved to the Webflow
  // build. Redirect them to the closest equivalent so existing links and
  // search-engine results don't dead-end on the 404 page.
  async redirects() {
    return [
      { source: '/loans/personal', destination: '/apply/personal-loan', permanent: true },
      { source: '/loans/personal/apply', destination: '/apply/personal-loan', permanent: true },
      { source: '/loans/car', destination: '/apply/car-loans', permanent: true },
      { source: '/loans/car/apply', destination: '/apply/car-loans', permanent: true },
      { source: '/loans/home', destination: '/', permanent: true },
      { source: '/loans/home/apply', destination: '/', permanent: true },
      { source: '/loans/compare', destination: '/', permanent: true },
      { source: '/blog', destination: '/', permanent: true },
      { source: '/blog/:slug*', destination: '/', permanent: true },
      { source: '/about', destination: '/', permanent: true },
      { source: '/how-it-works', destination: '/', permanent: true },
      { source: '/faq', destination: '/', permanent: true },
      { source: '/disclaimer', destination: '/', permanent: true },
      { source: '/privacy', destination: '/', permanent: true },
      { source: '/terms', destination: '/', permanent: true },
    ];
  },
};

export default nextConfig;
