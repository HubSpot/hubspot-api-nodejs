// Legacy path prefix -> date-based path prefix. The first match wins, so specific prefixes come first.
// HubSpot moved or renamed some APIs, so the date cannot be derived from the legacy path.
// Paths that match nothing keep their legacy URL: /crm/v3/associations (the dated API is based on v4),
// /communication-preferences/v3 (redesigned), /integrators/timeline/v3, /marketing/v3/forms and /oauth/v1.
const VERSIONED_PREFIXES: ReadonlyArray<readonly [string, string]> = [
  ['/crm/v3/objects/deals/splits', '/deal-splits/{version}'],
  ['/crm/v3/objects', '/crm/objects/{version}'],
  ['/crm/v4/objects', '/crm/objects/{version}'],
  ['/crm/v3/owners', '/crm/owners/{version}'],
  ['/crm/v3/lists', '/crm/lists/{version}'],
  ['/crm/v3/imports', '/crm/imports/{version}'],
  ['/crm/v3/exports', '/crm/exports/{version}'],
  ['/crm/v3/properties', '/crm/properties/{version}'],
  ['/crm/v3/pipelines', '/crm/pipelines/{version}'],
  ['/crm/v4/associations', '/crm/associations/{version}'],
  ['/crm/v3/extensions/calling', '/crm/extensions/calling/{version}'],
  ['/crm/v3/extensions/cards-dev', '/crm/extensions/cards-dev/{version}'],
  ['/crm/v3/extensions/videoconferencing', '/crm/extensions/videoconferencing/{version}'],
  ['/crm-object-schemas/v3', '/crm-object-schemas/{version}'],
  ['/cms/v3/pages', '/cms/pages/{version}'],
  ['/cms/v3/blogs', '/cms/blogs/{version}'],
  ['/cms/v3/hubdb', '/cms/hubdb/{version}'],
  ['/cms/v3/site-search', '/cms/site-search/{version}'],
  ['/cms/v3/source-code', '/cms/source-code/{version}'],
  ['/cms/v3/url-redirects', '/cms/url-redirects/{version}'],
  ['/cms/v3/domains', '/cms/domains/{version}'],
  ['/cms/v3/audit-logs', '/cms/audit-logs/{version}'],
  ['/marketing/v3/emails', '/marketing/emails/{version}'],
  ['/marketing/v3/marketing-events', '/marketing/marketing-events/{version}'],
  ['/marketing/v3/transactional', '/marketing/transactional/{version}'],
  ['/settings/v3/users', '/settings/users/{version}'],
  ['/automation/v4/actions/callbacks', '/automation/actions/callbacks/{version}'],
  ['/automation/v4/actions', '/automation/actions/{version}'],
  ['/files/v3', '/files/{version}'],
  ['/business-units/v3', '/business-units/public/{version}'],
  ['/visitor-identification/v3', '/visitor-identification/{version}'],
  ['/oauth/v3/token', '/oauth/{version}/token'],
  ['/webhooks/v3', '/app-webhooks/{version}'],
  ['/events/v3/send', '/events/{version}/send'],
  ['/events/v3/events', '/events/event-occurrences/{version}'],
]

export function toVersionedPath(path: string, version: string): string {
  const match = VERSIONED_PREFIXES.find(([legacy]) => path === legacy || path.startsWith(`${legacy}/`))
  if (!match) {
    return path
  }

  const [legacy, versioned] = match
  return versioned.replace('{version}', version) + path.slice(legacy.length)
}
