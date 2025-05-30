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

import { MultiAssociatedObjectWithLabel } from '../models/MultiAssociatedObjectWithLabel';
import { Paging } from '../models/Paging';
import { PublicObjectId } from '../models/PublicObjectId';

export class PublicAssociationMultiWithLabel {
    '_from': PublicObjectId;
    'paging'?: Paging;
    'to': Array<MultiAssociatedObjectWithLabel>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "_from",
            "baseName": "from",
            "type": "PublicObjectId",
            "format": ""
        },
        {
            "name": "paging",
            "baseName": "paging",
            "type": "Paging",
            "format": ""
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "Array<MultiAssociatedObjectWithLabel>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicAssociationMultiWithLabel.attributeTypeMap;
    }

    public constructor() {
    }
}
