import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { CardCreateRequest } from '../models/CardCreateRequest';
import { CardMigrateViewsRequest } from '../models/CardMigrateViewsRequest';
import { CardMigrateViewsResponse } from '../models/CardMigrateViewsResponse';
import { CardPatchRequest } from '../models/CardPatchRequest';
import { IntegratorCardPayloadResponse } from '../models/IntegratorCardPayloadResponse';
import { PublicCardListResponse } from '../models/PublicCardListResponse';
import { PublicCardResponse } from '../models/PublicCardResponse';

import { ObservableAdvancedApi } from "./ObservableAPI";
import { AdvancedApiRequestFactory, AdvancedApiResponseProcessor} from "../apis/AdvancedApi";

export interface AdvancedApiCrmV3ExtensionsCardsDevAppIdViewsMigrateRequest {
    /**
     * The id of the app containing the Legacy CRM Card
     * Defaults to: undefined
     * @type number
     * @memberof AdvancedApicrmV3ExtensionsCardsDevAppIdViewsMigrate
     */
    appId: number
    /**
     * 
     * @type CardMigrateViewsRequest
     * @memberof AdvancedApicrmV3ExtensionsCardsDevAppIdViewsMigrate
     */
    cardMigrateViewsRequest: CardMigrateViewsRequest
}

export class ObjectAdvancedApi {
    private api: ObservableAdvancedApi

    public constructor(configuration: Configuration, requestFactory?: AdvancedApiRequestFactory, responseProcessor?: AdvancedApiResponseProcessor) {
        this.api = new ObservableAdvancedApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Swaps a Legacy CRM Card with an App Card in views. Reference the \"Migrate a legacy CRM card to an app card\" docs for more information
     * Migrate Card In Views
     * @param param the request object
     */
    public crmV3ExtensionsCardsDevAppIdViewsMigrateWithHttpInfo(param: AdvancedApiCrmV3ExtensionsCardsDevAppIdViewsMigrateRequest, options?: ConfigurationOptions): Promise<HttpInfo<CardMigrateViewsResponse>> {
        return this.api.crmV3ExtensionsCardsDevAppIdViewsMigrateWithHttpInfo(param.appId, param.cardMigrateViewsRequest,  options).toPromise();
    }

    /**
     * Swaps a Legacy CRM Card with an App Card in views. Reference the \"Migrate a legacy CRM card to an app card\" docs for more information
     * Migrate Card In Views
     * @param param the request object
     */
    public crmV3ExtensionsCardsDevAppIdViewsMigrate(param: AdvancedApiCrmV3ExtensionsCardsDevAppIdViewsMigrateRequest, options?: ConfigurationOptions): Promise<CardMigrateViewsResponse> {
        return this.api.crmV3ExtensionsCardsDevAppIdViewsMigrate(param.appId, param.cardMigrateViewsRequest,  options).toPromise();
    }

}

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiArchiveRequest {
    /**
     * The id of the app containing the Legacy CRM Card
     * Defaults to: undefined
     * @type number
     * @memberof BasicApiarchive
     */
    appId: number
    /**
     * The ID of the card to delete.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchive
     */
    cardId: string
}

export interface BasicApiCreateRequest {
    /**
     * The id of the app to contain the Legacy CRM Card
     * Defaults to: undefined
     * @type number
     * @memberof BasicApicreate
     */
    appId: number
    /**
     * 
     * @type CardCreateRequest
     * @memberof BasicApicreate
     */
    cardCreateRequest: CardCreateRequest
}

export interface BasicApiGetAllRequest {
    /**
     * The id of the app containing the Legacy CRM Card(s)
     * Defaults to: undefined
     * @type number
     * @memberof BasicApigetAll
     */
    appId: number
}

export interface BasicApiGetByIdRequest {
    /**
     * The id of the app containing the Legacy CRM Card.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApigetById
     */
    appId: number
    /**
     * The id of the Legacy CRM Card
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetById
     */
    cardId: string
}

export interface BasicApiGetCardsSampleResponseRequest {
}

export interface BasicApiUpdateRequest {
    /**
     * The id of the app containing the Legacy CRM Card.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApiupdate
     */
    appId: number
    /**
     * The id of the app containing the Legacy CRM Card
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiupdate
     */
    cardId: string
    /**
     * 
     * @type CardPatchRequest
     * @memberof BasicApiupdate
     */
    cardPatchRequest: CardPatchRequest
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can\'t be undone.
     * Delete a card
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.appId, param.cardId,  options).toPromise();
    }

    /**
     * Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can\'t be undone.
     * Delete a card
     * @param param the request object
     */
    public archive(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.appId, param.cardId,  options).toPromise();
    }

    /**
     * Defines a new card that will become active on an account when this app is installed.
     * Create a new card
     * @param param the request object
     */
    public createWithHttpInfo(param: BasicApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicCardResponse>> {
        return this.api.createWithHttpInfo(param.appId, param.cardCreateRequest,  options).toPromise();
    }

    /**
     * Defines a new card that will become active on an account when this app is installed.
     * Create a new card
     * @param param the request object
     */
    public create(param: BasicApiCreateRequest, options?: ConfigurationOptions): Promise<PublicCardResponse> {
        return this.api.create(param.appId, param.cardCreateRequest,  options).toPromise();
    }

    /**
     * Returns a list of cards for a given app.
     * Get all cards
     * @param param the request object
     */
    public getAllWithHttpInfo(param: BasicApiGetAllRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicCardListResponse>> {
        return this.api.getAllWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Returns a list of cards for a given app.
     * Get all cards
     * @param param the request object
     */
    public getAll(param: BasicApiGetAllRequest, options?: ConfigurationOptions): Promise<PublicCardListResponse> {
        return this.api.getAll(param.appId,  options).toPromise();
    }

    /**
     * Returns the definition for a card with the given ID.
     * Get a card.
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicCardResponse>> {
        return this.api.getByIdWithHttpInfo(param.appId, param.cardId,  options).toPromise();
    }

    /**
     * Returns the definition for a card with the given ID.
     * Get a card.
     * @param param the request object
     */
    public getById(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<PublicCardResponse> {
        return this.api.getById(param.appId, param.cardId,  options).toPromise();
    }

    /**
     * Returns an example card detail response. This is the payload with displayed details for a card that will be shown to a user. An app should send this in response to the data fetch request.
     * Get sample card detail response
     * @param param the request object
     */
    public getCardsSampleResponseWithHttpInfo(param: BasicApiGetCardsSampleResponseRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<IntegratorCardPayloadResponse>> {
        return this.api.getCardsSampleResponseWithHttpInfo( options).toPromise();
    }

    /**
     * Returns an example card detail response. This is the payload with displayed details for a card that will be shown to a user. An app should send this in response to the data fetch request.
     * Get sample card detail response
     * @param param the request object
     */
    public getCardsSampleResponse(param: BasicApiGetCardsSampleResponseRequest = {}, options?: ConfigurationOptions): Promise<IntegratorCardPayloadResponse> {
        return this.api.getCardsSampleResponse( options).toPromise();
    }

    /**
     * Update a card definition with new details.
     * Update a card
     * @param param the request object
     */
    public updateWithHttpInfo(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicCardResponse>> {
        return this.api.updateWithHttpInfo(param.appId, param.cardId, param.cardPatchRequest,  options).toPromise();
    }

    /**
     * Update a card definition with new details.
     * Update a card
     * @param param the request object
     */
    public update(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<PublicCardResponse> {
        return this.api.update(param.appId, param.cardId, param.cardPatchRequest,  options).toPromise();
    }

}
