import Head from 'next/head'
import Link from 'next/link'
import SiteLayout from '../components/SiteLayout'
import { NARTSTUDIO_URL } from '../lib/links'

const policies = [
  { title: 'Privacy', href: `${NARTSTUDIO_URL}/legal/privacy`, description: 'How Nartstudio handles information on its main website.' },
  { title: 'Cookies', href: `${NARTSTUDIO_URL}/legal/cookies`, description: 'Information about cookies and similar technologies.' },
  { title: 'Terms', href: `${NARTSTUDIO_URL}/legal/terms`, description: 'Terms for using Nartstudio websites and services.' },
]

export default function Legal() {
  return (
    <SiteLayout>
      <Head>
        <title>Privacy & policies — Nartstudio Links</title>
        <meta name="description" content="Privacy and policy information for Nartstudio Links." />
        <link rel="canonical" href="https://links.nartstudio.com/legal" />
      </Head>
      <main id="main-content" className="content-page legal-page">
        <p className="eyebrow"><Link href="/">LINKS</Link> / PRIVACY & POLICIES</p>
        <h1>Clear routes.<br /><em>Clear information.</em></h1>
        <p className="lede">This link hub does not set analytics cookies or collect newsletter signups. Links to other services open their own sites, which have their own privacy and cookie practices.</p>
        <div className="policy-list">
          {policies.map((policy, index) => <a href={policy.href} target="_blank" rel="noopener noreferrer" key={policy.title}><span>{String(index + 1).padStart(2, '0')}</span><span><strong>{policy.title}</strong><small>{policy.description}</small></span><b aria-hidden="true">↗</b></a>)}
        </div>
      </main>
    </SiteLayout>
  )
}
