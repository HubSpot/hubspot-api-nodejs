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


export class MembershipChangeRequest {
    /**
    * 
    */
    'recordIdsToRemove': Array<string>;
    /**
    * 
    */
    'recordIdsToAdd': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "recordIdsToRemove",
            "baseName": "recordIdsToRemove",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "recordIdsToAdd",
            "baseName": "recordIdsToAdd",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MembershipChangeRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

