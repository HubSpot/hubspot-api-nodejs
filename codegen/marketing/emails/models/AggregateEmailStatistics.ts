/**
 * Marketing Emails
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EmailStatisticsData } from '../models/EmailStatisticsData';

/**
* Aggregated statistics for the given interval, plus the IDs of emails that were sent during that interval.
*/
export class AggregateEmailStatistics {
    /**
    * List of email IDs that were sent during the time span.
    */
    'emails'?: Array<number>;
    /**
    * The aggregated statistics per campaign.
    */
    'campaignAggregations'?: { [key: string]: EmailStatisticsData; };
    'aggregate'?: EmailStatisticsData;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "emails",
            "baseName": "emails",
            "type": "Array<number>",
            "format": "int64"
        },
        {
            "name": "campaignAggregations",
            "baseName": "campaignAggregations",
            "type": "{ [key: string]: EmailStatisticsData; }",
            "format": ""
        },
        {
            "name": "aggregate",
            "baseName": "aggregate",
            "type": "EmailStatisticsData",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AggregateEmailStatistics.attributeTypeMap;
    }

    public constructor() {
    }
}
