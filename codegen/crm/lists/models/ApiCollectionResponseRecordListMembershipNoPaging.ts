/**
 * Lists
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RecordListMembership } from '../models/RecordListMembership';

export class ApiCollectionResponseRecordListMembershipNoPaging {
    'total'?: number;
    'results': Array<RecordListMembership>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<RecordListMembership>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ApiCollectionResponseRecordListMembershipNoPaging.attributeTypeMap;
    }

    public constructor() {
    }
}
