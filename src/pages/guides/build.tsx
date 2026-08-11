import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import type { GetStaticProps } from 'next'
import { loadGuide, type Guide } from '@/lib/guide'

/**
 * /guides/build — the human-readable view of the build guide.
 *
 * The same markdown is served raw at /guides/build.md (a static file under
 * public/), which doubles as the LLM view and the download. This page renders
 * it at build time, so there is only ever one copy of the content.
 */
export default function BuildGuide({ guide }: { guide: Guide }) {
  const [copied, setCopied] = useState(false)

  const copyMarkdown = async () => {
    try {
      await navigator.clipboard.writeText(guide.markdown)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard blocked (insecure context or denied permission) — the
      // download and raw-markdown links still cover the use case.
    }
  }

  const toc = (
    <ol className="guide-toc">
      {guide.toc.map((t) => (
        <li key={t.id} className={t.level === 3 ? 'is-sub' : undefined}>
          <a href={`#${t.id}`}>{t.text}</a>
        </li>
      ))}
    </ol>
  )

  return (
    <>
      <Head>
        <title>{guide.title} | Clear Compare</title>
        <meta
          name="description"
          content="How the Clear Compare landing pages and embedded application form are built, and how to replicate them under a different brand."
        />
        {/* Internal engineering documentation — reachable by URL, kept out of
            search results for the consumer brand. */}
        <meta name="robots" content="noindex, nofollow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/webflow/692e61c85f8c97ae788b3e8b_Group%2039427%201%20(1).png" />
      </Head>

      <div className="guide-page">
        <header className="guide-top">
          <Link href="/" className="guide-brand">
            {/* eslint-disable-next-line @next/next/no-img-element -- the logo is
                a fixed-size SVG; next/image would add no value here. */}
            <img src="/webflow/692ce2d9c2a2a18127597fc2_logo.svg" alt="Clear Compare" height={28} />
          </Link>
          <nav className="guide-actions">
            <a className="guide-btn" href="/guides/build.md">
              LLM view
            </a>
            <a className="guide-btn" href="/guides/build.md" download="clear-compare-build-guide.md">
              Download .md <span className="guide-btn-meta">{guide.sizeKb} KB</span>
            </a>
            <button className="guide-btn guide-btn-primary" type="button" onClick={copyMarkdown}>
              {copied ? 'Copied' : 'Copy markdown'}
            </button>
          </nav>
        </header>

        <div className="guide-shell">
          <aside className="guide-side">
            <div className="guide-side-inner">
              <p className="guide-side-title">On this page</p>
              {toc}
            </div>
          </aside>

          <main className="guide-main">
            <details className="guide-toc-mobile">
              <summary>On this page</summary>
              {toc}
            </details>

            <article
              className="guide-article"
              dangerouslySetInnerHTML={{ __html: guide.html }}
            />

            <footer className="guide-foot">
              <p>
                Source of truth:{' '}
                <code>public/guides/build.md</code> in{' '}
                <code>jdespinidic/clear_compare_web</code>. Edit the markdown and redeploy — this
                page, the LLM view and the download all render from that one file.
              </p>
            </footer>
          </main>
        </div>
      </div>

      <style jsx global>{`
        @font-face {
          font-family: Asap;
          src: url('/webflow/692969e914e2dd3c3db0e615_Asap-Regular.ttf') format('truetype');
          font-weight: 400;
          font-display: swap;
        }
        @font-face {
          font-family: Asap;
          src: url('/webflow/692969e90be93ced2ef379c0_Asap-Medium.ttf') format('truetype');
          font-weight: 500;
          font-display: swap;
        }
        @font-face {
          font-family: Asap;
          src: url('/webflow/692969e9152bbc9fcf4bff16_Asap-SemiBold.ttf') format('truetype');
          font-weight: 600;
          font-display: swap;
        }
        @font-face {
          font-family: Asap;
          src: url('/webflow/692969e9e82d3796b97af7fe_Asap-Bold.ttf') format('truetype');
          font-weight: 700;
          font-display: swap;
        }

        html,
        body {
          margin: 0;
          padding: 0;
        }

        .guide-page {
          --navy: #1e2556;
          --orange: #ff7f35;
          --ink: #1e1e1e;
          --muted: #5b6076;
          --line: #e4e7f2;
          --tint: #f6f7fb;
          --code: #f4f6fb;
          background: #fff;
          color: var(--ink);
          font-family: Asap, Arial, system-ui, sans-serif;
          font-size: 17px;
          line-height: 1.65;
          -webkit-font-smoothing: antialiased;
          scroll-behavior: smooth;
        }

        /* ---------- chrome ---------- */

        .guide-top {
          position: sticky;
          top: 0;
          z-index: 20;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
          padding: 0.85rem 1.5rem;
          background: rgba(255, 255, 255, 0.94);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--line);
        }
        .guide-brand {
          display: flex;
          align-items: center;
        }
        .guide-brand img {
          display: block;
          height: 28px;
          width: auto;
        }
        .guide-actions {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }
        .guide-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.45rem 0.85rem;
          border: 1px solid var(--line);
          border-radius: 0.5rem;
          background: #fff;
          color: var(--navy);
          font: inherit;
          font-size: 0.88rem;
          font-weight: 600;
          text-decoration: none;
          cursor: pointer;
          transition: border-color 0.15s ease, color 0.15s ease, background 0.15s ease;
        }
        .guide-btn:hover {
          border-color: var(--navy);
        }
        .guide-btn-meta {
          color: var(--muted);
          font-weight: 400;
        }
        .guide-btn-primary {
          background: var(--orange);
          border-color: var(--orange);
          color: #fff;
          min-width: 8.5rem;
          justify-content: center;
        }
        .guide-btn-primary:hover {
          background: #f06f22;
          border-color: #f06f22;
        }

        .guide-shell {
          display: grid;
          grid-template-columns: 260px minmax(0, 1fr);
          gap: 2.5rem;
          max-width: 1180px;
          margin: 0 auto;
          padding: 2.5rem 1.5rem 6rem;
        }
        .guide-main {
          min-width: 0;
        }

        /* ---------- table of contents ---------- */

        .guide-side-inner {
          position: sticky;
          top: 5.5rem;
          max-height: calc(100vh - 8rem);
          overflow-y: auto;
        }
        .guide-side-title {
          margin: 0 0 0.75rem;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
        }
        .guide-toc {
          list-style: none;
          margin: 0;
          padding: 0 0 0 0.75rem;
          border-left: 2px solid var(--line);
          font-size: 0.9rem;
        }
        .guide-toc li {
          margin: 0.3rem 0;
        }
        .guide-toc li.is-sub {
          padding-left: 0.85rem;
          font-size: 0.85rem;
        }
        .guide-toc a {
          color: var(--muted);
          text-decoration: none;
        }
        .guide-toc a:hover {
          color: var(--orange);
        }
        .guide-toc-mobile {
          display: none;
          margin-bottom: 2rem;
          padding: 0.9rem 1.1rem;
          border: 1px solid var(--line);
          border-radius: 0.75rem;
          background: var(--tint);
        }
        .guide-toc-mobile summary {
          font-weight: 600;
          color: var(--navy);
          cursor: pointer;
        }
        .guide-toc-mobile .guide-toc {
          margin-top: 0.85rem;
        }

        /* ---------- rendered markdown ---------- */

        .guide-article h1,
        .guide-article h2,
        .guide-article h3,
        .guide-article h4 {
          position: relative;
          color: var(--navy);
          line-height: 1.25;
          scroll-margin-top: 5.5rem;
        }
        .guide-article h1 {
          margin: 0 0 1rem;
          font-size: 2.35rem;
          letter-spacing: -0.02em;
        }
        .guide-article h2 {
          margin: 3.5rem 0 1rem;
          padding-top: 1.75rem;
          border-top: 1px solid var(--line);
          font-size: 1.65rem;
        }
        /* The markdown puts a --- before each Part heading; without this the
           rule and the h2's own border-top read as a double line. */
        .guide-article hr + h2 {
          margin-top: 1.5rem;
          padding-top: 0;
          border-top: 0;
        }
        .guide-article h3 {
          margin: 2.5rem 0 0.75rem;
          font-size: 1.2rem;
        }
        .guide-article h4 {
          margin: 2rem 0 0.6rem;
          font-size: 1.02rem;
        }
        .guide-anchor {
          position: absolute;
          left: -1.1rem;
          color: var(--orange);
          text-decoration: none;
          opacity: 0;
          transition: opacity 0.15s ease;
        }
        .guide-article h1:hover .guide-anchor,
        .guide-article h2:hover .guide-anchor,
        .guide-article h3:hover .guide-anchor,
        .guide-article h4:hover .guide-anchor {
          opacity: 1;
        }

        .guide-article p,
        .guide-article li {
          color: var(--ink);
        }
        .guide-article a {
          color: var(--navy);
          text-decoration: underline;
          text-underline-offset: 2px;
          text-decoration-color: rgba(30, 37, 86, 0.35);
        }
        .guide-article a:hover {
          color: var(--orange);
          text-decoration-color: var(--orange);
        }
        .guide-article strong {
          font-weight: 700;
          color: var(--navy);
        }
        .guide-article hr {
          margin: 3rem 0;
          border: 0;
          border-top: 1px solid var(--line);
        }
        .guide-article ul,
        .guide-article ol {
          padding-left: 1.35rem;
        }
        .guide-article li {
          margin: 0.35rem 0;
        }
        .guide-article li::marker {
          color: var(--muted);
        }
        .guide-article input[type='checkbox'] {
          width: 0.95rem;
          height: 0.95rem;
          margin-right: 0.5rem;
          vertical-align: -0.1rem;
          accent-color: var(--orange);
        }
        .guide-article li:has(> input[type='checkbox']) {
          list-style: none;
          margin-left: -1.35rem;
        }

        .guide-article blockquote {
          margin: 1.5rem 0;
          padding: 0.9rem 1.25rem;
          border-left: 3px solid var(--orange);
          border-radius: 0 0.5rem 0.5rem 0;
          background: #fff7f2;
        }
        .guide-article blockquote p {
          margin: 0.35rem 0;
        }

        .guide-article code {
          padding: 0.12em 0.38em;
          border-radius: 0.3rem;
          background: var(--code);
          color: #29306b;
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 0.87em;
          word-break: break-word;
        }
        .guide-article pre {
          margin: 1.4rem 0;
          padding: 1.1rem 1.25rem;
          overflow-x: auto;
          border: 1px solid var(--line);
          border-radius: 0.75rem;
          background: var(--code);
          line-height: 1.55;
        }
        .guide-article pre code {
          padding: 0;
          background: none;
          color: #232a5c;
          font-size: 0.83rem;
          white-space: pre;
        }

        .guide-article table {
          display: block;
          width: 100%;
          overflow-x: auto;
          border-collapse: collapse;
          margin: 1.5rem 0;
          font-size: 0.92rem;
        }
        .guide-article th,
        .guide-article td {
          padding: 0.6rem 0.85rem;
          border: 1px solid var(--line);
          text-align: left;
          vertical-align: top;
        }
        .guide-article th {
          background: var(--tint);
          color: var(--navy);
          font-weight: 600;
          white-space: nowrap;
        }

        .guide-foot {
          margin-top: 4rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--line);
          color: var(--muted);
          font-size: 0.88rem;
        }
        .guide-foot code {
          font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
          font-size: 0.85em;
        }

        @media (max-width: 991px) {
          .guide-page {
            font-size: 16px;
          }
          .guide-shell {
            grid-template-columns: minmax(0, 1fr);
            gap: 0;
            padding: 2rem 1.15rem 4rem;
          }
          .guide-side {
            display: none;
          }
          .guide-toc-mobile {
            display: block;
          }
          /* backdrop-filter on a sticky element repaints the blur on every
             scroll frame, which janks on mobile GPUs — use a solid bar. */
          .guide-top {
            background: #fff;
            backdrop-filter: none;
          }
          .guide-article h1 {
            font-size: 1.85rem;
          }
          .guide-article h2 {
            font-size: 1.4rem;
          }
          .guide-anchor {
            display: none;
          }
        }
      `}</style>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  return { props: { guide: loadGuide() } }
}
