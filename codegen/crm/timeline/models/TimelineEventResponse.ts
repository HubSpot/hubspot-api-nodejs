/**
 * Timeline events
 * This feature allows an app to create and configure custom events that can show up in the timelines of certain CRM objects like contacts, companies, tickets, or deals. You'll find multiple use cases for this API in the sections below.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TimelineEventIFrame } from './TimelineEventIFrame';
import { HttpFile } from '../http/http';

/**
* The current state of the timeline event.
*/
export class TimelineEventResponse {
    /**
    * Identifier for the event. This should be unique to the app and event template. If you use the same ID for different CRM objects, the last to be processed will win and the first will not have a record. You can also use `{{uuid}}` anywhere in the ID to generate a unique string, guaranteeing uniqueness.
    */
    'id': string;
    /**
    * The event template ID.
    */
    'eventTemplateId': string;
    /**
    * The email address used for contact-specific events. This can be used to identify existing contacts, create new ones, or change the email for an existing contact (if paired with the `objectId`).
    */
    'email'?: string;
    /**
    * The CRM object identifier. This is required for every event other than contacts (where utk or email can be used).
    */
    'objectId'?: string;
    /**
    * Use the `utk` parameter to associate an event with a contact by `usertoken`. This is recommended if you don't know a user's email, but have an identifying user token in your cookie.
    */
    'utk'?: string;
    /**
    * The event domain (often paired with utk).
    */
    'domain'?: string;
    /**
    * The time the event occurred. If not passed in, the curren time will be assumed. This is used to determine where an event is shown on a CRM object's timeline.
    */
    'timestamp'?: Date;
    /**
    * A collection of token keys and values associated with the template tokens.
    */
    'tokens': { [key: string]: string; };
    /**
    * Additional event-specific data that can be interpreted by the template's markdown.
    */
    'extraData'?: any;
    'timelineIFrame'?: TimelineEventIFrame;
    /**
    * The ObjectType associated with the EventTemplate.
    */
    'objectType': string;
    'createdAt'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventTemplateId",
            "baseName": "eventTemplateId",
            "type": "string",
            "format": ""
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string",
            "format": ""
        },
        {
            "name": "objectId",
            "baseName": "objectId",
            "type": "string",
            "format": ""
        },
        {
            "name": "utk",
            "baseName": "utk",
            "type": "string",
            "format": ""
        },
        {
            "name": "domain",
            "baseName": "domain",
            "type": "string",
            "format": ""
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "tokens",
            "baseName": "tokens",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "extraData",
            "baseName": "extraData",
            "type": "any",
            "format": ""
        },
        {
            "name": "timelineIFrame",
            "baseName": "timelineIFrame",
            "type": "TimelineEventIFrame",
            "format": ""
        },
        {
            "name": "objectType",
            "baseName": "objectType",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return TimelineEventResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}
