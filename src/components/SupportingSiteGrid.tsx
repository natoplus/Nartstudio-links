import { supportingSites } from '../lib/links'

export default function SupportingSiteGrid() {
  return (
    <div className="supporting-grid">
      {supportingSites.map((site) => {
        const content = (
          <>
            <span className="supporting-art"><img src={site.image} alt="" loading="lazy" /></span>
            <span className="supporting-status">{site.availability}</span>
            <strong>{site.name}</strong>
            <span className="supporting-description">{site.description}</span>
            {site.href ? <span className="supporting-action">Open destination <b aria-hidden="true">↗</b></span> : <span className="supporting-action">Availability to be confirmed</span>}
          </>
        )

        return site.href ? (
          <a className={`supporting-card supporting-card-${site.id}`} href={site.href} target="_blank" rel="noopener noreferrer" key={site.id}>
            {content}
          </a>
        ) : (
          <article className={`supporting-card supporting-card-${site.id}`} key={site.id}>
            {content}
          </article>
        )
      })}
    </div>
  )
}
