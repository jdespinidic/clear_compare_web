import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

// Branded 404 that matches the Clear Compare Webflow site (navy #1e2556,
// orange #ff7f35, Asap font, white "Alt" logo). Self-contained so it doesn't
// depend on the old Tailwind component library.
export default function NotFound() {
  return (
    <>
      <Head>
        <title>Page not found | Clear Compare</title>
        <meta name="description" content="The page you were looking for could not be found." />
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/webflow/692e61c85f8c97ae788b3e8b_Group%2039427%201%20(1).png" />
      </Head>

      <main className="cc404">
        <img
          className="cc404__logo"
          src="/webflow/692ce31e7f70740520311f6e_Alt%20Logo.svg"
          alt="Clear Compare"
          width={210}
          height={44}
        />
        <div className="cc404__code">404</div>
        <h1 className="cc404__title">This page took a wrong turn</h1>
        <p className="cc404__text">
          The page you&rsquo;re looking for may have moved or no longer exists.
          Let&rsquo;s get you back on track.
        </p>
        <Link href="/" className="cc404__btn">Back to home</Link>
      </main>

      <style jsx>{`
        .cc404 {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 8px;
          padding: 48px 24px;
          background-color: #1e2556;
          color: #fff;
          font-family: 'Asap', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        .cc404__logo {
          height: 44px;
          width: auto;
          margin-bottom: 28px;
        }
        .cc404__code {
          font-weight: 800;
          font-size: clamp(72px, 16vw, 140px);
          line-height: 1;
          color: #ff7f35;
          letter-spacing: -0.02em;
        }
        .cc404__title {
          font-weight: 800;
          font-size: clamp(24px, 5vw, 36px);
          margin: 8px 0 0;
          color: #fff;
        }
        .cc404__text {
          font-weight: 400;
          font-size: 17px;
          line-height: 1.6;
          max-width: 460px;
          margin: 14px 0 32px;
          color: #c9cce0;
        }
        /* :global because the class sits on a next/link <a>, which styled-jsx
           does not scope automatically. */
        :global(.cc404__btn) {
          display: inline-block;
          background-color: #ff7f35;
          color: #fff;
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          padding: 14px 32px;
          border-radius: 10px;
          transition: background-color 0.2s ease, transform 0.2s ease;
        }
        :global(.cc404__btn):hover {
          background-color: #f56a1c;
          transform: translateY(-1px);
        }
      `}</style>

      <style jsx global>{`
        @font-face {
          font-family: 'Asap';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url('/webflow/692969e914e2dd3c3db0e615_Asap-Regular.ttf') format('truetype');
        }
        @font-face {
          font-family: 'Asap';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url('/webflow/692969e9152bbc9fcf4bff16_Asap-SemiBold.ttf') format('truetype');
        }
        @font-face {
          font-family: 'Asap';
          font-style: normal;
          font-weight: 800;
          font-display: swap;
          src: url('/webflow/692969e91347bb6a33bb8dc6_Asap-ExtraBold.ttf') format('truetype');
        }
      `}</style>
    </>
  )
}
