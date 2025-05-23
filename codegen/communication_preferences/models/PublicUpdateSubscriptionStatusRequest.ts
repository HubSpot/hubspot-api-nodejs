/**
 * Subscriptions
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class PublicUpdateSubscriptionStatusRequest {
    /**
    * Contact\'s email address.
    */
    'emailAddress': string;
    /**
    * Legal basis for updating the contact\'s status (required for GDPR enabled portals).
    */
    'legalBasis'?: PublicUpdateSubscriptionStatusRequestLegalBasisEnum;
    /**
    * ID of the subscription being updated for the contact.
    */
    'subscriptionId': string;
    /**
    * A more detailed explanation to go with the legal basis (required for GDPR enabled portals).
    */
    'legalBasisExplanation'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "emailAddress",
            "baseName": "emailAddress",
            "type": "string",
            "format": ""
        },
        {
            "name": "legalBasis",
            "baseName": "legalBasis",
            "type": "PublicUpdateSubscriptionStatusRequestLegalBasisEnum",
            "format": ""
        },
        {
            "name": "subscriptionId",
            "baseName": "subscriptionId",
            "type": "string",
            "format": ""
        },
        {
            "name": "legalBasisExplanation",
            "baseName": "legalBasisExplanation",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicUpdateSubscriptionStatusRequest.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum PublicUpdateSubscriptionStatusRequestLegalBasisEnum {
    LegitimateInterestPql = 'LEGITIMATE_INTEREST_PQL',
    LegitimateInterestClient = 'LEGITIMATE_INTEREST_CLIENT',
    PerformanceOfContract = 'PERFORMANCE_OF_CONTRACT',
    ConsentWithNotice = 'CONSENT_WITH_NOTICE',
    NonGdpr = 'NON_GDPR',
    ProcessAndStore = 'PROCESS_AND_STORE',
    LegitimateInterestOther = 'LEGITIMATE_INTEREST_OTHER'
}

