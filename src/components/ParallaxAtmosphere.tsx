import { useEffect, useRef } from 'react'

export default function ParallaxAtmosphere() {
  const scene = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const element = scene.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let frame = 0
    const update = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => element.parentElement?.querySelectorAll<HTMLElement>('[data-depth], [data-parallax-depth]').forEach(layer => {
        const depth = Number(layer.dataset.depth ?? layer.dataset.parallaxDepth)
        const limit = layer.hasAttribute('data-parallax-depth') ? 22 : 105
        const offset = Math.max(-limit, Math.min(limit, window.scrollY * depth))
        layer.style.setProperty('--parallax-offset', `${offset}px`)
      }))
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => { window.removeEventListener('scroll', update); window.cancelAnimationFrame(frame) }
  }, [])
  return <div ref={scene} className="parallax-atmosphere" aria-hidden="true"><span data-depth="-0.15" /><span data-depth="0.09" /><span data-depth="-0.23" /></div>
}
