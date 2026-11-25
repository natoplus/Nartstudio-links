import Head from 'next/head'
import Link from 'next/link'
import SiteLayout from '../components/SiteLayout'
import { studioLinks } from '../lib/links'

export default function Ecosystem() {
  return <SiteLayout><Head><title>The ecosystem | Nartstudio Links</title><meta name="description" content="A guide to the independent creative services and story destinations in the Nartstudio ecosystem." /></Head>
    <main id="main-content" className="content-page"><p className="eyebrow"><Link href="/">LINKS</Link> / THE ECOSYSTEM</p><h1>Different doors.<br /><em>One creative point of view.</em></h1><p className="lede">Nartstudio brings original worlds and creative production together. Each site has a distinct purpose; this guide helps you choose the right starting point.</p>
      <div className="ecosystem-grid">{studioLinks.map((item, index) => <article key={item.name}><span>{String(index + 1).padStart(2, '0')} / {item.category.toUpperCase()}</span><h2>{item.name}</h2><p>{item.description}</p><a href={item.href} target="_blank" rel="noopener noreferrer">Open destination <span aria-hidden="true">↗</span></a></article>)}</div>
      <aside className="content-note"><p className="eyebrow">NOT SURE WHERE TO START?</p><p>For a collaboration or production enquiry, use the Nartstudio project brief. For a question about a specific platform, contact that platform through its own support options.</p><Link href="/contact">Contact the studio <span aria-hidden="true">↗</span></Link></aside>
    </main>
  </SiteLayout>
}
