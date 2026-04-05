import FormData from 'form-data'
import * as http from 'http'
import * as https from 'https'
import { URLSearchParams } from 'url'

type HeaderMap = Record<string, string>
type RequestUrl = string | URL

interface PipeableBody {
  on(event: string, listener: (...args: unknown[]) => void): unknown
  pipe(destination: NodeJS.WritableStream): NodeJS.WritableStream
}

export interface IHttpTransportOptions {
  method?: string
  headers?: HeaderMap
  body?: unknown
  agent?: http.Agent | https.Agent
}

export interface IBufferedResponse {
  status: number
  headers: HeaderMap
  text(): Promise<string>
  binary(): Promise<Buffer>
}

export async function sendFetchRequest(url: RequestUrl, options: IHttpTransportOptions): Promise<Response> {
  // Native fetch supports WHATWG FormData, but this SDK's public upload contract
  // uses the npm form-data stream; without this path, multipart uploads are
  // stringified as "[object FormData]" and break existing callers.
  if (isFormDataBody(options.body)) {
    const response = await sendNodeRequest(url, options)
    const responseBody = shouldOmitResponseBody(response.status) ? null : await response.binary()

    return new Response(responseBody, {
      headers: response.headers,
      status: response.status,
    })
  }

  return await fetch(url, buildRequestInit(options))
}

export async function sendBufferedRequest(url: RequestUrl, options: IHttpTransportOptions): Promise<IBufferedResponse> {
  if (options.agent) {
    return await sendNodeRequest(url, options)
  }

  const response = await sendFetchRequest(url, options)
  return createBufferedResponse(response.status, getHeadersFromFetchResponse(response), async () => {
    return Buffer.from(await response.arrayBuffer())
  })
}

function buildRequestInit(options: IHttpTransportOptions): RequestInit & { duplex?: 'half' } {
  const requestInit: RequestInit & { duplex?: 'half' } = {
    method: options.method,
    headers: normalizeHeaders(options.headers, options.body),
  }

  if (options.body !== undefined) {
    requestInit.body = options.body as RequestInit['body']
  }

  if (isPipeableBody(options.body)) {
    requestInit.duplex = 'half'
  }

  return requestInit
}

function normalizeHeaders(headers: HeaderMap | undefined, body: unknown): HeaderMap | undefined {
  if (isFormDataBody(body)) {
    return mergeHeaders(headers, body.getHeaders())
  }

  if (!headers) {
    return undefined
  }

  return { ...headers }
}

function mergeHeaders(headers: HeaderMap | undefined, nextHeaders: HeaderMap): HeaderMap {
  const mergedHeaders = headers ? { ...headers } : {}

  for (const [nextHeaderName, nextHeaderValue] of Object.entries(nextHeaders)) {
    const existingHeaderName = Object.keys(mergedHeaders).find(
      (headerName) => headerName.toLowerCase() === nextHeaderName.toLowerCase(),
    )

    if (existingHeaderName) {
      delete mergedHeaders[existingHeaderName]
    }

    mergedHeaders[nextHeaderName] = nextHeaderValue
  }

  return mergedHeaders
}

function isFormDataBody(body: unknown): body is FormData {
  return body instanceof FormData
}

function isPipeableBody(body: unknown): body is PipeableBody {
  return typeof body === 'object' && body !== null && 'pipe' in body && 'on' in body
}

async function sendNodeRequest(url: RequestUrl, options: IHttpTransportOptions): Promise<IBufferedResponse> {
  const targetUrl = typeof url === 'string' ? new URL(url) : url
  const requestHeaders = normalizeHeaders(options.headers, options.body)
  const requestBody = serializeBody(options.body)
  const transport = targetUrl.protocol === 'https:' ? https : http

  return await new Promise<IBufferedResponse>((resolve, reject) => {
    const request = transport.request(
      targetUrl,
      {
        agent: options.agent,
        headers: requestHeaders,
        method: options.method,
      },
      (response) => {
        const chunks: Buffer[] = []

        response.on('data', (chunk) => {
          chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk))
        })

        response.on('end', () => {
          const body = Buffer.concat(chunks)
          resolve(
            createBufferedResponse(response.statusCode ?? 0, getHeadersFromNodeResponse(response), async () => body),
          )
        })

        response.on('error', reject)
      },
    )

    request.on('error', reject)

    if (requestBody === undefined) {
      request.end()
      return
    }

    if (isPipeableBody(requestBody)) {
      requestBody.on('error', reject)
      requestBody.pipe(request)
      return
    }

    request.end(requestBody)
  })
}

function serializeBody(body: unknown): string | Buffer | PipeableBody | undefined {
  if (body === undefined) {
    return undefined
  }

  if (typeof body === 'string' || Buffer.isBuffer(body) || isPipeableBody(body)) {
    return body
  }

  if (body instanceof URLSearchParams) {
    return body.toString()
  }

  throw new TypeError('Unsupported HTTP request body for Node transport.')
}

function getHeadersFromFetchResponse(response: Response): HeaderMap {
  const headers: HeaderMap = {}

  response.headers.forEach((value, name) => {
    headers[name] = value
  })

  return headers
}

function getHeadersFromNodeResponse(response: http.IncomingMessage): HeaderMap {
  const headers: HeaderMap = {}

  for (const [name, value] of Object.entries(response.headers)) {
    if (value === undefined) {
      continue
    }

    headers[name] = Array.isArray(value) ? value.join(', ') : value
  }

  return headers
}

function createBufferedResponse(
  status: number,
  headers: HeaderMap,
  getBody: () => Promise<Buffer>,
): IBufferedResponse {
  let bodyPromise: Promise<Buffer> | undefined

  const readBody = async () => {
    if (!bodyPromise) {
      bodyPromise = getBody()
    }

    return await bodyPromise
  }

  return {
    status,
    headers,
    async binary() {
      return await readBody()
    },
    async text() {
      return (await readBody()).toString()
    },
  }
}

function shouldOmitResponseBody(status: number): boolean {
  return status === 101 || status === 204 || status === 205 || status === 304
}
