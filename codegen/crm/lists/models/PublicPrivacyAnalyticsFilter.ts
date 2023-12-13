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


export class PublicPrivacyAnalyticsFilter {
    'filterType': PublicPrivacyAnalyticsFilterFilterTypeEnum;
    'privacyName': string;
    'operator': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "filterType",
            "baseName": "filterType",
            "type": "PublicPrivacyAnalyticsFilterFilterTypeEnum",
            "format": ""
        },
        {
            "name": "privacyName",
            "baseName": "privacyName",
            "type": "string",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicPrivacyAnalyticsFilter.attributeTypeMap;
    }

    public constructor() {
    }
}


export type PublicPrivacyAnalyticsFilterFilterTypeEnum = "PRIVACY" ;
