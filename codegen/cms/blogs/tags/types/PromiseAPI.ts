import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

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
import { ObservableBasicApi } from './ObservableAPI';

import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";
export class PromiseBasicApi {
    private api: ObservableBasicApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicApiRequestFactory,
        responseProcessor?: BasicApiResponseProcessor
    ) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete the Blog Tag object identified by the id in the path.
     * Delete a Blog Tag
     * @param objectId The Blog Tag id.
     * @param [archived] Whether to return only results that have been archived.
     */
    public archiveWithHttpInfo(objectId: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveWithHttpInfo(objectId, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete the Blog Tag object identified by the id in the path.
     * Delete a Blog Tag
     * @param objectId The Blog Tag id.
     * @param [archived] Whether to return only results that have been archived.
     */
    public archive(objectId: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archive(objectId, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Blog Tag.
     * Create a new Blog Tag
     * @param tag
     */
    public createWithHttpInfo(tag: Tag, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Tag>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createWithHttpInfo(tag, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new Blog Tag.
     * Create a new Blog Tag
     * @param tag
     */
    public create(tag: Tag, _options?: PromiseConfigurationOptions): Promise<Tag> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.create(tag, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the Blog Tag object identified by the id in the path.
     * Retrieve a Blog Tag
     * @param objectId The Blog Tag id.
     * @param [archived] Specifies whether to return deleted Blog Tags. Defaults to &#x60;false&#x60;.
     * @param [property] Specifies which properties of the Blog Tag to include in the response.
     */
    public getByIdWithHttpInfo(objectId: string, archived?: boolean, property?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Tag>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getByIdWithHttpInfo(objectId, archived, property, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the Blog Tag object identified by the id in the path.
     * Retrieve a Blog Tag
     * @param objectId The Blog Tag id.
     * @param [archived] Specifies whether to return deleted Blog Tags. Defaults to &#x60;false&#x60;.
     * @param [property] Specifies which properties of the Blog Tag to include in the response.
     */
    public getById(objectId: string, archived?: boolean, property?: string, _options?: PromiseConfigurationOptions): Promise<Tag> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getById(objectId, archived, property, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the list of blog tags. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Tags
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Specifies whether to return deleted Blog Tags. Defaults to &#x60;false&#x60;.
     * @param [createdAfter] Only return Blog Tags created after the specified time.
     * @param [createdAt] Only return Blog Tags created at exactly the specified time.
     * @param [createdBefore] Only return Blog Tags created before the specified time.
     * @param [limit] The maximum number of results to return. Default is 100.
     * @param [property] Specifies which properties of the Blog Tag to include in the response.
     * @param [sort] Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param [updatedAfter] Only return Blog Tags last updated after the specified time.
     * @param [updatedAt] Only return Blog Tags last updated at exactly the specified time.
     * @param [updatedBefore] Only return Blog Tags last updated before the specified time.
     */
    public getPageWithHttpInfo(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, property?: string, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalTagForwardPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPageWithHttpInfo(after, archived, createdAfter, createdAt, createdBefore, limit, property, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the list of blog tags. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Blog Tags
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Specifies whether to return deleted Blog Tags. Defaults to &#x60;false&#x60;.
     * @param [createdAfter] Only return Blog Tags created after the specified time.
     * @param [createdAt] Only return Blog Tags created at exactly the specified time.
     * @param [createdBefore] Only return Blog Tags created before the specified time.
     * @param [limit] The maximum number of results to return. Default is 100.
     * @param [property] Specifies which properties of the Blog Tag to include in the response.
     * @param [sort] Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param [updatedAfter] Only return Blog Tags last updated after the specified time.
     * @param [updatedAt] Only return Blog Tags last updated at exactly the specified time.
     * @param [updatedBefore] Only return Blog Tags last updated before the specified time.
     */
    public getPage(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, property?: string, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalTagForwardPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getPage(after, archived, createdAfter, createdAt, createdBefore, limit, property, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * Sparse updates a single Blog Tag object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Tag
     * @param objectId The Blog Tag id.
     * @param tag
     * @param [archived] Specifies whether to update deleted Blog Tags. Defaults to &#x60;false&#x60;.
     */
    public updateWithHttpInfo(objectId: string, tag: Tag, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Tag>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateWithHttpInfo(objectId, tag, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Sparse updates a single Blog Tag object identified by the id in the path. All the column values need not be specified. Only the that need to be modified can be specified. 
     * Update a Blog Tag
     * @param objectId The Blog Tag id.
     * @param tag
     * @param [archived] Specifies whether to update deleted Blog Tags. Defaults to &#x60;false&#x60;.
     */
    public update(objectId: string, tag: Tag, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<Tag> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.update(objectId, tag, archived, observableOptions);
        return result.toPromise();
    }


}



import { ObservableBatchApi } from './ObservableAPI';

import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";
export class PromiseBatchApi {
    private api: ObservableBatchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BatchApiRequestFactory,
        responseProcessor?: BatchApiResponseProcessor
    ) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete the Blog Tag objects identified in the request body.
     * Delete a batch of Blog Tags
     * @param batchInputString
     */
    public archiveBatchWithHttpInfo(batchInputString: BatchInputString, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveBatchWithHttpInfo(batchInputString, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete the Blog Tag objects identified in the request body.
     * Delete a batch of Blog Tags
     * @param batchInputString
     */
    public archiveBatch(batchInputString: BatchInputString, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveBatch(batchInputString, observableOptions);
        return result.toPromise();
    }

    /**
     * Create the Blog Tag objects detailed in the request body.
     * Create a batch of Blog Tags
     * @param batchInputTag
     */
    public createBatchWithHttpInfo(batchInputTag: BatchInputTag, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseTag | BatchResponseTagWithErrors>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createBatchWithHttpInfo(batchInputTag, observableOptions);
        return result.toPromise();
    }

    /**
     * Create the Blog Tag objects detailed in the request body.
     * Create a batch of Blog Tags
     * @param batchInputTag
     */
    public createBatch(batchInputTag: BatchInputTag, _options?: PromiseConfigurationOptions): Promise<BatchResponseTag | BatchResponseTagWithErrors> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createBatch(batchInputTag, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the Blog Tag objects identified in the request body.
     * Retrieve a batch of Blog Tags
     * @param batchInputString
     * @param [archived] Specifies whether to return deleted Blog Tags. Defaults to &#x60;false&#x60;.
     */
    public readBatchWithHttpInfo(batchInputString: BatchInputString, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseTag | BatchResponseTagWithErrors>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.readBatchWithHttpInfo(batchInputString, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the Blog Tag objects identified in the request body.
     * Retrieve a batch of Blog Tags
     * @param batchInputString
     * @param [archived] Specifies whether to return deleted Blog Tags. Defaults to &#x60;false&#x60;.
     */
    public readBatch(batchInputString: BatchInputString, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<BatchResponseTag | BatchResponseTagWithErrors> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.readBatch(batchInputString, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the Blog Tag objects identified in the request body.
     * Update a batch of Blog Tags
     * @param batchInputJsonNode
     * @param [archived] Specifies whether to update deleted Blog Tags. Defaults to &#x60;false&#x60;.
     */
    public updateBatchWithHttpInfo(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseTag | BatchResponseTagWithErrors>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateBatchWithHttpInfo(batchInputJsonNode, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the Blog Tag objects identified in the request body.
     * Update a batch of Blog Tags
     * @param batchInputJsonNode
     * @param [archived] Specifies whether to update deleted Blog Tags. Defaults to &#x60;false&#x60;.
     */
    public updateBatch(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<BatchResponseTag | BatchResponseTagWithErrors> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateBatch(batchInputJsonNode, archived, observableOptions);
        return result.toPromise();
    }


}



import { ObservableMultiLanguageApi } from './ObservableAPI';

import { MultiLanguageApiRequestFactory, MultiLanguageApiResponseProcessor} from "../apis/MultiLanguageApi";
export class PromiseMultiLanguageApi {
    private api: ObservableMultiLanguageApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MultiLanguageApiRequestFactory,
        responseProcessor?: MultiLanguageApiResponseProcessor
    ) {
        this.api = new ObservableMultiLanguageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Attach a Blog Tag to a multi-language group.
     * Attach a Blog Tag to a multi-language group
     * @param attachToLangPrimaryRequestVNext
     */
    public attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Attach a Blog Tag to a multi-language group.
     * Attach a Blog Tag to a multi-language group
     * @param attachToLangPrimaryRequestVNext
     */
    public attachToLangGroup(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.attachToLangGroup(attachToLangPrimaryRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new language variation from an existing Blog Tag
     * Create a new language variation
     * @param tagCloneRequestVNext
     */
    public createLangVariationWithHttpInfo(tagCloneRequestVNext: TagCloneRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Tag>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createLangVariationWithHttpInfo(tagCloneRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new language variation from an existing Blog Tag
     * Create a new language variation
     * @param tagCloneRequestVNext
     */
    public createLangVariation(tagCloneRequestVNext: TagCloneRequestVNext, _options?: PromiseConfigurationOptions): Promise<Tag> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createLangVariation(tagCloneRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Detach a Blog Tag from a multi-language group.
     * Detach a Blog Tag from a multi-language group
     * @param detachFromLangGroupRequestVNext
     */
    public detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Detach a Blog Tag from a multi-language group.
     * Detach a Blog Tag from a multi-language group
     * @param detachFromLangGroupRequestVNext
     */
    public detachFromLangGroup(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.detachFromLangGroup(detachFromLangGroupRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Set a Blog Tag as the primary language of a multi-language group.
     * Set a new primary language
     * @param setNewLanguagePrimaryRequestVNext
     */
    public setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Set a Blog Tag as the primary language of a multi-language group.
     * Set a new primary language
     * @param setNewLanguagePrimaryRequestVNext
     */
    public setLangPrimary(setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.setLangPrimary(setNewLanguagePrimaryRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Explicitly set new languages for each Blog Tag in a multi-language group.
     * Update languages of multi-language group
     * @param updateLanguagesRequestVNext
     */
    public updateLangsWithHttpInfo(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateLangsWithHttpInfo(updateLanguagesRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Explicitly set new languages for each Blog Tag in a multi-language group.
     * Update languages of multi-language group
     * @param updateLanguagesRequestVNext
     */
    public updateLangs(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateLangs(updateLanguagesRequestVNext, observableOptions);
        return result.toPromise();
    }


}



