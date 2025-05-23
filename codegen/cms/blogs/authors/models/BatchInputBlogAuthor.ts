/**
 * Authors
 * Use these endpoints for interacting with Blog Posts, Blog Authors, and Blog Tags
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BlogAuthor } from '../models/BlogAuthor';

/**
* Wrapper for providing an array of blog authors as inputs.
*/
export class BatchInputBlogAuthor {
    /**
    * Blog authors to input.
    */
    'inputs': Array<BlogAuthor>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<BlogAuthor>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchInputBlogAuthor.attributeTypeMap;
    }

    public constructor() {
    }
}
