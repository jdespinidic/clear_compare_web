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
  // rendered by real Next.js pages (src/pages/index.tsx, src/pages/apply/*) via
  // the WebflowPage component. Assets live under /public/webflow.
  //
  // Old ClearCompare routes were removed when the site moved to the Webflow
  // build. Redirect them to the closest equivalent so existing links and
  // search-engine results don't dead-end on the 404 page.
  async redirects() {
    return [
      { source: '/loans/personal', destination: '/apply/personal-loan', permanent: true },
      { source: '/loans/personal/apply', destination: '/apply/personal-loan', permanent: true },
      { source: '/loans/car', destination: '/apply/car-loans', permanent: true },
      { source: '/loans/car/apply', destination: '/apply/car-loans', permanent: true },
      { source: '/home-loan', destination: '/home', permanent: true },
      { source: '/home-loans', destination: '/home', permanent: true },
      { source: '/apply/home-loans', destination: '/apply/home-loan', permanent: true },
      { source: '/loans/home', destination: '/home', permanent: true },
      { source: '/loans/home/apply', destination: '/apply/home-loan', permanent: true },
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
