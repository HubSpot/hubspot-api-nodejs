/**
 * Lists
 * CRUD operations to manage lists and list memberships
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PublicObjectList } from '../models/PublicObjectList';

/**
* The response for a list create request.
*/
export class ListCreateResponse {
    'list': PublicObjectList;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "list",
            "baseName": "list",
            "type": "PublicObjectList",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ListCreateResponse.attributeTypeMap;
    }

    public constructor() {
    }
}

