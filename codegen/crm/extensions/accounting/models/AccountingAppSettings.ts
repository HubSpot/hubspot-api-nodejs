/**
 * Accounting Extension
 * These APIs allow you to interact with HubSpot\'s Accounting Extension. It allows you to: * Specify the URLs that HubSpot will use when making webhook requests to your external accounting system. * Respond to webhook calls made to your external accounting system by HubSpot 
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AccountingAppUrls } from '../models/AccountingAppUrls';
import { AccountingFeatures } from '../models/AccountingFeatures';

/**
* The URL Settings, which defines the URL endpoints that HubSpot will send requests to an external accounting application for certain actions.
*/
export class AccountingAppSettings {
    /**
    * The ID of the accounting app. This is the identifier of the application created in your HubSpot developer portal.
    */
    'appId': number;
    'urls': AccountingAppUrls;
    'features'?: AccountingFeatures;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "appId",
            "baseName": "appId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "urls",
            "baseName": "urls",
            "type": "AccountingAppUrls",
            "format": ""
        },
        {
            "name": "features",
            "baseName": "features",
            "type": "AccountingFeatures",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AccountingAppSettings.attributeTypeMap;
    }

    public constructor() {
    }
}
