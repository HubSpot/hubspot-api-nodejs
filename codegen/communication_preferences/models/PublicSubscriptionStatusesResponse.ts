/**
 * Subscriptions
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PublicSubscriptionStatus } from '../models/PublicSubscriptionStatus';

export class PublicSubscriptionStatusesResponse {
    /**
    * Email address of the contact.
    */
    'recipient': string;
    /**
    * A list of all of the contact\'s subscriptions statuses.
    */
    'subscriptionStatuses': Array<PublicSubscriptionStatus>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recipient",
            "baseName": "recipient",
            "type": "string",
            "format": ""
        },
        {
            "name": "subscriptionStatuses",
            "baseName": "subscriptionStatuses",
            "type": "Array<PublicSubscriptionStatus>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicSubscriptionStatusesResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
