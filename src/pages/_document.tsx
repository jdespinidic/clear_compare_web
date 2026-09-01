import { cn } from "@/lib/utils";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5RG38958');`
          }}
        />
        {/* End Google Tag Manager */}

        {/* 
          CRITICAL: DO NOT REMOVE THIS SCRIPT
          The Softgen AI monitoring script is essential for core app functionality.
          The application will not function without it.
        */}
        <script
          src="https://cdn.softgen.ai/script.js"
          async
          data-softgen-monitoring="true"
        />
        
        {/* Google Ads Conversion Tracking */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17589801646"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17589801646');
            `
          }}
        />
        
        {/* Enhanced Meta Tags for Web Optimization */}
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ff7f35" />
        <meta name="msapplication-TileColor" content="#ff7f35" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="ClearCompare" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />

        {/* Open Graph / social-share defaults (per-page og:title/og:description
            are set in WebflowPage). og:image must be an absolute URL. */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Clear Compare" />
        <meta property="og:image" content="https://clearcompare.com.au/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Clear Compare — compare loans in under 60 seconds" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://clearcompare.com.au/og-image.png" />

        {/* No manifest or icon links here on purpose. Every file the old PWA
            block referenced — manifest.json's five icons, apple-touch-icon.png,
            favicon-16x16.png, favicon-32x32.png — was missing, so each one 404d
            on every page load and the manifest logged an icon error. Pages get
            their real favicon from the captured Webflow head (see WebflowPage).
            A manifest is worth adding back only alongside icons that exist. */}
        
        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Font Loading Optimization */}
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
          rel="preload"
          as="style"
          // @ts-expect-error TS2322: Type 'string' is not assignable to type 'ReactEventHandler<HTMLLinkElement>'.
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap"
            rel="stylesheet"
          />
        </noscript>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "ClearCompare",
              "url": "https://clearcompare.com.au",
              "logo": "https://clearcompare.com.au/noBgColor%20(3).png",
              "sameAs": [],
              "description": "Compare loans and see your personalised options instantly. Get real offers for home, car, and personal loans in just 2 minutes.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "AU"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "areaServed": "AU",
                "availableLanguage": "English"
              }
            })
          }}
        />
      </Head>
      <body
        className={cn(
          "min-h-screen w-full scroll-smooth bg-background text-foreground antialiased overflow-x-hidden"
        )}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5RG38958"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <Main />
        <NextScript />
        
        {/* Performance monitoring */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // The service worker registration that used to live here is gone.
              // /sw.js is now a tombstone that uninstalls itself — see the
              // comment at the top of that file. Browsers holding the old
              // worker re-check the script on navigation and pick the
              // tombstone up on their own, so nothing needs to register it.

              // NOTE: a non-passive document-level touchmove listener used to live
              // here to block pinch-zoom on iOS. It called preventDefault() when
              // "event.scale !== 1", but TouchEvent.scale is a Safari-only
              // property — everywhere else it is undefined, so the condition was
              // always true and every touchmove was cancelled. That blocked
              // finger-scrolling outright on Android Chrome and any other
              // non-Safari mobile browser. Blocking zoom also fails WCAG 1.4.4,
              // so the listener was removed rather than repaired.
            `
          }}
        />
      </body>
    </Html>
  );
}
