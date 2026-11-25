import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import SiteLayout from '../components/SiteLayout'
import { studioLinks } from '../lib/links'

export default function LinkHub() {
  const [copied, setCopied] = useState('')
  const [message, setMessage] = useState('')

  async function copyLink(href: string) {
    try {
      await navigator.clipboard.writeText(href)
      setCopied(href)
      setMessage('Link copied to clipboard.')
      window.setTimeout(() => setCopied(current => current === href ? '' : current), 1800)
    } catch (error) {
      console.error('Could not copy the destination link:', error)
      setMessage('Could not access the clipboard. Open the destination directly instead.')
    }
  }

  return <SiteLayout><Head><title>Nartstudio Links | Official destinations</title><meta name="description" content="Official links for Nartstudio, NCU, Oubyt, Pylothouse and studio enquiries." /></Head>
    <main id="main-content" className="link-home">
      <section className="hero"><p className="eyebrow"><span /> THE NARTSTUDIO ECOSYSTEM</p><div className="hero-mark" aria-hidden="true"><img src="/brand-mark.svg" alt="" /></div><h1>One studio.<br /><em>Many worlds.</em></h1><p className="lede">Official destinations for the studio, its story universes and creative services. Choose where you want to go next.</p><div className="hero-actions"><Link className="button-primary" href="/ecosystem">Explore the ecosystem <span aria-hidden="true">↗</span></Link><Link className="text-link" href="/contact">Contact the studio</Link></div><aside className="link-hero-art"><img src="/network-art.svg" alt="" /><span>CONNECTED BY CURIOSITY / NARTSTUDIO</span></aside></section>
      <section className="destination-section"><div className="section-heading"><div><p className="eyebrow">OFFICIAL DESTINATIONS</p><h2>Find your next stop.</h2></div><p>Each destination opens its own website.</p></div><div className="destination-list">{studioLinks.map((item, index) => <article className="destination-row" key={item.name}><span className="row-number">{String(index + 1).padStart(2, '0')}</span><div className="destination-copy"><small>{item.category}</small><h3>{item.name}</h3><p>{item.description}</p></div><div className="destination-actions"><button type="button" onClick={() => copyLink(item.href)} aria-label={`Copy ${item.name} link`}>{copied === item.href ? 'Copied' : 'Copy link'}</button><a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`Open ${item.name} in a new tab`}>Visit <span aria-hidden="true">↗</span></a></div></article>)}</div><p className="copy-status" role="status" aria-live="polite">{message}</p></section>
      <section className="link-cta"><div><p className="eyebrow">A PROJECT IN MIND?</p><h2>Let’s make something<br /><em>worth returning to.</em></h2></div><a className="button-primary" href="https://nartstudio.com/start-a-project">Start a project <span aria-hidden="true">↗</span></a></section>
    </main>
  </SiteLayout>
}
