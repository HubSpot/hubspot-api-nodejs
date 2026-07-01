import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { ApiCollectionResponseJoinTimeAndRecordId } from '../models/ApiCollectionResponseJoinTimeAndRecordId';
import { ApiCollectionResponseRecordListMembership } from '../models/ApiCollectionResponseRecordListMembership';
import { BatchInputRecordIdInput } from '../models/BatchInputRecordIdInput';
import { BatchResponseRecordIdWithMemberships } from '../models/BatchResponseRecordIdWithMemberships';
import { BatchResponseRecordIdWithMembershipsWithErrors } from '../models/BatchResponseRecordIdWithMembershipsWithErrors';
import { ListCreateRequest } from '../models/ListCreateRequest';
import { ListCreateResponse } from '../models/ListCreateResponse';
import { ListFetchResponse } from '../models/ListFetchResponse';
import { ListFilterUpdateRequest } from '../models/ListFilterUpdateRequest';
import { ListFolderCreateRequest } from '../models/ListFolderCreateRequest';
import { ListFolderCreateResponse } from '../models/ListFolderCreateResponse';
import { ListFolderFetchResponse } from '../models/ListFolderFetchResponse';
import { ListMoveRequest } from '../models/ListMoveRequest';
import { ListSearchRequest } from '../models/ListSearchRequest';
import { ListSearchResponse } from '../models/ListSearchResponse';
import { ListSizeAndEditHistoryResponse } from '../models/ListSizeAndEditHistoryResponse';
import { ListUpdateResponse } from '../models/ListUpdateResponse';
import { ListsByIdResponse } from '../models/ListsByIdResponse';
import { MembershipChangeRequest } from '../models/MembershipChangeRequest';
import { MembershipsUpdateResponse } from '../models/MembershipsUpdateResponse';
import { PublicBatchMigrationMapping } from '../models/PublicBatchMigrationMapping';
import { PublicListConversionResponse } from '../models/PublicListConversionResponse';
import { PublicListConversionTime } from '../models/PublicListConversionTime';
import { PublicMigrationMapping } from '../models/PublicMigrationMapping';
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
     * @param [includeFilters]
     * @param [listIds]
     */
    public crmV3ListsWithHttpInfo(includeFilters?: boolean, listIds?: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListsByIdResponse>> {
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
        const result = this.api.crmV3ListsWithHttpInfo(includeFilters, listIds, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [includeFilters]
     * @param [listIds]
     */
    public crmV3Lists(includeFilters?: boolean, listIds?: Array<string>, _options?: PromiseConfigurationOptions): Promise<ListsByIdResponse> {
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
        const result = this.api.crmV3Lists(includeFilters, listIds, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a folder and recursively includes all folders via the childNodes attribute.  The child lists field will be empty in all child nodes. Only the folder retrieved will include the child lists in that folder.
     * Retrieves a folder.
     * @param [folderId] The Id of the folder to retrieve.
     */
    public crmV3ListsFoldersWithHttpInfo(folderId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListFolderFetchResponse>> {
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
        const result = this.api.crmV3ListsFoldersWithHttpInfo(folderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a folder and recursively includes all folders via the childNodes attribute.  The child lists field will be empty in all child nodes. Only the folder retrieved will include the child lists in that folder.
     * Retrieves a folder.
     * @param [folderId] The Id of the folder to retrieve.
     */
    public crmV3ListsFolders(folderId?: string, _options?: PromiseConfigurationOptions): Promise<ListFolderFetchResponse> {
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
        const result = this.api.crmV3ListsFolders(folderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the folder with the given Id.
     * Deletes a folder
     * @param folderId The ID of the folder to delete
     */
    public crmV3ListsFoldersFolderIdWithHttpInfo(folderId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.crmV3ListsFoldersFolderIdWithHttpInfo(folderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Deletes the folder with the given Id.
     * Deletes a folder
     * @param folderId The ID of the folder to delete
     */
    public crmV3ListsFoldersFolderId(folderId: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.crmV3ListsFoldersFolderId(folderId, observableOptions);
        return result.toPromise();
    }

    /**
     * This moves the folder from its current location to a new location. It updates the parent of this folder to the new Id given.
     * Moves a folder
     * @param folderId The ID of the folder to move
     * @param newParentFolderId The ID for the target parent folder.
     */
    public crmV3ListsFoldersFolderIdMoveNewParentFolderIdWithHttpInfo(folderId: string, newParentFolderId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListFolderFetchResponse>> {
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
        const result = this.api.crmV3ListsFoldersFolderIdMoveNewParentFolderIdWithHttpInfo(folderId, newParentFolderId, observableOptions);
        return result.toPromise();
    }

    /**
     * This moves the folder from its current location to a new location. It updates the parent of this folder to the new Id given.
     * Moves a folder
     * @param folderId The ID of the folder to move
     * @param newParentFolderId The ID for the target parent folder.
     */
    public crmV3ListsFoldersFolderIdMoveNewParentFolderId(folderId: string, newParentFolderId: string, _options?: PromiseConfigurationOptions): Promise<ListFolderFetchResponse> {
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
        const result = this.api.crmV3ListsFoldersFolderIdMoveNewParentFolderId(folderId, newParentFolderId, observableOptions);
        return result.toPromise();
    }

    /**
     * Renames the given folderId with a new name.
     * Rename a folder
     * @param folderId The ID of the folder to rename
     * @param [newFolderName] The new name of the folder.
     */
    public crmV3ListsFoldersFolderIdRenameWithHttpInfo(folderId: string, newFolderName?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListFolderFetchResponse>> {
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
        const result = this.api.crmV3ListsFoldersFolderIdRenameWithHttpInfo(folderId, newFolderName, observableOptions);
        return result.toPromise();
    }

    /**
     * Renames the given folderId with a new name.
     * Rename a folder
     * @param folderId The ID of the folder to rename
     * @param [newFolderName] The new name of the folder.
     */
    public crmV3ListsFoldersFolderIdRename(folderId: string, newFolderName?: string, _options?: PromiseConfigurationOptions): Promise<ListFolderFetchResponse> {
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
        const result = this.api.crmV3ListsFoldersFolderIdRename(folderId, newFolderName, observableOptions);
        return result.toPromise();
    }

    /**
     * Given a list and a folder, the list will be moved to that folder.
     * Moves a list to a given folder
     * @param listMoveRequest
     */
    public crmV3ListsFoldersMoveListWithHttpInfo(listMoveRequest: ListMoveRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.crmV3ListsFoldersMoveListWithHttpInfo(listMoveRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Given a list and a folder, the list will be moved to that folder.
     * Moves a list to a given folder
     * @param listMoveRequest
     */
    public crmV3ListsFoldersMoveList(listMoveRequest: ListMoveRequest, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.crmV3ListsFoldersMoveList(listMoveRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a folder with the given information.
     * Creates a folder
     * @param listFolderCreateRequest
     */
    public crmV3ListsFolders_1WithHttpInfo(listFolderCreateRequest: ListFolderCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListFolderCreateResponse>> {
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
        const result = this.api.crmV3ListsFolders_1WithHttpInfo(listFolderCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Creates a folder with the given information.
     * Creates a folder
     * @param listFolderCreateRequest
     */
    public crmV3ListsFolders_1(listFolderCreateRequest: ListFolderCreateRequest, _options?: PromiseConfigurationOptions): Promise<ListFolderCreateResponse> {
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
        const result = this.api.crmV3ListsFolders_1(listFolderCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * This API allows translation of legacy list id to list id. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id
     * @param [legacyListId] The legacy list id from lists v1 API.
     */
    public crmV3ListsIdmappingWithHttpInfo(legacyListId?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicMigrationMapping>> {
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
        const result = this.api.crmV3ListsIdmappingWithHttpInfo(legacyListId, observableOptions);
        return result.toPromise();
    }

    /**
     * This API allows translation of legacy list id to list id. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id
     * @param [legacyListId] The legacy list id from lists v1 API.
     */
    public crmV3ListsIdmapping(legacyListId?: string, _options?: PromiseConfigurationOptions): Promise<PublicMigrationMapping> {
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
        const result = this.api.crmV3ListsIdmapping(legacyListId, observableOptions);
        return result.toPromise();
    }

    /**
     * This API allows translation of a batch of legacy list id\'s to list id\'s. This allows for a maximum of 10,000 id\'s. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id in Batch
     * @param requestBody
     */
    public crmV3ListsIdmapping_2WithHttpInfo(requestBody: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicBatchMigrationMapping>> {
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
        const result = this.api.crmV3ListsIdmapping_2WithHttpInfo(requestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * This API allows translation of a batch of legacy list id\'s to list id\'s. This allows for a maximum of 10,000 id\'s. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id in Batch
     * @param requestBody
     */
    public crmV3ListsIdmapping_2(requestBody: Array<string>, _options?: PromiseConfigurationOptions): Promise<PublicBatchMigrationMapping> {
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
        const result = this.api.crmV3ListsIdmapping_2(requestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Fetch a single list by **ILS list ID**.
     * Fetch List by ID
     * @param listId The **ILS ID** of the list to fetch.
     * @param [includeFilters] A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public crmV3ListsListIdWithHttpInfo(listId: string, includeFilters?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListFetchResponse>> {
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
        const result = this.api.crmV3ListsListIdWithHttpInfo(listId, includeFilters, observableOptions);
        return result.toPromise();
    }

    /**
     * Fetch a single list by **ILS list ID**.
     * Fetch List by ID
     * @param listId The **ILS ID** of the list to fetch.
     * @param [includeFilters] A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public crmV3ListsListId(listId: string, includeFilters?: boolean, _options?: PromiseConfigurationOptions): Promise<ListFetchResponse> {
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
        const result = this.api.crmV3ListsListId(listId, includeFilters, observableOptions);
        return result.toPromise();
    }

    /**
     * Fetch the memberships of a list in order sorted by the `recordId` of the records in the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by ID
     * @param listId The **ILS ID** of the list.
     * @param [after] The paging offset token for the page that comes &#x60;after&#x60; the previously requested records.  If provided, then the records in the response will be the records following the offset, sorted in *ascending* order. Takes precedence over the &#x60;before&#x60; offset.
     * @param [before] The paging offset token for the page that comes &#x60;before&#x60; the previously requested records.  If provided, then the records in the response will be the records preceding the offset, sorted in *descending* order.
     * @param [limit] The number of records to return in the response. The maximum &#x60;limit&#x60; is 250.
     */
    public crmV3ListsListIdMembershipsWithHttpInfo(listId: string, after?: string, before?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiCollectionResponseJoinTimeAndRecordId>> {
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
        const result = this.api.crmV3ListsListIdMembershipsWithHttpInfo(listId, after, before, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Fetch the memberships of a list in order sorted by the `recordId` of the records in the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by ID
     * @param listId The **ILS ID** of the list.
     * @param [after] The paging offset token for the page that comes &#x60;after&#x60; the previously requested records.  If provided, then the records in the response will be the records following the offset, sorted in *ascending* order. Takes precedence over the &#x60;before&#x60; offset.
     * @param [before] The paging offset token for the page that comes &#x60;before&#x60; the previously requested records.  If provided, then the records in the response will be the records preceding the offset, sorted in *descending* order.
     * @param [limit] The number of records to return in the response. The maximum &#x60;limit&#x60; is 250.
     */
    public crmV3ListsListIdMemberships(listId: string, after?: string, before?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<ApiCollectionResponseJoinTimeAndRecordId> {
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
        const result = this.api.crmV3ListsListIdMemberships(listId, after, before, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Add the records provided to the list. Records that do not exist or that are already members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add Records to a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param requestBody
     */
    public crmV3ListsListIdMembershipsAddWithHttpInfo(listId: string, requestBody: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MembershipsUpdateResponse>> {
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
        const result = this.api.crmV3ListsListIdMembershipsAddWithHttpInfo(listId, requestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Add the records provided to the list. Records that do not exist or that are already members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add Records to a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param requestBody
     */
    public crmV3ListsListIdMembershipsAdd(listId: string, requestBody: Array<string>, _options?: PromiseConfigurationOptions): Promise<MembershipsUpdateResponse> {
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
        const result = this.api.crmV3ListsListIdMembershipsAdd(listId, requestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Add and/or remove records that have already been created in the system to and/or from a list.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add and/or Remove Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param membershipChangeRequest
     */
    public crmV3ListsListIdMembershipsAddAndRemoveWithHttpInfo(listId: string, membershipChangeRequest: MembershipChangeRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MembershipsUpdateResponse>> {
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
        const result = this.api.crmV3ListsListIdMembershipsAddAndRemoveWithHttpInfo(listId, membershipChangeRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Add and/or remove records that have already been created in the system to and/or from a list.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add and/or Remove Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param membershipChangeRequest
     */
    public crmV3ListsListIdMembershipsAddAndRemove(listId: string, membershipChangeRequest: MembershipChangeRequest, _options?: PromiseConfigurationOptions): Promise<MembershipsUpdateResponse> {
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
        const result = this.api.crmV3ListsListIdMembershipsAddAndRemove(listId, membershipChangeRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Add all of the records from a *source list* (specified by the `sourceListId`) to a *destination list* (specified by the `listId`). Records that are already members of the *destination list* will be ignored. The *destination* and *source list* IDs must be different. The *destination* and *source lists* must contain records of the same type (e.g. contacts, companies, etc.).  This endpoint only works for *destination lists* that have a `processingType` of `MANUAL` or `SNAPSHOT`. The *source list* can have any `processingType`.  This endpoint only supports a `sourceListId` for lists with less than 100,000 memberships.
     * Add All Records from a Source List to a Destination List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; *destination list*, which the *source list* records are added to.
     * @param sourceListId The **ILS ID** of the *source list* to grab the records from, which are then added to the *destination list*.
     */
    public crmV3ListsListIdMembershipsAddFromSourceListIdWithHttpInfo(listId: string, sourceListId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.crmV3ListsListIdMembershipsAddFromSourceListIdWithHttpInfo(listId, sourceListId, observableOptions);
        return result.toPromise();
    }

    /**
     * Add all of the records from a *source list* (specified by the `sourceListId`) to a *destination list* (specified by the `listId`). Records that are already members of the *destination list* will be ignored. The *destination* and *source list* IDs must be different. The *destination* and *source lists* must contain records of the same type (e.g. contacts, companies, etc.).  This endpoint only works for *destination lists* that have a `processingType` of `MANUAL` or `SNAPSHOT`. The *source list* can have any `processingType`.  This endpoint only supports a `sourceListId` for lists with less than 100,000 memberships.
     * Add All Records from a Source List to a Destination List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; *destination list*, which the *source list* records are added to.
     * @param sourceListId The **ILS ID** of the *source list* to grab the records from, which are then added to the *destination list*.
     */
    public crmV3ListsListIdMembershipsAddFromSourceListId(listId: string, sourceListId: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.crmV3ListsListIdMembershipsAddFromSourceListId(listId, sourceListId, observableOptions);
        return result.toPromise();
    }

    /**
     * Fetch the memberships of a list in order sorted by the time the records were added to the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by Added to List Date
     * @param listId The **ILS ID** of the list.
     * @param [after] The paging offset token for the page that comes &#x60;after&#x60; the previously requested records.  If provided, then the records in the response will be the records following the offset, sorted in *ascending* order. Takes precedence over the &#x60;before&#x60; offset.
     * @param [before] The paging offset token for the page that comes &#x60;before&#x60; the previously requested records.  If provided, then the records in the response will be the records preceding the offset, sorted in *descending* order.
     * @param [limit] The number of records to return in the response. The maximum &#x60;limit&#x60; is 250.
     */
    public crmV3ListsListIdMembershipsJoinOrderWithHttpInfo(listId: string, after?: string, before?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiCollectionResponseJoinTimeAndRecordId>> {
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
        const result = this.api.crmV3ListsListIdMembershipsJoinOrderWithHttpInfo(listId, after, before, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Fetch the memberships of a list in order sorted by the time the records were added to the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by Added to List Date
     * @param listId The **ILS ID** of the list.
     * @param [after] The paging offset token for the page that comes &#x60;after&#x60; the previously requested records.  If provided, then the records in the response will be the records following the offset, sorted in *ascending* order. Takes precedence over the &#x60;before&#x60; offset.
     * @param [before] The paging offset token for the page that comes &#x60;before&#x60; the previously requested records.  If provided, then the records in the response will be the records preceding the offset, sorted in *descending* order.
     * @param [limit] The number of records to return in the response. The maximum &#x60;limit&#x60; is 250.
     */
    public crmV3ListsListIdMembershipsJoinOrder(listId: string, after?: string, before?: string, limit?: number, _options?: PromiseConfigurationOptions): Promise<ApiCollectionResponseJoinTimeAndRecordId> {
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
        const result = this.api.crmV3ListsListIdMembershipsJoinOrder(listId, after, before, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove the records provided from the list. Records that do not exist or that are not members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Remove Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param requestBody
     */
    public crmV3ListsListIdMembershipsRemoveWithHttpInfo(listId: string, requestBody: Array<string>, _options?: PromiseConfigurationOptions): Promise<HttpInfo<MembershipsUpdateResponse>> {
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
        const result = this.api.crmV3ListsListIdMembershipsRemoveWithHttpInfo(listId, requestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove the records provided from the list. Records that do not exist or that are not members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Remove Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param requestBody
     */
    public crmV3ListsListIdMembershipsRemove(listId: string, requestBody: Array<string>, _options?: PromiseConfigurationOptions): Promise<MembershipsUpdateResponse> {
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
        const result = this.api.crmV3ListsListIdMembershipsRemove(listId, requestBody, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove **all** of the records from a list. ***Note:*** *The list is not deleted.*  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.  This endpoint only supports lists that have less than 100,000 memberships.
     * Delete All Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     */
    public crmV3ListsListIdMemberships_3WithHttpInfo(listId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.crmV3ListsListIdMemberships_3WithHttpInfo(listId, observableOptions);
        return result.toPromise();
    }

    /**
     * Remove **all** of the records from a list. ***Note:*** *The list is not deleted.*  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.  This endpoint only supports lists that have less than 100,000 memberships.
     * Delete All Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     */
    public crmV3ListsListIdMemberships_3(listId: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.crmV3ListsListIdMemberships_3(listId, observableOptions);
        return result.toPromise();
    }

    /**
     * Restore a previously deleted list by **ILS list ID**. Deleted lists are eligible to be restored up-to 90-days after the list has been deleted.
     * Restore a List
     * @param listId The **ILS ID** of the list to restore.
     */
    public crmV3ListsListIdRestoreWithHttpInfo(listId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.crmV3ListsListIdRestoreWithHttpInfo(listId, observableOptions);
        return result.toPromise();
    }

    /**
     * Restore a previously deleted list by **ILS list ID**. Deleted lists are eligible to be restored up-to 90-days after the list has been deleted.
     * Restore a List
     * @param listId The **ILS ID** of the list to restore.
     */
    public crmV3ListsListIdRestore(listId: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.crmV3ListsListIdRestore(listId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the conversion details for a list. This can be used to check for an upcoming conversion, or to get the details of when a list was already converted.
     * Retrieve the conversion details for a list
     * @param listId The ID of the list to schedule the conversion for.
     */
    public crmV3ListsListIdScheduleConversionWithHttpInfo(listId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicListConversionResponse>> {
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
        const result = this.api.crmV3ListsListIdScheduleConversionWithHttpInfo(listId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve the conversion details for a list. This can be used to check for an upcoming conversion, or to get the details of when a list was already converted.
     * Retrieve the conversion details for a list
     * @param listId The ID of the list to schedule the conversion for.
     */
    public crmV3ListsListIdScheduleConversion(listId: string, _options?: PromiseConfigurationOptions): Promise<PublicListConversionResponse> {
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
        const result = this.api.crmV3ListsListIdScheduleConversion(listId, observableOptions);
        return result.toPromise();
    }

    /**
     * Schedule the conversion of an active list into a static list, or update the already scheduled conversion. This can be scheduled for a specific date or based on activity.
     * Schedule or update the conversion of a list to static
     * @param listId The ID of the list to schedule the conversion for.
     * @param publicListConversionTime
     */
    public crmV3ListsListIdScheduleConversion_4WithHttpInfo(listId: string, publicListConversionTime: PublicListConversionTime, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicListConversionResponse>> {
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
        const result = this.api.crmV3ListsListIdScheduleConversion_4WithHttpInfo(listId, publicListConversionTime, observableOptions);
        return result.toPromise();
    }

    /**
     * Schedule the conversion of an active list into a static list, or update the already scheduled conversion. This can be scheduled for a specific date or based on activity.
     * Schedule or update the conversion of a list to static
     * @param listId The ID of the list to schedule the conversion for.
     * @param publicListConversionTime
     */
    public crmV3ListsListIdScheduleConversion_4(listId: string, publicListConversionTime: PublicListConversionTime, _options?: PromiseConfigurationOptions): Promise<PublicListConversionResponse> {
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
        const result = this.api.crmV3ListsListIdScheduleConversion_4(listId, publicListConversionTime, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete an existing scheduled conversion for a list.
     * Cancel the conversion of a list
     * @param listId The ID of the list that you want to cancel the conversion for.
     */
    public crmV3ListsListIdScheduleConversion_5WithHttpInfo(listId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.crmV3ListsListIdScheduleConversion_5WithHttpInfo(listId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete an existing scheduled conversion for a list.
     * Cancel the conversion of a list
     * @param listId The ID of the list that you want to cancel the conversion for.
     */
    public crmV3ListsListIdScheduleConversion_5(listId: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.crmV3ListsListIdScheduleConversion_5(listId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param listId 
     * @param [endDate] 
     * @param [startDate] 
     */
    public crmV3ListsListIdSizeAndEditsHistoryBetweenWithHttpInfo(listId: string, endDate?: Date, startDate?: Date, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListSizeAndEditHistoryResponse>> {
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
        const result = this.api.crmV3ListsListIdSizeAndEditsHistoryBetweenWithHttpInfo(listId, endDate, startDate, observableOptions);
        return result.toPromise();
    }

    /**
     * @param listId 
     * @param [endDate] 
     * @param [startDate] 
     */
    public crmV3ListsListIdSizeAndEditsHistoryBetween(listId: string, endDate?: Date, startDate?: Date, _options?: PromiseConfigurationOptions): Promise<ListSizeAndEditHistoryResponse> {
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
        const result = this.api.crmV3ListsListIdSizeAndEditsHistoryBetween(listId, endDate, startDate, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the filter branch definition of a `DYNAMIC` list. Once updated, the list memberships will be re-evaluated and updated to match the new definition.
     * Update List Filter Definition
     * @param listId The **ILS ID** of the list to update.
     * @param listFilterUpdateRequest
     * @param [enrollObjectsInWorkflows] A flag indicating whether or not the memberships added to the list as a result of the filter change should be enrolled in workflows that are relevant to this list.
     */
    public crmV3ListsListIdUpdateListFiltersWithHttpInfo(listId: string, listFilterUpdateRequest: ListFilterUpdateRequest, enrollObjectsInWorkflows?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListUpdateResponse>> {
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
        const result = this.api.crmV3ListsListIdUpdateListFiltersWithHttpInfo(listId, listFilterUpdateRequest, enrollObjectsInWorkflows, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the filter branch definition of a `DYNAMIC` list. Once updated, the list memberships will be re-evaluated and updated to match the new definition.
     * Update List Filter Definition
     * @param listId The **ILS ID** of the list to update.
     * @param listFilterUpdateRequest
     * @param [enrollObjectsInWorkflows] A flag indicating whether or not the memberships added to the list as a result of the filter change should be enrolled in workflows that are relevant to this list.
     */
    public crmV3ListsListIdUpdateListFilters(listId: string, listFilterUpdateRequest: ListFilterUpdateRequest, enrollObjectsInWorkflows?: boolean, _options?: PromiseConfigurationOptions): Promise<ListUpdateResponse> {
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
        const result = this.api.crmV3ListsListIdUpdateListFilters(listId, listFilterUpdateRequest, enrollObjectsInWorkflows, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the name of a list. The name must be globally unique relative to all other public lists in the portal.
     * Update List Name
     * @param listId The **ILS ID** of the list to update.
     * @param [includeFilters] A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     * @param [listName] The name to update the list to.
     */
    public crmV3ListsListIdUpdateListNameWithHttpInfo(listId: string, includeFilters?: boolean, listName?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListUpdateResponse>> {
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
        const result = this.api.crmV3ListsListIdUpdateListNameWithHttpInfo(listId, includeFilters, listName, observableOptions);
        return result.toPromise();
    }

    /**
     * Update the name of a list. The name must be globally unique relative to all other public lists in the portal.
     * Update List Name
     * @param listId The **ILS ID** of the list to update.
     * @param [includeFilters] A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     * @param [listName] The name to update the list to.
     */
    public crmV3ListsListIdUpdateListName(listId: string, includeFilters?: boolean, listName?: string, _options?: PromiseConfigurationOptions): Promise<ListUpdateResponse> {
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
        const result = this.api.crmV3ListsListIdUpdateListName(listId, includeFilters, listName, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a list by **ILS list ID**. Lists deleted through this endpoint can be restored up to 90-days following the delete. After 90-days, the list is purged and can no longer be restored.
     * Delete a List
     * @param listId The **ILS ID** of the list to delete.
     */
    public crmV3ListsListId_6WithHttpInfo(listId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.crmV3ListsListId_6WithHttpInfo(listId, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a list by **ILS list ID**. Lists deleted through this endpoint can be restored up to 90-days following the delete. After 90-days, the list is purged and can no longer be restored.
     * Delete a List
     * @param listId The **ILS ID** of the list to delete.
     */
    public crmV3ListsListId_6(listId: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.crmV3ListsListId_6(listId, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a specific list by its name and object type ID. This endpoint allows you to fetch details about a list, including its properties and optionally its filters. It is useful for accessing list information based on specific criteria.
     * Retrieve List by Name
     * @param listName The name of the list to fetch. This is **not** case sensitive.
     * @param objectTypeId The object type ID of the object types stored by the list to fetch. For example, &#x60;0-1&#x60; for a &#x60;CONTACT&#x60; list.
     * @param [includeFilters] A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public crmV3ListsObjectTypeIdObjectTypeIdNameListNameWithHttpInfo(listName: string, objectTypeId: string, includeFilters?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListFetchResponse>> {
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
        const result = this.api.crmV3ListsObjectTypeIdObjectTypeIdNameListNameWithHttpInfo(listName, objectTypeId, includeFilters, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieve a specific list by its name and object type ID. This endpoint allows you to fetch details about a list, including its properties and optionally its filters. It is useful for accessing list information based on specific criteria.
     * Retrieve List by Name
     * @param listName The name of the list to fetch. This is **not** case sensitive.
     * @param objectTypeId The object type ID of the object types stored by the list to fetch. For example, &#x60;0-1&#x60; for a &#x60;CONTACT&#x60; list.
     * @param [includeFilters] A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public crmV3ListsObjectTypeIdObjectTypeIdNameListName(listName: string, objectTypeId: string, includeFilters?: boolean, _options?: PromiseConfigurationOptions): Promise<ListFetchResponse> {
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
        const result = this.api.crmV3ListsObjectTypeIdObjectTypeIdNameListName(listName, objectTypeId, includeFilters, observableOptions);
        return result.toPromise();
    }

    /**
     * For given record provide lists this record is member of.
     * Get lists record is member of
     * @param objectTypeId Object type id of the record
     * @param recordId Id of the record
     */
    public crmV3ListsRecordsObjectTypeIdRecordIdMembershipsWithHttpInfo(objectTypeId: string, recordId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ApiCollectionResponseRecordListMembership>> {
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
        const result = this.api.crmV3ListsRecordsObjectTypeIdRecordIdMembershipsWithHttpInfo(objectTypeId, recordId, observableOptions);
        return result.toPromise();
    }

    /**
     * For given record provide lists this record is member of.
     * Get lists record is member of
     * @param objectTypeId Object type id of the record
     * @param recordId Id of the record
     */
    public crmV3ListsRecordsObjectTypeIdRecordIdMemberships(objectTypeId: string, recordId: string, _options?: PromiseConfigurationOptions): Promise<ApiCollectionResponseRecordListMembership> {
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
        const result = this.api.crmV3ListsRecordsObjectTypeIdRecordIdMemberships(objectTypeId, recordId, observableOptions);
        return result.toPromise();
    }

    /**
     * @param listCreateRequest
     */
    public crmV3Lists_7WithHttpInfo(listCreateRequest: ListCreateRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListCreateResponse>> {
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
        const result = this.api.crmV3Lists_7WithHttpInfo(listCreateRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * @param listCreateRequest
     */
    public crmV3Lists_7(listCreateRequest: ListCreateRequest, _options?: PromiseConfigurationOptions): Promise<ListCreateResponse> {
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
        const result = this.api.crmV3Lists_7(listCreateRequest, observableOptions);
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
     * @param batchInputRecordIdInput
     */
    public crmV3ListsRecordsMembershipsBatchReadWithHttpInfo(batchInputRecordIdInput: BatchInputRecordIdInput, _options?: PromiseConfigurationOptions): Promise<HttpInfo<BatchResponseRecordIdWithMembershipsWithErrors | BatchResponseRecordIdWithMemberships>> {
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
        const result = this.api.crmV3ListsRecordsMembershipsBatchReadWithHttpInfo(batchInputRecordIdInput, observableOptions);
        return result.toPromise();
    }

    /**
     * @param batchInputRecordIdInput
     */
    public crmV3ListsRecordsMembershipsBatchRead(batchInputRecordIdInput: BatchInputRecordIdInput, _options?: PromiseConfigurationOptions): Promise<BatchResponseRecordIdWithMembershipsWithErrors | BatchResponseRecordIdWithMemberships> {
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
        const result = this.api.crmV3ListsRecordsMembershipsBatchRead(batchInputRecordIdInput, observableOptions);
        return result.toPromise();
    }


}



import { ObservableSearchApi } from './ObservableAPI';

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";
export class PromiseSearchApi {
    private api: ObservableSearchApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Search lists by list name or page through all lists by providing an empty `query` value.
     * Search Lists
     * @param listSearchRequest
     */
    public crmV3ListsSearchWithHttpInfo(listSearchRequest: ListSearchRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<ListSearchResponse>> {
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
        const result = this.api.crmV3ListsSearchWithHttpInfo(listSearchRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Search lists by list name or page through all lists by providing an empty `query` value.
     * Search Lists
     * @param listSearchRequest
     */
    public crmV3ListsSearch(listSearchRequest: ListSearchRequest, _options?: PromiseConfigurationOptions): Promise<ListSearchResponse> {
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
        const result = this.api.crmV3ListsSearch(listSearchRequest, observableOptions);
        return result.toPromise();
    }


}



