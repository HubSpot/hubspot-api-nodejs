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

import { LegalConsentCheckbox } from '../models/LegalConsentCheckbox';

export class LegalConsentOptionsExplicitConsentToProcess {
    /**
    * 
    */
    'communicationsCheckboxes': Array<LegalConsentCheckbox>;
    /**
    * 
    */
    'communicationConsentText'?: string;
    /**
    * 
    */
    'consentToProcessCheckboxLabel'?: string;
    /**
    * 
    */
    'consentToProcessFooterText'?: string;
    /**
    * 
    */
    'type': LegalConsentOptionsExplicitConsentToProcessTypeEnum;
    /**
    * 
    */
    'privacyText': string;
    /**
    * 
    */
    'consentToProcessText'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "communicationsCheckboxes",
            "baseName": "communicationsCheckboxes",
            "type": "Array<LegalConsentCheckbox>",
            "format": ""
        },
        {
            "name": "communicationConsentText",
            "baseName": "communicationConsentText",
            "type": "string",
            "format": ""
        },
        {
            "name": "consentToProcessCheckboxLabel",
            "baseName": "consentToProcessCheckboxLabel",
            "type": "string",
            "format": ""
        },
        {
            "name": "consentToProcessFooterText",
            "baseName": "consentToProcessFooterText",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "LegalConsentOptionsExplicitConsentToProcessTypeEnum",
            "format": ""
        },
        {
            "name": "privacyText",
            "baseName": "privacyText",
            "type": "string",
            "format": ""
        },
        {
            "name": "consentToProcessText",
            "baseName": "consentToProcessText",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LegalConsentOptionsExplicitConsentToProcess.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum LegalConsentOptionsExplicitConsentToProcessTypeEnum {
    ExplicitConsentToProcess = 'explicit_consent_to_process'
}

