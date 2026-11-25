export type StudioLink = { name: string; description: string; href: string; category: 'Studio' | 'Universes' | 'Services' }

export const studioLinks: StudioLink[] = [
  { name: 'Nartstudio', description: 'The independent creative studio and its work.', href: 'https://nartstudio.com', category: 'Studio' },
  { name: 'NCU', description: 'Explore original comic universes and characters.', href: 'https://ncunartstudio.vercel.app', category: 'Universes' },
  { name: 'Oubyt', description: 'Motion, animation and visual production.', href: 'https://oubyt.vercel.app', category: 'Studio' },
  { name: 'Pylothouse', description: 'A home for stories, readers and creators.', href: 'https://pylothouse.com', category: 'Universes' },
  { name: 'Nartstudio Shop', description: 'Storefront information and future collections.', href: 'https://shop.nartstudio.com', category: 'Services' },
  { name: 'Start a project', description: 'Share a project brief with the studio.', href: 'https://nartstudio.com/start-a-project', category: 'Services' },
]
