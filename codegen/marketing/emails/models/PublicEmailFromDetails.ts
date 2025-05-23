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
* Data structure representing the from fields on the email.
*/
export class PublicEmailFromDetails {
    /**
    * The reply to recipients will see.
    */
    'customReplyTo'?: string;
    /**
    * The name recipients will see.
    */
    'fromName'?: string;
    /**
    * The from address and reply to email address (if no customReplyTo defined) recipients will see.
    */
    'replyTo'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "customReplyTo",
            "baseName": "customReplyTo",
            "type": "string",
            "format": ""
        },
        {
            "name": "fromName",
            "baseName": "fromName",
            "type": "string",
            "format": ""
        },
        {
            "name": "replyTo",
            "baseName": "replyTo",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicEmailFromDetails.attributeTypeMap;
    }

    public constructor() {
    }
}
