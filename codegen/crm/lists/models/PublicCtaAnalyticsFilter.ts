/**
 * Lists
 * CRUD operations to manage lists and list memberships
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PublicEventAnalyticsFilterCoalescingRefineBy } from '../models/PublicEventAnalyticsFilterCoalescingRefineBy';

export class PublicCtaAnalyticsFilter {
    'filterType': PublicCtaAnalyticsFilterFilterTypeEnum;
    'coalescingRefineBy'?: PublicEventAnalyticsFilterCoalescingRefineBy;
    'pruningRefineBy'?: PublicEventAnalyticsFilterCoalescingRefineBy;
    'operator': string;
    'ctaName': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "filterType",
            "baseName": "filterType",
            "type": "PublicCtaAnalyticsFilterFilterTypeEnum",
            "format": ""
        },
        {
            "name": "coalescingRefineBy",
            "baseName": "coalescingRefineBy",
            "type": "PublicEventAnalyticsFilterCoalescingRefineBy",
            "format": ""
        },
        {
            "name": "pruningRefineBy",
            "baseName": "pruningRefineBy",
            "type": "PublicEventAnalyticsFilterCoalescingRefineBy",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "string",
            "format": ""
        },
        {
            "name": "ctaName",
            "baseName": "ctaName",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicCtaAnalyticsFilter.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PublicCtaAnalyticsFilterFilterTypeEnum {
    Cta = 'CTA'
}

