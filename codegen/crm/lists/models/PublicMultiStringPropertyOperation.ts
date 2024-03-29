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


export class PublicMultiStringPropertyOperation {
    'operationType': PublicMultiStringPropertyOperationOperationTypeEnum;
    'operator': string;
    'includeObjectsWithNoValueSet': boolean;
    'values': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "operationType",
            "baseName": "operationType",
            "type": "PublicMultiStringPropertyOperationOperationTypeEnum",
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
            "name": "values",
            "baseName": "values",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicMultiStringPropertyOperation.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PublicMultiStringPropertyOperationOperationTypeEnum {
    Multistring = 'MULTISTRING'
}

