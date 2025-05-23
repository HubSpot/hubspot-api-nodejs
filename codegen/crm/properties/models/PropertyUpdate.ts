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

import { OptionInput } from '../models/OptionInput';

export class PropertyUpdate {
    /**
    * The name of the property group the property belongs to.
    */
    'groupName'?: string;
    /**
    * If true, the property won\'t be visible and can\'t be used in HubSpot.
    */
    'hidden'?: boolean;
    /**
    * A list of valid options for the property.
    */
    'options'?: Array<OptionInput>;
    /**
    * Properties are displayed in order starting with the lowest positive integer value. Values of -1 will cause the Property to be displayed after any positive values.
    */
    'displayOrder'?: number;
    /**
    * A description of the property that will be shown as help text in HubSpot.
    */
    'description'?: string;
    /**
    * Represents a formula that is used to compute a calculated property.
    */
    'calculationFormula'?: string;
    /**
    * A human-readable property label that will be shown in HubSpot.
    */
    'label'?: string;
    /**
    * The data type of the property.
    */
    'type'?: PropertyUpdateTypeEnum;
    /**
    * Controls how the property appears in HubSpot.
    */
    'fieldType'?: PropertyUpdateFieldTypeEnum;
    /**
    * Whether or not the property can be used in a HubSpot form.
    */
    'formField'?: boolean;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "groupName",
            "baseName": "groupName",
            "type": "string",
            "format": ""
        },
        {
            "name": "hidden",
            "baseName": "hidden",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<OptionInput>",
            "format": ""
        },
        {
            "name": "displayOrder",
            "baseName": "displayOrder",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "calculationFormula",
            "baseName": "calculationFormula",
            "type": "string",
            "format": ""
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "PropertyUpdateTypeEnum",
            "format": ""
        },
        {
            "name": "fieldType",
            "baseName": "fieldType",
            "type": "PropertyUpdateFieldTypeEnum",
            "format": ""
        },
        {
            "name": "formField",
            "baseName": "formField",
            "type": "boolean",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PropertyUpdate.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum PropertyUpdateTypeEnum {
    String = 'string',
    Number = 'number',
    Date = 'date',
    Datetime = 'datetime',
    Enumeration = 'enumeration',
    Bool = 'bool'
}
export enum PropertyUpdateFieldTypeEnum {
    Textarea = 'textarea',
    Text = 'text',
    Date = 'date',
    File = 'file',
    Number = 'number',
    Select = 'select',
    Radio = 'radio',
    Checkbox = 'checkbox',
    Booleancheckbox = 'booleancheckbox',
    CalculationEquation = 'calculation_equation'
}

