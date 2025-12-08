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
        
        {/* PWA Support */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
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
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
              
              // Prevent zoom on iOS
              document.addEventListener('touchmove', function (event) {
                if (event.scale !== 1) { event.preventDefault(); }
              }, { passive: false });
            `
          }}
        />
      </body>
    </Html>
  );
}
