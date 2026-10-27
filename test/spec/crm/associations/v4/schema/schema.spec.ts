import { Client } from '../../../../../../index'
import {
  DefinitionConfigurationsApi,
  DefinitionsApi,
  RequestContext,
  ResponseContext,
} from '../../../../../../codegen/crm/associations/v4/schema/index'
import ApiDecoratorService from '../../../../../../src/services/ApiDecoratorService'

describe('api client', () => {
  it('is discoverable', () => {
    const client = new Client().crm.associations.v4.schema
    expect(Object.prototype.hasOwnProperty.call(client, 'definitionsApi')).toBeTruthy()
    expect(DefinitionsApi.name).toBe(client.definitionsApi.constructor.name)
  })

  it('discovers association definition configurations', () => {
    const client = new Client().crm.associations.v4.schema
    expect(client.definitionConfigurationsApi).toBeInstanceOf(DefinitionConfigurationsApi)
  })

  it('uses client configuration for association definition configurations', async () => {
    const fetchSpy = spyOn(globalThis, 'fetch').and.resolveTo(
      new Response(JSON.stringify({ results: [] }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }),
    )
    const pre = jasmine.createSpy('pre').and.callFake((context: unknown) => {
      const request = context as RequestContext
      request.setHeaderParam('X-Middleware', 'applied')
      return request
    })
    const post = jasmine.createSpy('post').and.callFake((context: unknown) => context)
    const client = new Client({
      accessToken: 'test-token',
      basePath: 'https://api.example.test',
      defaultHeaders: { 'X-Custom-Header': 'custom-value' },
      middleware: [{ pre, post }],
    })

    const response = await client.crm.associations.v4.schema.definitionConfigurationsApi.getAll()

    expect(fetchSpy).toHaveBeenCalledTimes(1)
    const [url, options] = fetchSpy.calls.mostRecent().args
    expect(url).toBe('https://api.example.test/crm/v4/associations/definitions/configurations/all')
    expect(options?.method).toBe('GET')
    const headers = new Headers(options?.headers)
    expect(headers.get('Authorization')).toBe('Bearer test-token')
    expect(headers.get('X-Custom-Header')).toBe('custom-value')
    expect(headers.get('X-Middleware')).toBe('applied')
    expect(pre).toHaveBeenCalledOnceWith(jasmine.any(RequestContext))
    expect(post).toHaveBeenCalledOnceWith(jasmine.any(ResponseContext))
    expect(response.results).toEqual([])
  })

  it('decorates both association schema APIs', () => {
    const applySpy = spyOn(ApiDecoratorService.getInstance(), 'apply').and.callThrough()
    const client = new Client().crm.associations.v4.schema

    expect(applySpy).toHaveBeenCalledWith(client.definitionConfigurationsApi)
    expect(applySpy).toHaveBeenCalledWith(client.definitionsApi)
  })
})
