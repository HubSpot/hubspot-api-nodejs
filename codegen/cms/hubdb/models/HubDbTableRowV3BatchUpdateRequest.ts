/**
 * Hubdb
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class HubDbTableRowV3BatchUpdateRequest {
    /**
    * Specifies the value for `hs_path` column, which will be used as slug in the dynamic pages
    */
    'path'?: string;
    /**
    * Specifies the value for the column child table id
    */
    'childTableId'?: number;
    /**
    * List of key value pairs with the column name and column value
    */
    'values': { [key: string]: any; };
    /**
    * Specifies the value for `hs_name` column, which will be used as title in the dynamic pages
    */
    'name'?: string;
    /**
    * The id of the table row
    */
    'id': string;
    'displayIndex'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "childTableId",
            "baseName": "childTableId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "{ [key: string]: any; }",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "displayIndex",
            "baseName": "displayIndex",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return HubDbTableRowV3BatchUpdateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
