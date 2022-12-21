import { Configuration} from '../configuration'

import { CardCreateRequest } from '../models/CardCreateRequest';
import { CardListResponse } from '../models/CardListResponse';
import { CardPatchRequest } from '../models/CardPatchRequest';
import { CardResponse } from '../models/CardResponse';
import { IntegratorCardPayloadResponse } from '../models/IntegratorCardPayloadResponse';
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
     * Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can't be undone.
     * Delete a card
     * @param appId The ID of the target app.
     * @param cardId The ID of the card to delete.
     */
    public archive(appId: number, cardId: string, _options?: Configuration): Promise<void> {
        const result = this.api.archive(appId, cardId, _options);
        return result.toPromise();
    }

    /**
     * Defines a new card that will become active on an account when this app is installed.
     * Create a new card
     * @param appId The ID of the target app.
     * @param cardCreateRequest The new card definition.
     */
    public create(appId: number, cardCreateRequest: CardCreateRequest, _options?: Configuration): Promise<CardResponse> {
        const result = this.api.create(appId, cardCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of cards for a given app.
     * Get all cards
     * @param appId The ID of the target app.
     */
    public getAll(appId: number, _options?: Configuration): Promise<CardListResponse> {
        const result = this.api.getAll(appId, _options);
        return result.toPromise();
    }

    /**
     * Returns the definition for a card with the given ID.
     * Get a card.
     * @param appId The ID of the target app.
     * @param cardId The ID of the target card.
     */
    public getById(appId: number, cardId: string, _options?: Configuration): Promise<CardResponse> {
        const result = this.api.getById(appId, cardId, _options);
        return result.toPromise();
    }

    /**
     * Update a card definition with new details.
     * Update a card
     * @param appId The ID of the target app.
     * @param cardId The ID of the card to update.
     * @param cardPatchRequest Card definition fields to be updated.
     */
    public update(appId: number, cardId: string, cardPatchRequest: CardPatchRequest, _options?: Configuration): Promise<CardResponse> {
        const result = this.api.update(appId, cardId, cardPatchRequest, _options);
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
    public getCardsSampleResponse(_options?: Configuration): Promise<IntegratorCardPayloadResponse> {
        const result = this.api.getCardsSampleResponse(_options);
        return result.toPromise();
    }


}



