import Head from 'next/head'
import Link from 'next/link'
import SiteLayout from '../components/SiteLayout'
import { NCU_URL, SHOP_URL, withAttribution } from '../lib/links'

export default function Drops() {
  return (
    <SiteLayout>
      <Head>
        <title>Releases & drops — Nartstudio Links</title>
        <meta name="description" content="Find official Nartstudio comic worlds and preview shop collections." />
        <link rel="canonical" href="https://links.nartstudio.com/drops" />
      </Head>
      <main id="main-content" className="content-page drops-page">
        <p className="eyebrow"><Link href="/">LINKS</Link> / RELEASES</p>
        <h1>Follow what’s<br /><em>coming into view.</em></h1>
        <p className="lede">Release dates and campaign details are published by each destination when they are confirmed. No upcoming dates are listed here yet.</p>
        <div className="release-destinations">
          <a href={withAttribution(NCU_URL, 'links', 'drops-ncu')} target="_blank" rel="noopener noreferrer"><small>COMICS & STORY WORLDS</small><strong>Explore NCU</strong><span>Visit the official universe guide <b aria-hidden="true">↗</b></span></a>
          <a href={withAttribution(SHOP_URL, 'links', 'drops-shop')} target="_blank" rel="noopener noreferrer"><small>SHOP PREVIEW</small><strong>Browse collection concepts</strong><span>Checkout is not available yet <b aria-hidden="true">↗</b></span></a>
        </div>
        <Link className="text-link" href="/contact">Ask the studio a question <span aria-hidden="true">↗</span></Link>
      </main>
    </SiteLayout>
  )
}
