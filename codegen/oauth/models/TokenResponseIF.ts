/**
 * Auth Oauth
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class TokenResponseIF {
    /**
    * 
    */
    'accessToken': string;
    /**
    * 
    */
    'refreshToken': string;
    /**
    * 
    */
    'idToken'?: string;
    /**
    * 
    */
    'tokenType': string;
    /**
    * 
    */
    'expiresIn': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accessToken",
            "baseName": "access_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "refreshToken",
            "baseName": "refresh_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "idToken",
            "baseName": "id_token",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokenType",
            "baseName": "token_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "expiresIn",
            "baseName": "expires_in",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return TokenResponseIF.attributeTypeMap;
    }

    public constructor() {
    }
}

