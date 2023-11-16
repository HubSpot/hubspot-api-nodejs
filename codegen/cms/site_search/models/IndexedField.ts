/**
 * CMS Site Search
 * Use these endpoints for searching content on your HubSpot hosted CMS website(s).
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class IndexedField {
    'values': Array<any>;
    'name': string;
    'value': any;
    'metadataField': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<any>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "any",
            "format": ""
        },
        {
            "name": "metadataField",
            "baseName": "metadataField",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return IndexedField.attributeTypeMap;
    }

    public constructor() {
    }
}
