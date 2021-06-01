import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { ActionConfirmationBody } from '../models/ActionConfirmationBody';
import { ActionHookActionBody } from '../models/ActionHookActionBody';
import { CardActions } from '../models/CardActions';
import { CardCreateRequest } from '../models/CardCreateRequest';
import { CardDisplayBody } from '../models/CardDisplayBody';
import { CardDisplayProperty } from '../models/CardDisplayProperty';
import { CardFetchBody } from '../models/CardFetchBody';
import { CardFetchBodyPatch } from '../models/CardFetchBodyPatch';
import { CardListResponse } from '../models/CardListResponse';
import { CardObjectTypeBody } from '../models/CardObjectTypeBody';
import { CardPatchRequest } from '../models/CardPatchRequest';
import { CardResponse } from '../models/CardResponse';
import { DisplayOption } from '../models/DisplayOption';
import { ErrorDetail } from '../models/ErrorDetail';
import { IFrameActionBody } from '../models/IFrameActionBody';
import { IntegratorCardPayloadResponse } from '../models/IntegratorCardPayloadResponse';
import { IntegratorObjectResult } from '../models/IntegratorObjectResult';
import { ModelError } from '../models/ModelError';
import { ObjectToken } from '../models/ObjectToken';
import { TopLevelActions } from '../models/TopLevelActions';

import { ObservableCardsApi } from "./ObservableAPI";
import { CardsApiRequestFactory, CardsApiResponseProcessor} from "../apis/CardsApi";

export interface CardsApiArchiveRequest {
    /**
     * The ID of the target app.
     * @type number
     * @memberof CardsApiarchive
     */
    appId: number
    /**
     * The ID of the card to delete.
     * @type string
     * @memberof CardsApiarchive
     */
    cardId: string
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
     * The ID of the target app.
     * @type number
     * @memberof CardsApigetById
     */
    appId: number
    /**
     * The ID of the target card.
     * @type string
     * @memberof CardsApigetById
     */
    cardId: string
}

export interface CardsApiUpdateRequest {
    /**
     * The ID of the target app.
     * @type number
     * @memberof CardsApiupdate
     */
    appId: number
    /**
     * The ID of the card to update.
     * @type string
     * @memberof CardsApiupdate
     */
    cardId: string
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
     * Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can't be undone.
     * Delete a card
     * @param param the request object
     */
    public archive(param: CardsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.appId, param.cardId,  options).toPromise();
    }

    /**
     * Defines a new card that will become active on an account when this app is installed.
     * Create a new card
     * @param param the request object
     */
    public create(param: CardsApiCreateRequest, options?: Configuration): Promise<CardResponse> {
        return this.api.create(param.appId, param.cardCreateRequest,  options).toPromise();
    }

    /**
     * Returns a list of cards for a given app.
     * Get all cards
     * @param param the request object
     */
    public getAll(param: CardsApiGetAllRequest, options?: Configuration): Promise<CardListResponse> {
        return this.api.getAll(param.appId,  options).toPromise();
    }

    /**
     * Returns the definition for a card with the given ID.
     * Get a card.
     * @param param the request object
     */
    public getById(param: CardsApiGetByIdRequest, options?: Configuration): Promise<CardResponse> {
        return this.api.getById(param.appId, param.cardId,  options).toPromise();
    }

    /**
     * Update a card definition with new details.
     * Update a card
     * @param param the request object
     */
    public update(param: CardsApiUpdateRequest, options?: Configuration): Promise<CardResponse> {
        return this.api.update(param.appId, param.cardId, param.cardPatchRequest,  options).toPromise();
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
    public getCardsSampleResponse(param: SampleResponseApiGetCardsSampleResponseRequest, options?: Configuration): Promise<IntegratorCardPayloadResponse> {
        return this.api.getCardsSampleResponse( options).toPromise();
    }

}
