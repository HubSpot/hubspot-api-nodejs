import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { AttendanceCounters } from '../models/AttendanceCounters';
import { BatchInputMarketingEventCreateRequestParams } from '../models/BatchInputMarketingEventCreateRequestParams';
import { BatchInputMarketingEventEmailSubscriber } from '../models/BatchInputMarketingEventEmailSubscriber';
import { BatchInputMarketingEventExternalUniqueIdentifier } from '../models/BatchInputMarketingEventExternalUniqueIdentifier';
import { BatchInputMarketingEventPublicObjectIdDeleteRequest } from '../models/BatchInputMarketingEventPublicObjectIdDeleteRequest';
import { BatchInputMarketingEventPublicUpdateRequestFullV2 } from '../models/BatchInputMarketingEventPublicUpdateRequestFullV2';
import { BatchInputMarketingEventSubscriber } from '../models/BatchInputMarketingEventSubscriber';
import { BatchResponseMarketingEventPublicDefaultResponse } from '../models/BatchResponseMarketingEventPublicDefaultResponse';
import { BatchResponseMarketingEventPublicDefaultResponseV2 } from '../models/BatchResponseMarketingEventPublicDefaultResponseV2';
import { BatchResponseMarketingEventPublicDefaultResponseV2WithErrors } from '../models/BatchResponseMarketingEventPublicDefaultResponseV2WithErrors';
import { BatchResponseSubscriberEmailResponse } from '../models/BatchResponseSubscriberEmailResponse';
import { BatchResponseSubscriberVidResponse } from '../models/BatchResponseSubscriberVidResponse';
import { CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging } from '../models/CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging';
import { CollectionResponseSearchPublicResponseWrapperNoPaging } from '../models/CollectionResponseSearchPublicResponseWrapperNoPaging';
import { CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging } from '../models/CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging';
import { CollectionResponseWithTotalParticipationBreakdownForwardPaging } from '../models/CollectionResponseWithTotalParticipationBreakdownForwardPaging';
import { CollectionResponseWithTotalPublicListNoPaging } from '../models/CollectionResponseWithTotalPublicListNoPaging';
import { EventDetailSettings } from '../models/EventDetailSettings';
import { EventDetailSettingsUrl } from '../models/EventDetailSettingsUrl';
import { MarketingEventCompleteRequestParams } from '../models/MarketingEventCompleteRequestParams';
import { MarketingEventCreateRequestParams } from '../models/MarketingEventCreateRequestParams';
import { MarketingEventDefaultResponse } from '../models/MarketingEventDefaultResponse';
import { MarketingEventPublicDefaultResponse } from '../models/MarketingEventPublicDefaultResponse';
import { MarketingEventPublicDefaultResponseV2 } from '../models/MarketingEventPublicDefaultResponseV2';
import { MarketingEventPublicReadResponse } from '../models/MarketingEventPublicReadResponse';
import { MarketingEventPublicReadResponseV2 } from '../models/MarketingEventPublicReadResponseV2';
import { MarketingEventPublicUpdateRequestV2 } from '../models/MarketingEventPublicUpdateRequestV2';
import { MarketingEventUpdateRequestParams } from '../models/MarketingEventUpdateRequestParams';

import { ObservableAddEventAttendeesApi } from "./ObservableAPI";
import { AddEventAttendeesApiRequestFactory, AddEventAttendeesApiResponseProcessor} from "../apis/AddEventAttendeesApi";

export interface AddEventAttendeesApiRecordByContactEmailsRequest {
    /**
     * The id of the marketing event in the external event application
     * Defaults to: undefined
     * @type string
     * @memberof AddEventAttendeesApirecordByContactEmails
     */
    externalEventId: string
    /**
     * The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * Defaults to: undefined
     * @type string
     * @memberof AddEventAttendeesApirecordByContactEmails
     */
    subscriberState: string
    /**
     * 
     * @type BatchInputMarketingEventEmailSubscriber
     * @memberof AddEventAttendeesApirecordByContactEmails
     */
    batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber
    /**
     * The accountId that is associated with this marketing event in the external event application
     * Defaults to: undefined
     * @type string
     * @memberof AddEventAttendeesApirecordByContactEmails
     */
    externalAccountId?: string
}

export interface AddEventAttendeesApiRecordByContactIdRequest {
    /**
     * The internal id of the marketing event in HubSpot
     * Defaults to: undefined
     * @type string
     * @memberof AddEventAttendeesApirecordByContactId
     */
    objectId: string
    /**
     * The attendance state value. It may be \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;
     * Defaults to: undefined
     * @type string
     * @memberof AddEventAttendeesApirecordByContactId
     */
    subscriberState: string
    /**
     * 
     * @type BatchInputMarketingEventSubscriber
     * @memberof AddEventAttendeesApirecordByContactId
     */
    batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber
}

export interface AddEventAttendeesApiRecordByContactIdsRequest {
    /**
     * The id of the marketing event in the external event application
     * Defaults to: undefined
     * @type string
     * @memberof AddEventAttendeesApirecordByContactIds
     */
    externalEventId: string
    /**
     * The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * Defaults to: undefined
     * @type string
     * @memberof AddEventAttendeesApirecordByContactIds
     */
    subscriberState: string
    /**
     * 
     * @type BatchInputMarketingEventSubscriber
     * @memberof AddEventAttendeesApirecordByContactIds
     */
    batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber
    /**
     * The accountId that is associated with this marketing event in the external event application
     * Defaults to: undefined
     * @type string
     * @memberof AddEventAttendeesApirecordByContactIds
     */
    externalAccountId?: string
}

export interface AddEventAttendeesApiRecordByEmailRequest {
    /**
     * The internal ID of the marketing event in HubSpot
     * Defaults to: undefined
     * @type string
     * @memberof AddEventAttendeesApirecordByEmail
     */
    objectId: string
    /**
     * The attendance state value. It may be \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;
     * Defaults to: undefined
     * @type string
     * @memberof AddEventAttendeesApirecordByEmail
     */
    subscriberState: string
    /**
     * 
     * @type BatchInputMarketingEventEmailSubscriber
     * @memberof AddEventAttendeesApirecordByEmail
     */
    batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber
}

export class ObjectAddEventAttendeesApi {
    private api: ObservableAddEventAttendeesApi

    public constructor(configuration: Configuration, requestFactory?: AddEventAttendeesApiRequestFactory, responseProcessor?: AddEventAttendeesApiResponseProcessor) {
        this.api = new ObservableAddEventAttendeesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their email addresses.  If a contact does not exist, it will be automatically created. The contactProperties field is used exclusively for creating new contacts and will not update properties of existing contacts.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by Email with Marketing Event External Ids
     * @param param the request object
     */
    public recordByContactEmailsWithHttpInfo(param: AddEventAttendeesApiRecordByContactEmailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseSubscriberEmailResponse>> {
        return this.api.recordByContactEmailsWithHttpInfo(param.externalEventId, param.subscriberState, param.batchInputMarketingEventEmailSubscriber, param.externalAccountId,  options).toPromise();
    }

    /**
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their email addresses.  If a contact does not exist, it will be automatically created. The contactProperties field is used exclusively for creating new contacts and will not update properties of existing contacts.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by Email with Marketing Event External Ids
     * @param param the request object
     */
    public recordByContactEmails(param: AddEventAttendeesApiRecordByContactEmailsRequest, options?: ConfigurationOptions): Promise<BatchResponseSubscriberEmailResponse> {
        return this.api.recordByContactEmails(param.externalEventId, param.subscriberState, param.batchInputMarketingEventEmailSubscriber, param.externalAccountId,  options).toPromise();
    }

    /**
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their HubSpot contact IDs.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by ContactId with Marketing Event Object Id
     * @param param the request object
     */
    public recordByContactIdWithHttpInfo(param: AddEventAttendeesApiRecordByContactIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseSubscriberVidResponse>> {
        return this.api.recordByContactIdWithHttpInfo(param.objectId, param.subscriberState, param.batchInputMarketingEventSubscriber,  options).toPromise();
    }

    /**
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their HubSpot contact IDs.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by ContactId with Marketing Event Object Id
     * @param param the request object
     */
    public recordByContactId(param: AddEventAttendeesApiRecordByContactIdRequest, options?: ConfigurationOptions): Promise<BatchResponseSubscriberVidResponse> {
        return this.api.recordByContactId(param.objectId, param.subscriberState, param.batchInputMarketingEventSubscriber,  options).toPromise();
    }

    /**
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their HubSpot contact IDs.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by ContactId with Marketing Event External Ids
     * @param param the request object
     */
    public recordByContactIdsWithHttpInfo(param: AddEventAttendeesApiRecordByContactIdsRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseSubscriberVidResponse>> {
        return this.api.recordByContactIdsWithHttpInfo(param.externalEventId, param.subscriberState, param.batchInputMarketingEventSubscriber, param.externalAccountId,  options).toPromise();
    }

    /**
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their HubSpot contact IDs.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by ContactId with Marketing Event External Ids
     * @param param the request object
     */
    public recordByContactIds(param: AddEventAttendeesApiRecordByContactIdsRequest, options?: ConfigurationOptions): Promise<BatchResponseSubscriberVidResponse> {
        return this.api.recordByContactIds(param.externalEventId, param.subscriberState, param.batchInputMarketingEventSubscriber, param.externalAccountId,  options).toPromise();
    }

    /**
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their email addresses.  If a contact does not exist, it will be automatically created. The contactProperties field is used exclusively for creating new contacts and will not update properties of existing contacts.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by Email with Marketing Event Object Id
     * @param param the request object
     */
    public recordByEmailWithHttpInfo(param: AddEventAttendeesApiRecordByEmailRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseSubscriberEmailResponse>> {
        return this.api.recordByEmailWithHttpInfo(param.objectId, param.subscriberState, param.batchInputMarketingEventEmailSubscriber,  options).toPromise();
    }

    /**
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their email addresses.  If a contact does not exist, it will be automatically created. The contactProperties field is used exclusively for creating new contacts and will not update properties of existing contacts.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by Email with Marketing Event Object Id
     * @param param the request object
     */
    public recordByEmail(param: AddEventAttendeesApiRecordByEmailRequest, options?: ConfigurationOptions): Promise<BatchResponseSubscriberEmailResponse> {
        return this.api.recordByEmail(param.objectId, param.subscriberState, param.batchInputMarketingEventEmailSubscriber,  options).toPromise();
    }

}

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiArchiveRequest {
    /**
     * The id of the marketing event in the external event application
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchive
     */
    externalEventId: string
    /**
     * The accountId that is associated with this marketing event in the external event application
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchive
     */
    externalAccountId: string
}

export interface BasicApiArchiveByObjectIdRequest {
    /**
     * The internal ID of the marketing event in HubSpot
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchiveByObjectId
     */
    objectId: string
}

export interface BasicApiCreateRequest {
    /**
     * 
     * @type MarketingEventCreateRequestParams
     * @memberof BasicApicreate
     */
    marketingEventCreateRequestParams: MarketingEventCreateRequestParams
}

export interface BasicApiGetAllRequest {
    /**
     * The cursor indicating the position of the last retrieved item.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetAll
     */
    after?: string
    /**
     * The limit for response size. The default value is 10, the max number is 100
     * Defaults to: 10
     * @type number
     * @memberof BasicApigetAll
     */
    limit?: number
}

export interface BasicApiGetByObjectIdRequest {
    /**
     * The internal ID of the marketing event in HubSpot
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetByObjectId
     */
    objectId: string
}

export interface BasicApiGetDetailsRequest {
    /**
     * The id of the marketing event in the external event application
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetDetails
     */
    externalEventId: string
    /**
     * The accountId that is associated with this marketing event in the external event application
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetDetails
     */
    externalAccountId: string
}

export interface BasicApiUpdateRequest {
    /**
     * The id of the marketing event in the external event application
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiupdate
     */
    externalEventId: string
    /**
     * The accountId that is associated with this marketing event in the external event application
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiupdate
     */
    externalAccountId: string
    /**
     * 
     * @type MarketingEventUpdateRequestParams
     * @memberof BasicApiupdate
     */
    marketingEventUpdateRequestParams: MarketingEventUpdateRequestParams
}

export interface BasicApiUpdateByObjectIdRequest {
    /**
     * The internal ID of the marketing event in HubSpot
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiupdateByObjectId
     */
    objectId: string
    /**
     * 
     * @type MarketingEventPublicUpdateRequestV2
     * @memberof BasicApiupdateByObjectId
     */
    marketingEventPublicUpdateRequestV2: MarketingEventPublicUpdateRequestV2
}

export interface BasicApiUpsertRequest {
    /**
     * The id of the marketing event in the external event application
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiupsert
     */
    externalEventId: string
    /**
     * 
     * @type MarketingEventCreateRequestParams
     * @memberof BasicApiupsert
     */
    marketingEventCreateRequestParams: MarketingEventCreateRequestParams
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes the existing Marketing Event with the specified externalAccountId, externalEventId, if it exists.  Only Marketing Events created by the same app can be deleted.
     * Delete Marketing Event by External Ids
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.externalEventId, param.externalAccountId,  options).toPromise();
    }

    /**
     * Deletes the existing Marketing Event with the specified externalAccountId, externalEventId, if it exists.  Only Marketing Events created by the same app can be deleted.
     * Delete Marketing Event by External Ids
     * @param param the request object
     */
    public archive(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.externalEventId, param.externalAccountId,  options).toPromise();
    }

    /**
     * Deletes the existing Marketing Event with the specified objectId, if it exists.
     * Delete Marketing Event by objectId
     * @param param the request object
     */
    public archiveByObjectIdWithHttpInfo(param: BasicApiArchiveByObjectIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveByObjectIdWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Deletes the existing Marketing Event with the specified objectId, if it exists.
     * Delete Marketing Event by objectId
     * @param param the request object
     */
    public archiveByObjectId(param: BasicApiArchiveByObjectIdRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archiveByObjectId(param.objectId,  options).toPromise();
    }

    /**
     * Creates a new marketing event in HubSpot
     * Create a marketing event
     * @param param the request object
     */
    public createWithHttpInfo(param: BasicApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<MarketingEventDefaultResponse>> {
        return this.api.createWithHttpInfo(param.marketingEventCreateRequestParams,  options).toPromise();
    }

    /**
     * Creates a new marketing event in HubSpot
     * Create a marketing event
     * @param param the request object
     */
    public create(param: BasicApiCreateRequest, options?: ConfigurationOptions): Promise<MarketingEventDefaultResponse> {
        return this.api.create(param.marketingEventCreateRequestParams,  options).toPromise();
    }

    /**
     * Returns all Marketing Events available on the portal, along with their properties, regardless of whether they were created manually or through the application.  The marketing events returned by this endpoint are sorted by objectId.
     * Get all marketing event
     * @param param the request object
     */
    public getAllWithHttpInfo(param: BasicApiGetAllRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging>> {
        return this.api.getAllWithHttpInfo(param.after, param.limit,  options).toPromise();
    }

    /**
     * Returns all Marketing Events available on the portal, along with their properties, regardless of whether they were created manually or through the application.  The marketing events returned by this endpoint are sorted by objectId.
     * Get all marketing event
     * @param param the request object
     */
    public getAll(param: BasicApiGetAllRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging> {
        return this.api.getAll(param.after, param.limit,  options).toPromise();
    }

    /**
     * Returns the details of a Marketing Event with the specified objectId, if it exists.
     * Get Marketing Event by objectId
     * @param param the request object
     */
    public getByObjectIdWithHttpInfo(param: BasicApiGetByObjectIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<MarketingEventPublicReadResponseV2>> {
        return this.api.getByObjectIdWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Returns the details of a Marketing Event with the specified objectId, if it exists.
     * Get Marketing Event by objectId
     * @param param the request object
     */
    public getByObjectId(param: BasicApiGetByObjectIdRequest, options?: ConfigurationOptions): Promise<MarketingEventPublicReadResponseV2> {
        return this.api.getByObjectId(param.objectId,  options).toPromise();
    }

    /**
     * Returns the details of a Marketing Event with the specified externalAccountId, externalEventId, if it exists.  Only Marketing Events created by the same app making the request can be retrieved.
     * Get Marketing Event by External IDs
     * @param param the request object
     */
    public getDetailsWithHttpInfo(param: BasicApiGetDetailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<MarketingEventPublicReadResponse>> {
        return this.api.getDetailsWithHttpInfo(param.externalEventId, param.externalAccountId,  options).toPromise();
    }

    /**
     * Returns the details of a Marketing Event with the specified externalAccountId, externalEventId, if it exists.  Only Marketing Events created by the same app making the request can be retrieved.
     * Get Marketing Event by External IDs
     * @param param the request object
     */
    public getDetails(param: BasicApiGetDetailsRequest, options?: ConfigurationOptions): Promise<MarketingEventPublicReadResponse> {
        return this.api.getDetails(param.externalEventId, param.externalAccountId,  options).toPromise();
    }

    /**
     * Updates the details of an existing Marketing Event identified by its externalAccountId, externalEventId if it exists.  Only Marketing Events created by the same app can be updated.
     * Update Marketing Event by External IDs
     * @param param the request object
     */
    public updateWithHttpInfo(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<MarketingEventPublicDefaultResponse>> {
        return this.api.updateWithHttpInfo(param.externalEventId, param.externalAccountId, param.marketingEventUpdateRequestParams,  options).toPromise();
    }

    /**
     * Updates the details of an existing Marketing Event identified by its externalAccountId, externalEventId if it exists.  Only Marketing Events created by the same app can be updated.
     * Update Marketing Event by External IDs
     * @param param the request object
     */
    public update(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<MarketingEventPublicDefaultResponse> {
        return this.api.update(param.externalEventId, param.externalAccountId, param.marketingEventUpdateRequestParams,  options).toPromise();
    }

    /**
     * Updates the details of an existing Marketing Event identified by its objectId, if it exists.
     * Update Marketing Event by objectId
     * @param param the request object
     */
    public updateByObjectIdWithHttpInfo(param: BasicApiUpdateByObjectIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<MarketingEventPublicDefaultResponseV2>> {
        return this.api.updateByObjectIdWithHttpInfo(param.objectId, param.marketingEventPublicUpdateRequestV2,  options).toPromise();
    }

    /**
     * Updates the details of an existing Marketing Event identified by its objectId, if it exists.
     * Update Marketing Event by objectId
     * @param param the request object
     */
    public updateByObjectId(param: BasicApiUpdateByObjectIdRequest, options?: ConfigurationOptions): Promise<MarketingEventPublicDefaultResponseV2> {
        return this.api.updateByObjectId(param.objectId, param.marketingEventPublicUpdateRequestV2,  options).toPromise();
    }

    /**
     * Upserts a marketing event If there is an existing marketing event with the specified ID, it will be updated; otherwise a new event will be created.
     * Create or update a marketing event
     * @param param the request object
     */
    public upsertWithHttpInfo(param: BasicApiUpsertRequest, options?: ConfigurationOptions): Promise<HttpInfo<MarketingEventPublicDefaultResponse>> {
        return this.api.upsertWithHttpInfo(param.externalEventId, param.marketingEventCreateRequestParams,  options).toPromise();
    }

    /**
     * Upserts a marketing event If there is an existing marketing event with the specified ID, it will be updated; otherwise a new event will be created.
     * Create or update a marketing event
     * @param param the request object
     */
    public upsert(param: BasicApiUpsertRequest, options?: ConfigurationOptions): Promise<MarketingEventPublicDefaultResponse> {
        return this.api.upsert(param.externalEventId, param.marketingEventCreateRequestParams,  options).toPromise();
    }

}

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiArchiveRequest {
    /**
     * 
     * @type BatchInputMarketingEventExternalUniqueIdentifier
     * @memberof BatchApiarchive
     */
    batchInputMarketingEventExternalUniqueIdentifier: BatchInputMarketingEventExternalUniqueIdentifier
}

export interface BatchApiArchiveByObjectIdRequest {
    /**
     * 
     * @type BatchInputMarketingEventPublicObjectIdDeleteRequest
     * @memberof BatchApiarchiveByObjectId
     */
    batchInputMarketingEventPublicObjectIdDeleteRequest: BatchInputMarketingEventPublicObjectIdDeleteRequest
}

export interface BatchApiUpdateByObjectIdRequest {
    /**
     * 
     * @type BatchInputMarketingEventPublicUpdateRequestFullV2
     * @memberof BatchApiupdateByObjectId
     */
    batchInputMarketingEventPublicUpdateRequestFullV2: BatchInputMarketingEventPublicUpdateRequestFullV2
}

export interface BatchApiUpsertRequest {
    /**
     * 
     * @type BatchInputMarketingEventCreateRequestParams
     * @memberof BatchApiupsert
     */
    batchInputMarketingEventCreateRequestParams: BatchInputMarketingEventCreateRequestParams
}

export class ObjectBatchApi {
    private api: ObservableBatchApi

    public constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes multiple Marketing Events based on externalAccountId, externalEventId, and appId.  Only Marketing Events created by the same apps will be deleted; events from other apps cannot be removed by this endpoint. 
     * Delete Multiple Marketing Events by External Ids
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BatchApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.batchInputMarketingEventExternalUniqueIdentifier,  options).toPromise();
    }

    /**
     * Deletes multiple Marketing Events based on externalAccountId, externalEventId, and appId.  Only Marketing Events created by the same apps will be deleted; events from other apps cannot be removed by this endpoint. 
     * Delete Multiple Marketing Events by External Ids
     * @param param the request object
     */
    public archive(param: BatchApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.batchInputMarketingEventExternalUniqueIdentifier,  options).toPromise();
    }

    /**
     * Deletes multiple Marketing Events from the portal based on their objectId, if they exist.  Responses: 204: Returned if all specified Marketing Events were successfully deleted. 207: Returned if some objectIds did not correspond to any existing Marketing Events.
     * Delete Multiple Marketing Events by ObjectId
     * @param param the request object
     */
    public archiveByObjectIdWithHttpInfo(param: BatchApiArchiveByObjectIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveByObjectIdWithHttpInfo(param.batchInputMarketingEventPublicObjectIdDeleteRequest,  options).toPromise();
    }

    /**
     * Deletes multiple Marketing Events from the portal based on their objectId, if they exist.  Responses: 204: Returned if all specified Marketing Events were successfully deleted. 207: Returned if some objectIds did not correspond to any existing Marketing Events.
     * Delete Multiple Marketing Events by ObjectId
     * @param param the request object
     */
    public archiveByObjectId(param: BatchApiArchiveByObjectIdRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archiveByObjectId(param.batchInputMarketingEventPublicObjectIdDeleteRequest,  options).toPromise();
    }

    /**
     * Updates multiple Marketing Events on the portal based on their objectId, if they exist.
     * Update Multiple Marketing Events by ObjectId
     * @param param the request object
     */
    public updateByObjectIdWithHttpInfo(param: BatchApiUpdateByObjectIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseMarketingEventPublicDefaultResponseV2WithErrors | BatchResponseMarketingEventPublicDefaultResponseV2>> {
        return this.api.updateByObjectIdWithHttpInfo(param.batchInputMarketingEventPublicUpdateRequestFullV2,  options).toPromise();
    }

    /**
     * Updates multiple Marketing Events on the portal based on their objectId, if they exist.
     * Update Multiple Marketing Events by ObjectId
     * @param param the request object
     */
    public updateByObjectId(param: BatchApiUpdateByObjectIdRequest, options?: ConfigurationOptions): Promise<BatchResponseMarketingEventPublicDefaultResponseV2WithErrors | BatchResponseMarketingEventPublicDefaultResponseV2> {
        return this.api.updateByObjectId(param.batchInputMarketingEventPublicUpdateRequestFullV2,  options).toPromise();
    }

    /**
     * Upserts multiple Marketing Events. If a Marketing Event with the specified ID already exists, it will be updated; otherwise, a new event will be created.  Only Marketing Events originally created by the same app can be updated.
     * Create or Update Multiple Marketing Events
     * @param param the request object
     */
    public upsertWithHttpInfo(param: BatchApiUpsertRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseMarketingEventPublicDefaultResponse>> {
        return this.api.upsertWithHttpInfo(param.batchInputMarketingEventCreateRequestParams,  options).toPromise();
    }

    /**
     * Upserts multiple Marketing Events. If a Marketing Event with the specified ID already exists, it will be updated; otherwise, a new event will be created.  Only Marketing Events originally created by the same app can be updated.
     * Create or Update Multiple Marketing Events
     * @param param the request object
     */
    public upsert(param: BatchApiUpsertRequest, options?: ConfigurationOptions): Promise<BatchResponseMarketingEventPublicDefaultResponse> {
        return this.api.upsert(param.batchInputMarketingEventCreateRequestParams,  options).toPromise();
    }

}

import { ObservableChangePropertyApi } from "./ObservableAPI";
import { ChangePropertyApiRequestFactory, ChangePropertyApiResponseProcessor} from "../apis/ChangePropertyApi";

export interface ChangePropertyApiCancelRequest {
    /**
     * The id of the marketing event in the external event application
     * Defaults to: undefined
     * @type string
     * @memberof ChangePropertyApicancel
     */
    externalEventId: string
    /**
     * The accountId that is associated with this marketing event in the external event application
     * Defaults to: undefined
     * @type string
     * @memberof ChangePropertyApicancel
     */
    externalAccountId: string
}

export interface ChangePropertyApiCompleteRequest {
    /**
     * The id of the marketing event in the external event application.
     * Defaults to: undefined
     * @type string
     * @memberof ChangePropertyApicomplete
     */
    externalEventId: string
    /**
     * The accountId that is associated with this marketing event in the external event application.
     * Defaults to: undefined
     * @type string
     * @memberof ChangePropertyApicomplete
     */
    externalAccountId: string
    /**
     * 
     * @type MarketingEventCompleteRequestParams
     * @memberof ChangePropertyApicomplete
     */
    marketingEventCompleteRequestParams: MarketingEventCompleteRequestParams
}

export class ObjectChangePropertyApi {
    private api: ObservableChangePropertyApi

    public constructor(configuration: Configuration, requestFactory?: ChangePropertyApiRequestFactory, responseProcessor?: ChangePropertyApiResponseProcessor) {
        this.api = new ObservableChangePropertyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Mark a marketing event as cancelled.
     * Mark a marketing event as cancelled
     * @param param the request object
     */
    public cancelWithHttpInfo(param: ChangePropertyApiCancelRequest, options?: ConfigurationOptions): Promise<HttpInfo<MarketingEventDefaultResponse>> {
        return this.api.cancelWithHttpInfo(param.externalEventId, param.externalAccountId,  options).toPromise();
    }

    /**
     * Mark a marketing event as cancelled.
     * Mark a marketing event as cancelled
     * @param param the request object
     */
    public cancel(param: ChangePropertyApiCancelRequest, options?: ConfigurationOptions): Promise<MarketingEventDefaultResponse> {
        return this.api.cancel(param.externalEventId, param.externalAccountId,  options).toPromise();
    }

    /**
     * Mark a marketing event as completed
     * Mark a marketing event as completed
     * @param param the request object
     */
    public completeWithHttpInfo(param: ChangePropertyApiCompleteRequest, options?: ConfigurationOptions): Promise<HttpInfo<MarketingEventDefaultResponse>> {
        return this.api.completeWithHttpInfo(param.externalEventId, param.externalAccountId, param.marketingEventCompleteRequestParams,  options).toPromise();
    }

    /**
     * Mark a marketing event as completed
     * Mark a marketing event as completed
     * @param param the request object
     */
    public complete(param: ChangePropertyApiCompleteRequest, options?: ConfigurationOptions): Promise<MarketingEventDefaultResponse> {
        return this.api.complete(param.externalEventId, param.externalAccountId, param.marketingEventCompleteRequestParams,  options).toPromise();
    }

}

import { ObservableIdentifiersApi } from "./ObservableAPI";
import { IdentifiersApiRequestFactory, IdentifiersApiResponseProcessor} from "../apis/IdentifiersApi";

export interface IdentifiersApiDoSearchRequest {
    /**
     * The id of the marketing event in the external event application (externalEventId)
     * Defaults to: undefined
     * @type string
     * @memberof IdentifiersApidoSearch
     */
    q: string
}

export interface IdentifiersApiSearchPortalEventsRequest {
    /**
     * The id of the marketing event in the external event application.
     * Defaults to: undefined
     * @type string
     * @memberof IdentifiersApisearchPortalEvents
     */
    externalEventId: string
}

export class ObjectIdentifiersApi {
    private api: ObservableIdentifiersApi

    public constructor(configuration: Configuration, requestFactory?: IdentifiersApiRequestFactory, responseProcessor?: IdentifiersApiResponseProcessor) {
        this.api = new ObservableIdentifiersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves Marketing Events where the externalEventId matches the value provided in the request, limited to events created by the app making the request.  Marketing Events created by other apps will not be included in the results.
     * Find App-Specific Marketing Events by External Event Id
     * @param param the request object
     */
    public doSearchWithHttpInfo(param: IdentifiersApiDoSearchRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseSearchPublicResponseWrapperNoPaging>> {
        return this.api.doSearchWithHttpInfo(param.q,  options).toPromise();
    }

    /**
     * Retrieves Marketing Events where the externalEventId matches the value provided in the request, limited to events created by the app making the request.  Marketing Events created by other apps will not be included in the results.
     * Find App-Specific Marketing Events by External Event Id
     * @param param the request object
     */
    public doSearch(param: IdentifiersApiDoSearchRequest, options?: ConfigurationOptions): Promise<CollectionResponseSearchPublicResponseWrapperNoPaging> {
        return this.api.doSearch(param.q,  options).toPromise();
    }

    /**
     * This endpoint searches the portal for all Marketing Events whose externalEventId matches the value provided in the request.  It retrieves the objectId and additional event details for each matching Marketing Event.  Since multiple Marketing Events can have the same externalEventId, the endpoint returns all matching results.  Note: Marketing Events become searchable by externalEventId a few minutes after creation.
     * Find Marketing Events by External Event Id
     * @param param the request object
     */
    public searchPortalEventsWithHttpInfo(param: IdentifiersApiSearchPortalEventsRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging>> {
        return this.api.searchPortalEventsWithHttpInfo(param.externalEventId,  options).toPromise();
    }

    /**
     * This endpoint searches the portal for all Marketing Events whose externalEventId matches the value provided in the request.  It retrieves the objectId and additional event details for each matching Marketing Event.  Since multiple Marketing Events can have the same externalEventId, the endpoint returns all matching results.  Note: Marketing Events become searchable by externalEventId a few minutes after creation.
     * Find Marketing Events by External Event Id
     * @param param the request object
     */
    public searchPortalEvents(param: IdentifiersApiSearchPortalEventsRequest, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging> {
        return this.api.searchPortalEvents(param.externalEventId,  options).toPromise();
    }

}

import { ObservableListAssociationsApi } from "./ObservableAPI";
import { ListAssociationsApiRequestFactory, ListAssociationsApiResponseProcessor} from "../apis/ListAssociationsApi";

export interface ListAssociationsApiAssociateByExternalAccountAndEventIdsRequest {
    /**
     * The accountId that is associated with this marketing event in the external event application.
     * Defaults to: undefined
     * @type string
     * @memberof ListAssociationsApiassociateByExternalAccountAndEventIds
     */
    externalAccountId: string
    /**
     * The id of the marketing event in the external event application.
     * Defaults to: undefined
     * @type string
     * @memberof ListAssociationsApiassociateByExternalAccountAndEventIds
     */
    externalEventId: string
    /**
     * The ILS ID of the list.
     * Defaults to: undefined
     * @type string
     * @memberof ListAssociationsApiassociateByExternalAccountAndEventIds
     */
    listId: string
}

export interface ListAssociationsApiAssociateByMarketingEventIdRequest {
    /**
     * The internal id of the marketing event in HubSpot.
     * Defaults to: undefined
     * @type string
     * @memberof ListAssociationsApiassociateByMarketingEventId
     */
    marketingEventId: string
    /**
     * The ILS ID of the list.
     * Defaults to: undefined
     * @type string
     * @memberof ListAssociationsApiassociateByMarketingEventId
     */
    listId: string
}

export interface ListAssociationsApiDisassociateByExternalAccountAndEventIdsRequest {
    /**
     * The accountId that is associated with this marketing event in the external event application.
     * Defaults to: undefined
     * @type string
     * @memberof ListAssociationsApidisassociateByExternalAccountAndEventIds
     */
    externalAccountId: string
    /**
     * The id of the marketing event in the external event application.
     * Defaults to: undefined
     * @type string
     * @memberof ListAssociationsApidisassociateByExternalAccountAndEventIds
     */
    externalEventId: string
    /**
     * The ILS ID of the list.
     * Defaults to: undefined
     * @type string
     * @memberof ListAssociationsApidisassociateByExternalAccountAndEventIds
     */
    listId: string
}

export interface ListAssociationsApiDisassociateByMarketingEventIdRequest {
    /**
     * The internal id of the marketing event in HubSpot.
     * Defaults to: undefined
     * @type string
     * @memberof ListAssociationsApidisassociateByMarketingEventId
     */
    marketingEventId: string
    /**
     * The ILS ID of the list.
     * Defaults to: undefined
     * @type string
     * @memberof ListAssociationsApidisassociateByMarketingEventId
     */
    listId: string
}

export interface ListAssociationsApiGetAllByExternalAccountAndEventIdsRequest {
    /**
     * The accountId that is associated with this marketing event in the external event application
     * Defaults to: undefined
     * @type string
     * @memberof ListAssociationsApigetAllByExternalAccountAndEventIds
     */
    externalAccountId: string
    /**
     * The id of the marketing event in the external event application.
     * Defaults to: undefined
     * @type string
     * @memberof ListAssociationsApigetAllByExternalAccountAndEventIds
     */
    externalEventId: string
}

export interface ListAssociationsApiGetAllByMarketingEventIdRequest {
    /**
     * The internal id of the marketing event in HubSpot.
     * Defaults to: undefined
     * @type string
     * @memberof ListAssociationsApigetAllByMarketingEventId
     */
    marketingEventId: string
}

export class ObjectListAssociationsApi {
    private api: ObservableListAssociationsApi

    public constructor(configuration: Configuration, requestFactory?: ListAssociationsApiRequestFactory, responseProcessor?: ListAssociationsApiResponseProcessor) {
        this.api = new ObservableListAssociationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Associates a list with a marketing event by external account id, external event id, and ILS list id
     * Associate a list with a marketing event
     * @param param the request object
     */
    public associateByExternalAccountAndEventIdsWithHttpInfo(param: ListAssociationsApiAssociateByExternalAccountAndEventIdsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.associateByExternalAccountAndEventIdsWithHttpInfo(param.externalAccountId, param.externalEventId, param.listId,  options).toPromise();
    }

    /**
     * Associates a list with a marketing event by external account id, external event id, and ILS list id
     * Associate a list with a marketing event
     * @param param the request object
     */
    public associateByExternalAccountAndEventIds(param: ListAssociationsApiAssociateByExternalAccountAndEventIdsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.associateByExternalAccountAndEventIds(param.externalAccountId, param.externalEventId, param.listId,  options).toPromise();
    }

    /**
     * Associates a list with a marketing event by marketing event id and ILS list id
     * Associate a list with a marketing event
     * @param param the request object
     */
    public associateByMarketingEventIdWithHttpInfo(param: ListAssociationsApiAssociateByMarketingEventIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.associateByMarketingEventIdWithHttpInfo(param.marketingEventId, param.listId,  options).toPromise();
    }

    /**
     * Associates a list with a marketing event by marketing event id and ILS list id
     * Associate a list with a marketing event
     * @param param the request object
     */
    public associateByMarketingEventId(param: ListAssociationsApiAssociateByMarketingEventIdRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.associateByMarketingEventId(param.marketingEventId, param.listId,  options).toPromise();
    }

    /**
     * Disassociates a list from a marketing event by external account id, external event id, and ILS list id
     * Disassociate a list from a marketing event
     * @param param the request object
     */
    public disassociateByExternalAccountAndEventIdsWithHttpInfo(param: ListAssociationsApiDisassociateByExternalAccountAndEventIdsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.disassociateByExternalAccountAndEventIdsWithHttpInfo(param.externalAccountId, param.externalEventId, param.listId,  options).toPromise();
    }

    /**
     * Disassociates a list from a marketing event by external account id, external event id, and ILS list id
     * Disassociate a list from a marketing event
     * @param param the request object
     */
    public disassociateByExternalAccountAndEventIds(param: ListAssociationsApiDisassociateByExternalAccountAndEventIdsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.disassociateByExternalAccountAndEventIds(param.externalAccountId, param.externalEventId, param.listId,  options).toPromise();
    }

    /**
     * Disassociates a list from a marketing event by marketing event id and ILS list id
     * Disassociate a list from a marketing event
     * @param param the request object
     */
    public disassociateByMarketingEventIdWithHttpInfo(param: ListAssociationsApiDisassociateByMarketingEventIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.disassociateByMarketingEventIdWithHttpInfo(param.marketingEventId, param.listId,  options).toPromise();
    }

    /**
     * Disassociates a list from a marketing event by marketing event id and ILS list id
     * Disassociate a list from a marketing event
     * @param param the request object
     */
    public disassociateByMarketingEventId(param: ListAssociationsApiDisassociateByMarketingEventIdRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.disassociateByMarketingEventId(param.marketingEventId, param.listId,  options).toPromise();
    }

    /**
     * Gets lists associated with a marketing event by external account id and external event id
     * Get lists associated with a marketing event
     * @param param the request object
     */
    public getAllByExternalAccountAndEventIdsWithHttpInfo(param: ListAssociationsApiGetAllByExternalAccountAndEventIdsRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalPublicListNoPaging>> {
        return this.api.getAllByExternalAccountAndEventIdsWithHttpInfo(param.externalAccountId, param.externalEventId,  options).toPromise();
    }

    /**
     * Gets lists associated with a marketing event by external account id and external event id
     * Get lists associated with a marketing event
     * @param param the request object
     */
    public getAllByExternalAccountAndEventIds(param: ListAssociationsApiGetAllByExternalAccountAndEventIdsRequest, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalPublicListNoPaging> {
        return this.api.getAllByExternalAccountAndEventIds(param.externalAccountId, param.externalEventId,  options).toPromise();
    }

    /**
     * Gets lists associated with a marketing event by marketing event id
     * Get lists associated with a marketing event
     * @param param the request object
     */
    public getAllByMarketingEventIdWithHttpInfo(param: ListAssociationsApiGetAllByMarketingEventIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalPublicListNoPaging>> {
        return this.api.getAllByMarketingEventIdWithHttpInfo(param.marketingEventId,  options).toPromise();
    }

    /**
     * Gets lists associated with a marketing event by marketing event id
     * Get lists associated with a marketing event
     * @param param the request object
     */
    public getAllByMarketingEventId(param: ListAssociationsApiGetAllByMarketingEventIdRequest, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalPublicListNoPaging> {
        return this.api.getAllByMarketingEventId(param.marketingEventId,  options).toPromise();
    }

}

import { ObservableRetrieveParticipantStateApi } from "./ObservableAPI";
import { RetrieveParticipantStateApiRequestFactory, RetrieveParticipantStateApiResponseProcessor} from "../apis/RetrieveParticipantStateApi";

export interface RetrieveParticipantStateApiGetParticipationsBreakdownByContactIdRequest {
    /**
     * The identifier of the Contact. It may be email or internal id.
     * Defaults to: undefined
     * @type string
     * @memberof RetrieveParticipantStateApigetParticipationsBreakdownByContactId
     */
    contactIdentifier: string
    /**
     * The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW
     * Defaults to: undefined
     * @type string
     * @memberof RetrieveParticipantStateApigetParticipationsBreakdownByContactId
     */
    state?: string
    /**
     * The limit for response size. The default value is 10, the max number is 100
     * Defaults to: 10
     * @type number
     * @memberof RetrieveParticipantStateApigetParticipationsBreakdownByContactId
     */
    limit?: number
    /**
     * The cursor indicating the position of the last retrieved item.
     * Defaults to: undefined
     * @type string
     * @memberof RetrieveParticipantStateApigetParticipationsBreakdownByContactId
     */
    after?: string
}

export interface RetrieveParticipantStateApiGetParticipationsBreakdownByExternalEventIdRequest {
    /**
     * The accountId that is associated with this marketing event in the external event application.
     * Defaults to: undefined
     * @type string
     * @memberof RetrieveParticipantStateApigetParticipationsBreakdownByExternalEventId
     */
    externalAccountId: string
    /**
     * The id of the marketing event in the external event application.
     * Defaults to: undefined
     * @type string
     * @memberof RetrieveParticipantStateApigetParticipationsBreakdownByExternalEventId
     */
    externalEventId: string
    /**
     * The identifier of the Contact. It may be email or internal id.
     * Defaults to: undefined
     * @type string
     * @memberof RetrieveParticipantStateApigetParticipationsBreakdownByExternalEventId
     */
    contactIdentifier?: string
    /**
     * The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW
     * Defaults to: undefined
     * @type string
     * @memberof RetrieveParticipantStateApigetParticipationsBreakdownByExternalEventId
     */
    state?: string
    /**
     * The limit for response size. The default value is 10, the max number is 100
     * Defaults to: 10
     * @type number
     * @memberof RetrieveParticipantStateApigetParticipationsBreakdownByExternalEventId
     */
    limit?: number
    /**
     * The cursor indicating the position of the last retrieved item.
     * Defaults to: undefined
     * @type string
     * @memberof RetrieveParticipantStateApigetParticipationsBreakdownByExternalEventId
     */
    after?: string
}

export interface RetrieveParticipantStateApiGetParticipationsBreakdownByMarketingEventIdRequest {
    /**
     * The internal id of the marketing event in HubSpot.
     * Defaults to: undefined
     * @type number
     * @memberof RetrieveParticipantStateApigetParticipationsBreakdownByMarketingEventId
     */
    marketingEventId: number
    /**
     * The identifier of the Contact. It may be email or internal id.
     * Defaults to: undefined
     * @type string
     * @memberof RetrieveParticipantStateApigetParticipationsBreakdownByMarketingEventId
     */
    contactIdentifier?: string
    /**
     * The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW
     * Defaults to: undefined
     * @type string
     * @memberof RetrieveParticipantStateApigetParticipationsBreakdownByMarketingEventId
     */
    state?: string
    /**
     * The limit for response size. The default value is 10, the max number is 100
     * Defaults to: 10
     * @type number
     * @memberof RetrieveParticipantStateApigetParticipationsBreakdownByMarketingEventId
     */
    limit?: number
    /**
     * The cursor indicating the position of the last retrieved item.
     * Defaults to: undefined
     * @type string
     * @memberof RetrieveParticipantStateApigetParticipationsBreakdownByMarketingEventId
     */
    after?: string
}

export interface RetrieveParticipantStateApiGetParticipationsCountersByEventExternalIdRequest {
    /**
     * The accountId that is associated with this marketing event in the external event application.
     * Defaults to: undefined
     * @type string
     * @memberof RetrieveParticipantStateApigetParticipationsCountersByEventExternalId
     */
    externalAccountId: string
    /**
     * The id of the marketing event in the external event application.
     * Defaults to: undefined
     * @type string
     * @memberof RetrieveParticipantStateApigetParticipationsCountersByEventExternalId
     */
    externalEventId: string
}

export interface RetrieveParticipantStateApiGetParticipationsCountersByMarketingEventIdRequest {
    /**
     * The internal id of the marketing event in HubSpot.
     * Defaults to: undefined
     * @type number
     * @memberof RetrieveParticipantStateApigetParticipationsCountersByMarketingEventId
     */
    marketingEventId: number
}

export class ObjectRetrieveParticipantStateApi {
    private api: ObservableRetrieveParticipantStateApi

    public constructor(configuration: Configuration, requestFactory?: RetrieveParticipantStateApiRequestFactory, responseProcessor?: RetrieveParticipantStateApiResponseProcessor) {
        this.api = new ObservableRetrieveParticipantStateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Read Contact\'s participations by identifier - email or internal id.
     * Read participations breakdown by Contact identifier
     * @param param the request object
     */
    public getParticipationsBreakdownByContactIdWithHttpInfo(param: RetrieveParticipantStateApiGetParticipationsBreakdownByContactIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalParticipationBreakdownForwardPaging>> {
        return this.api.getParticipationsBreakdownByContactIdWithHttpInfo(param.contactIdentifier, param.state, param.limit, param.after,  options).toPromise();
    }

    /**
     * Read Contact\'s participations by identifier - email or internal id.
     * Read participations breakdown by Contact identifier
     * @param param the request object
     */
    public getParticipationsBreakdownByContactId(param: RetrieveParticipantStateApiGetParticipationsBreakdownByContactIdRequest, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalParticipationBreakdownForwardPaging> {
        return this.api.getParticipationsBreakdownByContactId(param.contactIdentifier, param.state, param.limit, param.after,  options).toPromise();
    }

    /**
     * Read Marketing event\'s participations breakdown with optional filters by externalAccountId and externalEventId pair.
     * Read participations breakdown by Marketing Event external identifier
     * @param param the request object
     */
    public getParticipationsBreakdownByExternalEventIdWithHttpInfo(param: RetrieveParticipantStateApiGetParticipationsBreakdownByExternalEventIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalParticipationBreakdownForwardPaging>> {
        return this.api.getParticipationsBreakdownByExternalEventIdWithHttpInfo(param.externalAccountId, param.externalEventId, param.contactIdentifier, param.state, param.limit, param.after,  options).toPromise();
    }

    /**
     * Read Marketing event\'s participations breakdown with optional filters by externalAccountId and externalEventId pair.
     * Read participations breakdown by Marketing Event external identifier
     * @param param the request object
     */
    public getParticipationsBreakdownByExternalEventId(param: RetrieveParticipantStateApiGetParticipationsBreakdownByExternalEventIdRequest, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalParticipationBreakdownForwardPaging> {
        return this.api.getParticipationsBreakdownByExternalEventId(param.externalAccountId, param.externalEventId, param.contactIdentifier, param.state, param.limit, param.after,  options).toPromise();
    }

    /**
     * Read Marketing event\'s participations breakdown with optional filters by internal identifier marketingEventId.
     * Read participations breakdown by Marketing Event internal identifier
     * @param param the request object
     */
    public getParticipationsBreakdownByMarketingEventIdWithHttpInfo(param: RetrieveParticipantStateApiGetParticipationsBreakdownByMarketingEventIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalParticipationBreakdownForwardPaging>> {
        return this.api.getParticipationsBreakdownByMarketingEventIdWithHttpInfo(param.marketingEventId, param.contactIdentifier, param.state, param.limit, param.after,  options).toPromise();
    }

    /**
     * Read Marketing event\'s participations breakdown with optional filters by internal identifier marketingEventId.
     * Read participations breakdown by Marketing Event internal identifier
     * @param param the request object
     */
    public getParticipationsBreakdownByMarketingEventId(param: RetrieveParticipantStateApiGetParticipationsBreakdownByMarketingEventIdRequest, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalParticipationBreakdownForwardPaging> {
        return this.api.getParticipationsBreakdownByMarketingEventId(param.marketingEventId, param.contactIdentifier, param.state, param.limit, param.after,  options).toPromise();
    }

    /**
     * Read Marketing event\'s participations counters by externalAccountId and externalEventId pair.
     * Read participations counters by Marketing Event external identifier
     * @param param the request object
     */
    public getParticipationsCountersByEventExternalIdWithHttpInfo(param: RetrieveParticipantStateApiGetParticipationsCountersByEventExternalIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<AttendanceCounters>> {
        return this.api.getParticipationsCountersByEventExternalIdWithHttpInfo(param.externalAccountId, param.externalEventId,  options).toPromise();
    }

    /**
     * Read Marketing event\'s participations counters by externalAccountId and externalEventId pair.
     * Read participations counters by Marketing Event external identifier
     * @param param the request object
     */
    public getParticipationsCountersByEventExternalId(param: RetrieveParticipantStateApiGetParticipationsCountersByEventExternalIdRequest, options?: ConfigurationOptions): Promise<AttendanceCounters> {
        return this.api.getParticipationsCountersByEventExternalId(param.externalAccountId, param.externalEventId,  options).toPromise();
    }

    /**
     * Read Marketing event\'s participations counters by internal identifier marketingEventId.
     * Read participations counters by Marketing Event internal identifier
     * @param param the request object
     */
    public getParticipationsCountersByMarketingEventIdWithHttpInfo(param: RetrieveParticipantStateApiGetParticipationsCountersByMarketingEventIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<AttendanceCounters>> {
        return this.api.getParticipationsCountersByMarketingEventIdWithHttpInfo(param.marketingEventId,  options).toPromise();
    }

    /**
     * Read Marketing event\'s participations counters by internal identifier marketingEventId.
     * Read participations counters by Marketing Event internal identifier
     * @param param the request object
     */
    public getParticipationsCountersByMarketingEventId(param: RetrieveParticipantStateApiGetParticipationsCountersByMarketingEventIdRequest, options?: ConfigurationOptions): Promise<AttendanceCounters> {
        return this.api.getParticipationsCountersByMarketingEventId(param.marketingEventId,  options).toPromise();
    }

}

import { ObservableSettingsApi } from "./ObservableAPI";
import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";

export interface SettingsApiGetAllRequest {
    /**
     * The id of the application to retrieve the settings for.
     * Defaults to: undefined
     * @type number
     * @memberof SettingsApigetAll
     */
    appId: number
}

export interface SettingsApiUpdateRequest {
    /**
     * The id of the application to update the settings for.
     * Defaults to: undefined
     * @type number
     * @memberof SettingsApiupdate
     */
    appId: number
    /**
     * 
     * @type EventDetailSettingsUrl
     * @memberof SettingsApiupdate
     */
    eventDetailSettingsUrl: EventDetailSettingsUrl
}

export class ObjectSettingsApi {
    private api: ObservableSettingsApi

    public constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve the current settings for the application.
     * Retrieve the application settings
     * @param param the request object
     */
    public getAllWithHttpInfo(param: SettingsApiGetAllRequest, options?: ConfigurationOptions): Promise<HttpInfo<EventDetailSettings>> {
        return this.api.getAllWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Retrieve the current settings for the application.
     * Retrieve the application settings
     * @param param the request object
     */
    public getAll(param: SettingsApiGetAllRequest, options?: ConfigurationOptions): Promise<EventDetailSettings> {
        return this.api.getAll(param.appId,  options).toPromise();
    }

    /**
     * Create or update the current settings for the application.
     * Update the application settings
     * @param param the request object
     */
    public updateWithHttpInfo(param: SettingsApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<EventDetailSettings>> {
        return this.api.updateWithHttpInfo(param.appId, param.eventDetailSettingsUrl,  options).toPromise();
    }

    /**
     * Create or update the current settings for the application.
     * Update the application settings
     * @param param the request object
     */
    public update(param: SettingsApiUpdateRequest, options?: ConfigurationOptions): Promise<EventDetailSettings> {
        return this.api.update(param.appId, param.eventDetailSettingsUrl,  options).toPromise();
    }

}

import { ObservableSubscriberStateChangesApi } from "./ObservableAPI";
import { SubscriberStateChangesApiRequestFactory, SubscriberStateChangesApiResponseProcessor} from "../apis/SubscriberStateChangesApi";

export interface SubscriberStateChangesApiUpsertByContactEmailRequest {
    /**
     * The id of the marketing event in the external event application
     * Defaults to: undefined
     * @type string
     * @memberof SubscriberStateChangesApiupsertByContactEmail
     */
    externalEventId: string
    /**
     * The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * Defaults to: undefined
     * @type string
     * @memberof SubscriberStateChangesApiupsertByContactEmail
     */
    subscriberState: string
    /**
     * The accountId that is associated with this marketing event in the external event application
     * Defaults to: undefined
     * @type string
     * @memberof SubscriberStateChangesApiupsertByContactEmail
     */
    externalAccountId: string
    /**
     * 
     * @type BatchInputMarketingEventEmailSubscriber
     * @memberof SubscriberStateChangesApiupsertByContactEmail
     */
    batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber
}

export interface SubscriberStateChangesApiUpsertByContactIdRequest {
    /**
     * The id of the marketing event in the external event application
     * Defaults to: undefined
     * @type string
     * @memberof SubscriberStateChangesApiupsertByContactId
     */
    externalEventId: string
    /**
     * The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * Defaults to: undefined
     * @type string
     * @memberof SubscriberStateChangesApiupsertByContactId
     */
    subscriberState: string
    /**
     * The accountId that is associated with this marketing event in the external event application
     * Defaults to: undefined
     * @type string
     * @memberof SubscriberStateChangesApiupsertByContactId
     */
    externalAccountId: string
    /**
     * 
     * @type BatchInputMarketingEventSubscriber
     * @memberof SubscriberStateChangesApiupsertByContactId
     */
    batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber
}

export class ObjectSubscriberStateChangesApi {
    private api: ObservableSubscriberStateChangesApi

    public constructor(configuration: Configuration, requestFactory?: SubscriberStateChangesApiRequestFactory, responseProcessor?: SubscriberStateChangesApiResponseProcessor) {
        this.api = new ObservableSubscriberStateChangesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using contact email addresses. Note that the contact must already exist in HubSpot; a contact will not be created. The contactProperties field is used only when creating a new contact. These properties will not update existing contacts. 
     * Record a subscriber state by contact email
     * @param param the request object
     */
    public upsertByContactEmailWithHttpInfo(param: SubscriberStateChangesApiUpsertByContactEmailRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.upsertByContactEmailWithHttpInfo(param.externalEventId, param.subscriberState, param.externalAccountId, param.batchInputMarketingEventEmailSubscriber,  options).toPromise();
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using contact email addresses. Note that the contact must already exist in HubSpot; a contact will not be created. The contactProperties field is used only when creating a new contact. These properties will not update existing contacts. 
     * Record a subscriber state by contact email
     * @param param the request object
     */
    public upsertByContactEmail(param: SubscriberStateChangesApiUpsertByContactEmailRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.upsertByContactEmail(param.externalEventId, param.subscriberState, param.externalAccountId, param.batchInputMarketingEventEmailSubscriber,  options).toPromise();
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using HubSpot contact IDs. Note that the contact must already exist in HubSpot; a contact will not be created.
     * Record a subscriber state by contact ID
     * @param param the request object
     */
    public upsertByContactIdWithHttpInfo(param: SubscriberStateChangesApiUpsertByContactIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.upsertByContactIdWithHttpInfo(param.externalEventId, param.subscriberState, param.externalAccountId, param.batchInputMarketingEventSubscriber,  options).toPromise();
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using HubSpot contact IDs. Note that the contact must already exist in HubSpot; a contact will not be created.
     * Record a subscriber state by contact ID
     * @param param the request object
     */
    public upsertByContactId(param: SubscriberStateChangesApiUpsertByContactIdRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.upsertByContactId(param.externalEventId, param.subscriberState, param.externalAccountId, param.batchInputMarketingEventSubscriber,  options).toPromise();
    }

}
