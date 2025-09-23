import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { FoldersApiRequestFactory, FoldersApiResponseProcessor} from "../apis/FoldersApi";
export class ObservableFoldersApi {
    private requestFactory: FoldersApiRequestFactory;
    private responseProcessor: FoldersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FoldersApiRequestFactory,
        responseProcessor?: FoldersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FoldersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FoldersApiResponseProcessor();
    }

    /**
     * Creates a folder with the given information.
     * Creates a folder
     * @param listFolderCreateRequest
     */
    public createWithHttpInfo(listFolderCreateRequest: ListFolderCreateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ListFolderCreateResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.create(listFolderCreateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a folder with the given information.
     * Creates a folder
     * @param listFolderCreateRequest
     */
    public create(listFolderCreateRequest: ListFolderCreateRequest, _options?: ConfigurationOptions): Observable<ListFolderCreateResponse> {
        return this.createWithHttpInfo(listFolderCreateRequest, _options).pipe(map((apiResponse: HttpInfo<ListFolderCreateResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a folder and recursively includes all folders via the childNodes attribute.  The child lists field will be empty in all child nodes. Only the folder retrieved will include the child lists in that folder.
     * Retrieves a folder.
     * @param [folderId] The Id of the folder to retrieve.
     */
    public getAllWithHttpInfo(folderId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListFolderFetchResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getAll(folderId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a folder and recursively includes all folders via the childNodes attribute.  The child lists field will be empty in all child nodes. Only the folder retrieved will include the child lists in that folder.
     * Retrieves a folder.
     * @param [folderId] The Id of the folder to retrieve.
     */
    public getAll(folderId?: string, _options?: ConfigurationOptions): Observable<ListFolderFetchResponse> {
        return this.getAllWithHttpInfo(folderId, _options).pipe(map((apiResponse: HttpInfo<ListFolderFetchResponse>) => apiResponse.data));
    }

    /**
     * This moves the folder from its current location to a new location. It updates the parent of this folder to the new Id given.
     * Moves a folder
     * @param folderId The ID of the folder to move
     * @param newParentFolderId The ID for the target parent folder.
     */
    public moveWithHttpInfo(folderId: string, newParentFolderId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListFolderFetchResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.move(folderId, newParentFolderId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveWithHttpInfo(rsp)));
            }));
    }

    /**
     * This moves the folder from its current location to a new location. It updates the parent of this folder to the new Id given.
     * Moves a folder
     * @param folderId The ID of the folder to move
     * @param newParentFolderId The ID for the target parent folder.
     */
    public move(folderId: string, newParentFolderId: string, _options?: ConfigurationOptions): Observable<ListFolderFetchResponse> {
        return this.moveWithHttpInfo(folderId, newParentFolderId, _options).pipe(map((apiResponse: HttpInfo<ListFolderFetchResponse>) => apiResponse.data));
    }

    /**
     * Given a list and a folder, the list will be moved to that folder.
     * Moves a list to a given folder
     * @param listMoveRequest
     */
    public moveListWithHttpInfo(listMoveRequest: ListMoveRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.moveList(listMoveRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.moveListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Given a list and a folder, the list will be moved to that folder.
     * Moves a list to a given folder
     * @param listMoveRequest
     */
    public moveList(listMoveRequest: ListMoveRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.moveListWithHttpInfo(listMoveRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Deletes the folder with the given Id.
     * Deletes a folder
     * @param folderId The ID of the folder to delete
     */
    public removeWithHttpInfo(folderId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.remove(folderId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the folder with the given Id.
     * Deletes a folder
     * @param folderId The ID of the folder to delete
     */
    public remove(folderId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.removeWithHttpInfo(folderId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Renames the given folderId with a new name.
     * Rename a folder
     * @param folderId The ID of the folder to rename
     * @param [newFolderName] The new name of the folder.
     */
    public renameWithHttpInfo(folderId: string, newFolderName?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListFolderFetchResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.rename(folderId, newFolderName, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.renameWithHttpInfo(rsp)));
            }));
    }

    /**
     * Renames the given folderId with a new name.
     * Rename a folder
     * @param folderId The ID of the folder to rename
     * @param [newFolderName] The new name of the folder.
     */
    public rename(folderId: string, newFolderName?: string, _options?: ConfigurationOptions): Observable<ListFolderFetchResponse> {
        return this.renameWithHttpInfo(folderId, newFolderName, _options).pipe(map((apiResponse: HttpInfo<ListFolderFetchResponse>) => apiResponse.data));
    }

}

import { ListsApiRequestFactory, ListsApiResponseProcessor} from "../apis/ListsApi";
export class ObservableListsApi {
    private requestFactory: ListsApiRequestFactory;
    private responseProcessor: ListsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ListsApiRequestFactory,
        responseProcessor?: ListsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ListsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ListsApiResponseProcessor();
    }

    /**
     * Delete an existing scheduled conversion for a list.
     * Cancel the conversion of a list
     * @param listId The ID of the list that you want to cancel the conversion for.
     */
    public cancelConversionWithHttpInfo(listId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.cancelConversion(listId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cancelConversionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete an existing scheduled conversion for a list.
     * Cancel the conversion of a list
     * @param listId The ID of the list that you want to cancel the conversion for.
     */
    public cancelConversion(listId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.cancelConversionWithHttpInfo(listId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create a new list with the provided object list definition.
     * Create List
     * @param listCreateRequest
     */
    public createWithHttpInfo(listCreateRequest: ListCreateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ListCreateResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.create(listCreateRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new list with the provided object list definition.
     * Create List
     * @param listCreateRequest
     */
    public create(listCreateRequest: ListCreateRequest, _options?: ConfigurationOptions): Observable<ListCreateResponse> {
        return this.createWithHttpInfo(listCreateRequest, _options).pipe(map((apiResponse: HttpInfo<ListCreateResponse>) => apiResponse.data));
    }

    /**
     * Search lists by list name or page through all lists by providing an empty `query` value.
     * Search Lists
     * @param listSearchRequest The IDs of the records to add and/or remove from the list.
     */
    public doSearchWithHttpInfo(listSearchRequest: ListSearchRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ListSearchResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.doSearch(listSearchRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doSearchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search lists by list name or page through all lists by providing an empty `query` value.
     * Search Lists
     * @param listSearchRequest The IDs of the records to add and/or remove from the list.
     */
    public doSearch(listSearchRequest: ListSearchRequest, _options?: ConfigurationOptions): Observable<ListSearchResponse> {
        return this.doSearchWithHttpInfo(listSearchRequest, _options).pipe(map((apiResponse: HttpInfo<ListSearchResponse>) => apiResponse.data));
    }

    /**
     * Fetch multiple lists in a single request by **ILS list ID**. The response will include the definitions of all lists that exist for the `listIds` provided.
     * Fetch Multiple Lists
     * @param [listIds] The **ILS IDs** of the lists to fetch.
     * @param [includeFilters] A flag indicating whether or not the response object list definitions should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public getAllWithHttpInfo(listIds?: Array<string>, includeFilters?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ListsByIdResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getAll(listIds, includeFilters, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch multiple lists in a single request by **ILS list ID**. The response will include the definitions of all lists that exist for the `listIds` provided.
     * Fetch Multiple Lists
     * @param [listIds] The **ILS IDs** of the lists to fetch.
     * @param [includeFilters] A flag indicating whether or not the response object list definitions should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public getAll(listIds?: Array<string>, includeFilters?: boolean, _options?: ConfigurationOptions): Observable<ListsByIdResponse> {
        return this.getAllWithHttpInfo(listIds, includeFilters, _options).pipe(map((apiResponse: HttpInfo<ListsByIdResponse>) => apiResponse.data));
    }

    /**
     * Fetch a single list by **ILS list ID**.
     * Fetch List by ID
     * @param listId The **ILS ID** of the list to fetch.
     * @param [includeFilters] A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public getByIdWithHttpInfo(listId: string, includeFilters?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ListFetchResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getById(listId, includeFilters, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch a single list by **ILS list ID**.
     * Fetch List by ID
     * @param listId The **ILS ID** of the list to fetch.
     * @param [includeFilters] A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public getById(listId: string, includeFilters?: boolean, _options?: ConfigurationOptions): Observable<ListFetchResponse> {
        return this.getByIdWithHttpInfo(listId, includeFilters, _options).pipe(map((apiResponse: HttpInfo<ListFetchResponse>) => apiResponse.data));
    }

    /**
     * Fetch a single list by list name and object type.
     * Fetch List by Name
     * @param listName The name of the list to fetch. This is **not** case sensitive.
     * @param objectTypeId The object type ID of the object types stored by the list to fetch. For example, &#x60;0-1&#x60; for a &#x60;CONTACT&#x60; list.
     * @param [includeFilters] A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public getByNameWithHttpInfo(listName: string, objectTypeId: string, includeFilters?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ListFetchResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getByName(listName, objectTypeId, includeFilters, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByNameWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch a single list by list name and object type.
     * Fetch List by Name
     * @param listName The name of the list to fetch. This is **not** case sensitive.
     * @param objectTypeId The object type ID of the object types stored by the list to fetch. For example, &#x60;0-1&#x60; for a &#x60;CONTACT&#x60; list.
     * @param [includeFilters] A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public getByName(listName: string, objectTypeId: string, includeFilters?: boolean, _options?: ConfigurationOptions): Observable<ListFetchResponse> {
        return this.getByNameWithHttpInfo(listName, objectTypeId, includeFilters, _options).pipe(map((apiResponse: HttpInfo<ListFetchResponse>) => apiResponse.data));
    }

    /**
     * Retrieve the conversion details for a list. This can be used to check for an upcoming conversion, or to get the details of when a list was already converted.
     * Retrieve the conversion details for a list
     * @param listId The ID of the list to schedule the conversion for.
     */
    public getConversionDetailsWithHttpInfo(listId: string, _options?: ConfigurationOptions): Observable<HttpInfo<PublicListConversionResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getConversionDetails(listId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getConversionDetailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the conversion details for a list. This can be used to check for an upcoming conversion, or to get the details of when a list was already converted.
     * Retrieve the conversion details for a list
     * @param listId The ID of the list to schedule the conversion for.
     */
    public getConversionDetails(listId: string, _options?: ConfigurationOptions): Observable<PublicListConversionResponse> {
        return this.getConversionDetailsWithHttpInfo(listId, _options).pipe(map((apiResponse: HttpInfo<PublicListConversionResponse>) => apiResponse.data));
    }

    /**
     * Delete a list by **ILS list ID**. Lists deleted through this endpoint can be restored up to 90-days following the delete. After 90-days, the list is purged and can no longer be restored.
     * Delete a List
     * @param listId The **ILS ID** of the list to delete.
     */
    public removeWithHttpInfo(listId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.remove(listId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a list by **ILS list ID**. Lists deleted through this endpoint can be restored up to 90-days following the delete. After 90-days, the list is purged and can no longer be restored.
     * Delete a List
     * @param listId The **ILS ID** of the list to delete.
     */
    public remove(listId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.removeWithHttpInfo(listId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Restore a previously deleted list by **ILS list ID**. Deleted lists are eligible to be restored up-to 90-days after the list has been deleted.
     * Restore a List
     * @param listId The **ILS ID** of the list to restore.
     */
    public restoreWithHttpInfo(listId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.restore(listId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restoreWithHttpInfo(rsp)));
            }));
    }

    /**
     * Restore a previously deleted list by **ILS list ID**. Deleted lists are eligible to be restored up-to 90-days after the list has been deleted.
     * Restore a List
     * @param listId The **ILS ID** of the list to restore.
     */
    public restore(listId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.restoreWithHttpInfo(listId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Schedule the conversion of an active list into a static list, or update the already scheduled conversion. This can be scheduled for a specific date or based on activity.
     * Schedule or update the conversion of a list to static
     * @param listId The ID of the list to schedule the conversion for.
     * @param publicListConversionTime
     */
    public scheduleOrUpdateConversionWithHttpInfo(listId: string, publicListConversionTime: PublicListConversionTime, _options?: ConfigurationOptions): Observable<HttpInfo<PublicListConversionResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.scheduleOrUpdateConversion(listId, publicListConversionTime, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.scheduleOrUpdateConversionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Schedule the conversion of an active list into a static list, or update the already scheduled conversion. This can be scheduled for a specific date or based on activity.
     * Schedule or update the conversion of a list to static
     * @param listId The ID of the list to schedule the conversion for.
     * @param publicListConversionTime
     */
    public scheduleOrUpdateConversion(listId: string, publicListConversionTime: PublicListConversionTime, _options?: ConfigurationOptions): Observable<PublicListConversionResponse> {
        return this.scheduleOrUpdateConversionWithHttpInfo(listId, publicListConversionTime, _options).pipe(map((apiResponse: HttpInfo<PublicListConversionResponse>) => apiResponse.data));
    }

    /**
     * Update the filter branch definition of a `DYNAMIC` list. Once updated, the list memberships will be re-evaluated and updated to match the new definition.
     * Update List Filter Definition
     * @param listId The **ILS ID** of the list to update.
     * @param listFilterUpdateRequest
     * @param [enrollObjectsInWorkflows] A flag indicating whether or not the memberships added to the list as a result of the filter change should be enrolled in workflows that are relevant to this list.
     */
    public updateListFiltersWithHttpInfo(listId: string, listFilterUpdateRequest: ListFilterUpdateRequest, enrollObjectsInWorkflows?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ListUpdateResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.updateListFilters(listId, listFilterUpdateRequest, enrollObjectsInWorkflows, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateListFiltersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the filter branch definition of a `DYNAMIC` list. Once updated, the list memberships will be re-evaluated and updated to match the new definition.
     * Update List Filter Definition
     * @param listId The **ILS ID** of the list to update.
     * @param listFilterUpdateRequest
     * @param [enrollObjectsInWorkflows] A flag indicating whether or not the memberships added to the list as a result of the filter change should be enrolled in workflows that are relevant to this list.
     */
    public updateListFilters(listId: string, listFilterUpdateRequest: ListFilterUpdateRequest, enrollObjectsInWorkflows?: boolean, _options?: ConfigurationOptions): Observable<ListUpdateResponse> {
        return this.updateListFiltersWithHttpInfo(listId, listFilterUpdateRequest, enrollObjectsInWorkflows, _options).pipe(map((apiResponse: HttpInfo<ListUpdateResponse>) => apiResponse.data));
    }

    /**
     * Update the name of a list. The name must be globally unique relative to all other public lists in the portal.
     * Update List Name
     * @param listId The **ILS ID** of the list to update.
     * @param [listName] The name to update the list to.
     * @param [includeFilters] A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public updateNameWithHttpInfo(listId: string, listName?: string, includeFilters?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ListUpdateResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.updateName(listId, listName, includeFilters, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateNameWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the name of a list. The name must be globally unique relative to all other public lists in the portal.
     * Update List Name
     * @param listId The **ILS ID** of the list to update.
     * @param [listName] The name to update the list to.
     * @param [includeFilters] A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public updateName(listId: string, listName?: string, includeFilters?: boolean, _options?: ConfigurationOptions): Observable<ListUpdateResponse> {
        return this.updateNameWithHttpInfo(listId, listName, includeFilters, _options).pipe(map((apiResponse: HttpInfo<ListUpdateResponse>) => apiResponse.data));
    }

}

import { MappingApiRequestFactory, MappingApiResponseProcessor} from "../apis/MappingApi";
export class ObservableMappingApi {
    private requestFactory: MappingApiRequestFactory;
    private responseProcessor: MappingApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MappingApiRequestFactory,
        responseProcessor?: MappingApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MappingApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MappingApiResponseProcessor();
    }

    /**
     * This API allows translation of legacy list id to list id. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id
     * @param [legacyListId] The legacy list id from lists v1 API.
     */
    public translateLegacyListIdToListIdWithHttpInfo(legacyListId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<PublicMigrationMapping>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.translateLegacyListIdToListId(legacyListId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.translateLegacyListIdToListIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows translation of legacy list id to list id. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id
     * @param [legacyListId] The legacy list id from lists v1 API.
     */
    public translateLegacyListIdToListId(legacyListId?: string, _options?: ConfigurationOptions): Observable<PublicMigrationMapping> {
        return this.translateLegacyListIdToListIdWithHttpInfo(legacyListId, _options).pipe(map((apiResponse: HttpInfo<PublicMigrationMapping>) => apiResponse.data));
    }

    /**
     * This API allows translation of a batch of legacy list id\'s to list id\'s. This allows for a maximum of 10,000 id\'s. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id in Batch
     * @param requestBody
     */
    public translateLegacyListIdToListIdBatchWithHttpInfo(requestBody: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<PublicBatchMigrationMapping>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.translateLegacyListIdToListIdBatch(requestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.translateLegacyListIdToListIdBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows translation of a batch of legacy list id\'s to list id\'s. This allows for a maximum of 10,000 id\'s. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id in Batch
     * @param requestBody
     */
    public translateLegacyListIdToListIdBatch(requestBody: Array<string>, _options?: ConfigurationOptions): Observable<PublicBatchMigrationMapping> {
        return this.translateLegacyListIdToListIdBatchWithHttpInfo(requestBody, _options).pipe(map((apiResponse: HttpInfo<PublicBatchMigrationMapping>) => apiResponse.data));
    }

}

import { MembershipsApiRequestFactory, MembershipsApiResponseProcessor} from "../apis/MembershipsApi";
export class ObservableMembershipsApi {
    private requestFactory: MembershipsApiRequestFactory;
    private responseProcessor: MembershipsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MembershipsApiRequestFactory,
        responseProcessor?: MembershipsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MembershipsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MembershipsApiResponseProcessor();
    }

    /**
     * Add the records provided to the list. Records that do not exist or that are already members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add Records to a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param requestBody The IDs of the records to add to the list.
     */
    public addWithHttpInfo(listId: string, requestBody: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<MembershipsUpdateResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.add(listId, requestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add the records provided to the list. Records that do not exist or that are already members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add Records to a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param requestBody The IDs of the records to add to the list.
     */
    public add(listId: string, requestBody: Array<string>, _options?: ConfigurationOptions): Observable<MembershipsUpdateResponse> {
        return this.addWithHttpInfo(listId, requestBody, _options).pipe(map((apiResponse: HttpInfo<MembershipsUpdateResponse>) => apiResponse.data));
    }

    /**
     * Add all of the records from a *source list* (specified by the `sourceListId`) to a *destination list* (specified by the `listId`). Records that are already members of the *destination list* will be ignored. The *destination* and *source list* IDs must be different. The *destination* and *source lists* must contain records of the same type (e.g. contacts, companies, etc.).  This endpoint only works for *destination lists* that have a `processingType` of `MANUAL` or `SNAPSHOT`. The *source list* can have any `processingType`.  This endpoint only supports a `sourceListId` for lists with less than 100,000 memberships.
     * Add All Records from a Source List to a Destination List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; *destination list*, which the *source list* records are added to.
     * @param sourceListId The **ILS ID** of the *source list* to grab the records from, which are then added to the *destination list*.
     */
    public addAllFromListWithHttpInfo(listId: string, sourceListId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.addAllFromList(listId, sourceListId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAllFromListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add all of the records from a *source list* (specified by the `sourceListId`) to a *destination list* (specified by the `listId`). Records that are already members of the *destination list* will be ignored. The *destination* and *source list* IDs must be different. The *destination* and *source lists* must contain records of the same type (e.g. contacts, companies, etc.).  This endpoint only works for *destination lists* that have a `processingType` of `MANUAL` or `SNAPSHOT`. The *source list* can have any `processingType`.  This endpoint only supports a `sourceListId` for lists with less than 100,000 memberships.
     * Add All Records from a Source List to a Destination List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; *destination list*, which the *source list* records are added to.
     * @param sourceListId The **ILS ID** of the *source list* to grab the records from, which are then added to the *destination list*.
     */
    public addAllFromList(listId: string, sourceListId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.addAllFromListWithHttpInfo(listId, sourceListId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Add and/or remove records that have already been created in the system to and/or from a list.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add and/or Remove Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param membershipChangeRequest The IDs of the records to add and/or remove from the list.
     */
    public addAndRemoveWithHttpInfo(listId: string, membershipChangeRequest: MembershipChangeRequest, _options?: ConfigurationOptions): Observable<HttpInfo<MembershipsUpdateResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.addAndRemove(listId, membershipChangeRequest, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAndRemoveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add and/or remove records that have already been created in the system to and/or from a list.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add and/or Remove Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param membershipChangeRequest The IDs of the records to add and/or remove from the list.
     */
    public addAndRemove(listId: string, membershipChangeRequest: MembershipChangeRequest, _options?: ConfigurationOptions): Observable<MembershipsUpdateResponse> {
        return this.addAndRemoveWithHttpInfo(listId, membershipChangeRequest, _options).pipe(map((apiResponse: HttpInfo<MembershipsUpdateResponse>) => apiResponse.data));
    }

    /**
     * For given record provide lists this record is member of.
     * Get lists record is member of
     * @param objectTypeId Object type id of the record
     * @param recordId Id of the record
     */
    public getListsWithHttpInfo(objectTypeId: string, recordId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ApiCollectionResponseRecordListMembershipNoPaging>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getLists(objectTypeId, recordId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getListsWithHttpInfo(rsp)));
            }));
    }

    /**
     * For given record provide lists this record is member of.
     * Get lists record is member of
     * @param objectTypeId Object type id of the record
     * @param recordId Id of the record
     */
    public getLists(objectTypeId: string, recordId: string, _options?: ConfigurationOptions): Observable<ApiCollectionResponseRecordListMembershipNoPaging> {
        return this.getListsWithHttpInfo(objectTypeId, recordId, _options).pipe(map((apiResponse: HttpInfo<ApiCollectionResponseRecordListMembershipNoPaging>) => apiResponse.data));
    }

    /**
     * Fetch the memberships of a list in order sorted by the `recordId` of the records in the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by ID
     * @param listId The **ILS ID** of the list.
     * @param [after] The paging offset token for the page that comes &#x60;after&#x60; the previously requested records.  If provided, then the records in the response will be the records following the offset, sorted in *ascending* order. Takes precedence over the &#x60;before&#x60; offset.
     * @param [before] The paging offset token for the page that comes &#x60;before&#x60; the previously requested records.  If provided, then the records in the response will be the records preceding the offset, sorted in *descending* order.
     * @param [limit] The number of records to return in the response. The maximum &#x60;limit&#x60; is 250.
     */
    public getPageWithHttpInfo(listId: string, after?: string, before?: string, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ApiCollectionResponseJoinTimeAndRecordId>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getPage(listId, after, before, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch the memberships of a list in order sorted by the `recordId` of the records in the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by ID
     * @param listId The **ILS ID** of the list.
     * @param [after] The paging offset token for the page that comes &#x60;after&#x60; the previously requested records.  If provided, then the records in the response will be the records following the offset, sorted in *ascending* order. Takes precedence over the &#x60;before&#x60; offset.
     * @param [before] The paging offset token for the page that comes &#x60;before&#x60; the previously requested records.  If provided, then the records in the response will be the records preceding the offset, sorted in *descending* order.
     * @param [limit] The number of records to return in the response. The maximum &#x60;limit&#x60; is 250.
     */
    public getPage(listId: string, after?: string, before?: string, limit?: number, _options?: ConfigurationOptions): Observable<ApiCollectionResponseJoinTimeAndRecordId> {
        return this.getPageWithHttpInfo(listId, after, before, limit, _options).pipe(map((apiResponse: HttpInfo<ApiCollectionResponseJoinTimeAndRecordId>) => apiResponse.data));
    }

    /**
     * Fetch the memberships of a list in order sorted by the time the records were added to the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by Added to List Date
     * @param listId The **ILS ID** of the list.
     * @param [after] The paging offset token for the page that comes &#x60;after&#x60; the previously requested records.  If provided, then the records in the response will be the records following the offset, sorted in *ascending* order. Takes precedence over the &#x60;before&#x60; offset.
     * @param [before] The paging offset token for the page that comes &#x60;before&#x60; the previously requested records.  If provided, then the records in the response will be the records preceding the offset, sorted in *descending* order.
     * @param [limit] The number of records to return in the response. The maximum &#x60;limit&#x60; is 250.
     */
    public getPageOrderedByAddedToListDateWithHttpInfo(listId: string, after?: string, before?: string, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ApiCollectionResponseJoinTimeAndRecordId>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.getPageOrderedByAddedToListDate(listId, after, before, limit, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPageOrderedByAddedToListDateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch the memberships of a list in order sorted by the time the records were added to the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by Added to List Date
     * @param listId The **ILS ID** of the list.
     * @param [after] The paging offset token for the page that comes &#x60;after&#x60; the previously requested records.  If provided, then the records in the response will be the records following the offset, sorted in *ascending* order. Takes precedence over the &#x60;before&#x60; offset.
     * @param [before] The paging offset token for the page that comes &#x60;before&#x60; the previously requested records.  If provided, then the records in the response will be the records preceding the offset, sorted in *descending* order.
     * @param [limit] The number of records to return in the response. The maximum &#x60;limit&#x60; is 250.
     */
    public getPageOrderedByAddedToListDate(listId: string, after?: string, before?: string, limit?: number, _options?: ConfigurationOptions): Observable<ApiCollectionResponseJoinTimeAndRecordId> {
        return this.getPageOrderedByAddedToListDateWithHttpInfo(listId, after, before, limit, _options).pipe(map((apiResponse: HttpInfo<ApiCollectionResponseJoinTimeAndRecordId>) => apiResponse.data));
    }

    /**
     * Remove the records provided from the list. Records that do not exist or that are not members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Remove Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param requestBody The IDs of the records to remove from the list.
     */
    public removeWithHttpInfo(listId: string, requestBody: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<MembershipsUpdateResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.remove(listId, requestBody, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove the records provided from the list. Records that do not exist or that are not members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Remove Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param requestBody The IDs of the records to remove from the list.
     */
    public remove(listId: string, requestBody: Array<string>, _options?: ConfigurationOptions): Observable<MembershipsUpdateResponse> {
        return this.removeWithHttpInfo(listId, requestBody, _options).pipe(map((apiResponse: HttpInfo<MembershipsUpdateResponse>) => apiResponse.data));
    }

    /**
     * Remove **all** of the records from a list. ***Note:*** *The list is not deleted.*  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.  This endpoint only supports lists that have less than 100,000 memberships.
     * Delete All Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     */
    public removeAllWithHttpInfo(listId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = calltimeMiddleware
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware || this.configuration.middleware
		};
	}

        const requestContextPromise = this.requestFactory.removeAll(listId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.removeAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove **all** of the records from a list. ***Note:*** *The list is not deleted.*  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.  This endpoint only supports lists that have less than 100,000 memberships.
     * Delete All Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     */
    public removeAll(listId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.removeAllWithHttpInfo(listId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
