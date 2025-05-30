/**
 * CRM Exports
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PublicCrmSearchRequest } from '../models/PublicCrmSearchRequest';

export class PublicExportViewRequest {
    'exportType': PublicExportViewRequestExportTypeEnum;
    'format': PublicExportViewRequestFormatEnum;
    'exportName': string;
    'objectProperties': Array<string>;
    'associatedObjectType'?: string;
    'objectType': string;
    'language': PublicExportViewRequestLanguageEnum;
    'exportInternalValuesOptions': Array<PublicExportViewRequestExportInternalValuesOptionsEnum>;
    'overrideAssociatedObjectsPerDefinitionPerRowLimit': boolean;
    'publicCrmSearchRequest'?: PublicCrmSearchRequest;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "exportType",
            "baseName": "exportType",
            "type": "PublicExportViewRequestExportTypeEnum",
            "format": ""
        },
        {
            "name": "format",
            "baseName": "format",
            "type": "PublicExportViewRequestFormatEnum",
            "format": ""
        },
        {
            "name": "exportName",
            "baseName": "exportName",
            "type": "string",
            "format": ""
        },
        {
            "name": "objectProperties",
            "baseName": "objectProperties",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "associatedObjectType",
            "baseName": "associatedObjectType",
            "type": "string",
            "format": ""
        },
        {
            "name": "objectType",
            "baseName": "objectType",
            "type": "string",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "PublicExportViewRequestLanguageEnum",
            "format": ""
        },
        {
            "name": "exportInternalValuesOptions",
            "baseName": "exportInternalValuesOptions",
            "type": "Array<PublicExportViewRequestExportInternalValuesOptionsEnum>",
            "format": ""
        },
        {
            "name": "overrideAssociatedObjectsPerDefinitionPerRowLimit",
            "baseName": "overrideAssociatedObjectsPerDefinitionPerRowLimit",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "publicCrmSearchRequest",
            "baseName": "publicCrmSearchRequest",
            "type": "PublicCrmSearchRequest",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicExportViewRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum PublicExportViewRequestExportTypeEnum {
    View = 'VIEW'
}
export enum PublicExportViewRequestFormatEnum {
    Xls = 'XLS',
    Xlsx = 'XLSX',
    Csv = 'CSV'
}
export enum PublicExportViewRequestLanguageEnum {
    En = 'EN',
    De = 'DE',
    Es = 'ES',
    Fr = 'FR',
    Ja = 'JA',
    Nl = 'NL',
    PtBr = 'PT_BR',
    It = 'IT',
    Pl = 'PL',
    Sv = 'SV',
    Fi = 'FI',
    ZhTw = 'ZH_TW',
    DaDk = 'DA_DK',
    No = 'NO'
}
export enum PublicExportViewRequestExportInternalValuesOptionsEnum {
    Names = 'NAMES',
    Values = 'VALUES'
}

