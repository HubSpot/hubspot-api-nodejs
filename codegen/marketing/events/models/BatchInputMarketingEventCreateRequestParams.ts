/**
 * Marketing Events Extension
 * These APIs allow you to interact with HubSpot's Marketing Events Extension. It allows you to: * Create, Read or update Marketing Event information in HubSpot * Specify whether a HubSpot contact has registered, attended or cancelled a registration to a Marketing Event. * Specify a URL that can be called to get the details of a Marketing Event. 
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MarketingEventCreateRequestParams } from './MarketingEventCreateRequestParams';
import { HttpFile } from '../http/http';

export class BatchInputMarketingEventCreateRequestParams {
    'inputs': Array<MarketingEventCreateRequestParams>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<MarketingEventCreateRequestParams>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchInputMarketingEventCreateRequestParams.attributeTypeMap;
    }

    public constructor() {
    }
}

