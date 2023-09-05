/**
 * Blog Post endpoints
 * Use these endpoints for interacting with Blog Posts, Blog Authors, and Blog Tags
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Tag } from '../models/Tag';

/**
* Response object for batch operations on blog tags.
*/
export class BatchResponseTag {
    /**
    * Status of batch operation.
    */
    'status': BatchResponseTagStatusEnum;
    /**
    * Results of batch operation.
    */
    'results': Array<Tag>;
    /**
    * Time of batch operation request.
    */
    'requestedAt'?: Date;
    /**
    * Time of batch operation start.
    */
    'startedAt': Date;
    /**
    * Time of batch operation completion.
    */
    'completedAt': Date;
    /**
    * Links associated with batch operation.
    */
    'links'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "BatchResponseTagStatusEnum",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<Tag>",
            "format": ""
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
            "name": "completedAt",
            "baseName": "completedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchResponseTag.attributeTypeMap;
    }

    public constructor() {
    }
}


export type BatchResponseTagStatusEnum = "PENDING" | "PROCESSING" | "CANCELED" | "COMPLETE" ;

