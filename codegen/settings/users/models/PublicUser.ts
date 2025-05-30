/**
 * User Provisioning
 * Add, manage, and remove users from your account
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* A user
*/
export class PublicUser {
    'firstName'?: string;
    'lastName'?: string;
    /**
    * The user\'s primary team
    */
    'primaryTeamId'?: string;
    'roleIds'?: Array<string>;
    'sendWelcomeEmail'?: boolean;
    /**
    * The user\'s role
    */
    'roleId'?: string;
    /**
    * The user\'s additional teams
    */
    'secondaryTeamIds'?: Array<string>;
    /**
    * The user\'s unique ID
    */
    'id': string;
    'superAdmin'?: boolean;
    /**
    * The user\'s email
    */
    'email': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string",
            "format": ""
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string",
            "format": ""
        },
        {
            "name": "primaryTeamId",
            "baseName": "primaryTeamId",
            "type": "string",
            "format": ""
        },
        {
            "name": "roleIds",
            "baseName": "roleIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "sendWelcomeEmail",
            "baseName": "sendWelcomeEmail",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "roleId",
            "baseName": "roleId",
            "type": "string",
            "format": ""
        },
        {
            "name": "secondaryTeamIds",
            "baseName": "secondaryTeamIds",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "superAdmin",
            "baseName": "superAdmin",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicUser.attributeTypeMap;
    }

    public constructor() {
    }
}
