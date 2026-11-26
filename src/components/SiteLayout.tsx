import Head from 'next/head'
import Link from 'next/link'
import type { ReactNode } from 'react'
import ParallaxAtmosphere from './ParallaxAtmosphere'
import { NARTSTUDIO_URL, socialLinks } from '../lib/links'

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="links-site">
    <Head>
      <link rel="icon" href="/assets/brands/nartstudio-logo.webp" type="image/webp" />
      <meta property="og:site_name" content="Nartstudio Links" />
      <meta property="og:image" content="https://links.nartstudio.com/og-links.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
    <ParallaxAtmosphere />
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label="Nartstudio Links home">
        <img src="/assets/brands/nartstudio-logo.webp" alt="" width="38" height="38" />
        <span className="wordmark-name">NARTSTUDIO <small>LINKS</small></span>
      </Link>
      <nav aria-label="Main navigation">
        <Link href="/#destinations">Destinations</Link>
        <Link href="/ecosystem">Brands</Link>
        <Link href="/contact">Contact</Link>
        <a className="header-cta" href={`${NARTSTUDIO_URL}/start-a-project`}>Start a project <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
    {children}
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <Link href="/" className="footer-wordmark">NARTSTUDIO <span>LINKS</span></Link>
          <p>One place to find the worlds, work and people behind Nartstudio.</p>
        </div>
        <nav className="footer-socials" aria-label="Nartstudio social media">
          {socialLinks.map((social) => (
            <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={`Nartstudio on ${social.name}`}>
              {social.shortName}
            </a>
          ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <small>© {new Date().getFullYear()} Nartstudio</small>
        <nav aria-label="Site information">
          <Link href="/ecosystem">Our brands</Link>
          <Link href="/legal">Privacy & cookies</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  </div>
}
