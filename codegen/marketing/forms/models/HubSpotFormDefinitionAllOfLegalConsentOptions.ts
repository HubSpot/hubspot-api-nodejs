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

import { LegalConsentOptionsExplicitConsentToProcess } from '../models/LegalConsentOptionsExplicitConsentToProcess';
import { LegalConsentOptionsImplicitConsentToProcess } from '../models/LegalConsentOptionsImplicitConsentToProcess';
import { LegalConsentOptionsLegitimateInterest } from '../models/LegalConsentOptionsLegitimateInterest';
import { LegalConsentOptionsNone } from '../models/LegalConsentOptionsNone';

/**
 * @type HubSpotFormDefinitionAllOfLegalConsentOptions
 * Type
 * @export
 */
export type HubSpotFormDefinitionAllOfLegalConsentOptions = LegalConsentOptionsExplicitConsentToProcess | LegalConsentOptionsImplicitConsentToProcess | LegalConsentOptionsLegitimateInterest | LegalConsentOptionsNone;

/**
* @type HubSpotFormDefinitionAllOfLegalConsentOptionsClass
* @export
*/
export class HubSpotFormDefinitionAllOfLegalConsentOptionsClass {
    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;
}



