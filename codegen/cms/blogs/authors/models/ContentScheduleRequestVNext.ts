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


/**
* Request body object for scheduling the publish of content
*/
export class ContentScheduleRequestVNext {
    /**
    * The ID of the object to be scheduled.
    */
    'id': string;
    /**
    * The date the object should transition from scheduled to published.
    */
    'publishDate': Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "publishDate",
            "baseName": "publishDate",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return ContentScheduleRequestVNext.attributeTypeMap;
    }

    public constructor() {
    }
}

