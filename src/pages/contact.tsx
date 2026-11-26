import Head from 'next/head'
import Link from 'next/link'
import SiteLayout from '../components/SiteLayout'
import { NARTSTUDIO_URL, PYLOTHOUSE_URL } from '../lib/links'

export default function Contact() {
  return (
    <SiteLayout>
      <Head>
        <title>Contact — Nartstudio Links</title>
        <meta name="description" content="Choose the right contact route for a Nartstudio project or platform question." />
        <link rel="canonical" href="https://links.nartstudio.com/contact" />
      </Head>
      <main id="main-content" className="content-page contact-page">
        <p className="eyebrow"><Link href="/">LINKS</Link> / CONTACT</p>
        <h1>Start with the<br /><em>right conversation.</em></h1>
        <p className="lede">Choose the route that best fits your question, project or platform.</p>
        <div className="contact-options">
          <article><span>01 / PROJECTS</span><h2>Creative work & collaborations</h2><p>Share your goals, audience, timing and the kind of help you need.</p><a className="button button-light" href={`${NARTSTUDIO_URL}/start-a-project`}>Open project brief <span aria-hidden="true">↗</span></a></article>
          <article><span>02 / PLATFORM SUPPORT</span><h2>Reading and account questions</h2><p>For account, billing, reading or publishing support, contact the platform directly.</p><a className="text-link" href={PYLOTHOUSE_URL} target="_blank" rel="noopener noreferrer">Visit Pylothouse <span aria-hidden="true">↗</span></a></article>
          <article><span>03 / STUDIO</span><h2>General studio questions</h2><p>For press, careers and other studio enquiries, use the official Nartstudio contact page.</p><a className="text-link" href={`${NARTSTUDIO_URL}/contact`} target="_blank" rel="noopener noreferrer">Contact Nartstudio <span aria-hidden="true">↗</span></a></article>
        </div>
        <p className="contact-footnote">Do not send account passwords, payment information or confidential project material through this link hub.</p>
      </main>
    </SiteLayout>
  )
}
