/**
 * Webhooks Webhooks
 * Provides a way for apps to subscribe to certain change events in HubSpot. Once configured, apps will receive event payloads containing details about the changes at a specified target URL. There can only be one target URL for receiving event notifications per app.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ThrottlingSettings } from '../models/ThrottlingSettings';

/**
* Webhook settings for an app.
*/
export class SettingsResponse {
    /**
    * When this subscription was created. Formatted as milliseconds from the [Unix epoch](#).
    */
    'createdAt': Date;
    'throttling': ThrottlingSettings;
    /**
    * A publicly available URL for HubSpot to call where event payloads will be delivered. See [link-so-some-doc](#) for details about the format of these event payloads.
    */
    'targetUrl': string;
    /**
    * When this subscription was last updated. Formatted as milliseconds from the [Unix epoch](#).
    */
    'updatedAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "throttling",
            "baseName": "throttling",
            "type": "ThrottlingSettings",
            "format": ""
        },
        {
            "name": "targetUrl",
            "baseName": "targetUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return SettingsResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
