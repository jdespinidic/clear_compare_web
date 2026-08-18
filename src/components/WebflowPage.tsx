import Head from 'next/head'
import { useEffect } from 'react'

type Script = { src?: string; code?: string }

type Meta = {
  title: string
  description?: string | null
  og?: Record<string, string>
  twitter?: Record<string, string>
  favicon?: string | null
  canonical?: string | null
  headStyles?: string[]
}

export type WebflowData = {
  wfPage: string
  wfSite: string
  meta: Meta
  scripts: Script[]
  bodyHtml: string
}

const WEBFLOW_CSS = '/webflow/css/clear-compare.webflow.shared.b5cebe7ae.css'

// Base URL of the embedded RateMatch application form. Configurable via env so
// the endpoint can be changed without a code change; the Webflow form-builder
// scripts reference the `__RATEMATCH_FORM_URL__` token, which is substituted
// with this value at runtime (see runInline below).
const RATEMATCH_FORM_URL =
  process.env.NEXT_PUBLIC_RATEMATCH_FORM_URL || 'https://forms.ratematch.ai/'

// CreditSense (LeadMarket) affiliate code for the /apply/loanfinder form. The
// inline loader script references the `__CREDITSENSE_AFF__` token, substituted
// here at runtime. Defaults to the Dev code; production sets
// NEXT_PUBLIC_CREDITSENSE_AFF to the Prod affiliate code.
const CREDITSENSE_AFF = process.env.NEXT_PUBLIC_CREDITSENSE_AFF || 'K28D4HR5'

/**
 * Renders an exact copy of a published Webflow page inside a Next.js route.
 *
 * The markup (bodyHtml) and stylesheet are the real Webflow output, so the page
 * renders pixel-for-pixel. The Webflow JS runtime (jQuery, webflow.js, GSAP) and
 * the site's inline scripts are executed in their original order after mount, so
 * the nav, scroll effects, FAQ accordion, and RateMatch form all behave as they
 * do on the live site.
 */
export default function WebflowPage({ data }: { data: WebflowData }) {
  const { meta, scripts, bodyHtml, wfPage, wfSite } = data

  // Social-share tags default to the page's title/description so every page
  // gets a good link preview (the shared og:image lives in _document).
  const ogTitle = meta.og?.['og:title'] || meta.title
  const ogDescription = meta.og?.['og:description'] || meta.description
  const twitterTitle = meta.twitter?.['twitter:title'] || meta.title
  const twitterDescription = meta.twitter?.['twitter:description'] || meta.description

  useEffect(() => {
    const el = document.documentElement
    el.setAttribute('data-wf-page', wfPage)
    el.setAttribute('data-wf-site', wfSite)
    el.classList.add('w-mod-js')
    if ('ontouchstart' in window) el.classList.add('w-mod-touch')

    let cancelled = false
    const appended: HTMLScriptElement[] = []

    const loadExternal = (src: string) =>
      new Promise<void>((resolve) => {
        const s = document.createElement('script')
        s.src = src
        s.async = false
        s.onload = () => resolve()
        s.onerror = () => resolve()
        document.body.appendChild(s)
        appended.push(s)
      })

    const runInline = (code: string) => {
      const s = document.createElement('script')
      s.textContent = code
        .replace(/__RATEMATCH_FORM_URL__/g, RATEMATCH_FORM_URL)
        .replace(/__CREDITSENSE_AFF__/g, CREDITSENSE_AFF)
      document.body.appendChild(s)
      appended.push(s)
    }

    ;(async () => {
      for (const sc of scripts) {
        if (cancelled) return
        if (sc.src) {
          await loadExternal(sc.src)
          continue
        }
        if (!sc.code) continue
        // Google Tag Manager is already injected globally in _document.tsx, so
        // skip the copy embedded in the Webflow page to avoid initialising the
        // container twice (which would double-count pageviews/events).
        if (/googletagmanager\.com\/gtm\.js|['"]gtm\.start['"]/.test(sc.code)) continue
        runInline(sc.code)
      }
    })()

    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        {meta.description && <meta name="description" content={meta.description} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href={WEBFLOW_CSS} />
        {(meta.headStyles || []).map((css, i) => (
          <style key={i} dangerouslySetInnerHTML={{ __html: css }} />
        ))}
        {meta.canonical && <link rel="canonical" href={meta.canonical} />}
        {meta.favicon && <link rel="shortcut icon" href={meta.favicon} />}
        {ogTitle && <meta property="og:title" content={ogTitle} />}
        {ogDescription && <meta property="og:description" content={ogDescription} />}
        {twitterTitle && <meta name="twitter:title" content={twitterTitle} />}
        {twitterDescription && <meta name="twitter:description" content={twitterDescription} />}
      </Head>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
    </>
  )
}
