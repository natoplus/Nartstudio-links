import Link from 'next/link'
import type { ReactNode } from 'react'
import ParallaxAtmosphere from './ParallaxAtmosphere'

export default function SiteLayout({ children }: { children: ReactNode }) {
  return <div className="links-site"><ParallaxAtmosphere />
    <a className="skip-link" href="#main-content">Skip to content</a>
    <header className="site-header"><Link href="/" className="wordmark"><img src="/brand-mark.svg" alt="" />NARTSTUDIO <span>LINKS</span></Link><nav aria-label="Main navigation"><Link href="/ecosystem">Ecosystem</Link><Link href="/contact">Contact</Link><a href="https://nartstudio.com">Main site <span aria-hidden="true">↗</span></a></nav></header>
    {children}
    <footer className="site-footer"><strong>NARTSTUDIO <span>LINKS</span></strong><p>Official destinations across the studio ecosystem.</p><small>Use the site’s own navigation and policies when continuing to another service.</small></footer>
  </div>
}
