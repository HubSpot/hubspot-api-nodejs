const hubspot = require('./lib/index.js')

const hubspotClient = new hubspot.Client({ accessToken: 'd' })
console.log(hubspotClient.crm)

const used = process.memoryUsage()
for (let key in used) {
  console.log(`${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`)
}
