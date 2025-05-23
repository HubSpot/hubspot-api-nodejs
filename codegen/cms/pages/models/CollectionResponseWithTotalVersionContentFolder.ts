/**
 * Pages
 * Use these endpoints for interacting with Landing Pages and Site Pages
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Paging } from '../models/Paging';
import { VersionContentFolder } from '../models/VersionContentFolder';

/**
* Response object for collections of content folder versions with pagination information.
*/
export class CollectionResponseWithTotalVersionContentFolder {
    /**
    * Total number of content folder versions.
    */
    'total': number;
    'paging'?: Paging;
    /**
    * Collection of content folder versions.
    */
    'results': Array<VersionContentFolder>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "paging",
            "baseName": "paging",
            "type": "Paging",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<VersionContentFolder>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponseWithTotalVersionContentFolder.attributeTypeMap;
    }

    public constructor() {
    }
}
