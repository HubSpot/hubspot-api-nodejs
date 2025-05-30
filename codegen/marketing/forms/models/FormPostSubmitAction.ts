/**
 * Forms
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
* What should happen after the customer submits the form.
*/
export class FormPostSubmitAction {
    /**
    * The action to take after submit. The default action is displaying a thank you message.
    */
    'type': FormPostSubmitActionTypeEnum;
    /**
    * The thank you text or the page to redirect to.
    */
    'value': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "FormPostSubmitActionTypeEnum",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FormPostSubmitAction.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum FormPostSubmitActionTypeEnum {
    ThankYou = 'thank_you',
    RedirectUrl = 'redirect_url'
}

