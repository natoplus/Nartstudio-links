export const NARTSTUDIO_URL = 'https://nartstudio.com'
export const NCU_URL = 'https://ncunartstudio.vercel.app'
export const OUBYT_URL = 'https://oubyt.vercel.app'
export const PYLOTHOUSE_URL = 'https://pylothouse.com'
export const SHOP_URL = 'https://shop.nartstudio.com'

export type Destination = {
  id: string
  name: string
  description: string
  href: string
  category: string
}

export const primaryLinks: Destination[] = [
  {
    id: 'read',
    name: 'Read NCU on Pylothouse',
    description: 'Explore original comic worlds and find available stories.',
    href: PYLOTHOUSE_URL,
    category: 'READ',
  },
  {
    id: 'watch',
    name: 'Watch Oubyt',
    description: 'Discover animation, visual development and original worlds.',
    href: OUBYT_URL,
    category: 'WATCH',
  },
  {
    id: 'shop',
    name: 'Shop Nartstudio',
    description: 'Browse collection concepts; checkout is not available yet.',
    href: SHOP_URL,
    category: 'SHOP',
  },
  {
    id: 'project',
    name: 'Start a project',
    description: 'Tell the studio what you are looking to make.',
    href: `${NARTSTUDIO_URL}/start-a-project`,
    category: 'WORK WITH US',
  },
  {
    id: 'artists',
    name: 'Artist opportunities',
    description: 'Explore careers and ways to work with Nartstudio.',
    href: `${NARTSTUDIO_URL}/careers`,
    category: 'JOIN THE STUDIO',
  },
  {
    id: 'press',
    name: 'Press and media',
    description: 'Find studio information and press resources.',
    href: `${NARTSTUDIO_URL}/press`,
    category: 'PRESS',
  },
]

export const brandLinks = [
  {
    id: 'studio',
    name: 'Nartstudio',
    description: 'The independent studio behind the worlds and creative work.',
    href: '/studio',
    kind: 'internal' as const,
    image: '/assets/brands/nartstudio-logo.webp',
    imageType: 'logo' as const,
  },
  {
    id: 'ncu',
    name: 'NCU',
    description: 'Original comics and story worlds.',
    href: '/ncu',
    kind: 'internal' as const,
    image: '/assets/brands/ncu-logo.webp',
    imageType: 'logo' as const,
  },
  {
    id: 'oubyt',
    name: 'Oubyt',
    description: 'Animation, visual development and motion.',
    href: '/oubyt',
    kind: 'internal' as const,
    image: '/assets/brands/oubyt-logo.webp',
    imageType: 'logo' as const,
  },
  {
    id: 'pylothouse',
    name: 'Pylothouse',
    description: 'Read, publish and discover comics.',
    href: '/pylothouse',
    kind: 'internal' as const,
    image: '/assets/brands/pylothouse-logo.webp',
    imageType: 'logo' as const,
  },
  {
    id: 'shop',
    name: 'Shop',
    description: 'Preview catalogue; checkout is not available yet.',
    href: SHOP_URL,
    kind: 'external' as const,
    image: '/assets/brands/nartstudio-logo.webp',
    imageType: 'logo' as const,
  },
]

export type SupportingSite = {
  id: string
  name: string
  description: string
  image: string
  availability: string
  href?: string
}

export const supportingSites: SupportingSite[] = [
  {
    id: 'academy',
    name: 'Nartstudio Academy',
    description: 'Practical resources for artists, storytellers and independent creatives.',
    image: '/assets/brands/nartstudio-logo.webp',
    availability: 'DOMAIN CHOICE OPEN',
  },
  {
    id: 'clients',
    name: 'Client Portal',
    description: 'A planned private space for invited clients to review project progress.',
    image: '/assets/brands/nartstudio-logo.webp',
    availability: 'PRIVATE / DESTINATION UNVERIFIED',
  },
  {
    id: 'help',
    name: 'Pylothouse Help Centre',
    description: 'A planned home for reader, creator and account guidance.',
    image: '/assets/brands/pylothouse-logo.webp',
    availability: 'PLANNED / DESTINATION UNVERIFIED',
  },
  {
    id: 'status',
    name: 'Service Status',
    description: 'A planned status page; live monitoring is not configured.',
    image: '/assets/brands/pylothouse-logo.webp',
    availability: 'PLANNED / MONITORING NOT CONFIGURED',
  },
  {
    id: 'campaigns',
    name: 'Campaigns',
    description: 'Launch-planning resources. No live campaign listings are published here.',
    image: '/assets/brands/nartstudio-logo.webp',
    availability: 'PLANNING TOOLS / PREVIEW',
  },
]

export type BrandHub = {
  name: string
  discipline: string
  description: string
  accent: string
  links: Destination[]
}

export const brandHubs: Record<string, BrandHub> = {
  ncu: {
    name: 'NCU',
    discipline: 'ORIGINAL COMIC WORLDS',
    description: 'Meet Nartstudio’s original story universes, then continue to the official comic destinations.',
    accent: 'ncu',
    links: [
      { id: 'universes', name: 'Explore NCU', description: 'Browse the official universe guide.', href: NCU_URL, category: 'DISCOVER' },
      { id: 'read', name: 'Read on Pylothouse', description: 'Find comics currently available to read.', href: PYLOTHOUSE_URL, category: 'READ' },
      { id: 'studio', name: 'Visit Nartstudio', description: 'See the wider creative studio.', href: NARTSTUDIO_URL, category: 'STUDIO' },
    ],
  },
  oubyt: {
    name: 'Oubyt',
    discipline: 'ANIMATION & VISUAL STORYTELLING',
    description: 'Explore the Nartstudio animation studio and its approach to original worlds, character and motion.',
    accent: 'oubyt',
    links: [
      { id: 'watch', name: 'Explore Oubyt', description: 'Visit the official animation studio site.', href: OUBYT_URL, category: 'DISCOVER' },
      { id: 'project', name: 'Start an animation project', description: 'Share a project brief with the studio.', href: `${NARTSTUDIO_URL}/start-a-project`, category: 'WORK WITH US' },
      { id: 'ncu', name: 'Discover NCU worlds', description: 'Explore original comic universes.', href: NCU_URL, category: 'STORY WORLDS' },
    ],
  },
  pylothouse: {
    name: 'Pylothouse',
    discipline: 'READ · PUBLISH · DISCOVER',
    description: 'Find a story to read or learn more about the creator-first comic platform.',
    accent: 'pylothouse',
    links: [
      { id: 'read', name: 'Visit Pylothouse', description: 'Browse the official comic platform.', href: PYLOTHOUSE_URL, category: 'READ' },
      { id: 'ncu', name: 'Explore NCU', description: 'Meet the Nartstudio comic universes.', href: NCU_URL, category: 'DISCOVER' },
      { id: 'studio', name: 'Contact Nartstudio', description: 'Find the right studio contact route.', href: `${NARTSTUDIO_URL}/contact`, category: 'CONTACT' },
    ],
  },
  studio: {
    name: 'Nartstudio',
    discipline: 'INDEPENDENT CREATIVE STUDIO',
    description: 'Original story worlds, animation and creative services. Choose a route to explore the studio or start a conversation.',
    accent: 'studio',
    links: [
      { id: 'project', name: 'Start a project', description: 'Share your goals and project brief.', href: `${NARTSTUDIO_URL}/start-a-project`, category: 'PROJECTS' },
      { id: 'work', name: 'Selected work', description: 'Explore studio work and services.', href: `${NARTSTUDIO_URL}/work`, category: 'PORTFOLIO' },
      { id: 'press', name: 'Press and media', description: 'Visit the official press page.', href: `${NARTSTUDIO_URL}/press`, category: 'PRESS' },
      { id: 'careers', name: 'Careers', description: 'See current opportunities with the studio.', href: `${NARTSTUDIO_URL}/careers`, category: 'CAREERS' },
      { id: 'contact', name: 'Contact', description: 'Find the right way to reach Nartstudio.', href: `${NARTSTUDIO_URL}/contact`, category: 'CONTACT' },
    ],
  },
}

export const socialLinks = [
  { name: 'Instagram', shortName: 'IG', href: 'https://www.instagram.com/nart_studio_official/' },
  { name: 'TikTok', shortName: 'TT', href: 'https://vm.tiktok.com/ZS9PkHuoNtq1D-Zmv8C/' },
  { name: 'X', shortName: 'X', href: 'https://x.com/Nart_studio' },
]

export const sourcePriorities: Record<string, string> = {
  instagram: 'read',
  tiktok: 'watch',
  linkedin: 'project',
  qr: '',
  direct: '',
}

export function withAttribution(href: string, source: string, campaign: string, medium = 'links'): string {
  const url = new URL(href)
  url.searchParams.set('utm_source', source)
  url.searchParams.set('utm_medium', medium)
  url.searchParams.set('utm_campaign', campaign)
  return url.toString()
}
