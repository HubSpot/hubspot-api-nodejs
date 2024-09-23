/**
 * Timeline
 * This feature allows an app to create and configure custom events that can show up in the timelines of certain CRM objects like contacts, companies, tickets, or deals. You\'ll find multiple use cases for this API in the sections below.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TimelineEvent } from '../models/TimelineEvent';

/**
* Used to create timeline events in batches.
*/
export class BatchInputTimelineEvent {
    /**
    * A collection of timeline events we want to create.
    */
    'inputs': Array<TimelineEvent>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "inputs",
            "baseName": "inputs",
            "type": "Array<TimelineEvent>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return BatchInputTimelineEvent.attributeTypeMap;
    }

    public constructor() {
    }
}

