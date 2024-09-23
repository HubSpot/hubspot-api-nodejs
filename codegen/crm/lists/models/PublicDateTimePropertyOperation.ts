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


export class PublicDateTimePropertyOperation {
    'includeObjectsWithNoValueSet': boolean;
    'requiresTimeZoneConversion': boolean;
    'operationType': PublicDateTimePropertyOperationOperationTypeEnum;
    'operator': string;
    'timestamp': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "includeObjectsWithNoValueSet",
            "baseName": "includeObjectsWithNoValueSet",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "requiresTimeZoneConversion",
            "baseName": "requiresTimeZoneConversion",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "operationType",
            "baseName": "operationType",
            "type": "PublicDateTimePropertyOperationOperationTypeEnum",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return PublicDateTimePropertyOperation.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PublicDateTimePropertyOperationOperationTypeEnum {
    Datetime = 'DATETIME'
}

