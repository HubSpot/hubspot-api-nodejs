import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

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
import { PublicListConversionResponse } from '../models/PublicListConversionResponse';
import { PublicListConversionTime } from '../models/PublicListConversionTime';
import { PublicMigrationMapping } from '../models/PublicMigrationMapping';

import { ObservableFoldersApi } from "./ObservableAPI";
import { FoldersApiRequestFactory, FoldersApiResponseProcessor} from "../apis/FoldersApi";

export interface FoldersApiCreateRequest {
    /**
     * 
     * @type ListFolderCreateRequest
     * @memberof FoldersApicreate
     */
    listFolderCreateRequest: ListFolderCreateRequest
}

export interface FoldersApiGetAllRequest {
    /**
     * The Id of the folder to retrieve.
     * Defaults to: &#39;0&#39;
     * @type string
     * @memberof FoldersApigetAll
     */
    folderId?: string
}

export interface FoldersApiMoveRequest {
    /**
     * The ID of the folder to move
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApimove
     */
    folderId: string
    /**
     * The ID for the target parent folder.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApimove
     */
    newParentFolderId: string
}

export interface FoldersApiMoveListRequest {
    /**
     * 
     * @type ListMoveRequest
     * @memberof FoldersApimoveList
     */
    listMoveRequest: ListMoveRequest
}

export interface FoldersApiRemoveRequest {
    /**
     * The ID of the folder to delete
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApiremove
     */
    folderId: string
}

export interface FoldersApiRenameRequest {
    /**
     * The ID of the folder to rename
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApirename
     */
    folderId: string
    /**
     * The new name of the folder.
     * Defaults to: undefined
     * @type string
     * @memberof FoldersApirename
     */
    newFolderName?: string
}

export class ObjectFoldersApi {
    private api: ObservableFoldersApi

    public constructor(configuration: Configuration, requestFactory?: FoldersApiRequestFactory, responseProcessor?: FoldersApiResponseProcessor) {
        this.api = new ObservableFoldersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a folder with the given information.
     * Creates a folder
     * @param param the request object
     */
    public createWithHttpInfo(param: FoldersApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListFolderCreateResponse>> {
        return this.api.createWithHttpInfo(param.listFolderCreateRequest,  options).toPromise();
    }

    /**
     * Creates a folder with the given information.
     * Creates a folder
     * @param param the request object
     */
    public create(param: FoldersApiCreateRequest, options?: ConfigurationOptions): Promise<ListFolderCreateResponse> {
        return this.api.create(param.listFolderCreateRequest,  options).toPromise();
    }

    /**
     * Retrieves a folder and recursively includes all folders via the childNodes attribute.  The child lists field will be empty in all child nodes. Only the folder retrieved will include the child lists in that folder.
     * Retrieves a folder.
     * @param param the request object
     */
    public getAllWithHttpInfo(param: FoldersApiGetAllRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListFolderFetchResponse>> {
        return this.api.getAllWithHttpInfo(param.folderId,  options).toPromise();
    }

    /**
     * Retrieves a folder and recursively includes all folders via the childNodes attribute.  The child lists field will be empty in all child nodes. Only the folder retrieved will include the child lists in that folder.
     * Retrieves a folder.
     * @param param the request object
     */
    public getAll(param: FoldersApiGetAllRequest = {}, options?: ConfigurationOptions): Promise<ListFolderFetchResponse> {
        return this.api.getAll(param.folderId,  options).toPromise();
    }

    /**
     * This moves the folder from its current location to a new location. It updates the parent of this folder to the new Id given.
     * Moves a folder
     * @param param the request object
     */
    public moveWithHttpInfo(param: FoldersApiMoveRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListFolderFetchResponse>> {
        return this.api.moveWithHttpInfo(param.folderId, param.newParentFolderId,  options).toPromise();
    }

    /**
     * This moves the folder from its current location to a new location. It updates the parent of this folder to the new Id given.
     * Moves a folder
     * @param param the request object
     */
    public move(param: FoldersApiMoveRequest, options?: ConfigurationOptions): Promise<ListFolderFetchResponse> {
        return this.api.move(param.folderId, param.newParentFolderId,  options).toPromise();
    }

    /**
     * Given a list and a folder, the list will be moved to that folder.
     * Moves a list to a given folder
     * @param param the request object
     */
    public moveListWithHttpInfo(param: FoldersApiMoveListRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.moveListWithHttpInfo(param.listMoveRequest,  options).toPromise();
    }

    /**
     * Given a list and a folder, the list will be moved to that folder.
     * Moves a list to a given folder
     * @param param the request object
     */
    public moveList(param: FoldersApiMoveListRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.moveList(param.listMoveRequest,  options).toPromise();
    }

    /**
     * Deletes the folder with the given Id.
     * Deletes a folder
     * @param param the request object
     */
    public removeWithHttpInfo(param: FoldersApiRemoveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.removeWithHttpInfo(param.folderId,  options).toPromise();
    }

    /**
     * Deletes the folder with the given Id.
     * Deletes a folder
     * @param param the request object
     */
    public remove(param: FoldersApiRemoveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.remove(param.folderId,  options).toPromise();
    }

    /**
     * Renames the given folderId with a new name.
     * Rename a folder
     * @param param the request object
     */
    public renameWithHttpInfo(param: FoldersApiRenameRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListFolderFetchResponse>> {
        return this.api.renameWithHttpInfo(param.folderId, param.newFolderName,  options).toPromise();
    }

    /**
     * Renames the given folderId with a new name.
     * Rename a folder
     * @param param the request object
     */
    public rename(param: FoldersApiRenameRequest, options?: ConfigurationOptions): Promise<ListFolderFetchResponse> {
        return this.api.rename(param.folderId, param.newFolderName,  options).toPromise();
    }

}

import { ObservableListsApi } from "./ObservableAPI";
import { ListsApiRequestFactory, ListsApiResponseProcessor} from "../apis/ListsApi";

export interface ListsApiCancelConversionRequest {
    /**
     * The ID of the list that you want to cancel the conversion for.
     * Defaults to: undefined
     * @type string
     * @memberof ListsApicancelConversion
     */
    listId: string
}

export interface ListsApiCreateRequest {
    /**
     * 
     * @type ListCreateRequest
     * @memberof ListsApicreate
     */
    listCreateRequest: ListCreateRequest
}

export interface ListsApiDoSearchRequest {
    /**
     * The IDs of the records to add and/or remove from the list.
     * @type ListSearchRequest
     * @memberof ListsApidoSearch
     */
    listSearchRequest: ListSearchRequest
}

export interface ListsApiGetAllRequest {
    /**
     * The **ILS IDs** of the lists to fetch.
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof ListsApigetAll
     */
    listIds?: Array<string>
    /**
     * A flag indicating whether or not the response object list definitions should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     * Defaults to: false
     * @type boolean
     * @memberof ListsApigetAll
     */
    includeFilters?: boolean
}

export interface ListsApiGetByIdRequest {
    /**
     * The **ILS ID** of the list to fetch.
     * Defaults to: undefined
     * @type string
     * @memberof ListsApigetById
     */
    listId: string
    /**
     * A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     * Defaults to: false
     * @type boolean
     * @memberof ListsApigetById
     */
    includeFilters?: boolean
}

export interface ListsApiGetByNameRequest {
    /**
     * The name of the list to fetch. This is **not** case sensitive.
     * Defaults to: undefined
     * @type string
     * @memberof ListsApigetByName
     */
    listName: string
    /**
     * The object type ID of the object types stored by the list to fetch. For example, &#x60;0-1&#x60; for a &#x60;CONTACT&#x60; list.
     * Defaults to: undefined
     * @type string
     * @memberof ListsApigetByName
     */
    objectTypeId: string
    /**
     * A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     * Defaults to: false
     * @type boolean
     * @memberof ListsApigetByName
     */
    includeFilters?: boolean
}

export interface ListsApiGetConversionDetailsRequest {
    /**
     * The ID of the list to schedule the conversion for.
     * Defaults to: undefined
     * @type string
     * @memberof ListsApigetConversionDetails
     */
    listId: string
}

export interface ListsApiRemoveRequest {
    /**
     * The **ILS ID** of the list to delete.
     * Defaults to: undefined
     * @type string
     * @memberof ListsApiremove
     */
    listId: string
}

export interface ListsApiRestoreRequest {
    /**
     * The **ILS ID** of the list to restore.
     * Defaults to: undefined
     * @type string
     * @memberof ListsApirestore
     */
    listId: string
}

export interface ListsApiScheduleOrUpdateConversionRequest {
    /**
     * The ID of the list to schedule the conversion for.
     * Defaults to: undefined
     * @type string
     * @memberof ListsApischeduleOrUpdateConversion
     */
    listId: string
    /**
     * 
     * @type PublicListConversionTime
     * @memberof ListsApischeduleOrUpdateConversion
     */
    publicListConversionTime: PublicListConversionTime
}

export interface ListsApiUpdateListFiltersRequest {
    /**
     * The **ILS ID** of the list to update.
     * Defaults to: undefined
     * @type string
     * @memberof ListsApiupdateListFilters
     */
    listId: string
    /**
     * 
     * @type ListFilterUpdateRequest
     * @memberof ListsApiupdateListFilters
     */
    listFilterUpdateRequest: ListFilterUpdateRequest
    /**
     * A flag indicating whether or not the memberships added to the list as a result of the filter change should be enrolled in workflows that are relevant to this list.
     * Defaults to: false
     * @type boolean
     * @memberof ListsApiupdateListFilters
     */
    enrollObjectsInWorkflows?: boolean
}

export interface ListsApiUpdateNameRequest {
    /**
     * The **ILS ID** of the list to update.
     * Defaults to: undefined
     * @type string
     * @memberof ListsApiupdateName
     */
    listId: string
    /**
     * The name to update the list to.
     * Defaults to: undefined
     * @type string
     * @memberof ListsApiupdateName
     */
    listName?: string
    /**
     * A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     * Defaults to: false
     * @type boolean
     * @memberof ListsApiupdateName
     */
    includeFilters?: boolean
}

export class ObjectListsApi {
    private api: ObservableListsApi

    public constructor(configuration: Configuration, requestFactory?: ListsApiRequestFactory, responseProcessor?: ListsApiResponseProcessor) {
        this.api = new ObservableListsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete an existing scheduled conversion for a list.
     * Cancel the conversion of a list
     * @param param the request object
     */
    public cancelConversionWithHttpInfo(param: ListsApiCancelConversionRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.cancelConversionWithHttpInfo(param.listId,  options).toPromise();
    }

    /**
     * Delete an existing scheduled conversion for a list.
     * Cancel the conversion of a list
     * @param param the request object
     */
    public cancelConversion(param: ListsApiCancelConversionRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.cancelConversion(param.listId,  options).toPromise();
    }

    /**
     * Create a new list with the provided object list definition.
     * Create List
     * @param param the request object
     */
    public createWithHttpInfo(param: ListsApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListCreateResponse>> {
        return this.api.createWithHttpInfo(param.listCreateRequest,  options).toPromise();
    }

    /**
     * Create a new list with the provided object list definition.
     * Create List
     * @param param the request object
     */
    public create(param: ListsApiCreateRequest, options?: ConfigurationOptions): Promise<ListCreateResponse> {
        return this.api.create(param.listCreateRequest,  options).toPromise();
    }

    /**
     * Search lists by list name or page through all lists by providing an empty `query` value.
     * Search Lists
     * @param param the request object
     */
    public doSearchWithHttpInfo(param: ListsApiDoSearchRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListSearchResponse>> {
        return this.api.doSearchWithHttpInfo(param.listSearchRequest,  options).toPromise();
    }

    /**
     * Search lists by list name or page through all lists by providing an empty `query` value.
     * Search Lists
     * @param param the request object
     */
    public doSearch(param: ListsApiDoSearchRequest, options?: ConfigurationOptions): Promise<ListSearchResponse> {
        return this.api.doSearch(param.listSearchRequest,  options).toPromise();
    }

    /**
     * Fetch multiple lists in a single request by **ILS list ID**. The response will include the definitions of all lists that exist for the `listIds` provided.
     * Fetch Multiple Lists
     * @param param the request object
     */
    public getAllWithHttpInfo(param: ListsApiGetAllRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListsByIdResponse>> {
        return this.api.getAllWithHttpInfo(param.listIds, param.includeFilters,  options).toPromise();
    }

    /**
     * Fetch multiple lists in a single request by **ILS list ID**. The response will include the definitions of all lists that exist for the `listIds` provided.
     * Fetch Multiple Lists
     * @param param the request object
     */
    public getAll(param: ListsApiGetAllRequest = {}, options?: ConfigurationOptions): Promise<ListsByIdResponse> {
        return this.api.getAll(param.listIds, param.includeFilters,  options).toPromise();
    }

    /**
     * Fetch a single list by **ILS list ID**.
     * Fetch List by ID
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: ListsApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListFetchResponse>> {
        return this.api.getByIdWithHttpInfo(param.listId, param.includeFilters,  options).toPromise();
    }

    /**
     * Fetch a single list by **ILS list ID**.
     * Fetch List by ID
     * @param param the request object
     */
    public getById(param: ListsApiGetByIdRequest, options?: ConfigurationOptions): Promise<ListFetchResponse> {
        return this.api.getById(param.listId, param.includeFilters,  options).toPromise();
    }

    /**
     * Fetch a single list by list name and object type.
     * Fetch List by Name
     * @param param the request object
     */
    public getByNameWithHttpInfo(param: ListsApiGetByNameRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListFetchResponse>> {
        return this.api.getByNameWithHttpInfo(param.listName, param.objectTypeId, param.includeFilters,  options).toPromise();
    }

    /**
     * Fetch a single list by list name and object type.
     * Fetch List by Name
     * @param param the request object
     */
    public getByName(param: ListsApiGetByNameRequest, options?: ConfigurationOptions): Promise<ListFetchResponse> {
        return this.api.getByName(param.listName, param.objectTypeId, param.includeFilters,  options).toPromise();
    }

    /**
     * Retrieve the conversion details for a list. This can be used to check for an upcoming conversion, or to get the details of when a list was already converted.
     * Retrieve the conversion details for a list
     * @param param the request object
     */
    public getConversionDetailsWithHttpInfo(param: ListsApiGetConversionDetailsRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicListConversionResponse>> {
        return this.api.getConversionDetailsWithHttpInfo(param.listId,  options).toPromise();
    }

    /**
     * Retrieve the conversion details for a list. This can be used to check for an upcoming conversion, or to get the details of when a list was already converted.
     * Retrieve the conversion details for a list
     * @param param the request object
     */
    public getConversionDetails(param: ListsApiGetConversionDetailsRequest, options?: ConfigurationOptions): Promise<PublicListConversionResponse> {
        return this.api.getConversionDetails(param.listId,  options).toPromise();
    }

    /**
     * Delete a list by **ILS list ID**. Lists deleted through this endpoint can be restored up to 90-days following the delete. After 90-days, the list is purged and can no longer be restored.
     * Delete a List
     * @param param the request object
     */
    public removeWithHttpInfo(param: ListsApiRemoveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.removeWithHttpInfo(param.listId,  options).toPromise();
    }

    /**
     * Delete a list by **ILS list ID**. Lists deleted through this endpoint can be restored up to 90-days following the delete. After 90-days, the list is purged and can no longer be restored.
     * Delete a List
     * @param param the request object
     */
    public remove(param: ListsApiRemoveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.remove(param.listId,  options).toPromise();
    }

    /**
     * Restore a previously deleted list by **ILS list ID**. Deleted lists are eligible to be restored up-to 90-days after the list has been deleted.
     * Restore a List
     * @param param the request object
     */
    public restoreWithHttpInfo(param: ListsApiRestoreRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.restoreWithHttpInfo(param.listId,  options).toPromise();
    }

    /**
     * Restore a previously deleted list by **ILS list ID**. Deleted lists are eligible to be restored up-to 90-days after the list has been deleted.
     * Restore a List
     * @param param the request object
     */
    public restore(param: ListsApiRestoreRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.restore(param.listId,  options).toPromise();
    }

    /**
     * Schedule the conversion of an active list into a static list, or update the already scheduled conversion. This can be scheduled for a specific date or based on activity.
     * Schedule or update the conversion of a list to static
     * @param param the request object
     */
    public scheduleOrUpdateConversionWithHttpInfo(param: ListsApiScheduleOrUpdateConversionRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicListConversionResponse>> {
        return this.api.scheduleOrUpdateConversionWithHttpInfo(param.listId, param.publicListConversionTime,  options).toPromise();
    }

    /**
     * Schedule the conversion of an active list into a static list, or update the already scheduled conversion. This can be scheduled for a specific date or based on activity.
     * Schedule or update the conversion of a list to static
     * @param param the request object
     */
    public scheduleOrUpdateConversion(param: ListsApiScheduleOrUpdateConversionRequest, options?: ConfigurationOptions): Promise<PublicListConversionResponse> {
        return this.api.scheduleOrUpdateConversion(param.listId, param.publicListConversionTime,  options).toPromise();
    }

    /**
     * Update the filter branch definition of a `DYNAMIC` list. Once updated, the list memberships will be re-evaluated and updated to match the new definition.
     * Update List Filter Definition
     * @param param the request object
     */
    public updateListFiltersWithHttpInfo(param: ListsApiUpdateListFiltersRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListUpdateResponse>> {
        return this.api.updateListFiltersWithHttpInfo(param.listId, param.listFilterUpdateRequest, param.enrollObjectsInWorkflows,  options).toPromise();
    }

    /**
     * Update the filter branch definition of a `DYNAMIC` list. Once updated, the list memberships will be re-evaluated and updated to match the new definition.
     * Update List Filter Definition
     * @param param the request object
     */
    public updateListFilters(param: ListsApiUpdateListFiltersRequest, options?: ConfigurationOptions): Promise<ListUpdateResponse> {
        return this.api.updateListFilters(param.listId, param.listFilterUpdateRequest, param.enrollObjectsInWorkflows,  options).toPromise();
    }

    /**
     * Update the name of a list. The name must be globally unique relative to all other public lists in the portal.
     * Update List Name
     * @param param the request object
     */
    public updateNameWithHttpInfo(param: ListsApiUpdateNameRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListUpdateResponse>> {
        return this.api.updateNameWithHttpInfo(param.listId, param.listName, param.includeFilters,  options).toPromise();
    }

    /**
     * Update the name of a list. The name must be globally unique relative to all other public lists in the portal.
     * Update List Name
     * @param param the request object
     */
    public updateName(param: ListsApiUpdateNameRequest, options?: ConfigurationOptions): Promise<ListUpdateResponse> {
        return this.api.updateName(param.listId, param.listName, param.includeFilters,  options).toPromise();
    }

}

import { ObservableMappingApi } from "./ObservableAPI";
import { MappingApiRequestFactory, MappingApiResponseProcessor} from "../apis/MappingApi";

export interface MappingApiTranslateLegacyListIdToListIdRequest {
    /**
     * The legacy list id from lists v1 API.
     * Defaults to: undefined
     * @type string
     * @memberof MappingApitranslateLegacyListIdToListId
     */
    legacyListId?: string
}

export interface MappingApiTranslateLegacyListIdToListIdBatchRequest {
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof MappingApitranslateLegacyListIdToListIdBatch
     */
    requestBody: Array<string>
}

export class ObjectMappingApi {
    private api: ObservableMappingApi

    public constructor(configuration: Configuration, requestFactory?: MappingApiRequestFactory, responseProcessor?: MappingApiResponseProcessor) {
        this.api = new ObservableMappingApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This API allows translation of legacy list id to list id. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id
     * @param param the request object
     */
    public translateLegacyListIdToListIdWithHttpInfo(param: MappingApiTranslateLegacyListIdToListIdRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PublicMigrationMapping>> {
        return this.api.translateLegacyListIdToListIdWithHttpInfo(param.legacyListId,  options).toPromise();
    }

    /**
     * This API allows translation of legacy list id to list id. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id
     * @param param the request object
     */
    public translateLegacyListIdToListId(param: MappingApiTranslateLegacyListIdToListIdRequest = {}, options?: ConfigurationOptions): Promise<PublicMigrationMapping> {
        return this.api.translateLegacyListIdToListId(param.legacyListId,  options).toPromise();
    }

    /**
     * This API allows translation of a batch of legacy list id\'s to list id\'s. This allows for a maximum of 10,000 id\'s. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id in Batch
     * @param param the request object
     */
    public translateLegacyListIdToListIdBatchWithHttpInfo(param: MappingApiTranslateLegacyListIdToListIdBatchRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicBatchMigrationMapping>> {
        return this.api.translateLegacyListIdToListIdBatchWithHttpInfo(param.requestBody,  options).toPromise();
    }

    /**
     * This API allows translation of a batch of legacy list id\'s to list id\'s. This allows for a maximum of 10,000 id\'s. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id in Batch
     * @param param the request object
     */
    public translateLegacyListIdToListIdBatch(param: MappingApiTranslateLegacyListIdToListIdBatchRequest, options?: ConfigurationOptions): Promise<PublicBatchMigrationMapping> {
        return this.api.translateLegacyListIdToListIdBatch(param.requestBody,  options).toPromise();
    }

}

import { ObservableMembershipsApi } from "./ObservableAPI";
import { MembershipsApiRequestFactory, MembershipsApiResponseProcessor} from "../apis/MembershipsApi";

export interface MembershipsApiAddRequest {
    /**
     * The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * Defaults to: undefined
     * @type string
     * @memberof MembershipsApiadd
     */
    listId: string
    /**
     * The IDs of the records to add to the list.
     * @type Array&lt;string&gt;
     * @memberof MembershipsApiadd
     */
    requestBody: Array<string>
}

export interface MembershipsApiAddAllFromListRequest {
    /**
     * The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; *destination list*, which the *source list* records are added to.
     * Defaults to: undefined
     * @type string
     * @memberof MembershipsApiaddAllFromList
     */
    listId: string
    /**
     * The **ILS ID** of the *source list* to grab the records from, which are then added to the *destination list*.
     * Defaults to: undefined
     * @type string
     * @memberof MembershipsApiaddAllFromList
     */
    sourceListId: string
}

export interface MembershipsApiAddAndRemoveRequest {
    /**
     * The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * Defaults to: undefined
     * @type string
     * @memberof MembershipsApiaddAndRemove
     */
    listId: string
    /**
     * The IDs of the records to add and/or remove from the list.
     * @type MembershipChangeRequest
     * @memberof MembershipsApiaddAndRemove
     */
    membershipChangeRequest: MembershipChangeRequest
}

export interface MembershipsApiGetListsRequest {
    /**
     * Object type id of the record
     * Defaults to: undefined
     * @type string
     * @memberof MembershipsApigetLists
     */
    objectTypeId: string
    /**
     * Id of the record
     * Defaults to: undefined
     * @type string
     * @memberof MembershipsApigetLists
     */
    recordId: string
}

export interface MembershipsApiGetPageRequest {
    /**
     * The **ILS ID** of the list.
     * Defaults to: undefined
     * @type string
     * @memberof MembershipsApigetPage
     */
    listId: string
    /**
     * The paging offset token for the page that comes &#x60;after&#x60; the previously requested records.  If provided, then the records in the response will be the records following the offset, sorted in *ascending* order. Takes precedence over the &#x60;before&#x60; offset.
     * Defaults to: undefined
     * @type string
     * @memberof MembershipsApigetPage
     */
    after?: string
    /**
     * The paging offset token for the page that comes &#x60;before&#x60; the previously requested records.  If provided, then the records in the response will be the records preceding the offset, sorted in *descending* order.
     * Defaults to: undefined
     * @type string
     * @memberof MembershipsApigetPage
     */
    before?: string
    /**
     * The number of records to return in the response. The maximum &#x60;limit&#x60; is 250.
     * Defaults to: 100
     * @type number
     * @memberof MembershipsApigetPage
     */
    limit?: number
}

export interface MembershipsApiGetPageOrderedByAddedToListDateRequest {
    /**
     * The **ILS ID** of the list.
     * Defaults to: undefined
     * @type string
     * @memberof MembershipsApigetPageOrderedByAddedToListDate
     */
    listId: string
    /**
     * The paging offset token for the page that comes &#x60;after&#x60; the previously requested records.  If provided, then the records in the response will be the records following the offset, sorted in *ascending* order. Takes precedence over the &#x60;before&#x60; offset.
     * Defaults to: undefined
     * @type string
     * @memberof MembershipsApigetPageOrderedByAddedToListDate
     */
    after?: string
    /**
     * The paging offset token for the page that comes &#x60;before&#x60; the previously requested records.  If provided, then the records in the response will be the records preceding the offset, sorted in *descending* order.
     * Defaults to: undefined
     * @type string
     * @memberof MembershipsApigetPageOrderedByAddedToListDate
     */
    before?: string
    /**
     * The number of records to return in the response. The maximum &#x60;limit&#x60; is 250.
     * Defaults to: 100
     * @type number
     * @memberof MembershipsApigetPageOrderedByAddedToListDate
     */
    limit?: number
}

export interface MembershipsApiRemoveRequest {
    /**
     * The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * Defaults to: undefined
     * @type string
     * @memberof MembershipsApiremove
     */
    listId: string
    /**
     * The IDs of the records to remove from the list.
     * @type Array&lt;string&gt;
     * @memberof MembershipsApiremove
     */
    requestBody: Array<string>
}

export interface MembershipsApiRemoveAllRequest {
    /**
     * The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * Defaults to: undefined
     * @type string
     * @memberof MembershipsApiremoveAll
     */
    listId: string
}

export class ObjectMembershipsApi {
    private api: ObservableMembershipsApi

    public constructor(configuration: Configuration, requestFactory?: MembershipsApiRequestFactory, responseProcessor?: MembershipsApiResponseProcessor) {
        this.api = new ObservableMembershipsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add the records provided to the list. Records that do not exist or that are already members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add Records to a List
     * @param param the request object
     */
    public addWithHttpInfo(param: MembershipsApiAddRequest, options?: ConfigurationOptions): Promise<HttpInfo<MembershipsUpdateResponse>> {
        return this.api.addWithHttpInfo(param.listId, param.requestBody,  options).toPromise();
    }

    /**
     * Add the records provided to the list. Records that do not exist or that are already members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add Records to a List
     * @param param the request object
     */
    public add(param: MembershipsApiAddRequest, options?: ConfigurationOptions): Promise<MembershipsUpdateResponse> {
        return this.api.add(param.listId, param.requestBody,  options).toPromise();
    }

    /**
     * Add all of the records from a *source list* (specified by the `sourceListId`) to a *destination list* (specified by the `listId`). Records that are already members of the *destination list* will be ignored. The *destination* and *source list* IDs must be different. The *destination* and *source lists* must contain records of the same type (e.g. contacts, companies, etc.).  This endpoint only works for *destination lists* that have a `processingType` of `MANUAL` or `SNAPSHOT`. The *source list* can have any `processingType`.  This endpoint only supports a `sourceListId` for lists with less than 100,000 memberships.
     * Add All Records from a Source List to a Destination List
     * @param param the request object
     */
    public addAllFromListWithHttpInfo(param: MembershipsApiAddAllFromListRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.addAllFromListWithHttpInfo(param.listId, param.sourceListId,  options).toPromise();
    }

    /**
     * Add all of the records from a *source list* (specified by the `sourceListId`) to a *destination list* (specified by the `listId`). Records that are already members of the *destination list* will be ignored. The *destination* and *source list* IDs must be different. The *destination* and *source lists* must contain records of the same type (e.g. contacts, companies, etc.).  This endpoint only works for *destination lists* that have a `processingType` of `MANUAL` or `SNAPSHOT`. The *source list* can have any `processingType`.  This endpoint only supports a `sourceListId` for lists with less than 100,000 memberships.
     * Add All Records from a Source List to a Destination List
     * @param param the request object
     */
    public addAllFromList(param: MembershipsApiAddAllFromListRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.addAllFromList(param.listId, param.sourceListId,  options).toPromise();
    }

    /**
     * Add and/or remove records that have already been created in the system to and/or from a list.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add and/or Remove Records from a List
     * @param param the request object
     */
    public addAndRemoveWithHttpInfo(param: MembershipsApiAddAndRemoveRequest, options?: ConfigurationOptions): Promise<HttpInfo<MembershipsUpdateResponse>> {
        return this.api.addAndRemoveWithHttpInfo(param.listId, param.membershipChangeRequest,  options).toPromise();
    }

    /**
     * Add and/or remove records that have already been created in the system to and/or from a list.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add and/or Remove Records from a List
     * @param param the request object
     */
    public addAndRemove(param: MembershipsApiAddAndRemoveRequest, options?: ConfigurationOptions): Promise<MembershipsUpdateResponse> {
        return this.api.addAndRemove(param.listId, param.membershipChangeRequest,  options).toPromise();
    }

    /**
     * For given record provide lists this record is member of.
     * Get lists record is member of
     * @param param the request object
     */
    public getListsWithHttpInfo(param: MembershipsApiGetListsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiCollectionResponseRecordListMembershipNoPaging>> {
        return this.api.getListsWithHttpInfo(param.objectTypeId, param.recordId,  options).toPromise();
    }

    /**
     * For given record provide lists this record is member of.
     * Get lists record is member of
     * @param param the request object
     */
    public getLists(param: MembershipsApiGetListsRequest, options?: ConfigurationOptions): Promise<ApiCollectionResponseRecordListMembershipNoPaging> {
        return this.api.getLists(param.objectTypeId, param.recordId,  options).toPromise();
    }

    /**
     * Fetch the memberships of a list in order sorted by the `recordId` of the records in the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by ID
     * @param param the request object
     */
    public getPageWithHttpInfo(param: MembershipsApiGetPageRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiCollectionResponseJoinTimeAndRecordId>> {
        return this.api.getPageWithHttpInfo(param.listId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Fetch the memberships of a list in order sorted by the `recordId` of the records in the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by ID
     * @param param the request object
     */
    public getPage(param: MembershipsApiGetPageRequest, options?: ConfigurationOptions): Promise<ApiCollectionResponseJoinTimeAndRecordId> {
        return this.api.getPage(param.listId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Fetch the memberships of a list in order sorted by the time the records were added to the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by Added to List Date
     * @param param the request object
     */
    public getPageOrderedByAddedToListDateWithHttpInfo(param: MembershipsApiGetPageOrderedByAddedToListDateRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiCollectionResponseJoinTimeAndRecordId>> {
        return this.api.getPageOrderedByAddedToListDateWithHttpInfo(param.listId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Fetch the memberships of a list in order sorted by the time the records were added to the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by Added to List Date
     * @param param the request object
     */
    public getPageOrderedByAddedToListDate(param: MembershipsApiGetPageOrderedByAddedToListDateRequest, options?: ConfigurationOptions): Promise<ApiCollectionResponseJoinTimeAndRecordId> {
        return this.api.getPageOrderedByAddedToListDate(param.listId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Remove the records provided from the list. Records that do not exist or that are not members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Remove Records from a List
     * @param param the request object
     */
    public removeWithHttpInfo(param: MembershipsApiRemoveRequest, options?: ConfigurationOptions): Promise<HttpInfo<MembershipsUpdateResponse>> {
        return this.api.removeWithHttpInfo(param.listId, param.requestBody,  options).toPromise();
    }

    /**
     * Remove the records provided from the list. Records that do not exist or that are not members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Remove Records from a List
     * @param param the request object
     */
    public remove(param: MembershipsApiRemoveRequest, options?: ConfigurationOptions): Promise<MembershipsUpdateResponse> {
        return this.api.remove(param.listId, param.requestBody,  options).toPromise();
    }

    /**
     * Remove **all** of the records from a list. ***Note:*** *The list is not deleted.*  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.  This endpoint only supports lists that have less than 100,000 memberships.
     * Delete All Records from a List
     * @param param the request object
     */
    public removeAllWithHttpInfo(param: MembershipsApiRemoveAllRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.removeAllWithHttpInfo(param.listId,  options).toPromise();
    }

    /**
     * Remove **all** of the records from a list. ***Note:*** *The list is not deleted.*  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.  This endpoint only supports lists that have less than 100,000 memberships.
     * Delete All Records from a List
     * @param param the request object
     */
    public removeAll(param: MembershipsApiRemoveAllRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.removeAll(param.listId,  options).toPromise();
    }

}
