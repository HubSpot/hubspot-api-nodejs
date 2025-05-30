/**
 * Public App Crm Cards
 * Allows an app to extend the CRM UI by surfacing custom cards in the sidebar of record pages. These cards are defined up-front as part of app configuration, then populated by external data fetch requests when the record page is accessed by a user.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class CardObjectTypeBody {
    /**
    * A CRM object type where this card should be displayed.
    */
    'name': CardObjectTypeBodyNameEnum;
    /**
    * An array of properties that should be sent to this card\'s target URL when the data fetch request is made. Must be valid properties for the corresponding CRM object type.
    */
    'propertiesToSend': Array<string>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "CardObjectTypeBodyNameEnum",
            "format": ""
        },
        {
            "name": "propertiesToSend",
            "baseName": "propertiesToSend",
            "type": "Array<string>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CardObjectTypeBody.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum CardObjectTypeBodyNameEnum {
    Contacts = 'contacts',
    Deals = 'deals',
    Companies = 'companies',
    Tickets = 'tickets',
    MarketingEvents = 'marketing_events'
}

