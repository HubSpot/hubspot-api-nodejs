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


export class PublicComparativePropertyUpdatedOperation {
    'operationType': PublicComparativePropertyUpdatedOperationOperationTypeEnum;
    'operator': string;
    'includeObjectsWithNoValueSet': boolean;
    'comparisonPropertyName': string;
    'defaultComparisonValue'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "operationType",
            "baseName": "operationType",
            "type": "PublicComparativePropertyUpdatedOperationOperationTypeEnum",
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
            "name": "comparisonPropertyName",
            "baseName": "comparisonPropertyName",
            "type": "string",
            "format": ""
        },
        {
            "name": "defaultComparisonValue",
            "baseName": "defaultComparisonValue",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicComparativePropertyUpdatedOperation.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PublicComparativePropertyUpdatedOperationOperationTypeEnum = "COMPARATIVE_PROPERTY_UPDATED" ;
