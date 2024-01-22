import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CollectionResponseLong } from '../models/CollectionResponseLong';
import { ListCreateRequest } from '../models/ListCreateRequest';
import { ListCreateResponse } from '../models/ListCreateResponse';
import { ListFetchResponse } from '../models/ListFetchResponse';
import { ListFilterUpdateRequest } from '../models/ListFilterUpdateRequest';
import { ListSearchRequest } from '../models/ListSearchRequest';
import { ListSearchResponse } from '../models/ListSearchResponse';
import { ListUpdateResponse } from '../models/ListUpdateResponse';
import { ListsByIdResponse } from '../models/ListsByIdResponse';
import { MembershipChangeRequest } from '../models/MembershipChangeRequest';
import { MembershipsUpdateResponse } from '../models/MembershipsUpdateResponse';

import { ObservableListsApi } from "./ObservableAPI";
import { ListsApiRequestFactory, ListsApiResponseProcessor} from "../apis/ListsApi";

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
     * @type Array&lt;number&gt;
     * @memberof ListsApigetAll
     */
    listIds?: Array<number>
    /**
     * A flag indicating whether or not the response object list definitions should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     * @type boolean
     * @memberof ListsApigetAll
     */
    includeFilters?: boolean
}

export interface ListsApiGetByIdRequest {
    /**
     * The **ILS ID** of the list to fetch.
     * @type number
     * @memberof ListsApigetById
     */
    listId: number
    /**
     * A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     * @type boolean
     * @memberof ListsApigetById
     */
    includeFilters?: boolean
}

export interface ListsApiGetByNameRequest {
    /**
     * The name of the list to fetch. This is **not** case sensitive.
     * @type string
     * @memberof ListsApigetByName
     */
    listName: string
    /**
     * The object type ID of the object types stored by the list to fetch. For example, &#x60;0-1&#x60; for a &#x60;CONTACT&#x60; list.
     * @type string
     * @memberof ListsApigetByName
     */
    objectTypeId: string
    /**
     * A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     * @type boolean
     * @memberof ListsApigetByName
     */
    includeFilters?: boolean
}

export interface ListsApiRemoveRequest {
    /**
     * The **ILS ID** of the list to delete.
     * @type number
     * @memberof ListsApiremove
     */
    listId: number
}

export interface ListsApiRestoreRequest {
    /**
     * The **ILS ID** of the list to restore.
     * @type number
     * @memberof ListsApirestore
     */
    listId: number
}

export interface ListsApiUpdateListFiltersRequest {
    /**
     * The **ILS ID** of the list to update.
     * @type number
     * @memberof ListsApiupdateListFilters
     */
    listId: number
    /**
     * 
     * @type ListFilterUpdateRequest
     * @memberof ListsApiupdateListFilters
     */
    listFilterUpdateRequest: ListFilterUpdateRequest
    /**
     * A flag indicating whether or not the memberships added to the list as a result of the filter change should be enrolled in workflows that are relevant to this list.
     * @type boolean
     * @memberof ListsApiupdateListFilters
     */
    enrollObjectsInWorkflows?: boolean
}

export interface ListsApiUpdateNameRequest {
    /**
     * The **ILS ID** of the list to update.
     * @type number
     * @memberof ListsApiupdateName
     */
    listId: number
    /**
     * The name to update the list to.
     * @type string
     * @memberof ListsApiupdateName
     */
    listName?: string
    /**
     * A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
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
     * Create a new list with the provided object list definition.
     * Create List
     * @param param the request object
     */
    public createWithHttpInfo(param: ListsApiCreateRequest, options?: Configuration): Promise<HttpInfo<ListCreateResponse>> {
        return this.api.createWithHttpInfo(param.listCreateRequest,  options).toPromise();
    }

    /**
     * Create a new list with the provided object list definition.
     * Create List
     * @param param the request object
     */
    public create(param: ListsApiCreateRequest, options?: Configuration): Promise<ListCreateResponse> {
        return this.api.create(param.listCreateRequest,  options).toPromise();
    }

    /**
     * Search lists by list name or page through all lists by providing an empty `query` value.
     * Search Lists
     * @param param the request object
     */
    public doSearchWithHttpInfo(param: ListsApiDoSearchRequest, options?: Configuration): Promise<HttpInfo<ListSearchResponse>> {
        return this.api.doSearchWithHttpInfo(param.listSearchRequest,  options).toPromise();
    }

    /**
     * Search lists by list name or page through all lists by providing an empty `query` value.
     * Search Lists
     * @param param the request object
     */
    public doSearch(param: ListsApiDoSearchRequest, options?: Configuration): Promise<ListSearchResponse> {
        return this.api.doSearch(param.listSearchRequest,  options).toPromise();
    }

    /**
     * Fetch multiple lists in a single request by **ILS list ID**. The response will include the definitions of all lists that exist for the `listIds` provided.
     * Fetch Multiple Lists
     * @param param the request object
     */
    public getAllWithHttpInfo(param: ListsApiGetAllRequest = {}, options?: Configuration): Promise<HttpInfo<ListsByIdResponse>> {
        return this.api.getAllWithHttpInfo(param.listIds, param.includeFilters,  options).toPromise();
    }

    /**
     * Fetch multiple lists in a single request by **ILS list ID**. The response will include the definitions of all lists that exist for the `listIds` provided.
     * Fetch Multiple Lists
     * @param param the request object
     */
    public getAll(param: ListsApiGetAllRequest = {}, options?: Configuration): Promise<ListsByIdResponse> {
        return this.api.getAll(param.listIds, param.includeFilters,  options).toPromise();
    }

    /**
     * Fetch a single list by **ILS list ID**.
     * Fetch List by ID
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: ListsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<ListFetchResponse>> {
        return this.api.getByIdWithHttpInfo(param.listId, param.includeFilters,  options).toPromise();
    }

    /**
     * Fetch a single list by **ILS list ID**.
     * Fetch List by ID
     * @param param the request object
     */
    public getById(param: ListsApiGetByIdRequest, options?: Configuration): Promise<ListFetchResponse> {
        return this.api.getById(param.listId, param.includeFilters,  options).toPromise();
    }

    /**
     * Fetch a single list by list name and object type.
     * Fetch List by Name
     * @param param the request object
     */
    public getByNameWithHttpInfo(param: ListsApiGetByNameRequest, options?: Configuration): Promise<HttpInfo<ListFetchResponse>> {
        return this.api.getByNameWithHttpInfo(param.listName, param.objectTypeId, param.includeFilters,  options).toPromise();
    }

    /**
     * Fetch a single list by list name and object type.
     * Fetch List by Name
     * @param param the request object
     */
    public getByName(param: ListsApiGetByNameRequest, options?: Configuration): Promise<ListFetchResponse> {
        return this.api.getByName(param.listName, param.objectTypeId, param.includeFilters,  options).toPromise();
    }

    /**
     * Delete a list by **ILS list ID**. Lists deleted through this endpoint can be restored up to 90-days following the delete. After 90-days, the list is purged and can no longer be restored.
     * Delete a List
     * @param param the request object
     */
    public removeWithHttpInfo(param: ListsApiRemoveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.removeWithHttpInfo(param.listId,  options).toPromise();
    }

    /**
     * Delete a list by **ILS list ID**. Lists deleted through this endpoint can be restored up to 90-days following the delete. After 90-days, the list is purged and can no longer be restored.
     * Delete a List
     * @param param the request object
     */
    public remove(param: ListsApiRemoveRequest, options?: Configuration): Promise<void> {
        return this.api.remove(param.listId,  options).toPromise();
    }

    /**
     * Restore a previously deleted list by **ILS list ID**. Deleted lists are eligible to be restored up-to 90-days after the list has been deleted.
     * Restore a List
     * @param param the request object
     */
    public restoreWithHttpInfo(param: ListsApiRestoreRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.restoreWithHttpInfo(param.listId,  options).toPromise();
    }

    /**
     * Restore a previously deleted list by **ILS list ID**. Deleted lists are eligible to be restored up-to 90-days after the list has been deleted.
     * Restore a List
     * @param param the request object
     */
    public restore(param: ListsApiRestoreRequest, options?: Configuration): Promise<void> {
        return this.api.restore(param.listId,  options).toPromise();
    }

    /**
     * Update the filter branch definition of a `DYNAMIC` list. Once updated, the list memberships will be re-evaluated and updated to match the new definition.
     * Update List Filter Definition
     * @param param the request object
     */
    public updateListFiltersWithHttpInfo(param: ListsApiUpdateListFiltersRequest, options?: Configuration): Promise<HttpInfo<ListUpdateResponse>> {
        return this.api.updateListFiltersWithHttpInfo(param.listId, param.listFilterUpdateRequest, param.enrollObjectsInWorkflows,  options).toPromise();
    }

    /**
     * Update the filter branch definition of a `DYNAMIC` list. Once updated, the list memberships will be re-evaluated and updated to match the new definition.
     * Update List Filter Definition
     * @param param the request object
     */
    public updateListFilters(param: ListsApiUpdateListFiltersRequest, options?: Configuration): Promise<ListUpdateResponse> {
        return this.api.updateListFilters(param.listId, param.listFilterUpdateRequest, param.enrollObjectsInWorkflows,  options).toPromise();
    }

    /**
     * Update the name of a list. The name must be globally unique relative to all other public lists in the portal.
     * Update List Name
     * @param param the request object
     */
    public updateNameWithHttpInfo(param: ListsApiUpdateNameRequest, options?: Configuration): Promise<HttpInfo<ListUpdateResponse>> {
        return this.api.updateNameWithHttpInfo(param.listId, param.listName, param.includeFilters,  options).toPromise();
    }

    /**
     * Update the name of a list. The name must be globally unique relative to all other public lists in the portal.
     * Update List Name
     * @param param the request object
     */
    public updateName(param: ListsApiUpdateNameRequest, options?: Configuration): Promise<ListUpdateResponse> {
        return this.api.updateName(param.listId, param.listName, param.includeFilters,  options).toPromise();
    }

}

import { ObservableMembershipsApi } from "./ObservableAPI";
import { MembershipsApiRequestFactory, MembershipsApiResponseProcessor} from "../apis/MembershipsApi";

export interface MembershipsApiAddRequest {
    /**
     * The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @type number
     * @memberof MembershipsApiadd
     */
    listId: number
    /**
     * The IDs of the records to add to the list.
     * @type Array&lt;number&gt;
     * @memberof MembershipsApiadd
     */
    requestBody: Array<number>
}

export interface MembershipsApiAddAllFromListRequest {
    /**
     * The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; *destination list*, which the *source list* records are added to.
     * @type number
     * @memberof MembershipsApiaddAllFromList
     */
    listId: number
    /**
     * The **ILS ID** of the *source list* to grab the records from, which are then added to the *destination list*.
     * @type number
     * @memberof MembershipsApiaddAllFromList
     */
    sourceListId: number
}

export interface MembershipsApiAddAndRemoveRequest {
    /**
     * The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @type number
     * @memberof MembershipsApiaddAndRemove
     */
    listId: number
    /**
     * The IDs of the records to add and/or remove from the list.
     * @type MembershipChangeRequest
     * @memberof MembershipsApiaddAndRemove
     */
    membershipChangeRequest: MembershipChangeRequest
}

export interface MembershipsApiGetPageRequest {
    /**
     * The **ILS ID** of the list.
     * @type number
     * @memberof MembershipsApigetPage
     */
    listId: number
    /**
     * The paging offset token for the page that comes &#x60;after&#x60; the previously requested records.  If provided, then the records in the response will be the records following the offset, sorted in *ascending* order. Takes precedence over the &#x60;before&#x60; offset.
     * @type string
     * @memberof MembershipsApigetPage
     */
    after?: string
    /**
     * The paging offset token for the page that comes &#x60;before&#x60; the previously requested records.  If provided, then the records in the response will be the records preceding the offset, sorted in *descending* order.
     * @type string
     * @memberof MembershipsApigetPage
     */
    before?: string
    /**
     * The number of records to return in the response. The maximum &#x60;limit&#x60; is 250.
     * @type number
     * @memberof MembershipsApigetPage
     */
    limit?: number
}

export interface MembershipsApiRemoveRequest {
    /**
     * The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @type number
     * @memberof MembershipsApiremove
     */
    listId: number
    /**
     * The IDs of the records to remove from the list.
     * @type Array&lt;number&gt;
     * @memberof MembershipsApiremove
     */
    requestBody: Array<number>
}

export interface MembershipsApiRemoveAllRequest {
    /**
     * The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @type number
     * @memberof MembershipsApiremoveAll
     */
    listId: number
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
    public addWithHttpInfo(param: MembershipsApiAddRequest, options?: Configuration): Promise<HttpInfo<MembershipsUpdateResponse>> {
        return this.api.addWithHttpInfo(param.listId, param.requestBody,  options).toPromise();
    }

    /**
     * Add the records provided to the list. Records that do not exist or that are already members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add Records to a List
     * @param param the request object
     */
    public add(param: MembershipsApiAddRequest, options?: Configuration): Promise<MembershipsUpdateResponse> {
        return this.api.add(param.listId, param.requestBody,  options).toPromise();
    }

    /**
     * Add all of the records from a *source list* (specified by the `sourceListId`) to a *destination list* (specified by the `listId`). Records that are already members of the *destination list* will be ignored. The *destination* and *source list* IDs must be different. The *destination* and *source lists* must contain records of the same type (e.g. contacts, companies, etc.).  This endpoint only works for *destination lists* that have a `processingType` of `MANUAL` or `SNAPSHOT`. The *source list* can have any `processingType`.
     * Add All Records from a Source List to a Destination List
     * @param param the request object
     */
    public addAllFromListWithHttpInfo(param: MembershipsApiAddAllFromListRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.addAllFromListWithHttpInfo(param.listId, param.sourceListId,  options).toPromise();
    }

    /**
     * Add all of the records from a *source list* (specified by the `sourceListId`) to a *destination list* (specified by the `listId`). Records that are already members of the *destination list* will be ignored. The *destination* and *source list* IDs must be different. The *destination* and *source lists* must contain records of the same type (e.g. contacts, companies, etc.).  This endpoint only works for *destination lists* that have a `processingType` of `MANUAL` or `SNAPSHOT`. The *source list* can have any `processingType`.
     * Add All Records from a Source List to a Destination List
     * @param param the request object
     */
    public addAllFromList(param: MembershipsApiAddAllFromListRequest, options?: Configuration): Promise<void> {
        return this.api.addAllFromList(param.listId, param.sourceListId,  options).toPromise();
    }

    /**
     * Add and/or remove records that have already been created in the system to and/or from a list.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add and/or Remove Records from a List
     * @param param the request object
     */
    public addAndRemoveWithHttpInfo(param: MembershipsApiAddAndRemoveRequest, options?: Configuration): Promise<HttpInfo<MembershipsUpdateResponse>> {
        return this.api.addAndRemoveWithHttpInfo(param.listId, param.membershipChangeRequest,  options).toPromise();
    }

    /**
     * Add and/or remove records that have already been created in the system to and/or from a list.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add and/or Remove Records from a List
     * @param param the request object
     */
    public addAndRemove(param: MembershipsApiAddAndRemoveRequest, options?: Configuration): Promise<MembershipsUpdateResponse> {
        return this.api.addAndRemove(param.listId, param.membershipChangeRequest,  options).toPromise();
    }

    /**
     * Fetch the memberships of a list in order sorted by the `recordId` of the records in the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by ID
     * @param param the request object
     */
    public getPageWithHttpInfo(param: MembershipsApiGetPageRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseLong>> {
        return this.api.getPageWithHttpInfo(param.listId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Fetch the memberships of a list in order sorted by the `recordId` of the records in the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by ID
     * @param param the request object
     */
    public getPage(param: MembershipsApiGetPageRequest, options?: Configuration): Promise<CollectionResponseLong> {
        return this.api.getPage(param.listId, param.after, param.before, param.limit,  options).toPromise();
    }

    /**
     * Remove the records provided from the list. Records that do not exist or that are not members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Remove Records from a List
     * @param param the request object
     */
    public removeWithHttpInfo(param: MembershipsApiRemoveRequest, options?: Configuration): Promise<HttpInfo<MembershipsUpdateResponse>> {
        return this.api.removeWithHttpInfo(param.listId, param.requestBody,  options).toPromise();
    }

    /**
     * Remove the records provided from the list. Records that do not exist or that are not members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Remove Records from a List
     * @param param the request object
     */
    public remove(param: MembershipsApiRemoveRequest, options?: Configuration): Promise<MembershipsUpdateResponse> {
        return this.api.remove(param.listId, param.requestBody,  options).toPromise();
    }

    /**
     * Remove **all** of the records from a list. ***Note:*** *The list is not deleted.*  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Delete All Records from a List
     * @param param the request object
     */
    public removeAllWithHttpInfo(param: MembershipsApiRemoveAllRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.removeAllWithHttpInfo(param.listId,  options).toPromise();
    }

    /**
     * Remove **all** of the records from a list. ***Note:*** *The list is not deleted.*  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Delete All Records from a List
     * @param param the request object
     */
    public removeAll(param: MembershipsApiRemoveAllRequest, options?: Configuration): Promise<void> {
        return this.api.removeAll(param.listId,  options).toPromise();
    }

}
