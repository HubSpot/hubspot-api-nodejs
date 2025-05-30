/**
 * Marketing Emails
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* Data structure representing lists of IDs that should be included and excluded.
*/
export class PublicEmailRecipients {
    /**
    * Included IDs.
    */
    'include'?: Array<string>;
    /**
    * Excluded IDs.
    */
    'exclude'?: Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "include",
            "baseName": "include",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "exclude",
            "baseName": "exclude",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicEmailRecipients.attributeTypeMap;
    }

    public constructor() {
    }
}
