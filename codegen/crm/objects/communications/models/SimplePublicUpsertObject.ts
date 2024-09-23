/**
 * Communications
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ValueWithTimestamp } from '../models/ValueWithTimestamp';

export class SimplePublicUpsertObject {
    'createdAt': Date;
    'archived'?: boolean;
    'archivedAt'?: Date;
    '_new': boolean;
    'propertiesWithHistory'?: { [key: string]: Array<ValueWithTimestamp>; };
    'id': string;
    'properties': { [key: string]: string; };
    'updatedAt': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "archivedAt",
            "baseName": "archivedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "_new",
            "baseName": "new",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "propertiesWithHistory",
            "baseName": "propertiesWithHistory",
            "type": "{ [key: string]: Array<ValueWithTimestamp>; }",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return SimplePublicUpsertObject.attributeTypeMap;
    }

    public constructor() {
    }
}

