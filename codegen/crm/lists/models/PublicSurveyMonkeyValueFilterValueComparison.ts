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

import { PublicTimePointOperationTimePoint } from '../models/PublicTimePointOperationTimePoint';

export class PublicSurveyMonkeyValueFilterValueComparison {
    'includeObjectsWithNoValueSet': boolean;
    'operationType': string;
    'value': string;
    'operator': string;
    'requiresTimeZoneConversion': boolean;
    'timestamp': number;
    'upperBound': number;
    'lowerBound': number;
    'defaultComparisonValue'?: string;
    'comparisonPropertyName': string;
    'numberOfDays': number;
    'values': Array<string>;
    'month': string;
    'year': number;
    'day': number;
    'useFiscalYear'?: boolean;
    'fiscalYearStart'?: PublicSurveyMonkeyValueFilterValueComparisonFiscalYearStartEnum;
    'timeUnitCount'?: number;
    'timeUnit': string;
    'endpointBehavior'?: string;
    'propertyParser'?: string;
    'timePoint': PublicTimePointOperationTimePoint;
    'type': string;
    'upperBoundEndpointBehavior'?: string;
    'upperBoundTimePoint': PublicTimePointOperationTimePoint;
    'lowerBoundEndpointBehavior'?: string;
    'lowerBoundTimePoint': PublicTimePointOperationTimePoint;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "includeObjectsWithNoValueSet",
            "baseName": "includeObjectsWithNoValueSet",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "operationType",
            "baseName": "operationType",
            "type": "string",
            "format": ""
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string",
            "format": ""
        },
        {
            "name": "operator",
            "baseName": "operator",
            "type": "string",
            "format": ""
        },
        {
            "name": "requiresTimeZoneConversion",
            "baseName": "requiresTimeZoneConversion",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "upperBound",
            "baseName": "upperBound",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "lowerBound",
            "baseName": "lowerBound",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "defaultComparisonValue",
            "baseName": "defaultComparisonValue",
            "type": "string",
            "format": ""
        },
        {
            "name": "comparisonPropertyName",
            "baseName": "comparisonPropertyName",
            "type": "string",
            "format": ""
        },
        {
            "name": "numberOfDays",
            "baseName": "numberOfDays",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "month",
            "baseName": "month",
            "type": "string",
            "format": ""
        },
        {
            "name": "year",
            "baseName": "year",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "day",
            "baseName": "day",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "useFiscalYear",
            "baseName": "useFiscalYear",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "fiscalYearStart",
            "baseName": "fiscalYearStart",
            "type": "PublicSurveyMonkeyValueFilterValueComparisonFiscalYearStartEnum",
            "format": ""
        },
        {
            "name": "timeUnitCount",
            "baseName": "timeUnitCount",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "timeUnit",
            "baseName": "timeUnit",
            "type": "string",
            "format": ""
        },
        {
            "name": "endpointBehavior",
            "baseName": "endpointBehavior",
            "type": "string",
            "format": ""
        },
        {
            "name": "propertyParser",
            "baseName": "propertyParser",
            "type": "string",
            "format": ""
        },
        {
            "name": "timePoint",
            "baseName": "timePoint",
            "type": "PublicTimePointOperationTimePoint",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "upperBoundEndpointBehavior",
            "baseName": "upperBoundEndpointBehavior",
            "type": "string",
            "format": ""
        },
        {
            "name": "upperBoundTimePoint",
            "baseName": "upperBoundTimePoint",
            "type": "PublicTimePointOperationTimePoint",
            "format": ""
        },
        {
            "name": "lowerBoundEndpointBehavior",
            "baseName": "lowerBoundEndpointBehavior",
            "type": "string",
            "format": ""
        },
        {
            "name": "lowerBoundTimePoint",
            "baseName": "lowerBoundTimePoint",
            "type": "PublicTimePointOperationTimePoint",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return PublicSurveyMonkeyValueFilterValueComparison.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum PublicSurveyMonkeyValueFilterValueComparisonFiscalYearStartEnum {
    January = 'JANUARY',
    February = 'FEBRUARY',
    March = 'MARCH',
    April = 'APRIL',
    May = 'MAY',
    June = 'JUNE',
    July = 'JULY',
    August = 'AUGUST',
    September = 'SEPTEMBER',
    October = 'OCTOBER',
    November = 'NOVEMBER',
    December = 'DECEMBER'
}

