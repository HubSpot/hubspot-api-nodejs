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


export class PublicPropertyReferencedTime {
    'timezoneSource'?: string;
    'property': string;
    'timeType': PublicPropertyReferencedTimeTimeTypeEnum;
    'zoneId': string;
    'referenceType': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "timezoneSource",
            "baseName": "timezoneSource",
            "type": "string",
            "format": ""
        },
        {
            "name": "property",
            "baseName": "property",
            "type": "string",
            "format": ""
        },
        {
            "name": "timeType",
            "baseName": "timeType",
            "type": "PublicPropertyReferencedTimeTimeTypeEnum",
            "format": ""
        },
        {
            "name": "zoneId",
            "baseName": "zoneId",
            "type": "string",
            "format": ""
        },
        {
            "name": "referenceType",
            "baseName": "referenceType",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicPropertyReferencedTime.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum PublicPropertyReferencedTimeTimeTypeEnum {
    PropertyReferenced = 'PROPERTY_REFERENCED'
}

