import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

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
import { ObservableAddEventAttendeesApi } from './ObservableAPI';

import { AddEventAttendeesApiRequestFactory, AddEventAttendeesApiResponseProcessor} from "../apis/AddEventAttendeesApi";
export class PromiseAddEventAttendeesApi {
    private api: ObservableAddEventAttendeesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AddEventAttendeesApiRequestFactory,
        responseProcessor?: AddEventAttendeesApiResponseProcessor
    ) {
        this.api = new ObservableAddEventAttendeesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their email addresses.  If a contact does not exist, it will be automatically created. The contactProperties field is used exclusively for creating new contacts and will not update properties of existing contacts.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by Email with Marketing Event External Ids
     * @param externalEventId The id of the marketing event in the external event application
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventEmailSubscriber
     * @param [externalAccountId] The accountId that is associated with this marketing event in the external event application
     */
    public recordByContactEmailsWithHttpInfo(externalEventId: string, subscriberState: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, externalAccountId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseSubscriberEmailResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.recordByContactEmailsWithHttpInfo(externalEventId, subscriberState, batchInputMarketingEventEmailSubscriber, externalAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their email addresses.  If a contact does not exist, it will be automatically created. The contactProperties field is used exclusively for creating new contacts and will not update properties of existing contacts.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by Email with Marketing Event External Ids
     * @param externalEventId The id of the marketing event in the external event application
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventEmailSubscriber
     * @param [externalAccountId] The accountId that is associated with this marketing event in the external event application
     */
    public recordByContactEmails(externalEventId: string, subscriberState: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, externalAccountId?: string, _options?: PromiseConfigurationOptions): Promise<BatchResponseSubscriberEmailResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.recordByContactEmails(externalEventId, subscriberState, batchInputMarketingEventEmailSubscriber, externalAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their HubSpot contact IDs.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by ContactId with Marketing Event Object Id
     * @param objectId The internal id of the marketing event in HubSpot
     * @param subscriberState The attendance state value. It may be \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;
     * @param batchInputMarketingEventSubscriber
     */
    public recordByContactIdWithHttpInfo(objectId: string, subscriberState: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseSubscriberVidResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.recordByContactIdWithHttpInfo(objectId, subscriberState, batchInputMarketingEventSubscriber, observableOptions);
        return result.toPromise();
    }

    /**
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their HubSpot contact IDs.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by ContactId with Marketing Event Object Id
     * @param objectId The internal id of the marketing event in HubSpot
     * @param subscriberState The attendance state value. It may be \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;
     * @param batchInputMarketingEventSubscriber
     */
    public recordByContactId(objectId: string, subscriberState: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, _options?: PromiseConfigurationOptions): Promise<BatchResponseSubscriberVidResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.recordByContactId(objectId, subscriberState, batchInputMarketingEventSubscriber, observableOptions);
        return result.toPromise();
    }

    /**
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their HubSpot contact IDs.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by ContactId with Marketing Event External Ids
     * @param externalEventId The id of the marketing event in the external event application
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventSubscriber
     * @param [externalAccountId] The accountId that is associated with this marketing event in the external event application
     */
    public recordByContactIdsWithHttpInfo(externalEventId: string, subscriberState: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, externalAccountId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseSubscriberVidResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.recordByContactIdsWithHttpInfo(externalEventId, subscriberState, batchInputMarketingEventSubscriber, externalAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their HubSpot contact IDs.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by ContactId with Marketing Event External Ids
     * @param externalEventId The id of the marketing event in the external event application
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param batchInputMarketingEventSubscriber
     * @param [externalAccountId] The accountId that is associated with this marketing event in the external event application
     */
    public recordByContactIds(externalEventId: string, subscriberState: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, externalAccountId?: string, _options?: PromiseConfigurationOptions): Promise<BatchResponseSubscriberVidResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.recordByContactIds(externalEventId, subscriberState, batchInputMarketingEventSubscriber, externalAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their email addresses.  If a contact does not exist, it will be automatically created. The contactProperties field is used exclusively for creating new contacts and will not update properties of existing contacts.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by Email with Marketing Event Object Id
     * @param objectId The internal ID of the marketing event in HubSpot
     * @param subscriberState The attendance state value. It may be \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;
     * @param batchInputMarketingEventEmailSubscriber
     */
    public recordByEmailWithHttpInfo(objectId: string, subscriberState: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseSubscriberEmailResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.recordByEmailWithHttpInfo(objectId, subscriberState, batchInputMarketingEventEmailSubscriber, observableOptions);
        return result.toPromise();
    }

    /**
     * Records the participation of multiple HubSpot contacts in a Marketing Event using their email addresses.  If a contact does not exist, it will be automatically created. The contactProperties field is used exclusively for creating new contacts and will not update properties of existing contacts.  Additional Functionality: - Adds a timeline event to the contacts.  Allowed Properties: For the state \"attend\": - joinedAt - leftAt
     * Record Participants by Email with Marketing Event Object Id
     * @param objectId The internal ID of the marketing event in HubSpot
     * @param subscriberState The attendance state value. It may be \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;
     * @param batchInputMarketingEventEmailSubscriber
     */
    public recordByEmail(objectId: string, subscriberState: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, _options?: PromiseConfigurationOptions): Promise<BatchResponseSubscriberEmailResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.recordByEmail(objectId, subscriberState, batchInputMarketingEventEmailSubscriber, observableOptions);
        return result.toPromise();
    }


}



import { ObservableBasicApi } from './ObservableAPI';

import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";
export class PromiseBasicApi {
    private api: ObservableBasicApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicApiRequestFactory,
        responseProcessor?: BasicApiResponseProcessor
    ) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes the existing Marketing Event with the specified externalAccountId, externalEventId, if it exists.  Only Marketing Events created by the same app can be deleted.
     * Delete Marketing Event by External Ids
     * @param externalEventId The id of the marketing event in the external event application
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     */
    public archiveWithHttpInfo(externalEventId: string, externalAccountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveWithHttpInfo(externalEventId, externalAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the existing Marketing Event with the specified externalAccountId, externalEventId, if it exists.  Only Marketing Events created by the same app can be deleted.
     * Delete Marketing Event by External Ids
     * @param externalEventId The id of the marketing event in the external event application
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     */
    public archive(externalEventId: string, externalAccountId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archive(externalEventId, externalAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the existing Marketing Event with the specified objectId, if it exists.
     * Delete Marketing Event by objectId
     * @param objectId The internal ID of the marketing event in HubSpot
     */
    public archiveByObjectIdWithHttpInfo(objectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveByObjectIdWithHttpInfo(objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the existing Marketing Event with the specified objectId, if it exists.
     * Delete Marketing Event by objectId
     * @param objectId The internal ID of the marketing event in HubSpot
     */
    public archiveByObjectId(objectId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveByObjectId(objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new marketing event in HubSpot
     * Create a marketing event
     * @param marketingEventCreateRequestParams
     */
    public createWithHttpInfo(marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MarketingEventDefaultResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createWithHttpInfo(marketingEventCreateRequestParams, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a new marketing event in HubSpot
     * Create a marketing event
     * @param marketingEventCreateRequestParams
     */
    public create(marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: PromiseConfigurationOptions): Promise<MarketingEventDefaultResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.create(marketingEventCreateRequestParams, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns all Marketing Events available on the portal, along with their properties, regardless of whether they were created manually or through the application.  The marketing events returned by this endpoint are sorted by objectId.
     * Get all marketing event
     * @param [after] The cursor indicating the position of the last retrieved item.
     * @param [limit] The limit for response size. The default value is 10, the max number is 100
     */
    public getAllWithHttpInfo(after?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllWithHttpInfo(after, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns all Marketing Events available on the portal, along with their properties, regardless of whether they were created manually or through the application.  The marketing events returned by this endpoint are sorted by objectId.
     * Get all marketing event
     * @param [after] The cursor indicating the position of the last retrieved item.
     * @param [limit] The limit for response size. The default value is 10, the max number is 100
     */
    public getAll(after?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<CollectionResponseMarketingEventPublicReadResponseV2ForwardPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAll(after, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the details of a Marketing Event with the specified objectId, if it exists.
     * Get Marketing Event by objectId
     * @param objectId The internal ID of the marketing event in HubSpot
     */
    public getByObjectIdWithHttpInfo(objectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MarketingEventPublicReadResponseV2>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getByObjectIdWithHttpInfo(objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the details of a Marketing Event with the specified objectId, if it exists.
     * Get Marketing Event by objectId
     * @param objectId The internal ID of the marketing event in HubSpot
     */
    public getByObjectId(objectId: string, _options?: PromiseConfigurationOptions): Promise<MarketingEventPublicReadResponseV2> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getByObjectId(objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the details of a Marketing Event with the specified externalAccountId, externalEventId, if it exists.  Only Marketing Events created by the same app making the request can be retrieved.
     * Get Marketing Event by External IDs
     * @param externalEventId The id of the marketing event in the external event application
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     */
    public getDetailsWithHttpInfo(externalEventId: string, externalAccountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MarketingEventPublicReadResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getDetailsWithHttpInfo(externalEventId, externalAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the details of a Marketing Event with the specified externalAccountId, externalEventId, if it exists.  Only Marketing Events created by the same app making the request can be retrieved.
     * Get Marketing Event by External IDs
     * @param externalEventId The id of the marketing event in the external event application
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     */
    public getDetails(externalEventId: string, externalAccountId: string, _options?: PromiseConfigurationOptions): Promise<MarketingEventPublicReadResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getDetails(externalEventId, externalAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the details of an existing Marketing Event identified by its externalAccountId, externalEventId if it exists.  Only Marketing Events created by the same app can be updated.
     * Update Marketing Event by External IDs
     * @param externalEventId The id of the marketing event in the external event application
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     * @param marketingEventUpdateRequestParams
     */
    public updateWithHttpInfo(externalEventId: string, externalAccountId: string, marketingEventUpdateRequestParams: MarketingEventUpdateRequestParams, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MarketingEventPublicDefaultResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateWithHttpInfo(externalEventId, externalAccountId, marketingEventUpdateRequestParams, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the details of an existing Marketing Event identified by its externalAccountId, externalEventId if it exists.  Only Marketing Events created by the same app can be updated.
     * Update Marketing Event by External IDs
     * @param externalEventId The id of the marketing event in the external event application
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     * @param marketingEventUpdateRequestParams
     */
    public update(externalEventId: string, externalAccountId: string, marketingEventUpdateRequestParams: MarketingEventUpdateRequestParams, _options?: PromiseConfigurationOptions): Promise<MarketingEventPublicDefaultResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.update(externalEventId, externalAccountId, marketingEventUpdateRequestParams, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the details of an existing Marketing Event identified by its objectId, if it exists.
     * Update Marketing Event by objectId
     * @param objectId The internal ID of the marketing event in HubSpot
     * @param marketingEventPublicUpdateRequestV2
     */
    public updateByObjectIdWithHttpInfo(objectId: string, marketingEventPublicUpdateRequestV2: MarketingEventPublicUpdateRequestV2, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MarketingEventPublicDefaultResponseV2>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateByObjectIdWithHttpInfo(objectId, marketingEventPublicUpdateRequestV2, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates the details of an existing Marketing Event identified by its objectId, if it exists.
     * Update Marketing Event by objectId
     * @param objectId The internal ID of the marketing event in HubSpot
     * @param marketingEventPublicUpdateRequestV2
     */
    public updateByObjectId(objectId: string, marketingEventPublicUpdateRequestV2: MarketingEventPublicUpdateRequestV2, _options?: PromiseConfigurationOptions): Promise<MarketingEventPublicDefaultResponseV2> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateByObjectId(objectId, marketingEventPublicUpdateRequestV2, observableOptions);
        return result.toPromise();
    }

    /**
     * Upserts a marketing event If there is an existing marketing event with the specified ID, it will be updated; otherwise a new event will be created.
     * Create or update a marketing event
     * @param externalEventId The id of the marketing event in the external event application
     * @param marketingEventCreateRequestParams
     */
    public upsertWithHttpInfo(externalEventId: string, marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MarketingEventPublicDefaultResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.upsertWithHttpInfo(externalEventId, marketingEventCreateRequestParams, observableOptions);
        return result.toPromise();
    }

    /**
     * Upserts a marketing event If there is an existing marketing event with the specified ID, it will be updated; otherwise a new event will be created.
     * Create or update a marketing event
     * @param externalEventId The id of the marketing event in the external event application
     * @param marketingEventCreateRequestParams
     */
    public upsert(externalEventId: string, marketingEventCreateRequestParams: MarketingEventCreateRequestParams, _options?: PromiseConfigurationOptions): Promise<MarketingEventPublicDefaultResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.upsert(externalEventId, marketingEventCreateRequestParams, observableOptions);
        return result.toPromise();
    }


}



import { ObservableBatchApi } from './ObservableAPI';

import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";
export class PromiseBatchApi {
    private api: ObservableBatchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BatchApiRequestFactory,
        responseProcessor?: BatchApiResponseProcessor
    ) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes multiple Marketing Events based on externalAccountId, externalEventId, and appId.  Only Marketing Events created by the same apps will be deleted; events from other apps cannot be removed by this endpoint. 
     * Delete Multiple Marketing Events by External Ids
     * @param batchInputMarketingEventExternalUniqueIdentifier
     */
    public archiveWithHttpInfo(batchInputMarketingEventExternalUniqueIdentifier: BatchInputMarketingEventExternalUniqueIdentifier, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveWithHttpInfo(batchInputMarketingEventExternalUniqueIdentifier, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes multiple Marketing Events based on externalAccountId, externalEventId, and appId.  Only Marketing Events created by the same apps will be deleted; events from other apps cannot be removed by this endpoint. 
     * Delete Multiple Marketing Events by External Ids
     * @param batchInputMarketingEventExternalUniqueIdentifier
     */
    public archive(batchInputMarketingEventExternalUniqueIdentifier: BatchInputMarketingEventExternalUniqueIdentifier, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archive(batchInputMarketingEventExternalUniqueIdentifier, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes multiple Marketing Events from the portal based on their objectId, if they exist.  Responses: 204: Returned if all specified Marketing Events were successfully deleted. 207: Returned if some objectIds did not correspond to any existing Marketing Events.
     * Delete Multiple Marketing Events by ObjectId
     * @param batchInputMarketingEventPublicObjectIdDeleteRequest
     */
    public archiveByObjectIdWithHttpInfo(batchInputMarketingEventPublicObjectIdDeleteRequest: BatchInputMarketingEventPublicObjectIdDeleteRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveByObjectIdWithHttpInfo(batchInputMarketingEventPublicObjectIdDeleteRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes multiple Marketing Events from the portal based on their objectId, if they exist.  Responses: 204: Returned if all specified Marketing Events were successfully deleted. 207: Returned if some objectIds did not correspond to any existing Marketing Events.
     * Delete Multiple Marketing Events by ObjectId
     * @param batchInputMarketingEventPublicObjectIdDeleteRequest
     */
    public archiveByObjectId(batchInputMarketingEventPublicObjectIdDeleteRequest: BatchInputMarketingEventPublicObjectIdDeleteRequest, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveByObjectId(batchInputMarketingEventPublicObjectIdDeleteRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates multiple Marketing Events on the portal based on their objectId, if they exist.
     * Update Multiple Marketing Events by ObjectId
     * @param batchInputMarketingEventPublicUpdateRequestFullV2
     */
    public updateByObjectIdWithHttpInfo(batchInputMarketingEventPublicUpdateRequestFullV2: BatchInputMarketingEventPublicUpdateRequestFullV2, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseMarketingEventPublicDefaultResponseV2WithErrors | BatchResponseMarketingEventPublicDefaultResponseV2>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateByObjectIdWithHttpInfo(batchInputMarketingEventPublicUpdateRequestFullV2, observableOptions);
        return result.toPromise();
    }

    /**
     * Updates multiple Marketing Events on the portal based on their objectId, if they exist.
     * Update Multiple Marketing Events by ObjectId
     * @param batchInputMarketingEventPublicUpdateRequestFullV2
     */
    public updateByObjectId(batchInputMarketingEventPublicUpdateRequestFullV2: BatchInputMarketingEventPublicUpdateRequestFullV2, _options?: PromiseConfigurationOptions): Promise<BatchResponseMarketingEventPublicDefaultResponseV2WithErrors | BatchResponseMarketingEventPublicDefaultResponseV2> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateByObjectId(batchInputMarketingEventPublicUpdateRequestFullV2, observableOptions);
        return result.toPromise();
    }

    /**
     * Upserts multiple Marketing Events. If a Marketing Event with the specified ID already exists, it will be updated; otherwise, a new event will be created.  Only Marketing Events originally created by the same app can be updated.
     * Create or Update Multiple Marketing Events
     * @param batchInputMarketingEventCreateRequestParams
     */
    public upsertWithHttpInfo(batchInputMarketingEventCreateRequestParams: BatchInputMarketingEventCreateRequestParams, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseMarketingEventPublicDefaultResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.upsertWithHttpInfo(batchInputMarketingEventCreateRequestParams, observableOptions);
        return result.toPromise();
    }

    /**
     * Upserts multiple Marketing Events. If a Marketing Event with the specified ID already exists, it will be updated; otherwise, a new event will be created.  Only Marketing Events originally created by the same app can be updated.
     * Create or Update Multiple Marketing Events
     * @param batchInputMarketingEventCreateRequestParams
     */
    public upsert(batchInputMarketingEventCreateRequestParams: BatchInputMarketingEventCreateRequestParams, _options?: PromiseConfigurationOptions): Promise<BatchResponseMarketingEventPublicDefaultResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.upsert(batchInputMarketingEventCreateRequestParams, observableOptions);
        return result.toPromise();
    }


}



import { ObservableChangePropertyApi } from './ObservableAPI';

import { ChangePropertyApiRequestFactory, ChangePropertyApiResponseProcessor} from "../apis/ChangePropertyApi";
export class PromiseChangePropertyApi {
    private api: ObservableChangePropertyApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ChangePropertyApiRequestFactory,
        responseProcessor?: ChangePropertyApiResponseProcessor
    ) {
        this.api = new ObservableChangePropertyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Mark a marketing event as cancelled.
     * Mark a marketing event as cancelled
     * @param externalEventId The id of the marketing event in the external event application
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     */
    public cancelWithHttpInfo(externalEventId: string, externalAccountId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MarketingEventDefaultResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.cancelWithHttpInfo(externalEventId, externalAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Mark a marketing event as cancelled.
     * Mark a marketing event as cancelled
     * @param externalEventId The id of the marketing event in the external event application
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     */
    public cancel(externalEventId: string, externalAccountId: string, _options?: PromiseConfigurationOptions): Promise<MarketingEventDefaultResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.cancel(externalEventId, externalAccountId, observableOptions);
        return result.toPromise();
    }

    /**
     * Mark a marketing event as completed
     * Mark a marketing event as completed
     * @param externalEventId The id of the marketing event in the external event application.
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param marketingEventCompleteRequestParams
     */
    public completeWithHttpInfo(externalEventId: string, externalAccountId: string, marketingEventCompleteRequestParams: MarketingEventCompleteRequestParams, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MarketingEventDefaultResponse>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.completeWithHttpInfo(externalEventId, externalAccountId, marketingEventCompleteRequestParams, observableOptions);
        return result.toPromise();
    }

    /**
     * Mark a marketing event as completed
     * Mark a marketing event as completed
     * @param externalEventId The id of the marketing event in the external event application.
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param marketingEventCompleteRequestParams
     */
    public complete(externalEventId: string, externalAccountId: string, marketingEventCompleteRequestParams: MarketingEventCompleteRequestParams, _options?: PromiseConfigurationOptions): Promise<MarketingEventDefaultResponse> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.complete(externalEventId, externalAccountId, marketingEventCompleteRequestParams, observableOptions);
        return result.toPromise();
    }


}



import { ObservableIdentifiersApi } from './ObservableAPI';

import { IdentifiersApiRequestFactory, IdentifiersApiResponseProcessor} from "../apis/IdentifiersApi";
export class PromiseIdentifiersApi {
    private api: ObservableIdentifiersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: IdentifiersApiRequestFactory,
        responseProcessor?: IdentifiersApiResponseProcessor
    ) {
        this.api = new ObservableIdentifiersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves Marketing Events where the externalEventId matches the value provided in the request, limited to events created by the app making the request.  Marketing Events created by other apps will not be included in the results.
     * Find App-Specific Marketing Events by External Event Id
     * @param q The id of the marketing event in the external event application (externalEventId)
     */
    public doSearchWithHttpInfo(q: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseSearchPublicResponseWrapperNoPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.doSearchWithHttpInfo(q, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves Marketing Events where the externalEventId matches the value provided in the request, limited to events created by the app making the request.  Marketing Events created by other apps will not be included in the results.
     * Find App-Specific Marketing Events by External Event Id
     * @param q The id of the marketing event in the external event application (externalEventId)
     */
    public doSearch(q: string, _options?: PromiseConfigurationOptions): Promise<CollectionResponseSearchPublicResponseWrapperNoPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.doSearch(q, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint searches the portal for all Marketing Events whose externalEventId matches the value provided in the request.  It retrieves the objectId and additional event details for each matching Marketing Event.  Since multiple Marketing Events can have the same externalEventId, the endpoint returns all matching results.  Note: Marketing Events become searchable by externalEventId a few minutes after creation.
     * Find Marketing Events by External Event Id
     * @param externalEventId The id of the marketing event in the external event application.
     */
    public searchPortalEventsWithHttpInfo(externalEventId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.searchPortalEventsWithHttpInfo(externalEventId, observableOptions);
        return result.toPromise();
    }

    /**
     * This endpoint searches the portal for all Marketing Events whose externalEventId matches the value provided in the request.  It retrieves the objectId and additional event details for each matching Marketing Event.  Since multiple Marketing Events can have the same externalEventId, the endpoint returns all matching results.  Note: Marketing Events become searchable by externalEventId a few minutes after creation.
     * Find Marketing Events by External Event Id
     * @param externalEventId The id of the marketing event in the external event application.
     */
    public searchPortalEvents(externalEventId: string, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalMarketingEventIdentifiersResponseNoPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.searchPortalEvents(externalEventId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableListAssociationsApi } from './ObservableAPI';

import { ListAssociationsApiRequestFactory, ListAssociationsApiResponseProcessor} from "../apis/ListAssociationsApi";
export class PromiseListAssociationsApi {
    private api: ObservableListAssociationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ListAssociationsApiRequestFactory,
        responseProcessor?: ListAssociationsApiResponseProcessor
    ) {
        this.api = new ObservableListAssociationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Associates a list with a marketing event by external account id, external event id, and ILS list id
     * Associate a list with a marketing event
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param externalEventId The id of the marketing event in the external event application.
     * @param listId The ILS ID of the list.
     */
    public associateByExternalAccountAndEventIdsWithHttpInfo(externalAccountId: string, externalEventId: string, listId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.associateByExternalAccountAndEventIdsWithHttpInfo(externalAccountId, externalEventId, listId, observableOptions);
        return result.toPromise();
    }

    /**
     * Associates a list with a marketing event by external account id, external event id, and ILS list id
     * Associate a list with a marketing event
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param externalEventId The id of the marketing event in the external event application.
     * @param listId The ILS ID of the list.
     */
    public associateByExternalAccountAndEventIds(externalAccountId: string, externalEventId: string, listId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.associateByExternalAccountAndEventIds(externalAccountId, externalEventId, listId, observableOptions);
        return result.toPromise();
    }

    /**
     * Associates a list with a marketing event by marketing event id and ILS list id
     * Associate a list with a marketing event
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     * @param listId The ILS ID of the list.
     */
    public associateByMarketingEventIdWithHttpInfo(marketingEventId: string, listId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.associateByMarketingEventIdWithHttpInfo(marketingEventId, listId, observableOptions);
        return result.toPromise();
    }

    /**
     * Associates a list with a marketing event by marketing event id and ILS list id
     * Associate a list with a marketing event
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     * @param listId The ILS ID of the list.
     */
    public associateByMarketingEventId(marketingEventId: string, listId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.associateByMarketingEventId(marketingEventId, listId, observableOptions);
        return result.toPromise();
    }

    /**
     * Disassociates a list from a marketing event by external account id, external event id, and ILS list id
     * Disassociate a list from a marketing event
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param externalEventId The id of the marketing event in the external event application.
     * @param listId The ILS ID of the list.
     */
    public disassociateByExternalAccountAndEventIdsWithHttpInfo(externalAccountId: string, externalEventId: string, listId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.disassociateByExternalAccountAndEventIdsWithHttpInfo(externalAccountId, externalEventId, listId, observableOptions);
        return result.toPromise();
    }

    /**
     * Disassociates a list from a marketing event by external account id, external event id, and ILS list id
     * Disassociate a list from a marketing event
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param externalEventId The id of the marketing event in the external event application.
     * @param listId The ILS ID of the list.
     */
    public disassociateByExternalAccountAndEventIds(externalAccountId: string, externalEventId: string, listId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.disassociateByExternalAccountAndEventIds(externalAccountId, externalEventId, listId, observableOptions);
        return result.toPromise();
    }

    /**
     * Disassociates a list from a marketing event by marketing event id and ILS list id
     * Disassociate a list from a marketing event
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     * @param listId The ILS ID of the list.
     */
    public disassociateByMarketingEventIdWithHttpInfo(marketingEventId: string, listId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.disassociateByMarketingEventIdWithHttpInfo(marketingEventId, listId, observableOptions);
        return result.toPromise();
    }

    /**
     * Disassociates a list from a marketing event by marketing event id and ILS list id
     * Disassociate a list from a marketing event
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     * @param listId The ILS ID of the list.
     */
    public disassociateByMarketingEventId(marketingEventId: string, listId: string, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.disassociateByMarketingEventId(marketingEventId, listId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets lists associated with a marketing event by external account id and external event id
     * Get lists associated with a marketing event
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     * @param externalEventId The id of the marketing event in the external event application.
     */
    public getAllByExternalAccountAndEventIdsWithHttpInfo(externalAccountId: string, externalEventId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalPublicListNoPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllByExternalAccountAndEventIdsWithHttpInfo(externalAccountId, externalEventId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets lists associated with a marketing event by external account id and external event id
     * Get lists associated with a marketing event
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     * @param externalEventId The id of the marketing event in the external event application.
     */
    public getAllByExternalAccountAndEventIds(externalAccountId: string, externalEventId: string, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalPublicListNoPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllByExternalAccountAndEventIds(externalAccountId, externalEventId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets lists associated with a marketing event by marketing event id
     * Get lists associated with a marketing event
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     */
    public getAllByMarketingEventIdWithHttpInfo(marketingEventId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalPublicListNoPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllByMarketingEventIdWithHttpInfo(marketingEventId, observableOptions);
        return result.toPromise();
    }

    /**
     * Gets lists associated with a marketing event by marketing event id
     * Get lists associated with a marketing event
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     */
    public getAllByMarketingEventId(marketingEventId: string, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalPublicListNoPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllByMarketingEventId(marketingEventId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableRetrieveParticipantStateApi } from './ObservableAPI';

import { RetrieveParticipantStateApiRequestFactory, RetrieveParticipantStateApiResponseProcessor} from "../apis/RetrieveParticipantStateApi";
export class PromiseRetrieveParticipantStateApi {
    private api: ObservableRetrieveParticipantStateApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RetrieveParticipantStateApiRequestFactory,
        responseProcessor?: RetrieveParticipantStateApiResponseProcessor
    ) {
        this.api = new ObservableRetrieveParticipantStateApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Read Contact\'s participations by identifier - email or internal id.
     * Read participations breakdown by Contact identifier
     * @param contactIdentifier The identifier of the Contact. It may be email or internal id.
     * @param [state] The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW
     * @param [limit] The limit for response size. The default value is 10, the max number is 100
     * @param [after] The cursor indicating the position of the last retrieved item.
     */
    public getParticipationsBreakdownByContactIdWithHttpInfo(contactIdentifier: string, state?: string, limit?: number, after?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalParticipationBreakdownForwardPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getParticipationsBreakdownByContactIdWithHttpInfo(contactIdentifier, state, limit, after, observableOptions);
        return result.toPromise();
    }

    /**
     * Read Contact\'s participations by identifier - email or internal id.
     * Read participations breakdown by Contact identifier
     * @param contactIdentifier The identifier of the Contact. It may be email or internal id.
     * @param [state] The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW
     * @param [limit] The limit for response size. The default value is 10, the max number is 100
     * @param [after] The cursor indicating the position of the last retrieved item.
     */
    public getParticipationsBreakdownByContactId(contactIdentifier: string, state?: string, limit?: number, after?: string, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalParticipationBreakdownForwardPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getParticipationsBreakdownByContactId(contactIdentifier, state, limit, after, observableOptions);
        return result.toPromise();
    }

    /**
     * Read Marketing event\'s participations breakdown with optional filters by externalAccountId and externalEventId pair.
     * Read participations breakdown by Marketing Event external identifier
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param externalEventId The id of the marketing event in the external event application.
     * @param [contactIdentifier] The identifier of the Contact. It may be email or internal id.
     * @param [state] The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW
     * @param [limit] The limit for response size. The default value is 10, the max number is 100
     * @param [after] The cursor indicating the position of the last retrieved item.
     */
    public getParticipationsBreakdownByExternalEventIdWithHttpInfo(externalAccountId: string, externalEventId: string, contactIdentifier?: string, state?: string, limit?: number, after?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalParticipationBreakdownForwardPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getParticipationsBreakdownByExternalEventIdWithHttpInfo(externalAccountId, externalEventId, contactIdentifier, state, limit, after, observableOptions);
        return result.toPromise();
    }

    /**
     * Read Marketing event\'s participations breakdown with optional filters by externalAccountId and externalEventId pair.
     * Read participations breakdown by Marketing Event external identifier
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param externalEventId The id of the marketing event in the external event application.
     * @param [contactIdentifier] The identifier of the Contact. It may be email or internal id.
     * @param [state] The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW
     * @param [limit] The limit for response size. The default value is 10, the max number is 100
     * @param [after] The cursor indicating the position of the last retrieved item.
     */
    public getParticipationsBreakdownByExternalEventId(externalAccountId: string, externalEventId: string, contactIdentifier?: string, state?: string, limit?: number, after?: string, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalParticipationBreakdownForwardPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getParticipationsBreakdownByExternalEventId(externalAccountId, externalEventId, contactIdentifier, state, limit, after, observableOptions);
        return result.toPromise();
    }

    /**
     * Read Marketing event\'s participations breakdown with optional filters by internal identifier marketingEventId.
     * Read participations breakdown by Marketing Event internal identifier
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     * @param [contactIdentifier] The identifier of the Contact. It may be email or internal id.
     * @param [state] The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW
     * @param [limit] The limit for response size. The default value is 10, the max number is 100
     * @param [after] The cursor indicating the position of the last retrieved item.
     */
    public getParticipationsBreakdownByMarketingEventIdWithHttpInfo(marketingEventId: number, contactIdentifier?: string, state?: string, limit?: number, after?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalParticipationBreakdownForwardPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getParticipationsBreakdownByMarketingEventIdWithHttpInfo(marketingEventId, contactIdentifier, state, limit, after, observableOptions);
        return result.toPromise();
    }

    /**
     * Read Marketing event\'s participations breakdown with optional filters by internal identifier marketingEventId.
     * Read participations breakdown by Marketing Event internal identifier
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     * @param [contactIdentifier] The identifier of the Contact. It may be email or internal id.
     * @param [state] The participation state value. It may be REGISTERED, CANCELLED, ATTENDED, NO_SHOW
     * @param [limit] The limit for response size. The default value is 10, the max number is 100
     * @param [after] The cursor indicating the position of the last retrieved item.
     */
    public getParticipationsBreakdownByMarketingEventId(marketingEventId: number, contactIdentifier?: string, state?: string, limit?: number, after?: string, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalParticipationBreakdownForwardPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getParticipationsBreakdownByMarketingEventId(marketingEventId, contactIdentifier, state, limit, after, observableOptions);
        return result.toPromise();
    }

    /**
     * Read Marketing event\'s participations counters by externalAccountId and externalEventId pair.
     * Read participations counters by Marketing Event external identifier
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param externalEventId The id of the marketing event in the external event application.
     */
    public getParticipationsCountersByEventExternalIdWithHttpInfo(externalAccountId: string, externalEventId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AttendanceCounters>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getParticipationsCountersByEventExternalIdWithHttpInfo(externalAccountId, externalEventId, observableOptions);
        return result.toPromise();
    }

    /**
     * Read Marketing event\'s participations counters by externalAccountId and externalEventId pair.
     * Read participations counters by Marketing Event external identifier
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application.
     * @param externalEventId The id of the marketing event in the external event application.
     */
    public getParticipationsCountersByEventExternalId(externalAccountId: string, externalEventId: string, _options?: PromiseConfigurationOptions): Promise<AttendanceCounters> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getParticipationsCountersByEventExternalId(externalAccountId, externalEventId, observableOptions);
        return result.toPromise();
    }

    /**
     * Read Marketing event\'s participations counters by internal identifier marketingEventId.
     * Read participations counters by Marketing Event internal identifier
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     */
    public getParticipationsCountersByMarketingEventIdWithHttpInfo(marketingEventId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<AttendanceCounters>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getParticipationsCountersByMarketingEventIdWithHttpInfo(marketingEventId, observableOptions);
        return result.toPromise();
    }

    /**
     * Read Marketing event\'s participations counters by internal identifier marketingEventId.
     * Read participations counters by Marketing Event internal identifier
     * @param marketingEventId The internal id of the marketing event in HubSpot.
     */
    public getParticipationsCountersByMarketingEventId(marketingEventId: number, _options?: PromiseConfigurationOptions): Promise<AttendanceCounters> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getParticipationsCountersByMarketingEventId(marketingEventId, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSettingsApi } from './ObservableAPI';

import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";
export class PromiseSettingsApi {
    private api: ObservableSettingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SettingsApiRequestFactory,
        responseProcessor?: SettingsApiResponseProcessor
    ) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve the current settings for the application.
     * Retrieve the application settings
     * @param appId The id of the application to retrieve the settings for.
     */
    public getAllWithHttpInfo(appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EventDetailSettings>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllWithHttpInfo(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the current settings for the application.
     * Retrieve the application settings
     * @param appId The id of the application to retrieve the settings for.
     */
    public getAll(appId: number, _options?: PromiseConfigurationOptions): Promise<EventDetailSettings> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAll(appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Create or update the current settings for the application.
     * Update the application settings
     * @param appId The id of the application to update the settings for.
     * @param eventDetailSettingsUrl
     */
    public updateWithHttpInfo(appId: number, eventDetailSettingsUrl: EventDetailSettingsUrl, _options?: PromiseConfigurationOptions): Promise<HttpInfo<EventDetailSettings>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateWithHttpInfo(appId, eventDetailSettingsUrl, observableOptions);
        return result.toPromise();
    }

    /**
     * Create or update the current settings for the application.
     * Update the application settings
     * @param appId The id of the application to update the settings for.
     * @param eventDetailSettingsUrl
     */
    public update(appId: number, eventDetailSettingsUrl: EventDetailSettingsUrl, _options?: PromiseConfigurationOptions): Promise<EventDetailSettings> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.update(appId, eventDetailSettingsUrl, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSubscriberStateChangesApi } from './ObservableAPI';

import { SubscriberStateChangesApiRequestFactory, SubscriberStateChangesApiResponseProcessor} from "../apis/SubscriberStateChangesApi";
export class PromiseSubscriberStateChangesApi {
    private api: ObservableSubscriberStateChangesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SubscriberStateChangesApiRequestFactory,
        responseProcessor?: SubscriberStateChangesApiResponseProcessor
    ) {
        this.api = new ObservableSubscriberStateChangesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using contact email addresses. Note that the contact must already exist in HubSpot; a contact will not be created. The contactProperties field is used only when creating a new contact. These properties will not update existing contacts. 
     * Record a subscriber state by contact email
     * @param externalEventId The id of the marketing event in the external event application
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     * @param batchInputMarketingEventEmailSubscriber
     */
    public upsertByContactEmailWithHttpInfo(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.upsertByContactEmailWithHttpInfo(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventEmailSubscriber, observableOptions);
        return result.toPromise();
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using contact email addresses. Note that the contact must already exist in HubSpot; a contact will not be created. The contactProperties field is used only when creating a new contact. These properties will not update existing contacts. 
     * Record a subscriber state by contact email
     * @param externalEventId The id of the marketing event in the external event application
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     * @param batchInputMarketingEventEmailSubscriber
     */
    public upsertByContactEmail(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventEmailSubscriber: BatchInputMarketingEventEmailSubscriber, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.upsertByContactEmail(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventEmailSubscriber, observableOptions);
        return result.toPromise();
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using HubSpot contact IDs. Note that the contact must already exist in HubSpot; a contact will not be created.
     * Record a subscriber state by contact ID
     * @param externalEventId The id of the marketing event in the external event application
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     * @param batchInputMarketingEventSubscriber
     */
    public upsertByContactIdWithHttpInfo(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.upsertByContactIdWithHttpInfo(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventSubscriber, observableOptions);
        return result.toPromise();
    }

    /**
     * Record a subscriber state between multiple HubSpot contacts and a marketing event, using HubSpot contact IDs. Note that the contact must already exist in HubSpot; a contact will not be created.
     * Record a subscriber state by contact ID
     * @param externalEventId The id of the marketing event in the external event application
     * @param subscriberState The new subscriber state for the HubSpot contacts and the specified marketing event. For example: \&#39;register\&#39;, \&#39;attend\&#39; or \&#39;cancel\&#39;.
     * @param externalAccountId The accountId that is associated with this marketing event in the external event application
     * @param batchInputMarketingEventSubscriber
     */
    public upsertByContactId(externalEventId: string, subscriberState: string, externalAccountId: string, batchInputMarketingEventSubscriber: BatchInputMarketingEventSubscriber, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.upsertByContactId(externalEventId, subscriberState, externalAccountId, batchInputMarketingEventSubscriber, observableOptions);
        return result.toPromise();
    }


}



