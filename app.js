var hubspot_1 = require('./src/hubspot');
var configuration_1 = require('./src/configuration');
async;
function main() {
    var config = new configuration_1.configuration({ apiKey: 'e45c6d31-9d6b-4d9f-a008-503af2da0548' });
    var client = new hubspot_1.hubspot(config);
    console.log(config);
    var response = await, client, crm, contacts, basicApi, getPage = ();
    console.log(response);
}
;
main();
