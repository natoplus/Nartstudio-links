import Head from 'next/head'
import Link from 'next/link'
import type { GetServerSideProps } from 'next'
import { useState } from 'react'
import SiteLayout from '../components/SiteLayout'
import SupportingSiteGrid from '../components/SupportingSiteGrid'
import {
  brandLinks,
  NARTSTUDIO_URL,
  primaryLinks,
  socialLinks,
  sourcePriorities,
  withAttribution,
} from '../lib/links'

type HomeProps = { source: string; campaign: string }

export default function LinkHub({ source, campaign }: HomeProps) {
  const [copied, setCopied] = useState('')
  const [status, setStatus] = useState('')
  const preferredLink = sourcePriorities[source]
  const destinations = [...primaryLinks].sort((left, right) => {
    if (left.id === preferredLink) return -1
    if (right.id === preferredLink) return 1
    return 0
  })

  async function copyLink(href: string) {
    try {
      await navigator.clipboard.writeText(href)
      setCopied(href)
      setStatus('Link copied to clipboard.')
      window.setTimeout(() => setCopied((current) => current === href ? '' : current), 1800)
    } catch (error) {
      console.error('Could not copy the destination link:', error)
      setStatus('Could not access the clipboard. Open the destination directly instead.')
    }
  }

  return (
    <SiteLayout>
      <Head>
        <title>Nartstudio Links — Read, watch, discover</title>
        <meta name="description" content="Official links for Nartstudio, NCU, Oubyt, Pylothouse and the creative studio." />
        <link rel="canonical" href="https://links.nartstudio.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Nartstudio Links — Read, watch, discover" />
        <meta property="og:description" content="Find your way into the worlds and work of Nartstudio." />
        <meta property="og:image" content="https://links.nartstudio.com/og-links.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main id="main-content">
        <section className="hero">
          <div className="hero-object" data-parallax-depth="-0.08" aria-hidden="true"><span /><i /></div>
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> THE NARTSTUDIO UNIVERSE</p>
            <h1><span>Worlds</span><span className="hero-final-line">in <em>motion.</em></span></h1>
            <p className="hero-lede">Find comics, animation, creative work and the people behind it—all in one place.</p>
            <div className="hero-actions">
              <a className="button button-light" href={`${NARTSTUDIO_URL}/start-a-project`}>Start a project <span aria-hidden="true">↗</span></a>
              <a className="button button-quiet" href="#destinations">Explore destinations <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-signals" aria-label="Read, watch and discover">
              <span>READ</span><i /><span>WATCH</span><i /><span>DISCOVER</span>
            </div>
          </div>
          <div className="hero-caption"><span>INDEPENDENT WORLDS</span><span>NARTSTUDIO / LINKS</span></div>
          <Link href="/ncu" className="featured-card">
            <span className="featured-mark" aria-hidden="true">N</span>
            <span className="featured-copy"><small>START HERE</small><strong>Explore the Nartstudio comic worlds</strong></span>
            <span className="featured-arrow" aria-hidden="true">↗</span>
          </Link>
          <span className="hero-index" aria-hidden="true">01 / 04</span>
        </section>

        <section className="section destinations-section" id="destinations">
          <div className="section-heading">
            <div><p className="eyebrow">GO WHERE YOU’RE CURIOUS</p><h2>Choose your next stop.</h2></div>
            <p>Official destinations, one tap away.</p>
          </div>
          <div className="destination-grid">
            {destinations.map((item, index) => {
              const href = withAttribution(
                item.href,
                source,
                campaign ? `${campaign}-${item.id}` : item.id,
                source === 'qr' ? 'print' : 'links',
              )
              return (
                <article className={`destination-card ${index === 0 ? 'destination-card-featured' : ''}`} key={item.id}>
                  <span className="destination-number">{String(index + 1).padStart(2, '0')}</span>
                  <div className="destination-content">
                    <small>{item.category}</small>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="destination-actions">
                    <button type="button" onClick={() => copyLink(href)} aria-label={`Copy ${item.name} link`}>
                      {copied === href ? 'Copied' : 'Copy link'}
                    </button>
                    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${item.name} in a new tab`}>
                      Open <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </article>
              )
            })}
          </div>
          <p className="copy-status" role="status" aria-live="polite">{status}</p>
        </section>

        <section className="section brands-section" id="brands">
          <div className="section-heading">
            <div><p className="eyebrow">THE CREATIVE FAMILY</p><h2>One studio. Many worlds.</h2></div>
            <Link className="text-link" href="/ecosystem">Meet the ecosystem <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="brand-rail">
            {brandLinks.map((brand, index) => {
              const content = (
                <>
                  <span className="brand-index">{String(index + 1).padStart(2, '0')} / NARTSTUDIO</span>
                  <span className={`brand-art brand-art-${brand.imageType}`} aria-hidden="true">
                    <i />
                    <img className={`brand-art-image brand-art-image-${brand.imageType}`} src={brand.image} alt="" loading="lazy" />
                  </span>
                  <span className="brand-card-copy"><strong>{brand.name}</strong><small>{brand.description}</small><span className="brand-open">Explore <b aria-hidden="true">↗</b></span></span>
                </>
              )
              return brand.kind === 'internal' ? (
                <Link className={`brand-card brand-card-${brand.id}`} href={brand.href} key={brand.id}>{content}</Link>
              ) : (
                <a className={`brand-card brand-card-${brand.id}`} href={brand.href} target="_blank" rel="noopener noreferrer" key={brand.id}>{content}</a>
              )
            })}
          </div>
        </section>

        <section className="section supporting-section">
          <div className="section-heading">
            <div><p className="eyebrow">MORE FROM THE ECOSYSTEM</p><h2>Tools, learning and support.</h2></div>
            <p>Private and planned services are labelled before you continue.</p>
          </div>
          <SupportingSiteGrid />
        </section>

        <section className="section discover-section">
          <div className="discover-feature">
            <div className="discover-art discover-art-oubyt" data-parallax-depth="0.04" aria-hidden="true"><span>O.</span></div>
            <div className="discover-copy"><p className="eyebrow">WATCH / OUBYT</p><h2>Original worlds,<br />shaped for motion.</h2><p>Explore animation, visual development and story-led work from Oubyt.</p><a className="text-link" href={withAttribution('https://oubyt.vercel.app', source, 'watch')}>Visit Oubyt <span aria-hidden="true">↗</span></a></div>
          </div>
          <div className="discover-feature discover-feature-secondary">
            <div className="discover-art discover-art-ncu" data-parallax-depth="-0.04" aria-hidden="true"><span>NCU</span></div>
            <div className="discover-copy"><p className="eyebrow">READ / NCU</p><h2>Find a story<br />world to enter.</h2><p>Meet the universes, then continue to comics available on Pylothouse.</p><Link className="text-link" href="/ncu">Explore NCU <span aria-hidden="true">↗</span></Link></div>
          </div>
        </section>

        <section className="section releases-section" id="releases">
          <div className="release-heading"><div><p className="eyebrow">NEXT RELEASES</p><h2>Follow the stories.</h2><p>Release dates are shared by each destination when confirmed.</p></div><Link className="button button-glass" href="/drops">Explore releases <span aria-hidden="true">↗</span></Link></div>
          <div className="release-row"><span className="release-symbol" aria-hidden="true">✳</span><span><small>COMICS & WORLDS</small><strong>Explore what’s available now</strong></span><a href={withAttribution('https://ncunartstudio.vercel.app', source, 'releases')} target="_blank" rel="noopener noreferrer">Visit NCU <span aria-hidden="true">↗</span></a></div>
          <div className="release-row"><span className="release-symbol" aria-hidden="true">✳</span><span><small>SHOP PREVIEW</small><strong>Browse collection concepts</strong></span><a href={withAttribution('https://shop.nartstudio.com', source, 'releases')} target="_blank" rel="noopener noreferrer">Visit the shop <span aria-hidden="true">↗</span></a></div>
        </section>

        <section className="section community-section">
          <article className="community-card community-social">
            <p className="eyebrow">FOLLOW ALONG</p><h2>Stay close<br />to the worlds.</h2>
            <p>Follow official Nartstudio accounts for studio news, new work and announcements.</p>
            <div className="social-links">{socialLinks.map((social) => <a href={social.href} key={social.name} target="_blank" rel="noopener noreferrer">{social.name} <span aria-hidden="true">↗</span></a>)}</div>
          </article>
          <article className="community-card community-contact">
            <p className="eyebrow">A PROJECT IN MIND?</p><h2>Let’s make<br />something real.</h2>
            <p>Share what you’re making and the kind of help you need. The studio will guide you to the right next step.</p>
            <a className="button button-light" href={`${NARTSTUDIO_URL}/start-a-project`}>Start a project <span aria-hidden="true">↗</span></a>
          </article>
        </section>
      </main>
    </SiteLayout>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({ query, res }) => {
  const requestedSource = typeof query.utm_source === 'string' ? query.utm_source.toLowerCase() : ''
  const source = Object.prototype.hasOwnProperty.call(sourcePriorities, requestedSource) ? requestedSource : 'direct'
  const requestedCampaign = typeof query.utm_campaign === 'string' ? query.utm_campaign.toLowerCase() : ''
  const campaign = /^[a-z0-9][a-z0-9-]{0,63}$/.test(requestedCampaign) ? requestedCampaign : ''

  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300')
  return { props: { source, campaign } }
}
