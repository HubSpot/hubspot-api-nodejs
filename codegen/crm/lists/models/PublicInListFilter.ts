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

import { PublicInListFilterMetadata } from '../models/PublicInListFilterMetadata';

export class PublicInListFilter {
    'listId': string;
    'metadata'?: PublicInListFilterMetadata;
    'filterType': PublicInListFilterFilterTypeEnum;
    'operator': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "listId",
            "baseName": "listId",
            "type": "string",
            "format": ""
        },
        {
            "name": "metadata",
            "baseName": "metadata",
            "type": "PublicInListFilterMetadata",
            "format": ""
        },
        {
            "name": "filterType",
            "baseName": "filterType",
            "type": "PublicInListFilterFilterTypeEnum",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicInListFilter.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum PublicInListFilterFilterTypeEnum {
    InList = 'IN_LIST'
}

