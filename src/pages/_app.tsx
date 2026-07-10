import type { AppProps } from "next/app";

// The site is the self-hosted Webflow build, rendered by real Next.js pages that
// load Webflow's own stylesheet. There is intentionally no global CSS here, so
// nothing bleeds onto those pages. The only other route, the 404 page, is fully
// self-contained (styled-jsx).
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
