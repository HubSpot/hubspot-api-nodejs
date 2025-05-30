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


export class ImportFromUrlInput {
    /**
    * One of folderPath or folderId is required. Destination folder path for the uploaded file. If the folder path does not exist, there will be an attempt to create the folder path.
    */
    'folderPath'?: string;
    /**
    * PUBLIC_INDEXABLE: File is publicly accessible by anyone who has the URL. Search engines can index the file. PUBLIC_NOT_INDEXABLE: File is publicly accessible by anyone who has the URL. Search engines *can\'t* index the file. PRIVATE: File is NOT publicly accessible. Requires a signed URL to see content. Search engines *can\'t* index the file. 
    */
    'access': ImportFromUrlInputAccessEnum;
    /**
    * ENTIRE_PORTAL: Look for a duplicate file in the entire account. EXACT_FOLDER: Look for a duplicate file in the provided folder. 
    */
    'duplicateValidationScope'?: ImportFromUrlInputDuplicateValidationScopeEnum;
    /**
    * Name to give the resulting file in the file manager.
    */
    'name'?: string;
    /**
    * NONE: Do not run any duplicate validation. REJECT: Reject the upload if a duplicate is found. RETURN_EXISTING: If a duplicate file is found, do not upload a new file and return the found duplicate instead. 
    */
    'duplicateValidationStrategy'?: ImportFromUrlInputDuplicateValidationStrategyEnum;
    /**
    * Time to live. If specified the file will be deleted after the given time frame. If left unset, the file will exist indefinitely
    */
    'ttl'?: string;
    /**
    * If true, will overwrite existing file if one with the same name and extension exists in the given folder. The overwritten file will be deleted and the uploaded file will take its place with a new ID. If unset or set as false, the new file\'s name will be updated to prevent colliding with existing file if one exists with the same path, name, and extension
    */
    'overwrite'?: boolean;
    'expiresAt'?: Date;
    /**
    * URL to download the new file from.
    */
    'url': string;
    /**
    * One of folderId or folderPath is required. Destination folderId for the uploaded file.
    */
    'folderId'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "folderPath",
            "baseName": "folderPath",
            "type": "string",
            "format": ""
        },
        {
            "name": "access",
            "baseName": "access",
            "type": "ImportFromUrlInputAccessEnum",
            "format": ""
        },
        {
            "name": "duplicateValidationScope",
            "baseName": "duplicateValidationScope",
            "type": "ImportFromUrlInputDuplicateValidationScopeEnum",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "duplicateValidationStrategy",
            "baseName": "duplicateValidationStrategy",
            "type": "ImportFromUrlInputDuplicateValidationStrategyEnum",
            "format": ""
        },
        {
            "name": "ttl",
            "baseName": "ttl",
            "type": "string",
            "format": ""
        },
        {
            "name": "overwrite",
            "baseName": "overwrite",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "folderId",
            "baseName": "folderId",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ImportFromUrlInput.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum ImportFromUrlInputAccessEnum {
    PublicIndexable = 'PUBLIC_INDEXABLE',
    PublicNotIndexable = 'PUBLIC_NOT_INDEXABLE',
    HiddenIndexable = 'HIDDEN_INDEXABLE',
    HiddenNotIndexable = 'HIDDEN_NOT_INDEXABLE',
    HiddenPrivate = 'HIDDEN_PRIVATE',
    Private = 'PRIVATE',
    HiddenSensitive = 'HIDDEN_SENSITIVE',
    Sensitive = 'SENSITIVE'
}
export enum ImportFromUrlInputDuplicateValidationScopeEnum {
    EntirePortal = 'ENTIRE_PORTAL',
    ExactFolder = 'EXACT_FOLDER'
}
export enum ImportFromUrlInputDuplicateValidationStrategyEnum {
    None = 'NONE',
    Reject = 'REJECT',
    ReturnExisting = 'RETURN_EXISTING'
}

