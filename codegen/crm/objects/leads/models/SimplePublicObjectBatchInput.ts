/**
 * Leads
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class SimplePublicObjectBatchInput {
    /**
    * The name of a property whose values are unique for this object
    */
    'idProperty'?: string;
    'objectWriteTraceId'?: string;
    /**
    * The id to be updated. This can be the object id, or the unique property value of the idProperty property
    */
    'id': string;
    'properties': { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "idProperty",
            "baseName": "idProperty",
            "type": "string",
            "format": ""
        },
        {
            "name": "objectWriteTraceId",
            "baseName": "objectWriteTraceId",
            "type": "string",
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
        }    ];

    static getAttributeTypeMap() {
        return SimplePublicObjectBatchInput.attributeTypeMap;
    }

    public constructor() {
    }
}
