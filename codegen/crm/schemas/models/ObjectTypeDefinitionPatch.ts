/**
 * Schemas
 * The CRM uses schemas to define how custom objects should store and represent information in the HubSpot CRM. Schemas define details about an object\'s type, properties, and associations. The schema can be uniquely identified by its **object type ID**.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ObjectTypeDefinitionLabels } from '../models/ObjectTypeDefinitionLabels';

/**
* Defines attributes to update on an object type.
*/
export class ObjectTypeDefinitionPatch {
    /**
    * The names of secondary properties for this object. These will be displayed as secondary on the HubSpot record page for this object type.
    */
    'secondaryDisplayProperties'?: Array<string>;
    /**
    * The names of properties that should be **required** when creating an object of this type.
    */
    'requiredProperties'?: Array<string>;
    /**
    * Names of properties that will be indexed for this object type in by HubSpot\'s product search.
    */
    'searchableProperties'?: Array<string>;
    'clearDescription'?: boolean;
    /**
    * The name of the primary property for this object. This will be displayed as primary on the HubSpot record page for this object type.
    */
    'primaryDisplayProperty'?: string;
    'description'?: string;
    'restorable'?: boolean;
    'labels'?: ObjectTypeDefinitionLabels;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "secondaryDisplayProperties",
            "baseName": "secondaryDisplayProperties",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "requiredProperties",
            "baseName": "requiredProperties",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "searchableProperties",
            "baseName": "searchableProperties",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "clearDescription",
            "baseName": "clearDescription",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "primaryDisplayProperty",
            "baseName": "primaryDisplayProperty",
            "type": "string",
            "format": ""
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "restorable",
            "baseName": "restorable",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "ObjectTypeDefinitionLabels",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ObjectTypeDefinitionPatch.attributeTypeMap;
    }

    public constructor() {
    }
}
