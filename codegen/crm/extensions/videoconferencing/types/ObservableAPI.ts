import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { ExternalSettings } from '../models/ExternalSettings';

import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";
export class ObservableSettingsApi {
    private requestFactory: SettingsApiRequestFactory;
    private responseProcessor: SettingsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SettingsApiRequestFactory,
        responseProcessor?: SettingsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SettingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SettingsApiResponseProcessor();
    }

    /**
     * Deletes the settings for a video conference application with the specified ID.
     * Delete settings
     * @param appId The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
     */
    public archiveWithHttpInfo(appId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(appId, _options);

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
     * Deletes the settings for a video conference application with the specified ID.
     * Delete settings
     * @param appId The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
     */
    public archive(appId: number, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(appId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Return the settings for a video conference application with the specified ID.
     * Get settings
     * @param appId The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
     */
    public getByIdWithHttpInfo(appId: number, _options?: Configuration): Observable<HttpInfo<ExternalSettings>> {
        const requestContextPromise = this.requestFactory.getById(appId, _options);

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
     * Return the settings for a video conference application with the specified ID.
     * Get settings
     * @param appId The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
     */
    public getById(appId: number, _options?: Configuration): Observable<ExternalSettings> {
        return this.getByIdWithHttpInfo(appId, _options).pipe(map((apiResponse: HttpInfo<ExternalSettings>) => apiResponse.data));
    }

    /**
     * Updates the settings for a video conference application with the specified ID.
     * Update settings
     * @param appId The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
     * @param externalSettings 
     */
    public replaceWithHttpInfo(appId: number, externalSettings: ExternalSettings, _options?: Configuration): Observable<HttpInfo<ExternalSettings>> {
        const requestContextPromise = this.requestFactory.replace(appId, externalSettings, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates the settings for a video conference application with the specified ID.
     * Update settings
     * @param appId The ID of the video conference application. This is the identifier of the application created in your HubSpot developer portal.
     * @param externalSettings 
     */
    public replace(appId: number, externalSettings: ExternalSettings, _options?: Configuration): Observable<ExternalSettings> {
        return this.replaceWithHttpInfo(appId, externalSettings, _options).pipe(map((apiResponse: HttpInfo<ExternalSettings>) => apiResponse.data));
    }

}
