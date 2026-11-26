import Head from 'next/head'
import Link from 'next/link'
import SiteLayout from '../components/SiteLayout'
import { NARTSTUDIO_URL } from '../lib/links'

export default function Artists() {
  return (
    <SiteLayout>
      <Head>
        <title>Artist opportunities — Nartstudio Links</title>
        <meta name="description" content="Find current careers and artist opportunities with Nartstudio." />
        <link rel="canonical" href="https://links.nartstudio.com/artists" />
      </Head>
      <main id="main-content" className="content-page">
        <p className="eyebrow"><Link href="/">LINKS</Link> / ARTISTS</p>
        <h1>Make good work<br /><em>with good people.</em></h1>
        <p className="lede">Explore the official careers page for current opportunities. No application or submission form is hosted on this link hub.</p>
        <div className="content-note"><p className="eyebrow">CAREERS & OPPORTUNITIES</p><p>Check the studio’s current listings and follow the instructions on each opportunity. A listing is not a guarantee of available roles.</p><a className="button button-light" href={`${NARTSTUDIO_URL}/careers`}>Visit Nartstudio careers <span aria-hidden="true">↗</span></a></div>
        <Link className="text-link" href="/contact">Contact the studio <span aria-hidden="true">↗</span></Link>
      </main>
    </SiteLayout>
  )
}
