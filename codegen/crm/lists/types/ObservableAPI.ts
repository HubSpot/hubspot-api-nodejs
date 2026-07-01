import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";
export class ObservableBasicApi {
    private requestFactory: BasicApiRequestFactory;
    private responseProcessor: BasicApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicApiRequestFactory,
        responseProcessor?: BasicApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BasicApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BasicApiResponseProcessor();
    }

    /**
     * @param [includeFilters]
     * @param [listIds]
     */
    public crmV3ListsWithHttpInfo(includeFilters?: boolean, listIds?: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<ListsByIdResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3Lists(includeFilters, listIds, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param [includeFilters]
     * @param [listIds]
     */
    public crmV3Lists(includeFilters?: boolean, listIds?: Array<string>, _options?: ConfigurationOptions): Observable<ListsByIdResponse> {
        return this.crmV3ListsWithHttpInfo(includeFilters, listIds, _options).pipe(map((apiResponse: HttpInfo<ListsByIdResponse>) => apiResponse.data));
    }

    /**
     * Retrieves a folder and recursively includes all folders via the childNodes attribute.  The child lists field will be empty in all child nodes. Only the folder retrieved will include the child lists in that folder.
     * Retrieves a folder.
     * @param [folderId] The Id of the folder to retrieve.
     */
    public crmV3ListsFoldersWithHttpInfo(folderId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListFolderFetchResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsFolders(folderId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsFoldersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a folder and recursively includes all folders via the childNodes attribute.  The child lists field will be empty in all child nodes. Only the folder retrieved will include the child lists in that folder.
     * Retrieves a folder.
     * @param [folderId] The Id of the folder to retrieve.
     */
    public crmV3ListsFolders(folderId?: string, _options?: ConfigurationOptions): Observable<ListFolderFetchResponse> {
        return this.crmV3ListsFoldersWithHttpInfo(folderId, _options).pipe(map((apiResponse: HttpInfo<ListFolderFetchResponse>) => apiResponse.data));
    }

    /**
     * Deletes the folder with the given Id.
     * Deletes a folder
     * @param folderId The ID of the folder to delete
     */
    public crmV3ListsFoldersFolderIdWithHttpInfo(folderId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsFoldersFolderId(folderId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsFoldersFolderIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes the folder with the given Id.
     * Deletes a folder
     * @param folderId The ID of the folder to delete
     */
    public crmV3ListsFoldersFolderId(folderId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.crmV3ListsFoldersFolderIdWithHttpInfo(folderId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * This moves the folder from its current location to a new location. It updates the parent of this folder to the new Id given.
     * Moves a folder
     * @param folderId The ID of the folder to move
     * @param newParentFolderId The ID for the target parent folder.
     */
    public crmV3ListsFoldersFolderIdMoveNewParentFolderIdWithHttpInfo(folderId: string, newParentFolderId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListFolderFetchResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsFoldersFolderIdMoveNewParentFolderId(folderId, newParentFolderId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsFoldersFolderIdMoveNewParentFolderIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * This moves the folder from its current location to a new location. It updates the parent of this folder to the new Id given.
     * Moves a folder
     * @param folderId The ID of the folder to move
     * @param newParentFolderId The ID for the target parent folder.
     */
    public crmV3ListsFoldersFolderIdMoveNewParentFolderId(folderId: string, newParentFolderId: string, _options?: ConfigurationOptions): Observable<ListFolderFetchResponse> {
        return this.crmV3ListsFoldersFolderIdMoveNewParentFolderIdWithHttpInfo(folderId, newParentFolderId, _options).pipe(map((apiResponse: HttpInfo<ListFolderFetchResponse>) => apiResponse.data));
    }

    /**
     * Renames the given folderId with a new name.
     * Rename a folder
     * @param folderId The ID of the folder to rename
     * @param [newFolderName] The new name of the folder.
     */
    public crmV3ListsFoldersFolderIdRenameWithHttpInfo(folderId: string, newFolderName?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListFolderFetchResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsFoldersFolderIdRename(folderId, newFolderName, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsFoldersFolderIdRenameWithHttpInfo(rsp)));
            }));
    }

    /**
     * Renames the given folderId with a new name.
     * Rename a folder
     * @param folderId The ID of the folder to rename
     * @param [newFolderName] The new name of the folder.
     */
    public crmV3ListsFoldersFolderIdRename(folderId: string, newFolderName?: string, _options?: ConfigurationOptions): Observable<ListFolderFetchResponse> {
        return this.crmV3ListsFoldersFolderIdRenameWithHttpInfo(folderId, newFolderName, _options).pipe(map((apiResponse: HttpInfo<ListFolderFetchResponse>) => apiResponse.data));
    }

    /**
     * Given a list and a folder, the list will be moved to that folder.
     * Moves a list to a given folder
     * @param listMoveRequest
     */
    public crmV3ListsFoldersMoveListWithHttpInfo(listMoveRequest: ListMoveRequest, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsFoldersMoveList(listMoveRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsFoldersMoveListWithHttpInfo(rsp)));
            }));
    }

    /**
     * Given a list and a folder, the list will be moved to that folder.
     * Moves a list to a given folder
     * @param listMoveRequest
     */
    public crmV3ListsFoldersMoveList(listMoveRequest: ListMoveRequest, _options?: ConfigurationOptions): Observable<void> {
        return this.crmV3ListsFoldersMoveListWithHttpInfo(listMoveRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a folder with the given information.
     * Creates a folder
     * @param listFolderCreateRequest
     */
    public crmV3ListsFolders_1WithHttpInfo(listFolderCreateRequest: ListFolderCreateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ListFolderCreateResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsFolders_1(listFolderCreateRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsFolders_1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a folder with the given information.
     * Creates a folder
     * @param listFolderCreateRequest
     */
    public crmV3ListsFolders_1(listFolderCreateRequest: ListFolderCreateRequest, _options?: ConfigurationOptions): Observable<ListFolderCreateResponse> {
        return this.crmV3ListsFolders_1WithHttpInfo(listFolderCreateRequest, _options).pipe(map((apiResponse: HttpInfo<ListFolderCreateResponse>) => apiResponse.data));
    }

    /**
     * This API allows translation of legacy list id to list id. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id
     * @param [legacyListId] The legacy list id from lists v1 API.
     */
    public crmV3ListsIdmappingWithHttpInfo(legacyListId?: string, _options?: ConfigurationOptions): Observable<HttpInfo<PublicMigrationMapping>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsIdmapping(legacyListId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsIdmappingWithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows translation of legacy list id to list id. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id
     * @param [legacyListId] The legacy list id from lists v1 API.
     */
    public crmV3ListsIdmapping(legacyListId?: string, _options?: ConfigurationOptions): Observable<PublicMigrationMapping> {
        return this.crmV3ListsIdmappingWithHttpInfo(legacyListId, _options).pipe(map((apiResponse: HttpInfo<PublicMigrationMapping>) => apiResponse.data));
    }

    /**
     * This API allows translation of a batch of legacy list id\'s to list id\'s. This allows for a maximum of 10,000 id\'s. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id in Batch
     * @param requestBody
     */
    public crmV3ListsIdmapping_2WithHttpInfo(requestBody: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<PublicBatchMigrationMapping>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsIdmapping_2(requestBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsIdmapping_2WithHttpInfo(rsp)));
            }));
    }

    /**
     * This API allows translation of a batch of legacy list id\'s to list id\'s. This allows for a maximum of 10,000 id\'s. This is a temporary API allowed for mapping old id\'s to new id\'s and will expire on May 30th, 2025.
     * Translate Legacy List Id to Modern List Id in Batch
     * @param requestBody
     */
    public crmV3ListsIdmapping_2(requestBody: Array<string>, _options?: ConfigurationOptions): Observable<PublicBatchMigrationMapping> {
        return this.crmV3ListsIdmapping_2WithHttpInfo(requestBody, _options).pipe(map((apiResponse: HttpInfo<PublicBatchMigrationMapping>) => apiResponse.data));
    }

    /**
     * Fetch a single list by **ILS list ID**.
     * Fetch List by ID
     * @param listId The **ILS ID** of the list to fetch.
     * @param [includeFilters] A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public crmV3ListsListIdWithHttpInfo(listId: string, includeFilters?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ListFetchResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsListId(listId, includeFilters, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsListIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Fetch a single list by **ILS list ID**.
     * Fetch List by ID
     * @param listId The **ILS ID** of the list to fetch.
     * @param [includeFilters] A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public crmV3ListsListId(listId: string, includeFilters?: boolean, _options?: ConfigurationOptions): Observable<ListFetchResponse> {
        return this.crmV3ListsListIdWithHttpInfo(listId, includeFilters, _options).pipe(map((apiResponse: HttpInfo<ListFetchResponse>) => apiResponse.data));
    }

    /**
     * Fetch the memberships of a list in order sorted by the `recordId` of the records in the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by ID
     * @param listId The **ILS ID** of the list.
     * @param [after] The paging offset token for the page that comes &#x60;after&#x60; the previously requested records.  If provided, then the records in the response will be the records following the offset, sorted in *ascending* order. Takes precedence over the &#x60;before&#x60; offset.
     * @param [before] The paging offset token for the page that comes &#x60;before&#x60; the previously requested records.  If provided, then the records in the response will be the records preceding the offset, sorted in *descending* order.
     * @param [limit] The number of records to return in the response. The maximum &#x60;limit&#x60; is 250.
     */
    public crmV3ListsListIdMembershipsWithHttpInfo(listId: string, after?: string, before?: string, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ApiCollectionResponseJoinTimeAndRecordId>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsListIdMemberships(listId, after, before, limit, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsListIdMembershipsWithHttpInfo(rsp)));
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
    public crmV3ListsListIdMemberships(listId: string, after?: string, before?: string, limit?: number, _options?: ConfigurationOptions): Observable<ApiCollectionResponseJoinTimeAndRecordId> {
        return this.crmV3ListsListIdMembershipsWithHttpInfo(listId, after, before, limit, _options).pipe(map((apiResponse: HttpInfo<ApiCollectionResponseJoinTimeAndRecordId>) => apiResponse.data));
    }

    /**
     * Add the records provided to the list. Records that do not exist or that are already members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add Records to a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param requestBody
     */
    public crmV3ListsListIdMembershipsAddWithHttpInfo(listId: string, requestBody: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<MembershipsUpdateResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsListIdMembershipsAdd(listId, requestBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsListIdMembershipsAddWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add the records provided to the list. Records that do not exist or that are already members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add Records to a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param requestBody
     */
    public crmV3ListsListIdMembershipsAdd(listId: string, requestBody: Array<string>, _options?: ConfigurationOptions): Observable<MembershipsUpdateResponse> {
        return this.crmV3ListsListIdMembershipsAddWithHttpInfo(listId, requestBody, _options).pipe(map((apiResponse: HttpInfo<MembershipsUpdateResponse>) => apiResponse.data));
    }

    /**
     * Add and/or remove records that have already been created in the system to and/or from a list.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add and/or Remove Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param membershipChangeRequest
     */
    public crmV3ListsListIdMembershipsAddAndRemoveWithHttpInfo(listId: string, membershipChangeRequest: MembershipChangeRequest, _options?: ConfigurationOptions): Observable<HttpInfo<MembershipsUpdateResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsListIdMembershipsAddAndRemove(listId, membershipChangeRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsListIdMembershipsAddAndRemoveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add and/or remove records that have already been created in the system to and/or from a list.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Add and/or Remove Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param membershipChangeRequest
     */
    public crmV3ListsListIdMembershipsAddAndRemove(listId: string, membershipChangeRequest: MembershipChangeRequest, _options?: ConfigurationOptions): Observable<MembershipsUpdateResponse> {
        return this.crmV3ListsListIdMembershipsAddAndRemoveWithHttpInfo(listId, membershipChangeRequest, _options).pipe(map((apiResponse: HttpInfo<MembershipsUpdateResponse>) => apiResponse.data));
    }

    /**
     * Add all of the records from a *source list* (specified by the `sourceListId`) to a *destination list* (specified by the `listId`). Records that are already members of the *destination list* will be ignored. The *destination* and *source list* IDs must be different. The *destination* and *source lists* must contain records of the same type (e.g. contacts, companies, etc.).  This endpoint only works for *destination lists* that have a `processingType` of `MANUAL` or `SNAPSHOT`. The *source list* can have any `processingType`.  This endpoint only supports a `sourceListId` for lists with less than 100,000 memberships.
     * Add All Records from a Source List to a Destination List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; *destination list*, which the *source list* records are added to.
     * @param sourceListId The **ILS ID** of the *source list* to grab the records from, which are then added to the *destination list*.
     */
    public crmV3ListsListIdMembershipsAddFromSourceListIdWithHttpInfo(listId: string, sourceListId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsListIdMembershipsAddFromSourceListId(listId, sourceListId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsListIdMembershipsAddFromSourceListIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Add all of the records from a *source list* (specified by the `sourceListId`) to a *destination list* (specified by the `listId`). Records that are already members of the *destination list* will be ignored. The *destination* and *source list* IDs must be different. The *destination* and *source lists* must contain records of the same type (e.g. contacts, companies, etc.).  This endpoint only works for *destination lists* that have a `processingType` of `MANUAL` or `SNAPSHOT`. The *source list* can have any `processingType`.  This endpoint only supports a `sourceListId` for lists with less than 100,000 memberships.
     * Add All Records from a Source List to a Destination List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; *destination list*, which the *source list* records are added to.
     * @param sourceListId The **ILS ID** of the *source list* to grab the records from, which are then added to the *destination list*.
     */
    public crmV3ListsListIdMembershipsAddFromSourceListId(listId: string, sourceListId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.crmV3ListsListIdMembershipsAddFromSourceListIdWithHttpInfo(listId, sourceListId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Fetch the memberships of a list in order sorted by the time the records were added to the list.  The `recordId`s are sorted in *ascending* order if an `after` offset or no offset is provided. If only a `before` offset is provided, then the records are sorted in *descending* order.  The `after` offset parameter will take precedence over the `before` offset in a case where both are provided.
     * Fetch List Memberships Ordered by Added to List Date
     * @param listId The **ILS ID** of the list.
     * @param [after] The paging offset token for the page that comes &#x60;after&#x60; the previously requested records.  If provided, then the records in the response will be the records following the offset, sorted in *ascending* order. Takes precedence over the &#x60;before&#x60; offset.
     * @param [before] The paging offset token for the page that comes &#x60;before&#x60; the previously requested records.  If provided, then the records in the response will be the records preceding the offset, sorted in *descending* order.
     * @param [limit] The number of records to return in the response. The maximum &#x60;limit&#x60; is 250.
     */
    public crmV3ListsListIdMembershipsJoinOrderWithHttpInfo(listId: string, after?: string, before?: string, limit?: number, _options?: ConfigurationOptions): Observable<HttpInfo<ApiCollectionResponseJoinTimeAndRecordId>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsListIdMembershipsJoinOrder(listId, after, before, limit, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsListIdMembershipsJoinOrderWithHttpInfo(rsp)));
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
    public crmV3ListsListIdMembershipsJoinOrder(listId: string, after?: string, before?: string, limit?: number, _options?: ConfigurationOptions): Observable<ApiCollectionResponseJoinTimeAndRecordId> {
        return this.crmV3ListsListIdMembershipsJoinOrderWithHttpInfo(listId, after, before, limit, _options).pipe(map((apiResponse: HttpInfo<ApiCollectionResponseJoinTimeAndRecordId>) => apiResponse.data));
    }

    /**
     * Remove the records provided from the list. Records that do not exist or that are not members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Remove Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param requestBody
     */
    public crmV3ListsListIdMembershipsRemoveWithHttpInfo(listId: string, requestBody: Array<string>, _options?: ConfigurationOptions): Observable<HttpInfo<MembershipsUpdateResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsListIdMembershipsRemove(listId, requestBody, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsListIdMembershipsRemoveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove the records provided from the list. Records that do not exist or that are not members of the list are ignored.  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.
     * Remove Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     * @param requestBody
     */
    public crmV3ListsListIdMembershipsRemove(listId: string, requestBody: Array<string>, _options?: ConfigurationOptions): Observable<MembershipsUpdateResponse> {
        return this.crmV3ListsListIdMembershipsRemoveWithHttpInfo(listId, requestBody, _options).pipe(map((apiResponse: HttpInfo<MembershipsUpdateResponse>) => apiResponse.data));
    }

    /**
     * Remove **all** of the records from a list. ***Note:*** *The list is not deleted.*  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.  This endpoint only supports lists that have less than 100,000 memberships.
     * Delete All Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     */
    public crmV3ListsListIdMemberships_3WithHttpInfo(listId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsListIdMemberships_3(listId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsListIdMemberships_3WithHttpInfo(rsp)));
            }));
    }

    /**
     * Remove **all** of the records from a list. ***Note:*** *The list is not deleted.*  This endpoint only works for lists that have a `processingType` of `MANUAL` or `SNAPSHOT`.  This endpoint only supports lists that have less than 100,000 memberships.
     * Delete All Records from a List
     * @param listId The **ILS ID** of the &#x60;MANUAL&#x60; or &#x60;SNAPSHOT&#x60; list.
     */
    public crmV3ListsListIdMemberships_3(listId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.crmV3ListsListIdMemberships_3WithHttpInfo(listId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Restore a previously deleted list by **ILS list ID**. Deleted lists are eligible to be restored up-to 90-days after the list has been deleted.
     * Restore a List
     * @param listId The **ILS ID** of the list to restore.
     */
    public crmV3ListsListIdRestoreWithHttpInfo(listId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsListIdRestore(listId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsListIdRestoreWithHttpInfo(rsp)));
            }));
    }

    /**
     * Restore a previously deleted list by **ILS list ID**. Deleted lists are eligible to be restored up-to 90-days after the list has been deleted.
     * Restore a List
     * @param listId The **ILS ID** of the list to restore.
     */
    public crmV3ListsListIdRestore(listId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.crmV3ListsListIdRestoreWithHttpInfo(listId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve the conversion details for a list. This can be used to check for an upcoming conversion, or to get the details of when a list was already converted.
     * Retrieve the conversion details for a list
     * @param listId The ID of the list to schedule the conversion for.
     */
    public crmV3ListsListIdScheduleConversionWithHttpInfo(listId: string, _options?: ConfigurationOptions): Observable<HttpInfo<PublicListConversionResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsListIdScheduleConversion(listId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsListIdScheduleConversionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the conversion details for a list. This can be used to check for an upcoming conversion, or to get the details of when a list was already converted.
     * Retrieve the conversion details for a list
     * @param listId The ID of the list to schedule the conversion for.
     */
    public crmV3ListsListIdScheduleConversion(listId: string, _options?: ConfigurationOptions): Observable<PublicListConversionResponse> {
        return this.crmV3ListsListIdScheduleConversionWithHttpInfo(listId, _options).pipe(map((apiResponse: HttpInfo<PublicListConversionResponse>) => apiResponse.data));
    }

    /**
     * Schedule the conversion of an active list into a static list, or update the already scheduled conversion. This can be scheduled for a specific date or based on activity.
     * Schedule or update the conversion of a list to static
     * @param listId The ID of the list to schedule the conversion for.
     * @param publicListConversionTime
     */
    public crmV3ListsListIdScheduleConversion_4WithHttpInfo(listId: string, publicListConversionTime: PublicListConversionTime, _options?: ConfigurationOptions): Observable<HttpInfo<PublicListConversionResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsListIdScheduleConversion_4(listId, publicListConversionTime, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsListIdScheduleConversion_4WithHttpInfo(rsp)));
            }));
    }

    /**
     * Schedule the conversion of an active list into a static list, or update the already scheduled conversion. This can be scheduled for a specific date or based on activity.
     * Schedule or update the conversion of a list to static
     * @param listId The ID of the list to schedule the conversion for.
     * @param publicListConversionTime
     */
    public crmV3ListsListIdScheduleConversion_4(listId: string, publicListConversionTime: PublicListConversionTime, _options?: ConfigurationOptions): Observable<PublicListConversionResponse> {
        return this.crmV3ListsListIdScheduleConversion_4WithHttpInfo(listId, publicListConversionTime, _options).pipe(map((apiResponse: HttpInfo<PublicListConversionResponse>) => apiResponse.data));
    }

    /**
     * Delete an existing scheduled conversion for a list.
     * Cancel the conversion of a list
     * @param listId The ID of the list that you want to cancel the conversion for.
     */
    public crmV3ListsListIdScheduleConversion_5WithHttpInfo(listId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsListIdScheduleConversion_5(listId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsListIdScheduleConversion_5WithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete an existing scheduled conversion for a list.
     * Cancel the conversion of a list
     * @param listId The ID of the list that you want to cancel the conversion for.
     */
    public crmV3ListsListIdScheduleConversion_5(listId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.crmV3ListsListIdScheduleConversion_5WithHttpInfo(listId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * @param listId 
     * @param [endDate] 
     * @param [startDate] 
     */
    public crmV3ListsListIdSizeAndEditsHistoryBetweenWithHttpInfo(listId: string, endDate?: Date, startDate?: Date, _options?: ConfigurationOptions): Observable<HttpInfo<ListSizeAndEditHistoryResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsListIdSizeAndEditsHistoryBetween(listId, endDate, startDate, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsListIdSizeAndEditsHistoryBetweenWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param listId 
     * @param [endDate] 
     * @param [startDate] 
     */
    public crmV3ListsListIdSizeAndEditsHistoryBetween(listId: string, endDate?: Date, startDate?: Date, _options?: ConfigurationOptions): Observable<ListSizeAndEditHistoryResponse> {
        return this.crmV3ListsListIdSizeAndEditsHistoryBetweenWithHttpInfo(listId, endDate, startDate, _options).pipe(map((apiResponse: HttpInfo<ListSizeAndEditHistoryResponse>) => apiResponse.data));
    }

    /**
     * Update the filter branch definition of a `DYNAMIC` list. Once updated, the list memberships will be re-evaluated and updated to match the new definition.
     * Update List Filter Definition
     * @param listId The **ILS ID** of the list to update.
     * @param listFilterUpdateRequest
     * @param [enrollObjectsInWorkflows] A flag indicating whether or not the memberships added to the list as a result of the filter change should be enrolled in workflows that are relevant to this list.
     */
    public crmV3ListsListIdUpdateListFiltersWithHttpInfo(listId: string, listFilterUpdateRequest: ListFilterUpdateRequest, enrollObjectsInWorkflows?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ListUpdateResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsListIdUpdateListFilters(listId, listFilterUpdateRequest, enrollObjectsInWorkflows, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsListIdUpdateListFiltersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the filter branch definition of a `DYNAMIC` list. Once updated, the list memberships will be re-evaluated and updated to match the new definition.
     * Update List Filter Definition
     * @param listId The **ILS ID** of the list to update.
     * @param listFilterUpdateRequest
     * @param [enrollObjectsInWorkflows] A flag indicating whether or not the memberships added to the list as a result of the filter change should be enrolled in workflows that are relevant to this list.
     */
    public crmV3ListsListIdUpdateListFilters(listId: string, listFilterUpdateRequest: ListFilterUpdateRequest, enrollObjectsInWorkflows?: boolean, _options?: ConfigurationOptions): Observable<ListUpdateResponse> {
        return this.crmV3ListsListIdUpdateListFiltersWithHttpInfo(listId, listFilterUpdateRequest, enrollObjectsInWorkflows, _options).pipe(map((apiResponse: HttpInfo<ListUpdateResponse>) => apiResponse.data));
    }

    /**
     * Update the name of a list. The name must be globally unique relative to all other public lists in the portal.
     * Update List Name
     * @param listId The **ILS ID** of the list to update.
     * @param [includeFilters] A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     * @param [listName] The name to update the list to.
     */
    public crmV3ListsListIdUpdateListNameWithHttpInfo(listId: string, includeFilters?: boolean, listName?: string, _options?: ConfigurationOptions): Observable<HttpInfo<ListUpdateResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsListIdUpdateListName(listId, includeFilters, listName, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsListIdUpdateListNameWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the name of a list. The name must be globally unique relative to all other public lists in the portal.
     * Update List Name
     * @param listId The **ILS ID** of the list to update.
     * @param [includeFilters] A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     * @param [listName] The name to update the list to.
     */
    public crmV3ListsListIdUpdateListName(listId: string, includeFilters?: boolean, listName?: string, _options?: ConfigurationOptions): Observable<ListUpdateResponse> {
        return this.crmV3ListsListIdUpdateListNameWithHttpInfo(listId, includeFilters, listName, _options).pipe(map((apiResponse: HttpInfo<ListUpdateResponse>) => apiResponse.data));
    }

    /**
     * Delete a list by **ILS list ID**. Lists deleted through this endpoint can be restored up to 90-days following the delete. After 90-days, the list is purged and can no longer be restored.
     * Delete a List
     * @param listId The **ILS ID** of the list to delete.
     */
    public crmV3ListsListId_6WithHttpInfo(listId: string, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsListId_6(listId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsListId_6WithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a list by **ILS list ID**. Lists deleted through this endpoint can be restored up to 90-days following the delete. After 90-days, the list is purged and can no longer be restored.
     * Delete a List
     * @param listId The **ILS ID** of the list to delete.
     */
    public crmV3ListsListId_6(listId: string, _options?: ConfigurationOptions): Observable<void> {
        return this.crmV3ListsListId_6WithHttpInfo(listId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve a specific list by its name and object type ID. This endpoint allows you to fetch details about a list, including its properties and optionally its filters. It is useful for accessing list information based on specific criteria.
     * Retrieve List by Name
     * @param listName The name of the list to fetch. This is **not** case sensitive.
     * @param objectTypeId The object type ID of the object types stored by the list to fetch. For example, &#x60;0-1&#x60; for a &#x60;CONTACT&#x60; list.
     * @param [includeFilters] A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public crmV3ListsObjectTypeIdObjectTypeIdNameListNameWithHttpInfo(listName: string, objectTypeId: string, includeFilters?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<ListFetchResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsObjectTypeIdObjectTypeIdNameListName(listName, objectTypeId, includeFilters, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsObjectTypeIdObjectTypeIdNameListNameWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve a specific list by its name and object type ID. This endpoint allows you to fetch details about a list, including its properties and optionally its filters. It is useful for accessing list information based on specific criteria.
     * Retrieve List by Name
     * @param listName The name of the list to fetch. This is **not** case sensitive.
     * @param objectTypeId The object type ID of the object types stored by the list to fetch. For example, &#x60;0-1&#x60; for a &#x60;CONTACT&#x60; list.
     * @param [includeFilters] A flag indicating whether or not the response object list definition should include a filter branch definition. By default, object list definitions will not have their filter branch definitions included in the response.
     */
    public crmV3ListsObjectTypeIdObjectTypeIdNameListName(listName: string, objectTypeId: string, includeFilters?: boolean, _options?: ConfigurationOptions): Observable<ListFetchResponse> {
        return this.crmV3ListsObjectTypeIdObjectTypeIdNameListNameWithHttpInfo(listName, objectTypeId, includeFilters, _options).pipe(map((apiResponse: HttpInfo<ListFetchResponse>) => apiResponse.data));
    }

    /**
     * For given record provide lists this record is member of.
     * Get lists record is member of
     * @param objectTypeId Object type id of the record
     * @param recordId Id of the record
     */
    public crmV3ListsRecordsObjectTypeIdRecordIdMembershipsWithHttpInfo(objectTypeId: string, recordId: string, _options?: ConfigurationOptions): Observable<HttpInfo<ApiCollectionResponseRecordListMembership>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsRecordsObjectTypeIdRecordIdMemberships(objectTypeId, recordId, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsRecordsObjectTypeIdRecordIdMembershipsWithHttpInfo(rsp)));
            }));
    }

    /**
     * For given record provide lists this record is member of.
     * Get lists record is member of
     * @param objectTypeId Object type id of the record
     * @param recordId Id of the record
     */
    public crmV3ListsRecordsObjectTypeIdRecordIdMemberships(objectTypeId: string, recordId: string, _options?: ConfigurationOptions): Observable<ApiCollectionResponseRecordListMembership> {
        return this.crmV3ListsRecordsObjectTypeIdRecordIdMembershipsWithHttpInfo(objectTypeId, recordId, _options).pipe(map((apiResponse: HttpInfo<ApiCollectionResponseRecordListMembership>) => apiResponse.data));
    }

    /**
     * @param listCreateRequest
     */
    public crmV3Lists_7WithHttpInfo(listCreateRequest: ListCreateRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ListCreateResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3Lists_7(listCreateRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3Lists_7WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param listCreateRequest
     */
    public crmV3Lists_7(listCreateRequest: ListCreateRequest, _options?: ConfigurationOptions): Observable<ListCreateResponse> {
        return this.crmV3Lists_7WithHttpInfo(listCreateRequest, _options).pipe(map((apiResponse: HttpInfo<ListCreateResponse>) => apiResponse.data));
    }

}

import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";
export class ObservableBatchApi {
    private requestFactory: BatchApiRequestFactory;
    private responseProcessor: BatchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BatchApiRequestFactory,
        responseProcessor?: BatchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BatchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BatchApiResponseProcessor();
    }

    /**
     * @param batchInputRecordIdInput
     */
    public crmV3ListsRecordsMembershipsBatchReadWithHttpInfo(batchInputRecordIdInput: BatchInputRecordIdInput, _options?: ConfigurationOptions): Observable<HttpInfo<BatchResponseRecordIdWithMembershipsWithErrors | BatchResponseRecordIdWithMemberships>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsRecordsMembershipsBatchRead(batchInputRecordIdInput, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsRecordsMembershipsBatchReadWithHttpInfo(rsp)));
            }));
    }

    /**
     * @param batchInputRecordIdInput
     */
    public crmV3ListsRecordsMembershipsBatchRead(batchInputRecordIdInput: BatchInputRecordIdInput, _options?: ConfigurationOptions): Observable<BatchResponseRecordIdWithMembershipsWithErrors | BatchResponseRecordIdWithMemberships> {
        return this.crmV3ListsRecordsMembershipsBatchReadWithHttpInfo(batchInputRecordIdInput, _options).pipe(map((apiResponse: HttpInfo<BatchResponseRecordIdWithMembershipsWithErrors | BatchResponseRecordIdWithMemberships>) => apiResponse.data));
    }

}

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";
export class ObservableSearchApi {
    private requestFactory: SearchApiRequestFactory;
    private responseProcessor: SearchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SearchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SearchApiResponseProcessor();
    }

    /**
     * Search lists by list name or page through all lists by providing an empty `query` value.
     * Search Lists
     * @param listSearchRequest
     */
    public crmV3ListsSearchWithHttpInfo(listSearchRequest: ListSearchRequest, _options?: ConfigurationOptions): Observable<HttpInfo<ListSearchResponse>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
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
        allMiddleware = [...calltimeMiddleware]
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
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.crmV3ListsSearch(listSearchRequest, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.crmV3ListsSearchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Search lists by list name or page through all lists by providing an empty `query` value.
     * Search Lists
     * @param listSearchRequest
     */
    public crmV3ListsSearch(listSearchRequest: ListSearchRequest, _options?: ConfigurationOptions): Observable<ListSearchResponse> {
        return this.crmV3ListsSearchWithHttpInfo(listSearchRequest, _options).pipe(map((apiResponse: HttpInfo<ListSearchResponse>) => apiResponse.data));
    }

}
