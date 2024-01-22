import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CardCreateRequest } from '../models/CardCreateRequest';
import { CardPatchRequest } from '../models/CardPatchRequest';
import { IntegratorCardPayloadResponse } from '../models/IntegratorCardPayloadResponse';
import { PublicCardListResponse } from '../models/PublicCardListResponse';
import { PublicCardResponse } from '../models/PublicCardResponse';

import { CardsApiRequestFactory, CardsApiResponseProcessor} from "../apis/CardsApi";
export class ObservableCardsApi {
    private requestFactory: CardsApiRequestFactory;
    private responseProcessor: CardsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CardsApiRequestFactory,
        responseProcessor?: CardsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CardsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CardsApiResponseProcessor();
    }

    /**
     * Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can\'t be undone.
     * Delete a card
     * @param cardId The ID of the card to delete.
     * @param appId The ID of the target app.
     */
    public archiveWithHttpInfo(cardId: string, appId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(cardId, appId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can\'t be undone.
     * Delete a card
     * @param cardId The ID of the card to delete.
     * @param appId The ID of the target app.
     */
    public archive(cardId: string, appId: number, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(cardId, appId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Defines a new card that will become active on an account when this app is installed.
     * Create a new card
     * @param appId The ID of the target app.
     * @param cardCreateRequest The new card definition.
     */
    public createWithHttpInfo(appId: number, cardCreateRequest: CardCreateRequest, _options?: Configuration): Observable<HttpInfo<PublicCardResponse>> {
        const requestContextPromise = this.requestFactory.create(appId, cardCreateRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWithHttpInfo(rsp)));
            }));
    }

    /**
     * Defines a new card that will become active on an account when this app is installed.
     * Create a new card
     * @param appId The ID of the target app.
     * @param cardCreateRequest The new card definition.
     */
    public create(appId: number, cardCreateRequest: CardCreateRequest, _options?: Configuration): Observable<PublicCardResponse> {
        return this.createWithHttpInfo(appId, cardCreateRequest, _options).pipe(map((apiResponse: HttpInfo<PublicCardResponse>) => apiResponse.data));
    }

    /**
     * Returns a list of cards for a given app.
     * Get all cards
     * @param appId The ID of the target app.
     */
    public getAllWithHttpInfo(appId: number, _options?: Configuration): Observable<HttpInfo<PublicCardListResponse>> {
        const requestContextPromise = this.requestFactory.getAll(appId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a list of cards for a given app.
     * Get all cards
     * @param appId The ID of the target app.
     */
    public getAll(appId: number, _options?: Configuration): Observable<PublicCardListResponse> {
        return this.getAllWithHttpInfo(appId, _options).pipe(map((apiResponse: HttpInfo<PublicCardListResponse>) => apiResponse.data));
    }

    /**
     * Returns the definition for a card with the given ID.
     * Get a card.
     * @param cardId The ID of the target card.
     * @param appId The ID of the target app.
     */
    public getByIdWithHttpInfo(cardId: string, appId: number, _options?: Configuration): Observable<HttpInfo<PublicCardResponse>> {
        const requestContextPromise = this.requestFactory.getById(cardId, appId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the definition for a card with the given ID.
     * Get a card.
     * @param cardId The ID of the target card.
     * @param appId The ID of the target app.
     */
    public getById(cardId: string, appId: number, _options?: Configuration): Observable<PublicCardResponse> {
        return this.getByIdWithHttpInfo(cardId, appId, _options).pipe(map((apiResponse: HttpInfo<PublicCardResponse>) => apiResponse.data));
    }

    /**
     * Update a card definition with new details.
     * Update a card
     * @param cardId The ID of the card to update.
     * @param appId The ID of the target app.
     * @param cardPatchRequest Card definition fields to be updated.
     */
    public updateWithHttpInfo(cardId: string, appId: number, cardPatchRequest: CardPatchRequest, _options?: Configuration): Observable<HttpInfo<PublicCardResponse>> {
        const requestContextPromise = this.requestFactory.update(cardId, appId, cardPatchRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update a card definition with new details.
     * Update a card
     * @param cardId The ID of the card to update.
     * @param appId The ID of the target app.
     * @param cardPatchRequest Card definition fields to be updated.
     */
    public update(cardId: string, appId: number, cardPatchRequest: CardPatchRequest, _options?: Configuration): Observable<PublicCardResponse> {
        return this.updateWithHttpInfo(cardId, appId, cardPatchRequest, _options).pipe(map((apiResponse: HttpInfo<PublicCardResponse>) => apiResponse.data));
    }

}

import { SampleResponseApiRequestFactory, SampleResponseApiResponseProcessor} from "../apis/SampleResponseApi";
export class ObservableSampleResponseApi {
    private requestFactory: SampleResponseApiRequestFactory;
    private responseProcessor: SampleResponseApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SampleResponseApiRequestFactory,
        responseProcessor?: SampleResponseApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SampleResponseApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SampleResponseApiResponseProcessor();
    }

    /**
     * Returns an example card detail response. This is the payload with displayed details for a card that will be shown to a user. An app should send this in response to the data fetch request.
     * Get sample card detail response
     */
    public getCardsSampleResponseWithHttpInfo(_options?: Configuration): Observable<HttpInfo<IntegratorCardPayloadResponse>> {
        const requestContextPromise = this.requestFactory.getCardsSampleResponse(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCardsSampleResponseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns an example card detail response. This is the payload with displayed details for a card that will be shown to a user. An app should send this in response to the data fetch request.
     * Get sample card detail response
     */
    public getCardsSampleResponse(_options?: Configuration): Observable<IntegratorCardPayloadResponse> {
        return this.getCardsSampleResponseWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<IntegratorCardPayloadResponse>) => apiResponse.data));
    }

}
