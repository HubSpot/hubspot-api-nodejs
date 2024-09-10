import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { MarkRecordingAsReadyRequest } from '../models/MarkRecordingAsReadyRequest';
import { RecordingSettingsPatchRequest } from '../models/RecordingSettingsPatchRequest';
import { RecordingSettingsRequest } from '../models/RecordingSettingsRequest';
import { RecordingSettingsResponse } from '../models/RecordingSettingsResponse';
import { SettingsPatchRequest } from '../models/SettingsPatchRequest';
import { SettingsRequest } from '../models/SettingsRequest';
import { SettingsResponse } from '../models/SettingsResponse';

import { RecordingSettingsApiRequestFactory, RecordingSettingsApiResponseProcessor} from "../apis/RecordingSettingsApi";
export class ObservableRecordingSettingsApi {
    private requestFactory: RecordingSettingsApiRequestFactory;
    private responseProcessor: RecordingSettingsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RecordingSettingsApiRequestFactory,
        responseProcessor?: RecordingSettingsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RecordingSettingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RecordingSettingsApiResponseProcessor();
    }

    /**
     * Retrieve the recording endpoint configured for a calling extension app.
     * Read calling app recording settings
     * @param appId The ID of the app.
     */
    public getUrlFormatWithHttpInfo(appId: number, _options?: Configuration): Observable<HttpInfo<RecordingSettingsResponse>> {
        const requestContextPromise = this.requestFactory.getUrlFormat(appId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUrlFormatWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the recording endpoint configured for a calling extension app.
     * Read calling app recording settings
     * @param appId The ID of the app.
     */
    public getUrlFormat(appId: number, _options?: Configuration): Observable<RecordingSettingsResponse> {
        return this.getUrlFormatWithHttpInfo(appId, _options).pipe(map((apiResponse: HttpInfo<RecordingSettingsResponse>) => apiResponse.data));
    }

    /**
     * Mark a call recording as ready for transcription, specifying the call by its ID (`engagementid`).
     * Mark recording as ready for transcription
     * @param markRecordingAsReadyRequest 
     */
    public markAsReadyWithHttpInfo(markRecordingAsReadyRequest: MarkRecordingAsReadyRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.markAsReady(markRecordingAsReadyRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.markAsReadyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Mark a call recording as ready for transcription, specifying the call by its ID (`engagementid`).
     * Mark recording as ready for transcription
     * @param markRecordingAsReadyRequest 
     */
    public markAsReady(markRecordingAsReadyRequest: MarkRecordingAsReadyRequest, _options?: Configuration): Observable<void> {
        return this.markAsReadyWithHttpInfo(markRecordingAsReadyRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Configure a calling extension app with an external URL that HubSpot will use to retrieve call recordings.
     * Register calling app for recording
     * @param appId The ID of the app.
     * @param recordingSettingsRequest 
     */
    public registerUrlFormatWithHttpInfo(appId: number, recordingSettingsRequest: RecordingSettingsRequest, _options?: Configuration): Observable<HttpInfo<RecordingSettingsResponse>> {
        const requestContextPromise = this.requestFactory.registerUrlFormat(appId, recordingSettingsRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.registerUrlFormatWithHttpInfo(rsp)));
            }));
    }

    /**
     * Configure a calling extension app with an external URL that HubSpot will use to retrieve call recordings.
     * Register calling app for recording
     * @param appId The ID of the app.
     * @param recordingSettingsRequest 
     */
    public registerUrlFormat(appId: number, recordingSettingsRequest: RecordingSettingsRequest, _options?: Configuration): Observable<RecordingSettingsResponse> {
        return this.registerUrlFormatWithHttpInfo(appId, recordingSettingsRequest, _options).pipe(map((apiResponse: HttpInfo<RecordingSettingsResponse>) => apiResponse.data));
    }

    /**
     * Update the URL that HubSpot will use to retrieve call recordings for a calling extension app.
     * Update calling app\'s recording settings
     * @param appId The ID of the app.
     * @param recordingSettingsPatchRequest 
     */
    public updateUrlFormatWithHttpInfo(appId: number, recordingSettingsPatchRequest: RecordingSettingsPatchRequest, _options?: Configuration): Observable<HttpInfo<RecordingSettingsResponse>> {
        const requestContextPromise = this.requestFactory.updateUrlFormat(appId, recordingSettingsPatchRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateUrlFormatWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the URL that HubSpot will use to retrieve call recordings for a calling extension app.
     * Update calling app\'s recording settings
     * @param appId The ID of the app.
     * @param recordingSettingsPatchRequest 
     */
    public updateUrlFormat(appId: number, recordingSettingsPatchRequest: RecordingSettingsPatchRequest, _options?: Configuration): Observable<RecordingSettingsResponse> {
        return this.updateUrlFormatWithHttpInfo(appId, recordingSettingsPatchRequest, _options).pipe(map((apiResponse: HttpInfo<RecordingSettingsResponse>) => apiResponse.data));
    }

}

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
     * Deletes this calling extension. This will remove your service as an option for all connected accounts.
     * Delete calling settings
     * @param appId The ID of the app.
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
     * Deletes this calling extension. This will remove your service as an option for all connected accounts.
     * Delete calling settings
     * @param appId The ID of the app.
     */
    public archive(appId: number, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(appId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Used to set the menu label, target iframe URL, and dimensions for your calling extension.
     * Configure a calling extension
     * @param appId The ID of the app.
     * @param settingsRequest 
     */
    public createWithHttpInfo(appId: number, settingsRequest: SettingsRequest, _options?: Configuration): Observable<HttpInfo<SettingsResponse>> {
        const requestContextPromise = this.requestFactory.create(appId, settingsRequest, _options);

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
     * Used to set the menu label, target iframe URL, and dimensions for your calling extension.
     * Configure a calling extension
     * @param appId The ID of the app.
     * @param settingsRequest 
     */
    public create(appId: number, settingsRequest: SettingsRequest, _options?: Configuration): Observable<SettingsResponse> {
        return this.createWithHttpInfo(appId, settingsRequest, _options).pipe(map((apiResponse: HttpInfo<SettingsResponse>) => apiResponse.data));
    }

    /**
     * Returns the calling extension settings configured for your app.
     * Get calling settings
     * @param appId The ID of the app.
     */
    public getByIdWithHttpInfo(appId: number, _options?: Configuration): Observable<HttpInfo<SettingsResponse>> {
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
     * Returns the calling extension settings configured for your app.
     * Get calling settings
     * @param appId The ID of the app.
     */
    public getById(appId: number, _options?: Configuration): Observable<SettingsResponse> {
        return this.getByIdWithHttpInfo(appId, _options).pipe(map((apiResponse: HttpInfo<SettingsResponse>) => apiResponse.data));
    }

    /**
     * Updates existing calling extension settings.
     * Update settings
     * @param appId The ID of the app.
     * @param settingsPatchRequest 
     */
    public updateWithHttpInfo(appId: number, settingsPatchRequest: SettingsPatchRequest, _options?: Configuration): Observable<HttpInfo<SettingsResponse>> {
        const requestContextPromise = this.requestFactory.update(appId, settingsPatchRequest, _options);

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
     * Updates existing calling extension settings.
     * Update settings
     * @param appId The ID of the app.
     * @param settingsPatchRequest 
     */
    public update(appId: number, settingsPatchRequest: SettingsPatchRequest, _options?: Configuration): Observable<SettingsResponse> {
        return this.updateWithHttpInfo(appId, settingsPatchRequest, _options).pipe(map((apiResponse: HttpInfo<SettingsResponse>) => apiResponse.data));
    }

}
