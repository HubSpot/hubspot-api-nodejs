/**
 * Marketing Events
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MarketingEventPublicUpdateRequestFullV2 } from '../models/MarketingEventPublicUpdateRequestFullV2';

export class BatchInputMarketingEventPublicUpdateRequestFullV2 {
    'inputs': Array<MarketingEventPublicUpdateRequestFullV2>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<MarketingEventPublicUpdateRequestFullV2>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchInputMarketingEventPublicUpdateRequestFullV2.attributeTypeMap;
    }

    public constructor() {
    }
}
