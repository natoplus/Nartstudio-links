import type { GetServerSideProps } from 'next'
import { NARTSTUDIO_URL, NCU_URL, OUBYT_URL, PYLOTHOUSE_URL, SHOP_URL, withAttribution } from '../../lib/links'

const shortLinks: Record<string, string> = {
  read: PYLOTHOUSE_URL,
  ncu: NCU_URL,
  watch: OUBYT_URL,
  oubyt: OUBYT_URL,
  shop: SHOP_URL,
  project: `${NARTSTUDIO_URL}/start-a-project`,
  artists: `${NARTSTUDIO_URL}/careers`,
  press: `${NARTSTUDIO_URL}/press`,
}

export default function ShortLink() {
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const slug = typeof params?.slug === 'string' ? params.slug.toLowerCase() : ''
  const href = shortLinks[slug]

  if (!href) return { notFound: true }
  return {
    redirect: {
      destination: withAttribution(href, 'links', `short-${slug}`),
      permanent: false,
    },
  }
}
