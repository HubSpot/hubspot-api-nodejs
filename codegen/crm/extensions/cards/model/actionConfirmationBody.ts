/**
 * CRM cards
 * Allows an app to extend the CRM UI by surfacing custom cards in the sidebar of record pages. These cards are defined up-front as part of app configuration, then populated by external data fetch requests when the record page is accessed by a user.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class ActionConfirmationBody {
    'prompt': string;
    'confirmButtonLabel': string;
    'cancelButtonLabel': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "prompt",
            "baseName": "prompt",
            "type": "string"
        },
        {
            "name": "confirmButtonLabel",
            "baseName": "confirmButtonLabel",
            "type": "string"
        },
        {
            "name": "cancelButtonLabel",
            "baseName": "cancelButtonLabel",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ActionConfirmationBody.attributeTypeMap;
    }
}

