import Head from 'next/head'
import Link from 'next/link'
import SiteLayout from '../components/SiteLayout'
import { primaryLinks } from '../lib/links'

export default function NotFound() {
  return (
    <SiteLayout>
      <Head><title>Page not found — Nartstudio Links</title><meta name="robots" content="noindex" /></Head>
      <main id="main-content" className="content-page not-found-page">
        <p className="eyebrow">404 / WRONG TURN</p>
        <h1>This link went<br /><em>somewhere else.</em></h1>
        <p className="lede">The page may have moved. Start again from the official destinations below.</p>
        <div className="not-found-links">
          {primaryLinks.slice(0, 3).map((item) => <a href={item.href} key={item.id}>{item.name} <span aria-hidden="true">↗</span></a>)}
          <Link href="/">Back to Nartstudio Links <span aria-hidden="true">↗</span></Link>
        </div>
      </main>
    </SiteLayout>
  )
}
