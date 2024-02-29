/**
 * Calls
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PublicAssociationsForObject } from '../models/PublicAssociationsForObject';

export class SimplePublicObjectInputForCreate {
    'associations': Array<PublicAssociationsForObject>;
    'properties': { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "associations",
            "baseName": "associations",
            "type": "Array<PublicAssociationsForObject>",
            "format": ""
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SimplePublicObjectInputForCreate.attributeTypeMap;
    }

    public constructor() {
    }
}
