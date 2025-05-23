/**
 * Properties
 * All HubSpot objects store data in default and custom properties. These endpoints provide access to read and modify object properties in HubSpot.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Property } from '../models/Property';

export class CollectionResponsePropertyNoPaging {
    'results': Array<Property>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<Property>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponsePropertyNoPaging.attributeTypeMap;
    }

    public constructor() {
    }
}
