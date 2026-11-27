import Head from 'next/head'
import Link from 'next/link'
import SiteLayout from '../components/SiteLayout'
import SupportingSiteGrid from '../components/SupportingSiteGrid'
import { brandLinks, NARTSTUDIO_URL } from '../lib/links'

export default function Ecosystem() {
  return (
    <SiteLayout>
      <Head>
        <title>Our brands — Nartstudio Links</title>
        <meta name="description" content="Explore Nartstudio, NCU, Oubyt, Pylothouse and the official shop." />
        <link rel="canonical" href="https://links.nartstudio.com/ecosystem" />
      </Head>
      <main id="main-content" className="content-page">
        <p className="eyebrow"><Link href="/">LINKS</Link> / THE ECOSYSTEM</p>
        <h1>Different worlds.<br /><em>One creative family.</em></h1>
        <p className="lede">Explore original comics, animation, publishing and the studio behind them. Each destination has a clear role and its own place to begin.</p>
        <div className="ecosystem-grid">
          {brandLinks.map((brand, index) => {
            const content = (
              <>
                <span>{String(index + 1).padStart(2, '0')} / NARTSTUDIO</span>
                <span className="ecosystem-brand-art"><img src={brand.image} alt="" loading="lazy" /></span>
                <h2>{brand.name}</h2>
                <p>{brand.description}</p>
                <span className="ecosystem-action">Explore destination <b aria-hidden="true">↗</b></span>
              </>
            )
            return brand.kind === 'internal' ? (
              <Link className={`ecosystem-card ecosystem-${brand.id}`} href={brand.href} key={brand.id}>{content}</Link>
            ) : (
              <a className={`ecosystem-card ecosystem-${brand.id}`} href={brand.href} target="_blank" rel="noopener noreferrer" key={brand.id}>{content}</a>
            )
          })}
        </div>
        <section className="ecosystem-support-section">
          <div className="section-heading"><div><p className="eyebrow">SUPPORTING SERVICES</p><h2>More ways to take part.</h2></div></div>
          <SupportingSiteGrid />
        </section>
        <aside className="content-note">
          <p className="eyebrow">WORK WITH THE STUDIO</p>
          <p>For a collaboration or production enquiry, use the official Nartstudio project brief.</p>
          <a className="button button-light" href={`${NARTSTUDIO_URL}/start-a-project`}>Start a project <span aria-hidden="true">↗</span></a>
        </aside>
      </main>
    </SiteLayout>
  )
}
