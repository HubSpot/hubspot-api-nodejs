/**
 * Marketing Events
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class SubscriberVidResponse {
    'vid': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "vid",
            "baseName": "vid",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return SubscriberVidResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
