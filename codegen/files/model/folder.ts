/**
 * Files
 * Upload and manage files.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class Folder {
    /**
    * Id of the folder.
    */
    'id': string;
    /**
    * Timestamp of folder creation.
    */
    'createdAt': Date;
    /**
    * Timestamp of folder deletion.
    */
    'archivedAt'?: Date;
    /**
    * Timestamp of the latest update to the folder.
    */
    'updatedAt': Date;
    /**
    * Marks weather the folder is deleted or not.
    */
    'archived': boolean;
    /**
    * Id of the parent folder.
    */
    'parentFolderId'?: string;
    /**
    * Name of the folder.
    */
    'name'?: string;
    /**
    * Path of the folder in the file manager.
    */
    'path'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "archivedAt",
            "baseName": "archivedAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean"
        },
        {
            "name": "parentFolderId",
            "baseName": "parentFolderId",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Folder.attributeTypeMap;
    }
}

