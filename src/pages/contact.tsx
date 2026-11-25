import Head from 'next/head'
import Link from 'next/link'
import SiteLayout from '../components/SiteLayout'

export default function Contact() {
  return <SiteLayout><Head><title>Contact Nartstudio | Official Links</title><meta name="description" content="Choose the right contact route for a Nartstudio project or platform question." /></Head>
    <main id="main-content" className="content-page contact-page"><p className="eyebrow"><Link href="/">LINKS</Link> / CONTACT</p><h1>Start with the<br /><em>right conversation.</em></h1><p className="lede">Tell us what you are looking to make, or contact the service that can best answer your question.</p>
      <div className="contact-options"><article><span>01 / PROJECTS</span><h2>Creative work & collaborations</h2><p>Share your goals, audience, timing and the kind of help you need. The project page explains the enquiry process.</p><a className="button-primary" href="https://nartstudio.com/start-a-project">Open project brief <span aria-hidden="true">↗</span></a></article><article><span>02 / GENERAL QUESTIONS</span><h2>Reach the studio</h2><p>For a general studio question, start an email. This page does not send or store your message.</p><a className="text-link" href="mailto:hello@nartstudio.com?subject=Nartstudio%20enquiry">Email hello@nartstudio.com <span aria-hidden="true">↗</span></a></article></div>
      <p className="contact-footnote">For account, billing, reading or publishing support, use the contact information on the relevant destination rather than sending sensitive details to the studio.</p>
    </main>
  </SiteLayout>
}
