/**
 * Lists
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PublicPropertyAssociationFilterBranchFilterBranchesInner } from '../models/PublicPropertyAssociationFilterBranchFilterBranchesInner';

export class ListCreateRequest {
    /**
    * The object type ID of the type of objects that the list will store.
    */
    'objectTypeId': string;
    /**
    * The processing type of the list. One of: `SNAPSHOT`, `MANUAL`, or `DYNAMIC`.
    */
    'processingType': string;
    /**
    * The list of custom properties to tie to the list. Custom property name is the key, the value is the value.
    */
    'customProperties'?: { [key: string]: string; };
    /**
    * The ID of the folder that the list should be created in. If left blank, then the list will be created in the root of the list folder structure.
    */
    'listFolderId'?: number;
    /**
    * The name of the list, which must be globally unique across all public lists in the portal.
    */
    'name': string;
    'filterBranch'?: PublicPropertyAssociationFilterBranchFilterBranchesInner;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "objectTypeId",
            "baseName": "objectTypeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "processingType",
            "baseName": "processingType",
            "type": "string",
            "format": ""
        },
        {
            "name": "customProperties",
            "baseName": "customProperties",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "listFolderId",
            "baseName": "listFolderId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "filterBranch",
            "baseName": "filterBranch",
            "type": "PublicPropertyAssociationFilterBranchFilterBranchesInner",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListCreateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
