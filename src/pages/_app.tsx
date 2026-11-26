import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import '../styles/globals.css'

function PageScrollReveal() {
  const { asPath } = useRouter()

  useEffect(() => {
    const root = document.documentElement
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>([
      'main > .eyebrow',
      'main > h1',
      'main > .lede',
      'main > section',
      'main > article',
      'main > .content-note',
      'main > .contact-options',
      'main > .release-destinations',
      'main > .policy-list',
      'main > .not-found-links',
      '.brand-page-hero',
      '.brand-page-links',
      '.brand-page-back',
      '.destination-grid > *',
      '.brand-rail > *',
      '.supporting-grid > *',
      '.ecosystem-grid > *',
      '.contact-options > *',
      '.release-destinations > *',
      '.policy-list > *',
      '.not-found-links > *',
      '.brand-page-links > .brand-link-row',
      '.release-row',
      '.discover-feature',
      '.community-card',
    ].join(', ')))

    if (
      revealItems.length === 0 ||
      !('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) return

    const appRoot = document.getElementById('__next')
    if (appRoot && typeof appRoot.animate === 'function') {
      appRoot.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 320, easing: 'ease-out' })
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('scroll-reveal-visible')
        observer.unobserve(entry.target)
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' })

    revealItems.forEach((element, index) => {
      element.classList.add('scroll-reveal-item')
      element.style.setProperty('--scroll-reveal-delay', `${Math.min(index % 4, 3) * 65}ms`)
      observer.observe(element)
    })
    root.dataset.scrollReveal = 'active'

    return () => {
      observer.disconnect()
      delete root.dataset.scrollReveal
      revealItems.forEach(element => {
        element.classList.remove('scroll-reveal-item', 'scroll-reveal-visible')
        element.style.removeProperty('--scroll-reveal-delay')
      })
    }
  }, [asPath])

  return null
}

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <PageScrollReveal />
    <Component {...pageProps} />
  </>
}
