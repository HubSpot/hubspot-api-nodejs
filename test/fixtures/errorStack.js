const path = require('node:path')

// Keep the application caller in native JavaScript, independent of the SDK's compiler target.
const clientPath = process.argv[2]
const { Client } = require(clientPath)
const { ApiException } = require(path.join(path.dirname(clientPath), 'codegen/crm/contacts/apis/exception.js'))
const client = new Client(JSON.parse(process.argv[3]))
let requestCount = 0

globalThis.fetch = async () => {
  requestCount++
  return new Response(
    JSON.stringify({ status: 'error', message: 'Invalid search', correlationId: 'test-correlation-id' }),
    {
      status: 400,
      headers: { 'content-type': 'application/json', 'x-request-id': 'test-request-id' },
    },
  )
}

async function applicationCaller() {
  await client.crm.contacts.searchApi.doSearch({
    filterGroups: [],
    sorts: [],
    properties: [],
    limit: 1,
    after: '0',
  })
}

applicationCaller().then(
  () => {
    console.error('Expected the mocked HTTP 400 response to reject')
    process.exitCode = 1
  },
  (error) => {
    process.stdout.write(
      JSON.stringify({
        isApiException: error instanceof ApiException,
        code: error.code,
        body: error.body,
        headers: error.headers,
        stack: error.stack,
        requestCount,
      }),
    )
  },
)
