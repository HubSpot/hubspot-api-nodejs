/**
 * Associations
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PublicDefaultAssociationMultiPost } from '../models/PublicDefaultAssociationMultiPost';

export class BatchInputPublicDefaultAssociationMultiPost {
    'inputs': Array<PublicDefaultAssociationMultiPost>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<PublicDefaultAssociationMultiPost>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchInputPublicDefaultAssociationMultiPost.attributeTypeMap;
    }

    public constructor() {
    }
}
