/**
 * Hubdb
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HubDbTableRowBatchCloneRequest } from '../models/HubDbTableRowBatchCloneRequest';

export class BatchInputHubDbTableRowBatchCloneRequest {
    'inputs': Array<HubDbTableRowBatchCloneRequest>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<HubDbTableRowBatchCloneRequest>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchInputHubDbTableRowBatchCloneRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
