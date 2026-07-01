import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { AbTestCreateRequestVNext } from '../models/AbTestCreateRequestVNext';
import { AbTestEndRequestVNext } from '../models/AbTestEndRequestVNext';
import { AbTestRerunRequestVNext } from '../models/AbTestRerunRequestVNext';
import { AttachToLangPrimaryRequestVNext } from '../models/AttachToLangPrimaryRequestVNext';
import { BatchInputContentFolder } from '../models/BatchInputContentFolder';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputPage } from '../models/BatchInputPage';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseContentFolder } from '../models/BatchResponseContentFolder';
import { BatchResponseContentFolderWithErrors } from '../models/BatchResponseContentFolderWithErrors';
import { BatchResponsePage } from '../models/BatchResponsePage';
import { BatchResponsePageWithErrors } from '../models/BatchResponsePageWithErrors';
import { CollectionResponseWithTotalContentFolderForwardPaging } from '../models/CollectionResponseWithTotalContentFolderForwardPaging';
import { CollectionResponseWithTotalContentFolderVersion } from '../models/CollectionResponseWithTotalContentFolderVersion';
import { CollectionResponseWithTotalPageForwardPaging } from '../models/CollectionResponseWithTotalPageForwardPaging';
import { CollectionResponseWithTotalPageVersion } from '../models/CollectionResponseWithTotalPageVersion';
import { ContentCloneRequestVNext } from '../models/ContentCloneRequestVNext';
import { ContentFolder } from '../models/ContentFolder';
import { ContentFolderVersion } from '../models/ContentFolderVersion';
import { ContentLanguageCloneRequestVNext } from '../models/ContentLanguageCloneRequestVNext';
import { ContentScheduleRequestVNext } from '../models/ContentScheduleRequestVNext';
import { DetachFromLangGroupRequestVNext } from '../models/DetachFromLangGroupRequestVNext';
import { Page } from '../models/Page';
import { PageVersion } from '../models/PageVersion';
import { SetNewLanguagePrimaryRequestVNext } from '../models/SetNewLanguagePrimaryRequestVNext';
import { UpdateLanguagesRequestVNext } from '../models/UpdateLanguagesRequestVNext';
import { ObservableABTestsApi } from './ObservableAPI';

import { ABTestsApiRequestFactory, ABTestsApiResponseProcessor} from "../apis/ABTestsApi";
export class PromiseABTestsApi {
    private api: ObservableABTestsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ABTestsApiRequestFactory,
        responseProcessor?: ABTestsApiResponseProcessor
    ) {
        this.api = new ObservableABTestsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new A/B test variation based on the information provided in the request body. 
     * Create a new A/B test variation
     * @param abTestCreateRequestVNext
     */
    public createABTestVariationWithHttpInfo(abTestCreateRequestVNext: AbTestCreateRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Page>> {
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
        const result = this.api.createABTestVariationWithHttpInfo(abTestCreateRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new A/B test variation based on the information provided in the request body. 
     * Create a new A/B test variation
     * @param abTestCreateRequestVNext
     */
    public createABTestVariation(abTestCreateRequestVNext: AbTestCreateRequestVNext, _options?: PromiseConfigurationOptions): Promise<Page> {
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
        const result = this.api.createABTestVariation(abTestCreateRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new A/B test variation based on the information provided in the request body. 
     * Create a new A/B test variation
     * @param abTestCreateRequestVNext
     */
    public createABTestVariation_1WithHttpInfo(abTestCreateRequestVNext: AbTestCreateRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Page>> {
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
        const result = this.api.createABTestVariation_1WithHttpInfo(abTestCreateRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new A/B test variation based on the information provided in the request body. 
     * Create a new A/B test variation
     * @param abTestCreateRequestVNext
     */
    public createABTestVariation_1(abTestCreateRequestVNext: AbTestCreateRequestVNext, _options?: PromiseConfigurationOptions): Promise<Page> {
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
        const result = this.api.createABTestVariation_1(abTestCreateRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * End an active A/B test and designate a winner.
     * End an active A/B test
     * @param abTestEndRequestVNext
     */
    public endActiveABTestWithHttpInfo(abTestEndRequestVNext: AbTestEndRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.endActiveABTestWithHttpInfo(abTestEndRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * End an active A/B test and designate a winner.
     * End an active A/B test
     * @param abTestEndRequestVNext
     */
    public endActiveABTest(abTestEndRequestVNext: AbTestEndRequestVNext, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.endActiveABTest(abTestEndRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * End an active A/B test and designate a winner.
     * End an active A/B test
     * @param abTestEndRequestVNext
     */
    public endActiveABTest_2WithHttpInfo(abTestEndRequestVNext: AbTestEndRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.endActiveABTest_2WithHttpInfo(abTestEndRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * End an active A/B test and designate a winner.
     * End an active A/B test
     * @param abTestEndRequestVNext
     */
    public endActiveABTest_2(abTestEndRequestVNext: AbTestEndRequestVNext, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.endActiveABTest_2(abTestEndRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Rerun a previous A/B test.
     * Rerun a previous A/B test
     * @param abTestRerunRequestVNext
     */
    public rerunPreviousABTestWithHttpInfo(abTestRerunRequestVNext: AbTestRerunRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.rerunPreviousABTestWithHttpInfo(abTestRerunRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Rerun a previous A/B test.
     * Rerun a previous A/B test
     * @param abTestRerunRequestVNext
     */
    public rerunPreviousABTest(abTestRerunRequestVNext: AbTestRerunRequestVNext, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.rerunPreviousABTest(abTestRerunRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Rerun a previous A/B test.
     * Rerun a previous A/B test
     * @param abTestRerunRequestVNext
     */
    public rerunPreviousABTest_3WithHttpInfo(abTestRerunRequestVNext: AbTestRerunRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.rerunPreviousABTest_3WithHttpInfo(abTestRerunRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Rerun a previous A/B test.
     * Rerun a previous A/B test
     * @param abTestRerunRequestVNext
     */
    public rerunPreviousABTest_3(abTestRerunRequestVNext: AbTestRerunRequestVNext, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.rerunPreviousABTest_3(abTestRerunRequestVNext, observableOptions);
        return result.toPromise();
    }


}



import { ObservableAdvancedApi } from './ObservableAPI';

import { AdvancedApiRequestFactory, AdvancedApiResponseProcessor} from "../apis/AdvancedApi";
export class PromiseAdvancedApi {
    private api: ObservableAdvancedApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AdvancedApiRequestFactory,
        responseProcessor?: AdvancedApiResponseProcessor
    ) {
        this.api = new ObservableAdvancedApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve a previous version of a landing page, specified by page ID and revision ID.
     * Retrieve a previous version of a landing page
     * @param objectId The ID of the landing page.
     * @param revisionId The ID of the specific version to retrieve.
     */
    public getPreviousVersionWithHttpInfo(objectId: string, revisionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PageVersion>> {
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
        const result = this.api.getPreviousVersionWithHttpInfo(objectId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a previous version of a landing page, specified by page ID and revision ID.
     * Retrieve a previous version of a landing page
     * @param objectId The ID of the landing page.
     * @param revisionId The ID of the specific version to retrieve.
     */
    public getPreviousVersion(objectId: string, revisionId: string, _options?: PromiseConfigurationOptions): Promise<PageVersion> {
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
        const result = this.api.getPreviousVersion(objectId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all the previous versions of a landing page, specified by page ID.
     * Retrieve all previous versions of a landing page
     * @param objectId The landing page ID.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [before] The cursor token value to retrieve the set of results before the current page.
     * @param [limit] The maximum number of results to return. Default is 100.
     */
    public getPreviousVersionsWithHttpInfo(objectId: string, after?: string, before?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalPageVersion>> {
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
        const result = this.api.getPreviousVersionsWithHttpInfo(objectId, after, before, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all the previous versions of a landing page, specified by page ID.
     * Retrieve all previous versions of a landing page
     * @param objectId The landing page ID.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [before] The cursor token value to retrieve the set of results before the current page.
     * @param [limit] The maximum number of results to return. Default is 100.
     */
    public getPreviousVersions(objectId: string, after?: string, before?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalPageVersion> {
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
        const result = this.api.getPreviousVersions(objectId, after, before, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Restores a previous version of a landing page, specified by page ID and revision ID.
     * Restore a previous version of a landing page
     * @param objectId The ID of the landing page.
     * @param revisionId The ID of the specified version to restore.
     */
    public restorePreviousVersionWithHttpInfo(objectId: string, revisionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Page>> {
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
        const result = this.api.restorePreviousVersionWithHttpInfo(objectId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Restores a previous version of a landing page, specified by page ID and revision ID.
     * Restore a previous version of a landing page
     * @param objectId The ID of the landing page.
     * @param revisionId The ID of the specified version to restore.
     */
    public restorePreviousVersion(objectId: string, revisionId: string, _options?: PromiseConfigurationOptions): Promise<Page> {
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
        const result = this.api.restorePreviousVersion(objectId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Specify a previous version of a landing page to set as the page draft.
     * Restore a previous version of a landing page
     * @param objectId The ID of the landing page.
     * @param revisionId The ID of the specific version to set as the draft.
     */
    public restorePreviousVersionToDraftWithHttpInfo(objectId: string, revisionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Page>> {
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
        const result = this.api.restorePreviousVersionToDraftWithHttpInfo(objectId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Specify a previous version of a landing page to set as the page draft.
     * Restore a previous version of a landing page
     * @param objectId The ID of the landing page.
     * @param revisionId The ID of the specific version to set as the draft.
     */
    public restorePreviousVersionToDraft(objectId: string, revisionId: number, _options?: PromiseConfigurationOptions): Promise<Page> {
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
        const result = this.api.restorePreviousVersionToDraft(objectId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Restores a website page to a previous version, specified by page ID and version ID.
     * Restore a previous version of a website page
     * @param objectId The ID of the website page.
     * @param revisionId The ID of the specified version to restore.
     */
    public restorePreviousVersion_1WithHttpInfo(objectId: string, revisionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Page>> {
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
        const result = this.api.restorePreviousVersion_1WithHttpInfo(objectId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Restores a website page to a previous version, specified by page ID and version ID.
     * Restore a previous version of a website page
     * @param objectId The ID of the website page.
     * @param revisionId The ID of the specified version to restore.
     */
    public restorePreviousVersion_1(objectId: string, revisionId: string, _options?: PromiseConfigurationOptions): Promise<Page> {
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
        const result = this.api.restorePreviousVersion_1(objectId, revisionId, observableOptions);
        return result.toPromise();
    }


}



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
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [createdAfter] 
     * @param [createdAt] 
     * @param [createdBefore] 
     * @param [limit] The maximum number of results to display per page.
     * @param [property] 
     * @param [sort] 
     * @param [updatedAfter] 
     * @param [updatedAt] 
     * @param [updatedBefore] 
     */
    public cmsPagesV3LandingPagesCursorWithHttpInfo(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, property?: string, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
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
        const result = this.api.cmsPagesV3LandingPagesCursorWithHttpInfo(after, archived, createdAfter, createdAt, createdBefore, limit, property, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [createdAfter] 
     * @param [createdAt] 
     * @param [createdBefore] 
     * @param [limit] The maximum number of results to display per page.
     * @param [property] 
     * @param [sort] 
     * @param [updatedAfter] 
     * @param [updatedAt] 
     * @param [updatedBefore] 
     */
    public cmsPagesV3LandingPagesCursor(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, property?: string, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<any> {
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
        const result = this.api.cmsPagesV3LandingPagesCursor(after, archived, createdAfter, createdAt, createdBefore, limit, property, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [createdAfter] 
     * @param [createdAt] 
     * @param [createdBefore] 
     * @param [limit] The maximum number of results to display per page.
     * @param [property] 
     * @param [sort] 
     * @param [updatedAfter] 
     * @param [updatedAt] 
     * @param [updatedBefore] 
     */
    public cmsPagesV3LandingPagesCursorQueryWithHttpInfo(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, property?: string, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
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
        const result = this.api.cmsPagesV3LandingPagesCursorQueryWithHttpInfo(after, archived, createdAfter, createdAt, createdBefore, limit, property, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [createdAfter] 
     * @param [createdAt] 
     * @param [createdBefore] 
     * @param [limit] The maximum number of results to display per page.
     * @param [property] 
     * @param [sort] 
     * @param [updatedAfter] 
     * @param [updatedAt] 
     * @param [updatedBefore] 
     */
    public cmsPagesV3LandingPagesCursorQuery(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, property?: string, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<any> {
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
        const result = this.api.cmsPagesV3LandingPagesCursorQuery(after, archived, createdAfter, createdAt, createdBefore, limit, property, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [createdAfter] 
     * @param [createdAt] 
     * @param [createdBefore] 
     * @param [limit] The maximum number of results to display per page.
     * @param [property] 
     * @param [sort] 
     * @param [updatedAfter] 
     * @param [updatedAt] 
     * @param [updatedBefore] 
     */
    public cmsPagesV3LandingPagesFoldersCursorWithHttpInfo(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, property?: string, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
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
        const result = this.api.cmsPagesV3LandingPagesFoldersCursorWithHttpInfo(after, archived, createdAfter, createdAt, createdBefore, limit, property, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [createdAfter] 
     * @param [createdAt] 
     * @param [createdBefore] 
     * @param [limit] The maximum number of results to display per page.
     * @param [property] 
     * @param [sort] 
     * @param [updatedAfter] 
     * @param [updatedAt] 
     * @param [updatedBefore] 
     */
    public cmsPagesV3LandingPagesFoldersCursor(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, property?: string, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<any> {
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
        const result = this.api.cmsPagesV3LandingPagesFoldersCursor(after, archived, createdAfter, createdAt, createdBefore, limit, property, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [createdAfter] 
     * @param [createdAt] 
     * @param [createdBefore] 
     * @param [limit] The maximum number of results to display per page.
     * @param [property] 
     * @param [sort] 
     * @param [updatedAfter] 
     * @param [updatedAt] 
     * @param [updatedBefore] 
     */
    public cmsPagesV3LandingPagesFoldersCursorQueryWithHttpInfo(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, property?: string, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
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
        const result = this.api.cmsPagesV3LandingPagesFoldersCursorQueryWithHttpInfo(after, archived, createdAfter, createdAt, createdBefore, limit, property, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [createdAfter] 
     * @param [createdAt] 
     * @param [createdBefore] 
     * @param [limit] The maximum number of results to display per page.
     * @param [property] 
     * @param [sort] 
     * @param [updatedAfter] 
     * @param [updatedAt] 
     * @param [updatedBefore] 
     */
    public cmsPagesV3LandingPagesFoldersCursorQuery(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, property?: string, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<any> {
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
        const result = this.api.cmsPagesV3LandingPagesFoldersCursorQuery(after, archived, createdAfter, createdAt, createdBefore, limit, property, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [createdAfter] 
     * @param [createdAt] 
     * @param [createdBefore] 
     * @param [limit] The maximum number of results to display per page.
     * @param [property] 
     * @param [sort] 
     * @param [updatedAfter] 
     * @param [updatedAt] 
     * @param [updatedBefore] 
     */
    public cmsPagesV3SitePagesCursorWithHttpInfo(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, property?: string, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
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
        const result = this.api.cmsPagesV3SitePagesCursorWithHttpInfo(after, archived, createdAfter, createdAt, createdBefore, limit, property, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [createdAfter] 
     * @param [createdAt] 
     * @param [createdBefore] 
     * @param [limit] The maximum number of results to display per page.
     * @param [property] 
     * @param [sort] 
     * @param [updatedAfter] 
     * @param [updatedAt] 
     * @param [updatedBefore] 
     */
    public cmsPagesV3SitePagesCursor(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, property?: string, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<any> {
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
        const result = this.api.cmsPagesV3SitePagesCursor(after, archived, createdAfter, createdAt, createdBefore, limit, property, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [createdAfter] 
     * @param [createdAt] 
     * @param [createdBefore] 
     * @param [limit] The maximum number of results to display per page.
     * @param [property] 
     * @param [sort] 
     * @param [updatedAfter] 
     * @param [updatedAt] 
     * @param [updatedBefore] 
     */
    public cmsPagesV3SitePagesCursorQueryWithHttpInfo(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, property?: string, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<any>> {
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
        const result = this.api.cmsPagesV3SitePagesCursorQueryWithHttpInfo(after, archived, createdAfter, createdAt, createdBefore, limit, property, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Whether to return only results that have been archived.
     * @param [createdAfter] 
     * @param [createdAt] 
     * @param [createdBefore] 
     * @param [limit] The maximum number of results to display per page.
     * @param [property] 
     * @param [sort] 
     * @param [updatedAfter] 
     * @param [updatedAt] 
     * @param [updatedBefore] 
     */
    public cmsPagesV3SitePagesCursorQuery(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, property?: string, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<any> {
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
        const result = this.api.cmsPagesV3SitePagesCursorQuery(after, archived, createdAfter, createdAt, createdBefore, limit, property, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a previous version of a website page by the revision ID.
     * Retrieve a previous version of a website page
     * @param objectId The ID of the website page.
     * @param revisionId The ID of the specific version to retrieve.
     */
    public getPreviousVersionWithHttpInfo(objectId: string, revisionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PageVersion>> {
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
        const result = this.api.getPreviousVersionWithHttpInfo(objectId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a previous version of a website page by the revision ID.
     * Retrieve a previous version of a website page
     * @param objectId The ID of the website page.
     * @param revisionId The ID of the specific version to retrieve.
     */
    public getPreviousVersion(objectId: string, revisionId: string, _options?: PromiseConfigurationOptions): Promise<PageVersion> {
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
        const result = this.api.getPreviousVersion(objectId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves all the previous versions of a website page, specified by page ID.
     * Retrieve all previous versions of a website page
     * @param objectId The ID of the website page.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [before] The cursor token value to retrieve the set of results before the current page.
     * @param [limit] The maximum number of results to return. Default is 100.
     */
    public getPreviousVersionsWithHttpInfo(objectId: string, after?: string, before?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalPageVersion>> {
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
        const result = this.api.getPreviousVersionsWithHttpInfo(objectId, after, before, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves all the previous versions of a website page, specified by page ID.
     * Retrieve all previous versions of a website page
     * @param objectId The ID of the website page.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [before] The cursor token value to retrieve the set of results before the current page.
     * @param [limit] The maximum number of results to return. Default is 100.
     */
    public getPreviousVersions(objectId: string, after?: string, before?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalPageVersion> {
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
        const result = this.api.getPreviousVersions(objectId, after, before, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Discards any edits and resets the draft to match the live version.
     * Reset the draft of a website page
     * @param objectId The ID of the website page to restore.
     */
    public resetDraftWithHttpInfo(objectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.resetDraftWithHttpInfo(objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Discards any edits and resets the draft to match the live version.
     * Reset the draft of a website page
     * @param objectId The ID of the website page to restore.
     */
    public resetDraft(objectId: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.resetDraft(objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Takes a specified version of a website page and sets it as the new draft version of the page.
     * Restore a previous draft of a website page
     * @param objectId The ID of the website page.
     * @param revisionId The ID of the revision to restore.
     */
    public restorePreviousVersionToDraftWithHttpInfo(objectId: string, revisionId: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Page>> {
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
        const result = this.api.restorePreviousVersionToDraftWithHttpInfo(objectId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Takes a specified version of a website page and sets it as the new draft version of the page.
     * Restore a previous draft of a website page
     * @param objectId The ID of the website page.
     * @param revisionId The ID of the revision to restore.
     */
    public restorePreviousVersionToDraft(objectId: string, revisionId: number, _options?: PromiseConfigurationOptions): Promise<Page> {
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
        const result = this.api.restorePreviousVersionToDraft(objectId, revisionId, observableOptions);
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
     * Delete landing pages specified by ID in the request body. Note: this is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to `true`.
     * Delete landing pages
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
     * Delete landing pages specified by ID in the request body. Note: this is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to `true`.
     * Delete landing pages
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
     * Delete a batch of website pages as specified in the request body. Note: this is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to `true`.
     * Delete website pages
     * @param batchInputString
     */
    public archiveBatch_1WithHttpInfo(batchInputString: BatchInputString, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveBatch_1WithHttpInfo(batchInputString, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a batch of website pages as specified in the request body. Note: this is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to `true`.
     * Delete website pages
     * @param batchInputString
     */
    public archiveBatch_1(batchInputString: BatchInputString, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archiveBatch_1(batchInputString, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a batch of folders as specified in the request body.
     * Delete folders
     * @param batchInputString
     */
    public archiveFoldersWithHttpInfo(batchInputString: BatchInputString, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveFoldersWithHttpInfo(batchInputString, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a batch of folders as specified in the request body.
     * Delete folders
     * @param batchInputString
     */
    public archiveFolders(batchInputString: BatchInputString, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archiveFolders(batchInputString, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a batch of landing pages as detailed in the request body.
     * Create landing pages
     * @param batchInputPage
     */
    public createBatchWithHttpInfo(batchInputPage: BatchInputPage, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
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
        const result = this.api.createBatchWithHttpInfo(batchInputPage, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a batch of landing pages as detailed in the request body.
     * Create landing pages
     * @param batchInputPage
     */
    public createBatch(batchInputPage: BatchInputPage, _options?: PromiseConfigurationOptions): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
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
        const result = this.api.createBatch(batchInputPage, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a batch of website pages as specified in the request body.
     * Create website pages
     * @param batchInputPage
     */
    public createBatch_2WithHttpInfo(batchInputPage: BatchInputPage, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
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
        const result = this.api.createBatch_2WithHttpInfo(batchInputPage, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a batch of website pages as specified in the request body.
     * Create website pages
     * @param batchInputPage
     */
    public createBatch_2(batchInputPage: BatchInputPage, _options?: PromiseConfigurationOptions): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
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
        const result = this.api.createBatch_2(batchInputPage, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a batch of folders as detailed in the request body.
     * Create folders
     * @param batchInputContentFolder
     */
    public createFoldersWithHttpInfo(batchInputContentFolder: BatchInputContentFolder, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>> {
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
        const result = this.api.createFoldersWithHttpInfo(batchInputContentFolder, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a batch of folders as detailed in the request body.
     * Create folders
     * @param batchInputContentFolder
     */
    public createFolders(batchInputContentFolder: BatchInputContentFolder, _options?: PromiseConfigurationOptions): Promise<BatchResponseContentFolder | BatchResponseContentFolderWithErrors> {
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
        const result = this.api.createFolders(batchInputContentFolder, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a batch of landing pages as specified in the request body.
     * Retrieve landing pages
     * @param batchInputString
     * @param [archived] Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     */
    public readBatchWithHttpInfo(batchInputString: BatchInputString, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
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
     * Retrieve a batch of landing pages as specified in the request body.
     * Retrieve landing pages
     * @param batchInputString
     * @param [archived] Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     */
    public readBatch(batchInputString: BatchInputString, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
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
     * Retrieve a batch of website pages as specified in the request body.
     * Retrieve website pages
     * @param batchInputString
     * @param [archived] Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     */
    public readBatch_3WithHttpInfo(batchInputString: BatchInputString, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
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
        const result = this.api.readBatch_3WithHttpInfo(batchInputString, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a batch of website pages as specified in the request body.
     * Retrieve website pages
     * @param batchInputString
     * @param [archived] Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     */
    public readBatch_3(batchInputString: BatchInputString, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
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
        const result = this.api.readBatch_3(batchInputString, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a batch of landing pages as specified in the request body.
     * Update landing pages
     * @param batchInputJsonNode
     * @param [archived] Specifies whether to update deleted Landing Pages. Defaults to &#x60;false&#x60;.
     */
    public updateBatchWithHttpInfo(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
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
     * Update a batch of landing pages as specified in the request body.
     * Update landing pages
     * @param batchInputJsonNode
     * @param [archived] Specifies whether to update deleted Landing Pages. Defaults to &#x60;false&#x60;.
     */
    public updateBatch(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
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

    /**
     * Update a batch of website pages as specified in the request body.
     * Update website pages
     * @param batchInputJsonNode
     * @param [archived] Specifies whether to update deleted Site Pages. Defaults to &#x60;false&#x60;.
     */
    public updateBatch_4WithHttpInfo(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
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
        const result = this.api.updateBatch_4WithHttpInfo(batchInputJsonNode, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a batch of website pages as specified in the request body.
     * Update website pages
     * @param batchInputJsonNode
     * @param [archived] Specifies whether to update deleted Site Pages. Defaults to &#x60;false&#x60;.
     */
    public updateBatch_4(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
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
        const result = this.api.updateBatch_4(batchInputJsonNode, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a batch of landing page folders as specified in the request body.
     * Update folders
     * @param batchInputJsonNode
     * @param [archived] Whether to return only results that have been archived.
     */
    public updateFoldersWithHttpInfo(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>> {
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
        const result = this.api.updateFoldersWithHttpInfo(batchInputJsonNode, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Update a batch of landing page folders as specified in the request body.
     * Update folders
     * @param batchInputJsonNode
     * @param [archived] Whether to return only results that have been archived.
     */
    public updateFolders(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<BatchResponseContentFolder | BatchResponseContentFolderWithErrors> {
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
        const result = this.api.updateFolders(batchInputJsonNode, archived, observableOptions);
        return result.toPromise();
    }


}



import { ObservableFoldersApi } from './ObservableAPI';

import { FoldersApiRequestFactory, FoldersApiResponseProcessor} from "../apis/FoldersApi";
export class PromiseFoldersApi {
    private api: ObservableFoldersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FoldersApiRequestFactory,
        responseProcessor?: FoldersApiResponseProcessor
    ) {
        this.api = new ObservableFoldersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a landing page folder, specified by its ID.
     * Delete a landing page folder
     * @param objectId The ID of the landing page folder.
     * @param [archived] Whether to return only results that have been archived.
     */
    public archiveFolderWithHttpInfo(objectId: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveFolderWithHttpInfo(objectId, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a landing page folder, specified by its ID.
     * Delete a landing page folder
     * @param objectId The ID of the landing page folder.
     * @param [archived] Whether to return only results that have been archived.
     */
    public archiveFolder(objectId: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archiveFolder(objectId, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new folder for landing pages.
     * Create a landing page folder
     * @param contentFolder
     */
    public createFolderWithHttpInfo(contentFolder: ContentFolder, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContentFolder>> {
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
        const result = this.api.createFolderWithHttpInfo(contentFolder, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new folder for landing pages.
     * Create a landing page folder
     * @param contentFolder
     */
    public createFolder(contentFolder: ContentFolder, _options?: PromiseConfigurationOptions): Promise<ContentFolder> {
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
        const result = this.api.createFolder(contentFolder, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a landing page folder, specified by its ID.
     * Retrieve a landing page folder
     * @param objectId The ID of the landing page folder.
     * @param [archived] Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     * @param [property] Specifies which properties of the folder to include in the response.
     */
    public getFolderByIdWithHttpInfo(objectId: string, archived?: boolean, property?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContentFolder>> {
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
        const result = this.api.getFolderByIdWithHttpInfo(objectId, archived, property, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a landing page folder, specified by its ID.
     * Retrieve a landing page folder
     * @param objectId The ID of the landing page folder.
     * @param [archived] Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     * @param [property] Specifies which properties of the folder to include in the response.
     */
    public getFolderById(objectId: string, archived?: boolean, property?: string, _options?: PromiseConfigurationOptions): Promise<ContentFolder> {
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
        const result = this.api.getFolderById(objectId, archived, property, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a previous version of a folder, specified by the folder ID and revision ID.
     * Retrieve a previous version of a folder
     * @param objectId The Folder id.
     * @param revisionId The Folder version id.
     */
    public getFolderPreviousVersionWithHttpInfo(objectId: string, revisionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContentFolderVersion>> {
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
        const result = this.api.getFolderPreviousVersionWithHttpInfo(objectId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a previous version of a folder, specified by the folder ID and revision ID.
     * Retrieve a previous version of a folder
     * @param objectId The Folder id.
     * @param revisionId The Folder version id.
     */
    public getFolderPreviousVersion(objectId: string, revisionId: string, _options?: PromiseConfigurationOptions): Promise<ContentFolderVersion> {
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
        const result = this.api.getFolderPreviousVersion(objectId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves all the previous versions of a landing page folder.
     * Retrieves previous versions of a folder
     * @param objectId The ID of the folder.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [before] The cursor token value to retrieve the set of results before the specified cursor.
     * @param [limit] The maximum number of results to return. Default is 100.
     */
    public getFolderPreviousVersionsWithHttpInfo(objectId: string, after?: string, before?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalContentFolderVersion>> {
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
        const result = this.api.getFolderPreviousVersionsWithHttpInfo(objectId, after, before, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves all the previous versions of a landing page folder.
     * Retrieves previous versions of a folder
     * @param objectId The ID of the folder.
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [before] The cursor token value to retrieve the set of results before the specified cursor.
     * @param [limit] The maximum number of results to return. Default is 100.
     */
    public getFolderPreviousVersions(objectId: string, after?: string, before?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalContentFolderVersion> {
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
        const result = this.api.getFolderPreviousVersions(objectId, after, before, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the list of Landing Page Folders. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all landing page folders
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     * @param [createdAfter] Only return Folders created after the specified time.
     * @param [createdAt] Only return Folders created at exactly the specified time.
     * @param [createdBefore] Only return Folders created before the specified time.
     * @param [limit] The maximum number of results to return. Default is 100.
     * @param [property] Specifies which properties of the landing page folders to include in the response.
     * @param [sort] Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param [updatedAfter] Only return Folders last updated after the specified time.
     * @param [updatedAt] Only return Folders last updated at exactly the specified time.
     * @param [updatedBefore] Only return Folders last updated before the specified time.
     */
    public getFoldersPageWithHttpInfo(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, property?: string, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalContentFolderForwardPaging>> {
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
        const result = this.api.getFoldersPageWithHttpInfo(after, archived, createdAfter, createdAt, createdBefore, limit, property, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the list of Landing Page Folders. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all landing page folders
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     * @param [createdAfter] Only return Folders created after the specified time.
     * @param [createdAt] Only return Folders created at exactly the specified time.
     * @param [createdBefore] Only return Folders created before the specified time.
     * @param [limit] The maximum number of results to return. Default is 100.
     * @param [property] Specifies which properties of the landing page folders to include in the response.
     * @param [sort] Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param [updatedAfter] Only return Folders last updated after the specified time.
     * @param [updatedAt] Only return Folders last updated at exactly the specified time.
     * @param [updatedBefore] Only return Folders last updated before the specified time.
     */
    public getFoldersPage(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, property?: string, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalContentFolderForwardPaging> {
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
        const result = this.api.getFoldersPage(after, archived, createdAfter, createdAt, createdBefore, limit, property, sort, updatedAfter, updatedAt, updatedBefore, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a batch of landing page folders as identified in the request body.
     * Retrieve folders
     * @param batchInputString
     * @param [archived] Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     */
    public readFoldersWithHttpInfo(batchInputString: BatchInputString, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>> {
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
        const result = this.api.readFoldersWithHttpInfo(batchInputString, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a batch of landing page folders as identified in the request body.
     * Retrieve folders
     * @param batchInputString
     * @param [archived] Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     */
    public readFolders(batchInputString: BatchInputString, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<BatchResponseContentFolder | BatchResponseContentFolderWithErrors> {
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
        const result = this.api.readFolders(batchInputString, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Takes a specified version of a landing page folder and restores it.
     * Restore a previous version of a folder
     * @param objectId The Folder id.
     * @param revisionId The Folder version id to restore.
     */
    public restoreFolderPreviousVersionWithHttpInfo(objectId: string, revisionId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContentFolder>> {
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
        const result = this.api.restoreFolderPreviousVersionWithHttpInfo(objectId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Takes a specified version of a landing page folder and restores it.
     * Restore a previous version of a folder
     * @param objectId The Folder id.
     * @param revisionId The Folder version id to restore.
     */
    public restoreFolderPreviousVersion(objectId: string, revisionId: string, _options?: PromiseConfigurationOptions): Promise<ContentFolder> {
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
        const result = this.api.restoreFolderPreviousVersion(objectId, revisionId, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially update a landing page folder, specified by the folder ID. You only need to specify the details values that you are modifying. 
     * Update a landing page folder
     * @param objectId The ID of the landing page folder.
     * @param contentFolder
     * @param [archived] Specifies whether to update deleted Folders. Defaults to &#x60;false&#x60;.
     */
    public updateFolderWithHttpInfo(objectId: string, contentFolder: ContentFolder, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ContentFolder>> {
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
        const result = this.api.updateFolderWithHttpInfo(objectId, contentFolder, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially update a landing page folder, specified by the folder ID. You only need to specify the details values that you are modifying. 
     * Update a landing page folder
     * @param objectId The ID of the landing page folder.
     * @param contentFolder
     * @param [archived] Specifies whether to update deleted Folders. Defaults to &#x60;false&#x60;.
     */
    public updateFolder(objectId: string, contentFolder: ContentFolder, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<ContentFolder> {
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
        const result = this.api.updateFolder(objectId, contentFolder, archived, observableOptions);
        return result.toPromise();
    }


}



import { ObservableLandingPagesApi } from './ObservableAPI';

import { LandingPagesApiRequestFactory, LandingPagesApiResponseProcessor} from "../apis/LandingPagesApi";
export class PromiseLandingPagesApi {
    private api: ObservableLandingPagesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: LandingPagesApiRequestFactory,
        responseProcessor?: LandingPagesApiResponseProcessor
    ) {
        this.api = new ObservableLandingPagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a landing page, specified by its ID.
     * Delete a landing page
     * @param objectId The ID of the landing page.
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
     * Delete a landing page, specified by its ID.
     * Delete a landing page
     * @param objectId The ID of the landing page.
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
     * Create a copy of an existing landing page.
     * Clone a landing page
     * @param contentCloneRequestVNext
     */
    public cloneWithHttpInfo(contentCloneRequestVNext: ContentCloneRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Page>> {
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
        const result = this.api.cloneWithHttpInfo(contentCloneRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a copy of an existing landing page.
     * Clone a landing page
     * @param contentCloneRequestVNext
     */
    public clone(contentCloneRequestVNext: ContentCloneRequestVNext, _options?: PromiseConfigurationOptions): Promise<Page> {
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
        const result = this.api.clone(contentCloneRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new landing page.
     * Create a landing page
     * @param page
     */
    public createWithHttpInfo(page: Page, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Page>> {
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
        const result = this.api.createWithHttpInfo(page, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new landing page.
     * Create a landing page
     * @param page
     */
    public create(page: Page, _options?: PromiseConfigurationOptions): Promise<Page> {
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
        const result = this.api.create(page, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a landing page, specified by its ID.
     * Retrieve a landing page
     * @param objectId The ID of the landing page.
     * @param [archived] Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     * @param [property] Specifies which properties of the landing page to include in the response.
     */
    public getByIdWithHttpInfo(objectId: string, archived?: boolean, property?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Page>> {
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
     * Retrieve a landing page, specified by its ID.
     * Retrieve a landing page
     * @param objectId The ID of the landing page.
     * @param [archived] Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     * @param [property] Specifies which properties of the landing page to include in the response.
     */
    public getById(objectId: string, archived?: boolean, property?: string, _options?: PromiseConfigurationOptions): Promise<Page> {
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
     * Retrieve the full draft version of a landing page, specified by page ID.
     * Retrieve a landing page draft
     * @param objectId The ID of the landing page.
     */
    public getDraftByIdWithHttpInfo(objectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Page>> {
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
        const result = this.api.getDraftByIdWithHttpInfo(objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the full draft version of a landing page, specified by page ID.
     * Retrieve a landing page draft
     * @param objectId The ID of the landing page.
     */
    public getDraftById(objectId: string, _options?: PromiseConfigurationOptions): Promise<Page> {
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
        const result = this.api.getDraftById(objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Get the list of landing pages. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all landing pages
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     * @param [createdAfter] Only return Landing Pages created after the specified time.
     * @param [createdAt] Only return Landing Pages created at exactly the specified time.
     * @param [createdBefore] Only return Landing Pages created before the specified time.
     * @param [limit] The maximum number of results to return. Default is 100.
     * @param [property] Specifies which properties of the landing pages to include in the response.
     * @param [sort] Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param [updatedAfter] Only return Landing Pages last updated after the specified time.
     * @param [updatedAt] Only return Landing Pages last updated at exactly the specified time.
     * @param [updatedBefore] Only return Landing Pages last updated before the specified time.
     */
    public getPageWithHttpInfo(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, property?: string, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalPageForwardPaging>> {
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
     * Get the list of landing pages. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all landing pages
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     * @param [createdAfter] Only return Landing Pages created after the specified time.
     * @param [createdAt] Only return Landing Pages created at exactly the specified time.
     * @param [createdBefore] Only return Landing Pages created before the specified time.
     * @param [limit] The maximum number of results to return. Default is 100.
     * @param [property] Specifies which properties of the landing pages to include in the response.
     * @param [sort] Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param [updatedAfter] Only return Landing Pages last updated after the specified time.
     * @param [updatedAt] Only return Landing Pages last updated at exactly the specified time.
     * @param [updatedBefore] Only return Landing Pages last updated before the specified time.
     */
    public getPage(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, property?: string, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalPageForwardPaging> {
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
     * Take any changes from the draft version of the Landing Page and apply them to the live version.
     * Push Landing Page draft edits live
     * @param objectId The id of the Landing Page for which it\&#39;s draft will be pushed live.
     */
    public pushLiveWithHttpInfo(objectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.pushLiveWithHttpInfo(objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Take any changes from the draft version of the Landing Page and apply them to the live version.
     * Push Landing Page draft edits live
     * @param objectId The id of the Landing Page for which it\&#39;s draft will be pushed live.
     */
    public pushLive(objectId: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.pushLive(objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Discards any edits and resets the draft to match the live version.
     * Reset a landing page draft
     * @param objectId The ID of the landing page to reset.
     */
    public resetDraftWithHttpInfo(objectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.resetDraftWithHttpInfo(objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Discards any edits and resets the draft to match the live version.
     * Reset a landing page draft
     * @param objectId The ID of the landing page to reset.
     */
    public resetDraft(objectId: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.resetDraft(objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Schedule a landing page to be published.
     * Schedule landing page publishing
     * @param contentScheduleRequestVNext
     */
    public scheduleWithHttpInfo(contentScheduleRequestVNext: ContentScheduleRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.scheduleWithHttpInfo(contentScheduleRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Schedule a landing page to be published.
     * Schedule landing page publishing
     * @param contentScheduleRequestVNext
     */
    public schedule(contentScheduleRequestVNext: ContentScheduleRequestVNext, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.schedule(contentScheduleRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Sparse updates a single Landing Page object identified by the id in the path. You only need to specify the column values that you are modifying.
     * Update a landing page
     * @param objectId The ID of the landing page.
     * @param page
     * @param [archived] Specifies whether to update deleted Landing Pages. Defaults to &#x60;false&#x60;.
     */
    public updateWithHttpInfo(objectId: string, page: Page, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Page>> {
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
        const result = this.api.updateWithHttpInfo(objectId, page, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Sparse updates a single Landing Page object identified by the id in the path. You only need to specify the column values that you are modifying.
     * Update a landing page
     * @param objectId The ID of the landing page.
     * @param page
     * @param [archived] Specifies whether to update deleted Landing Pages. Defaults to &#x60;false&#x60;.
     */
    public update(objectId: string, page: Page, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<Page> {
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
        const result = this.api.update(objectId, page, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially updates the draft version of a single landing page, specified by its ID. You only need to specify the column values that you are modifying. 
     * Update the draft of a landing page
     * @param objectId The ID of the landing page.
     * @param page
     */
    public updateDraftWithHttpInfo(objectId: string, page: Page, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Page>> {
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
        const result = this.api.updateDraftWithHttpInfo(objectId, page, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially updates the draft version of a single landing page, specified by its ID. You only need to specify the column values that you are modifying. 
     * Update the draft of a landing page
     * @param objectId The ID of the landing page.
     * @param page
     */
    public updateDraft(objectId: string, page: Page, _options?: PromiseConfigurationOptions): Promise<Page> {
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
        const result = this.api.updateDraft(objectId, page, observableOptions);
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
     * Attach a landing page to a multi-language group.
     * Add a landing page to a multi-language group
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
     * Attach a landing page to a multi-language group.
     * Add a landing page to a multi-language group
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
     * Attach a site page to a multi-language group.
     * Add a website page to a multi-language group
     * @param attachToLangPrimaryRequestVNext
     */
    public attachToLangGroup_1WithHttpInfo(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.attachToLangGroup_1WithHttpInfo(attachToLangPrimaryRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Attach a site page to a multi-language group.
     * Add a website page to a multi-language group
     * @param attachToLangPrimaryRequestVNext
     */
    public attachToLangGroup_1(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.attachToLangGroup_1(attachToLangPrimaryRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new language variation from an existing landing page
     * Create a new language variation
     * @param contentLanguageCloneRequestVNext
     */
    public createLangVariationWithHttpInfo(contentLanguageCloneRequestVNext: ContentLanguageCloneRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Page>> {
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
        const result = this.api.createLangVariationWithHttpInfo(contentLanguageCloneRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new language variation from an existing landing page
     * Create a new language variation
     * @param contentLanguageCloneRequestVNext
     */
    public createLangVariation(contentLanguageCloneRequestVNext: ContentLanguageCloneRequestVNext, _options?: PromiseConfigurationOptions): Promise<Page> {
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
        const result = this.api.createLangVariation(contentLanguageCloneRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new language variation from an existing site page
     * Create a new language variation
     * @param contentLanguageCloneRequestVNext
     */
    public createLangVariation_2WithHttpInfo(contentLanguageCloneRequestVNext: ContentLanguageCloneRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Page>> {
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
        const result = this.api.createLangVariation_2WithHttpInfo(contentLanguageCloneRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new language variation from an existing site page
     * Create a new language variation
     * @param contentLanguageCloneRequestVNext
     */
    public createLangVariation_2(contentLanguageCloneRequestVNext: ContentLanguageCloneRequestVNext, _options?: PromiseConfigurationOptions): Promise<Page> {
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
        const result = this.api.createLangVariation_2(contentLanguageCloneRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Detach a landing page from a multi-language group.
     * Remove a landing page from a multi-language group
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
     * Detach a landing page from a multi-language group.
     * Remove a landing page from a multi-language group
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
     * Detach a website page from a multi-language group.
     * Remove a website page from a multi-language group
     * @param detachFromLangGroupRequestVNext
     */
    public detachFromLangGroup_3WithHttpInfo(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.detachFromLangGroup_3WithHttpInfo(detachFromLangGroupRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Detach a website page from a multi-language group.
     * Remove a website page from a multi-language group
     * @param detachFromLangGroupRequestVNext
     */
    public detachFromLangGroup_3(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.detachFromLangGroup_3(detachFromLangGroupRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Set a site page as the primary language of a multi-language group.
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
     * Set a site page as the primary language of a multi-language group.
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
     * Explicitly set new languages for each landing page in a multi-language group.
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
     * Explicitly set new languages for each landing page in a multi-language group.
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

    /**
     * Explicitly set new languages for each site page in a multi-language group.
     * Update languages of multi-language group
     * @param updateLanguagesRequestVNext
     */
    public updateLangs_4WithHttpInfo(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.updateLangs_4WithHttpInfo(updateLanguagesRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Explicitly set new languages for each site page in a multi-language group.
     * Update languages of multi-language group
     * @param updateLanguagesRequestVNext
     */
    public updateLangs_4(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.updateLangs_4(updateLanguagesRequestVNext, observableOptions);
        return result.toPromise();
    }


}



import { ObservableWebsitePagesApi } from './ObservableAPI';

import { WebsitePagesApiRequestFactory, WebsitePagesApiResponseProcessor} from "../apis/WebsitePagesApi";
export class PromiseWebsitePagesApi {
    private api: ObservableWebsitePagesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WebsitePagesApiRequestFactory,
        responseProcessor?: WebsitePagesApiResponseProcessor
    ) {
        this.api = new ObservableWebsitePagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a website page, specified by its ID.
     * Delete a website page
     * @param objectId The ID of the website page.
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
     * Delete a website page, specified by its ID.
     * Delete a website page
     * @param objectId The ID of the website page.
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
     * Create a copy of an existing website page.
     * Clone a website page
     * @param contentCloneRequestVNext
     */
    public cloneWithHttpInfo(contentCloneRequestVNext: ContentCloneRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Page>> {
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
        const result = this.api.cloneWithHttpInfo(contentCloneRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a copy of an existing website page.
     * Clone a website page
     * @param contentCloneRequestVNext
     */
    public clone(contentCloneRequestVNext: ContentCloneRequestVNext, _options?: PromiseConfigurationOptions): Promise<Page> {
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
        const result = this.api.clone(contentCloneRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new website page.
     * Create a website page
     * @param page
     */
    public createWithHttpInfo(page: Page, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Page>> {
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
        const result = this.api.createWithHttpInfo(page, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new website page.
     * Create a website page
     * @param page
     */
    public create(page: Page, _options?: PromiseConfigurationOptions): Promise<Page> {
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
        const result = this.api.create(page, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a website page by its ID.
     * Retrieve a website page
     * @param objectId The Site Page id.
     * @param [archived] Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     * @param [property] Specifies which properties of the site page to include in the response.
     */
    public getByIdWithHttpInfo(objectId: string, archived?: boolean, property?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Page>> {
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
     * Retrieve a website page by its ID.
     * Retrieve a website page
     * @param objectId The Site Page id.
     * @param [archived] Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     * @param [property] Specifies which properties of the site page to include in the response.
     */
    public getById(objectId: string, archived?: boolean, property?: string, _options?: PromiseConfigurationOptions): Promise<Page> {
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
     * Retrieve the full draft version of a website page, specified by its ID.
     * Retrieve a website page draft
     * @param objectId The ID of the website page.
     */
    public getDraftByIdWithHttpInfo(objectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Page>> {
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
        const result = this.api.getDraftByIdWithHttpInfo(objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the full draft version of a website page, specified by its ID.
     * Retrieve a website page draft
     * @param objectId The ID of the website page.
     */
    public getDraftById(objectId: string, _options?: PromiseConfigurationOptions): Promise<Page> {
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
        const result = this.api.getDraftById(objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve all website pages. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits.
     * Retrieve all website pages
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     * @param [createdAfter] Only return Site Pages created after the specified time.
     * @param [createdAt] Only return Site Pages created at exactly the specified time.
     * @param [createdBefore] Only return Site Pages created before the specified time.
     * @param [limit] The maximum number of results to return. Default is 100.
     * @param [property] Specifies which properties of the site pages to include in the response.
     * @param [sort] Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param [updatedAfter] Only return Site Pages last updated after the specified time.
     * @param [updatedAt] Only return Site Pages last updated at exactly the specified time.
     * @param [updatedBefore] Only return Site Pages last updated before the specified time.
     */
    public getPageWithHttpInfo(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, property?: string, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalPageForwardPaging>> {
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
     * Retrieve all website pages. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits.
     * Retrieve all website pages
     * @param [after] The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param [archived] Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     * @param [createdAfter] Only return Site Pages created after the specified time.
     * @param [createdAt] Only return Site Pages created at exactly the specified time.
     * @param [createdBefore] Only return Site Pages created before the specified time.
     * @param [limit] The maximum number of results to return. Default is 100.
     * @param [property] Specifies which properties of the site pages to include in the response.
     * @param [sort] Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param [updatedAfter] Only return Site Pages last updated after the specified time.
     * @param [updatedAt] Only return Site Pages last updated at exactly the specified time.
     * @param [updatedBefore] Only return Site Pages last updated before the specified time.
     */
    public getPage(after?: string, archived?: boolean, createdAfter?: Date, createdAt?: Date, createdBefore?: Date, limit?: number, property?: string, sort?: Array<string>, updatedAfter?: Date, updatedAt?: Date, updatedBefore?: Date, _options?: PromiseConfigurationOptions): Promise<CollectionResponseWithTotalPageForwardPaging> {
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
     * Take any changes from the draft version of the website page and apply them to the live version.
     * Publish website page draft
     * @param objectId The ID of the website page.
     */
    public pushLiveWithHttpInfo(objectId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.pushLiveWithHttpInfo(objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Take any changes from the draft version of the website page and apply them to the live version.
     * Publish website page draft
     * @param objectId The ID of the website page.
     */
    public pushLive(objectId: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.pushLive(objectId, observableOptions);
        return result.toPromise();
    }

    /**
     * Schedule a website page to published at a future time.
     * Schedule a website page to be published
     * @param contentScheduleRequestVNext
     */
    public scheduleWithHttpInfo(contentScheduleRequestVNext: ContentScheduleRequestVNext, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.scheduleWithHttpInfo(contentScheduleRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Schedule a website page to published at a future time.
     * Schedule a website page to be published
     * @param contentScheduleRequestVNext
     */
    public schedule(contentScheduleRequestVNext: ContentScheduleRequestVNext, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.schedule(contentScheduleRequestVNext, observableOptions);
        return result.toPromise();
    }

    /**
     * Set a landing page as the primary language of a multi-language group.
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
     * Set a landing page as the primary language of a multi-language group.
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
     * Partially updates a single website page, specified by its ID. You only need to specify the column values that you are modifying. 
     * Update a website page
     * @param objectId The ID of the website page.
     * @param page
     * @param [archived] Specifies whether to update deleted Site Pages. Defaults to &#x60;false&#x60;.
     */
    public updateWithHttpInfo(objectId: string, page: Page, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Page>> {
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
        const result = this.api.updateWithHttpInfo(objectId, page, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially updates a single website page, specified by its ID. You only need to specify the column values that you are modifying. 
     * Update a website page
     * @param objectId The ID of the website page.
     * @param page
     * @param [archived] Specifies whether to update deleted Site Pages. Defaults to &#x60;false&#x60;.
     */
    public update(objectId: string, page: Page, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<Page> {
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
        const result = this.api.update(objectId, page, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially update the draft version of a website page, specified by page ID. You only need to specify the values for the details that you\'re modifying.
     * Update a website page draft
     * @param objectId The ID of the website page.
     * @param page
     */
    public updateDraftWithHttpInfo(objectId: string, page: Page, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Page>> {
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
        const result = this.api.updateDraftWithHttpInfo(objectId, page, observableOptions);
        return result.toPromise();
    }

    /**
     * Partially update the draft version of a website page, specified by page ID. You only need to specify the values for the details that you\'re modifying.
     * Update a website page draft
     * @param objectId The ID of the website page.
     * @param page
     */
    public updateDraft(objectId: string, page: Page, _options?: PromiseConfigurationOptions): Promise<Page> {
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
        const result = this.api.updateDraft(objectId, page, observableOptions);
        return result.toPromise();
    }


}



