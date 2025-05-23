/**
 * Lists
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PublicFormSubmissionFilterCoalescingRefineBy } from '../models/PublicFormSubmissionFilterCoalescingRefineBy';

export class PublicFormSubmissionFilter {
    'formId'?: string;
    'coalescingRefineBy'?: PublicFormSubmissionFilterCoalescingRefineBy;
    'pruningRefineBy'?: PublicFormSubmissionFilterCoalescingRefineBy;
    'filterType': PublicFormSubmissionFilterFilterTypeEnum;
    'operator': PublicFormSubmissionFilterOperatorEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "formId",
            "baseName": "formId",
            "type": "string",
            "format": ""
        },
        {
            "name": "coalescingRefineBy",
            "baseName": "coalescingRefineBy",
            "type": "PublicFormSubmissionFilterCoalescingRefineBy",
            "format": ""
        },
        {
            "name": "pruningRefineBy",
            "baseName": "pruningRefineBy",
            "type": "PublicFormSubmissionFilterCoalescingRefineBy",
            "format": ""
        },
        {
            "name": "filterType",
            "baseName": "filterType",
            "type": "PublicFormSubmissionFilterFilterTypeEnum",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "PublicFormSubmissionFilterOperatorEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicFormSubmissionFilter.attributeTypeMap;
    }

    public constructor() {
    }
}

export enum PublicFormSubmissionFilterFilterTypeEnum {
    FormSubmission = 'FORM_SUBMISSION'
}
export enum PublicFormSubmissionFilterOperatorEnum {
    FilledOut = 'FILLED_OUT',
    NotFilledOut = 'NOT_FILLED_OUT'
}

