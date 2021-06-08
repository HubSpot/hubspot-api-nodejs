import { hubspot } from './src/hubspot'
import { configuration } from './src/configuration'

async function main() {
    let config = new configuration({apiKey: 'e45c6d31-9d6b-4d9f-a008-503af2da0548'})
    let client = new hubspot(config)
    console.log(config)
    let response = await client.crm.contacts.basicApi.getPage()

    console.log(response)
};
main()
