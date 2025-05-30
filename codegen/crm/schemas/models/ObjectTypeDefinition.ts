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
* Defines an object type.
*/
export class ObjectTypeDefinition {
    /**
    * The names of secondary properties for this object. These will be displayed as secondary on the HubSpot record page for this object type.
    */
    'secondaryDisplayProperties'?: Array<string>;
    'objectTypeId'?: string;
    'description'?: string;
    'fullyQualifiedName'?: string;
    'labels': ObjectTypeDefinitionLabels;
    'archived'?: boolean;
    /**
    * When the object type was created.
    */
    'createdAt'?: Date;
    /**
    * The names of properties that should be **required** when creating an object of this type.
    */
    'requiredProperties': Array<string>;
    /**
    * Names of properties that will be indexed for this object type in by HubSpot\'s product search.
    */
    'searchableProperties'?: Array<string>;
    /**
    * The ID of the account that this object type is specific to.
    */
    'portalId'?: number;
    /**
    * The name of the primary property for this object. This will be displayed as primary on the HubSpot record page for this object type.
    */
    'primaryDisplayProperty'?: string;
    /**
    * A unique name for this object. For internal use only.
    */
    'name': string;
    /**
    * A unique ID for this object type. Will be defined as {meta-type}-{unique ID}.
    */
    'id': string;
    /**
    * When the object type was last updated.
    */
    'updatedAt'?: Date;

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
            "name": "objectTypeId",
            "baseName": "objectTypeId",
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
            "name": "fullyQualifiedName",
            "baseName": "fullyQualifiedName",
            "type": "string",
            "format": ""
        },
        {
            "name": "labels",
            "baseName": "labels",
            "type": "ObjectTypeDefinitionLabels",
            "format": ""
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
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
            "name": "portalId",
            "baseName": "portalId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "primaryDisplayProperty",
            "baseName": "primaryDisplayProperty",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return ObjectTypeDefinition.attributeTypeMap;
    }

    public constructor() {
    }
}
