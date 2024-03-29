/**
 * Lists
 * CRUD operations to manage lists and list memberships
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class PublicRangedDatePropertyOperation {
    'operationType': PublicRangedDatePropertyOperationOperationTypeEnum;
    'operator': string;
    'includeObjectsWithNoValueSet': boolean;
    'upperBound': number;
    'lowerBound': number;
    'requiresTimeZoneConversion': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "operationType",
            "baseName": "operationType",
            "type": "PublicRangedDatePropertyOperationOperationTypeEnum",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "string",
            "format": ""
        },
        {
            "name": "includeObjectsWithNoValueSet",
            "baseName": "includeObjectsWithNoValueSet",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "upperBound",
            "baseName": "upperBound",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "lowerBound",
            "baseName": "lowerBound",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "requiresTimeZoneConversion",
            "baseName": "requiresTimeZoneConversion",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicRangedDatePropertyOperation.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PublicRangedDatePropertyOperationOperationTypeEnum {
    RangedDate = 'RANGED_DATE'
}

