/**
 * Schemas
 * The CRM uses schemas to define how custom objects should store and represent information in the HubSpot CRM. Schemas define details about an object\'s type, properties, and associations. The schema can be uniquely identified by its **object type ID**.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class PropertyModificationMetadata {
    'archivable': boolean;
    'readOnlyDefinition': boolean;
    'readOnlyOptions'?: boolean;
    'readOnlyValue': boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "archivable",
            "baseName": "archivable",
            "type": "boolean"
        },
        {
            "name": "readOnlyDefinition",
            "baseName": "readOnlyDefinition",
            "type": "boolean"
        },
        {
            "name": "readOnlyOptions",
            "baseName": "readOnlyOptions",
            "type": "boolean"
        },
        {
            "name": "readOnlyValue",
            "baseName": "readOnlyValue",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return PropertyModificationMetadata.attributeTypeMap;
    }
}

