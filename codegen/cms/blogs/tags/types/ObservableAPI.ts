import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AttachToLangPrimaryRequestVNext } from '../models/AttachToLangPrimaryRequestVNext';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchInputTag } from '../models/BatchInputTag';
import { BatchResponseTag } from '../models/BatchResponseTag';
import { BatchResponseTagWithErrors } from '../models/BatchResponseTagWithErrors';
import { CollectionResponseWithTotalTagForwardPaging } from '../models/CollectionResponseWithTotalTagForwardPaging';
import { DetachFromLangGroupRequestVNext } from '../models/DetachFromLangGroupRequestVNext';
import { SetNewLanguagePrimaryRequestVNext } from '../models/SetNewLanguagePrimaryRequestVNext';
import { Tag } from '../models/Tag';
import { TagCloneRequestVNext } from '../models/TagCloneRequestVNext';
import { UpdateLanguagesRequestVNext } from '../models/UpdateLanguagesRequestVNext';

import { BlogTagsApiRequestFactory, BlogTagsApiResponseProcessor} from "../apis/BlogTagsApi";
export class ObservableBlogTagsApi {
    private requestFactory: BlogTagsApiRequestFactory;
    private responseProcessor: BlogTagsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BlogTagsApiRequestFactory,
        responseProcessor?: BlogTagsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BlogTagsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BlogTagsApiResponseProcessor();
    }

    /**
     * Delete the Blog Tag object identified by the id in the path.
     * Delete a Blog Tag
     * @param objectId The Blog Tag id.
     * @param archived Whether to return only results that have been archived.
     */
    public archiveWithHttpInfo(objectId: string, archived?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(objectId, archived, _options);

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
     * Delete the Blog Tag object identified by the id in the path.
     * Delete a Blog Tag
     * @param objectId The Blog Tag id.
     * @param archived Whether to return only results that have been archived.
     */
    public archive(objectId: string, archived?: boolean, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(objectId, archived, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete the Blog Tag objects identified in the request body.
     * Delete a batch of Blog Tags
     * @param batchInputString The JSON array of Blog Tag ids.
     */
    public archiveBatchWithHttpInfo(batchInputString: BatchInputString, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archiveBatch(batchInputString, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete the Blog Tag objects identified in the request body.
     * Delete a batch of Blog Tags
     * @param batchInputString The JSON array of Blog Tag ids.
     */
    public archiveBatch(batchInputString: BatchInputString, _options?: Configuration): Observable<void> {
        return this.archiveBatchWithHttpInfo(batchInputString, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Attach a Blog Tag to a multi-language group.
     * Attach a Blog Tag to a multi-language group
     * @param attachToLangPrimaryRequestVNext The JSON representation of the AttachToLangPrimaryRequest object.
     */
    public attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.attachToLangGroup(attachToLangPrimaryRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.attachToLangGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Attach a Blog Tag to a multi-language group.
     * Attach a Blog Tag to a multi-language group
     * @param attachToLangPrimaryRequestVNext The JSON representation of the AttachToLangPrimaryRequest object.
     */
    public attachToLangGroup(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: Configuration): Observable<void> {
        return this.attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create a new Blog Tag.
     * Create a new Blog Tag
     * @param tag The JSON representation of a new Blog Tag.
     */
    public createWithHttpInfo(tag: Tag, _options?: Configuration): Observable<HttpInfo<Tag>> {
        const requestContextPromise = this.requestFactory.create(tag, _options);

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
     * Create a new Blog Tag.
     * Create a new Blog Tag
     * @param tag The JSON representation of a new Blog Tag.
     */
    public create(tag: Tag, _options?: Configuration): Observable<Tag> {
        return this.createWithHttpInfo(tag, _options).pipe(map((apiResponse: HttpInfo<Tag>) => apiResponse.data));
    }

    /**
     * Create the Blog Tag objects detailed in the request body.
     * Create a batch of Blog Tags
     * @param batchInputTag The JSON array of new Blog Tags to create.
     */
    public createBatchWithHttpInfo(batchInputTag: BatchInputTag, _options?: Configuration): Observable<HttpInfo<BatchResponseTag | BatchResponseTagWithErrors>> {
        const requestContextPromise = this.requestFactory.createBatch(batchInputTag, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create the Blog Tag objects detailed in the request body.
     * Create a batch of Blog Tags
     * @param batchInputTag The JSON array of new Blog Tags to create.
     */
    public createBatch(batchInputTag: BatchInputTag, _options?: Configuration): Observable<BatchResponseTag | BatchResponseTagWithErrors> {
        return this.createBatchWithHttpInfo(batchInputTag, _options).pipe(map((apiResponse: HttpInfo<BatchResponseTag | BatchResponseTagWithErrors>) => apiResponse.data));
    }

    /**
     * Create a new language variation from an existing Blog Tag
     * Create a new language variation
     * @param tagCloneRequestVNext The JSON representation of the ContentLanguageCloneRequest object.
     */
    public createLangVariationWithHttpInfo(tagCloneRequestVNext: TagCloneRequestVNext, _options?: Configuration): Observable<HttpInfo<Tag>> {
        const requestContextPromise = this.requestFactory.createLangVariation(tagCloneRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createLangVariationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new language variation from an existing Blog Tag
     * Create a new language variation
     * @param tagCloneRequestVNext The JSON representation of the ContentLanguageCloneRequest object.
     */
    public createLangVariation(tagCloneRequestVNext: TagCloneRequestVNext, _options?: Configuration): Observable<Tag> {
        return this.createLangVariationWithHttpInfo(tagCloneRequestVNext, _options).pipe(map((apiResponse: HttpInfo<Tag>) => apiResponse.data));
    }

    /**
     * Detach a Blog Tag from a multi-language group.
     * Detach a Blog Tag from a multi-language group
     * @param detachFromLangGroupRequestVNext The JSON representation of the DetachFromLangGroupRequest object.
     */
    public detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.detachFromLangGroup(detachFromLangGroupRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.detachFromLangGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Detach a Blog Tag from a multi-language group.
     * Detach a Blog Tag from a multi-language group
     * @param detachFromLangGroupRequestVNext The JSON representation of the DetachFromLangGroupRequest object.
     */
    public detachFromLangGroup(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: Configuration): Observable<void> {
        return this.detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve the Blog Tag object identified by the id in the path.
     * Retrieve a Blog Tag
     * @param objectId The Blog Tag id.
     * @param archived Specifies whether to return deleted Blog Tags. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getByIdWithHttpInfo(objectId: string, archived?: boolean, property?: string, _options?: Configuration): Observable<HttpInfo<Tag>> {
        const requestContextPromise = this.requestFactory.getById(objectId, archived, property, _options);

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
     * Retrieve the Blog Tag object identified by the id in the path.
     * Retrieve a Blog Tag
     * @param objectId The Blog Tag id.
     * @param archived Specifies whether to return deleted Blog Tags. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getById(objectId: string, archived?: boolean, property?: string, _options?: Configuration): Observable<Tag> {
        return this.getByIdWithHttpInfo(objectId, archived, property, _options).pipe(map((apiResponse: HttpInfo<Tag>) => apiResponse.data));
    }

    /**
     * Get the list of blog tags. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Tags
     * @param createdAt Only return Blog Tags created at exactly the specified time.
     * @param createdAfter Only return Blog Tags created after the specified time.
     * @param createdBefore Only return Blog Tags created before the specified time.
     * @param updatedAt Only return Blog Tags last updated at exactly the specified time.
     * @param updatedAfter Only return Blog Tags last updated after the specified time.
     * @param updatedBefore Only return Blog Tags last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 100.
     * @param archived Specifies whether to return deleted Blog Tags. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getPageWithHttpInfo(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, property?: string, _options?: Configuration): Observable<HttpInfo<CollectionResponseWithTotalTagForwardPaging>> {
        const requestContextPromise = this.requestFactory.getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options);

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
     * Get the list of blog tags. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Tags
     * @param createdAt Only return Blog Tags created at exactly the specified time.
     * @param createdAfter Only return Blog Tags created after the specified time.
     * @param createdBefore Only return Blog Tags created before the specified time.
     * @param updatedAt Only return Blog Tags last updated at exactly the specified time.
     * @param updatedAfter Only return Blog Tags last updated after the specified time.
     * @param updatedBefore Only return Blog Tags last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 100.
     * @param archived Specifies whether to return deleted Blog Tags. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, property?: string, _options?: Configuration): Observable<CollectionResponseWithTotalTagForwardPaging> {
        return this.getPageWithHttpInfo(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalTagForwardPaging>) => apiResponse.data));
    }

    /**
     * Retrieve the Blog Tag objects identified in the request body.
     * Retrieve a batch of Blog Tags
     * @param batchInputString The JSON array of Blog Tag ids.
     * @param archived Specifies whether to return deleted Blog Tags. Defaults to &#x60;false&#x60;.
     */
    public readBatchWithHttpInfo(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Observable<HttpInfo<BatchResponseTag | BatchResponseTagWithErrors>> {
        const requestContextPromise = this.requestFactory.readBatch(batchInputString, archived, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the Blog Tag objects identified in the request body.
     * Retrieve a batch of Blog Tags
     * @param batchInputString The JSON array of Blog Tag ids.
     * @param archived Specifies whether to return deleted Blog Tags. Defaults to &#x60;false&#x60;.
     */
    public readBatch(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Observable<BatchResponseTag | BatchResponseTagWithErrors> {
        return this.readBatchWithHttpInfo(batchInputString, archived, _options).pipe(map((apiResponse: HttpInfo<BatchResponseTag | BatchResponseTagWithErrors>) => apiResponse.data));
    }

    /**
     * Set a Blog Tag as the primary language of a multi-language group.
     * Set a new primary language
     * @param setNewLanguagePrimaryRequestVNext The JSON representation of the SetNewLanguagePrimaryRequest object.
     */
    public setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.setLangPrimary(setNewLanguagePrimaryRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setLangPrimaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set a Blog Tag as the primary language of a multi-language group.
     * Set a new primary language
     * @param setNewLanguagePrimaryRequestVNext The JSON representation of the SetNewLanguagePrimaryRequest object.
     */
    public setLangPrimary(setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext, _options?: Configuration): Observable<void> {
        return this.setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Sparse updates a single Blog Tag object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Tag
     * @param objectId The Blog Tag id.
     * @param tag The JSON representation of the updated Blog Tag.
     * @param archived Specifies whether to update deleted Blog Tags. Defaults to &#x60;false&#x60;.
     */
    public updateWithHttpInfo(objectId: string, tag: Tag, archived?: boolean, _options?: Configuration): Observable<HttpInfo<Tag>> {
        const requestContextPromise = this.requestFactory.update(objectId, tag, archived, _options);

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
     * Sparse updates a single Blog Tag object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Tag
     * @param objectId The Blog Tag id.
     * @param tag The JSON representation of the updated Blog Tag.
     * @param archived Specifies whether to update deleted Blog Tags. Defaults to &#x60;false&#x60;.
     */
    public update(objectId: string, tag: Tag, archived?: boolean, _options?: Configuration): Observable<Tag> {
        return this.updateWithHttpInfo(objectId, tag, archived, _options).pipe(map((apiResponse: HttpInfo<Tag>) => apiResponse.data));
    }

    /**
     * Update the Blog Tag objects identified in the request body.
     * Update a batch of Blog Tags
     * @param batchInputJsonNode A JSON array of the JSON representations of the updated Blog Tags.
     * @param archived Specifies whether to update deleted Blog Tags. Defaults to &#x60;false&#x60;.
     */
    public updateBatchWithHttpInfo(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Observable<HttpInfo<BatchResponseTag | BatchResponseTagWithErrors>> {
        const requestContextPromise = this.requestFactory.updateBatch(batchInputJsonNode, archived, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the Blog Tag objects identified in the request body.
     * Update a batch of Blog Tags
     * @param batchInputJsonNode A JSON array of the JSON representations of the updated Blog Tags.
     * @param archived Specifies whether to update deleted Blog Tags. Defaults to &#x60;false&#x60;.
     */
    public updateBatch(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Observable<BatchResponseTag | BatchResponseTagWithErrors> {
        return this.updateBatchWithHttpInfo(batchInputJsonNode, archived, _options).pipe(map((apiResponse: HttpInfo<BatchResponseTag | BatchResponseTagWithErrors>) => apiResponse.data));
    }

    /**
     * Explicitly set new languages for each Blog Tag in a multi-language group.
     * Update languages of multi-language group
     * @param updateLanguagesRequestVNext The JSON representation of the UpdateLanguagesRequest object.
     */
    public updateLangsWithHttpInfo(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateLangs(updateLanguagesRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateLangsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Explicitly set new languages for each Blog Tag in a multi-language group.
     * Update languages of multi-language group
     * @param updateLanguagesRequestVNext The JSON representation of the UpdateLanguagesRequest object.
     */
    public updateLangs(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: Configuration): Observable<void> {
        return this.updateLangsWithHttpInfo(updateLanguagesRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
