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


export class PublicTimeOffset {
    'amount': number;
    'offsetDirection': string;
    'timeUnit': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "amount",
            "baseName": "amount",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "offsetDirection",
            "baseName": "offsetDirection",
            "type": "string",
            "format": ""
        },
        {
            "name": "timeUnit",
            "baseName": "timeUnit",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicTimeOffset.attributeTypeMap;
    }

    public constructor() {
    }
}
