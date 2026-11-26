import Head from 'next/head'
import Link from 'next/link'
import type { GetStaticPaths, GetStaticProps } from 'next'
import SiteLayout from '../components/SiteLayout'
import { brandHubs, type BrandHub, withAttribution } from '../lib/links'

type BrandPageProps = { slug: string; hub: BrandHub }

export default function BrandPage({ slug, hub }: BrandPageProps) {
  return (
    <SiteLayout>
      <Head>
        <title>{hub.name} — Nartstudio Links</title>
        <meta name="description" content={hub.description} />
        <link rel="canonical" href={`https://links.nartstudio.com/${slug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${hub.name} — Nartstudio Links`} />
        <meta property="og:description" content={hub.description} />
        <meta property="og:image" content="https://links.nartstudio.com/og-links.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main id="main-content" className={`brand-page brand-page-${hub.accent}`}>
        <p className="eyebrow"><Link href="/">LINKS</Link> / {hub.name.toUpperCase()}</p>
        <div className="brand-page-hero">
          <div className="brand-page-art" data-parallax-depth="-0.055" aria-hidden="true"><span>{hub.name === 'Nartstudio' ? 'N' : hub.name.slice(0, 1)}</span></div>
          <div className="brand-page-copy">
            <p className="eyebrow">{hub.discipline}</p>
            <h1>{hub.name}<br /><em>Start here.</em></h1>
            <p className="lede">{hub.description}</p>
          </div>
        </div>
        <section className="brand-page-links" aria-labelledby="brand-links-heading">
          <div className="section-heading"><div><p className="eyebrow">OFFICIAL DESTINATIONS</p><h2 id="brand-links-heading">Choose where to go.</h2></div></div>
          {hub.links.map((item, index) => {
            const href = withAttribution(item.href, 'links', `${slug}-${item.id}`)
            return (
              <a className="brand-link-row" href={href} target="_blank" rel="noopener noreferrer" key={item.id}>
                <span className="row-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="brand-link-copy"><small>{item.category}</small><strong>{item.name}</strong><span>{item.description}</span></span>
                <span className="row-arrow" aria-hidden="true">↗</span>
              </a>
            )
          })}
        </section>
        <div className="brand-page-back"><Link className="text-link" href="/ecosystem">View all Nartstudio brands <span aria-hidden="true">↗</span></Link></div>
      </main>
    </SiteLayout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: Object.keys(brandHubs).map((slug) => ({ params: { brand: slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<BrandPageProps> = async ({ params }) => {
  const slug = typeof params?.brand === 'string' ? params.brand : ''
  const hub = brandHubs[slug]

  if (!hub) return { notFound: true }
  return { props: { slug, hub } }
}
