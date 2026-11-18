import { Client, DEFAULT_API_VERSION } from '../../index'
import { HttpMethod, RequestContext, ResponseContext, ServerConfiguration } from '../../codegen/crm/contacts/index'
import { ApiClientConfigurator } from '../../src/configuration/ApiClientConfigurator'
import IConfiguration from '../../src/configuration/IConfiguration'
import { Observable } from '../../codegen/crm/contacts/rxjsStub'
import { toVersionedPath } from '../../src/configuration/apiVersionPaths'

function requestUrl(config: IConfiguration, path: string) {
  const params = ApiClientConfigurator.getParams<
    RequestContext,
    ResponseContext,
    Observable<RequestContext>,
    Observable<ResponseContext>,
    ServerConfiguration<Record<string, string>>
  >(config, ServerConfiguration, Observable, Observable) as unknown as {
    baseServer: { makeRequestContext(endpoint: string, httpMethod: HttpMethod): RequestContext }
  }

  return params.baseServer.makeRequestContext(path, HttpMethod.GET).getUrl()
}

describe('api version', () => {
  it('defaults to the latest stable version', () => {
    expect(requestUrl({}, '/crm/v3/objects/contacts')).toBe(
      `https://api.hubapi.com/crm/objects/${DEFAULT_API_VERSION}/contacts`,
    )
  })

  it('uses the configured version and base path', () => {
    expect(requestUrl({ apiVersion: '2026-03', basePath: 'https://proxy.test/hs' }, '/crm/v3/objects/contacts')).toBe(
      'https://proxy.test/hs/crm/objects/2026-03/contacts',
    )
  })

  const versionedPaths = [
    ['/crm/v3/objects/contacts/batch/read', '/crm/objects/V/contacts/batch/read'],
    ['/crm/v3/objects/deals/splits/batch/read', '/deal-splits/V/batch/read'],
    ['/crm/v4/objects/contacts/1/associations/companies', '/crm/objects/V/contacts/1/associations/companies'],
    ['/crm/v4/associations/contacts/companies/labels', '/crm/associations/V/contacts/companies/labels'],
    ['/crm/v3/owners/', '/crm/owners/V/'],
    ['/crm/v3/extensions/calling/1/settings', '/crm/extensions/calling/V/1/settings'],
    ['/crm-object-schemas/v3/schemas', '/crm-object-schemas/V/schemas'],
    ['/cms/v3/hubdb/tables', '/cms/hubdb/V/tables'],
    ['/marketing/v3/marketing-events/events', '/marketing/marketing-events/V/events'],
    ['/settings/v3/users/1', '/settings/users/V/1'],
    ['/automation/v4/actions/1', '/automation/actions/V/1'],
    ['/automation/v4/actions/callbacks/1/complete', '/automation/actions/callbacks/V/1/complete'],
    ['/files/v3/files/search', '/files/V/files/search'],
    ['/business-units/v3/business-units/user/1', '/business-units/public/V/business-units/user/1'],
    ['/visitor-identification/v3/tokens/create', '/visitor-identification/V/tokens/create'],
    ['/oauth/v3/token/introspect', '/oauth/V/token/introspect'],
    ['/webhooks/v3/1/subscriptions', '/app-webhooks/V/1/subscriptions'],
    ['/events/v3/send/batch', '/events/V/send/batch'],
    ['/events/v3/events/event-types', '/events/event-occurrences/V/event-types'],
  ]

  versionedPaths.forEach(([legacy, versioned]) => {
    it(`maps ${legacy}`, () => {
      expect(toVersionedPath(legacy, 'V')).toBe(versioned)
    })
  })

  const legacyPaths = [
    '/crm/v3/associations/contacts/companies/batch/read',
    '/communication-preferences/v3/definitions',
    '/integrators/timeline/v3/events',
    '/marketing/v3/forms/',
    '/oauth/v1/token',
  ]

  legacyPaths.forEach((path) => {
    it(`keeps ${path}`, () => {
      expect(toVersionedPath(path, 'V')).toBe(path)
    })
  })

  it('matches whole path segments only', () => {
    expect(toVersionedPath('/crm/v3/objects/v3', 'V')).toBe('/crm/objects/V/v3')
    expect(toVersionedPath('/crm/v3/objectsfoo', 'V')).toBe('/crm/v3/objectsfoo')
  })

  it('validates the configured version', () => {
    expect(() => new Client({ apiVersion: '2026-09' })).not.toThrow()
    expect(() => new Client({ apiVersion: '2027-03-beta' })).not.toThrow()
    expect(() => new Client({ apiVersion: 'v3' })).toThrowError(/Invalid apiVersion/)
    expect(() => new Client({ apiVersion: '2026-09/../..' })).toThrowError(/Invalid apiVersion/)
  })
})
