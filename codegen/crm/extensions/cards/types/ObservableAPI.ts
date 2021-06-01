import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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
     * Permanently deletes a card definition with the given ID. Once deleted, data fetch requests for this card will no longer be sent to your service. This can't be undone.
     * Delete a card
     * @param appId The ID of the target app.
     * @param cardId The ID of the card to delete.
     */
    public archive(appId: number, cardId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.archive(appId, cardId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archive(rsp)));
            }));
    }
 
    /**
     * Defines a new card that will become active on an account when this app is installed.
     * Create a new card
     * @param appId The ID of the target app.
     * @param cardCreateRequest The new card definition.
     */
    public create(appId: number, cardCreateRequest: CardCreateRequest, _options?: Configuration): Observable<CardResponse> {
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create(rsp)));
            }));
    }
 
    /**
     * Returns a list of cards for a given app.
     * Get all cards
     * @param appId The ID of the target app.
     */
    public getAll(appId: number, _options?: Configuration): Observable<CardListResponse> {
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAll(rsp)));
            }));
    }
 
    /**
     * Returns the definition for a card with the given ID.
     * Get a card.
     * @param appId The ID of the target app.
     * @param cardId The ID of the target card.
     */
    public getById(appId: number, cardId: string, _options?: Configuration): Observable<CardResponse> {
        const requestContextPromise = this.requestFactory.getById(appId, cardId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getById(rsp)));
            }));
    }
 
    /**
     * Update a card definition with new details.
     * Update a card
     * @param appId The ID of the target app.
     * @param cardId The ID of the card to update.
     * @param cardPatchRequest Card definition fields to be updated.
     */
    public update(appId: number, cardId: string, cardPatchRequest: CardPatchRequest, _options?: Configuration): Observable<CardResponse> {
        const requestContextPromise = this.requestFactory.update(appId, cardId, cardPatchRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update(rsp)));
            }));
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
    public getCardsSampleResponse(_options?: Configuration): Observable<IntegratorCardPayloadResponse> {
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCardsSampleResponse(rsp)));
            }));
    }
 
}
