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

import { PublicObjectList } from '../models/PublicObjectList';

export class ListFetchResponse {
    'list': PublicObjectList;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "list",
            "baseName": "list",
            "type": "PublicObjectList",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListFetchResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
