const hubspot = require('./lib/index.js')

const hubspotClient = new hubspot.Client({ accessToken: 'pat-na1-8cde08dc-29cd-4a78-9ae5-f99c246ba0e2' })

hubspotClient.crm.contacts

const used = process.memoryUsage()
for (let key in used) {
  console.log(`${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`)
}
