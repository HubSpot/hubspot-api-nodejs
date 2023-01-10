const hubspot = require('./lib/index.js')

const hubspotClient = new hubspot.Client({
  accessToken: 'pat-na1-8cde08dc-29cd-4a78-9ae5-f99c246ba0e2',
  numberOfApiCallRetries: 4,
})

function syncCall() {
  for (let index = 1; index <= 100; index++) {
    hubspotClient.crm.contacts.basicApi.getById('322451')
  }
}

async function asyncCall() {
  for (let index = 1; index <= 100; index++) {
    let response = await hubspotClient.crm.contacts.basicApi.getById('322451')

    console.log(response.constructor.name)
  }
}
syncCall()
asyncCall()

const used = process.memoryUsage()
for (let key in used) {
  console.log(`${key} ${Math.round((used[key] / 1024 / 1024) * 100) / 100} MB`)
}
