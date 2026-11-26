# Nartstudio Links

Mobile-first official hub for Nartstudio destinations, brand links, project enquiries and social profiles.

## Pages

- `/` - source-aware hub with copy-link controls and UTM-tagged destinations
- `/ncu`, `/oubyt`, `/pylothouse`, `/studio` - data-driven brand hubs
- `/ecosystem` - brand directory with official artwork and supporting-service cards
- `/drops`, `/artists`, `/contact`, `/legal` - destination and information pages
- `/go/[slug]` - allow-listed short redirects
- `/qr/[event]` - QR landing redirect with event campaign parameters

Planned or unverified supporting services are shown as non-clickable cards until their destinations are confirmed.
Brand marks are WebP copies of the root project's official assets, kept in this site so its deployment does not depend on sibling folders.
Short and QR links use UTM parameters for attribution. Click events are not stored by this site; add a server-side analytics function before relying on click reports. Newsletter signup and Discord are omitted until the official endpoints are configured.

```bash
npm install
npm run dev
npm run typecheck
npm run build
```
