/**
 * Line Items
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SimplePublicObjectBatchInputUpsert } from '../models/SimplePublicObjectBatchInputUpsert';

export class BatchInputSimplePublicObjectBatchInputUpsert {
    'inputs': Array<SimplePublicObjectBatchInputUpsert>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<SimplePublicObjectBatchInputUpsert>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchInputSimplePublicObjectBatchInputUpsert.attributeTypeMap;
    }

    public constructor() {
    }
}

