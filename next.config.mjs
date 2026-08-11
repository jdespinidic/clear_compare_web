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
  // The build guide is served three ways from one file
  // (public/guides/build.md): the rendered page at /guides/build, the raw
  // markdown at /guides/build.md, and that same URL as a download. Serving the
  // markdown as text/plain makes it render in the browser (and in an agent's
  // fetch) instead of prompting a save; the download link forces the filename
  // via the anchor's download attribute, so it is unaffected.
  async headers() {
    return [
      {
        source: '/guides/build.md',
        headers: [
          { key: 'Content-Type', value: 'text/plain; charset=utf-8' },
          { key: 'Cache-Control', value: 'public, max-age=0, must-revalidate' },
        ],
      },
    ];
  },

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
