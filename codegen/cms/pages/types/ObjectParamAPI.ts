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

import { ObservableLandingPagesApi } from "./ObservableAPI";
import { LandingPagesApiRequestFactory, LandingPagesApiResponseProcessor} from "../apis/LandingPagesApi";

export interface LandingPagesApiArchiveRequest {
    /**
     * The Landing Page id.
     * @type string
     * @memberof LandingPagesApiarchive
     */
    objectId: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof LandingPagesApiarchive
     */
    archived?: boolean
}

export interface LandingPagesApiArchiveBatchRequest {
    /**
     * The JSON array of Landing Page ids.
     * @type BatchInputString
     * @memberof LandingPagesApiarchiveBatch
     */
    batchInputString: BatchInputString
}

export interface LandingPagesApiArchiveFolderRequest {
    /**
     * The Folder id.
     * @type string
     * @memberof LandingPagesApiarchiveFolder
     */
    objectId: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof LandingPagesApiarchiveFolder
     */
    archived?: boolean
}

export interface LandingPagesApiArchiveFoldersRequest {
    /**
     * The JSON array of Folder ids.
     * @type BatchInputString
     * @memberof LandingPagesApiarchiveFolders
     */
    batchInputString: BatchInputString
}

export interface LandingPagesApiAttachToLangGroupRequest {
    /**
     * The JSON representation of the AttachToLangPrimaryRequest object.
     * @type AttachToLangPrimaryRequestVNext
     * @memberof LandingPagesApiattachToLangGroup
     */
    attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext
}

export interface LandingPagesApiCloneRequest {
    /**
     * The JSON representation of the ContentCloneRequest object.
     * @type ContentCloneRequestVNext
     * @memberof LandingPagesApiclone
     */
    contentCloneRequestVNext: ContentCloneRequestVNext
}

export interface LandingPagesApiCreateRequest {
    /**
     * The JSON representation of a new Landing Page.
     * @type Page
     * @memberof LandingPagesApicreate
     */
    page: Page
}

export interface LandingPagesApiCreateABTestVariationRequest {
    /**
     * The JSON representation of the AbTestCreateRequest object.
     * @type AbTestCreateRequestVNext
     * @memberof LandingPagesApicreateABTestVariation
     */
    abTestCreateRequestVNext: AbTestCreateRequestVNext
}

export interface LandingPagesApiCreateBatchRequest {
    /**
     * The JSON array of new Landing Pages to create.
     * @type BatchInputPage
     * @memberof LandingPagesApicreateBatch
     */
    batchInputPage: BatchInputPage
}

export interface LandingPagesApiCreateFolderRequest {
    /**
     * The JSON representation of a new Folder.
     * @type ContentFolder
     * @memberof LandingPagesApicreateFolder
     */
    contentFolder: ContentFolder
}

export interface LandingPagesApiCreateFoldersRequest {
    /**
     * The JSON array of new Folders to create.
     * @type BatchInputContentFolder
     * @memberof LandingPagesApicreateFolders
     */
    batchInputContentFolder: BatchInputContentFolder
}

export interface LandingPagesApiCreateLangVariationRequest {
    /**
     * The JSON representation of the ContentLanguageCloneRequest object.
     * @type ContentLanguageCloneRequestVNext
     * @memberof LandingPagesApicreateLangVariation
     */
    contentLanguageCloneRequestVNext: ContentLanguageCloneRequestVNext
}

export interface LandingPagesApiDetachFromLangGroupRequest {
    /**
     * The JSON representation of the DetachFromLangGroupRequest object.
     * @type DetachFromLangGroupRequestVNext
     * @memberof LandingPagesApidetachFromLangGroup
     */
    detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext
}

export interface LandingPagesApiEndActiveABTestRequest {
    /**
     * The JSON representation of the AbTestEndRequest object.
     * @type AbTestEndRequestVNext
     * @memberof LandingPagesApiendActiveABTest
     */
    abTestEndRequestVNext: AbTestEndRequestVNext
}

export interface LandingPagesApiGetByIdRequest {
    /**
     * The Landing Page id.
     * @type string
     * @memberof LandingPagesApigetById
     */
    objectId: string
    /**
     * Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof LandingPagesApigetById
     */
    archived?: boolean
    /**
     * 
     * @type string
     * @memberof LandingPagesApigetById
     */
    property?: string
}

export interface LandingPagesApiGetDraftByIdRequest {
    /**
     * The Landing Page id.
     * @type string
     * @memberof LandingPagesApigetDraftById
     */
    objectId: string
}

export interface LandingPagesApiGetFolderByIdRequest {
    /**
     * The Folder id.
     * @type string
     * @memberof LandingPagesApigetFolderById
     */
    objectId: string
    /**
     * Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof LandingPagesApigetFolderById
     */
    archived?: boolean
    /**
     * 
     * @type string
     * @memberof LandingPagesApigetFolderById
     */
    property?: string
}

export interface LandingPagesApiGetFolderPreviousVersionRequest {
    /**
     * The Folder id.
     * @type string
     * @memberof LandingPagesApigetFolderPreviousVersion
     */
    objectId: string
    /**
     * The Folder version id.
     * @type string
     * @memberof LandingPagesApigetFolderPreviousVersion
     */
    revisionId: string
}

export interface LandingPagesApiGetFolderPreviousVersionsRequest {
    /**
     * The Folder id.
     * @type string
     * @memberof LandingPagesApigetFolderPreviousVersions
     */
    objectId: string
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof LandingPagesApigetFolderPreviousVersions
     */
    after?: string
    /**
     * 
     * @type string
     * @memberof LandingPagesApigetFolderPreviousVersions
     */
    before?: string
    /**
     * The maximum number of results to return. Default is 100.
     * @type number
     * @memberof LandingPagesApigetFolderPreviousVersions
     */
    limit?: number
}

export interface LandingPagesApiGetFoldersPageRequest {
    /**
     * Only return Folders created at exactly the specified time.
     * @type Date
     * @memberof LandingPagesApigetFoldersPage
     */
    createdAt?: Date
    /**
     * Only return Folders created after the specified time.
     * @type Date
     * @memberof LandingPagesApigetFoldersPage
     */
    createdAfter?: Date
    /**
     * Only return Folders created before the specified time.
     * @type Date
     * @memberof LandingPagesApigetFoldersPage
     */
    createdBefore?: Date
    /**
     * Only return Folders last updated at exactly the specified time.
     * @type Date
     * @memberof LandingPagesApigetFoldersPage
     */
    updatedAt?: Date
    /**
     * Only return Folders last updated after the specified time.
     * @type Date
     * @memberof LandingPagesApigetFoldersPage
     */
    updatedAfter?: Date
    /**
     * Only return Folders last updated before the specified time.
     * @type Date
     * @memberof LandingPagesApigetFoldersPage
     */
    updatedBefore?: Date
    /**
     * Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @type Array&lt;string&gt;
     * @memberof LandingPagesApigetFoldersPage
     */
    sort?: Array<string>
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof LandingPagesApigetFoldersPage
     */
    after?: string
    /**
     * The maximum number of results to return. Default is 100.
     * @type number
     * @memberof LandingPagesApigetFoldersPage
     */
    limit?: number
    /**
     * Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof LandingPagesApigetFoldersPage
     */
    archived?: boolean
    /**
     * 
     * @type string
     * @memberof LandingPagesApigetFoldersPage
     */
    property?: string
}

export interface LandingPagesApiGetPageRequest {
    /**
     * Only return Landing Pages created at exactly the specified time.
     * @type Date
     * @memberof LandingPagesApigetPage
     */
    createdAt?: Date
    /**
     * Only return Landing Pages created after the specified time.
     * @type Date
     * @memberof LandingPagesApigetPage
     */
    createdAfter?: Date
    /**
     * Only return Landing Pages created before the specified time.
     * @type Date
     * @memberof LandingPagesApigetPage
     */
    createdBefore?: Date
    /**
     * Only return Landing Pages last updated at exactly the specified time.
     * @type Date
     * @memberof LandingPagesApigetPage
     */
    updatedAt?: Date
    /**
     * Only return Landing Pages last updated after the specified time.
     * @type Date
     * @memberof LandingPagesApigetPage
     */
    updatedAfter?: Date
    /**
     * Only return Landing Pages last updated before the specified time.
     * @type Date
     * @memberof LandingPagesApigetPage
     */
    updatedBefore?: Date
    /**
     * Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @type Array&lt;string&gt;
     * @memberof LandingPagesApigetPage
     */
    sort?: Array<string>
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof LandingPagesApigetPage
     */
    after?: string
    /**
     * The maximum number of results to return. Default is 100.
     * @type number
     * @memberof LandingPagesApigetPage
     */
    limit?: number
    /**
     * Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof LandingPagesApigetPage
     */
    archived?: boolean
    /**
     * 
     * @type string
     * @memberof LandingPagesApigetPage
     */
    property?: string
}

export interface LandingPagesApiGetPreviousVersionRequest {
    /**
     * The Landing Page id.
     * @type string
     * @memberof LandingPagesApigetPreviousVersion
     */
    objectId: string
    /**
     * The Landing Page version id.
     * @type string
     * @memberof LandingPagesApigetPreviousVersion
     */
    revisionId: string
}

export interface LandingPagesApiGetPreviousVersionsRequest {
    /**
     * The Landing Page id.
     * @type string
     * @memberof LandingPagesApigetPreviousVersions
     */
    objectId: string
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof LandingPagesApigetPreviousVersions
     */
    after?: string
    /**
     * 
     * @type string
     * @memberof LandingPagesApigetPreviousVersions
     */
    before?: string
    /**
     * The maximum number of results to return. Default is 100.
     * @type number
     * @memberof LandingPagesApigetPreviousVersions
     */
    limit?: number
}

export interface LandingPagesApiPushLiveRequest {
    /**
     * The id of the Landing Page for which it\&#39;s draft will be pushed live.
     * @type string
     * @memberof LandingPagesApipushLive
     */
    objectId: string
}

export interface LandingPagesApiReadBatchRequest {
    /**
     * The JSON array of Landing Page ids.
     * @type BatchInputString
     * @memberof LandingPagesApireadBatch
     */
    batchInputString: BatchInputString
    /**
     * Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof LandingPagesApireadBatch
     */
    archived?: boolean
}

export interface LandingPagesApiReadFoldersRequest {
    /**
     * The JSON array of Folder ids.
     * @type BatchInputString
     * @memberof LandingPagesApireadFolders
     */
    batchInputString: BatchInputString
    /**
     * Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof LandingPagesApireadFolders
     */
    archived?: boolean
}

export interface LandingPagesApiRerunPreviousABTestRequest {
    /**
     * The JSON representation of the AbTestRerunRequest object.
     * @type AbTestRerunRequestVNext
     * @memberof LandingPagesApirerunPreviousABTest
     */
    abTestRerunRequestVNext: AbTestRerunRequestVNext
}

export interface LandingPagesApiResetDraftRequest {
    /**
     * The id of the Landing Page for which it\&#39;s draft will be reset.
     * @type string
     * @memberof LandingPagesApiresetDraft
     */
    objectId: string
}

export interface LandingPagesApiRestoreFolderPreviousVersionRequest {
    /**
     * The Folder id.
     * @type string
     * @memberof LandingPagesApirestoreFolderPreviousVersion
     */
    objectId: string
    /**
     * The Folder version id to restore.
     * @type string
     * @memberof LandingPagesApirestoreFolderPreviousVersion
     */
    revisionId: string
}

export interface LandingPagesApiRestorePreviousVersionRequest {
    /**
     * The Landing Page id.
     * @type string
     * @memberof LandingPagesApirestorePreviousVersion
     */
    objectId: string
    /**
     * The Landing Page version id to restore.
     * @type string
     * @memberof LandingPagesApirestorePreviousVersion
     */
    revisionId: string
}

export interface LandingPagesApiRestorePreviousVersionToDraftRequest {
    /**
     * The Landing Page id.
     * @type string
     * @memberof LandingPagesApirestorePreviousVersionToDraft
     */
    objectId: string
    /**
     * The Landing Page version id to restore.
     * @type number
     * @memberof LandingPagesApirestorePreviousVersionToDraft
     */
    revisionId: number
}

export interface LandingPagesApiScheduleRequest {
    /**
     * The JSON representation of the ContentScheduleRequestVNext object.
     * @type ContentScheduleRequestVNext
     * @memberof LandingPagesApischedule
     */
    contentScheduleRequestVNext: ContentScheduleRequestVNext
}

export interface LandingPagesApiSetLangPrimaryRequest {
    /**
     * The JSON representation of the SetNewLanguagePrimaryRequest object.
     * @type SetNewLanguagePrimaryRequestVNext
     * @memberof LandingPagesApisetLangPrimary
     */
    setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext
}

export interface LandingPagesApiUpdateRequest {
    /**
     * The Landing Page id.
     * @type string
     * @memberof LandingPagesApiupdate
     */
    objectId: string
    /**
     * The JSON representation of the updated Landing Page.
     * @type Page
     * @memberof LandingPagesApiupdate
     */
    page: Page
    /**
     * Specifies whether to update deleted Landing Pages. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof LandingPagesApiupdate
     */
    archived?: boolean
}

export interface LandingPagesApiUpdateBatchRequest {
    /**
     * The JSON representation of the updated Landing Pages.
     * @type BatchInputJsonNode
     * @memberof LandingPagesApiupdateBatch
     */
    batchInputJsonNode: BatchInputJsonNode
    /**
     * Specifies whether to update deleted Landing Pages. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof LandingPagesApiupdateBatch
     */
    archived?: boolean
}

export interface LandingPagesApiUpdateDraftRequest {
    /**
     * The Landing Page id.
     * @type string
     * @memberof LandingPagesApiupdateDraft
     */
    objectId: string
    /**
     * The JSON representation of the updated Landing Page to be applied to the draft.
     * @type Page
     * @memberof LandingPagesApiupdateDraft
     */
    page: Page
}

export interface LandingPagesApiUpdateFolderRequest {
    /**
     * The Folder id.
     * @type string
     * @memberof LandingPagesApiupdateFolder
     */
    objectId: string
    /**
     * The JSON representation of the updated Folder.
     * @type ContentFolder
     * @memberof LandingPagesApiupdateFolder
     */
    contentFolder: ContentFolder
    /**
     * Specifies whether to update deleted Folders. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof LandingPagesApiupdateFolder
     */
    archived?: boolean
}

export interface LandingPagesApiUpdateFoldersRequest {
    /**
     * 
     * @type BatchInputJsonNode
     * @memberof LandingPagesApiupdateFolders
     */
    batchInputJsonNode: BatchInputJsonNode
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof LandingPagesApiupdateFolders
     */
    archived?: boolean
}

export interface LandingPagesApiUpdateLangsRequest {
    /**
     * The JSON representation of the UpdateLanguagesRequest object.
     * @type UpdateLanguagesRequestVNext
     * @memberof LandingPagesApiupdateLangs
     */
    updateLanguagesRequestVNext: UpdateLanguagesRequestVNext
}

export class ObjectLandingPagesApi {
    private api: ObservableLandingPagesApi

    public constructor(configuration: Configuration, requestFactory?: LandingPagesApiRequestFactory, responseProcessor?: LandingPagesApiResponseProcessor) {
        this.api = new ObservableLandingPagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete the Landing Page object identified by the id in the path.
     * Delete a Landing Page
     * @param param the request object
     */
    public archiveWithHttpInfo(param: LandingPagesApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete the Landing Page object identified by the id in the path.
     * Delete a Landing Page
     * @param param the request object
     */
    public archive(param: LandingPagesApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete the Landing Page objects identified in the request body. Note: This is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to true.
     * Delete a batch of Landing Pages
     * @param param the request object
     */
    public archiveBatchWithHttpInfo(param: LandingPagesApiArchiveBatchRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveBatchWithHttpInfo(param.batchInputString,  options).toPromise();
    }

    /**
     * Delete the Landing Page objects identified in the request body. Note: This is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to true.
     * Delete a batch of Landing Pages
     * @param param the request object
     */
    public archiveBatch(param: LandingPagesApiArchiveBatchRequest, options?: Configuration): Promise<void> {
        return this.api.archiveBatch(param.batchInputString,  options).toPromise();
    }

    /**
     * Delete the Folder object identified by the id in the path.
     * Delete a Folder
     * @param param the request object
     */
    public archiveFolderWithHttpInfo(param: LandingPagesApiArchiveFolderRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveFolderWithHttpInfo(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete the Folder object identified by the id in the path.
     * Delete a Folder
     * @param param the request object
     */
    public archiveFolder(param: LandingPagesApiArchiveFolderRequest, options?: Configuration): Promise<void> {
        return this.api.archiveFolder(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete the Folder objects identified in the request body.
     * Delete a batch of Folders
     * @param param the request object
     */
    public archiveFoldersWithHttpInfo(param: LandingPagesApiArchiveFoldersRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveFoldersWithHttpInfo(param.batchInputString,  options).toPromise();
    }

    /**
     * Delete the Folder objects identified in the request body.
     * Delete a batch of Folders
     * @param param the request object
     */
    public archiveFolders(param: LandingPagesApiArchiveFoldersRequest, options?: Configuration): Promise<void> {
        return this.api.archiveFolders(param.batchInputString,  options).toPromise();
    }

    /**
     * Attach a landing page to a multi-language group.
     * Attach a landing page to a multi-language group
     * @param param the request object
     */
    public attachToLangGroupWithHttpInfo(param: LandingPagesApiAttachToLangGroupRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.attachToLangGroupWithHttpInfo(param.attachToLangPrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Attach a landing page to a multi-language group.
     * Attach a landing page to a multi-language group
     * @param param the request object
     */
    public attachToLangGroup(param: LandingPagesApiAttachToLangGroupRequest, options?: Configuration): Promise<void> {
        return this.api.attachToLangGroup(param.attachToLangPrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Clone a Landing Page
     * Clone a Landing Page
     * @param param the request object
     */
    public cloneWithHttpInfo(param: LandingPagesApiCloneRequest, options?: Configuration): Promise<HttpInfo<Page>> {
        return this.api.cloneWithHttpInfo(param.contentCloneRequestVNext,  options).toPromise();
    }

    /**
     * Clone a Landing Page
     * Clone a Landing Page
     * @param param the request object
     */
    public clone(param: LandingPagesApiCloneRequest, options?: Configuration): Promise<Page> {
        return this.api.clone(param.contentCloneRequestVNext,  options).toPromise();
    }

    /**
     * Create a new Landing Page
     * Create a new Landing Page
     * @param param the request object
     */
    public createWithHttpInfo(param: LandingPagesApiCreateRequest, options?: Configuration): Promise<HttpInfo<void | Page>> {
        return this.api.createWithHttpInfo(param.page,  options).toPromise();
    }

    /**
     * Create a new Landing Page
     * Create a new Landing Page
     * @param param the request object
     */
    public create(param: LandingPagesApiCreateRequest, options?: Configuration): Promise<void | Page> {
        return this.api.create(param.page,  options).toPromise();
    }

    /**
     * Create a new A/B test variation based on the information provided in the request body. 
     * Create a new A/B test variation
     * @param param the request object
     */
    public createABTestVariationWithHttpInfo(param: LandingPagesApiCreateABTestVariationRequest, options?: Configuration): Promise<HttpInfo<Page>> {
        return this.api.createABTestVariationWithHttpInfo(param.abTestCreateRequestVNext,  options).toPromise();
    }

    /**
     * Create a new A/B test variation based on the information provided in the request body. 
     * Create a new A/B test variation
     * @param param the request object
     */
    public createABTestVariation(param: LandingPagesApiCreateABTestVariationRequest, options?: Configuration): Promise<Page> {
        return this.api.createABTestVariation(param.abTestCreateRequestVNext,  options).toPromise();
    }

    /**
     * Create the Landing Page objects detailed in the request body.
     * Create a batch of Landing Pages
     * @param param the request object
     */
    public createBatchWithHttpInfo(param: LandingPagesApiCreateBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        return this.api.createBatchWithHttpInfo(param.batchInputPage,  options).toPromise();
    }

    /**
     * Create the Landing Page objects detailed in the request body.
     * Create a batch of Landing Pages
     * @param param the request object
     */
    public createBatch(param: LandingPagesApiCreateBatchRequest, options?: Configuration): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
        return this.api.createBatch(param.batchInputPage,  options).toPromise();
    }

    /**
     * Create a new Folder
     * Create a new Folder
     * @param param the request object
     */
    public createFolderWithHttpInfo(param: LandingPagesApiCreateFolderRequest, options?: Configuration): Promise<HttpInfo<ContentFolder>> {
        return this.api.createFolderWithHttpInfo(param.contentFolder,  options).toPromise();
    }

    /**
     * Create a new Folder
     * Create a new Folder
     * @param param the request object
     */
    public createFolder(param: LandingPagesApiCreateFolderRequest, options?: Configuration): Promise<ContentFolder> {
        return this.api.createFolder(param.contentFolder,  options).toPromise();
    }

    /**
     * Create the Folder objects detailed in the request body.
     * Create a batch of Folders
     * @param param the request object
     */
    public createFoldersWithHttpInfo(param: LandingPagesApiCreateFoldersRequest, options?: Configuration): Promise<HttpInfo<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>> {
        return this.api.createFoldersWithHttpInfo(param.batchInputContentFolder,  options).toPromise();
    }

    /**
     * Create the Folder objects detailed in the request body.
     * Create a batch of Folders
     * @param param the request object
     */
    public createFolders(param: LandingPagesApiCreateFoldersRequest, options?: Configuration): Promise<BatchResponseContentFolder | BatchResponseContentFolderWithErrors> {
        return this.api.createFolders(param.batchInputContentFolder,  options).toPromise();
    }

    /**
     * Create a new language variation from an existing landing page
     * Create a new language variation
     * @param param the request object
     */
    public createLangVariationWithHttpInfo(param: LandingPagesApiCreateLangVariationRequest, options?: Configuration): Promise<HttpInfo<Page>> {
        return this.api.createLangVariationWithHttpInfo(param.contentLanguageCloneRequestVNext,  options).toPromise();
    }

    /**
     * Create a new language variation from an existing landing page
     * Create a new language variation
     * @param param the request object
     */
    public createLangVariation(param: LandingPagesApiCreateLangVariationRequest, options?: Configuration): Promise<Page> {
        return this.api.createLangVariation(param.contentLanguageCloneRequestVNext,  options).toPromise();
    }

    /**
     * Detach a landing page from a multi-language group.
     * Detach a landing page from a multi-language group
     * @param param the request object
     */
    public detachFromLangGroupWithHttpInfo(param: LandingPagesApiDetachFromLangGroupRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.detachFromLangGroupWithHttpInfo(param.detachFromLangGroupRequestVNext,  options).toPromise();
    }

    /**
     * Detach a landing page from a multi-language group.
     * Detach a landing page from a multi-language group
     * @param param the request object
     */
    public detachFromLangGroup(param: LandingPagesApiDetachFromLangGroupRequest, options?: Configuration): Promise<void> {
        return this.api.detachFromLangGroup(param.detachFromLangGroupRequestVNext,  options).toPromise();
    }

    /**
     * End an active A/B test and designate a winner.
     * End an active A/B test
     * @param param the request object
     */
    public endActiveABTestWithHttpInfo(param: LandingPagesApiEndActiveABTestRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.endActiveABTestWithHttpInfo(param.abTestEndRequestVNext,  options).toPromise();
    }

    /**
     * End an active A/B test and designate a winner.
     * End an active A/B test
     * @param param the request object
     */
    public endActiveABTest(param: LandingPagesApiEndActiveABTestRequest, options?: Configuration): Promise<void> {
        return this.api.endActiveABTest(param.abTestEndRequestVNext,  options).toPromise();
    }

    /**
     * Retrieve the Landing Page object identified by the id in the path.
     * Retrieve a Landing Page
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: LandingPagesApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<Page>> {
        return this.api.getByIdWithHttpInfo(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve the Landing Page object identified by the id in the path.
     * Retrieve a Landing Page
     * @param param the request object
     */
    public getById(param: LandingPagesApiGetByIdRequest, options?: Configuration): Promise<Page> {
        return this.api.getById(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve the full draft version of the Landing Page.
     * Retrieve the full draft version of the Landing Page
     * @param param the request object
     */
    public getDraftByIdWithHttpInfo(param: LandingPagesApiGetDraftByIdRequest, options?: Configuration): Promise<HttpInfo<Page>> {
        return this.api.getDraftByIdWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Retrieve the full draft version of the Landing Page.
     * Retrieve the full draft version of the Landing Page
     * @param param the request object
     */
    public getDraftById(param: LandingPagesApiGetDraftByIdRequest, options?: Configuration): Promise<Page> {
        return this.api.getDraftById(param.objectId,  options).toPromise();
    }

    /**
     * Retrieve the Folder object identified by the id in the path.
     * Retrieve a Folder
     * @param param the request object
     */
    public getFolderByIdWithHttpInfo(param: LandingPagesApiGetFolderByIdRequest, options?: Configuration): Promise<HttpInfo<ContentFolder>> {
        return this.api.getFolderByIdWithHttpInfo(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve the Folder object identified by the id in the path.
     * Retrieve a Folder
     * @param param the request object
     */
    public getFolderById(param: LandingPagesApiGetFolderByIdRequest, options?: Configuration): Promise<ContentFolder> {
        return this.api.getFolderById(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieves a previous version of a Folder
     * Retrieves a previous version of a Folder
     * @param param the request object
     */
    public getFolderPreviousVersionWithHttpInfo(param: LandingPagesApiGetFolderPreviousVersionRequest, options?: Configuration): Promise<HttpInfo<VersionContentFolder>> {
        return this.api.getFolderPreviousVersionWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Retrieves a previous version of a Folder
     * Retrieves a previous version of a Folder
     * @param param the request object
     */
    public getFolderPreviousVersion(param: LandingPagesApiGetFolderPreviousVersionRequest, options?: Configuration): Promise<VersionContentFolder> {
        return this.api.getFolderPreviousVersion(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Retrieves all the previous versions of a Folder.
     * Retrieves all the previous versions of a Folder
     * @param param the request object
     */
    public getFolderPreviousVersionsWithHttpInfo(param: LandingPagesApiGetFolderPreviousVersionsRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalVersionContentFolder>> {
        return this.api.getFolderPreviousVersionsWithHttpInfo(param.objectId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Retrieves all the previous versions of a Folder.
     * Retrieves all the previous versions of a Folder
     * @param param the request object
     */
    public getFolderPreviousVersions(param: LandingPagesApiGetFolderPreviousVersionsRequest, options?: Configuration): Promise<CollectionResponseWithTotalVersionContentFolder> {
        return this.api.getFolderPreviousVersions(param.objectId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Get the list of Landing Page Folders. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Landing Page Folders
     * @param param the request object
     */
    public getFoldersPageWithHttpInfo(param: LandingPagesApiGetFoldersPageRequest = {}, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalContentFolderForwardPaging>> {
        return this.api.getFoldersPageWithHttpInfo(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.archived, param.property,  options).toPromise();
    }

    /**
     * Get the list of Landing Page Folders. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Landing Page Folders
     * @param param the request object
     */
    public getFoldersPage(param: LandingPagesApiGetFoldersPageRequest = {}, options?: Configuration): Promise<CollectionResponseWithTotalContentFolderForwardPaging> {
        return this.api.getFoldersPage(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.archived, param.property,  options).toPromise();
    }

    /**
     * Get the list of landing pages. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Landing Pages
     * @param param the request object
     */
    public getPageWithHttpInfo(param: LandingPagesApiGetPageRequest = {}, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalPageForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.archived, param.property,  options).toPromise();
    }

    /**
     * Get the list of landing pages. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Landing Pages
     * @param param the request object
     */
    public getPage(param: LandingPagesApiGetPageRequest = {}, options?: Configuration): Promise<CollectionResponseWithTotalPageForwardPaging> {
        return this.api.getPage(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieves a previous version of a Landing Page
     * Retrieves a previous version of a Landing Page
     * @param param the request object
     */
    public getPreviousVersionWithHttpInfo(param: LandingPagesApiGetPreviousVersionRequest, options?: Configuration): Promise<HttpInfo<VersionPage>> {
        return this.api.getPreviousVersionWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Retrieves a previous version of a Landing Page
     * Retrieves a previous version of a Landing Page
     * @param param the request object
     */
    public getPreviousVersion(param: LandingPagesApiGetPreviousVersionRequest, options?: Configuration): Promise<VersionPage> {
        return this.api.getPreviousVersion(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Retrieves all the previous versions of a Landing Page.
     * Retrieves all the previous versions of a Landing Page
     * @param param the request object
     */
    public getPreviousVersionsWithHttpInfo(param: LandingPagesApiGetPreviousVersionsRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalVersionPage>> {
        return this.api.getPreviousVersionsWithHttpInfo(param.objectId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Retrieves all the previous versions of a Landing Page.
     * Retrieves all the previous versions of a Landing Page
     * @param param the request object
     */
    public getPreviousVersions(param: LandingPagesApiGetPreviousVersionsRequest, options?: Configuration): Promise<CollectionResponseWithTotalVersionPage> {
        return this.api.getPreviousVersions(param.objectId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Take any changes from the draft version of the Landing Page and apply them to the live version.
     * Push Landing Page draft edits live
     * @param param the request object
     */
    public pushLiveWithHttpInfo(param: LandingPagesApiPushLiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.pushLiveWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Take any changes from the draft version of the Landing Page and apply them to the live version.
     * Push Landing Page draft edits live
     * @param param the request object
     */
    public pushLive(param: LandingPagesApiPushLiveRequest, options?: Configuration): Promise<void> {
        return this.api.pushLive(param.objectId,  options).toPromise();
    }

    /**
     * Retrieve the Landing Page objects identified in the request body.
     * Retrieve a batch of Landing Pages
     * @param param the request object
     */
    public readBatchWithHttpInfo(param: LandingPagesApiReadBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        return this.api.readBatchWithHttpInfo(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Retrieve the Landing Page objects identified in the request body.
     * Retrieve a batch of Landing Pages
     * @param param the request object
     */
    public readBatch(param: LandingPagesApiReadBatchRequest, options?: Configuration): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
        return this.api.readBatch(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Update the Folder objects identified in the request body.
     * Retrieve a batch of Folders
     * @param param the request object
     */
    public readFoldersWithHttpInfo(param: LandingPagesApiReadFoldersRequest, options?: Configuration): Promise<HttpInfo<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>> {
        return this.api.readFoldersWithHttpInfo(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Update the Folder objects identified in the request body.
     * Retrieve a batch of Folders
     * @param param the request object
     */
    public readFolders(param: LandingPagesApiReadFoldersRequest, options?: Configuration): Promise<BatchResponseContentFolder | BatchResponseContentFolderWithErrors> {
        return this.api.readFolders(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Rerun a previous A/B test.
     * Rerun a previous A/B test
     * @param param the request object
     */
    public rerunPreviousABTestWithHttpInfo(param: LandingPagesApiRerunPreviousABTestRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.rerunPreviousABTestWithHttpInfo(param.abTestRerunRequestVNext,  options).toPromise();
    }

    /**
     * Rerun a previous A/B test.
     * Rerun a previous A/B test
     * @param param the request object
     */
    public rerunPreviousABTest(param: LandingPagesApiRerunPreviousABTestRequest, options?: Configuration): Promise<void> {
        return this.api.rerunPreviousABTest(param.abTestRerunRequestVNext,  options).toPromise();
    }

    /**
     * Discards any edits and resets the draft to the live version.
     * Reset the Landing Page draft to the live version
     * @param param the request object
     */
    public resetDraftWithHttpInfo(param: LandingPagesApiResetDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.resetDraftWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Discards any edits and resets the draft to the live version.
     * Reset the Landing Page draft to the live version
     * @param param the request object
     */
    public resetDraft(param: LandingPagesApiResetDraftRequest, options?: Configuration): Promise<void> {
        return this.api.resetDraft(param.objectId,  options).toPromise();
    }

    /**
     * Takes a specified version of a Folder and restores it.
     * Restore a previous version of a Folder
     * @param param the request object
     */
    public restoreFolderPreviousVersionWithHttpInfo(param: LandingPagesApiRestoreFolderPreviousVersionRequest, options?: Configuration): Promise<HttpInfo<ContentFolder>> {
        return this.api.restoreFolderPreviousVersionWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Takes a specified version of a Folder and restores it.
     * Restore a previous version of a Folder
     * @param param the request object
     */
    public restoreFolderPreviousVersion(param: LandingPagesApiRestoreFolderPreviousVersionRequest, options?: Configuration): Promise<ContentFolder> {
        return this.api.restoreFolderPreviousVersion(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Takes a specified version of a Landing Page and restores it.
     * Restore a previous version of a Landing Page
     * @param param the request object
     */
    public restorePreviousVersionWithHttpInfo(param: LandingPagesApiRestorePreviousVersionRequest, options?: Configuration): Promise<HttpInfo<Page>> {
        return this.api.restorePreviousVersionWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Takes a specified version of a Landing Page and restores it.
     * Restore a previous version of a Landing Page
     * @param param the request object
     */
    public restorePreviousVersion(param: LandingPagesApiRestorePreviousVersionRequest, options?: Configuration): Promise<Page> {
        return this.api.restorePreviousVersion(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Takes a specified version of a Landing Page, sets it as the new draft version of the Landing Page.
     * Restore a previous version of a Landing Page, to the draft version of the Landing Page
     * @param param the request object
     */
    public restorePreviousVersionToDraftWithHttpInfo(param: LandingPagesApiRestorePreviousVersionToDraftRequest, options?: Configuration): Promise<HttpInfo<Page>> {
        return this.api.restorePreviousVersionToDraftWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Takes a specified version of a Landing Page, sets it as the new draft version of the Landing Page.
     * Restore a previous version of a Landing Page, to the draft version of the Landing Page
     * @param param the request object
     */
    public restorePreviousVersionToDraft(param: LandingPagesApiRestorePreviousVersionToDraftRequest, options?: Configuration): Promise<Page> {
        return this.api.restorePreviousVersionToDraft(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Schedule a Landing Page to be Published
     * Schedule a Landing Page to be Published
     * @param param the request object
     */
    public scheduleWithHttpInfo(param: LandingPagesApiScheduleRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.scheduleWithHttpInfo(param.contentScheduleRequestVNext,  options).toPromise();
    }

    /**
     * Schedule a Landing Page to be Published
     * Schedule a Landing Page to be Published
     * @param param the request object
     */
    public schedule(param: LandingPagesApiScheduleRequest, options?: Configuration): Promise<void> {
        return this.api.schedule(param.contentScheduleRequestVNext,  options).toPromise();
    }

    /**
     * Set a landing page as the primary language of a multi-language group.
     * Set a new primary language
     * @param param the request object
     */
    public setLangPrimaryWithHttpInfo(param: LandingPagesApiSetLangPrimaryRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.setLangPrimaryWithHttpInfo(param.setNewLanguagePrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Set a landing page as the primary language of a multi-language group.
     * Set a new primary language
     * @param param the request object
     */
    public setLangPrimary(param: LandingPagesApiSetLangPrimaryRequest, options?: Configuration): Promise<void> {
        return this.api.setLangPrimary(param.setNewLanguagePrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Sparse updates a single Landing Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Landing Page
     * @param param the request object
     */
    public updateWithHttpInfo(param: LandingPagesApiUpdateRequest, options?: Configuration): Promise<HttpInfo<Page>> {
        return this.api.updateWithHttpInfo(param.objectId, param.page, param.archived,  options).toPromise();
    }

    /**
     * Sparse updates a single Landing Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Landing Page
     * @param param the request object
     */
    public update(param: LandingPagesApiUpdateRequest, options?: Configuration): Promise<Page> {
        return this.api.update(param.objectId, param.page, param.archived,  options).toPromise();
    }

    /**
     * Update the Landing Page objects identified in the request body.
     * Update a batch of Landing Pages
     * @param param the request object
     */
    public updateBatchWithHttpInfo(param: LandingPagesApiUpdateBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        return this.api.updateBatchWithHttpInfo(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

    /**
     * Update the Landing Page objects identified in the request body.
     * Update a batch of Landing Pages
     * @param param the request object
     */
    public updateBatch(param: LandingPagesApiUpdateBatchRequest, options?: Configuration): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
        return this.api.updateBatch(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

    /**
     * Sparse updates the draft version of a single Landing Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Landing Page draft
     * @param param the request object
     */
    public updateDraftWithHttpInfo(param: LandingPagesApiUpdateDraftRequest, options?: Configuration): Promise<HttpInfo<Page>> {
        return this.api.updateDraftWithHttpInfo(param.objectId, param.page,  options).toPromise();
    }

    /**
     * Sparse updates the draft version of a single Landing Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Landing Page draft
     * @param param the request object
     */
    public updateDraft(param: LandingPagesApiUpdateDraftRequest, options?: Configuration): Promise<Page> {
        return this.api.updateDraft(param.objectId, param.page,  options).toPromise();
    }

    /**
     * Sparse updates a single Folder object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Folder
     * @param param the request object
     */
    public updateFolderWithHttpInfo(param: LandingPagesApiUpdateFolderRequest, options?: Configuration): Promise<HttpInfo<ContentFolder>> {
        return this.api.updateFolderWithHttpInfo(param.objectId, param.contentFolder, param.archived,  options).toPromise();
    }

    /**
     * Sparse updates a single Folder object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Folder
     * @param param the request object
     */
    public updateFolder(param: LandingPagesApiUpdateFolderRequest, options?: Configuration): Promise<ContentFolder> {
        return this.api.updateFolder(param.objectId, param.contentFolder, param.archived,  options).toPromise();
    }

    /**
     * Update the Folder objects identified in the request body.
     * Update a batch of Folders
     * @param param the request object
     */
    public updateFoldersWithHttpInfo(param: LandingPagesApiUpdateFoldersRequest, options?: Configuration): Promise<HttpInfo<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>> {
        return this.api.updateFoldersWithHttpInfo(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

    /**
     * Update the Folder objects identified in the request body.
     * Update a batch of Folders
     * @param param the request object
     */
    public updateFolders(param: LandingPagesApiUpdateFoldersRequest, options?: Configuration): Promise<BatchResponseContentFolder | BatchResponseContentFolderWithErrors> {
        return this.api.updateFolders(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

    /**
     * Explicitly set new languages for each landing page in a multi-language group.
     * Update languages of multi-language group
     * @param param the request object
     */
    public updateLangsWithHttpInfo(param: LandingPagesApiUpdateLangsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateLangsWithHttpInfo(param.updateLanguagesRequestVNext,  options).toPromise();
    }

    /**
     * Explicitly set new languages for each landing page in a multi-language group.
     * Update languages of multi-language group
     * @param param the request object
     */
    public updateLangs(param: LandingPagesApiUpdateLangsRequest, options?: Configuration): Promise<void> {
        return this.api.updateLangs(param.updateLanguagesRequestVNext,  options).toPromise();
    }

}

import { ObservableSitePagesApi } from "./ObservableAPI";
import { SitePagesApiRequestFactory, SitePagesApiResponseProcessor} from "../apis/SitePagesApi";

export interface SitePagesApiArchiveRequest {
    /**
     * The Site Page id.
     * @type string
     * @memberof SitePagesApiarchive
     */
    objectId: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof SitePagesApiarchive
     */
    archived?: boolean
}

export interface SitePagesApiArchiveBatchRequest {
    /**
     * The JSON array of Site Page ids.
     * @type BatchInputString
     * @memberof SitePagesApiarchiveBatch
     */
    batchInputString: BatchInputString
}

export interface SitePagesApiAttachToLangGroupRequest {
    /**
     * The JSON representation of the AttachToLangPrimaryRequest object.
     * @type AttachToLangPrimaryRequestVNext
     * @memberof SitePagesApiattachToLangGroup
     */
    attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext
}

export interface SitePagesApiCloneRequest {
    /**
     * The JSON representation of the ContentCloneRequest object.
     * @type ContentCloneRequestVNext
     * @memberof SitePagesApiclone
     */
    contentCloneRequestVNext: ContentCloneRequestVNext
}

export interface SitePagesApiCreateRequest {
    /**
     * The JSON representation of a new Site Page.
     * @type Page
     * @memberof SitePagesApicreate
     */
    page: Page
}

export interface SitePagesApiCreateABTestVariationRequest {
    /**
     * The JSON representation of the AbTestCreateRequest object.
     * @type AbTestCreateRequestVNext
     * @memberof SitePagesApicreateABTestVariation
     */
    abTestCreateRequestVNext: AbTestCreateRequestVNext
}

export interface SitePagesApiCreateBatchRequest {
    /**
     * The JSON array of new Site Pages to create.
     * @type BatchInputPage
     * @memberof SitePagesApicreateBatch
     */
    batchInputPage: BatchInputPage
}

export interface SitePagesApiCreateLangVariationRequest {
    /**
     * The JSON representation of the ContentLanguageCloneRequest object.
     * @type ContentLanguageCloneRequestVNext
     * @memberof SitePagesApicreateLangVariation
     */
    contentLanguageCloneRequestVNext: ContentLanguageCloneRequestVNext
}

export interface SitePagesApiDetachFromLangGroupRequest {
    /**
     * The JSON representation of the DetachFromLangGroupRequest object.
     * @type DetachFromLangGroupRequestVNext
     * @memberof SitePagesApidetachFromLangGroup
     */
    detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext
}

export interface SitePagesApiEndActiveABTestRequest {
    /**
     * The JSON representation of the AbTestEndRequest object.
     * @type AbTestEndRequestVNext
     * @memberof SitePagesApiendActiveABTest
     */
    abTestEndRequestVNext: AbTestEndRequestVNext
}

export interface SitePagesApiGetByIdRequest {
    /**
     * The Site Page id.
     * @type string
     * @memberof SitePagesApigetById
     */
    objectId: string
    /**
     * Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof SitePagesApigetById
     */
    archived?: boolean
    /**
     * 
     * @type string
     * @memberof SitePagesApigetById
     */
    property?: string
}

export interface SitePagesApiGetDraftByIdRequest {
    /**
     * The Site Page id.
     * @type string
     * @memberof SitePagesApigetDraftById
     */
    objectId: string
}

export interface SitePagesApiGetPageRequest {
    /**
     * Only return Site Pages created at exactly the specified time.
     * @type Date
     * @memberof SitePagesApigetPage
     */
    createdAt?: Date
    /**
     * Only return Site Pages created after the specified time.
     * @type Date
     * @memberof SitePagesApigetPage
     */
    createdAfter?: Date
    /**
     * Only return Site Pages created before the specified time.
     * @type Date
     * @memberof SitePagesApigetPage
     */
    createdBefore?: Date
    /**
     * Only return Site Pages last updated at exactly the specified time.
     * @type Date
     * @memberof SitePagesApigetPage
     */
    updatedAt?: Date
    /**
     * Only return Site Pages last updated after the specified time.
     * @type Date
     * @memberof SitePagesApigetPage
     */
    updatedAfter?: Date
    /**
     * Only return Site Pages last updated before the specified time.
     * @type Date
     * @memberof SitePagesApigetPage
     */
    updatedBefore?: Date
    /**
     * Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @type Array&lt;string&gt;
     * @memberof SitePagesApigetPage
     */
    sort?: Array<string>
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof SitePagesApigetPage
     */
    after?: string
    /**
     * The maximum number of results to return. Default is 100.
     * @type number
     * @memberof SitePagesApigetPage
     */
    limit?: number
    /**
     * Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof SitePagesApigetPage
     */
    archived?: boolean
    /**
     * 
     * @type string
     * @memberof SitePagesApigetPage
     */
    property?: string
}

export interface SitePagesApiGetPreviousVersionRequest {
    /**
     * The Site Page id.
     * @type string
     * @memberof SitePagesApigetPreviousVersion
     */
    objectId: string
    /**
     * The Site Page version id.
     * @type string
     * @memberof SitePagesApigetPreviousVersion
     */
    revisionId: string
}

export interface SitePagesApiGetPreviousVersionsRequest {
    /**
     * The Site Page id.
     * @type string
     * @memberof SitePagesApigetPreviousVersions
     */
    objectId: string
    /**
     * The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof SitePagesApigetPreviousVersions
     */
    after?: string
    /**
     * 
     * @type string
     * @memberof SitePagesApigetPreviousVersions
     */
    before?: string
    /**
     * The maximum number of results to return. Default is 100.
     * @type number
     * @memberof SitePagesApigetPreviousVersions
     */
    limit?: number
}

export interface SitePagesApiPushLiveRequest {
    /**
     * The id of the Site Page for which it\&#39;s draft will be pushed live.
     * @type string
     * @memberof SitePagesApipushLive
     */
    objectId: string
}

export interface SitePagesApiReadBatchRequest {
    /**
     * The JSON array of Site Page ids.
     * @type BatchInputString
     * @memberof SitePagesApireadBatch
     */
    batchInputString: BatchInputString
    /**
     * Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof SitePagesApireadBatch
     */
    archived?: boolean
}

export interface SitePagesApiRerunPreviousABTestRequest {
    /**
     * The JSON representation of the AbTestRerunRequest object.
     * @type AbTestRerunRequestVNext
     * @memberof SitePagesApirerunPreviousABTest
     */
    abTestRerunRequestVNext: AbTestRerunRequestVNext
}

export interface SitePagesApiResetDraftRequest {
    /**
     * The id of the Site Page for which it\&#39;s draft will be reset.
     * @type string
     * @memberof SitePagesApiresetDraft
     */
    objectId: string
}

export interface SitePagesApiRestorePreviousVersionRequest {
    /**
     * The Site Page id.
     * @type string
     * @memberof SitePagesApirestorePreviousVersion
     */
    objectId: string
    /**
     * The Site Page version id to restore.
     * @type string
     * @memberof SitePagesApirestorePreviousVersion
     */
    revisionId: string
}

export interface SitePagesApiRestorePreviousVersionToDraftRequest {
    /**
     * The Site Page id.
     * @type string
     * @memberof SitePagesApirestorePreviousVersionToDraft
     */
    objectId: string
    /**
     * The Site Page version id to restore.
     * @type number
     * @memberof SitePagesApirestorePreviousVersionToDraft
     */
    revisionId: number
}

export interface SitePagesApiScheduleRequest {
    /**
     * The JSON representation of the ContentScheduleRequestVNext object.
     * @type ContentScheduleRequestVNext
     * @memberof SitePagesApischedule
     */
    contentScheduleRequestVNext: ContentScheduleRequestVNext
}

export interface SitePagesApiSetLangPrimaryRequest {
    /**
     * The JSON representation of the SetNewLanguagePrimaryRequest object.
     * @type SetNewLanguagePrimaryRequestVNext
     * @memberof SitePagesApisetLangPrimary
     */
    setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext
}

export interface SitePagesApiUpdateRequest {
    /**
     * The Site Page id.
     * @type string
     * @memberof SitePagesApiupdate
     */
    objectId: string
    /**
     * The JSON representation of the updated Site Page.
     * @type Page
     * @memberof SitePagesApiupdate
     */
    page: Page
    /**
     * Specifies whether to update deleted Site Pages. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof SitePagesApiupdate
     */
    archived?: boolean
}

export interface SitePagesApiUpdateBatchRequest {
    /**
     * The JSON representation of the updated Site Pages.
     * @type BatchInputJsonNode
     * @memberof SitePagesApiupdateBatch
     */
    batchInputJsonNode: BatchInputJsonNode
    /**
     * Specifies whether to update deleted Site Pages. Defaults to &#x60;false&#x60;.
     * @type boolean
     * @memberof SitePagesApiupdateBatch
     */
    archived?: boolean
}

export interface SitePagesApiUpdateDraftRequest {
    /**
     * The Site Page id.
     * @type string
     * @memberof SitePagesApiupdateDraft
     */
    objectId: string
    /**
     * The JSON representation of the updated Site Page to be applied to the draft.
     * @type Page
     * @memberof SitePagesApiupdateDraft
     */
    page: Page
}

export interface SitePagesApiUpdateLangsRequest {
    /**
     * The JSON representation of the UpdateLanguagesRequest object.
     * @type UpdateLanguagesRequestVNext
     * @memberof SitePagesApiupdateLangs
     */
    updateLanguagesRequestVNext: UpdateLanguagesRequestVNext
}

export class ObjectSitePagesApi {
    private api: ObservableSitePagesApi

    public constructor(configuration: Configuration, requestFactory?: SitePagesApiRequestFactory, responseProcessor?: SitePagesApiResponseProcessor) {
        this.api = new ObservableSitePagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete the Site Page object identified by the id in the path.
     * Delete a Site Page
     * @param param the request object
     */
    public archiveWithHttpInfo(param: SitePagesApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete the Site Page object identified by the id in the path.
     * Delete a Site Page
     * @param param the request object
     */
    public archive(param: SitePagesApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.objectId, param.archived,  options).toPromise();
    }

    /**
     * Delete the Site Page objects identified in the request body. Note: This is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to true.
     * Delete a batch of Site Pages
     * @param param the request object
     */
    public archiveBatchWithHttpInfo(param: SitePagesApiArchiveBatchRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveBatchWithHttpInfo(param.batchInputString,  options).toPromise();
    }

    /**
     * Delete the Site Page objects identified in the request body. Note: This is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to true.
     * Delete a batch of Site Pages
     * @param param the request object
     */
    public archiveBatch(param: SitePagesApiArchiveBatchRequest, options?: Configuration): Promise<void> {
        return this.api.archiveBatch(param.batchInputString,  options).toPromise();
    }

    /**
     * Attach a site page to a multi-language group.
     * Attach a site page to a multi-language group
     * @param param the request object
     */
    public attachToLangGroupWithHttpInfo(param: SitePagesApiAttachToLangGroupRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.attachToLangGroupWithHttpInfo(param.attachToLangPrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Attach a site page to a multi-language group.
     * Attach a site page to a multi-language group
     * @param param the request object
     */
    public attachToLangGroup(param: SitePagesApiAttachToLangGroupRequest, options?: Configuration): Promise<void> {
        return this.api.attachToLangGroup(param.attachToLangPrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Clone a Site Page
     * Clone a Site Page
     * @param param the request object
     */
    public cloneWithHttpInfo(param: SitePagesApiCloneRequest, options?: Configuration): Promise<HttpInfo<Page>> {
        return this.api.cloneWithHttpInfo(param.contentCloneRequestVNext,  options).toPromise();
    }

    /**
     * Clone a Site Page
     * Clone a Site Page
     * @param param the request object
     */
    public clone(param: SitePagesApiCloneRequest, options?: Configuration): Promise<Page> {
        return this.api.clone(param.contentCloneRequestVNext,  options).toPromise();
    }

    /**
     * Create a new Site Page
     * Create a new Site Page
     * @param param the request object
     */
    public createWithHttpInfo(param: SitePagesApiCreateRequest, options?: Configuration): Promise<HttpInfo<void | Page>> {
        return this.api.createWithHttpInfo(param.page,  options).toPromise();
    }

    /**
     * Create a new Site Page
     * Create a new Site Page
     * @param param the request object
     */
    public create(param: SitePagesApiCreateRequest, options?: Configuration): Promise<void | Page> {
        return this.api.create(param.page,  options).toPromise();
    }

    /**
     * Create a new A/B test variation based on the information provided in the request body. 
     * Create a new A/B test variation
     * @param param the request object
     */
    public createABTestVariationWithHttpInfo(param: SitePagesApiCreateABTestVariationRequest, options?: Configuration): Promise<HttpInfo<Page>> {
        return this.api.createABTestVariationWithHttpInfo(param.abTestCreateRequestVNext,  options).toPromise();
    }

    /**
     * Create a new A/B test variation based on the information provided in the request body. 
     * Create a new A/B test variation
     * @param param the request object
     */
    public createABTestVariation(param: SitePagesApiCreateABTestVariationRequest, options?: Configuration): Promise<Page> {
        return this.api.createABTestVariation(param.abTestCreateRequestVNext,  options).toPromise();
    }

    /**
     * Create the Site Page objects detailed in the request body.
     * Create a batch of Site Pages
     * @param param the request object
     */
    public createBatchWithHttpInfo(param: SitePagesApiCreateBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        return this.api.createBatchWithHttpInfo(param.batchInputPage,  options).toPromise();
    }

    /**
     * Create the Site Page objects detailed in the request body.
     * Create a batch of Site Pages
     * @param param the request object
     */
    public createBatch(param: SitePagesApiCreateBatchRequest, options?: Configuration): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
        return this.api.createBatch(param.batchInputPage,  options).toPromise();
    }

    /**
     * Create a new language variation from an existing site page
     * Create a new language variation
     * @param param the request object
     */
    public createLangVariationWithHttpInfo(param: SitePagesApiCreateLangVariationRequest, options?: Configuration): Promise<HttpInfo<Page>> {
        return this.api.createLangVariationWithHttpInfo(param.contentLanguageCloneRequestVNext,  options).toPromise();
    }

    /**
     * Create a new language variation from an existing site page
     * Create a new language variation
     * @param param the request object
     */
    public createLangVariation(param: SitePagesApiCreateLangVariationRequest, options?: Configuration): Promise<Page> {
        return this.api.createLangVariation(param.contentLanguageCloneRequestVNext,  options).toPromise();
    }

    /**
     * Detach a site page from a multi-language group.
     * Detach a site page from a multi-language group
     * @param param the request object
     */
    public detachFromLangGroupWithHttpInfo(param: SitePagesApiDetachFromLangGroupRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.detachFromLangGroupWithHttpInfo(param.detachFromLangGroupRequestVNext,  options).toPromise();
    }

    /**
     * Detach a site page from a multi-language group.
     * Detach a site page from a multi-language group
     * @param param the request object
     */
    public detachFromLangGroup(param: SitePagesApiDetachFromLangGroupRequest, options?: Configuration): Promise<void> {
        return this.api.detachFromLangGroup(param.detachFromLangGroupRequestVNext,  options).toPromise();
    }

    /**
     * End an active A/B test and designate a winner.
     * End an active A/B test
     * @param param the request object
     */
    public endActiveABTestWithHttpInfo(param: SitePagesApiEndActiveABTestRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.endActiveABTestWithHttpInfo(param.abTestEndRequestVNext,  options).toPromise();
    }

    /**
     * End an active A/B test and designate a winner.
     * End an active A/B test
     * @param param the request object
     */
    public endActiveABTest(param: SitePagesApiEndActiveABTestRequest, options?: Configuration): Promise<void> {
        return this.api.endActiveABTest(param.abTestEndRequestVNext,  options).toPromise();
    }

    /**
     * Retrieve the Site Page object identified by the id in the path.
     * Retrieve a Site Page
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: SitePagesApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<Page>> {
        return this.api.getByIdWithHttpInfo(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve the Site Page object identified by the id in the path.
     * Retrieve a Site Page
     * @param param the request object
     */
    public getById(param: SitePagesApiGetByIdRequest, options?: Configuration): Promise<Page> {
        return this.api.getById(param.objectId, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieve the full draft version of the Site Page.
     * Retrieve the full draft version of the Site Page
     * @param param the request object
     */
    public getDraftByIdWithHttpInfo(param: SitePagesApiGetDraftByIdRequest, options?: Configuration): Promise<HttpInfo<Page>> {
        return this.api.getDraftByIdWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Retrieve the full draft version of the Site Page.
     * Retrieve the full draft version of the Site Page
     * @param param the request object
     */
    public getDraftById(param: SitePagesApiGetDraftByIdRequest, options?: Configuration): Promise<Page> {
        return this.api.getDraftById(param.objectId,  options).toPromise();
    }

    /**
     * Get the list of site pages. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Site Pages
     * @param param the request object
     */
    public getPageWithHttpInfo(param: SitePagesApiGetPageRequest = {}, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalPageForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.archived, param.property,  options).toPromise();
    }

    /**
     * Get the list of site pages. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Site Pages
     * @param param the request object
     */
    public getPage(param: SitePagesApiGetPageRequest = {}, options?: Configuration): Promise<CollectionResponseWithTotalPageForwardPaging> {
        return this.api.getPage(param.createdAt, param.createdAfter, param.createdBefore, param.updatedAt, param.updatedAfter, param.updatedBefore, param.sort, param.after, param.limit, param.archived, param.property,  options).toPromise();
    }

    /**
     * Retrieves a previous version of a Site Page
     * Retrieves a previous version of a Site Page
     * @param param the request object
     */
    public getPreviousVersionWithHttpInfo(param: SitePagesApiGetPreviousVersionRequest, options?: Configuration): Promise<HttpInfo<VersionPage>> {
        return this.api.getPreviousVersionWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Retrieves a previous version of a Site Page
     * Retrieves a previous version of a Site Page
     * @param param the request object
     */
    public getPreviousVersion(param: SitePagesApiGetPreviousVersionRequest, options?: Configuration): Promise<VersionPage> {
        return this.api.getPreviousVersion(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Retrieves all the previous versions of a Site Page.
     * Retrieves all the previous versions of a Site Page
     * @param param the request object
     */
    public getPreviousVersionsWithHttpInfo(param: SitePagesApiGetPreviousVersionsRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseWithTotalVersionPage>> {
        return this.api.getPreviousVersionsWithHttpInfo(param.objectId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Retrieves all the previous versions of a Site Page.
     * Retrieves all the previous versions of a Site Page
     * @param param the request object
     */
    public getPreviousVersions(param: SitePagesApiGetPreviousVersionsRequest, options?: Configuration): Promise<CollectionResponseWithTotalVersionPage> {
        return this.api.getPreviousVersions(param.objectId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Take any changes from the draft version of the Site Page and apply them to the live version.
     * Push Site Page draft edits live
     * @param param the request object
     */
    public pushLiveWithHttpInfo(param: SitePagesApiPushLiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.pushLiveWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Take any changes from the draft version of the Site Page and apply them to the live version.
     * Push Site Page draft edits live
     * @param param the request object
     */
    public pushLive(param: SitePagesApiPushLiveRequest, options?: Configuration): Promise<void> {
        return this.api.pushLive(param.objectId,  options).toPromise();
    }

    /**
     * Retrieve the Site Page objects identified in the request body.
     * Retrieve a batch of Site Pages
     * @param param the request object
     */
    public readBatchWithHttpInfo(param: SitePagesApiReadBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        return this.api.readBatchWithHttpInfo(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Retrieve the Site Page objects identified in the request body.
     * Retrieve a batch of Site Pages
     * @param param the request object
     */
    public readBatch(param: SitePagesApiReadBatchRequest, options?: Configuration): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
        return this.api.readBatch(param.batchInputString, param.archived,  options).toPromise();
    }

    /**
     * Rerun a previous A/B test.
     * Rerun a previous A/B test
     * @param param the request object
     */
    public rerunPreviousABTestWithHttpInfo(param: SitePagesApiRerunPreviousABTestRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.rerunPreviousABTestWithHttpInfo(param.abTestRerunRequestVNext,  options).toPromise();
    }

    /**
     * Rerun a previous A/B test.
     * Rerun a previous A/B test
     * @param param the request object
     */
    public rerunPreviousABTest(param: SitePagesApiRerunPreviousABTestRequest, options?: Configuration): Promise<void> {
        return this.api.rerunPreviousABTest(param.abTestRerunRequestVNext,  options).toPromise();
    }

    /**
     * Discards any edits and resets the draft to the live version.
     * Reset the Site Page draft to the live version
     * @param param the request object
     */
    public resetDraftWithHttpInfo(param: SitePagesApiResetDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.resetDraftWithHttpInfo(param.objectId,  options).toPromise();
    }

    /**
     * Discards any edits and resets the draft to the live version.
     * Reset the Site Page draft to the live version
     * @param param the request object
     */
    public resetDraft(param: SitePagesApiResetDraftRequest, options?: Configuration): Promise<void> {
        return this.api.resetDraft(param.objectId,  options).toPromise();
    }

    /**
     * Takes a specified version of a Site Page and restores it.
     * Restore a previous version of a Site Page
     * @param param the request object
     */
    public restorePreviousVersionWithHttpInfo(param: SitePagesApiRestorePreviousVersionRequest, options?: Configuration): Promise<HttpInfo<Page>> {
        return this.api.restorePreviousVersionWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Takes a specified version of a Site Page and restores it.
     * Restore a previous version of a Site Page
     * @param param the request object
     */
    public restorePreviousVersion(param: SitePagesApiRestorePreviousVersionRequest, options?: Configuration): Promise<Page> {
        return this.api.restorePreviousVersion(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Takes a specified version of a Site Page, sets it as the new draft version of the Site Page.
     * Restore a previous version of a Site Page, to the draft version of the Site Page
     * @param param the request object
     */
    public restorePreviousVersionToDraftWithHttpInfo(param: SitePagesApiRestorePreviousVersionToDraftRequest, options?: Configuration): Promise<HttpInfo<Page>> {
        return this.api.restorePreviousVersionToDraftWithHttpInfo(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Takes a specified version of a Site Page, sets it as the new draft version of the Site Page.
     * Restore a previous version of a Site Page, to the draft version of the Site Page
     * @param param the request object
     */
    public restorePreviousVersionToDraft(param: SitePagesApiRestorePreviousVersionToDraftRequest, options?: Configuration): Promise<Page> {
        return this.api.restorePreviousVersionToDraft(param.objectId, param.revisionId,  options).toPromise();
    }

    /**
     * Schedule a Site Page to be Published
     * Schedule a Site Page to be Published
     * @param param the request object
     */
    public scheduleWithHttpInfo(param: SitePagesApiScheduleRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.scheduleWithHttpInfo(param.contentScheduleRequestVNext,  options).toPromise();
    }

    /**
     * Schedule a Site Page to be Published
     * Schedule a Site Page to be Published
     * @param param the request object
     */
    public schedule(param: SitePagesApiScheduleRequest, options?: Configuration): Promise<void> {
        return this.api.schedule(param.contentScheduleRequestVNext,  options).toPromise();
    }

    /**
     * Set a site page as the primary language of a multi-language group.
     * Set a new primary language
     * @param param the request object
     */
    public setLangPrimaryWithHttpInfo(param: SitePagesApiSetLangPrimaryRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.setLangPrimaryWithHttpInfo(param.setNewLanguagePrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Set a site page as the primary language of a multi-language group.
     * Set a new primary language
     * @param param the request object
     */
    public setLangPrimary(param: SitePagesApiSetLangPrimaryRequest, options?: Configuration): Promise<void> {
        return this.api.setLangPrimary(param.setNewLanguagePrimaryRequestVNext,  options).toPromise();
    }

    /**
     * Sparse updates a single Site Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Site Page
     * @param param the request object
     */
    public updateWithHttpInfo(param: SitePagesApiUpdateRequest, options?: Configuration): Promise<HttpInfo<Page>> {
        return this.api.updateWithHttpInfo(param.objectId, param.page, param.archived,  options).toPromise();
    }

    /**
     * Sparse updates a single Site Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Site Page
     * @param param the request object
     */
    public update(param: SitePagesApiUpdateRequest, options?: Configuration): Promise<Page> {
        return this.api.update(param.objectId, param.page, param.archived,  options).toPromise();
    }

    /**
     * Update the Site Page objects identified in the request body.
     * Update a batch of Site Pages
     * @param param the request object
     */
    public updateBatchWithHttpInfo(param: SitePagesApiUpdateBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        return this.api.updateBatchWithHttpInfo(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

    /**
     * Update the Site Page objects identified in the request body.
     * Update a batch of Site Pages
     * @param param the request object
     */
    public updateBatch(param: SitePagesApiUpdateBatchRequest, options?: Configuration): Promise<BatchResponsePage | BatchResponsePageWithErrors> {
        return this.api.updateBatch(param.batchInputJsonNode, param.archived,  options).toPromise();
    }

    /**
     * Sparse updates the draft version of a single Site Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Site Page draft
     * @param param the request object
     */
    public updateDraftWithHttpInfo(param: SitePagesApiUpdateDraftRequest, options?: Configuration): Promise<HttpInfo<Page>> {
        return this.api.updateDraftWithHttpInfo(param.objectId, param.page,  options).toPromise();
    }

    /**
     * Sparse updates the draft version of a single Site Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Site Page draft
     * @param param the request object
     */
    public updateDraft(param: SitePagesApiUpdateDraftRequest, options?: Configuration): Promise<Page> {
        return this.api.updateDraft(param.objectId, param.page,  options).toPromise();
    }

    /**
     * Explicitly set new languages for each site page in a multi-language group.
     * Update languages of multi-language group
     * @param param the request object
     */
    public updateLangsWithHttpInfo(param: SitePagesApiUpdateLangsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateLangsWithHttpInfo(param.updateLanguagesRequestVNext,  options).toPromise();
    }

    /**
     * Explicitly set new languages for each site page in a multi-language group.
     * Update languages of multi-language group
     * @param param the request object
     */
    public updateLangs(param: SitePagesApiUpdateLangsRequest, options?: Configuration): Promise<void> {
        return this.api.updateLangs(param.updateLanguagesRequestVNext,  options).toPromise();
    }

}
