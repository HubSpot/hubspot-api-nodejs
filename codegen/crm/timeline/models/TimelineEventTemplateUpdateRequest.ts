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

import { TimelineEventTemplateToken } from '../models/TimelineEventTemplateToken';

/**
* State of the template definition being updated.
*/
export class TimelineEventTemplateUpdateRequest {
    /**
    * This uses Markdown syntax with Handlebars and event-specific data to render HTML on a timeline when you expand the details.
    */
    'detailTemplate'?: string;
    /**
    * The template name.
    */
    'name': string;
    /**
    * A collection of tokens that can be used as custom properties on the event and to create fully fledged CRM objects.
    */
    'tokens': Array<TimelineEventTemplateToken>;
    /**
    * The template ID.
    */
    'id': string;
    /**
    * This uses Markdown syntax with Handlebars and event-specific data to render HTML on a timeline as a header.
    */
    'headerTemplate'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "detailTemplate",
            "baseName": "detailTemplate",
            "type": "string",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "tokens",
            "baseName": "tokens",
            "type": "Array<TimelineEventTemplateToken>",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "headerTemplate",
            "baseName": "headerTemplate",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TimelineEventTemplateUpdateRequest.attributeTypeMap;
    }

    public constructor() {
    }
}
