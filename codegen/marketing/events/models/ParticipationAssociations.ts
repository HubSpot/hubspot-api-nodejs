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

import { ContactAssociation } from '../models/ContactAssociation';
import { MarketingEventAssociation } from '../models/MarketingEventAssociation';

export class ParticipationAssociations {
    'marketingEvent': MarketingEventAssociation;
    'contact': ContactAssociation;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "marketingEvent",
            "baseName": "marketingEvent",
            "type": "MarketingEventAssociation",
            "format": ""
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "ContactAssociation",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ParticipationAssociations.attributeTypeMap;
    }

    public constructor() {
    }
}
