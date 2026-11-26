import type { GetServerSideProps } from 'next'

export default function QrLanding() {
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const event = typeof params?.event === 'string' ? params.event.toLowerCase() : ''
  if (!/^[a-z0-9][a-z0-9-]{0,63}$/.test(event)) return { notFound: true }

  const campaign = new URLSearchParams({ utm_source: 'qr', utm_medium: 'print', utm_campaign: event })
  return {
    redirect: {
      destination: `/?${campaign.toString()}`,
      permanent: false,
    },
  }
}
