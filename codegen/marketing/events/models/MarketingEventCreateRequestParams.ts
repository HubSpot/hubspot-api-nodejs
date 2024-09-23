/**
 * Marketing Events
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PropertyValue } from '../models/PropertyValue';

export class MarketingEventCreateRequestParams {
    /**
    * The start date and time of the marketing event.
    */
    'startDateTime'?: Date;
    /**
    * A list of PropertyValues. These can be whatever kind of property names and values you want. However, they must already exist on the HubSpot account\'s definition of the MarketingEvent Object. If they don\'t they will be filtered out and not set. In order to do this you\'ll need to create a new PropertyGroup on the HubSpot account\'s MarketingEvent object for your specific app and create the Custom Property you want to track on that HubSpot account. Do not create any new default properties on the MarketingEvent object as that will apply to all HubSpot accounts. 
    */
    'customProperties'?: Array<PropertyValue>;
    /**
    * The accountId that is associated with this marketing event in the external event application.
    */
    'externalAccountId': string;
    /**
    * Indicates if the marketing event has been cancelled.  Defaults to `false`
    */
    'eventCancelled'?: boolean;
    /**
    * The name of the organizer of the marketing event.
    */
    'eventOrganizer': string;
    /**
    * A URL in the external event application where the marketing event can be managed.
    */
    'eventUrl'?: string;
    /**
    * The id of the marketing event in the external event application.
    */
    'externalEventId': string;
    /**
    * The description of the marketing event.
    */
    'eventDescription'?: string;
    /**
    * The name of the marketing event.
    */
    'eventName': string;
    /**
    * Describes what type of event this is.  For example: `WEBINAR`, `CONFERENCE`, `WORKSHOP`
    */
    'eventType'?: string;
    'eventCompleted'?: boolean;
    /**
    * The end date and time of the marketing event.
    */
    'endDateTime'?: Date;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "startDateTime",
            "baseName": "startDateTime",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "customProperties",
            "baseName": "customProperties",
            "type": "Array<PropertyValue>",
            "format": ""
        },
        {
            "name": "externalAccountId",
            "baseName": "externalAccountId",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventCancelled",
            "baseName": "eventCancelled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "eventOrganizer",
            "baseName": "eventOrganizer",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventUrl",
            "baseName": "eventUrl",
            "type": "string",
            "format": ""
        },
        {
            "name": "externalEventId",
            "baseName": "externalEventId",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventDescription",
            "baseName": "eventDescription",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventName",
            "baseName": "eventName",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventType",
            "baseName": "eventType",
            "type": "string",
            "format": ""
        },
        {
            "name": "eventCompleted",
            "baseName": "eventCompleted",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "endDateTime",
            "baseName": "endDateTime",
            "type": "Date",
            "format": "date-time"
        }    ];

    static getAttributeTypeMap() {
        return MarketingEventCreateRequestParams.attributeTypeMap;
    }

    public constructor() {
    }
}

