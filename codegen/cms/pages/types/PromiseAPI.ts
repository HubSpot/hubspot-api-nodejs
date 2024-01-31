import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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
import { CollectionResponseWithTotalPageForwardPaging } from '../models/CollectionResponseWithTotalPageForwardPaging';
import { CollectionResponseWithTotalVersionContentFolder } from '../models/CollectionResponseWithTotalVersionContentFolder';
import { CollectionResponseWithTotalVersionPage } from '../models/CollectionResponseWithTotalVersionPage';
import { ContentCloneRequestVNext } from '../models/ContentCloneRequestVNext';
import { ContentFolder } from '../models/ContentFolder';
import { ContentLanguageCloneRequestVNext } from '../models/ContentLanguageCloneRequestVNext';
import { ContentScheduleRequestVNext } from '../models/ContentScheduleRequestVNext';
import { DetachFromLangGroupRequestVNext } from '../models/DetachFromLangGroupRequestVNext';
import { Page } from '../models/Page';
import { SetNewLanguagePrimaryRequestVNext } from '../models/SetNewLanguagePrimaryRequestVNext';
import { UpdateLanguagesRequestVNext } from '../models/UpdateLanguagesRequestVNext';
import { VersionContentFolder } from '../models/VersionContentFolder';
import { VersionPage } from '../models/VersionPage';
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
     * Delete the Landing Page object identified by the id in the path.
     * Delete a Landing Page
     * @param objectId The Landing Page id.
     * @param archived Whether to return only results that have been archived.
     */
    public archiveWithHttpInfo(objectId: string, archived?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(objectId, archived, _options);
        return result.toPromise();
    }

    /**
     * Delete the Landing Page object identified by the id in the path.
     * Delete a Landing Page
     * @param objectId The Landing Page id.
     * @param archived Whether to return only results that have been archived.
     */
    public archive(objectId: string, archived?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.archive(objectId, archived, _options);
        return result.toPromise();
    }

    /**
     * Delete the Landing Page objects identified in the request body. Note: This is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to true.
     * Delete a batch of Landing Pages
     * @param batchInputString The JSON array of Landing Page ids.
     */
    public archiveBatchWithHttpInfo(batchInputString: BatchInputString, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveBatchWithHttpInfo(batchInputString, _options);
        return result.toPromise();
    }

    /**
     * Delete the Landing Page objects identified in the request body. Note: This is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to true.
     * Delete a batch of Landing Pages
     * @param batchInputString The JSON array of Landing Page ids.
     */
    public archiveBatch(batchInputString: BatchInputString, _options?: Configuration): Promise<void> {
        const result = this.api.archiveBatch(batchInputString, _options);
        return result.toPromise();
    }

    /**
     * Delete the Folder object identified by the id in the path.
     * Delete a Folder
     * @param objectId The Folder id.
     * @param archived Whether to return only results that have been archived.
     */
    public archiveFolderWithHttpInfo(objectId: string, archived?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveFolderWithHttpInfo(objectId, archived, _options);
        return result.toPromise();
    }

    /**
     * Delete the Folder object identified by the id in the path.
     * Delete a Folder
     * @param objectId The Folder id.
     * @param archived Whether to return only results that have been archived.
     */
    public archiveFolder(objectId: string, archived?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.archiveFolder(objectId, archived, _options);
        return result.toPromise();
    }

    /**
     * Delete the Folder objects identified in the request body.
     * Delete a batch of Folders
     * @param batchInputString The JSON array of Folder ids.
     */
    public archiveFoldersWithHttpInfo(batchInputString: BatchInputString, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveFoldersWithHttpInfo(batchInputString, _options);
        return result.toPromise();
    }

    /**
     * Delete the Folder objects identified in the request body.
     * Delete a batch of Folders
     * @param batchInputString The JSON array of Folder ids.
     */
    public archiveFolders(batchInputString: BatchInputString, _options?: Configuration): Promise<void> {
        const result = this.api.archiveFolders(batchInputString, _options);
        return result.toPromise();
    }

    /**
     * Attach a landing page to a multi-language group.
     * Attach a landing page to a multi-language group
     * @param attachToLangPrimaryRequestVNext The JSON representation of the AttachToLangPrimaryRequest object.
     */
    public attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Attach a landing page to a multi-language group.
     * Attach a landing page to a multi-language group
     * @param attachToLangPrimaryRequestVNext The JSON representation of the AttachToLangPrimaryRequest object.
     */
    public attachToLangGroup(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: Configuration): Promise<void> {
        const result = this.api.attachToLangGroup(attachToLangPrimaryRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Clone a Landing Page
     * Clone a Landing Page
     * @param contentCloneRequestVNext The JSON representation of the ContentCloneRequest object.
     */
    public cloneWithHttpInfo(contentCloneRequestVNext: ContentCloneRequestVNext, _options?: Configuration): Promise<HttpInfo<Page>> {
        const result = this.api.cloneWithHttpInfo(contentCloneRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Clone a Landing Page
     * Clone a Landing Page
     * @param contentCloneRequestVNext The JSON representation of the ContentCloneRequest object.
     */
    public clone(contentCloneRequestVNext: ContentCloneRequestVNext, _options?: Configuration): Promise<Page> {
        const result = this.api.clone(contentCloneRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Create a new Landing Page
     * Create a new Landing Page
     * @param page The JSON representation of a new Landing Page.
     */
    public createWithHttpInfo(page: Page, _options?: Configuration): Promise<HttpInfo<void | Page>> {
        const result = this.api.createWithHttpInfo(page, _options);
        return result.toPromise();
    }

    /**
     * Create a new Landing Page
     * Create a new Landing Page
     * @param page The JSON representation of a new Landing Page.
     */
    public create(page: Page, _options?: Configuration): Promise<void | Page> {
        const result = this.api.create(page, _options);
        return result.toPromise();
    }

    /**
     * Create a new A/B test variation based on the information provided in the request body. 
     * Create a new A/B test variation
     * @param abTestCreateRequestVNext The JSON representation of the AbTestCreateRequest object.
     */
    public createABTestVariationWithHttpInfo(abTestCreateRequestVNext: AbTestCreateRequestVNext, _options?: Configuration): Promise<HttpInfo<Page>> {
        const result = this.api.createABTestVariationWithHttpInfo(abTestCreateRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Create a new A/B test variation based on the information provided in the request body. 
     * Create a new A/B test variation
     * @param abTestCreateRequestVNext The JSON representation of the AbTestCreateRequest object.
     */
    public createABTestVariation(abTestCreateRequestVNext: AbTestCreateRequestVNext, _options?: Configuration): Promise<Page> {
        const result = this.api.createABTestVariation(abTestCreateRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Create the Landing Page objects detailed in the request body.
     * Create a batch of Landing Pages
     * @param batchInputPage The JSON array of new Landing Pages to create.
     */
    public createBatchWithHttpInfo(batchInputPage: BatchInputPage, _options?: Configuration): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        const result = this.api.createBatchWithHttpInfo(batchInputPage, _options);
        return result.toPromise();
    }

    /**
     * Create the Landing Page objects detailed in the request body.
     * Create a batch of Landing Pages
     * @param batchInputPage The JSON array of new Landing Pages to create.
     */
    public createBatch(batchInputPage: BatchInputPage, _options?: Configuration): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
        const result = this.api.createBatch(batchInputPage, _options);
        return result.toPromise();
    }

    /**
     * Create a new Folder
     * Create a new Folder
     * @param contentFolder The JSON representation of a new Folder.
     */
    public createFolderWithHttpInfo(contentFolder: ContentFolder, _options?: Configuration): Promise<HttpInfo<ContentFolder>> {
        const result = this.api.createFolderWithHttpInfo(contentFolder, _options);
        return result.toPromise();
    }

    /**
     * Create a new Folder
     * Create a new Folder
     * @param contentFolder The JSON representation of a new Folder.
     */
    public createFolder(contentFolder: ContentFolder, _options?: Configuration): Promise<ContentFolder> {
        const result = this.api.createFolder(contentFolder, _options);
        return result.toPromise();
    }

    /**
     * Create the Folder objects detailed in the request body.
     * Create a batch of Folders
     * @param batchInputContentFolder The JSON array of new Folders to create.
     */
    public createFoldersWithHttpInfo(batchInputContentFolder: BatchInputContentFolder, _options?: Configuration): Promise<HttpInfo<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>> {
        const result = this.api.createFoldersWithHttpInfo(batchInputContentFolder, _options);
        return result.toPromise();
    }

    /**
     * Create the Folder objects detailed in the request body.
     * Create a batch of Folders
     * @param batchInputContentFolder The JSON array of new Folders to create.
     */
    public createFolders(batchInputContentFolder: BatchInputContentFolder, _options?: Configuration): Promise<BatchResponseContentFolder | BatchResponseContentFolderWithErrors> {
        const result = this.api.createFolders(batchInputContentFolder, _options);
        return result.toPromise();
    }

    /**
     * Create a new language variation from an existing landing page
     * Create a new language variation
     * @param contentLanguageCloneRequestVNext The JSON representation of the ContentLanguageCloneRequest object.
     */
    public createLangVariationWithHttpInfo(contentLanguageCloneRequestVNext: ContentLanguageCloneRequestVNext, _options?: Configuration): Promise<HttpInfo<Page>> {
        const result = this.api.createLangVariationWithHttpInfo(contentLanguageCloneRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Create a new language variation from an existing landing page
     * Create a new language variation
     * @param contentLanguageCloneRequestVNext The JSON representation of the ContentLanguageCloneRequest object.
     */
    public createLangVariation(contentLanguageCloneRequestVNext: ContentLanguageCloneRequestVNext, _options?: Configuration): Promise<Page> {
        const result = this.api.createLangVariation(contentLanguageCloneRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Detach a landing page from a multi-language group.
     * Detach a landing page from a multi-language group
     * @param detachFromLangGroupRequestVNext The JSON representation of the DetachFromLangGroupRequest object.
     */
    public detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Detach a landing page from a multi-language group.
     * Detach a landing page from a multi-language group
     * @param detachFromLangGroupRequestVNext The JSON representation of the DetachFromLangGroupRequest object.
     */
    public detachFromLangGroup(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: Configuration): Promise<void> {
        const result = this.api.detachFromLangGroup(detachFromLangGroupRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * End an active A/B test and designate a winner.
     * End an active A/B test
     * @param abTestEndRequestVNext The JSON representation of the AbTestEndRequest object.
     */
    public endActiveABTestWithHttpInfo(abTestEndRequestVNext: AbTestEndRequestVNext, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.endActiveABTestWithHttpInfo(abTestEndRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * End an active A/B test and designate a winner.
     * End an active A/B test
     * @param abTestEndRequestVNext The JSON representation of the AbTestEndRequest object.
     */
    public endActiveABTest(abTestEndRequestVNext: AbTestEndRequestVNext, _options?: Configuration): Promise<void> {
        const result = this.api.endActiveABTest(abTestEndRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the Landing Page object identified by the id in the path.
     * Retrieve a Landing Page
     * @param objectId The Landing Page id.
     * @param archived Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getByIdWithHttpInfo(objectId: string, archived?: boolean, property?: string, _options?: Configuration): Promise<HttpInfo<Page>> {
        const result = this.api.getByIdWithHttpInfo(objectId, archived, property, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the Landing Page object identified by the id in the path.
     * Retrieve a Landing Page
     * @param objectId The Landing Page id.
     * @param archived Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getById(objectId: string, archived?: boolean, property?: string, _options?: Configuration): Promise<Page> {
        const result = this.api.getById(objectId, archived, property, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the full draft version of the Landing Page.
     * Retrieve the full draft version of the Landing Page
     * @param objectId The Landing Page id.
     */
    public getDraftByIdWithHttpInfo(objectId: string, _options?: Configuration): Promise<HttpInfo<Page>> {
        const result = this.api.getDraftByIdWithHttpInfo(objectId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the full draft version of the Landing Page.
     * Retrieve the full draft version of the Landing Page
     * @param objectId The Landing Page id.
     */
    public getDraftById(objectId: string, _options?: Configuration): Promise<Page> {
        const result = this.api.getDraftById(objectId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the Folder object identified by the id in the path.
     * Retrieve a Folder
     * @param objectId The Folder id.
     * @param archived Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getFolderByIdWithHttpInfo(objectId: string, archived?: boolean, property?: string, _options?: Configuration): Promise<HttpInfo<ContentFolder>> {
        const result = this.api.getFolderByIdWithHttpInfo(objectId, archived, property, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the Folder object identified by the id in the path.
     * Retrieve a Folder
     * @param objectId The Folder id.
     * @param archived Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getFolderById(objectId: string, archived?: boolean, property?: string, _options?: Configuration): Promise<ContentFolder> {
        const result = this.api.getFolderById(objectId, archived, property, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a previous version of a Folder
     * Retrieves a previous version of a Folder
     * @param objectId The Folder id.
     * @param revisionId The Folder version id.
     */
    public getFolderPreviousVersionWithHttpInfo(objectId: string, revisionId: string, _options?: Configuration): Promise<HttpInfo<VersionContentFolder>> {
        const result = this.api.getFolderPreviousVersionWithHttpInfo(objectId, revisionId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a previous version of a Folder
     * Retrieves a previous version of a Folder
     * @param objectId The Folder id.
     * @param revisionId The Folder version id.
     */
    public getFolderPreviousVersion(objectId: string, revisionId: string, _options?: Configuration): Promise<VersionContentFolder> {
        const result = this.api.getFolderPreviousVersion(objectId, revisionId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves all the previous versions of a Folder.
     * Retrieves all the previous versions of a Folder
     * @param objectId The Folder id.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to return. Default is 100.
     */
    public getFolderPreviousVersionsWithHttpInfo(objectId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalVersionContentFolder>> {
        const result = this.api.getFolderPreviousVersionsWithHttpInfo(objectId, after, before, limit, _options);
        return result.toPromise();
    }

    /**
     * Retrieves all the previous versions of a Folder.
     * Retrieves all the previous versions of a Folder
     * @param objectId The Folder id.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to return. Default is 100.
     */
    public getFolderPreviousVersions(objectId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Promise<CollectionResponseWithTotalVersionContentFolder> {
        const result = this.api.getFolderPreviousVersions(objectId, after, before, limit, _options);
        return result.toPromise();
    }

    /**
     * Get the list of Landing Page Folders. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Landing Page Folders
     * @param createdAt Only return Folders created at exactly the specified time.
     * @param createdAfter Only return Folders created after the specified time.
     * @param createdBefore Only return Folders created before the specified time.
     * @param updatedAt Only return Folders last updated at exactly the specified time.
     * @param updatedAfter Only return Folders last updated after the specified time.
     * @param updatedBefore Only return Folders last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 100.
     * @param archived Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getFoldersPageWithHttpInfo(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, property?: string, _options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalContentFolderForwardPaging>> {
        const result = this.api.getFoldersPageWithHttpInfo(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options);
        return result.toPromise();
    }

    /**
     * Get the list of Landing Page Folders. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Landing Page Folders
     * @param createdAt Only return Folders created at exactly the specified time.
     * @param createdAfter Only return Folders created after the specified time.
     * @param createdBefore Only return Folders created before the specified time.
     * @param updatedAt Only return Folders last updated at exactly the specified time.
     * @param updatedAfter Only return Folders last updated after the specified time.
     * @param updatedBefore Only return Folders last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 100.
     * @param archived Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getFoldersPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, property?: string, _options?: Configuration): Promise<CollectionResponseWithTotalContentFolderForwardPaging> {
        const result = this.api.getFoldersPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options);
        return result.toPromise();
    }

    /**
     * Get the list of landing pages. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Landing Pages
     * @param createdAt Only return Landing Pages created at exactly the specified time.
     * @param createdAfter Only return Landing Pages created after the specified time.
     * @param createdBefore Only return Landing Pages created before the specified time.
     * @param updatedAt Only return Landing Pages last updated at exactly the specified time.
     * @param updatedAfter Only return Landing Pages last updated after the specified time.
     * @param updatedBefore Only return Landing Pages last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 100.
     * @param archived Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getPageWithHttpInfo(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, property?: string, _options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalPageForwardPaging>> {
        const result = this.api.getPageWithHttpInfo(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options);
        return result.toPromise();
    }

    /**
     * Get the list of landing pages. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Landing Pages
     * @param createdAt Only return Landing Pages created at exactly the specified time.
     * @param createdAfter Only return Landing Pages created after the specified time.
     * @param createdBefore Only return Landing Pages created before the specified time.
     * @param updatedAt Only return Landing Pages last updated at exactly the specified time.
     * @param updatedAfter Only return Landing Pages last updated after the specified time.
     * @param updatedBefore Only return Landing Pages last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 100.
     * @param archived Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, property?: string, _options?: Configuration): Promise<CollectionResponseWithTotalPageForwardPaging> {
        const result = this.api.getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a previous version of a Landing Page
     * Retrieves a previous version of a Landing Page
     * @param objectId The Landing Page id.
     * @param revisionId The Landing Page version id.
     */
    public getPreviousVersionWithHttpInfo(objectId: string, revisionId: string, _options?: Configuration): Promise<HttpInfo<VersionPage>> {
        const result = this.api.getPreviousVersionWithHttpInfo(objectId, revisionId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a previous version of a Landing Page
     * Retrieves a previous version of a Landing Page
     * @param objectId The Landing Page id.
     * @param revisionId The Landing Page version id.
     */
    public getPreviousVersion(objectId: string, revisionId: string, _options?: Configuration): Promise<VersionPage> {
        const result = this.api.getPreviousVersion(objectId, revisionId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves all the previous versions of a Landing Page.
     * Retrieves all the previous versions of a Landing Page
     * @param objectId The Landing Page id.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to return. Default is 100.
     */
    public getPreviousVersionsWithHttpInfo(objectId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalVersionPage>> {
        const result = this.api.getPreviousVersionsWithHttpInfo(objectId, after, before, limit, _options);
        return result.toPromise();
    }

    /**
     * Retrieves all the previous versions of a Landing Page.
     * Retrieves all the previous versions of a Landing Page
     * @param objectId The Landing Page id.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to return. Default is 100.
     */
    public getPreviousVersions(objectId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Promise<CollectionResponseWithTotalVersionPage> {
        const result = this.api.getPreviousVersions(objectId, after, before, limit, _options);
        return result.toPromise();
    }

    /**
     * Take any changes from the draft version of the Landing Page and apply them to the live version.
     * Push Landing Page draft edits live
     * @param objectId The id of the Landing Page for which it\&#39;s draft will be pushed live.
     */
    public pushLiveWithHttpInfo(objectId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.pushLiveWithHttpInfo(objectId, _options);
        return result.toPromise();
    }

    /**
     * Take any changes from the draft version of the Landing Page and apply them to the live version.
     * Push Landing Page draft edits live
     * @param objectId The id of the Landing Page for which it\&#39;s draft will be pushed live.
     */
    public pushLive(objectId: string, _options?: Configuration): Promise<void> {
        const result = this.api.pushLive(objectId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the Landing Page objects identified in the request body.
     * Retrieve a batch of Landing Pages
     * @param batchInputString The JSON array of Landing Page ids.
     * @param archived Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     */
    public readBatchWithHttpInfo(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        const result = this.api.readBatchWithHttpInfo(batchInputString, archived, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the Landing Page objects identified in the request body.
     * Retrieve a batch of Landing Pages
     * @param batchInputString The JSON array of Landing Page ids.
     * @param archived Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     */
    public readBatch(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
        const result = this.api.readBatch(batchInputString, archived, _options);
        return result.toPromise();
    }

    /**
     * Update the Folder objects identified in the request body.
     * Retrieve a batch of Folders
     * @param batchInputString The JSON array of Folder ids.
     * @param archived Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     */
    public readFoldersWithHttpInfo(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Promise<HttpInfo<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>> {
        const result = this.api.readFoldersWithHttpInfo(batchInputString, archived, _options);
        return result.toPromise();
    }

    /**
     * Update the Folder objects identified in the request body.
     * Retrieve a batch of Folders
     * @param batchInputString The JSON array of Folder ids.
     * @param archived Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     */
    public readFolders(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Promise<BatchResponseContentFolder | BatchResponseContentFolderWithErrors> {
        const result = this.api.readFolders(batchInputString, archived, _options);
        return result.toPromise();
    }

    /**
     * Rerun a previous A/B test.
     * Rerun a previous A/B test
     * @param abTestRerunRequestVNext The JSON representation of the AbTestRerunRequest object.
     */
    public rerunPreviousABTestWithHttpInfo(abTestRerunRequestVNext: AbTestRerunRequestVNext, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.rerunPreviousABTestWithHttpInfo(abTestRerunRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Rerun a previous A/B test.
     * Rerun a previous A/B test
     * @param abTestRerunRequestVNext The JSON representation of the AbTestRerunRequest object.
     */
    public rerunPreviousABTest(abTestRerunRequestVNext: AbTestRerunRequestVNext, _options?: Configuration): Promise<void> {
        const result = this.api.rerunPreviousABTest(abTestRerunRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Discards any edits and resets the draft to the live version.
     * Reset the Landing Page draft to the live version
     * @param objectId The id of the Landing Page for which it\&#39;s draft will be reset.
     */
    public resetDraftWithHttpInfo(objectId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.resetDraftWithHttpInfo(objectId, _options);
        return result.toPromise();
    }

    /**
     * Discards any edits and resets the draft to the live version.
     * Reset the Landing Page draft to the live version
     * @param objectId The id of the Landing Page for which it\&#39;s draft will be reset.
     */
    public resetDraft(objectId: string, _options?: Configuration): Promise<void> {
        const result = this.api.resetDraft(objectId, _options);
        return result.toPromise();
    }

    /**
     * Takes a specified version of a Folder and restores it.
     * Restore a previous version of a Folder
     * @param objectId The Folder id.
     * @param revisionId The Folder version id to restore.
     */
    public restoreFolderPreviousVersionWithHttpInfo(objectId: string, revisionId: string, _options?: Configuration): Promise<HttpInfo<ContentFolder>> {
        const result = this.api.restoreFolderPreviousVersionWithHttpInfo(objectId, revisionId, _options);
        return result.toPromise();
    }

    /**
     * Takes a specified version of a Folder and restores it.
     * Restore a previous version of a Folder
     * @param objectId The Folder id.
     * @param revisionId The Folder version id to restore.
     */
    public restoreFolderPreviousVersion(objectId: string, revisionId: string, _options?: Configuration): Promise<ContentFolder> {
        const result = this.api.restoreFolderPreviousVersion(objectId, revisionId, _options);
        return result.toPromise();
    }

    /**
     * Takes a specified version of a Landing Page and restores it.
     * Restore a previous version of a Landing Page
     * @param objectId The Landing Page id.
     * @param revisionId The Landing Page version id to restore.
     */
    public restorePreviousVersionWithHttpInfo(objectId: string, revisionId: string, _options?: Configuration): Promise<HttpInfo<Page>> {
        const result = this.api.restorePreviousVersionWithHttpInfo(objectId, revisionId, _options);
        return result.toPromise();
    }

    /**
     * Takes a specified version of a Landing Page and restores it.
     * Restore a previous version of a Landing Page
     * @param objectId The Landing Page id.
     * @param revisionId The Landing Page version id to restore.
     */
    public restorePreviousVersion(objectId: string, revisionId: string, _options?: Configuration): Promise<Page> {
        const result = this.api.restorePreviousVersion(objectId, revisionId, _options);
        return result.toPromise();
    }

    /**
     * Takes a specified version of a Landing Page, sets it as the new draft version of the Landing Page.
     * Restore a previous version of a Landing Page, to the draft version of the Landing Page
     * @param objectId The Landing Page id.
     * @param revisionId The Landing Page version id to restore.
     */
    public restorePreviousVersionToDraftWithHttpInfo(objectId: string, revisionId: number, _options?: Configuration): Promise<HttpInfo<Page>> {
        const result = this.api.restorePreviousVersionToDraftWithHttpInfo(objectId, revisionId, _options);
        return result.toPromise();
    }

    /**
     * Takes a specified version of a Landing Page, sets it as the new draft version of the Landing Page.
     * Restore a previous version of a Landing Page, to the draft version of the Landing Page
     * @param objectId The Landing Page id.
     * @param revisionId The Landing Page version id to restore.
     */
    public restorePreviousVersionToDraft(objectId: string, revisionId: number, _options?: Configuration): Promise<Page> {
        const result = this.api.restorePreviousVersionToDraft(objectId, revisionId, _options);
        return result.toPromise();
    }

    /**
     * Schedule a Landing Page to be Published
     * Schedule a Landing Page to be Published
     * @param contentScheduleRequestVNext The JSON representation of the ContentScheduleRequestVNext object.
     */
    public scheduleWithHttpInfo(contentScheduleRequestVNext: ContentScheduleRequestVNext, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.scheduleWithHttpInfo(contentScheduleRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Schedule a Landing Page to be Published
     * Schedule a Landing Page to be Published
     * @param contentScheduleRequestVNext The JSON representation of the ContentScheduleRequestVNext object.
     */
    public schedule(contentScheduleRequestVNext: ContentScheduleRequestVNext, _options?: Configuration): Promise<void> {
        const result = this.api.schedule(contentScheduleRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Set a landing page as the primary language of a multi-language group.
     * Set a new primary language
     * @param setNewLanguagePrimaryRequestVNext The JSON representation of the SetNewLanguagePrimaryRequest object.
     */
    public setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Set a landing page as the primary language of a multi-language group.
     * Set a new primary language
     * @param setNewLanguagePrimaryRequestVNext The JSON representation of the SetNewLanguagePrimaryRequest object.
     */
    public setLangPrimary(setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext, _options?: Configuration): Promise<void> {
        const result = this.api.setLangPrimary(setNewLanguagePrimaryRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Sparse updates a single Landing Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Landing Page
     * @param objectId The Landing Page id.
     * @param page The JSON representation of the updated Landing Page.
     * @param archived Specifies whether to update deleted Landing Pages. Defaults to &#x60;false&#x60;.
     */
    public updateWithHttpInfo(objectId: string, page: Page, archived?: boolean, _options?: Configuration): Promise<HttpInfo<Page>> {
        const result = this.api.updateWithHttpInfo(objectId, page, archived, _options);
        return result.toPromise();
    }

    /**
     * Sparse updates a single Landing Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Landing Page
     * @param objectId The Landing Page id.
     * @param page The JSON representation of the updated Landing Page.
     * @param archived Specifies whether to update deleted Landing Pages. Defaults to &#x60;false&#x60;.
     */
    public update(objectId: string, page: Page, archived?: boolean, _options?: Configuration): Promise<Page> {
        const result = this.api.update(objectId, page, archived, _options);
        return result.toPromise();
    }

    /**
     * Update the Landing Page objects identified in the request body.
     * Update a batch of Landing Pages
     * @param batchInputJsonNode The JSON representation of the updated Landing Pages.
     * @param archived Specifies whether to update deleted Landing Pages. Defaults to &#x60;false&#x60;.
     */
    public updateBatchWithHttpInfo(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        const result = this.api.updateBatchWithHttpInfo(batchInputJsonNode, archived, _options);
        return result.toPromise();
    }

    /**
     * Update the Landing Page objects identified in the request body.
     * Update a batch of Landing Pages
     * @param batchInputJsonNode The JSON representation of the updated Landing Pages.
     * @param archived Specifies whether to update deleted Landing Pages. Defaults to &#x60;false&#x60;.
     */
    public updateBatch(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
        const result = this.api.updateBatch(batchInputJsonNode, archived, _options);
        return result.toPromise();
    }

    /**
     * Sparse updates the draft version of a single Landing Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Landing Page draft
     * @param objectId The Landing Page id.
     * @param page The JSON representation of the updated Landing Page to be applied to the draft.
     */
    public updateDraftWithHttpInfo(objectId: string, page: Page, _options?: Configuration): Promise<HttpInfo<Page>> {
        const result = this.api.updateDraftWithHttpInfo(objectId, page, _options);
        return result.toPromise();
    }

    /**
     * Sparse updates the draft version of a single Landing Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Landing Page draft
     * @param objectId The Landing Page id.
     * @param page The JSON representation of the updated Landing Page to be applied to the draft.
     */
    public updateDraft(objectId: string, page: Page, _options?: Configuration): Promise<Page> {
        const result = this.api.updateDraft(objectId, page, _options);
        return result.toPromise();
    }

    /**
     * Sparse updates a single Folder object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Folder
     * @param objectId The Folder id.
     * @param contentFolder The JSON representation of the updated Folder.
     * @param archived Specifies whether to update deleted Folders. Defaults to &#x60;false&#x60;.
     */
    public updateFolderWithHttpInfo(objectId: string, contentFolder: ContentFolder, archived?: boolean, _options?: Configuration): Promise<HttpInfo<ContentFolder>> {
        const result = this.api.updateFolderWithHttpInfo(objectId, contentFolder, archived, _options);
        return result.toPromise();
    }

    /**
     * Sparse updates a single Folder object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Folder
     * @param objectId The Folder id.
     * @param contentFolder The JSON representation of the updated Folder.
     * @param archived Specifies whether to update deleted Folders. Defaults to &#x60;false&#x60;.
     */
    public updateFolder(objectId: string, contentFolder: ContentFolder, archived?: boolean, _options?: Configuration): Promise<ContentFolder> {
        const result = this.api.updateFolder(objectId, contentFolder, archived, _options);
        return result.toPromise();
    }

    /**
     * Update the Folder objects identified in the request body.
     * Update a batch of Folders
     * @param batchInputJsonNode 
     * @param archived Whether to return only results that have been archived.
     */
    public updateFoldersWithHttpInfo(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Promise<HttpInfo<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>> {
        const result = this.api.updateFoldersWithHttpInfo(batchInputJsonNode, archived, _options);
        return result.toPromise();
    }

    /**
     * Update the Folder objects identified in the request body.
     * Update a batch of Folders
     * @param batchInputJsonNode 
     * @param archived Whether to return only results that have been archived.
     */
    public updateFolders(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Promise<BatchResponseContentFolder | BatchResponseContentFolderWithErrors> {
        const result = this.api.updateFolders(batchInputJsonNode, archived, _options);
        return result.toPromise();
    }

    /**
     * Explicitly set new languages for each landing page in a multi-language group.
     * Update languages of multi-language group
     * @param updateLanguagesRequestVNext The JSON representation of the UpdateLanguagesRequest object.
     */
    public updateLangsWithHttpInfo(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateLangsWithHttpInfo(updateLanguagesRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Explicitly set new languages for each landing page in a multi-language group.
     * Update languages of multi-language group
     * @param updateLanguagesRequestVNext The JSON representation of the UpdateLanguagesRequest object.
     */
    public updateLangs(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: Configuration): Promise<void> {
        const result = this.api.updateLangs(updateLanguagesRequestVNext, _options);
        return result.toPromise();
    }


}



import { ObservableSitePagesApi } from './ObservableAPI';

import { SitePagesApiRequestFactory, SitePagesApiResponseProcessor} from "../apis/SitePagesApi";
export class PromiseSitePagesApi {
    private api: ObservableSitePagesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SitePagesApiRequestFactory,
        responseProcessor?: SitePagesApiResponseProcessor
    ) {
        this.api = new ObservableSitePagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete the Site Page object identified by the id in the path.
     * Delete a Site Page
     * @param objectId The Site Page id.
     * @param archived Whether to return only results that have been archived.
     */
    public archiveWithHttpInfo(objectId: string, archived?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(objectId, archived, _options);
        return result.toPromise();
    }

    /**
     * Delete the Site Page object identified by the id in the path.
     * Delete a Site Page
     * @param objectId The Site Page id.
     * @param archived Whether to return only results that have been archived.
     */
    public archive(objectId: string, archived?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.archive(objectId, archived, _options);
        return result.toPromise();
    }

    /**
     * Delete the Site Page objects identified in the request body. Note: This is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to true.
     * Delete a batch of Site Pages
     * @param batchInputString The JSON array of Site Page ids.
     */
    public archiveBatchWithHttpInfo(batchInputString: BatchInputString, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveBatchWithHttpInfo(batchInputString, _options);
        return result.toPromise();
    }

    /**
     * Delete the Site Page objects identified in the request body. Note: This is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to true.
     * Delete a batch of Site Pages
     * @param batchInputString The JSON array of Site Page ids.
     */
    public archiveBatch(batchInputString: BatchInputString, _options?: Configuration): Promise<void> {
        const result = this.api.archiveBatch(batchInputString, _options);
        return result.toPromise();
    }

    /**
     * Attach a site page to a multi-language group.
     * Attach a site page to a multi-language group
     * @param attachToLangPrimaryRequestVNext The JSON representation of the AttachToLangPrimaryRequest object.
     */
    public attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Attach a site page to a multi-language group.
     * Attach a site page to a multi-language group
     * @param attachToLangPrimaryRequestVNext The JSON representation of the AttachToLangPrimaryRequest object.
     */
    public attachToLangGroup(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: Configuration): Promise<void> {
        const result = this.api.attachToLangGroup(attachToLangPrimaryRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Clone a Site Page
     * Clone a Site Page
     * @param contentCloneRequestVNext The JSON representation of the ContentCloneRequest object.
     */
    public cloneWithHttpInfo(contentCloneRequestVNext: ContentCloneRequestVNext, _options?: Configuration): Promise<HttpInfo<Page>> {
        const result = this.api.cloneWithHttpInfo(contentCloneRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Clone a Site Page
     * Clone a Site Page
     * @param contentCloneRequestVNext The JSON representation of the ContentCloneRequest object.
     */
    public clone(contentCloneRequestVNext: ContentCloneRequestVNext, _options?: Configuration): Promise<Page> {
        const result = this.api.clone(contentCloneRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Create a new Site Page
     * Create a new Site Page
     * @param page The JSON representation of a new Site Page.
     */
    public createWithHttpInfo(page: Page, _options?: Configuration): Promise<HttpInfo<void | Page>> {
        const result = this.api.createWithHttpInfo(page, _options);
        return result.toPromise();
    }

    /**
     * Create a new Site Page
     * Create a new Site Page
     * @param page The JSON representation of a new Site Page.
     */
    public create(page: Page, _options?: Configuration): Promise<void | Page> {
        const result = this.api.create(page, _options);
        return result.toPromise();
    }

    /**
     * Create a new A/B test variation based on the information provided in the request body. 
     * Create a new A/B test variation
     * @param abTestCreateRequestVNext The JSON representation of the AbTestCreateRequest object.
     */
    public createABTestVariationWithHttpInfo(abTestCreateRequestVNext: AbTestCreateRequestVNext, _options?: Configuration): Promise<HttpInfo<Page>> {
        const result = this.api.createABTestVariationWithHttpInfo(abTestCreateRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Create a new A/B test variation based on the information provided in the request body. 
     * Create a new A/B test variation
     * @param abTestCreateRequestVNext The JSON representation of the AbTestCreateRequest object.
     */
    public createABTestVariation(abTestCreateRequestVNext: AbTestCreateRequestVNext, _options?: Configuration): Promise<Page> {
        const result = this.api.createABTestVariation(abTestCreateRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Create the Site Page objects detailed in the request body.
     * Create a batch of Site Pages
     * @param batchInputPage The JSON array of new Site Pages to create.
     */
    public createBatchWithHttpInfo(batchInputPage: BatchInputPage, _options?: Configuration): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        const result = this.api.createBatchWithHttpInfo(batchInputPage, _options);
        return result.toPromise();
    }

    /**
     * Create the Site Page objects detailed in the request body.
     * Create a batch of Site Pages
     * @param batchInputPage The JSON array of new Site Pages to create.
     */
    public createBatch(batchInputPage: BatchInputPage, _options?: Configuration): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
        const result = this.api.createBatch(batchInputPage, _options);
        return result.toPromise();
    }

    /**
     * Create a new language variation from an existing site page
     * Create a new language variation
     * @param contentLanguageCloneRequestVNext The JSON representation of the ContentLanguageCloneRequest object.
     */
    public createLangVariationWithHttpInfo(contentLanguageCloneRequestVNext: ContentLanguageCloneRequestVNext, _options?: Configuration): Promise<HttpInfo<Page>> {
        const result = this.api.createLangVariationWithHttpInfo(contentLanguageCloneRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Create a new language variation from an existing site page
     * Create a new language variation
     * @param contentLanguageCloneRequestVNext The JSON representation of the ContentLanguageCloneRequest object.
     */
    public createLangVariation(contentLanguageCloneRequestVNext: ContentLanguageCloneRequestVNext, _options?: Configuration): Promise<Page> {
        const result = this.api.createLangVariation(contentLanguageCloneRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Detach a site page from a multi-language group.
     * Detach a site page from a multi-language group
     * @param detachFromLangGroupRequestVNext The JSON representation of the DetachFromLangGroupRequest object.
     */
    public detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Detach a site page from a multi-language group.
     * Detach a site page from a multi-language group
     * @param detachFromLangGroupRequestVNext The JSON representation of the DetachFromLangGroupRequest object.
     */
    public detachFromLangGroup(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: Configuration): Promise<void> {
        const result = this.api.detachFromLangGroup(detachFromLangGroupRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * End an active A/B test and designate a winner.
     * End an active A/B test
     * @param abTestEndRequestVNext The JSON representation of the AbTestEndRequest object.
     */
    public endActiveABTestWithHttpInfo(abTestEndRequestVNext: AbTestEndRequestVNext, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.endActiveABTestWithHttpInfo(abTestEndRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * End an active A/B test and designate a winner.
     * End an active A/B test
     * @param abTestEndRequestVNext The JSON representation of the AbTestEndRequest object.
     */
    public endActiveABTest(abTestEndRequestVNext: AbTestEndRequestVNext, _options?: Configuration): Promise<void> {
        const result = this.api.endActiveABTest(abTestEndRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the Site Page object identified by the id in the path.
     * Retrieve a Site Page
     * @param objectId The Site Page id.
     * @param archived Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getByIdWithHttpInfo(objectId: string, archived?: boolean, property?: string, _options?: Configuration): Promise<HttpInfo<Page>> {
        const result = this.api.getByIdWithHttpInfo(objectId, archived, property, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the Site Page object identified by the id in the path.
     * Retrieve a Site Page
     * @param objectId The Site Page id.
     * @param archived Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getById(objectId: string, archived?: boolean, property?: string, _options?: Configuration): Promise<Page> {
        const result = this.api.getById(objectId, archived, property, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the full draft version of the Site Page.
     * Retrieve the full draft version of the Site Page
     * @param objectId The Site Page id.
     */
    public getDraftByIdWithHttpInfo(objectId: string, _options?: Configuration): Promise<HttpInfo<Page>> {
        const result = this.api.getDraftByIdWithHttpInfo(objectId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the full draft version of the Site Page.
     * Retrieve the full draft version of the Site Page
     * @param objectId The Site Page id.
     */
    public getDraftById(objectId: string, _options?: Configuration): Promise<Page> {
        const result = this.api.getDraftById(objectId, _options);
        return result.toPromise();
    }

    /**
     * Get the list of site pages. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Site Pages
     * @param createdAt Only return Site Pages created at exactly the specified time.
     * @param createdAfter Only return Site Pages created after the specified time.
     * @param createdBefore Only return Site Pages created before the specified time.
     * @param updatedAt Only return Site Pages last updated at exactly the specified time.
     * @param updatedAfter Only return Site Pages last updated after the specified time.
     * @param updatedBefore Only return Site Pages last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 100.
     * @param archived Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getPageWithHttpInfo(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, property?: string, _options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalPageForwardPaging>> {
        const result = this.api.getPageWithHttpInfo(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options);
        return result.toPromise();
    }

    /**
     * Get the list of site pages. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Site Pages
     * @param createdAt Only return Site Pages created at exactly the specified time.
     * @param createdAfter Only return Site Pages created after the specified time.
     * @param createdBefore Only return Site Pages created before the specified time.
     * @param updatedAt Only return Site Pages last updated at exactly the specified time.
     * @param updatedAfter Only return Site Pages last updated after the specified time.
     * @param updatedBefore Only return Site Pages last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 100.
     * @param archived Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, property?: string, _options?: Configuration): Promise<CollectionResponseWithTotalPageForwardPaging> {
        const result = this.api.getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a previous version of a Site Page
     * Retrieves a previous version of a Site Page
     * @param objectId The Site Page id.
     * @param revisionId The Site Page version id.
     */
    public getPreviousVersionWithHttpInfo(objectId: string, revisionId: string, _options?: Configuration): Promise<HttpInfo<VersionPage>> {
        const result = this.api.getPreviousVersionWithHttpInfo(objectId, revisionId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a previous version of a Site Page
     * Retrieves a previous version of a Site Page
     * @param objectId The Site Page id.
     * @param revisionId The Site Page version id.
     */
    public getPreviousVersion(objectId: string, revisionId: string, _options?: Configuration): Promise<VersionPage> {
        const result = this.api.getPreviousVersion(objectId, revisionId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves all the previous versions of a Site Page.
     * Retrieves all the previous versions of a Site Page
     * @param objectId The Site Page id.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to return. Default is 100.
     */
    public getPreviousVersionsWithHttpInfo(objectId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalVersionPage>> {
        const result = this.api.getPreviousVersionsWithHttpInfo(objectId, after, before, limit, _options);
        return result.toPromise();
    }

    /**
     * Retrieves all the previous versions of a Site Page.
     * Retrieves all the previous versions of a Site Page
     * @param objectId The Site Page id.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to return. Default is 100.
     */
    public getPreviousVersions(objectId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Promise<CollectionResponseWithTotalVersionPage> {
        const result = this.api.getPreviousVersions(objectId, after, before, limit, _options);
        return result.toPromise();
    }

    /**
     * Take any changes from the draft version of the Site Page and apply them to the live version.
     * Push Site Page draft edits live
     * @param objectId The id of the Site Page for which it\&#39;s draft will be pushed live.
     */
    public pushLiveWithHttpInfo(objectId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.pushLiveWithHttpInfo(objectId, _options);
        return result.toPromise();
    }

    /**
     * Take any changes from the draft version of the Site Page and apply them to the live version.
     * Push Site Page draft edits live
     * @param objectId The id of the Site Page for which it\&#39;s draft will be pushed live.
     */
    public pushLive(objectId: string, _options?: Configuration): Promise<void> {
        const result = this.api.pushLive(objectId, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the Site Page objects identified in the request body.
     * Retrieve a batch of Site Pages
     * @param batchInputString The JSON array of Site Page ids.
     * @param archived Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     */
    public readBatchWithHttpInfo(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        const result = this.api.readBatchWithHttpInfo(batchInputString, archived, _options);
        return result.toPromise();
    }

    /**
     * Retrieve the Site Page objects identified in the request body.
     * Retrieve a batch of Site Pages
     * @param batchInputString The JSON array of Site Page ids.
     * @param archived Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     */
    public readBatch(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
        const result = this.api.readBatch(batchInputString, archived, _options);
        return result.toPromise();
    }

    /**
     * Rerun a previous A/B test.
     * Rerun a previous A/B test
     * @param abTestRerunRequestVNext The JSON representation of the AbTestRerunRequest object.
     */
    public rerunPreviousABTestWithHttpInfo(abTestRerunRequestVNext: AbTestRerunRequestVNext, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.rerunPreviousABTestWithHttpInfo(abTestRerunRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Rerun a previous A/B test.
     * Rerun a previous A/B test
     * @param abTestRerunRequestVNext The JSON representation of the AbTestRerunRequest object.
     */
    public rerunPreviousABTest(abTestRerunRequestVNext: AbTestRerunRequestVNext, _options?: Configuration): Promise<void> {
        const result = this.api.rerunPreviousABTest(abTestRerunRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Discards any edits and resets the draft to the live version.
     * Reset the Site Page draft to the live version
     * @param objectId The id of the Site Page for which it\&#39;s draft will be reset.
     */
    public resetDraftWithHttpInfo(objectId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.resetDraftWithHttpInfo(objectId, _options);
        return result.toPromise();
    }

    /**
     * Discards any edits and resets the draft to the live version.
     * Reset the Site Page draft to the live version
     * @param objectId The id of the Site Page for which it\&#39;s draft will be reset.
     */
    public resetDraft(objectId: string, _options?: Configuration): Promise<void> {
        const result = this.api.resetDraft(objectId, _options);
        return result.toPromise();
    }

    /**
     * Takes a specified version of a Site Page and restores it.
     * Restore a previous version of a Site Page
     * @param objectId The Site Page id.
     * @param revisionId The Site Page version id to restore.
     */
    public restorePreviousVersionWithHttpInfo(objectId: string, revisionId: string, _options?: Configuration): Promise<HttpInfo<Page>> {
        const result = this.api.restorePreviousVersionWithHttpInfo(objectId, revisionId, _options);
        return result.toPromise();
    }

    /**
     * Takes a specified version of a Site Page and restores it.
     * Restore a previous version of a Site Page
     * @param objectId The Site Page id.
     * @param revisionId The Site Page version id to restore.
     */
    public restorePreviousVersion(objectId: string, revisionId: string, _options?: Configuration): Promise<Page> {
        const result = this.api.restorePreviousVersion(objectId, revisionId, _options);
        return result.toPromise();
    }

    /**
     * Takes a specified version of a Site Page, sets it as the new draft version of the Site Page.
     * Restore a previous version of a Site Page, to the draft version of the Site Page
     * @param objectId The Site Page id.
     * @param revisionId The Site Page version id to restore.
     */
    public restorePreviousVersionToDraftWithHttpInfo(objectId: string, revisionId: number, _options?: Configuration): Promise<HttpInfo<Page>> {
        const result = this.api.restorePreviousVersionToDraftWithHttpInfo(objectId, revisionId, _options);
        return result.toPromise();
    }

    /**
     * Takes a specified version of a Site Page, sets it as the new draft version of the Site Page.
     * Restore a previous version of a Site Page, to the draft version of the Site Page
     * @param objectId The Site Page id.
     * @param revisionId The Site Page version id to restore.
     */
    public restorePreviousVersionToDraft(objectId: string, revisionId: number, _options?: Configuration): Promise<Page> {
        const result = this.api.restorePreviousVersionToDraft(objectId, revisionId, _options);
        return result.toPromise();
    }

    /**
     * Schedule a Site Page to be Published
     * Schedule a Site Page to be Published
     * @param contentScheduleRequestVNext The JSON representation of the ContentScheduleRequestVNext object.
     */
    public scheduleWithHttpInfo(contentScheduleRequestVNext: ContentScheduleRequestVNext, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.scheduleWithHttpInfo(contentScheduleRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Schedule a Site Page to be Published
     * Schedule a Site Page to be Published
     * @param contentScheduleRequestVNext The JSON representation of the ContentScheduleRequestVNext object.
     */
    public schedule(contentScheduleRequestVNext: ContentScheduleRequestVNext, _options?: Configuration): Promise<void> {
        const result = this.api.schedule(contentScheduleRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Set a site page as the primary language of a multi-language group.
     * Set a new primary language
     * @param setNewLanguagePrimaryRequestVNext The JSON representation of the SetNewLanguagePrimaryRequest object.
     */
    public setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Set a site page as the primary language of a multi-language group.
     * Set a new primary language
     * @param setNewLanguagePrimaryRequestVNext The JSON representation of the SetNewLanguagePrimaryRequest object.
     */
    public setLangPrimary(setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext, _options?: Configuration): Promise<void> {
        const result = this.api.setLangPrimary(setNewLanguagePrimaryRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Sparse updates a single Site Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Site Page
     * @param objectId The Site Page id.
     * @param page The JSON representation of the updated Site Page.
     * @param archived Specifies whether to update deleted Site Pages. Defaults to &#x60;false&#x60;.
     */
    public updateWithHttpInfo(objectId: string, page: Page, archived?: boolean, _options?: Configuration): Promise<HttpInfo<Page>> {
        const result = this.api.updateWithHttpInfo(objectId, page, archived, _options);
        return result.toPromise();
    }

    /**
     * Sparse updates a single Site Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Site Page
     * @param objectId The Site Page id.
     * @param page The JSON representation of the updated Site Page.
     * @param archived Specifies whether to update deleted Site Pages. Defaults to &#x60;false&#x60;.
     */
    public update(objectId: string, page: Page, archived?: boolean, _options?: Configuration): Promise<Page> {
        const result = this.api.update(objectId, page, archived, _options);
        return result.toPromise();
    }

    /**
     * Update the Site Page objects identified in the request body.
     * Update a batch of Site Pages
     * @param batchInputJsonNode The JSON representation of the updated Site Pages.
     * @param archived Specifies whether to update deleted Site Pages. Defaults to &#x60;false&#x60;.
     */
    public updateBatchWithHttpInfo(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        const result = this.api.updateBatchWithHttpInfo(batchInputJsonNode, archived, _options);
        return result.toPromise();
    }

    /**
     * Update the Site Page objects identified in the request body.
     * Update a batch of Site Pages
     * @param batchInputJsonNode The JSON representation of the updated Site Pages.
     * @param archived Specifies whether to update deleted Site Pages. Defaults to &#x60;false&#x60;.
     */
    public updateBatch(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
        const result = this.api.updateBatch(batchInputJsonNode, archived, _options);
        return result.toPromise();
    }

    /**
     * Sparse updates the draft version of a single Site Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Site Page draft
     * @param objectId The Site Page id.
     * @param page The JSON representation of the updated Site Page to be applied to the draft.
     */
    public updateDraftWithHttpInfo(objectId: string, page: Page, _options?: Configuration): Promise<HttpInfo<Page>> {
        const result = this.api.updateDraftWithHttpInfo(objectId, page, _options);
        return result.toPromise();
    }

    /**
     * Sparse updates the draft version of a single Site Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Site Page draft
     * @param objectId The Site Page id.
     * @param page The JSON representation of the updated Site Page to be applied to the draft.
     */
    public updateDraft(objectId: string, page: Page, _options?: Configuration): Promise<Page> {
        const result = this.api.updateDraft(objectId, page, _options);
        return result.toPromise();
    }

    /**
     * Explicitly set new languages for each site page in a multi-language group.
     * Update languages of multi-language group
     * @param updateLanguagesRequestVNext The JSON representation of the UpdateLanguagesRequest object.
     */
    public updateLangsWithHttpInfo(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateLangsWithHttpInfo(updateLanguagesRequestVNext, _options);
        return result.toPromise();
    }

    /**
     * Explicitly set new languages for each site page in a multi-language group.
     * Update languages of multi-language group
     * @param updateLanguagesRequestVNext The JSON representation of the UpdateLanguagesRequest object.
     */
    public updateLangs(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: Configuration): Promise<void> {
        const result = this.api.updateLangs(updateLanguagesRequestVNext, _options);
        return result.toPromise();
    }


}



