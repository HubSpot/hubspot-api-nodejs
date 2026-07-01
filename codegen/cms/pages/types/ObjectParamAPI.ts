import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

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

import { ObservableABTestsApi } from "./ObservableAPI";
import { ABTestsApiRequestFactory, ABTestsApiResponseProcessor} from "../apis/ABTestsApi";

export interface ABTestsApiCreateABTestVariationRequest {
    /**
     * 
     * @type AbTestCreateRequestVNext
     * @memberof ABTestsApicreateABTestVariation
     */
    abTestCreateRequestVNext: AbTestCreateRequestVNext
}

export interface ABTestsApiCreateABTestVariation0Request {
    /**
     * 
     * @type AbTestCreateRequestVNext
     * @memberof ABTestsApicreateABTestVariation_1
     */
    abTestCreateRequestVNext: AbTestCreateRequestVNext
}

export interface ABTestsApiEndActiveABTestRequest {
    /**
     * 
     * @type AbTestEndRequestVNext
     * @memberof ABTestsApiendActiveABTest
     */
    abTestEndRequestVNext: AbTestEndRequestVNext
}

export interface ABTestsApiEndActiveABTest0Request {
    /**
     * 
     * @type AbTestEndRequestVNext
     * @memberof ABTestsApiendActiveABTest_2
     */
    abTestEndRequestVNext: AbTestEndRequestVNext
}

export interface ABTestsApiRerunPreviousABTestRequest {
    /**
     * 
     * @type AbTestRerunRequestVNext
     * @memberof ABTestsApirerunPreviousABTest
     */
    abTestRerunRequestVNext: AbTestRerunRequestVNext
}

export interface ABTestsApiRerunPreviousABTest0Request {
    /**
     * 
     * @type AbTestRerunRequestVNext
     * @memberof ABTestsApirerunPreviousABTest_3
     */
    abTestRerunRequestVNext: AbTestRerunRequestVNext
}

export class ObjectABTestsApi {
    private api: ObservableABTestsApi

    public constructor(configuration: Configuration, requestFactory?: ABTestsApiRequestFactory, responseProcessor?: ABTestsApiResponseProcessor) {
        this.api = new ObservableABTestsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new A/B test variation based on the information provided in the request body. 
     * Create a new A/B test variation
     * @param param the request object
     */
    public createABTestVariationWithHttpInfo(param: ABTestsApiCreateABTestVariationRequest, options?: ConfigurationOptions): Promise<HttpInfo<Page>> {
        return this.api.createABTestVariationWithHttpInfo(param.abTestCreateRequestVNext,  options).toPromise();
    }

    /**
     * Create a new A/B test variation based on the information provided in the request body. 
     * Create a new A/B test variation
     * @param param the request object
     */
    public createABTestVariation(param: ABTestsApiCreateABTestVariationRequest, options?: ConfigurationOptions): Promise<Page> {
        return this.api.createABTestVariation(param.abTestCreateRequestVNext,  options).toPromise();
    }

    /**
     * Create a new A/B test variation based on the information provided in the request body. 
     * Create a new A/B test variation
     * @param param the request object
     */
    public createABTestVariation_1WithHttpInfo(param: ABTestsApiCreateABTestVariation0Request, options?: ConfigurationOptions): Promise<HttpInfo<Page>> {
        return this.api.createABTestVariation_1WithHttpInfo(param.abTestCreateRequestVNext,  options).toPromise();
    }

    /**
     * Create a new A/B test variation based on the information provided in the request body. 
     * Create a new A/B test variation
     * @param param the request object
     */
    public createABTestVariation_1(param: ABTestsApiCreateABTestVariation0Request, options?: ConfigurationOptions): Promise<Page> {
        return this.api.createABTestVariation_1(param.abTestCreateRequestVNext,  options).toPromise();
    }

    /**
     * End an active A/B test and designate a winner.
     * End an active A/B test
     * @param param the request object
     */
    public endActiveABTestWithHttpInfo(param: ABTestsApiEndActiveABTestRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.endActiveABTestWithHttpInfo(param.abTestEndRequestVNext,  options).toPromise();
    }

    /**
     * End an active A/B test and designate a winner.
     * End an active A/B test
     * @param param the request object
     */
    public endActiveABTest(param: ABTestsApiEndActiveABTestRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.endActiveABTest(param.abTestEndRequestVNext,  options).toPromise();
    }

    /**
     * End an active A/B test and designate a winner.
     * End an active A/B test
     * @param param the request object
     */
    public endActiveABTest_2WithHttpInfo(param: ABTestsApiEndActiveABTest0Request, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.endActiveABTest_2WithHttpInfo(param.abTestEndRequestVNext,  options).toPromise();
    }

    /**
     * End an active A/B test and designate a winner.
     * End an active A/B test
     * @param param the request object
     */
    public endActiveABTest_2(param: ABTestsApiEndActiveABTest0Request, options?: ConfigurationOptions): Promise<void> {
        return this.api.endActiveABTest_2(param.abTestEndRequestVNext,  options).toPromise();
    }

    /**
     * Rerun a previous A/B test.
     * Rerun a previous A/B test
     * @param param the request object
     */
    public rerunPreviousABTestWithHttpInfo(param: ABTestsApiRerunPreviousABTestRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.rerunPreviousABTestWithHttpInfo(param.abTestRerunRequestVNext,  options).toPromise();
    }

    /**
     * Rerun a previous A/B test.
     * Rerun a previous A/B test
     * @param param the request object
     */
    public rerunPreviousABTest(param: ABTestsApiRerunPreviousABTestRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.rerunPreviousABTest(param.abTestRerunRequestVNext,  options).toPromise();
    }

    /**
     * Rerun a previous A/B test.
     * Rerun a previous A/B test
     * @param param the request object
     */
    public rerunPreviousABTest_3WithHttpInfo(param: ABTestsApiRerunPreviousABTest0Request, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.rerunPreviousABTest_3WithHttpInfo(param.abTestRerunRequestVNext,  options).toPromise();
    }

    /**
     * Rerun a previous A/B test.
     * Rerun a previous A/B test
     * @param param the request object
     */
    public rerunPreviousABTest_3(param: ABTestsApiRerunPreviousABTest0Request, options?: ConfigurationOptions): Promise<void> {
        return this.api.rerunPreviousABTest_3(param.abTestRerunRequestVNext,  options).toPromise();
    }

}

import { ObservableAdvancedApi } from "./ObservableAPI";
import { AdvancedApiRequestFactory, AdvancedApiResponseProcessor} from "../apis/AdvancedApi";

export interface AdvancedApiGetPreviousVersionRequest {
    /**
     * The ID of the landing page.
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApigetPreviousVersion
     */
    objectId: string
    /**
     * The ID of the specific version to retrieve.
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApigetPreviousVersion
     */
    revisionId: string
}

export interface AdvancedApiGetPreviousVersionsRequest {
    /**
     * The landing page ID.
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApigetPreviousVersions
     */
    objectId: string
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApigetPreviousVersions
     */
    after?: string
    /**
     * The cursor token value to retrieve the set of results before the current page.
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApigetPreviousVersions
     */
    before?: string
    /**
     * The maximum number of results to return. Default is 100.
     * Defaults to: undefined
     * @type number
     * @memberof AdvancedApigetPreviousVersions
     */
    limit?: number
}

export interface AdvancedApiRestorePreviousVersionRequest {
    /**
     * The ID of the landing page.
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApirestorePreviousVersion
     */
    objectId: string
    /**
     * The ID of the specified version to restore.
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApirestorePreviousVersion
     */
    revisionId: string
}

export interface AdvancedApiRestorePreviousVersionToDraftRequest {
    /**
     * The ID of the landing page.
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApirestorePreviousVersionToDraft
     */
    objectId: string
    /**
     * The ID of the specific version to set as the draft.
     * Defaults to: undefined
     * @type number
     * @memberof AdvancedApirestorePreviousVersionToDraft
     */
    revisionId: number
}

export interface AdvancedApiRestorePreviousVersion0Request {
    /**
     * The ID of the website page.
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApirestorePreviousVersion_1
     */
    objectId: string
    /**
     * The ID of the specified version to restore.
     * Defaults to: undefined
     * @type string
     * @memberof AdvancedApirestorePreviousVersion_1
     */
    revisionId: string
}

export class ObjectAdvancedApi {
    private api: ObservableAdvancedApi

    public constructor(configuration: Configuration, requestFactory?: AdvancedApiRequestFactory, responseProcessor?: AdvancedApiResponseProcessor) {
        this.api = new ObservableAdvancedApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieve a previous version of a landing page, specified by page ID and revision ID.
     * Retrieve a previous version of a landing page
     * @param param the request object
     */
    public getPreviousVersionWithHttpInfo(param: AdvancedApiGetPreviousVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<PageVersion>> {
        return this.api.getPreviousVersionWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Retrieve a previous version of a landing page, specified by page ID and revision ID.
     * Retrieve a previous version of a landing page
     * @param param the request object
     */
    public getPreviousVersion(param: AdvancedApiGetPreviousVersionRequest, options?: ConfigurationOptions): Promise<PageVersion> {
        return this.api.getPreviousVersion(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Retrieve all the previous versions of a landing page, specified by page ID.
     * Retrieve all previous versions of a landing page
     * @param param the request object
     */
    public getPreviousVersionsWithHttpInfo(param: AdvancedApiGetPreviousVersionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalPageVersion>> {
        return this.api.getPreviousVersionsWithHttpInfo(param.objectId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Retrieve all the previous versions of a landing page, specified by page ID.
     * Retrieve all previous versions of a landing page
     * @param param the request object
     */
    public getPreviousVersions(param: AdvancedApiGetPreviousVersionsRequest, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalPageVersion> {
        return this.api.getPreviousVersions(param.objectId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Restores a previous version of a landing page, specified by page ID and revision ID.
     * Restore a previous version of a landing page
     * @param param the request object
     */
    public restorePreviousVersionWithHttpInfo(param: AdvancedApiRestorePreviousVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<Page>> {
        return this.api.restorePreviousVersionWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Restores a previous version of a landing page, specified by page ID and revision ID.
     * Restore a previous version of a landing page
     * @param param the request object
     */
    public restorePreviousVersion(param: AdvancedApiRestorePreviousVersionRequest, options?: ConfigurationOptions): Promise<Page> {
        return this.api.restorePreviousVersion(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Specify a previous version of a landing page to set as the page draft.
     * Restore a previous version of a landing page
     * @param param the request object
     */
    public restorePreviousVersionToDraftWithHttpInfo(param: AdvancedApiRestorePreviousVersionToDraftRequest, options?: ConfigurationOptions): Promise<HttpInfo<Page>> {
        return this.api.restorePreviousVersionToDraftWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Specify a previous version of a landing page to set as the page draft.
     * Restore a previous version of a landing page
     * @param param the request object
     */
    public restorePreviousVersionToDraft(param: AdvancedApiRestorePreviousVersionToDraftRequest, options?: ConfigurationOptions): Promise<Page> {
        return this.api.restorePreviousVersionToDraft(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Restores a website page to a previous version, specified by page ID and version ID.
     * Restore a previous version of a website page
     * @param param the request object
     */
    public restorePreviousVersion_1WithHttpInfo(param: AdvancedApiRestorePreviousVersion0Request, options?: ConfigurationOptions): Promise<HttpInfo<Page>> {
        return this.api.restorePreviousVersion_1WithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Restores a website page to a previous version, specified by page ID and version ID.
     * Restore a previous version of a website page
     * @param param the request object
     */
    public restorePreviousVersion_1(param: AdvancedApiRestorePreviousVersion0Request, options?: ConfigurationOptions): Promise<Page> {
        return this.api.restorePreviousVersion_1(param.objectId, param.revisionId,  options).toPromise();
    }

}

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiCmsPagesV3LandingPagesCursorRequest {
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicmsPagesV3LandingPagesCursor
     */
    after?: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApicmsPagesV3LandingPagesCursor
     */
    archived?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesCursor
     */
    createdAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesCursor
     */
    createdAt?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesCursor
     */
    createdBefore?: Date
    /**
     * The maximum number of results to display per page.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApicmsPagesV3LandingPagesCursor
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicmsPagesV3LandingPagesCursor
     */
    property?: string
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApicmsPagesV3LandingPagesCursor
     */
    sort?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesCursor
     */
    updatedAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesCursor
     */
    updatedAt?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesCursor
     */
    updatedBefore?: Date
}

export interface BasicApiCmsPagesV3LandingPagesCursorQueryRequest {
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicmsPagesV3LandingPagesCursorQuery
     */
    after?: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApicmsPagesV3LandingPagesCursorQuery
     */
    archived?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesCursorQuery
     */
    createdAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesCursorQuery
     */
    createdAt?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesCursorQuery
     */
    createdBefore?: Date
    /**
     * The maximum number of results to display per page.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApicmsPagesV3LandingPagesCursorQuery
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicmsPagesV3LandingPagesCursorQuery
     */
    property?: string
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApicmsPagesV3LandingPagesCursorQuery
     */
    sort?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesCursorQuery
     */
    updatedAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesCursorQuery
     */
    updatedAt?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesCursorQuery
     */
    updatedBefore?: Date
}

export interface BasicApiCmsPagesV3LandingPagesFoldersCursorRequest {
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicmsPagesV3LandingPagesFoldersCursor
     */
    after?: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApicmsPagesV3LandingPagesFoldersCursor
     */
    archived?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesFoldersCursor
     */
    createdAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesFoldersCursor
     */
    createdAt?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesFoldersCursor
     */
    createdBefore?: Date
    /**
     * The maximum number of results to display per page.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApicmsPagesV3LandingPagesFoldersCursor
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicmsPagesV3LandingPagesFoldersCursor
     */
    property?: string
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApicmsPagesV3LandingPagesFoldersCursor
     */
    sort?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesFoldersCursor
     */
    updatedAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesFoldersCursor
     */
    updatedAt?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesFoldersCursor
     */
    updatedBefore?: Date
}

export interface BasicApiCmsPagesV3LandingPagesFoldersCursorQueryRequest {
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicmsPagesV3LandingPagesFoldersCursorQuery
     */
    after?: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApicmsPagesV3LandingPagesFoldersCursorQuery
     */
    archived?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesFoldersCursorQuery
     */
    createdAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesFoldersCursorQuery
     */
    createdAt?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesFoldersCursorQuery
     */
    createdBefore?: Date
    /**
     * The maximum number of results to display per page.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApicmsPagesV3LandingPagesFoldersCursorQuery
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicmsPagesV3LandingPagesFoldersCursorQuery
     */
    property?: string
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApicmsPagesV3LandingPagesFoldersCursorQuery
     */
    sort?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesFoldersCursorQuery
     */
    updatedAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesFoldersCursorQuery
     */
    updatedAt?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3LandingPagesFoldersCursorQuery
     */
    updatedBefore?: Date
}

export interface BasicApiCmsPagesV3SitePagesCursorRequest {
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicmsPagesV3SitePagesCursor
     */
    after?: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApicmsPagesV3SitePagesCursor
     */
    archived?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3SitePagesCursor
     */
    createdAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3SitePagesCursor
     */
    createdAt?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3SitePagesCursor
     */
    createdBefore?: Date
    /**
     * The maximum number of results to display per page.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApicmsPagesV3SitePagesCursor
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicmsPagesV3SitePagesCursor
     */
    property?: string
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApicmsPagesV3SitePagesCursor
     */
    sort?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3SitePagesCursor
     */
    updatedAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3SitePagesCursor
     */
    updatedAt?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3SitePagesCursor
     */
    updatedBefore?: Date
}

export interface BasicApiCmsPagesV3SitePagesCursorQueryRequest {
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicmsPagesV3SitePagesCursorQuery
     */
    after?: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof BasicApicmsPagesV3SitePagesCursorQuery
     */
    archived?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3SitePagesCursorQuery
     */
    createdAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3SitePagesCursorQuery
     */
    createdAt?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3SitePagesCursorQuery
     */
    createdBefore?: Date
    /**
     * The maximum number of results to display per page.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApicmsPagesV3SitePagesCursorQuery
     */
    limit?: number
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicmsPagesV3SitePagesCursorQuery
     */
    property?: string
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApicmsPagesV3SitePagesCursorQuery
     */
    sort?: Array<string>
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3SitePagesCursorQuery
     */
    updatedAfter?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3SitePagesCursorQuery
     */
    updatedAt?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicmsPagesV3SitePagesCursorQuery
     */
    updatedBefore?: Date
}

export interface BasicApiGetPreviousVersionRequest {
    /**
     * The ID of the website page.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetPreviousVersion
     */
    objectId: string
    /**
     * The ID of the specific version to retrieve.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetPreviousVersion
     */
    revisionId: string
}

export interface BasicApiGetPreviousVersionsRequest {
    /**
     * The ID of the website page.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetPreviousVersions
     */
    objectId: string
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetPreviousVersions
     */
    after?: string
    /**
     * The cursor token value to retrieve the set of results before the current page.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetPreviousVersions
     */
    before?: string
    /**
     * The maximum number of results to return. Default is 100.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApigetPreviousVersions
     */
    limit?: number
}

export interface BasicApiResetDraftRequest {
    /**
     * The ID of the website page to restore.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiresetDraft
     */
    objectId: string
}

export interface BasicApiRestorePreviousVersionToDraftRequest {
    /**
     * The ID of the website page.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApirestorePreviousVersionToDraft
     */
    objectId: string
    /**
     * The ID of the revision to restore.
     * Defaults to: undefined
     * @type number
     * @memberof BasicApirestorePreviousVersionToDraft
     */
    revisionId: number
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public cmsPagesV3LandingPagesCursorWithHttpInfo(param: BasicApiCmsPagesV3LandingPagesCursorRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.cmsPagesV3LandingPagesCursorWithHttpInfo(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.property, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cmsPagesV3LandingPagesCursor(param: BasicApiCmsPagesV3LandingPagesCursorRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.cmsPagesV3LandingPagesCursor(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.property, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cmsPagesV3LandingPagesCursorQueryWithHttpInfo(param: BasicApiCmsPagesV3LandingPagesCursorQueryRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.cmsPagesV3LandingPagesCursorQueryWithHttpInfo(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.property, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cmsPagesV3LandingPagesCursorQuery(param: BasicApiCmsPagesV3LandingPagesCursorQueryRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.cmsPagesV3LandingPagesCursorQuery(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.property, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cmsPagesV3LandingPagesFoldersCursorWithHttpInfo(param: BasicApiCmsPagesV3LandingPagesFoldersCursorRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.cmsPagesV3LandingPagesFoldersCursorWithHttpInfo(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.property, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cmsPagesV3LandingPagesFoldersCursor(param: BasicApiCmsPagesV3LandingPagesFoldersCursorRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.cmsPagesV3LandingPagesFoldersCursor(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.property, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cmsPagesV3LandingPagesFoldersCursorQueryWithHttpInfo(param: BasicApiCmsPagesV3LandingPagesFoldersCursorQueryRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.cmsPagesV3LandingPagesFoldersCursorQueryWithHttpInfo(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.property, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cmsPagesV3LandingPagesFoldersCursorQuery(param: BasicApiCmsPagesV3LandingPagesFoldersCursorQueryRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.cmsPagesV3LandingPagesFoldersCursorQuery(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.property, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cmsPagesV3SitePagesCursorWithHttpInfo(param: BasicApiCmsPagesV3SitePagesCursorRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.cmsPagesV3SitePagesCursorWithHttpInfo(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.property, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cmsPagesV3SitePagesCursor(param: BasicApiCmsPagesV3SitePagesCursorRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.cmsPagesV3SitePagesCursor(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.property, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cmsPagesV3SitePagesCursorQueryWithHttpInfo(param: BasicApiCmsPagesV3SitePagesCursorQueryRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<any>> {
        return this.api.cmsPagesV3SitePagesCursorQueryWithHttpInfo(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.property, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public cmsPagesV3SitePagesCursorQuery(param: BasicApiCmsPagesV3SitePagesCursorQueryRequest = {}, options?: ConfigurationOptions): Promise<any> {
        return this.api.cmsPagesV3SitePagesCursorQuery(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.property, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * Retrieve a previous version of a website page by the revision ID.
     * Retrieve a previous version of a website page
     * @param param the request object
     */
    public getPreviousVersionWithHttpInfo(param: BasicApiGetPreviousVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<PageVersion>> {
        return this.api.getPreviousVersionWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Retrieve a previous version of a website page by the revision ID.
     * Retrieve a previous version of a website page
     * @param param the request object
     */
    public getPreviousVersion(param: BasicApiGetPreviousVersionRequest, options?: ConfigurationOptions): Promise<PageVersion> {
        return this.api.getPreviousVersion(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Retrieves all the previous versions of a website page, specified by page ID.
     * Retrieve all previous versions of a website page
     * @param param the request object
     */
    public getPreviousVersionsWithHttpInfo(param: BasicApiGetPreviousVersionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalPageVersion>> {
        return this.api.getPreviousVersionsWithHttpInfo(param.objectId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Retrieves all the previous versions of a website page, specified by page ID.
     * Retrieve all previous versions of a website page
     * @param param the request object
     */
    public getPreviousVersions(param: BasicApiGetPreviousVersionsRequest, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalPageVersion> {
        return this.api.getPreviousVersions(param.objectId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Discards any edits and resets the draft to match the live version.
     * Reset the draft of a website page
     * @param param the request object
     */
    public resetDraftWithHttpInfo(param: BasicApiResetDraftRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.resetDraftWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Discards any edits and resets the draft to match the live version.
     * Reset the draft of a website page
     * @param param the request object
     */
    public resetDraft(param: BasicApiResetDraftRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.resetDraft(param.objectId,  options).toPromise();
    }

    /**
     * Takes a specified version of a website page and sets it as the new draft version of the page.
     * Restore a previous draft of a website page
     * @param param the request object
     */
    public restorePreviousVersionToDraftWithHttpInfo(param: BasicApiRestorePreviousVersionToDraftRequest, options?: ConfigurationOptions): Promise<HttpInfo<Page>> {
        return this.api.restorePreviousVersionToDraftWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Takes a specified version of a website page and sets it as the new draft version of the page.
     * Restore a previous draft of a website page
     * @param param the request object
     */
    public restorePreviousVersionToDraft(param: BasicApiRestorePreviousVersionToDraftRequest, options?: ConfigurationOptions): Promise<Page> {
        return this.api.restorePreviousVersionToDraft(param.objectId, param.revisionId,  options).toPromise();
    }

}

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiArchiveBatchRequest {
    /**
     * 
     * @type BatchInputString
     * @memberof BatchApiarchiveBatch
     */
    batchInputString: BatchInputString
}

export interface BatchApiArchiveBatch0Request {
    /**
     * 
     * @type BatchInputString
     * @memberof BatchApiarchiveBatch_1
     */
    batchInputString: BatchInputString
}

export interface BatchApiArchiveFoldersRequest {
    /**
     * 
     * @type BatchInputString
     * @memberof BatchApiarchiveFolders
     */
    batchInputString: BatchInputString
}

export interface BatchApiCreateBatchRequest {
    /**
     * 
     * @type BatchInputPage
     * @memberof BatchApicreateBatch
     */
    batchInputPage: BatchInputPage
}

export interface BatchApiCreateBatch0Request {
    /**
     * 
     * @type BatchInputPage
     * @memberof BatchApicreateBatch_2
     */
    batchInputPage: BatchInputPage
}

export interface BatchApiCreateFoldersRequest {
    /**
     * 
     * @type BatchInputContentFolder
     * @memberof BatchApicreateFolders
     */
    batchInputContentFolder: BatchInputContentFolder
}

export interface BatchApiReadBatchRequest {
    /**
     * 
     * @type BatchInputString
     * @memberof BatchApireadBatch
     */
    batchInputString: BatchInputString
    /**
     * Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof BatchApireadBatch
     */
    archived?: boolean
}

export interface BatchApiReadBatch0Request {
    /**
     * 
     * @type BatchInputString
     * @memberof BatchApireadBatch_3
     */
    batchInputString: BatchInputString
    /**
     * Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof BatchApireadBatch_3
     */
    archived?: boolean
}

export interface BatchApiUpdateBatchRequest {
    /**
     * 
     * @type BatchInputJsonNode
     * @memberof BatchApiupdateBatch
     */
    batchInputJsonNode: BatchInputJsonNode
    /**
     * Specifies whether to update deleted Landing Pages. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof BatchApiupdateBatch
     */
    archived?: boolean
}

export interface BatchApiUpdateBatch0Request {
    /**
     * 
     * @type BatchInputJsonNode
     * @memberof BatchApiupdateBatch_4
     */
    batchInputJsonNode: BatchInputJsonNode
    /**
     * Specifies whether to update deleted Site Pages. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof BatchApiupdateBatch_4
     */
    archived?: boolean
}

export interface BatchApiUpdateFoldersRequest {
    /**
     * 
     * @type BatchInputJsonNode
     * @memberof BatchApiupdateFolders
     */
    batchInputJsonNode: BatchInputJsonNode
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof BatchApiupdateFolders
     */
    archived?: boolean
}

export class ObjectBatchApi {
    private api: ObservableBatchApi

    public constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete landing pages specified by ID in the request body. Note: this is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to `true`.
     * Delete landing pages
     * @param param the request object
     */
    public archiveBatchWithHttpInfo(param: BatchApiArchiveBatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveBatchWithHttpInfo(param.batchInputString,  options).toPromise();
    }

    /**
     * Delete landing pages specified by ID in the request body. Note: this is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to `true`.
     * Delete landing pages
     * @param param the request object
     */
    public archiveBatch(param: BatchApiArchiveBatchRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archiveBatch(param.batchInputString,  options).toPromise();
    }

    /**
     * Delete a batch of website pages as specified in the request body. Note: this is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to `true`.
     * Delete website pages
     * @param param the request object
     */
    public archiveBatch_1WithHttpInfo(param: BatchApiArchiveBatch0Request, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveBatch_1WithHttpInfo(param.batchInputString,  options).toPromise();
    }

    /**
     * Delete a batch of website pages as specified in the request body. Note: this is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to `true`.
     * Delete website pages
     * @param param the request object
     */
    public archiveBatch_1(param: BatchApiArchiveBatch0Request, options?: ConfigurationOptions): Promise<void> {
        return this.api.archiveBatch_1(param.batchInputString,  options).toPromise();
    }

    /**
     * Delete a batch of folders as specified in the request body.
     * Delete folders
     * @param param the request object
     */
    public archiveFoldersWithHttpInfo(param: BatchApiArchiveFoldersRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveFoldersWithHttpInfo(param.batchInputString,  options).toPromise();
    }

    /**
     * Delete a batch of folders as specified in the request body.
     * Delete folders
     * @param param the request object
     */
    public archiveFolders(param: BatchApiArchiveFoldersRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archiveFolders(param.batchInputString,  options).toPromise();
    }

    /**
     * Create a batch of landing pages as detailed in the request body.
     * Create landing pages
     * @param param the request object
     */
    public createBatchWithHttpInfo(param: BatchApiCreateBatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        return this.api.createBatchWithHttpInfo(param.batchInputPage,  options).toPromise();
    }

    /**
     * Create a batch of landing pages as detailed in the request body.
     * Create landing pages
     * @param param the request object
     */
    public createBatch(param: BatchApiCreateBatchRequest, options?: ConfigurationOptions): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
        return this.api.createBatch(param.batchInputPage,  options).toPromise();
    }

    /**
     * Create a batch of website pages as specified in the request body.
     * Create website pages
     * @param param the request object
     */
    public createBatch_2WithHttpInfo(param: BatchApiCreateBatch0Request, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        return this.api.createBatch_2WithHttpInfo(param.batchInputPage,  options).toPromise();
    }

    /**
     * Create a batch of website pages as specified in the request body.
     * Create website pages
     * @param param the request object
     */
    public createBatch_2(param: BatchApiCreateBatch0Request, options?: ConfigurationOptions): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
        return this.api.createBatch_2(param.batchInputPage,  options).toPromise();
    }

    /**
     * Create a batch of folders as detailed in the request body.
     * Create folders
     * @param param the request object
     */
    public createFoldersWithHttpInfo(param: BatchApiCreateFoldersRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>> {
        return this.api.createFoldersWithHttpInfo(param.batchInputContentFolder,  options).toPromise();
    }

    /**
     * Create a batch of folders as detailed in the request body.
     * Create folders
     * @param param the request object
     */
    public createFolders(param: BatchApiCreateFoldersRequest, options?: ConfigurationOptions): Promise<BatchResponseContentFolder | BatchResponseContentFolderWithErrors> {
        return this.api.createFolders(param.batchInputContentFolder,  options).toPromise();
    }

    /**
     * Retrieve a batch of landing pages as specified in the request body.
     * Retrieve landing pages
     * @param param the request object
     */
    public readBatchWithHttpInfo(param: BatchApiReadBatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        return this.api.readBatchWithHttpInfo(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Retrieve a batch of landing pages as specified in the request body.
     * Retrieve landing pages
     * @param param the request object
     */
    public readBatch(param: BatchApiReadBatchRequest, options?: ConfigurationOptions): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
        return this.api.readBatch(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Retrieve a batch of website pages as specified in the request body.
     * Retrieve website pages
     * @param param the request object
     */
    public readBatch_3WithHttpInfo(param: BatchApiReadBatch0Request, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        return this.api.readBatch_3WithHttpInfo(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Retrieve a batch of website pages as specified in the request body.
     * Retrieve website pages
     * @param param the request object
     */
    public readBatch_3(param: BatchApiReadBatch0Request, options?: ConfigurationOptions): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
        return this.api.readBatch_3(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Update a batch of landing pages as specified in the request body.
     * Update landing pages
     * @param param the request object
     */
    public updateBatchWithHttpInfo(param: BatchApiUpdateBatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        return this.api.updateBatchWithHttpInfo(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

    /**
     * Update a batch of landing pages as specified in the request body.
     * Update landing pages
     * @param param the request object
     */
    public updateBatch(param: BatchApiUpdateBatchRequest, options?: ConfigurationOptions): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
        return this.api.updateBatch(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

    /**
     * Update a batch of website pages as specified in the request body.
     * Update website pages
     * @param param the request object
     */
    public updateBatch_4WithHttpInfo(param: BatchApiUpdateBatch0Request, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        return this.api.updateBatch_4WithHttpInfo(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

    /**
     * Update a batch of website pages as specified in the request body.
     * Update website pages
     * @param param the request object
     */
    public updateBatch_4(param: BatchApiUpdateBatch0Request, options?: ConfigurationOptions): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
        return this.api.updateBatch_4(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

    /**
     * Update a batch of landing page folders as specified in the request body.
     * Update folders
     * @param param the request object
     */
    public updateFoldersWithHttpInfo(param: BatchApiUpdateFoldersRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>> {
        return this.api.updateFoldersWithHttpInfo(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

    /**
     * Update a batch of landing page folders as specified in the request body.
     * Update folders
     * @param param the request object
     */
    public updateFolders(param: BatchApiUpdateFoldersRequest, options?: ConfigurationOptions): Promise<BatchResponseContentFolder | BatchResponseContentFolderWithErrors> {
        return this.api.updateFolders(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

}

import { ObservableFoldersApi } from "./ObservableAPI";
import { FoldersApiRequestFactory, FoldersApiResponseProcessor} from "../apis/FoldersApi";

export interface FoldersApiArchiveFolderRequest {
    /**
     * The ID of the landing page folder.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApiarchiveFolder
     */
    objectId: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof FoldersApiarchiveFolder
     */
    archived?: boolean
}

export interface FoldersApiCreateFolderRequest {
    /**
     * 
     * @type ContentFolder
     * @memberof FoldersApicreateFolder
     */
    contentFolder: ContentFolder
}

export interface FoldersApiGetFolderByIdRequest {
    /**
     * The ID of the landing page folder.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApigetFolderById
     */
    objectId: string
    /**
     * Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof FoldersApigetFolderById
     */
    archived?: boolean
    /**
     * Specifies which properties of the folder to include in the response.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApigetFolderById
     */
    property?: string
}

export interface FoldersApiGetFolderPreviousVersionRequest {
    /**
     * The Folder id.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApigetFolderPreviousVersion
     */
    objectId: string
    /**
     * The Folder version id.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApigetFolderPreviousVersion
     */
    revisionId: string
}

export interface FoldersApiGetFolderPreviousVersionsRequest {
    /**
     * The ID of the folder.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApigetFolderPreviousVersions
     */
    objectId: string
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApigetFolderPreviousVersions
     */
    after?: string
    /**
     * The cursor token value to retrieve the set of results before the specified cursor.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApigetFolderPreviousVersions
     */
    before?: string
    /**
     * The maximum number of results to return. Default is 100.
     * Defaults to: undefined
     * @type number
     * @memberof FoldersApigetFolderPreviousVersions
     */
    limit?: number
}

export interface FoldersApiGetFoldersPageRequest {
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApigetFoldersPage
     */
    after?: string
    /**
     * Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof FoldersApigetFoldersPage
     */
    archived?: boolean
    /**
     * Only return Folders created after the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof FoldersApigetFoldersPage
     */
    createdAfter?: Date
    /**
     * Only return Folders created at exactly the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof FoldersApigetFoldersPage
     */
    createdAt?: Date
    /**
     * Only return Folders created before the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof FoldersApigetFoldersPage
     */
    createdBefore?: Date
    /**
     * The maximum number of results to return. Default is 100.
     * Defaults to: undefined
     * @type number
     * @memberof FoldersApigetFoldersPage
     */
    limit?: number
    /**
     * Specifies which properties of the landing page folders to include in the response.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApigetFoldersPage
     */
    property?: string
    /**
     * Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof FoldersApigetFoldersPage
     */
    sort?: Array<string>
    /**
     * Only return Folders last updated after the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof FoldersApigetFoldersPage
     */
    updatedAfter?: Date
    /**
     * Only return Folders last updated at exactly the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof FoldersApigetFoldersPage
     */
    updatedAt?: Date
    /**
     * Only return Folders last updated before the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof FoldersApigetFoldersPage
     */
    updatedBefore?: Date
}

export interface FoldersApiReadFoldersRequest {
    /**
     * 
     * @type BatchInputString
     * @memberof FoldersApireadFolders
     */
    batchInputString: BatchInputString
    /**
     * Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof FoldersApireadFolders
     */
    archived?: boolean
}

export interface FoldersApiRestoreFolderPreviousVersionRequest {
    /**
     * The Folder id.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApirestoreFolderPreviousVersion
     */
    objectId: string
    /**
     * The Folder version id to restore.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApirestoreFolderPreviousVersion
     */
    revisionId: string
}

export interface FoldersApiUpdateFolderRequest {
    /**
     * The ID of the landing page folder.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApiupdateFolder
     */
    objectId: string
    /**
     * 
     * @type ContentFolder
     * @memberof FoldersApiupdateFolder
     */
    contentFolder: ContentFolder
    /**
     * Specifies whether to update deleted Folders. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof FoldersApiupdateFolder
     */
    archived?: boolean
}

export class ObjectFoldersApi {
    private api: ObservableFoldersApi

    public constructor(configuration: Configuration, requestFactory?: FoldersApiRequestFactory, responseProcessor?: FoldersApiResponseProcessor) {
        this.api = new ObservableFoldersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a landing page folder, specified by its ID.
     * Delete a landing page folder
     * @param param the request object
     */
    public archiveFolderWithHttpInfo(param: FoldersApiArchiveFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveFolderWithHttpInfo(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete a landing page folder, specified by its ID.
     * Delete a landing page folder
     * @param param the request object
     */
    public archiveFolder(param: FoldersApiArchiveFolderRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archiveFolder(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Create a new folder for landing pages.
     * Create a landing page folder
     * @param param the request object
     */
    public createFolderWithHttpInfo(param: FoldersApiCreateFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<ContentFolder>> {
        return this.api.createFolderWithHttpInfo(param.contentFolder,  options).toPromise();
    }

    /**
     * Create a new folder for landing pages.
     * Create a landing page folder
     * @param param the request object
     */
    public createFolder(param: FoldersApiCreateFolderRequest, options?: ConfigurationOptions): Promise<ContentFolder> {
        return this.api.createFolder(param.contentFolder,  options).toPromise();
    }

    /**
     * Retrieve a landing page folder, specified by its ID.
     * Retrieve a landing page folder
     * @param param the request object
     */
    public getFolderByIdWithHttpInfo(param: FoldersApiGetFolderByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<ContentFolder>> {
        return this.api.getFolderByIdWithHttpInfo(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve a landing page folder, specified by its ID.
     * Retrieve a landing page folder
     * @param param the request object
     */
    public getFolderById(param: FoldersApiGetFolderByIdRequest, options?: ConfigurationOptions): Promise<ContentFolder> {
        return this.api.getFolderById(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve a previous version of a folder, specified by the folder ID and revision ID.
     * Retrieve a previous version of a folder
     * @param param the request object
     */
    public getFolderPreviousVersionWithHttpInfo(param: FoldersApiGetFolderPreviousVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<ContentFolderVersion>> {
        return this.api.getFolderPreviousVersionWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Retrieve a previous version of a folder, specified by the folder ID and revision ID.
     * Retrieve a previous version of a folder
     * @param param the request object
     */
    public getFolderPreviousVersion(param: FoldersApiGetFolderPreviousVersionRequest, options?: ConfigurationOptions): Promise<ContentFolderVersion> {
        return this.api.getFolderPreviousVersion(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Retrieves all the previous versions of a landing page folder.
     * Retrieves previous versions of a folder
     * @param param the request object
     */
    public getFolderPreviousVersionsWithHttpInfo(param: FoldersApiGetFolderPreviousVersionsRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalContentFolderVersion>> {
        return this.api.getFolderPreviousVersionsWithHttpInfo(param.objectId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Retrieves all the previous versions of a landing page folder.
     * Retrieves previous versions of a folder
     * @param param the request object
     */
    public getFolderPreviousVersions(param: FoldersApiGetFolderPreviousVersionsRequest, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalContentFolderVersion> {
        return this.api.getFolderPreviousVersions(param.objectId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Get the list of Landing Page Folders. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all landing page folders
     * @param param the request object
     */
    public getFoldersPageWithHttpInfo(param: FoldersApiGetFoldersPageRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalContentFolderForwardPaging>> {
        return this.api.getFoldersPageWithHttpInfo(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.property, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * Get the list of Landing Page Folders. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all landing page folders
     * @param param the request object
     */
    public getFoldersPage(param: FoldersApiGetFoldersPageRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalContentFolderForwardPaging> {
        return this.api.getFoldersPage(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.property, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * Retrieve a batch of landing page folders as identified in the request body.
     * Retrieve folders
     * @param param the request object
     */
    public readFoldersWithHttpInfo(param: FoldersApiReadFoldersRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>> {
        return this.api.readFoldersWithHttpInfo(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Retrieve a batch of landing page folders as identified in the request body.
     * Retrieve folders
     * @param param the request object
     */
    public readFolders(param: FoldersApiReadFoldersRequest, options?: ConfigurationOptions): Promise<BatchResponseContentFolder | BatchResponseContentFolderWithErrors> {
        return this.api.readFolders(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Takes a specified version of a landing page folder and restores it.
     * Restore a previous version of a folder
     * @param param the request object
     */
    public restoreFolderPreviousVersionWithHttpInfo(param: FoldersApiRestoreFolderPreviousVersionRequest, options?: ConfigurationOptions): Promise<HttpInfo<ContentFolder>> {
        return this.api.restoreFolderPreviousVersionWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Takes a specified version of a landing page folder and restores it.
     * Restore a previous version of a folder
     * @param param the request object
     */
    public restoreFolderPreviousVersion(param: FoldersApiRestoreFolderPreviousVersionRequest, options?: ConfigurationOptions): Promise<ContentFolder> {
        return this.api.restoreFolderPreviousVersion(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Partially update a landing page folder, specified by the folder ID. You only need to specify the details values that you are modifying. 
     * Update a landing page folder
     * @param param the request object
     */
    public updateFolderWithHttpInfo(param: FoldersApiUpdateFolderRequest, options?: ConfigurationOptions): Promise<HttpInfo<ContentFolder>> {
        return this.api.updateFolderWithHttpInfo(param.objectId, param.contentFolder, param.archived,  options).toPromise();
    }

    /**
     * Partially update a landing page folder, specified by the folder ID. You only need to specify the details values that you are modifying. 
     * Update a landing page folder
     * @param param the request object
     */
    public updateFolder(param: FoldersApiUpdateFolderRequest, options?: ConfigurationOptions): Promise<ContentFolder> {
        return this.api.updateFolder(param.objectId, param.contentFolder, param.archived,  options).toPromise();
    }

}

import { ObservableLandingPagesApi } from "./ObservableAPI";
import { LandingPagesApiRequestFactory, LandingPagesApiResponseProcessor} from "../apis/LandingPagesApi";

export interface LandingPagesApiArchiveRequest {
    /**
     * The ID of the landing page.
     * Defaults to: undefined
     * @type string
     * @memberof LandingPagesApiarchive
     */
    objectId: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof LandingPagesApiarchive
     */
    archived?: boolean
}

export interface LandingPagesApiCloneRequest {
    /**
     * 
     * @type ContentCloneRequestVNext
     * @memberof LandingPagesApiclone
     */
    contentCloneRequestVNext: ContentCloneRequestVNext
}

export interface LandingPagesApiCreateRequest {
    /**
     * 
     * @type Page
     * @memberof LandingPagesApicreate
     */
    page: Page
}

export interface LandingPagesApiGetByIdRequest {
    /**
     * The ID of the landing page.
     * Defaults to: undefined
     * @type string
     * @memberof LandingPagesApigetById
     */
    objectId: string
    /**
     * Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof LandingPagesApigetById
     */
    archived?: boolean
    /**
     * Specifies which properties of the landing page to include in the response.
     * Defaults to: undefined
     * @type string
     * @memberof LandingPagesApigetById
     */
    property?: string
}

export interface LandingPagesApiGetDraftByIdRequest {
    /**
     * The ID of the landing page.
     * Defaults to: undefined
     * @type string
     * @memberof LandingPagesApigetDraftById
     */
    objectId: string
}

export interface LandingPagesApiGetPageRequest {
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof LandingPagesApigetPage
     */
    after?: string
    /**
     * Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof LandingPagesApigetPage
     */
    archived?: boolean
    /**
     * Only return Landing Pages created after the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof LandingPagesApigetPage
     */
    createdAfter?: Date
    /**
     * Only return Landing Pages created at exactly the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof LandingPagesApigetPage
     */
    createdAt?: Date
    /**
     * Only return Landing Pages created before the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof LandingPagesApigetPage
     */
    createdBefore?: Date
    /**
     * The maximum number of results to return. Default is 100.
     * Defaults to: undefined
     * @type number
     * @memberof LandingPagesApigetPage
     */
    limit?: number
    /**
     * Specifies which properties of the landing pages to include in the response.
     * Defaults to: undefined
     * @type string
     * @memberof LandingPagesApigetPage
     */
    property?: string
    /**
     * Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof LandingPagesApigetPage
     */
    sort?: Array<string>
    /**
     * Only return Landing Pages last updated after the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof LandingPagesApigetPage
     */
    updatedAfter?: Date
    /**
     * Only return Landing Pages last updated at exactly the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof LandingPagesApigetPage
     */
    updatedAt?: Date
    /**
     * Only return Landing Pages last updated before the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof LandingPagesApigetPage
     */
    updatedBefore?: Date
}

export interface LandingPagesApiPushLiveRequest {
    /**
     * The id of the Landing Page for which it\&#39;s draft will be pushed live.
     * Defaults to: undefined
     * @type string
     * @memberof LandingPagesApipushLive
     */
    objectId: string
}

export interface LandingPagesApiResetDraftRequest {
    /**
     * The ID of the landing page to reset.
     * Defaults to: undefined
     * @type string
     * @memberof LandingPagesApiresetDraft
     */
    objectId: string
}

export interface LandingPagesApiScheduleRequest {
    /**
     * 
     * @type ContentScheduleRequestVNext
     * @memberof LandingPagesApischedule
     */
    contentScheduleRequestVNext: ContentScheduleRequestVNext
}

export interface LandingPagesApiUpdateRequest {
    /**
     * The ID of the landing page.
     * Defaults to: undefined
     * @type string
     * @memberof LandingPagesApiupdate
     */
    objectId: string
    /**
     * 
     * @type Page
     * @memberof LandingPagesApiupdate
     */
    page: Page
    /**
     * Specifies whether to update deleted Landing Pages. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof LandingPagesApiupdate
     */
    archived?: boolean
}

export interface LandingPagesApiUpdateDraftRequest {
    /**
     * The ID of the landing page.
     * Defaults to: undefined
     * @type string
     * @memberof LandingPagesApiupdateDraft
     */
    objectId: string
    /**
     * 
     * @type Page
     * @memberof LandingPagesApiupdateDraft
     */
    page: Page
}

export class ObjectLandingPagesApi {
    private api: ObservableLandingPagesApi

    public constructor(configuration: Configuration, requestFactory?: LandingPagesApiRequestFactory, responseProcessor?: LandingPagesApiResponseProcessor) {
        this.api = new ObservableLandingPagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a landing page, specified by its ID.
     * Delete a landing page
     * @param param the request object
     */
    public archiveWithHttpInfo(param: LandingPagesApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete a landing page, specified by its ID.
     * Delete a landing page
     * @param param the request object
     */
    public archive(param: LandingPagesApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Create a copy of an existing landing page.
     * Clone a landing page
     * @param param the request object
     */
    public cloneWithHttpInfo(param: LandingPagesApiCloneRequest, options?: ConfigurationOptions): Promise<HttpInfo<Page>> {
        return this.api.cloneWithHttpInfo(param.contentCloneRequestVNext,  options).toPromise();
    }

    /**
     * Create a copy of an existing landing page.
     * Clone a landing page
     * @param param the request object
     */
    public clone(param: LandingPagesApiCloneRequest, options?: ConfigurationOptions): Promise<Page> {
        return this.api.clone(param.contentCloneRequestVNext,  options).toPromise();
    }

    /**
     * Create a new landing page.
     * Create a landing page
     * @param param the request object
     */
    public createWithHttpInfo(param: LandingPagesApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Page>> {
        return this.api.createWithHttpInfo(param.page,  options).toPromise();
    }

    /**
     * Create a new landing page.
     * Create a landing page
     * @param param the request object
     */
    public create(param: LandingPagesApiCreateRequest, options?: ConfigurationOptions): Promise<Page> {
        return this.api.create(param.page,  options).toPromise();
    }

    /**
     * Retrieve a landing page, specified by its ID.
     * Retrieve a landing page
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: LandingPagesApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<Page>> {
        return this.api.getByIdWithHttpInfo(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve a landing page, specified by its ID.
     * Retrieve a landing page
     * @param param the request object
     */
    public getById(param: LandingPagesApiGetByIdRequest, options?: ConfigurationOptions): Promise<Page> {
        return this.api.getById(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve the full draft version of a landing page, specified by page ID.
     * Retrieve a landing page draft
     * @param param the request object
     */
    public getDraftByIdWithHttpInfo(param: LandingPagesApiGetDraftByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<Page>> {
        return this.api.getDraftByIdWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Retrieve the full draft version of a landing page, specified by page ID.
     * Retrieve a landing page draft
     * @param param the request object
     */
    public getDraftById(param: LandingPagesApiGetDraftByIdRequest, options?: ConfigurationOptions): Promise<Page> {
        return this.api.getDraftById(param.objectId,  options).toPromise();
    }

    /**
     * Get the list of landing pages. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all landing pages
     * @param param the request object
     */
    public getPageWithHttpInfo(param: LandingPagesApiGetPageRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalPageForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.property, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * Get the list of landing pages. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all landing pages
     * @param param the request object
     */
    public getPage(param: LandingPagesApiGetPageRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalPageForwardPaging> {
        return this.api.getPage(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.property, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * Take any changes from the draft version of the Landing Page and apply them to the live version.
     * Push Landing Page draft edits live
     * @param param the request object
     */
    public pushLiveWithHttpInfo(param: LandingPagesApiPushLiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.pushLiveWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Take any changes from the draft version of the Landing Page and apply them to the live version.
     * Push Landing Page draft edits live
     * @param param the request object
     */
    public pushLive(param: LandingPagesApiPushLiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.pushLive(param.objectId,  options).toPromise();
    }

    /**
     * Discards any edits and resets the draft to match the live version.
     * Reset a landing page draft
     * @param param the request object
     */
    public resetDraftWithHttpInfo(param: LandingPagesApiResetDraftRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.resetDraftWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Discards any edits and resets the draft to match the live version.
     * Reset a landing page draft
     * @param param the request object
     */
    public resetDraft(param: LandingPagesApiResetDraftRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.resetDraft(param.objectId,  options).toPromise();
    }

    /**
     * Schedule a landing page to be published.
     * Schedule landing page publishing
     * @param param the request object
     */
    public scheduleWithHttpInfo(param: LandingPagesApiScheduleRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.scheduleWithHttpInfo(param.contentScheduleRequestVNext,  options).toPromise();
    }

    /**
     * Schedule a landing page to be published.
     * Schedule landing page publishing
     * @param param the request object
     */
    public schedule(param: LandingPagesApiScheduleRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.schedule(param.contentScheduleRequestVNext,  options).toPromise();
    }

    /**
     * Sparse updates a single Landing Page object identified by the id in the path. You only need to specify the column values that you are modifying.
     * Update a landing page
     * @param param the request object
     */
    public updateWithHttpInfo(param: LandingPagesApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Page>> {
        return this.api.updateWithHttpInfo(param.objectId, param.page, param.archived,  options).toPromise();
    }

    /**
     * Sparse updates a single Landing Page object identified by the id in the path. You only need to specify the column values that you are modifying.
     * Update a landing page
     * @param param the request object
     */
    public update(param: LandingPagesApiUpdateRequest, options?: ConfigurationOptions): Promise<Page> {
        return this.api.update(param.objectId, param.page, param.archived,  options).toPromise();
    }

    /**
     * Partially updates the draft version of a single landing page, specified by its ID. You only need to specify the column values that you are modifying. 
     * Update the draft of a landing page
     * @param param the request object
     */
    public updateDraftWithHttpInfo(param: LandingPagesApiUpdateDraftRequest, options?: ConfigurationOptions): Promise<HttpInfo<Page>> {
        return this.api.updateDraftWithHttpInfo(param.objectId, param.page,  options).toPromise();
    }

    /**
     * Partially updates the draft version of a single landing page, specified by its ID. You only need to specify the column values that you are modifying. 
     * Update the draft of a landing page
     * @param param the request object
     */
    public updateDraft(param: LandingPagesApiUpdateDraftRequest, options?: ConfigurationOptions): Promise<Page> {
        return this.api.updateDraft(param.objectId, param.page,  options).toPromise();
    }

}

import { ObservableMultiLanguageApi } from "./ObservableAPI";
import { MultiLanguageApiRequestFactory, MultiLanguageApiResponseProcessor} from "../apis/MultiLanguageApi";

export interface MultiLanguageApiAttachToLangGroupRequest {
    /**
     * 
     * @type AttachToLangPrimaryRequestVNext
     * @memberof MultiLanguageApiattachToLangGroup
     */
    attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext
}

export interface MultiLanguageApiAttachToLangGroup0Request {
    /**
     * 
     * @type AttachToLangPrimaryRequestVNext
     * @memberof MultiLanguageApiattachToLangGroup_1
     */
    attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext
}

export interface MultiLanguageApiCreateLangVariationRequest {
    /**
     * 
     * @type ContentLanguageCloneRequestVNext
     * @memberof MultiLanguageApicreateLangVariation
     */
    contentLanguageCloneRequestVNext: ContentLanguageCloneRequestVNext
}

export interface MultiLanguageApiCreateLangVariation0Request {
    /**
     * 
     * @type ContentLanguageCloneRequestVNext
     * @memberof MultiLanguageApicreateLangVariation_2
     */
    contentLanguageCloneRequestVNext: ContentLanguageCloneRequestVNext
}

export interface MultiLanguageApiDetachFromLangGroupRequest {
    /**
     * 
     * @type DetachFromLangGroupRequestVNext
     * @memberof MultiLanguageApidetachFromLangGroup
     */
    detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext
}

export interface MultiLanguageApiDetachFromLangGroup0Request {
    /**
     * 
     * @type DetachFromLangGroupRequestVNext
     * @memberof MultiLanguageApidetachFromLangGroup_3
     */
    detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext
}

export interface MultiLanguageApiSetLangPrimaryRequest {
    /**
     * 
     * @type SetNewLanguagePrimaryRequestVNext
     * @memberof MultiLanguageApisetLangPrimary
     */
    setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext
}

export interface MultiLanguageApiUpdateLangsRequest {
    /**
     * 
     * @type UpdateLanguagesRequestVNext
     * @memberof MultiLanguageApiupdateLangs
     */
    updateLanguagesRequestVNext: UpdateLanguagesRequestVNext
}

export interface MultiLanguageApiUpdateLangs0Request {
    /**
     * 
     * @type UpdateLanguagesRequestVNext
     * @memberof MultiLanguageApiupdateLangs_4
     */
    updateLanguagesRequestVNext: UpdateLanguagesRequestVNext
}

export class ObjectMultiLanguageApi {
    private api: ObservableMultiLanguageApi

    public constructor(configuration: Configuration, requestFactory?: MultiLanguageApiRequestFactory, responseProcessor?: MultiLanguageApiResponseProcessor) {
        this.api = new ObservableMultiLanguageApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Attach a landing page to a multi-language group.
     * Add a landing page to a multi-language group
     * @param param the request object
     */
    public attachToLangGroupWithHttpInfo(param: MultiLanguageApiAttachToLangGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.attachToLangGroupWithHttpInfo(param.attachToLangPrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Attach a landing page to a multi-language group.
     * Add a landing page to a multi-language group
     * @param param the request object
     */
    public attachToLangGroup(param: MultiLanguageApiAttachToLangGroupRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.attachToLangGroup(param.attachToLangPrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Attach a site page to a multi-language group.
     * Add a website page to a multi-language group
     * @param param the request object
     */
    public attachToLangGroup_1WithHttpInfo(param: MultiLanguageApiAttachToLangGroup0Request, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.attachToLangGroup_1WithHttpInfo(param.attachToLangPrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Attach a site page to a multi-language group.
     * Add a website page to a multi-language group
     * @param param the request object
     */
    public attachToLangGroup_1(param: MultiLanguageApiAttachToLangGroup0Request, options?: ConfigurationOptions): Promise<void> {
        return this.api.attachToLangGroup_1(param.attachToLangPrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Create a new language variation from an existing landing page
     * Create a new language variation
     * @param param the request object
     */
    public createLangVariationWithHttpInfo(param: MultiLanguageApiCreateLangVariationRequest, options?: ConfigurationOptions): Promise<HttpInfo<Page>> {
        return this.api.createLangVariationWithHttpInfo(param.contentLanguageCloneRequestVNext,  options).toPromise();
    }

    /**
     * Create a new language variation from an existing landing page
     * Create a new language variation
     * @param param the request object
     */
    public createLangVariation(param: MultiLanguageApiCreateLangVariationRequest, options?: ConfigurationOptions): Promise<Page> {
        return this.api.createLangVariation(param.contentLanguageCloneRequestVNext,  options).toPromise();
    }

    /**
     * Create a new language variation from an existing site page
     * Create a new language variation
     * @param param the request object
     */
    public createLangVariation_2WithHttpInfo(param: MultiLanguageApiCreateLangVariation0Request, options?: ConfigurationOptions): Promise<HttpInfo<Page>> {
        return this.api.createLangVariation_2WithHttpInfo(param.contentLanguageCloneRequestVNext,  options).toPromise();
    }

    /**
     * Create a new language variation from an existing site page
     * Create a new language variation
     * @param param the request object
     */
    public createLangVariation_2(param: MultiLanguageApiCreateLangVariation0Request, options?: ConfigurationOptions): Promise<Page> {
        return this.api.createLangVariation_2(param.contentLanguageCloneRequestVNext,  options).toPromise();
    }

    /**
     * Detach a landing page from a multi-language group.
     * Remove a landing page from a multi-language group
     * @param param the request object
     */
    public detachFromLangGroupWithHttpInfo(param: MultiLanguageApiDetachFromLangGroupRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.detachFromLangGroupWithHttpInfo(param.detachFromLangGroupRequestVNext,  options).toPromise();
    }

    /**
     * Detach a landing page from a multi-language group.
     * Remove a landing page from a multi-language group
     * @param param the request object
     */
    public detachFromLangGroup(param: MultiLanguageApiDetachFromLangGroupRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.detachFromLangGroup(param.detachFromLangGroupRequestVNext,  options).toPromise();
    }

    /**
     * Detach a website page from a multi-language group.
     * Remove a website page from a multi-language group
     * @param param the request object
     */
    public detachFromLangGroup_3WithHttpInfo(param: MultiLanguageApiDetachFromLangGroup0Request, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.detachFromLangGroup_3WithHttpInfo(param.detachFromLangGroupRequestVNext,  options).toPromise();
    }

    /**
     * Detach a website page from a multi-language group.
     * Remove a website page from a multi-language group
     * @param param the request object
     */
    public detachFromLangGroup_3(param: MultiLanguageApiDetachFromLangGroup0Request, options?: ConfigurationOptions): Promise<void> {
        return this.api.detachFromLangGroup_3(param.detachFromLangGroupRequestVNext,  options).toPromise();
    }

    /**
     * Set a site page as the primary language of a multi-language group.
     * Set a new primary language
     * @param param the request object
     */
    public setLangPrimaryWithHttpInfo(param: MultiLanguageApiSetLangPrimaryRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.setLangPrimaryWithHttpInfo(param.setNewLanguagePrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Set a site page as the primary language of a multi-language group.
     * Set a new primary language
     * @param param the request object
     */
    public setLangPrimary(param: MultiLanguageApiSetLangPrimaryRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.setLangPrimary(param.setNewLanguagePrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Explicitly set new languages for each landing page in a multi-language group.
     * Update languages of multi-language group
     * @param param the request object
     */
    public updateLangsWithHttpInfo(param: MultiLanguageApiUpdateLangsRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.updateLangsWithHttpInfo(param.updateLanguagesRequestVNext,  options).toPromise();
    }

    /**
     * Explicitly set new languages for each landing page in a multi-language group.
     * Update languages of multi-language group
     * @param param the request object
     */
    public updateLangs(param: MultiLanguageApiUpdateLangsRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.updateLangs(param.updateLanguagesRequestVNext,  options).toPromise();
    }

    /**
     * Explicitly set new languages for each site page in a multi-language group.
     * Update languages of multi-language group
     * @param param the request object
     */
    public updateLangs_4WithHttpInfo(param: MultiLanguageApiUpdateLangs0Request, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.updateLangs_4WithHttpInfo(param.updateLanguagesRequestVNext,  options).toPromise();
    }

    /**
     * Explicitly set new languages for each site page in a multi-language group.
     * Update languages of multi-language group
     * @param param the request object
     */
    public updateLangs_4(param: MultiLanguageApiUpdateLangs0Request, options?: ConfigurationOptions): Promise<void> {
        return this.api.updateLangs_4(param.updateLanguagesRequestVNext,  options).toPromise();
    }

}

import { ObservableWebsitePagesApi } from "./ObservableAPI";
import { WebsitePagesApiRequestFactory, WebsitePagesApiResponseProcessor} from "../apis/WebsitePagesApi";

export interface WebsitePagesApiArchiveRequest {
    /**
     * The ID of the website page.
     * Defaults to: undefined
     * @type string
     * @memberof WebsitePagesApiarchive
     */
    objectId: string
    /**
     * Whether to return only results that have been archived.
     * Defaults to: undefined
     * @type boolean
     * @memberof WebsitePagesApiarchive
     */
    archived?: boolean
}

export interface WebsitePagesApiCloneRequest {
    /**
     * 
     * @type ContentCloneRequestVNext
     * @memberof WebsitePagesApiclone
     */
    contentCloneRequestVNext: ContentCloneRequestVNext
}

export interface WebsitePagesApiCreateRequest {
    /**
     * 
     * @type Page
     * @memberof WebsitePagesApicreate
     */
    page: Page
}

export interface WebsitePagesApiGetByIdRequest {
    /**
     * The Site Page id.
     * Defaults to: undefined
     * @type string
     * @memberof WebsitePagesApigetById
     */
    objectId: string
    /**
     * Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof WebsitePagesApigetById
     */
    archived?: boolean
    /**
     * Specifies which properties of the site page to include in the response.
     * Defaults to: undefined
     * @type string
     * @memberof WebsitePagesApigetById
     */
    property?: string
}

export interface WebsitePagesApiGetDraftByIdRequest {
    /**
     * The ID of the website page.
     * Defaults to: undefined
     * @type string
     * @memberof WebsitePagesApigetDraftById
     */
    objectId: string
}

export interface WebsitePagesApiGetPageRequest {
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * Defaults to: undefined
     * @type string
     * @memberof WebsitePagesApigetPage
     */
    after?: string
    /**
     * Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof WebsitePagesApigetPage
     */
    archived?: boolean
    /**
     * Only return Site Pages created after the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof WebsitePagesApigetPage
     */
    createdAfter?: Date
    /**
     * Only return Site Pages created at exactly the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof WebsitePagesApigetPage
     */
    createdAt?: Date
    /**
     * Only return Site Pages created before the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof WebsitePagesApigetPage
     */
    createdBefore?: Date
    /**
     * The maximum number of results to return. Default is 100.
     * Defaults to: undefined
     * @type number
     * @memberof WebsitePagesApigetPage
     */
    limit?: number
    /**
     * Specifies which properties of the site pages to include in the response.
     * Defaults to: undefined
     * @type string
     * @memberof WebsitePagesApigetPage
     */
    property?: string
    /**
     * Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof WebsitePagesApigetPage
     */
    sort?: Array<string>
    /**
     * Only return Site Pages last updated after the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof WebsitePagesApigetPage
     */
    updatedAfter?: Date
    /**
     * Only return Site Pages last updated at exactly the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof WebsitePagesApigetPage
     */
    updatedAt?: Date
    /**
     * Only return Site Pages last updated before the specified time.
     * Defaults to: undefined
     * @type Date
     * @memberof WebsitePagesApigetPage
     */
    updatedBefore?: Date
}

export interface WebsitePagesApiPushLiveRequest {
    /**
     * The ID of the website page.
     * Defaults to: undefined
     * @type string
     * @memberof WebsitePagesApipushLive
     */
    objectId: string
}

export interface WebsitePagesApiScheduleRequest {
    /**
     * 
     * @type ContentScheduleRequestVNext
     * @memberof WebsitePagesApischedule
     */
    contentScheduleRequestVNext: ContentScheduleRequestVNext
}

export interface WebsitePagesApiSetLangPrimaryRequest {
    /**
     * 
     * @type SetNewLanguagePrimaryRequestVNext
     * @memberof WebsitePagesApisetLangPrimary
     */
    setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext
}

export interface WebsitePagesApiUpdateRequest {
    /**
     * The ID of the website page.
     * Defaults to: undefined
     * @type string
     * @memberof WebsitePagesApiupdate
     */
    objectId: string
    /**
     * 
     * @type Page
     * @memberof WebsitePagesApiupdate
     */
    page: Page
    /**
     * Specifies whether to update deleted Site Pages. Defaults to &#x60;false&#x60;.
     * Defaults to: undefined
     * @type boolean
     * @memberof WebsitePagesApiupdate
     */
    archived?: boolean
}

export interface WebsitePagesApiUpdateDraftRequest {
    /**
     * The ID of the website page.
     * Defaults to: undefined
     * @type string
     * @memberof WebsitePagesApiupdateDraft
     */
    objectId: string
    /**
     * 
     * @type Page
     * @memberof WebsitePagesApiupdateDraft
     */
    page: Page
}

export class ObjectWebsitePagesApi {
    private api: ObservableWebsitePagesApi

    public constructor(configuration: Configuration, requestFactory?: WebsitePagesApiRequestFactory, responseProcessor?: WebsitePagesApiResponseProcessor) {
        this.api = new ObservableWebsitePagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a website page, specified by its ID.
     * Delete a website page
     * @param param the request object
     */
    public archiveWithHttpInfo(param: WebsitePagesApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete a website page, specified by its ID.
     * Delete a website page
     * @param param the request object
     */
    public archive(param: WebsitePagesApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Create a copy of an existing website page.
     * Clone a website page
     * @param param the request object
     */
    public cloneWithHttpInfo(param: WebsitePagesApiCloneRequest, options?: ConfigurationOptions): Promise<HttpInfo<Page>> {
        return this.api.cloneWithHttpInfo(param.contentCloneRequestVNext,  options).toPromise();
    }

    /**
     * Create a copy of an existing website page.
     * Clone a website page
     * @param param the request object
     */
    public clone(param: WebsitePagesApiCloneRequest, options?: ConfigurationOptions): Promise<Page> {
        return this.api.clone(param.contentCloneRequestVNext,  options).toPromise();
    }

    /**
     * Create a new website page.
     * Create a website page
     * @param param the request object
     */
    public createWithHttpInfo(param: WebsitePagesApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Page>> {
        return this.api.createWithHttpInfo(param.page,  options).toPromise();
    }

    /**
     * Create a new website page.
     * Create a website page
     * @param param the request object
     */
    public create(param: WebsitePagesApiCreateRequest, options?: ConfigurationOptions): Promise<Page> {
        return this.api.create(param.page,  options).toPromise();
    }

    /**
     * Retrieve a website page by its ID.
     * Retrieve a website page
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: WebsitePagesApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<Page>> {
        return this.api.getByIdWithHttpInfo(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve a website page by its ID.
     * Retrieve a website page
     * @param param the request object
     */
    public getById(param: WebsitePagesApiGetByIdRequest, options?: ConfigurationOptions): Promise<Page> {
        return this.api.getById(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve the full draft version of a website page, specified by its ID.
     * Retrieve a website page draft
     * @param param the request object
     */
    public getDraftByIdWithHttpInfo(param: WebsitePagesApiGetDraftByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<Page>> {
        return this.api.getDraftByIdWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Retrieve the full draft version of a website page, specified by its ID.
     * Retrieve a website page draft
     * @param param the request object
     */
    public getDraftById(param: WebsitePagesApiGetDraftByIdRequest, options?: ConfigurationOptions): Promise<Page> {
        return this.api.getDraftById(param.objectId,  options).toPromise();
    }

    /**
     * Retrieve all website pages. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits.
     * Retrieve all website pages
     * @param param the request object
     */
    public getPageWithHttpInfo(param: WebsitePagesApiGetPageRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponseWithTotalPageForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.property, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * Retrieve all website pages. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits.
     * Retrieve all website pages
     * @param param the request object
     */
    public getPage(param: WebsitePagesApiGetPageRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponseWithTotalPageForwardPaging> {
        return this.api.getPage(param.after, param.archived, param.createdAfter, param.createdAt, param.createdBefore, param.limit, param.property, param.sort, param.updatedAfter, param.updatedAt, param.updatedBefore,  options).toPromise();
    }

    /**
     * Take any changes from the draft version of the website page and apply them to the live version.
     * Publish website page draft
     * @param param the request object
     */
    public pushLiveWithHttpInfo(param: WebsitePagesApiPushLiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.pushLiveWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Take any changes from the draft version of the website page and apply them to the live version.
     * Publish website page draft
     * @param param the request object
     */
    public pushLive(param: WebsitePagesApiPushLiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.pushLive(param.objectId,  options).toPromise();
    }

    /**
     * Schedule a website page to published at a future time.
     * Schedule a website page to be published
     * @param param the request object
     */
    public scheduleWithHttpInfo(param: WebsitePagesApiScheduleRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.scheduleWithHttpInfo(param.contentScheduleRequestVNext,  options).toPromise();
    }

    /**
     * Schedule a website page to published at a future time.
     * Schedule a website page to be published
     * @param param the request object
     */
    public schedule(param: WebsitePagesApiScheduleRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.schedule(param.contentScheduleRequestVNext,  options).toPromise();
    }

    /**
     * Set a landing page as the primary language of a multi-language group.
     * Set a new primary language
     * @param param the request object
     */
    public setLangPrimaryWithHttpInfo(param: WebsitePagesApiSetLangPrimaryRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.setLangPrimaryWithHttpInfo(param.setNewLanguagePrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Set a landing page as the primary language of a multi-language group.
     * Set a new primary language
     * @param param the request object
     */
    public setLangPrimary(param: WebsitePagesApiSetLangPrimaryRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.setLangPrimary(param.setNewLanguagePrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Partially updates a single website page, specified by its ID. You only need to specify the column values that you are modifying. 
     * Update a website page
     * @param param the request object
     */
    public updateWithHttpInfo(param: WebsitePagesApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Page>> {
        return this.api.updateWithHttpInfo(param.objectId, param.page, param.archived,  options).toPromise();
    }

    /**
     * Partially updates a single website page, specified by its ID. You only need to specify the column values that you are modifying. 
     * Update a website page
     * @param param the request object
     */
    public update(param: WebsitePagesApiUpdateRequest, options?: ConfigurationOptions): Promise<Page> {
        return this.api.update(param.objectId, param.page, param.archived,  options).toPromise();
    }

    /**
     * Partially update the draft version of a website page, specified by page ID. You only need to specify the values for the details that you\'re modifying.
     * Update a website page draft
     * @param param the request object
     */
    public updateDraftWithHttpInfo(param: WebsitePagesApiUpdateDraftRequest, options?: ConfigurationOptions): Promise<HttpInfo<Page>> {
        return this.api.updateDraftWithHttpInfo(param.objectId, param.page,  options).toPromise();
    }

    /**
     * Partially update the draft version of a website page, specified by page ID. You only need to specify the values for the details that you\'re modifying.
     * Update a website page draft
     * @param param the request object
     */
    public updateDraft(param: WebsitePagesApiUpdateDraftRequest, options?: ConfigurationOptions): Promise<Page> {
        return this.api.updateDraft(param.objectId, param.page,  options).toPromise();
    }

}
