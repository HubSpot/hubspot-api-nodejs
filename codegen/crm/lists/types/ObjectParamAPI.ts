import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

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

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiCrmV3ListsRequest {
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof BasicApicrmV3Lists
     */
    includeFilters?: boolean
    /**
     * 
     * Defaults to: undefined
     * @type Array&lt;string&gt;
     * @memberof BasicApicrmV3Lists
     */
    listIds?: Array<string>
}

export interface BasicApiCrmV3ListsFoldersRequest {
    /**
     * The Id of the folder to retrieve.
     * Defaults to: &#39;0&#39;
     * @type string
     * @memberof BasicApicrmV3ListsFolders
     */
    folderId?: string
}

export interface BasicApiCrmV3ListsFoldersFolderIdRequest {
    /**
     * The ID of the folder to delete
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsFoldersFolderId
     */
    folderId: string
}

export interface BasicApiCrmV3ListsFoldersFolderIdMoveNewParentFolderIdRequest {
    /**
     * The ID of the folder to move
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsFoldersFolderIdMoveNewParentFolderId
     */
    folderId: string
    /**
     * The ID for the target parent folder.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsFoldersFolderIdMoveNewParentFolderId
     */
    newParentFolderId: string
}

export interface BasicApiCrmV3ListsFoldersFolderIdRenameRequest {
    /**
     * The ID of the folder to rename
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsFoldersFolderIdRename
     */
    folderId: string
    /**
     * The new name of the folder.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsFoldersFolderIdRename
     */
    newFolderName?: string
}

export interface BasicApiCrmV3ListsFoldersMoveListRequest {
    /**
     * 
     * @type ListMoveRequest
     * @memberof BasicApicrmV3ListsFoldersMoveList
     */
    listMoveRequest: ListMoveRequest
}

export interface BasicApiCrmV3ListsFolders0Request {
    /**
     * 
     * @type ListFolderCreateRequest
     * @memberof BasicApicrmV3ListsFolders_1
     */
    listFolderCreateRequest: ListFolderCreateRequest
}

export interface BasicApiCrmV3ListsIdmappingRequest {
    /**
     * The legacy list id from lists v1 API.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsIdmapping
     */
    legacyListId?: string
}

export interface BasicApiCrmV3ListsIdmapping0Request {
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof BasicApicrmV3ListsIdmapping_2
     */
    requestBody: Array<string>
}

export interface BasicApiCrmV3ListsListIdRequest {
    /**
     * The **ILS ID** of the list to fetch.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsListId
     */
    listId: string
    /**
     * A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     * Defaults to: false
     * @type boolean
     * @memberof BasicApicrmV3ListsListId
     */
    includeFilters?: boolean
}

export interface BasicApiCrmV3ListsListIdMembershipsRequest {
    /**
     * The **ILS ID** of the list.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsListIdMemberships
     */
    listId: string
    /**
     * The paging offset token for the page that comes &#x60;after&#x60; the previously requested records.  If provided, then the records in the response will be the records following the offset, sorted in *ascending* order. Takes precedence over the &#x60;before&#x60; offset.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsListIdMemberships
     */
    after?: string
    /**
     * The paging offset token for the page that comes &#x60;before&#x60; the previously requested records.  If provided, then the records in the response will be the records preceding the offset, sorted in *descending* order.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsListIdMemberships
     */
    before?: string
    /**
     * The number of records to return in the response. The maximum &#x60;limit&#x60; is 250.
     * Defaults to: 100
     * @type number
     * @memberof BasicApicrmV3ListsListIdMemberships
     */
    limit?: number
}

export interface BasicApiCrmV3ListsListIdMembershipsAddRequest {
    /**
     * The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsListIdMembershipsAdd
     */
    listId: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof BasicApicrmV3ListsListIdMembershipsAdd
     */
    requestBody: Array<string>
}

export interface BasicApiCrmV3ListsListIdMembershipsAddAndRemoveRequest {
    /**
     * The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsListIdMembershipsAddAndRemove
     */
    listId: string
    /**
     * 
     * @type MembershipChangeRequest
     * @memberof BasicApicrmV3ListsListIdMembershipsAddAndRemove
     */
    membershipChangeRequest: MembershipChangeRequest
}

export interface BasicApiCrmV3ListsListIdMembershipsAddFromSourceListIdRequest {
    /**
     * The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; *destination list*, which the *source list* records are added to.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsListIdMembershipsAddFromSourceListId
     */
    listId: string
    /**
     * The **ILS ID** of the *source list* to grab the records from, which are then added to the *destination list*.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsListIdMembershipsAddFromSourceListId
     */
    sourceListId: string
}

export interface BasicApiCrmV3ListsListIdMembershipsJoinOrderRequest {
    /**
     * The **ILS ID** of the list.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsListIdMembershipsJoinOrder
     */
    listId: string
    /**
     * The paging offset token for the page that comes &#x60;after&#x60; the previously requested records.  If provided, then the records in the response will be the records following the offset, sorted in *ascending* order. Takes precedence over the &#x60;before&#x60; offset.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsListIdMembershipsJoinOrder
     */
    after?: string
    /**
     * The paging offset token for the page that comes &#x60;before&#x60; the previously requested records.  If provided, then the records in the response will be the records preceding the offset, sorted in *descending* order.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsListIdMembershipsJoinOrder
     */
    before?: string
    /**
     * The number of records to return in the response. The maximum &#x60;limit&#x60; is 250.
     * Defaults to: 100
     * @type number
     * @memberof BasicApicrmV3ListsListIdMembershipsJoinOrder
     */
    limit?: number
}

export interface BasicApiCrmV3ListsListIdMembershipsRemoveRequest {
    /**
     * The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsListIdMembershipsRemove
     */
    listId: string
    /**
     * 
     * @type Array&lt;string&gt;
     * @memberof BasicApicrmV3ListsListIdMembershipsRemove
     */
    requestBody: Array<string>
}

export interface BasicApiCrmV3ListsListIdMemberships0Request {
    /**
     * The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsListIdMemberships_3
     */
    listId: string
}

export interface BasicApiCrmV3ListsListIdRestoreRequest {
    /**
     * The **ILS ID** of the list to restore.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsListIdRestore
     */
    listId: string
}

export interface BasicApiCrmV3ListsListIdScheduleConversionRequest {
    /**
     * The ID of the list to schedule the conversion for.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsListIdScheduleConversion
     */
    listId: string
}

export interface BasicApiCrmV3ListsListIdScheduleConversion0Request {
    /**
     * The ID of the list to schedule the conversion for.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsListIdScheduleConversion_4
     */
    listId: string
    /**
     * 
     * @type PublicListConversionTime
     * @memberof BasicApicrmV3ListsListIdScheduleConversion_4
     */
    publicListConversionTime: PublicListConversionTime
}

export interface BasicApiCrmV3ListsListIdScheduleConversion1Request {
    /**
     * The ID of the list that you want to cancel the conversion for.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsListIdScheduleConversion_5
     */
    listId: string
}

export interface BasicApiCrmV3ListsListIdSizeAndEditsHistoryBetweenRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsListIdSizeAndEditsHistoryBetween
     */
    listId: string
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicrmV3ListsListIdSizeAndEditsHistoryBetween
     */
    endDate?: Date
    /**
     * 
     * Defaults to: undefined
     * @type Date
     * @memberof BasicApicrmV3ListsListIdSizeAndEditsHistoryBetween
     */
    startDate?: Date
}

export interface BasicApiCrmV3ListsListIdUpdateListFiltersRequest {
    /**
     * The **ILS ID** of the list to update.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsListIdUpdateListFilters
     */
    listId: string
    /**
     * 
     * @type ListFilterUpdateRequest
     * @memberof BasicApicrmV3ListsListIdUpdateListFilters
     */
    listFilterUpdateRequest: ListFilterUpdateRequest
    /**
     * A flag indicating whether or not the memberships added to the list as a result of the filter change should be enrolled in workflows that are relevant to this list.
     * Defaults to: false
     * @type boolean
     * @memberof BasicApicrmV3ListsListIdUpdateListFilters
     */
    enrollObjectsInWorkflows?: boolean
}

export interface BasicApiCrmV3ListsListIdUpdateListNameRequest {
    /**
     * The **ILS ID** of the list to update.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsListIdUpdateListName
     */
    listId: string
    /**
     * A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     * Defaults to: false
     * @type boolean
     * @memberof BasicApicrmV3ListsListIdUpdateListName
     */
    includeFilters?: boolean
    /**
     * The name to update the list to.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsListIdUpdateListName
     */
    listName?: string
}

export interface BasicApiCrmV3ListsListId0Request {
    /**
     * The **ILS ID** of the list to delete.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsListId_6
     */
    listId: string
}

export interface BasicApiCrmV3ListsObjectTypeIdObjectTypeIdNameListNameRequest {
    /**
     * The name of the list to fetch. This is **not** case sensitive.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsObjectTypeIdObjectTypeIdNameListName
     */
    listName: string
    /**
     * The object type ID of the object types stored by the list to fetch. For example, &#x60;0-1&#x60; for a &#x60;CONTACT&#x60; list.
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsObjectTypeIdObjectTypeIdNameListName
     */
    objectTypeId: string
    /**
     * A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     * Defaults to: false
     * @type boolean
     * @memberof BasicApicrmV3ListsObjectTypeIdObjectTypeIdNameListName
     */
    includeFilters?: boolean
}

export interface BasicApiCrmV3ListsRecordsObjectTypeIdRecordIdMembershipsRequest {
    /**
     * Object type id of the record
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsRecordsObjectTypeIdRecordIdMemberships
     */
    objectTypeId: string
    /**
     * Id of the record
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicrmV3ListsRecordsObjectTypeIdRecordIdMemberships
     */
    recordId: string
}

export interface BasicApiCrmV3Lists0Request {
    /**
     * 
     * @type ListCreateRequest
     * @memberof BasicApicrmV3Lists_7
     */
    listCreateRequest: ListCreateRequest
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public crmV3ListsWithHttpInfo(param: BasicApiCrmV3ListsRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListsByIdResponse>> {
        return this.api.crmV3ListsWithHttpInfo(param.includeFilters, param.listIds,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public crmV3Lists(param: BasicApiCrmV3ListsRequest = {}, options?: ConfigurationOptions): Promise<ListsByIdResponse> {
        return this.api.crmV3Lists(param.includeFilters, param.listIds,  options).toPromise();
    }

    /**
     * Retrieves a folder and recursively includes all folders via the childNodes attribute.  The child lists field will be empty in all child nodes. Only the folder retrieved will include the child lists in that folder.
     * Retrieves a folder.
     * @param param the request object
     */
    public crmV3ListsFoldersWithHttpInfo(param: BasicApiCrmV3ListsFoldersRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<ListFolderFetchResponse>> {
        return this.api.crmV3ListsFoldersWithHttpInfo(param.folderId,  options).toPromise();
    }

    /**
     * Retrieves a folder and recursively includes all folders via the childNodes attribute.  The child lists field will be empty in all child nodes. Only the folder retrieved will include the child lists in that folder.
     * Retrieves a folder.
     * @param param the request object
     */
    public crmV3ListsFolders(param: BasicApiCrmV3ListsFoldersRequest = {}, options?: ConfigurationOptions): Promise<ListFolderFetchResponse> {
        return this.api.crmV3ListsFolders(param.folderId,  options).toPromise();
    }

    /**
     * Deletes the folder with the given Id.
     * Deletes a folder
     * @param param the request object
     */
    public crmV3ListsFoldersFolderIdWithHttpInfo(param: BasicApiCrmV3ListsFoldersFolderIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.crmV3ListsFoldersFolderIdWithHttpInfo(param.folderId,  options).toPromise();
    }

    /**
     * Deletes the folder with the given Id.
     * Deletes a folder
     * @param param the request object
     */
    public crmV3ListsFoldersFolderId(param: BasicApiCrmV3ListsFoldersFolderIdRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.crmV3ListsFoldersFolderId(param.folderId,  options).toPromise();
    }

    /**
     * This moves the folder from its current location to a new location. It updates the parent of this folder to the new Id given.
     * Moves a folder
     * @param param the request object
     */
    public crmV3ListsFoldersFolderIdMoveNewParentFolderIdWithHttpInfo(param: BasicApiCrmV3ListsFoldersFolderIdMoveNewParentFolderIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListFolderFetchResponse>> {
        return this.api.crmV3ListsFoldersFolderIdMoveNewParentFolderIdWithHttpInfo(param.folderId, param.newParentFolderId,  options).toPromise();
    }

    /**
     * This moves the folder from its current location to a new location. It updates the parent of this folder to the new Id given.
     * Moves a folder
     * @param param the request object
     */
    public crmV3ListsFoldersFolderIdMoveNewParentFolderId(param: BasicApiCrmV3ListsFoldersFolderIdMoveNewParentFolderIdRequest, options?: ConfigurationOptions): Promise<ListFolderFetchResponse> {
        return this.api.crmV3ListsFoldersFolderIdMoveNewParentFolderId(param.folderId, param.newParentFolderId,  options).toPromise();
    }

    /**
     * Renames the given folderId with a new name.
     * Rename a folder
     * @param param the request object
     */
    public crmV3ListsFoldersFolderIdRenameWithHttpInfo(param: BasicApiCrmV3ListsFoldersFolderIdRenameRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListFolderFetchResponse>> {
        return this.api.crmV3ListsFoldersFolderIdRenameWithHttpInfo(param.folderId, param.newFolderName,  options).toPromise();
    }

    /**
     * Renames the given folderId with a new name.
     * Rename a folder
     * @param param the request object
     */
    public crmV3ListsFoldersFolderIdRename(param: BasicApiCrmV3ListsFoldersFolderIdRenameRequest, options?: ConfigurationOptions): Promise<ListFolderFetchResponse> {
        return this.api.crmV3ListsFoldersFolderIdRename(param.folderId, param.newFolderName,  options).toPromise();
    }

    /**
     * Given a list and a folder, the list will be moved to that folder.
     * Moves a list to a given folder
     * @param param the request object
     */
    public crmV3ListsFoldersMoveListWithHttpInfo(param: BasicApiCrmV3ListsFoldersMoveListRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.crmV3ListsFoldersMoveListWithHttpInfo(param.listMoveRequest,  options).toPromise();
    }

    /**
     * Given a list and a folder, the list will be moved to that folder.
     * Moves a list to a given folder
     * @param param the request object
     */
    public crmV3ListsFoldersMoveList(param: BasicApiCrmV3ListsFoldersMoveListRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.crmV3ListsFoldersMoveList(param.listMoveRequest,  options).toPromise();
    }

    /**
     * Creates a folder with the given information.
     * Creates a folder
     * @param param the request object
     */
    public crmV3ListsFolders_1WithHttpInfo(param: BasicApiCrmV3ListsFolders0Request, options?: ConfigurationOptions): Promise<HttpInfo<ListFolderCreateResponse>> {
        return this.api.crmV3ListsFolders_1WithHttpInfo(param.listFolderCreateRequest,  options).toPromise();
    }

    /**
     * Creates a folder with the given information.
     * Creates a folder
     * @param param the request object
     */
    public crmV3ListsFolders_1(param: BasicApiCrmV3ListsFolders0Request, options?: ConfigurationOptions): Promise<ListFolderCreateResponse> {
        return this.api.crmV3ListsFolders_1(param.listFolderCreateRequest,  options).toPromise();
    }

    /**
     * This API allows translation of legacy list id to list id. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id
     * @param param the request object
     */
    public crmV3ListsIdmappingWithHttpInfo(param: BasicApiCrmV3ListsIdmappingRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<PublicMigrationMapping>> {
        return this.api.crmV3ListsIdmappingWithHttpInfo(param.legacyListId,  options).toPromise();
    }

    /**
     * This API allows translation of legacy list id to list id. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id
     * @param param the request object
     */
    public crmV3ListsIdmapping(param: BasicApiCrmV3ListsIdmappingRequest = {}, options?: ConfigurationOptions): Promise<PublicMigrationMapping> {
        return this.api.crmV3ListsIdmapping(param.legacyListId,  options).toPromise();
    }

    /**
     * This API allows translation of a batch of legacy list id\'s to list id\'s. This allows for a maximum of 10,000 id\'s. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id in Batch
     * @param param the request object
     */
    public crmV3ListsIdmapping_2WithHttpInfo(param: BasicApiCrmV3ListsIdmapping0Request, options?: ConfigurationOptions): Promise<HttpInfo<PublicBatchMigrationMapping>> {
        return this.api.crmV3ListsIdmapping_2WithHttpInfo(param.requestBody,  options).toPromise();
    }

    /**
     * This API allows translation of a batch of legacy list id\'s to list id\'s. This allows for a maximum of 10,000 id\'s. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id in Batch
     * @param param the request object
     */
    public crmV3ListsIdmapping_2(param: BasicApiCrmV3ListsIdmapping0Request, options?: ConfigurationOptions): Promise<PublicBatchMigrationMapping> {
        return this.api.crmV3ListsIdmapping_2(param.requestBody,  options).toPromise();
    }

    /**
     * Fetch a single list by **ILS list ID**.
     * Fetch List by ID
     * @param param the request object
     */
    public crmV3ListsListIdWithHttpInfo(param: BasicApiCrmV3ListsListIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListFetchResponse>> {
        return this.api.crmV3ListsListIdWithHttpInfo(param.listId, param.includeFilters,  options).toPromise();
    }

    /**
     * Fetch a single list by **ILS list ID**.
     * Fetch List by ID
     * @param param the request object
     */
    public crmV3ListsListId(param: BasicApiCrmV3ListsListIdRequest, options?: ConfigurationOptions): Promise<ListFetchResponse> {
        return this.api.crmV3ListsListId(param.listId, param.includeFilters,  options).toPromise();
    }

    /**
     * Fetch the memberships of a list in order sorted by the `recordId` of the records in the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by ID
     * @param param the request object
     */
    public crmV3ListsListIdMembershipsWithHttpInfo(param: BasicApiCrmV3ListsListIdMembershipsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiCollectionResponseJoinTimeAndRecordId>> {
        return this.api.crmV3ListsListIdMembershipsWithHttpInfo(param.listId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Fetch the memberships of a list in order sorted by the `recordId` of the records in the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by ID
     * @param param the request object
     */
    public crmV3ListsListIdMemberships(param: BasicApiCrmV3ListsListIdMembershipsRequest, options?: ConfigurationOptions): Promise<ApiCollectionResponseJoinTimeAndRecordId> {
        return this.api.crmV3ListsListIdMemberships(param.listId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Add the records provided to the list. Records that do not exist or that are already members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add Records to a List
     * @param param the request object
     */
    public crmV3ListsListIdMembershipsAddWithHttpInfo(param: BasicApiCrmV3ListsListIdMembershipsAddRequest, options?: ConfigurationOptions): Promise<HttpInfo<MembershipsUpdateResponse>> {
        return this.api.crmV3ListsListIdMembershipsAddWithHttpInfo(param.listId, param.requestBody,  options).toPromise();
    }

    /**
     * Add the records provided to the list. Records that do not exist or that are already members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add Records to a List
     * @param param the request object
     */
    public crmV3ListsListIdMembershipsAdd(param: BasicApiCrmV3ListsListIdMembershipsAddRequest, options?: ConfigurationOptions): Promise<MembershipsUpdateResponse> {
        return this.api.crmV3ListsListIdMembershipsAdd(param.listId, param.requestBody,  options).toPromise();
    }

    /**
     * Add and/or remove records that have already been created in the system to and/or from a list.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add and/or Remove Records from a List
     * @param param the request object
     */
    public crmV3ListsListIdMembershipsAddAndRemoveWithHttpInfo(param: BasicApiCrmV3ListsListIdMembershipsAddAndRemoveRequest, options?: ConfigurationOptions): Promise<HttpInfo<MembershipsUpdateResponse>> {
        return this.api.crmV3ListsListIdMembershipsAddAndRemoveWithHttpInfo(param.listId, param.membershipChangeRequest,  options).toPromise();
    }

    /**
     * Add and/or remove records that have already been created in the system to and/or from a list.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add and/or Remove Records from a List
     * @param param the request object
     */
    public crmV3ListsListIdMembershipsAddAndRemove(param: BasicApiCrmV3ListsListIdMembershipsAddAndRemoveRequest, options?: ConfigurationOptions): Promise<MembershipsUpdateResponse> {
        return this.api.crmV3ListsListIdMembershipsAddAndRemove(param.listId, param.membershipChangeRequest,  options).toPromise();
    }

    /**
     * Add all of the records from a *source list* (specified by the `sourceListId`) to a *destination list* (specified by the `listId`). Records that are already members of the *destination list* will be ignored. The *destination* and *source list* IDs must be different. The *destination* and *source lists* must contain records of the same type (e.g. contacts, companies, etc.).  This endpoint only works for *destination lists* that have a `processingType` of `MANUAL` or `SNAPSHOT`. The *source list* can have any `processingType`.  This endpoint only supports a `sourceListId` for lists with less than 100,000 memberships.
     * Add All Records from a Source List to a Destination List
     * @param param the request object
     */
    public crmV3ListsListIdMembershipsAddFromSourceListIdWithHttpInfo(param: BasicApiCrmV3ListsListIdMembershipsAddFromSourceListIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.crmV3ListsListIdMembershipsAddFromSourceListIdWithHttpInfo(param.listId, param.sourceListId,  options).toPromise();
    }

    /**
     * Add all of the records from a *source list* (specified by the `sourceListId`) to a *destination list* (specified by the `listId`). Records that are already members of the *destination list* will be ignored. The *destination* and *source list* IDs must be different. The *destination* and *source lists* must contain records of the same type (e.g. contacts, companies, etc.).  This endpoint only works for *destination lists* that have a `processingType` of `MANUAL` or `SNAPSHOT`. The *source list* can have any `processingType`.  This endpoint only supports a `sourceListId` for lists with less than 100,000 memberships.
     * Add All Records from a Source List to a Destination List
     * @param param the request object
     */
    public crmV3ListsListIdMembershipsAddFromSourceListId(param: BasicApiCrmV3ListsListIdMembershipsAddFromSourceListIdRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.crmV3ListsListIdMembershipsAddFromSourceListId(param.listId, param.sourceListId,  options).toPromise();
    }

    /**
     * Fetch the memberships of a list in order sorted by the time the records were added to the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by Added to List Date
     * @param param the request object
     */
    public crmV3ListsListIdMembershipsJoinOrderWithHttpInfo(param: BasicApiCrmV3ListsListIdMembershipsJoinOrderRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiCollectionResponseJoinTimeAndRecordId>> {
        return this.api.crmV3ListsListIdMembershipsJoinOrderWithHttpInfo(param.listId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Fetch the memberships of a list in order sorted by the time the records were added to the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by Added to List Date
     * @param param the request object
     */
    public crmV3ListsListIdMembershipsJoinOrder(param: BasicApiCrmV3ListsListIdMembershipsJoinOrderRequest, options?: ConfigurationOptions): Promise<ApiCollectionResponseJoinTimeAndRecordId> {
        return this.api.crmV3ListsListIdMembershipsJoinOrder(param.listId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Remove the records provided from the list. Records that do not exist or that are not members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Remove Records from a List
     * @param param the request object
     */
    public crmV3ListsListIdMembershipsRemoveWithHttpInfo(param: BasicApiCrmV3ListsListIdMembershipsRemoveRequest, options?: ConfigurationOptions): Promise<HttpInfo<MembershipsUpdateResponse>> {
        return this.api.crmV3ListsListIdMembershipsRemoveWithHttpInfo(param.listId, param.requestBody,  options).toPromise();
    }

    /**
     * Remove the records provided from the list. Records that do not exist or that are not members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Remove Records from a List
     * @param param the request object
     */
    public crmV3ListsListIdMembershipsRemove(param: BasicApiCrmV3ListsListIdMembershipsRemoveRequest, options?: ConfigurationOptions): Promise<MembershipsUpdateResponse> {
        return this.api.crmV3ListsListIdMembershipsRemove(param.listId, param.requestBody,  options).toPromise();
    }

    /**
     * Remove **all** of the records from a list. ***Note:*** *The list is not deleted.*  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.  This endpoint only supports lists that have less than 100,000 memberships.
     * Delete All Records from a List
     * @param param the request object
     */
    public crmV3ListsListIdMemberships_3WithHttpInfo(param: BasicApiCrmV3ListsListIdMemberships0Request, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.crmV3ListsListIdMemberships_3WithHttpInfo(param.listId,  options).toPromise();
    }

    /**
     * Remove **all** of the records from a list. ***Note:*** *The list is not deleted.*  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.  This endpoint only supports lists that have less than 100,000 memberships.
     * Delete All Records from a List
     * @param param the request object
     */
    public crmV3ListsListIdMemberships_3(param: BasicApiCrmV3ListsListIdMemberships0Request, options?: ConfigurationOptions): Promise<void> {
        return this.api.crmV3ListsListIdMemberships_3(param.listId,  options).toPromise();
    }

    /**
     * Restore a previously deleted list by **ILS list ID**. Deleted lists are eligible to be restored up-to 90-days after the list has been deleted.
     * Restore a List
     * @param param the request object
     */
    public crmV3ListsListIdRestoreWithHttpInfo(param: BasicApiCrmV3ListsListIdRestoreRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.crmV3ListsListIdRestoreWithHttpInfo(param.listId,  options).toPromise();
    }

    /**
     * Restore a previously deleted list by **ILS list ID**. Deleted lists are eligible to be restored up-to 90-days after the list has been deleted.
     * Restore a List
     * @param param the request object
     */
    public crmV3ListsListIdRestore(param: BasicApiCrmV3ListsListIdRestoreRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.crmV3ListsListIdRestore(param.listId,  options).toPromise();
    }

    /**
     * Retrieve the conversion details for a list. This can be used to check for an upcoming conversion, or to get the details of when a list was already converted.
     * Retrieve the conversion details for a list
     * @param param the request object
     */
    public crmV3ListsListIdScheduleConversionWithHttpInfo(param: BasicApiCrmV3ListsListIdScheduleConversionRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicListConversionResponse>> {
        return this.api.crmV3ListsListIdScheduleConversionWithHttpInfo(param.listId,  options).toPromise();
    }

    /**
     * Retrieve the conversion details for a list. This can be used to check for an upcoming conversion, or to get the details of when a list was already converted.
     * Retrieve the conversion details for a list
     * @param param the request object
     */
    public crmV3ListsListIdScheduleConversion(param: BasicApiCrmV3ListsListIdScheduleConversionRequest, options?: ConfigurationOptions): Promise<PublicListConversionResponse> {
        return this.api.crmV3ListsListIdScheduleConversion(param.listId,  options).toPromise();
    }

    /**
     * Schedule the conversion of an active list into a static list, or update the already scheduled conversion. This can be scheduled for a specific date or based on activity.
     * Schedule or update the conversion of a list to static
     * @param param the request object
     */
    public crmV3ListsListIdScheduleConversion_4WithHttpInfo(param: BasicApiCrmV3ListsListIdScheduleConversion0Request, options?: ConfigurationOptions): Promise<HttpInfo<PublicListConversionResponse>> {
        return this.api.crmV3ListsListIdScheduleConversion_4WithHttpInfo(param.listId, param.publicListConversionTime,  options).toPromise();
    }

    /**
     * Schedule the conversion of an active list into a static list, or update the already scheduled conversion. This can be scheduled for a specific date or based on activity.
     * Schedule or update the conversion of a list to static
     * @param param the request object
     */
    public crmV3ListsListIdScheduleConversion_4(param: BasicApiCrmV3ListsListIdScheduleConversion0Request, options?: ConfigurationOptions): Promise<PublicListConversionResponse> {
        return this.api.crmV3ListsListIdScheduleConversion_4(param.listId, param.publicListConversionTime,  options).toPromise();
    }

    /**
     * Delete an existing scheduled conversion for a list.
     * Cancel the conversion of a list
     * @param param the request object
     */
    public crmV3ListsListIdScheduleConversion_5WithHttpInfo(param: BasicApiCrmV3ListsListIdScheduleConversion1Request, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.crmV3ListsListIdScheduleConversion_5WithHttpInfo(param.listId,  options).toPromise();
    }

    /**
     * Delete an existing scheduled conversion for a list.
     * Cancel the conversion of a list
     * @param param the request object
     */
    public crmV3ListsListIdScheduleConversion_5(param: BasicApiCrmV3ListsListIdScheduleConversion1Request, options?: ConfigurationOptions): Promise<void> {
        return this.api.crmV3ListsListIdScheduleConversion_5(param.listId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public crmV3ListsListIdSizeAndEditsHistoryBetweenWithHttpInfo(param: BasicApiCrmV3ListsListIdSizeAndEditsHistoryBetweenRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListSizeAndEditHistoryResponse>> {
        return this.api.crmV3ListsListIdSizeAndEditsHistoryBetweenWithHttpInfo(param.listId, param.endDate, param.startDate,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public crmV3ListsListIdSizeAndEditsHistoryBetween(param: BasicApiCrmV3ListsListIdSizeAndEditsHistoryBetweenRequest, options?: ConfigurationOptions): Promise<ListSizeAndEditHistoryResponse> {
        return this.api.crmV3ListsListIdSizeAndEditsHistoryBetween(param.listId, param.endDate, param.startDate,  options).toPromise();
    }

    /**
     * Update the filter branch definition of a `DYNAMIC` list. Once updated, the list memberships will be re-evaluated and updated to match the new definition.
     * Update List Filter Definition
     * @param param the request object
     */
    public crmV3ListsListIdUpdateListFiltersWithHttpInfo(param: BasicApiCrmV3ListsListIdUpdateListFiltersRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListUpdateResponse>> {
        return this.api.crmV3ListsListIdUpdateListFiltersWithHttpInfo(param.listId, param.listFilterUpdateRequest, param.enrollObjectsInWorkflows,  options).toPromise();
    }

    /**
     * Update the filter branch definition of a `DYNAMIC` list. Once updated, the list memberships will be re-evaluated and updated to match the new definition.
     * Update List Filter Definition
     * @param param the request object
     */
    public crmV3ListsListIdUpdateListFilters(param: BasicApiCrmV3ListsListIdUpdateListFiltersRequest, options?: ConfigurationOptions): Promise<ListUpdateResponse> {
        return this.api.crmV3ListsListIdUpdateListFilters(param.listId, param.listFilterUpdateRequest, param.enrollObjectsInWorkflows,  options).toPromise();
    }

    /**
     * Update the name of a list. The name must be globally unique relative to all other public lists in the portal.
     * Update List Name
     * @param param the request object
     */
    public crmV3ListsListIdUpdateListNameWithHttpInfo(param: BasicApiCrmV3ListsListIdUpdateListNameRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListUpdateResponse>> {
        return this.api.crmV3ListsListIdUpdateListNameWithHttpInfo(param.listId, param.includeFilters, param.listName,  options).toPromise();
    }

    /**
     * Update the name of a list. The name must be globally unique relative to all other public lists in the portal.
     * Update List Name
     * @param param the request object
     */
    public crmV3ListsListIdUpdateListName(param: BasicApiCrmV3ListsListIdUpdateListNameRequest, options?: ConfigurationOptions): Promise<ListUpdateResponse> {
        return this.api.crmV3ListsListIdUpdateListName(param.listId, param.includeFilters, param.listName,  options).toPromise();
    }

    /**
     * Delete a list by **ILS list ID**. Lists deleted through this endpoint can be restored up to 90-days following the delete. After 90-days, the list is purged and can no longer be restored.
     * Delete a List
     * @param param the request object
     */
    public crmV3ListsListId_6WithHttpInfo(param: BasicApiCrmV3ListsListId0Request, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.crmV3ListsListId_6WithHttpInfo(param.listId,  options).toPromise();
    }

    /**
     * Delete a list by **ILS list ID**. Lists deleted through this endpoint can be restored up to 90-days following the delete. After 90-days, the list is purged and can no longer be restored.
     * Delete a List
     * @param param the request object
     */
    public crmV3ListsListId_6(param: BasicApiCrmV3ListsListId0Request, options?: ConfigurationOptions): Promise<void> {
        return this.api.crmV3ListsListId_6(param.listId,  options).toPromise();
    }

    /**
     * Retrieve a specific list by its name and object type ID. This endpoint allows you to fetch details about a list, including its properties and optionally its filters. It is useful for accessing list information based on specific criteria.
     * Retrieve List by Name
     * @param param the request object
     */
    public crmV3ListsObjectTypeIdObjectTypeIdNameListNameWithHttpInfo(param: BasicApiCrmV3ListsObjectTypeIdObjectTypeIdNameListNameRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListFetchResponse>> {
        return this.api.crmV3ListsObjectTypeIdObjectTypeIdNameListNameWithHttpInfo(param.listName, param.objectTypeId, param.includeFilters,  options).toPromise();
    }

    /**
     * Retrieve a specific list by its name and object type ID. This endpoint allows you to fetch details about a list, including its properties and optionally its filters. It is useful for accessing list information based on specific criteria.
     * Retrieve List by Name
     * @param param the request object
     */
    public crmV3ListsObjectTypeIdObjectTypeIdNameListName(param: BasicApiCrmV3ListsObjectTypeIdObjectTypeIdNameListNameRequest, options?: ConfigurationOptions): Promise<ListFetchResponse> {
        return this.api.crmV3ListsObjectTypeIdObjectTypeIdNameListName(param.listName, param.objectTypeId, param.includeFilters,  options).toPromise();
    }

    /**
     * For given record provide lists this record is member of.
     * Get lists record is member of
     * @param param the request object
     */
    public crmV3ListsRecordsObjectTypeIdRecordIdMembershipsWithHttpInfo(param: BasicApiCrmV3ListsRecordsObjectTypeIdRecordIdMembershipsRequest, options?: ConfigurationOptions): Promise<HttpInfo<ApiCollectionResponseRecordListMembership>> {
        return this.api.crmV3ListsRecordsObjectTypeIdRecordIdMembershipsWithHttpInfo(param.objectTypeId, param.recordId,  options).toPromise();
    }

    /**
     * For given record provide lists this record is member of.
     * Get lists record is member of
     * @param param the request object
     */
    public crmV3ListsRecordsObjectTypeIdRecordIdMemberships(param: BasicApiCrmV3ListsRecordsObjectTypeIdRecordIdMembershipsRequest, options?: ConfigurationOptions): Promise<ApiCollectionResponseRecordListMembership> {
        return this.api.crmV3ListsRecordsObjectTypeIdRecordIdMemberships(param.objectTypeId, param.recordId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public crmV3Lists_7WithHttpInfo(param: BasicApiCrmV3Lists0Request, options?: ConfigurationOptions): Promise<HttpInfo<ListCreateResponse>> {
        return this.api.crmV3Lists_7WithHttpInfo(param.listCreateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public crmV3Lists_7(param: BasicApiCrmV3Lists0Request, options?: ConfigurationOptions): Promise<ListCreateResponse> {
        return this.api.crmV3Lists_7(param.listCreateRequest,  options).toPromise();
    }

}

import { ObservableBatchApi } from "./ObservableAPI";
import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";

export interface BatchApiCrmV3ListsRecordsMembershipsBatchReadRequest {
    /**
     * 
     * @type BatchInputRecordIdInput
     * @memberof BatchApicrmV3ListsRecordsMembershipsBatchRead
     */
    batchInputRecordIdInput: BatchInputRecordIdInput
}

export class ObjectBatchApi {
    private api: ObservableBatchApi

    public constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor) {
        this.api = new ObservableBatchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public crmV3ListsRecordsMembershipsBatchReadWithHttpInfo(param: BatchApiCrmV3ListsRecordsMembershipsBatchReadRequest, options?: ConfigurationOptions): Promise<HttpInfo<BatchResponseRecordIdWithMembershipsWithErrors | BatchResponseRecordIdWithMemberships>> {
        return this.api.crmV3ListsRecordsMembershipsBatchReadWithHttpInfo(param.batchInputRecordIdInput,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public crmV3ListsRecordsMembershipsBatchRead(param: BatchApiCrmV3ListsRecordsMembershipsBatchReadRequest, options?: ConfigurationOptions): Promise<BatchResponseRecordIdWithMembershipsWithErrors | BatchResponseRecordIdWithMemberships> {
        return this.api.crmV3ListsRecordsMembershipsBatchRead(param.batchInputRecordIdInput,  options).toPromise();
    }

}

import { ObservableSearchApi } from "./ObservableAPI";
import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";

export interface SearchApiCrmV3ListsSearchRequest {
    /**
     * 
     * @type ListSearchRequest
     * @memberof SearchApicrmV3ListsSearch
     */
    listSearchRequest: ListSearchRequest
}

export class ObjectSearchApi {
    private api: ObservableSearchApi

    public constructor(configuration: Configuration, requestFactory?: SearchApiRequestFactory, responseProcessor?: SearchApiResponseProcessor) {
        this.api = new ObservableSearchApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Search lists by list name or page through all lists by providing an empty `query` value.
     * Search Lists
     * @param param the request object
     */
    public crmV3ListsSearchWithHttpInfo(param: SearchApiCrmV3ListsSearchRequest, options?: ConfigurationOptions): Promise<HttpInfo<ListSearchResponse>> {
        return this.api.crmV3ListsSearchWithHttpInfo(param.listSearchRequest,  options).toPromise();
    }

    /**
     * Search lists by list name or page through all lists by providing an empty `query` value.
     * Search Lists
     * @param param the request object
     */
    public crmV3ListsSearch(param: SearchApiCrmV3ListsSearchRequest, options?: ConfigurationOptions): Promise<ListSearchResponse> {
        return this.api.crmV3ListsSearch(param.listSearchRequest,  options).toPromise();
    }

}
