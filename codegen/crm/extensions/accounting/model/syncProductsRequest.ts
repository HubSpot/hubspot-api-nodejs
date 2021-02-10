/**
 * Accounting Extension
 * These APIs allow you to interact with HubSpot\'s Accounting Extension. It allows you to: * Specify the URLs that HubSpot will use when making webhook requests to your external accounting system. * Respond to webhook calls made to your external accounting system by HubSpot 
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { UpdatedProduct } from './updatedProduct';

/**
* A request to import external accounting product properties in HubSpot
*/
export class SyncProductsRequest {
    /**
    * The ID of the account in the external accounting system. This is the value that will be passed as `accountId` for all outbound calls for the user from HubSpot to the external accounting system.
    */
    'accountId': string;
    /**
    * A list of products to be imported.
    */
    'products': Array<UpdatedProduct>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "accountId",
            "baseName": "accountId",
            "type": "string"
        },
        {
            "name": "products",
            "baseName": "products",
            "type": "Array<UpdatedProduct>"
        }    ];

    static getAttributeTypeMap() {
        return SyncProductsRequest.attributeTypeMap;
    }
}
