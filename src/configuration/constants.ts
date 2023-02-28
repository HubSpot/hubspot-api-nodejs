export const DEFAULT_LIMITER_OPTIONS = {
  minTime: 1000 / 9,
  maxConcurrent: 6,
  id: 'hubspot-client-limiter',
}

export const SEARCH_LIMITER_OPTIONS = {
  minTime: 550,
  maxConcurrent: 3,
  id: 'search-hubspot-client-limiter',
}
