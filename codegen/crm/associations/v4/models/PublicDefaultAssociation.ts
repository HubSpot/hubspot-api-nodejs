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

import { AssociationSpec } from '../models/AssociationSpec';
import { PublicObjectId } from '../models/PublicObjectId';

export class PublicDefaultAssociation {
    'associationSpec': AssociationSpec;
    '_from': PublicObjectId;
    'to': PublicObjectId;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "associationSpec",
            "baseName": "associationSpec",
            "type": "AssociationSpec",
            "format": ""
        },
        {
            "name": "_from",
            "baseName": "from",
            "type": "PublicObjectId",
            "format": ""
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "PublicObjectId",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicDefaultAssociation.attributeTypeMap;
    }

    public constructor() {
    }
}
