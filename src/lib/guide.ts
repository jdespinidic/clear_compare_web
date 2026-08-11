import { readFileSync } from 'fs'
import path from 'path'
import { marked } from 'marked'

export type TocEntry = { id: string; text: string; level: 2 | 3 }

export type Guide = {
  /** Raw markdown — the same bytes served at /guides/build.md */
  markdown: string
  /** Rendered HTML with anchored headings */
  html: string
  toc: TocEntry[]
  title: string
  /** Bytes of the raw markdown, shown next to the download link */
  sizeKb: number
}

/**
 * The canonical guide. It lives under public/ so the raw markdown is served
 * as a plain static file at /guides/build.md (the LLM view and the download),
 * and is rendered to HTML here at build time for /guides/build.
 */
const GUIDE_PATH = path.join(process.cwd(), 'public', 'guides', 'build.md')

const slug = (html: string) =>
  html
    .replace(/<[^>]+>/g, '')
    .replace(/&[a-z]+;/gi, ' ')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

/**
 * marked no longer emits heading ids, so add them here. Doing it on the
 * rendered HTML (rather than with a custom renderer) keeps the slug logic and
 * the table of contents reading from exactly the same string.
 */
function anchorHeadings(html: string) {
  const toc: TocEntry[] = []
  const seen = new Map<string, number>()

  const withIds = html.replace(/<h([1-4])>([\s\S]*?)<\/h\1>/g, (_m, lvl: string, inner: string) => {
    const level = Number(lvl)
    const base = slug(inner) || `section-${toc.length + 1}`
    const n = (seen.get(base) ?? 0) + 1
    seen.set(base, n)
    const id = n === 1 ? base : `${base}-${n}`

    if (level === 2 || level === 3) {
      toc.push({ id, text: inner.replace(/<[^>]+>/g, ''), level })
    }
    return `<h${lvl} id="${id}"><a class="guide-anchor" href="#${id}" aria-label="Link to this section">#</a>${inner}</h${lvl}>`
  })

  return { html: withIds, toc }
}

export function loadGuide(): Guide {
  const markdown = readFileSync(GUIDE_PATH, 'utf8')
  const rendered = marked.parse(markdown, { async: false, gfm: true }) as string
  const { html, toc } = anchorHeadings(rendered)

  const title = (markdown.match(/^#\s+(.+)$/m) || [])[1]?.trim() || 'Build guide'

  return {
    markdown,
    html,
    toc,
    title,
    sizeKb: Math.round((Buffer.byteLength(markdown, 'utf8') / 1024) * 10) / 10,
  }
}
