/**
 * Marketing Events
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ParticipationAssociations } from '../models/ParticipationAssociations';
import { ParticipationProperties } from '../models/ParticipationProperties';

export class ParticipationBreakdown {
    'associations': ParticipationAssociations;
    'createdAt': Date;
    'id': string;
    'properties': ParticipationProperties;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "associations",
            "baseName": "associations",
            "type": "ParticipationAssociations",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "properties",
            "baseName": "properties",
            "type": "ParticipationProperties",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ParticipationBreakdown.attributeTypeMap;
    }

    public constructor() {
    }
}
