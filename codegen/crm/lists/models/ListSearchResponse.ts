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

import { PublicObjectListSearchResult } from '../models/PublicObjectListSearchResult';

export class ListSearchResponse {
    /**
    * The total number of lists that match the search criteria.
    */
    'total': number;
    /**
    * Value to be passed in a future request to paginate through list search results.
    */
    'offset': number;
    /**
    * The lists that matched the search criteria.
    */
    'lists': Array<PublicObjectListSearchResult>;
    /**
    * Whether or not there are more results to page through.
    */
    'hasMore': boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "offset",
            "baseName": "offset",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "lists",
            "baseName": "lists",
            "type": "Array<PublicObjectListSearchResult>",
            "format": ""
        },
        {
            "name": "hasMore",
            "baseName": "hasMore",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListSearchResponse.attributeTypeMap;
    }

    public constructor() {
    }
}
