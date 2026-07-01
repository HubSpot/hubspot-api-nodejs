import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { CardCreateRequest } from '../models/CardCreateRequest';
import { CardMigrateViewsRequest } from '../models/CardMigrateViewsRequest';
import { CardMigrateViewsResponse } from '../models/CardMigrateViewsResponse';
import { CardPatchRequest } from '../models/CardPatchRequest';
import { IntegratorCardPayloadResponse } from '../models/IntegratorCardPayloadResponse';
import { PublicCardListResponse } from '../models/PublicCardListResponse';
import { PublicCardResponse } from '../models/PublicCardResponse';
import { ObservableAdvancedApi } from './ObservableAPI';

import { AdvancedApiRequestFactory, AdvancedApiResponseProcessor} from "../apis/AdvancedApi";
export class PromiseAdvancedApi {
    private api: ObservableAdvancedApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AdvancedApiRequestFactory,
        responseProcessor?: AdvancedApiResponseProcessor
    ) {
        this.api = new ObservableAdvancedApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Swaps a Legacy CRM Card with an App Card in views. Reference the \"Migrate a legacy CRM card to an app card\" docs for more information
     * Migrate Card In Views
     * @param appId The id of the app containing the Legacy CRM Card
     * @param cardMigrateViewsRequest
     */
    public crmV3ExtensionsCardsDevAppIdViewsMigrateWithHttpInfo(appId: number, cardMigrateViewsRequest: CardMigrateViewsRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CardMigrateViewsResponse>> {
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
        const result = this.api.crmV3ExtensionsCardsDevAppIdViewsMigrateWithHttpInfo(appId, cardMigrateViewsRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Swaps a Legacy CRM Card with an App Card in views. Reference the \"Migrate a legacy CRM card to an app card\" docs for more information
     * Migrate Card In Views
     * @param appId The id of the app containing the Legacy CRM Card
     * @param cardMigrateViewsRequest
     */
    public crmV3ExtensionsCardsDevAppIdViewsMigrate(appId: number, cardMigrateViewsRequest: CardMigrateViewsRequest, _options?: PromiseConfigurationOptions): Promise<CardMigrateViewsResponse> {
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
        const result = this.api.crmV3ExtensionsCardsDevAppIdViewsMigrate(appId, cardMigrateViewsRequest, observableOptions);
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
     * Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can\'t be undone.
     * Delete a card
     * @param appId The id of the app containing the Legacy CRM Card
     * @param cardId The ID of the card to delete.
     */
    public archiveWithHttpInfo(appId: number, cardId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveWithHttpInfo(appId, cardId, observableOptions);
        return result.toPromise();
    }

    /**
     * Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can\'t be undone.
     * Delete a card
     * @param appId The id of the app containing the Legacy CRM Card
     * @param cardId The ID of the card to delete.
     */
    public archive(appId: number, cardId: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archive(appId, cardId, observableOptions);
        return result.toPromise();
    }

    /**
     * Defines a new card that will become active on an account when this app is installed.
     * Create a new card
     * @param appId The id of the app to contain the Legacy CRM Card
     * @param cardCreateRequest
     */
    public createWithHttpInfo(appId: number, cardCreateRequest: CardCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicCardResponse>> {
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
        const result = this.api.createWithHttpInfo(appId, cardCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Defines a new card that will become active on an account when this app is installed.
     * Create a new card
     * @param appId The id of the app to contain the Legacy CRM Card
     * @param cardCreateRequest
     */
    public create(appId: number, cardCreateRequest: CardCreateRequest, _options?: PromiseConfigurationOptions): Promise<PublicCardResponse> {
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
        const result = this.api.create(appId, cardCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a list of cards for a given app.
     * Get all cards
     * @param appId The id of the app containing the Legacy CRM Card(s)
     */
    public getAllWithHttpInfo(appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicCardListResponse>> {
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
     * Returns a list of cards for a given app.
     * Get all cards
     * @param appId The id of the app containing the Legacy CRM Card(s)
     */
    public getAll(appId: number, _options?: PromiseConfigurationOptions): Promise<PublicCardListResponse> {
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
     * Returns the definition for a card with the given ID.
     * Get a card.
     * @param appId The id of the app containing the Legacy CRM Card.
     * @param cardId The id of the Legacy CRM Card
     */
    public getByIdWithHttpInfo(appId: number, cardId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicCardResponse>> {
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
        const result = this.api.getByIdWithHttpInfo(appId, cardId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the definition for a card with the given ID.
     * Get a card.
     * @param appId The id of the app containing the Legacy CRM Card.
     * @param cardId The id of the Legacy CRM Card
     */
    public getById(appId: number, cardId: string, _options?: PromiseConfigurationOptions): Promise<PublicCardResponse> {
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
        const result = this.api.getById(appId, cardId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns an example card detail response. This is the payload with displayed details for a card that will be shown to a user. An app should send this in response to the data fetch request.
     * Get sample card detail response
     */
    public getCardsSampleResponseWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<IntegratorCardPayloadResponse>> {
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
        const result = this.api.getCardsSampleResponseWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Returns an example card detail response. This is the payload with displayed details for a card that will be shown to a user. An app should send this in response to the data fetch request.
     * Get sample card detail response
     */
    public getCardsSampleResponse(_options?: PromiseConfigurationOptions): Promise<IntegratorCardPayloadResponse> {
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
        const result = this.api.getCardsSampleResponse(observableOptions);
        return result.toPromise();
    }

    /**
     * Update a card definition with new details.
     * Update a card
     * @param appId The id of the app containing the Legacy CRM Card.
     * @param cardId The id of the app containing the Legacy CRM Card
     * @param cardPatchRequest
     */
    public updateWithHttpInfo(appId: number, cardId: string, cardPatchRequest: CardPatchRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicCardResponse>> {
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
        const result = this.api.updateWithHttpInfo(appId, cardId, cardPatchRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a card definition with new details.
     * Update a card
     * @param appId The id of the app containing the Legacy CRM Card.
     * @param cardId The id of the app containing the Legacy CRM Card
     * @param cardPatchRequest
     */
    public update(appId: number, cardId: string, cardPatchRequest: CardPatchRequest, _options?: PromiseConfigurationOptions): Promise<PublicCardResponse> {
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
        const result = this.api.update(appId, cardId, cardPatchRequest, observableOptions);
        return result.toPromise();
    }


}



