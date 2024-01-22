import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CollectionResponseFormDefinitionBaseForwardPaging } from '../models/CollectionResponseFormDefinitionBaseForwardPaging';
import { FormDefinitionBase } from '../models/FormDefinitionBase';
import { FormDefinitionCreateRequestBase } from '../models/FormDefinitionCreateRequestBase';
import { HubSpotFormDefinition } from '../models/HubSpotFormDefinition';
import { HubSpotFormDefinitionPatchRequest } from '../models/HubSpotFormDefinitionPatchRequest';

import { FormsApiRequestFactory, FormsApiResponseProcessor} from "../apis/FormsApi";
export class ObservableFormsApi {
    private requestFactory: FormsApiRequestFactory;
    private responseProcessor: FormsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FormsApiRequestFactory,
        responseProcessor?: FormsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FormsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FormsApiResponseProcessor();
    }

    /**
     * Archive a form definition. New submissions will not be accepted and the form definition will be permanently deleted after 3 months.
     * Archive a form definition
     * @param formId The ID of the form to archive.
     */
    public archiveWithHttpInfo(formId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(formId, _options);

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
     * Archive a form definition. New submissions will not be accepted and the form definition will be permanently deleted after 3 months.
     * Archive a form definition
     * @param formId The ID of the form to archive.
     */
    public archive(formId: string, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(formId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Add a new `hubspot` form
     * Create a form
     * @param formDefinitionCreateRequestBase 
     */
    public createWithHttpInfo(formDefinitionCreateRequestBase: FormDefinitionCreateRequestBase, _options?: Configuration): Observable<HttpInfo<FormDefinitionBase>> {
        const requestContextPromise = this.requestFactory.create(formDefinitionCreateRequestBase, _options);

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
     * Add a new `hubspot` form
     * Create a form
     * @param formDefinitionCreateRequestBase 
     */
    public create(formDefinitionCreateRequestBase: FormDefinitionCreateRequestBase, _options?: Configuration): Observable<FormDefinitionBase> {
        return this.createWithHttpInfo(formDefinitionCreateRequestBase, _options).pipe(map((apiResponse: HttpInfo<FormDefinitionBase>) => apiResponse.data));
    }

    /**
     * Returns a form based on the form ID provided.
     * Get a form definition
     * @param formId The unique identifier of the form
     * @param archived Whether to return only results that have been archived.
     */
    public getByIdWithHttpInfo(formId: string, archived?: boolean, _options?: Configuration): Observable<HttpInfo<FormDefinitionBase>> {
        const requestContextPromise = this.requestFactory.getById(formId, archived, _options);

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
     * Returns a form based on the form ID provided.
     * Get a form definition
     * @param formId The unique identifier of the form
     * @param archived Whether to return only results that have been archived.
     */
    public getById(formId: string, archived?: boolean, _options?: Configuration): Observable<FormDefinitionBase> {
        return this.getByIdWithHttpInfo(formId, archived, _options).pipe(map((apiResponse: HttpInfo<FormDefinitionBase>) => apiResponse.data));
    }

    /**
     * Returns a list of forms based on the search filters. By default, it returns the first 20 `hubspot` forms
     * Get a list of forms
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to display per page.
     * @param archived Whether to return only results that have been archived.
     * @param formTypes The form types to be included in the results.
     */
    public getPageWithHttpInfo(after?: string, limit?: number, archived?: boolean, formTypes?: Array<'hubspot' | 'captured' | 'flow' | 'blog_comment' | 'all'>, _options?: Configuration): Observable<HttpInfo<CollectionResponseFormDefinitionBaseForwardPaging>> {
        const requestContextPromise = this.requestFactory.getPage(after, limit, archived, formTypes, _options);

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
     * Returns a list of forms based on the search filters. By default, it returns the first 20 `hubspot` forms
     * Get a list of forms
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to display per page.
     * @param archived Whether to return only results that have been archived.
     * @param formTypes The form types to be included in the results.
     */
    public getPage(after?: string, limit?: number, archived?: boolean, formTypes?: Array<'hubspot' | 'captured' | 'flow' | 'blog_comment' | 'all'>, _options?: Configuration): Observable<CollectionResponseFormDefinitionBaseForwardPaging> {
        return this.getPageWithHttpInfo(after, limit, archived, formTypes, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseFormDefinitionBaseForwardPaging>) => apiResponse.data));
    }

    /**
     * Update all fields of a hubspot form definition.
     * Update a form definition
     * @param formId 
     * @param hubSpotFormDefinition 
     */
    public replaceWithHttpInfo(formId: string, hubSpotFormDefinition: HubSpotFormDefinition, _options?: Configuration): Observable<HttpInfo<FormDefinitionBase>> {
        const requestContextPromise = this.requestFactory.replace(formId, hubSpotFormDefinition, _options);

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
     * Update all fields of a hubspot form definition.
     * Update a form definition
     * @param formId 
     * @param hubSpotFormDefinition 
     */
    public replace(formId: string, hubSpotFormDefinition: HubSpotFormDefinition, _options?: Configuration): Observable<FormDefinitionBase> {
        return this.replaceWithHttpInfo(formId, hubSpotFormDefinition, _options).pipe(map((apiResponse: HttpInfo<FormDefinitionBase>) => apiResponse.data));
    }

    /**
     * Update some of the form definition components
     * Partially update a form definition
     * @param formId The ID of the form to update.
     * @param hubSpotFormDefinitionPatchRequest 
     */
    public updateWithHttpInfo(formId: string, hubSpotFormDefinitionPatchRequest: HubSpotFormDefinitionPatchRequest, _options?: Configuration): Observable<HttpInfo<FormDefinitionBase>> {
        const requestContextPromise = this.requestFactory.update(formId, hubSpotFormDefinitionPatchRequest, _options);

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
     * Update some of the form definition components
     * Partially update a form definition
     * @param formId The ID of the form to update.
     * @param hubSpotFormDefinitionPatchRequest 
     */
    public update(formId: string, hubSpotFormDefinitionPatchRequest: HubSpotFormDefinitionPatchRequest, _options?: Configuration): Observable<FormDefinitionBase> {
        return this.updateWithHttpInfo(formId, hubSpotFormDefinitionPatchRequest, _options).pipe(map((apiResponse: HttpInfo<FormDefinitionBase>) => apiResponse.data));
    }

}
