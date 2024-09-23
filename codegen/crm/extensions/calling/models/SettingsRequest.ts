/**
 * CRM Calling Extensions
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class SettingsRequest {
    /**
    * When true, you are indicating that your service is compatible with engagement v2 service and can be used with custom objects.
    */
    'supportsCustomObjects'?: boolean;
    /**
    * When true, your service will appear as an option under the *Call* action in contact records of connected accounts.
    */
    'isReady'?: boolean;
    /**
    * The name of your calling service to display to users.
    */
    'name': string;
    /**
    * The target width of the iframe that will contain your phone/calling UI.
    */
    'width'?: number;
    'supportsInboundCalling': boolean;
    /**
    * The URL to your phone/calling UI, built with the [Calling SDK](#).
    */
    'url': string;
    /**
    * The target height of the iframe that will contain your phone/calling UI.
    */
    'height'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "supportsCustomObjects",
            "baseName": "supportsCustomObjects",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isReady",
            "baseName": "isReady",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "width",
            "baseName": "width",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "supportsInboundCalling",
            "baseName": "supportsInboundCalling",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "height",
            "baseName": "height",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return SettingsRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

