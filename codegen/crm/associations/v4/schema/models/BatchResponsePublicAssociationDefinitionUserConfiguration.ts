/**
 * CRM Associations Schema
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PublicAssociationDefinitionUserConfiguration } from '../models/PublicAssociationDefinitionUserConfiguration';

export class BatchResponsePublicAssociationDefinitionUserConfiguration {
    'completedAt': Date;
    'requestedAt'?: Date;
    'startedAt': Date;
    'links'?: { [key: string]: string; };
    'results': Array<PublicAssociationDefinitionUserConfiguration>;
    'status': BatchResponsePublicAssociationDefinitionUserConfigurationStatusEnum;

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
            "name": "results",
            "baseName": "results",
            "type": "Array<PublicAssociationDefinitionUserConfiguration>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "BatchResponsePublicAssociationDefinitionUserConfigurationStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchResponsePublicAssociationDefinitionUserConfiguration.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum BatchResponsePublicAssociationDefinitionUserConfigurationStatusEnum {
    Pending = 'PENDING',
    Processing = 'PROCESSING',
    Canceled = 'CANCELED',
    Complete = 'COMPLETE'
}

