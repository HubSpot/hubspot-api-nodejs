import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CardCreateRequest } from '../models/CardCreateRequest';
import { CardPatchRequest } from '../models/CardPatchRequest';
import { IntegratorCardPayloadResponse } from '../models/IntegratorCardPayloadResponse';
import { PublicCardListResponse } from '../models/PublicCardListResponse';
import { PublicCardResponse } from '../models/PublicCardResponse';

import { ObservableCardsApi } from "./ObservableAPI";
import { CardsApiRequestFactory, CardsApiResponseProcessor} from "../apis/CardsApi";

export interface CardsApiArchiveRequest {
    /**
     * The ID of the card to delete.
     * @type string
     * @memberof CardsApiarchive
     */
    cardId: string
    /**
     * The ID of the target app.
     * @type number
     * @memberof CardsApiarchive
     */
    appId: number
}

export interface CardsApiCreateRequest {
    /**
     * The ID of the target app.
     * @type number
     * @memberof CardsApicreate
     */
    appId: number
    /**
     * The new card definition.
     * @type CardCreateRequest
     * @memberof CardsApicreate
     */
    cardCreateRequest: CardCreateRequest
}

export interface CardsApiGetAllRequest {
    /**
     * The ID of the target app.
     * @type number
     * @memberof CardsApigetAll
     */
    appId: number
}

export interface CardsApiGetByIdRequest {
    /**
     * The ID of the target card.
     * @type string
     * @memberof CardsApigetById
     */
    cardId: string
    /**
     * The ID of the target app.
     * @type number
     * @memberof CardsApigetById
     */
    appId: number
}

export interface CardsApiUpdateRequest {
    /**
     * The ID of the card to update.
     * @type string
     * @memberof CardsApiupdate
     */
    cardId: string
    /**
     * The ID of the target app.
     * @type number
     * @memberof CardsApiupdate
     */
    appId: number
    /**
     * Card definition fields to be updated.
     * @type CardPatchRequest
     * @memberof CardsApiupdate
     */
    cardPatchRequest: CardPatchRequest
}

export class ObjectCardsApi {
    private api: ObservableCardsApi

    public constructor(configuration: Configuration, requestFactory?: CardsApiRequestFactory, responseProcessor?: CardsApiResponseProcessor) {
        this.api = new ObservableCardsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can\'t be undone.
     * Delete a card
     * @param param the request object
     */
    public archiveWithHttpInfo(param: CardsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.cardId, param.appId,  options).toPromise();
    }

    /**
     * Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can\'t be undone.
     * Delete a card
     * @param param the request object
     */
    public archive(param: CardsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.cardId, param.appId,  options).toPromise();
    }

    /**
     * Defines a new card that will become active on an account when this app is installed.
     * Create a new card
     * @param param the request object
     */
    public createWithHttpInfo(param: CardsApiCreateRequest, options?: Configuration): Promise<HttpInfo<PublicCardResponse>> {
        return this.api.createWithHttpInfo(param.appId, param.cardCreateRequest,  options).toPromise();
    }

    /**
     * Defines a new card that will become active on an account when this app is installed.
     * Create a new card
     * @param param the request object
     */
    public create(param: CardsApiCreateRequest, options?: Configuration): Promise<PublicCardResponse> {
        return this.api.create(param.appId, param.cardCreateRequest,  options).toPromise();
    }

    /**
     * Returns a list of cards for a given app.
     * Get all cards
     * @param param the request object
     */
    public getAllWithHttpInfo(param: CardsApiGetAllRequest, options?: Configuration): Promise<HttpInfo<PublicCardListResponse>> {
        return this.api.getAllWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * Returns a list of cards for a given app.
     * Get all cards
     * @param param the request object
     */
    public getAll(param: CardsApiGetAllRequest, options?: Configuration): Promise<PublicCardListResponse> {
        return this.api.getAll(param.appId,  options).toPromise();
    }

    /**
     * Returns the definition for a card with the given ID.
     * Get a card.
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: CardsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<PublicCardResponse>> {
        return this.api.getByIdWithHttpInfo(param.cardId, param.appId,  options).toPromise();
    }

    /**
     * Returns the definition for a card with the given ID.
     * Get a card.
     * @param param the request object
     */
    public getById(param: CardsApiGetByIdRequest, options?: Configuration): Promise<PublicCardResponse> {
        return this.api.getById(param.cardId, param.appId,  options).toPromise();
    }

    /**
     * Update a card definition with new details.
     * Update a card
     * @param param the request object
     */
    public updateWithHttpInfo(param: CardsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<PublicCardResponse>> {
        return this.api.updateWithHttpInfo(param.cardId, param.appId, param.cardPatchRequest,  options).toPromise();
    }

    /**
     * Update a card definition with new details.
     * Update a card
     * @param param the request object
     */
    public update(param: CardsApiUpdateRequest, options?: Configuration): Promise<PublicCardResponse> {
        return this.api.update(param.cardId, param.appId, param.cardPatchRequest,  options).toPromise();
    }

}

import { ObservableSampleResponseApi } from "./ObservableAPI";
import { SampleResponseApiRequestFactory, SampleResponseApiResponseProcessor} from "../apis/SampleResponseApi";

export interface SampleResponseApiGetCardsSampleResponseRequest {
}

export class ObjectSampleResponseApi {
    private api: ObservableSampleResponseApi

    public constructor(configuration: Configuration, requestFactory?: SampleResponseApiRequestFactory, responseProcessor?: SampleResponseApiResponseProcessor) {
        this.api = new ObservableSampleResponseApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns an example card detail response. This is the payload with displayed details for a card that will be shown to a user. An app should send this in response to the data fetch request.
     * Get sample card detail response
     * @param param the request object
     */
    public getCardsSampleResponseWithHttpInfo(param: SampleResponseApiGetCardsSampleResponseRequest = {}, options?: Configuration): Promise<HttpInfo<IntegratorCardPayloadResponse>> {
        return this.api.getCardsSampleResponseWithHttpInfo( options).toPromise();
    }

    /**
     * Returns an example card detail response. This is the payload with displayed details for a card that will be shown to a user. An app should send this in response to the data fetch request.
     * Get sample card detail response
     * @param param the request object
     */
    public getCardsSampleResponse(param: SampleResponseApiGetCardsSampleResponseRequest = {}, options?: Configuration): Promise<IntegratorCardPayloadResponse> {
        return this.api.getCardsSampleResponse( options).toPromise();
    }

}
