import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

// The site itself is the self-hosted Webflow build (served statically from
// /public/webflow-site, bypassing this shell). This shell now only wraps the
// remaining React route — the 404 page — so the old ClearCompare footer/nav is
// no longer rendered.
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}