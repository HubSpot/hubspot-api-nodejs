/**
 * CMS Source Code
 * Endpoints for interacting with files in the CMS Developer File System. These files include HTML templates, CSS, JS, modules, and other assets which are used to create CMS content.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class ActionResponse {
    'completedAt': Date;
    'requestedAt'?: Date;
    'startedAt': Date;
    'links'?: { [key: string]: string; };
    'status': ActionResponseStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "completedAt",
            "baseName": "completedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "requestedAt",
            "baseName": "requestedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "ActionResponseStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ActionResponse.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ActionResponseStatusEnum {
    Pending = 'PENDING',
    Processing = 'PROCESSING',
    Canceled = 'CANCELED',
    Complete = 'COMPLETE'
}
