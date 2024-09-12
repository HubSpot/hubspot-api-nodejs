/**
 * Marketing Transactional Single Send
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { EventIdView } from '../models/EventIdView';

/**
* Describes the status of an email send request.
*/
export class EmailSendStatusView {
    'eventId'?: EventIdView;
    /**
    * Time when the send was completed.
    */
    'completedAt'?: Date;
    /**
    * Identifier used to query the status of the send.
    */
    'statusId': string;
    /**
    * Result of the send.
    */
    'sendResult'?: EmailSendStatusViewSendResultEnum;
    /**
    * Time when the send was requested.
    */
    'requestedAt'?: Date;
    /**
    * Time when the send began processing.
    */
    'startedAt'?: Date;
    /**
    * Status of the send request.
    */
    'status': EmailSendStatusViewStatusEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "eventId",
            "baseName": "eventId",
            "type": "EventIdView",
            "format": ""
        },
        {
            "name": "completedAt",
            "baseName": "completedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "statusId",
            "baseName": "statusId",
            "type": "string",
            "format": ""
        },
        {
            "name": "sendResult",
            "baseName": "sendResult",
            "type": "EmailSendStatusViewSendResultEnum",
            "format": ""
        },
        {
            "name": "requestedAt",
            "baseName": "requestedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "startedAt",
            "baseName": "startedAt",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "EmailSendStatusViewStatusEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return EmailSendStatusView.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum EmailSendStatusViewSendResultEnum {
    Sent = 'SENT',
    IdempotentIgnore = 'IDEMPOTENT_IGNORE',
    Queued = 'QUEUED',
    IdempotentFail = 'IDEMPOTENT_FAIL',
    Throttled = 'THROTTLED',
    EmailDisabled = 'EMAIL_DISABLED',
    PortalSuspended = 'PORTAL_SUSPENDED',
    InvalidToAddress = 'INVALID_TO_ADDRESS',
    BlockedDomain = 'BLOCKED_DOMAIN',
    PreviouslyBounced = 'PREVIOUSLY_BOUNCED',
    EmailUnconfirmed = 'EMAIL_UNCONFIRMED',
    PreviousSpam = 'PREVIOUS_SPAM',
    PreviouslyUnsubscribedMessage = 'PREVIOUSLY_UNSUBSCRIBED_MESSAGE',
    PreviouslyUnsubscribedPortal = 'PREVIOUSLY_UNSUBSCRIBED_PORTAL',
    InvalidFromAddress = 'INVALID_FROM_ADDRESS',
    CampaignCancelled = 'CAMPAIGN_CANCELLED',
    ValidationFailed = 'VALIDATION_FAILED',
    MtaIgnore = 'MTA_IGNORE',
    BlockedAddress = 'BLOCKED_ADDRESS',
    PortalOverLimit = 'PORTAL_OVER_LIMIT',
    PortalExpired = 'PORTAL_EXPIRED',
    PortalMissingMarketingScope = 'PORTAL_MISSING_MARKETING_SCOPE',
    MissingTemplateProperties = 'MISSING_TEMPLATE_PROPERTIES',
    MissingRequiredParameter = 'MISSING_REQUIRED_PARAMETER',
    PortalAuthenticationFailure = 'PORTAL_AUTHENTICATION_FAILURE',
    MissingContent = 'MISSING_CONTENT',
    CorruptInput = 'CORRUPT_INPUT',
    TemplateRenderException = 'TEMPLATE_RENDER_EXCEPTION',
    GraymailSuppressed = 'GRAYMAIL_SUPPRESSED',
    UnconfiguredSendingDomain = 'UNCONFIGURED_SENDING_DOMAIN',
    Undeliverable = 'UNDELIVERABLE',
    CancelledAbuse = 'CANCELLED_ABUSE',
    QuarantinedAddress = 'QUARANTINED_ADDRESS',
    AddressOnlyAcceptedOnProd = 'ADDRESS_ONLY_ACCEPTED_ON_PROD',
    PortalNotAuthorizedForApplication = 'PORTAL_NOT_AUTHORIZED_FOR_APPLICATION',
    AddressListBombed = 'ADDRESS_LIST_BOMBED',
    AddressOptedOut = 'ADDRESS_OPTED_OUT',
    RecipientFatigueSuppressed = 'RECIPIENT_FATIGUE_SUPPRESSED',
    TooManyRecipients = 'TOO_MANY_RECIPIENTS',
    PreviouslyUnsubscribedBrand = 'PREVIOUSLY_UNSUBSCRIBED_BRAND',
    NonMarketableContact = 'NON_MARKETABLE_CONTACT',
    PreviouslyUnsubscribedBusinessUnit = 'PREVIOUSLY_UNSUBSCRIBED_BUSINESS_UNIT',
    GdprDoiEnabled = 'GDPR_DOI_ENABLED'
}
export enum EmailSendStatusViewStatusEnum {
    Pending = 'PENDING',
    Processing = 'PROCESSING',
    Canceled = 'CANCELED',
    Complete = 'COMPLETE'
}

