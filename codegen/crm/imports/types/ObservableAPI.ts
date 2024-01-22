import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { ActionResponse } from '../models/ActionResponse';
import { CollectionResponsePublicImportErrorForwardPaging } from '../models/CollectionResponsePublicImportErrorForwardPaging';
import { CollectionResponsePublicImportResponse } from '../models/CollectionResponsePublicImportResponse';
import { PublicImportResponse } from '../models/PublicImportResponse';

import { CoreApiRequestFactory, CoreApiResponseProcessor} from "../apis/CoreApi";
export class ObservableCoreApi {
    private requestFactory: CoreApiRequestFactory;
    private responseProcessor: CoreApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CoreApiRequestFactory,
        responseProcessor?: CoreApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CoreApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CoreApiResponseProcessor();
    }

    /**
     * This allows a developer to cancel an active import.
     * Cancel an active import
     * @param importId 
     */
    public cancelWithHttpInfo(importId: number, _options?: Configuration): Observable<HttpInfo<ActionResponse>> {
        const requestContextPromise = this.requestFactory.cancel(importId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelWithHttpInfo(rsp)));
            }));
    }

    /**
     * This allows a developer to cancel an active import.
     * Cancel an active import
     * @param importId 
     */
    public cancel(importId: number, _options?: Configuration): Observable<ActionResponse> {
        return this.cancelWithHttpInfo(importId, _options).pipe(map((apiResponse: HttpInfo<ActionResponse>) => apiResponse.data));
    }

    /**
     * Begins importing data from the specified file resources. This uploads the corresponding file and uses the import request object to convert rows in the files to objects.
     * Start a new import
     * @param files A list of files containing the data to import
     * @param importRequest JSON formatted metadata about the import. This includes a name for the import and the column mappings for each file. See the overview tab for more on the required format.
     */
    public createWithHttpInfo(files?: HttpFile, importRequest?: string, _options?: Configuration): Observable<HttpInfo<PublicImportResponse>> {
        const requestContextPromise = this.requestFactory.create(files, importRequest, _options);

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
     * Begins importing data from the specified file resources. This uploads the corresponding file and uses the import request object to convert rows in the files to objects.
     * Start a new import
     * @param files A list of files containing the data to import
     * @param importRequest JSON formatted metadata about the import. This includes a name for the import and the column mappings for each file. See the overview tab for more on the required format.
     */
    public create(files?: HttpFile, importRequest?: string, _options?: Configuration): Observable<PublicImportResponse> {
        return this.createWithHttpInfo(files, importRequest, _options).pipe(map((apiResponse: HttpInfo<PublicImportResponse>) => apiResponse.data));
    }

    /**
     * A complete summary of an import record, including any updates.
     * Get the information on any import
     * @param importId 
     */
    public getByIdWithHttpInfo(importId: number, _options?: Configuration): Observable<HttpInfo<PublicImportResponse>> {
        const requestContextPromise = this.requestFactory.getById(importId, _options);

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
     * A complete summary of an import record, including any updates.
     * Get the information on any import
     * @param importId 
     */
    public getById(importId: number, _options?: Configuration): Observable<PublicImportResponse> {
        return this.getByIdWithHttpInfo(importId, _options).pipe(map((apiResponse: HttpInfo<PublicImportResponse>) => apiResponse.data));
    }

    /**
     * Returns a paged list of active imports for this account.
     * Get active imports
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to display per page.
     */
    public getPageWithHttpInfo(after?: string, before?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<CollectionResponsePublicImportResponse>> {
        const requestContextPromise = this.requestFactory.getPage(after, before, limit, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns a paged list of active imports for this account.
     * Get active imports
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to display per page.
     */
    public getPage(after?: string, before?: string, limit?: number, _options?: Configuration): Observable<CollectionResponsePublicImportResponse> {
        return this.getPageWithHttpInfo(after, before, limit, _options).pipe(map((apiResponse: HttpInfo<CollectionResponsePublicImportResponse>) => apiResponse.data));
    }

}

import { PublicImportsApiRequestFactory, PublicImportsApiResponseProcessor} from "../apis/PublicImportsApi";
export class ObservablePublicImportsApi {
    private requestFactory: PublicImportsApiRequestFactory;
    private responseProcessor: PublicImportsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicImportsApiRequestFactory,
        responseProcessor?: PublicImportsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PublicImportsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PublicImportsApiResponseProcessor();
    }

    /**
     * @param importId 
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to display per page.
     */
    public getErrorsWithHttpInfo(importId: number, after?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<CollectionResponsePublicImportErrorForwardPaging>> {
        const requestContextPromise = this.requestFactory.getErrors(importId, after, limit, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getErrorsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param importId 
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to display per page.
     */
    public getErrors(importId: number, after?: string, limit?: number, _options?: Configuration): Observable<CollectionResponsePublicImportErrorForwardPaging> {
        return this.getErrorsWithHttpInfo(importId, after, limit, _options).pipe(map((apiResponse: HttpInfo<CollectionResponsePublicImportErrorForwardPaging>) => apiResponse.data));
    }

}
