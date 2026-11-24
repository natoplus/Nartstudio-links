import Head from 'next/head'

const links = [
  ['Pylothouse', 'Read and publish stories', 'https://pylothouse.com'],
  ['NCU', 'Explore original comic worlds', 'https://ncunartstudio.vercel.app'],
  ['Oubyt', 'Animation and motion', 'https://oubyt.vercel.app'],
  ['Shop', 'Official drops and collections', 'https://shop.nartstudio.com'],
  ['Start a project', 'Commission original creative work', 'https://nartstudio.com/start-a-project'],
  ['Discord', 'Join the Nartstudio community', 'https://discord.com'],
]

export default function LinkHub() {
  return (
    <>
      <Head><title>Nartstudio Links</title><meta name="description" content="Official links for the Nartstudio ecosystem." /></Head>
      <main className="link-hub">
        <header className="profile">
          <div className="mark">N</div>
          <strong>@nartstudio</strong>
          <span>Original worlds. Creative production.</span>
        </header>
        <nav aria-label="Official Nartstudio links">
          {links.map(([title, text, href]) => (
            <a href={href} key={title} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
              <span><b>{title}</b><small>{text}</small></span><i>↗</i>
            </a>
          ))}
        </nav>
        <footer>© 2026 NARTSTUDIO</footer>
      </main>
    </>
  )
}
