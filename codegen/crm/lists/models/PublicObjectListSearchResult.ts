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


export class PublicObjectListSearchResult {
    /**
    * The processing type of the list.
    */
    'processingType': string;
    /**
    * The object type of the list.
    */
    'objectTypeId': string;
    /**
    * The ID of the user that last updated the list.
    */
    'updatedById'?: string;
    /**
    * The time when the filters for this list were last updated.
    */
    'filtersUpdatedAt'?: Date;
    /**
    * The **ILS ID** of the list.
    */
    'listId': string;
    /**
    * The time when the list was created.
    */
    'createdAt'?: Date;
    /**
    * The processing status of the list.
    */
    'processingStatus': string;
    /**
    * The time when the list was deleted.
    */
    'deletedAt'?: Date;
    /**
    * The version of the list.
    */
    'listVersion': number;
    /**
    * The name of the list.
    */
    'name': string;
    /**
    * The name and value of any additional properties that exist for this list and that were included in the search request.
    */
    'additionalProperties': { [key: string]: string; };
    /**
    * The ID of the user that created the list.
    */
    'createdById'?: string;
    /**
    * The time the list was last updated.
    */
    'updatedAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "processingType",
            "baseName": "processingType",
            "type": "string",
            "format": ""
        },
        {
            "name": "objectTypeId",
            "baseName": "objectTypeId",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedById",
            "baseName": "updatedById",
            "type": "string",
            "format": ""
        },
        {
            "name": "filtersUpdatedAt",
            "baseName": "filtersUpdatedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "listId",
            "baseName": "listId",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "processingStatus",
            "baseName": "processingStatus",
            "type": "string",
            "format": ""
        },
        {
            "name": "deletedAt",
            "baseName": "deletedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "listVersion",
            "baseName": "listVersion",
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
            "name": "additionalProperties",
            "baseName": "additionalProperties",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "createdById",
            "baseName": "createdById",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return PublicObjectListSearchResult.attributeTypeMap;
    }

    public constructor() {
    }
}
