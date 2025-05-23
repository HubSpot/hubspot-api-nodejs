/**
 * Files
 * Upload and manage files.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* Object for creating a folder.
*/
export class FolderInput {
    /**
    * FolderId of the parent of the created folder. If not specified, the folder will be created at the root level. parentFolderId and parentFolderPath cannot be set at the same time.
    */
    'parentFolderId'?: string;
    /**
    * Path of the parent of the created folder. If not specified the folder will be created at the root level. parentFolderPath and parentFolderId cannot be set at the same time.
    */
    'parentPath'?: string;
    /**
    * Desired name for the folder.
    */
    'name': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "parentFolderId",
            "baseName": "parentFolderId",
            "type": "string",
            "format": ""
        },
        {
            "name": "parentPath",
            "baseName": "parentPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FolderInput.attributeTypeMap;
    }

    public constructor() {
    }
}
