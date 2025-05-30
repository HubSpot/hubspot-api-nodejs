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


export class PublicConstantFilter {
    'shouldAccept': boolean;
    'source'?: string;
    'filterType': PublicConstantFilterFilterTypeEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "shouldAccept",
            "baseName": "shouldAccept",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "source",
            "baseName": "source",
            "type": "string",
            "format": ""
        },
        {
            "name": "filterType",
            "baseName": "filterType",
            "type": "PublicConstantFilterFilterTypeEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicConstantFilter.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum PublicConstantFilterFilterTypeEnum {
    Constant = 'CONSTANT'
}

