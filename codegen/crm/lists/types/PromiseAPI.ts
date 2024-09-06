import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ApiCollectionResponseJoinTimeAndRecordId } from '../models/ApiCollectionResponseJoinTimeAndRecordId';
import { ApiCollectionResponseRecordListMembershipNoPaging } from '../models/ApiCollectionResponseRecordListMembershipNoPaging';
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
import { ListUpdateResponse } from '../models/ListUpdateResponse';
import { ListsByIdResponse } from '../models/ListsByIdResponse';
import { MembershipChangeRequest } from '../models/MembershipChangeRequest';
import { MembershipsUpdateResponse } from '../models/MembershipsUpdateResponse';
import { PublicBatchMigrationMapping } from '../models/PublicBatchMigrationMapping';
import { PublicMigrationMapping } from '../models/PublicMigrationMapping';
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
     * Creates a folder with the given information.
     * Creates a folder
     * @param listFolderCreateRequest 
     */
    public createWithHttpInfo(listFolderCreateRequest: ListFolderCreateRequest, _options?: Configuration): Promise<HttpInfo<ListFolderCreateResponse>> {
        const result = this.api.createWithHttpInfo(listFolderCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a folder with the given information.
     * Creates a folder
     * @param listFolderCreateRequest 
     */
    public create(listFolderCreateRequest: ListFolderCreateRequest, _options?: Configuration): Promise<ListFolderCreateResponse> {
        const result = this.api.create(listFolderCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a folder and recursively includes all folders via the childNodes attribute.  The child lists field will be empty in all child nodes. Only the folder retrieved will include the child lists in that folder.
     * Retrieves a folder.
     * @param folderId The Id of the folder to retrieve.
     */
    public getAllWithHttpInfo(folderId?: string, _options?: Configuration): Promise<HttpInfo<ListFolderFetchResponse>> {
        const result = this.api.getAllWithHttpInfo(folderId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves a folder and recursively includes all folders via the childNodes attribute.  The child lists field will be empty in all child nodes. Only the folder retrieved will include the child lists in that folder.
     * Retrieves a folder.
     * @param folderId The Id of the folder to retrieve.
     */
    public getAll(folderId?: string, _options?: Configuration): Promise<ListFolderFetchResponse> {
        const result = this.api.getAll(folderId, _options);
        return result.toPromise();
    }

    /**
     * This moves the folder from its current location to a new location. It updates the parent of this folder to the new Id given.
     * Moves a folder
     * @param folderId 
     * @param newParentFolderId 
     */
    public moveWithHttpInfo(folderId: string, newParentFolderId: string, _options?: Configuration): Promise<HttpInfo<ListFolderFetchResponse>> {
        const result = this.api.moveWithHttpInfo(folderId, newParentFolderId, _options);
        return result.toPromise();
    }

    /**
     * This moves the folder from its current location to a new location. It updates the parent of this folder to the new Id given.
     * Moves a folder
     * @param folderId 
     * @param newParentFolderId 
     */
    public move(folderId: string, newParentFolderId: string, _options?: Configuration): Promise<ListFolderFetchResponse> {
        const result = this.api.move(folderId, newParentFolderId, _options);
        return result.toPromise();
    }

    /**
     * Given a list and a folder, the list will be moved to that folder.
     * Moves a list to a given folder
     * @param listMoveRequest 
     */
    public moveListWithHttpInfo(listMoveRequest: ListMoveRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.moveListWithHttpInfo(listMoveRequest, _options);
        return result.toPromise();
    }

    /**
     * Given a list and a folder, the list will be moved to that folder.
     * Moves a list to a given folder
     * @param listMoveRequest 
     */
    public moveList(listMoveRequest: ListMoveRequest, _options?: Configuration): Promise<void> {
        const result = this.api.moveList(listMoveRequest, _options);
        return result.toPromise();
    }

    /**
     * Deletes the folder with the given Id.
     * Deletes a folder
     * @param folderId 
     */
    public removeWithHttpInfo(folderId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.removeWithHttpInfo(folderId, _options);
        return result.toPromise();
    }

    /**
     * Deletes the folder with the given Id.
     * Deletes a folder
     * @param folderId 
     */
    public remove(folderId: string, _options?: Configuration): Promise<void> {
        const result = this.api.remove(folderId, _options);
        return result.toPromise();
    }

    /**
     * Renames the given folderId with a new name.
     * Rename a folder
     * @param folderId 
     * @param newFolderName 
     */
    public renameWithHttpInfo(folderId: string, newFolderName?: string, _options?: Configuration): Promise<HttpInfo<ListFolderFetchResponse>> {
        const result = this.api.renameWithHttpInfo(folderId, newFolderName, _options);
        return result.toPromise();
    }

    /**
     * Renames the given folderId with a new name.
     * Rename a folder
     * @param folderId 
     * @param newFolderName 
     */
    public rename(folderId: string, newFolderName?: string, _options?: Configuration): Promise<ListFolderFetchResponse> {
        const result = this.api.rename(folderId, newFolderName, _options);
        return result.toPromise();
    }


}



import { ObservableListsApi } from './ObservableAPI';

import { ListsApiRequestFactory, ListsApiResponseProcessor} from "../apis/ListsApi";
export class PromiseListsApi {
    private api: ObservableListsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ListsApiRequestFactory,
        responseProcessor?: ListsApiResponseProcessor
    ) {
        this.api = new ObservableListsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new list with the provided object list definition.
     * Create List
     * @param listCreateRequest 
     */
    public createWithHttpInfo(listCreateRequest: ListCreateRequest, _options?: Configuration): Promise<HttpInfo<ListCreateResponse>> {
        const result = this.api.createWithHttpInfo(listCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Create a new list with the provided object list definition.
     * Create List
     * @param listCreateRequest 
     */
    public create(listCreateRequest: ListCreateRequest, _options?: Configuration): Promise<ListCreateResponse> {
        const result = this.api.create(listCreateRequest, _options);
        return result.toPromise();
    }

    /**
     * Search lists by list name or page through all lists by providing an empty `query` value.
     * Search Lists
     * @param listSearchRequest 
     */
    public doSearchWithHttpInfo(listSearchRequest: ListSearchRequest, _options?: Configuration): Promise<HttpInfo<ListSearchResponse>> {
        const result = this.api.doSearchWithHttpInfo(listSearchRequest, _options);
        return result.toPromise();
    }

    /**
     * Search lists by list name or page through all lists by providing an empty `query` value.
     * Search Lists
     * @param listSearchRequest 
     */
    public doSearch(listSearchRequest: ListSearchRequest, _options?: Configuration): Promise<ListSearchResponse> {
        const result = this.api.doSearch(listSearchRequest, _options);
        return result.toPromise();
    }

    /**
     * Fetch multiple lists in a single request by **ILS list ID**. The response will include the definitions of all lists that exist for the `listIds` provided.
     * Fetch Multiple Lists
     * @param listIds The **ILS IDs** of the lists to fetch.
     * @param includeFilters A flag indicating whether or not the response object list definitions should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public getAllWithHttpInfo(listIds?: Array<string>, includeFilters?: boolean, _options?: Configuration): Promise<HttpInfo<ListsByIdResponse>> {
        const result = this.api.getAllWithHttpInfo(listIds, includeFilters, _options);
        return result.toPromise();
    }

    /**
     * Fetch multiple lists in a single request by **ILS list ID**. The response will include the definitions of all lists that exist for the `listIds` provided.
     * Fetch Multiple Lists
     * @param listIds The **ILS IDs** of the lists to fetch.
     * @param includeFilters A flag indicating whether or not the response object list definitions should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public getAll(listIds?: Array<string>, includeFilters?: boolean, _options?: Configuration): Promise<ListsByIdResponse> {
        const result = this.api.getAll(listIds, includeFilters, _options);
        return result.toPromise();
    }

    /**
     * Fetch a single list by **ILS list ID**.
     * Fetch List by ID
     * @param listId The **ILS ID** of the list to fetch.
     * @param includeFilters A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public getByIdWithHttpInfo(listId: string, includeFilters?: boolean, _options?: Configuration): Promise<HttpInfo<ListFetchResponse>> {
        const result = this.api.getByIdWithHttpInfo(listId, includeFilters, _options);
        return result.toPromise();
    }

    /**
     * Fetch a single list by **ILS list ID**.
     * Fetch List by ID
     * @param listId The **ILS ID** of the list to fetch.
     * @param includeFilters A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public getById(listId: string, includeFilters?: boolean, _options?: Configuration): Promise<ListFetchResponse> {
        const result = this.api.getById(listId, includeFilters, _options);
        return result.toPromise();
    }

    /**
     * Fetch a single list by list name and object type.
     * Fetch List by Name
     * @param listName The name of the list to fetch. This is **not** case sensitive.
     * @param objectTypeId The object type ID of the object types stored by the list to fetch. For example, &#x60;0-1&#x60; for a &#x60;CONTACT&#x60; list.
     * @param includeFilters A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public getByNameWithHttpInfo(listName: string, objectTypeId: string, includeFilters?: boolean, _options?: Configuration): Promise<HttpInfo<ListFetchResponse>> {
        const result = this.api.getByNameWithHttpInfo(listName, objectTypeId, includeFilters, _options);
        return result.toPromise();
    }

    /**
     * Fetch a single list by list name and object type.
     * Fetch List by Name
     * @param listName The name of the list to fetch. This is **not** case sensitive.
     * @param objectTypeId The object type ID of the object types stored by the list to fetch. For example, &#x60;0-1&#x60; for a &#x60;CONTACT&#x60; list.
     * @param includeFilters A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public getByName(listName: string, objectTypeId: string, includeFilters?: boolean, _options?: Configuration): Promise<ListFetchResponse> {
        const result = this.api.getByName(listName, objectTypeId, includeFilters, _options);
        return result.toPromise();
    }

    /**
     * Delete a list by **ILS list ID**. Lists deleted through this endpoint can be restored up to 90-days following the delete. After 90-days, the list is purged and can no longer be restored.
     * Delete a List
     * @param listId The **ILS ID** of the list to delete.
     */
    public removeWithHttpInfo(listId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.removeWithHttpInfo(listId, _options);
        return result.toPromise();
    }

    /**
     * Delete a list by **ILS list ID**. Lists deleted through this endpoint can be restored up to 90-days following the delete. After 90-days, the list is purged and can no longer be restored.
     * Delete a List
     * @param listId The **ILS ID** of the list to delete.
     */
    public remove(listId: string, _options?: Configuration): Promise<void> {
        const result = this.api.remove(listId, _options);
        return result.toPromise();
    }

    /**
     * Restore a previously deleted list by **ILS list ID**. Deleted lists are eligible to be restored up-to 90-days after the list has been deleted.
     * Restore a List
     * @param listId The **ILS ID** of the list to restore.
     */
    public restoreWithHttpInfo(listId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.restoreWithHttpInfo(listId, _options);
        return result.toPromise();
    }

    /**
     * Restore a previously deleted list by **ILS list ID**. Deleted lists are eligible to be restored up-to 90-days after the list has been deleted.
     * Restore a List
     * @param listId The **ILS ID** of the list to restore.
     */
    public restore(listId: string, _options?: Configuration): Promise<void> {
        const result = this.api.restore(listId, _options);
        return result.toPromise();
    }

    /**
     * Update the filter branch definition of a `DYNAMIC` list. Once updated, the list memberships will be re-evaluated and updated to match the new definition.
     * Update List Filter Definition
     * @param listId The **ILS ID** of the list to update.
     * @param listFilterUpdateRequest 
     * @param enrollObjectsInWorkflows A flag indicating whether or not the memberships added to the list as a result of the filter change should be enrolled in workflows that are relevant to this list.
     */
    public updateListFiltersWithHttpInfo(listId: string, listFilterUpdateRequest: ListFilterUpdateRequest, enrollObjectsInWorkflows?: boolean, _options?: Configuration): Promise<HttpInfo<ListUpdateResponse>> {
        const result = this.api.updateListFiltersWithHttpInfo(listId, listFilterUpdateRequest, enrollObjectsInWorkflows, _options);
        return result.toPromise();
    }

    /**
     * Update the filter branch definition of a `DYNAMIC` list. Once updated, the list memberships will be re-evaluated and updated to match the new definition.
     * Update List Filter Definition
     * @param listId The **ILS ID** of the list to update.
     * @param listFilterUpdateRequest 
     * @param enrollObjectsInWorkflows A flag indicating whether or not the memberships added to the list as a result of the filter change should be enrolled in workflows that are relevant to this list.
     */
    public updateListFilters(listId: string, listFilterUpdateRequest: ListFilterUpdateRequest, enrollObjectsInWorkflows?: boolean, _options?: Configuration): Promise<ListUpdateResponse> {
        const result = this.api.updateListFilters(listId, listFilterUpdateRequest, enrollObjectsInWorkflows, _options);
        return result.toPromise();
    }

    /**
     * Update the name of a list. The name must be globally unique relative to all other public lists in the portal.
     * Update List Name
     * @param listId The **ILS ID** of the list to update.
     * @param listName The name to update the list to.
     * @param includeFilters A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public updateNameWithHttpInfo(listId: string, listName?: string, includeFilters?: boolean, _options?: Configuration): Promise<HttpInfo<ListUpdateResponse>> {
        const result = this.api.updateNameWithHttpInfo(listId, listName, includeFilters, _options);
        return result.toPromise();
    }

    /**
     * Update the name of a list. The name must be globally unique relative to all other public lists in the portal.
     * Update List Name
     * @param listId The **ILS ID** of the list to update.
     * @param listName The name to update the list to.
     * @param includeFilters A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public updateName(listId: string, listName?: string, includeFilters?: boolean, _options?: Configuration): Promise<ListUpdateResponse> {
        const result = this.api.updateName(listId, listName, includeFilters, _options);
        return result.toPromise();
    }


}



import { ObservableMappingApi } from './ObservableAPI';

import { MappingApiRequestFactory, MappingApiResponseProcessor} from "../apis/MappingApi";
export class PromiseMappingApi {
    private api: ObservableMappingApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MappingApiRequestFactory,
        responseProcessor?: MappingApiResponseProcessor
    ) {
        this.api = new ObservableMappingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows translation of legacy list id to list id. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id
     * @param legacyListId The legacy list id from lists v1 API.
     */
    public translateLegacyListIdToListIdWithHttpInfo(legacyListId?: string, _options?: Configuration): Promise<HttpInfo<PublicMigrationMapping>> {
        const result = this.api.translateLegacyListIdToListIdWithHttpInfo(legacyListId, _options);
        return result.toPromise();
    }

    /**
     * This API allows translation of legacy list id to list id. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id
     * @param legacyListId The legacy list id from lists v1 API.
     */
    public translateLegacyListIdToListId(legacyListId?: string, _options?: Configuration): Promise<PublicMigrationMapping> {
        const result = this.api.translateLegacyListIdToListId(legacyListId, _options);
        return result.toPromise();
    }

    /**
     * This API allows translation of a batch of legacy list id\'s to list id\'s. This allows for a maximum of 10,000 id\'s. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id in Batch
     * @param requestBody 
     */
    public translateLegacyListIdToListIdBatchWithHttpInfo(requestBody: Array<string>, _options?: Configuration): Promise<HttpInfo<PublicBatchMigrationMapping>> {
        const result = this.api.translateLegacyListIdToListIdBatchWithHttpInfo(requestBody, _options);
        return result.toPromise();
    }

    /**
     * This API allows translation of a batch of legacy list id\'s to list id\'s. This allows for a maximum of 10,000 id\'s. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id in Batch
     * @param requestBody 
     */
    public translateLegacyListIdToListIdBatch(requestBody: Array<string>, _options?: Configuration): Promise<PublicBatchMigrationMapping> {
        const result = this.api.translateLegacyListIdToListIdBatch(requestBody, _options);
        return result.toPromise();
    }


}



import { ObservableMembershipsApi } from './ObservableAPI';

import { MembershipsApiRequestFactory, MembershipsApiResponseProcessor} from "../apis/MembershipsApi";
export class PromiseMembershipsApi {
    private api: ObservableMembershipsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MembershipsApiRequestFactory,
        responseProcessor?: MembershipsApiResponseProcessor
    ) {
        this.api = new ObservableMembershipsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add the records provided to the list. Records that do not exist or that are already members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add Records to a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param requestBody 
     */
    public addWithHttpInfo(listId: string, requestBody: Array<string>, _options?: Configuration): Promise<HttpInfo<MembershipsUpdateResponse>> {
        const result = this.api.addWithHttpInfo(listId, requestBody, _options);
        return result.toPromise();
    }

    /**
     * Add the records provided to the list. Records that do not exist or that are already members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add Records to a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param requestBody 
     */
    public add(listId: string, requestBody: Array<string>, _options?: Configuration): Promise<MembershipsUpdateResponse> {
        const result = this.api.add(listId, requestBody, _options);
        return result.toPromise();
    }

    /**
     * Add all of the records from a *source list* (specified by the `sourceListId`) to a *destination list* (specified by the `listId`). Records that are already members of the *destination list* will be ignored. The *destination* and *source list* IDs must be different. The *destination* and *source lists* must contain records of the same type (e.g. contacts, companies, etc.).  This endpoint only works for *destination lists* that have a `processingType` of `MANUAL` or `SNAPSHOT`. The *source list* can have any `processingType`.  This endpoint only supports a `sourceListId` for lists with less than 100,000 memberships.
     * Add All Records from a Source List to a Destination List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; *destination list*, which the *source list* records are added to.
     * @param sourceListId The **ILS ID** of the *source list* to grab the records from, which are then added to the *destination list*.
     */
    public addAllFromListWithHttpInfo(listId: string, sourceListId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.addAllFromListWithHttpInfo(listId, sourceListId, _options);
        return result.toPromise();
    }

    /**
     * Add all of the records from a *source list* (specified by the `sourceListId`) to a *destination list* (specified by the `listId`). Records that are already members of the *destination list* will be ignored. The *destination* and *source list* IDs must be different. The *destination* and *source lists* must contain records of the same type (e.g. contacts, companies, etc.).  This endpoint only works for *destination lists* that have a `processingType` of `MANUAL` or `SNAPSHOT`. The *source list* can have any `processingType`.  This endpoint only supports a `sourceListId` for lists with less than 100,000 memberships.
     * Add All Records from a Source List to a Destination List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; *destination list*, which the *source list* records are added to.
     * @param sourceListId The **ILS ID** of the *source list* to grab the records from, which are then added to the *destination list*.
     */
    public addAllFromList(listId: string, sourceListId: string, _options?: Configuration): Promise<void> {
        const result = this.api.addAllFromList(listId, sourceListId, _options);
        return result.toPromise();
    }

    /**
     * Add and/or remove records that have already been created in the system to and/or from a list.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add and/or Remove Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param membershipChangeRequest 
     */
    public addAndRemoveWithHttpInfo(listId: string, membershipChangeRequest: MembershipChangeRequest, _options?: Configuration): Promise<HttpInfo<MembershipsUpdateResponse>> {
        const result = this.api.addAndRemoveWithHttpInfo(listId, membershipChangeRequest, _options);
        return result.toPromise();
    }

    /**
     * Add and/or remove records that have already been created in the system to and/or from a list.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add and/or Remove Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param membershipChangeRequest 
     */
    public addAndRemove(listId: string, membershipChangeRequest: MembershipChangeRequest, _options?: Configuration): Promise<MembershipsUpdateResponse> {
        const result = this.api.addAndRemove(listId, membershipChangeRequest, _options);
        return result.toPromise();
    }

    /**
     * For given record provide lists this record is member of.
     * Get lists record is member of
     * @param objectTypeId Object type id of the record
     * @param recordId Id of the record
     */
    public getListsWithHttpInfo(objectTypeId: string, recordId: string, _options?: Configuration): Promise<HttpInfo<ApiCollectionResponseRecordListMembershipNoPaging>> {
        const result = this.api.getListsWithHttpInfo(objectTypeId, recordId, _options);
        return result.toPromise();
    }

    /**
     * For given record provide lists this record is member of.
     * Get lists record is member of
     * @param objectTypeId Object type id of the record
     * @param recordId Id of the record
     */
    public getLists(objectTypeId: string, recordId: string, _options?: Configuration): Promise<ApiCollectionResponseRecordListMembershipNoPaging> {
        const result = this.api.getLists(objectTypeId, recordId, _options);
        return result.toPromise();
    }

    /**
     * Fetch the memberships of a list in order sorted by the `recordId` of the records in the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by ID
     * @param listId The **ILS ID** of the list.
     * @param after The paging offset token for the page that comes &#x60;after&#x60; the previously requested records.  If provided, then the records in the response will be the records following the offset, sorted in *ascending* order. Takes precedence over the &#x60;before&#x60; offset.
     * @param before The paging offset token for the page that comes &#x60;before&#x60; the previously requested records.  If provided, then the records in the response will be the records preceding the offset, sorted in *descending* order.
     * @param limit The number of records to return in the response. The maximum &#x60;limit&#x60; is 250.
     */
    public getPageWithHttpInfo(listId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<ApiCollectionResponseJoinTimeAndRecordId>> {
        const result = this.api.getPageWithHttpInfo(listId, after, before, limit, _options);
        return result.toPromise();
    }

    /**
     * Fetch the memberships of a list in order sorted by the `recordId` of the records in the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by ID
     * @param listId The **ILS ID** of the list.
     * @param after The paging offset token for the page that comes &#x60;after&#x60; the previously requested records.  If provided, then the records in the response will be the records following the offset, sorted in *ascending* order. Takes precedence over the &#x60;before&#x60; offset.
     * @param before The paging offset token for the page that comes &#x60;before&#x60; the previously requested records.  If provided, then the records in the response will be the records preceding the offset, sorted in *descending* order.
     * @param limit The number of records to return in the response. The maximum &#x60;limit&#x60; is 250.
     */
    public getPage(listId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Promise<ApiCollectionResponseJoinTimeAndRecordId> {
        const result = this.api.getPage(listId, after, before, limit, _options);
        return result.toPromise();
    }

    /**
     * Fetch the memberships of a list in order sorted by the time the records were added to the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by Added to List Date
     * @param listId The **ILS ID** of the list.
     * @param after The paging offset token for the page that comes &#x60;after&#x60; the previously requested records.  If provided, then the records in the response will be the records following the offset, sorted in *ascending* order. Takes precedence over the &#x60;before&#x60; offset.
     * @param before The paging offset token for the page that comes &#x60;before&#x60; the previously requested records.  If provided, then the records in the response will be the records preceding the offset, sorted in *descending* order.
     * @param limit The number of records to return in the response. The maximum &#x60;limit&#x60; is 250.
     */
    public getPageOrderedByAddedToListDateWithHttpInfo(listId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Promise<HttpInfo<ApiCollectionResponseJoinTimeAndRecordId>> {
        const result = this.api.getPageOrderedByAddedToListDateWithHttpInfo(listId, after, before, limit, _options);
        return result.toPromise();
    }

    /**
     * Fetch the memberships of a list in order sorted by the time the records were added to the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by Added to List Date
     * @param listId The **ILS ID** of the list.
     * @param after The paging offset token for the page that comes &#x60;after&#x60; the previously requested records.  If provided, then the records in the response will be the records following the offset, sorted in *ascending* order. Takes precedence over the &#x60;before&#x60; offset.
     * @param before The paging offset token for the page that comes &#x60;before&#x60; the previously requested records.  If provided, then the records in the response will be the records preceding the offset, sorted in *descending* order.
     * @param limit The number of records to return in the response. The maximum &#x60;limit&#x60; is 250.
     */
    public getPageOrderedByAddedToListDate(listId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Promise<ApiCollectionResponseJoinTimeAndRecordId> {
        const result = this.api.getPageOrderedByAddedToListDate(listId, after, before, limit, _options);
        return result.toPromise();
    }

    /**
     * Remove the records provided from the list. Records that do not exist or that are not members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Remove Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param requestBody 
     */
    public removeWithHttpInfo(listId: string, requestBody: Array<string>, _options?: Configuration): Promise<HttpInfo<MembershipsUpdateResponse>> {
        const result = this.api.removeWithHttpInfo(listId, requestBody, _options);
        return result.toPromise();
    }

    /**
     * Remove the records provided from the list. Records that do not exist or that are not members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Remove Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param requestBody 
     */
    public remove(listId: string, requestBody: Array<string>, _options?: Configuration): Promise<MembershipsUpdateResponse> {
        const result = this.api.remove(listId, requestBody, _options);
        return result.toPromise();
    }

    /**
     * Remove **all** of the records from a list. ***Note:*** *The list is not deleted.*  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.  This endpoint only supports lists that have less than 100,000 memberships.
     * Delete All Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     */
    public removeAllWithHttpInfo(listId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.removeAllWithHttpInfo(listId, _options);
        return result.toPromise();
    }

    /**
     * Remove **all** of the records from a list. ***Note:*** *The list is not deleted.*  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.  This endpoint only supports lists that have less than 100,000 memberships.
     * Delete All Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     */
    public removeAll(listId: string, _options?: Configuration): Promise<void> {
        const result = this.api.removeAll(listId, _options);
        return result.toPromise();
    }


}



