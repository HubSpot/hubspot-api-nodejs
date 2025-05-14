import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CollectionResponsePublicPermissionSetNoPaging } from '../models/CollectionResponsePublicPermissionSetNoPaging';
import { CollectionResponsePublicTeamNoPaging } from '../models/CollectionResponsePublicTeamNoPaging';
import { CollectionResponsePublicUserForwardPaging } from '../models/CollectionResponsePublicUserForwardPaging';
import { PublicUser } from '../models/PublicUser';
import { PublicUserUpdate } from '../models/PublicUserUpdate';
import { UserProvisionRequest } from '../models/UserProvisionRequest';

import { RolesApiRequestFactory, RolesApiResponseProcessor} from "../apis/RolesApi";
export class ObservableRolesApi {
    private requestFactory: RolesApiRequestFactory;
    private responseProcessor: RolesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: RolesApiRequestFactory,
        responseProcessor?: RolesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new RolesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new RolesApiResponseProcessor();
    }

    /**
     * Retrieves the roles on an account
     * Retrieves the roles on an account
     */
    public getAllWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<CollectionResponsePublicPermissionSetNoPaging>> {
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

        const requestContextPromise = this.requestFactory.getAll(_config);
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
     * Retrieves the roles on an account
     * Retrieves the roles on an account
     */
    public getAll(_options?: ConfigurationOptions): Observable<CollectionResponsePublicPermissionSetNoPaging> {
        return this.getAllWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<CollectionResponsePublicPermissionSetNoPaging>) => apiResponse.data));
    }

}

import { TeamsApiRequestFactory, TeamsApiResponseProcessor} from "../apis/TeamsApi";
export class ObservableTeamsApi {
    private requestFactory: TeamsApiRequestFactory;
    private responseProcessor: TeamsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamsApiRequestFactory,
        responseProcessor?: TeamsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TeamsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TeamsApiResponseProcessor();
    }

    /**
     * View teams for this account
     * See details about this account\'s teams
     */
    public getAllWithHttpInfo(_options?: ConfigurationOptions): Observable<HttpInfo<CollectionResponsePublicTeamNoPaging>> {
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

        const requestContextPromise = this.requestFactory.getAll(_config);
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
     * View teams for this account
     * See details about this account\'s teams
     */
    public getAll(_options?: ConfigurationOptions): Observable<CollectionResponsePublicTeamNoPaging> {
        return this.getAllWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<CollectionResponsePublicTeamNoPaging>) => apiResponse.data));
    }

}

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class ObservableUsersApi {
    private requestFactory: UsersApiRequestFactory;
    private responseProcessor: UsersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UsersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UsersApiResponseProcessor();
    }

    /**
     * Removes a user identified by `userId`. `userId` refers to the user\'s ID by default, or optionally email as specified by the `IdProperty` query param.
     * Removes a user
     * @param userId Identifier of user to delete
     * @param [idProperty] The name of a property with unique user values. Valid values are &#x60;USER_ID&#x60;(default) or &#x60;EMAIL&#x60;
     */
    public archiveWithHttpInfo(userId: string, idProperty?: 'USER_ID' | 'EMAIL', _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
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

        const requestContextPromise = this.requestFactory.archive(userId, idProperty, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Removes a user identified by `userId`. `userId` refers to the user\'s ID by default, or optionally email as specified by the `IdProperty` query param.
     * Removes a user
     * @param userId Identifier of user to delete
     * @param [idProperty] The name of a property with unique user values. Valid values are &#x60;USER_ID&#x60;(default) or &#x60;EMAIL&#x60;
     */
    public archive(userId: string, idProperty?: 'USER_ID' | 'EMAIL', _options?: ConfigurationOptions): Observable<void> {
        return this.archiveWithHttpInfo(userId, idProperty, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * New users will only have minimal permissions, which is contacts-base. A welcome email will prompt them to set a password and log in to HubSpot.
     * Adds a user
     * @param userProvisionRequest
     */
    public createWithHttpInfo(userProvisionRequest: UserProvisionRequest, _options?: ConfigurationOptions): Observable<HttpInfo<PublicUser>> {
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

        const requestContextPromise = this.requestFactory.create(userProvisionRequest, _config);
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
     * New users will only have minimal permissions, which is contacts-base. A welcome email will prompt them to set a password and log in to HubSpot.
     * Adds a user
     * @param userProvisionRequest
     */
    public create(userProvisionRequest: UserProvisionRequest, _options?: ConfigurationOptions): Observable<PublicUser> {
        return this.createWithHttpInfo(userProvisionRequest, _options).pipe(map((apiResponse: HttpInfo<PublicUser>) => apiResponse.data));
    }

    /**
     * Retrieves a user identified by `userId`. `userId` refers to the user\'s ID by default, or optionally email as specified by the `IdProperty` query param.
     * Retrieves a user
     * @param userId Identifier of user to retrieve
     * @param [idProperty] The name of a property with unique user values. Valid values are &#x60;USER_ID&#x60;(default) or &#x60;EMAIL&#x60;
     */
    public getByIdWithHttpInfo(userId: string, idProperty?: 'USER_ID' | 'EMAIL', _options?: ConfigurationOptions): Observable<HttpInfo<PublicUser>> {
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

        const requestContextPromise = this.requestFactory.getById(userId, idProperty, _config);
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
     * Retrieves a user identified by `userId`. `userId` refers to the user\'s ID by default, or optionally email as specified by the `IdProperty` query param.
     * Retrieves a user
     * @param userId Identifier of user to retrieve
     * @param [idProperty] The name of a property with unique user values. Valid values are &#x60;USER_ID&#x60;(default) or &#x60;EMAIL&#x60;
     */
    public getById(userId: string, idProperty?: 'USER_ID' | 'EMAIL', _options?: ConfigurationOptions): Observable<PublicUser> {
        return this.getByIdWithHttpInfo(userId, idProperty, _options).pipe(map((apiResponse: HttpInfo<PublicUser>) => apiResponse.data));
    }

    /**
     * Retrieves a list of users from an account
     * Retrieves a list of users from an account
     * @param [limit] The number of users to retrieve
     * @param [after] Results will display maximum 100 users per page. Additional results will be on the next page.
     */
    public getPageWithHttpInfo(limit?: number, after?: string, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionResponsePublicUserForwardPaging>> {
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

        const requestContextPromise = this.requestFactory.getPage(limit, after, _config);
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
     * Retrieves a list of users from an account
     * Retrieves a list of users from an account
     * @param [limit] The number of users to retrieve
     * @param [after] Results will display maximum 100 users per page. Additional results will be on the next page.
     */
    public getPage(limit?: number, after?: string, _options?: ConfigurationOptions): Observable<CollectionResponsePublicUserForwardPaging> {
        return this.getPageWithHttpInfo(limit, after, _options).pipe(map((apiResponse: HttpInfo<CollectionResponsePublicUserForwardPaging>) => apiResponse.data));
    }

    /**
     * Modifies a user identified by `userId`. `userId` refers to the user\'s ID by default, or optionally email as specified by the `IdProperty` query param.
     * Modifies a user
     * @param userId Identifier of user to retrieve
     * @param publicUserUpdate
     * @param [idProperty] The name of a property with unique user values. Valid values are &#x60;USER_ID&#x60;(default) or &#x60;EMAIL&#x60;
     */
    public replaceWithHttpInfo(userId: string, publicUserUpdate: PublicUserUpdate, idProperty?: 'USER_ID' | 'EMAIL', _options?: ConfigurationOptions): Observable<HttpInfo<PublicUser>> {
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

        const requestContextPromise = this.requestFactory.replace(userId, publicUserUpdate, idProperty, _config);
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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Modifies a user identified by `userId`. `userId` refers to the user\'s ID by default, or optionally email as specified by the `IdProperty` query param.
     * Modifies a user
     * @param userId Identifier of user to retrieve
     * @param publicUserUpdate
     * @param [idProperty] The name of a property with unique user values. Valid values are &#x60;USER_ID&#x60;(default) or &#x60;EMAIL&#x60;
     */
    public replace(userId: string, publicUserUpdate: PublicUserUpdate, idProperty?: 'USER_ID' | 'EMAIL', _options?: ConfigurationOptions): Observable<PublicUser> {
        return this.replaceWithHttpInfo(userId, publicUserUpdate, idProperty, _options).pipe(map((apiResponse: HttpInfo<PublicUser>) => apiResponse.data));
    }

}
