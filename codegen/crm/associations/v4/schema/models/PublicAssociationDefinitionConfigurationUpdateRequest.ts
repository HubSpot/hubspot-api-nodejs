/**
 * CRM Associations Schema
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class PublicAssociationDefinitionConfigurationUpdateRequest {
    'typeId': number;
    'category': PublicAssociationDefinitionConfigurationUpdateRequestCategoryEnum;
    'maxToObjectIds': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "typeId",
            "baseName": "typeId",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "PublicAssociationDefinitionConfigurationUpdateRequestCategoryEnum",
            "format": ""
        },
        {
            "name": "maxToObjectIds",
            "baseName": "maxToObjectIds",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return PublicAssociationDefinitionConfigurationUpdateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PublicAssociationDefinitionConfigurationUpdateRequestCategoryEnum {
    HubspotDefined = 'HUBSPOT_DEFINED',
    UserDefined = 'USER_DEFINED',
    IntegratorDefined = 'INTEGRATOR_DEFINED'
}

