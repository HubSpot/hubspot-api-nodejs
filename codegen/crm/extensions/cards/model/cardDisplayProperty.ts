/**
 * CRM cards
 * Allows an app to extend the CRM UI by surfacing custom cards in the sidebar of record pages. These cards are defined up-front as part of app configuration, then populated by external data fetch requests when the record page is accessed by a user.
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from '../api';
import { DisplayOption } from './displayOption';

/**
* Definition for a card display property.
*/
export class CardDisplayProperty {
    /**
    * An internal identifier for this property. This value must be unique TODO.
    */
    'name': string;
    /**
    * The label for this property as you\'d like it displayed to users.
    */
    'label': string;
    /**
    * Type of data represented by this property.
    */
    'dataType': CardDisplayProperty.DataTypeEnum;
    /**
    * An array of available options that can be displayed. Only used in when `dataType` is `STATUS`.
    */
    'options': Array<DisplayOption>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "label",
            "baseName": "label",
            "type": "string"
        },
        {
            "name": "dataType",
            "baseName": "dataType",
            "type": "CardDisplayProperty.DataTypeEnum"
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "Array<DisplayOption>"
        }    ];

    static getAttributeTypeMap() {
        return CardDisplayProperty.attributeTypeMap;
    }
}

export namespace CardDisplayProperty {
    export enum DataTypeEnum {
        BOOLEAN = <any> 'BOOLEAN',
        CURRENCY = <any> 'CURRENCY',
        DATE = <any> 'DATE',
        DATETIME = <any> 'DATETIME',
        EMAIL = <any> 'EMAIL',
        LINK = <any> 'LINK',
        NUMERIC = <any> 'NUMERIC',
        STRING = <any> 'STRING',
        STATUS = <any> 'STATUS'
    }
}
