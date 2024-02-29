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

import { SubscriptionResponse } from '../models/SubscriptionResponse';

export class BatchResponseSubscriptionResponse {
    'completedAt': Date;
    'requestedAt'?: Date;
    'startedAt': Date;
    'links'?: { [key: string]: string; };
    'results': Array<SubscriptionResponse>;
    'status': BatchResponseSubscriptionResponseStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "completedAt",
            "baseName": "completedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "requestedAt",
            "baseName": "requestedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<SubscriptionResponse>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "BatchResponseSubscriptionResponseStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchResponseSubscriptionResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BatchResponseSubscriptionResponseStatusEnum {
    Pending = 'PENDING',
    Processing = 'PROCESSING',
    Canceled = 'CANCELED',
    Complete = 'COMPLETE'
}
