import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { CardCreateRequest } from '../models/CardCreateRequest';
import { CardPatchRequest } from '../models/CardPatchRequest';
import { IntegratorCardPayloadResponse } from '../models/IntegratorCardPayloadResponse';
import { PublicCardListResponse } from '../models/PublicCardListResponse';
import { PublicCardResponse } from '../models/PublicCardResponse';
import { ObservableCardsApi } from './ObservableAPI';

import { CardsApiRequestFactory, CardsApiResponseProcessor} from "../apis/CardsApi";
export class PromiseCardsApi {
    private api: ObservableCardsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CardsApiRequestFactory,
        responseProcessor?: CardsApiResponseProcessor
    ) {
        this.api = new ObservableCardsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can\'t be undone.
     * Delete a card
     * @param cardId The ID of the card to delete.
     * @param appId The ID of the target app.
     */
    public archiveWithHttpInfo(cardId: string, appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveWithHttpInfo(cardId, appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can\'t be undone.
     * Delete a card
     * @param cardId The ID of the card to delete.
     * @param appId The ID of the target app.
     */
    public archive(cardId: string, appId: number, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archive(cardId, appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Defines a new card that will become active on an account when this app is installed.
     * Create a new card
     * @param appId The ID of the target app.
     * @param cardCreateRequest The new card definition.
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
     * @param appId The ID of the target app.
     * @param cardCreateRequest The new card definition.
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
     * @param appId The ID of the target app.
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
     * @param appId The ID of the target app.
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
     * @param cardId The ID of the target card.
     * @param appId The ID of the target app.
     */
    public getByIdWithHttpInfo(cardId: string, appId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicCardResponse>> {
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
        const result = this.api.getByIdWithHttpInfo(cardId, appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns the definition for a card with the given ID.
     * Get a card.
     * @param cardId The ID of the target card.
     * @param appId The ID of the target app.
     */
    public getById(cardId: string, appId: number, _options?: PromiseConfigurationOptions): Promise<PublicCardResponse> {
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
        const result = this.api.getById(cardId, appId, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a card definition with new details.
     * Update a card
     * @param cardId The ID of the card to update.
     * @param appId The ID of the target app.
     * @param cardPatchRequest Card definition fields to be updated.
     */
    public updateWithHttpInfo(cardId: string, appId: number, cardPatchRequest: CardPatchRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicCardResponse>> {
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
        const result = this.api.updateWithHttpInfo(cardId, appId, cardPatchRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a card definition with new details.
     * Update a card
     * @param cardId The ID of the card to update.
     * @param appId The ID of the target app.
     * @param cardPatchRequest Card definition fields to be updated.
     */
    public update(cardId: string, appId: number, cardPatchRequest: CardPatchRequest, _options?: PromiseConfigurationOptions): Promise<PublicCardResponse> {
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
        const result = this.api.update(cardId, appId, cardPatchRequest, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSampleResponseApi } from './ObservableAPI';

import { SampleResponseApiRequestFactory, SampleResponseApiResponseProcessor} from "../apis/SampleResponseApi";
export class PromiseSampleResponseApi {
    private api: ObservableSampleResponseApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SampleResponseApiRequestFactory,
        responseProcessor?: SampleResponseApiResponseProcessor
    ) {
        this.api = new ObservableSampleResponseApi(configuration, requestFactory, responseProcessor);
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


}



