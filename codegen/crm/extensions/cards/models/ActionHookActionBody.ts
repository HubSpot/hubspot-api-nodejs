/**
 * Public App Crm Cards
 * Allows an app to extend the CRM UI by surfacing custom cards in the sidebar of record pages. These cards are defined up-front as part of app configuration, then populated by external data fetch requests when the record page is accessed by a user.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ActionConfirmationBody } from '../models/ActionConfirmationBody';

export class ActionHookActionBody {
    'propertyNamesIncluded': Array<string>;
    'confirmation'?: ActionConfirmationBody;
    'label'?: string;
    'type': ActionHookActionBodyTypeEnum;
    'httpMethod': ActionHookActionBodyHttpMethodEnum;
    'url': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "propertyNamesIncluded",
            "baseName": "propertyNamesIncluded",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "confirmation",
            "baseName": "confirmation",
            "type": "ActionConfirmationBody",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "ActionHookActionBodyTypeEnum",
            "format": ""
        },
        {
            "name": "httpMethod",
            "baseName": "httpMethod",
            "type": "ActionHookActionBodyHttpMethodEnum",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ActionHookActionBody.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ActionHookActionBodyTypeEnum {
    ActionHook = 'ACTION_HOOK'
}
export enum ActionHookActionBodyHttpMethodEnum {
    Connect = 'CONNECT',
    Delete = 'DELETE',
    Get = 'GET',
    Head = 'HEAD',
    Options = 'OPTIONS',
    Patch = 'PATCH',
    Post = 'POST',
    Put = 'PUT',
    Trace = 'TRACE'
}

