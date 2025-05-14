import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { CollectionResponsePublicPermissionSetNoPaging } from '../models/CollectionResponsePublicPermissionSetNoPaging';
import { CollectionResponsePublicTeamNoPaging } from '../models/CollectionResponsePublicTeamNoPaging';
import { CollectionResponsePublicUserForwardPaging } from '../models/CollectionResponsePublicUserForwardPaging';
import { PublicUser } from '../models/PublicUser';
import { PublicUserUpdate } from '../models/PublicUserUpdate';
import { UserProvisionRequest } from '../models/UserProvisionRequest';
import { ObservableRolesApi } from './ObservableAPI';

import { RolesApiRequestFactory, RolesApiResponseProcessor} from "../apis/RolesApi";
export class PromiseRolesApi {
    private api: ObservableRolesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RolesApiRequestFactory,
        responseProcessor?: RolesApiResponseProcessor
    ) {
        this.api = new ObservableRolesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the roles on an account
     * Retrieves the roles on an account
     */
    public getAllWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicPermissionSetNoPaging>> {
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
        const result = this.api.getAllWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves the roles on an account
     * Retrieves the roles on an account
     */
    public getAll(_options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicPermissionSetNoPaging> {
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
        const result = this.api.getAll(observableOptions);
        return result.toPromise();
    }


}



import { ObservableTeamsApi } from './ObservableAPI';

import { TeamsApiRequestFactory, TeamsApiResponseProcessor} from "../apis/TeamsApi";
export class PromiseTeamsApi {
    private api: ObservableTeamsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TeamsApiRequestFactory,
        responseProcessor?: TeamsApiResponseProcessor
    ) {
        this.api = new ObservableTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * View teams for this account
     * See details about this account\'s teams
     */
    public getAllWithHttpInfo(_options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicTeamNoPaging>> {
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
        const result = this.api.getAllWithHttpInfo(observableOptions);
        return result.toPromise();
    }

    /**
     * View teams for this account
     * See details about this account\'s teams
     */
    public getAll(_options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicTeamNoPaging> {
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
        const result = this.api.getAll(observableOptions);
        return result.toPromise();
    }


}



import { ObservableUsersApi } from './ObservableAPI';

import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";
export class PromiseUsersApi {
    private api: ObservableUsersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UsersApiRequestFactory,
        responseProcessor?: UsersApiResponseProcessor
    ) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Removes a user identified by `userId`. `userId` refers to the user\'s ID by default, or optionally email as specified by the `IdProperty` query param.
     * Removes a user
     * @param userId Identifier of user to delete
     * @param [idProperty] The name of a property with unique user values. Valid values are &#x60;USER_ID&#x60;(default) or &#x60;EMAIL&#x60;
     */
    public archiveWithHttpInfo(userId: string, idProperty?: 'USER_ID' | 'EMAIL', _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveWithHttpInfo(userId, idProperty, observableOptions);
        return result.toPromise();
    }

    /**
     * Removes a user identified by `userId`. `userId` refers to the user\'s ID by default, or optionally email as specified by the `IdProperty` query param.
     * Removes a user
     * @param userId Identifier of user to delete
     * @param [idProperty] The name of a property with unique user values. Valid values are &#x60;USER_ID&#x60;(default) or &#x60;EMAIL&#x60;
     */
    public archive(userId: string, idProperty?: 'USER_ID' | 'EMAIL', _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archive(userId, idProperty, observableOptions);
        return result.toPromise();
    }

    /**
     * New users will only have minimal permissions, which is contacts-base. A welcome email will prompt them to set a password and log in to HubSpot.
     * Adds a user
     * @param userProvisionRequest
     */
    public createWithHttpInfo(userProvisionRequest: UserProvisionRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicUser>> {
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
        const result = this.api.createWithHttpInfo(userProvisionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * New users will only have minimal permissions, which is contacts-base. A welcome email will prompt them to set a password and log in to HubSpot.
     * Adds a user
     * @param userProvisionRequest
     */
    public create(userProvisionRequest: UserProvisionRequest, _options?: PromiseConfigurationOptions): Promise<PublicUser> {
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
        const result = this.api.create(userProvisionRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a user identified by `userId`. `userId` refers to the user\'s ID by default, or optionally email as specified by the `IdProperty` query param.
     * Retrieves a user
     * @param userId Identifier of user to retrieve
     * @param [idProperty] The name of a property with unique user values. Valid values are &#x60;USER_ID&#x60;(default) or &#x60;EMAIL&#x60;
     */
    public getByIdWithHttpInfo(userId: string, idProperty?: 'USER_ID' | 'EMAIL', _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicUser>> {
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
        const result = this.api.getByIdWithHttpInfo(userId, idProperty, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a user identified by `userId`. `userId` refers to the user\'s ID by default, or optionally email as specified by the `IdProperty` query param.
     * Retrieves a user
     * @param userId Identifier of user to retrieve
     * @param [idProperty] The name of a property with unique user values. Valid values are &#x60;USER_ID&#x60;(default) or &#x60;EMAIL&#x60;
     */
    public getById(userId: string, idProperty?: 'USER_ID' | 'EMAIL', _options?: PromiseConfigurationOptions): Promise<PublicUser> {
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
        const result = this.api.getById(userId, idProperty, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of users from an account
     * Retrieves a list of users from an account
     * @param [limit] The number of users to retrieve
     * @param [after] Results will display maximum 100 users per page. Additional results will be on the next page.
     */
    public getPageWithHttpInfo(limit?: number, after?: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicUserForwardPaging>> {
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
        const result = this.api.getPageWithHttpInfo(limit, after, observableOptions);
        return result.toPromise();
    }

    /**
     * Retrieves a list of users from an account
     * Retrieves a list of users from an account
     * @param [limit] The number of users to retrieve
     * @param [after] Results will display maximum 100 users per page. Additional results will be on the next page.
     */
    public getPage(limit?: number, after?: string, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicUserForwardPaging> {
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
        const result = this.api.getPage(limit, after, observableOptions);
        return result.toPromise();
    }

    /**
     * Modifies a user identified by `userId`. `userId` refers to the user\'s ID by default, or optionally email as specified by the `IdProperty` query param.
     * Modifies a user
     * @param userId Identifier of user to retrieve
     * @param publicUserUpdate
     * @param [idProperty] The name of a property with unique user values. Valid values are &#x60;USER_ID&#x60;(default) or &#x60;EMAIL&#x60;
     */
    public replaceWithHttpInfo(userId: string, publicUserUpdate: PublicUserUpdate, idProperty?: 'USER_ID' | 'EMAIL', _options?: PromiseConfigurationOptions): Promise<HttpInfo<PublicUser>> {
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
        const result = this.api.replaceWithHttpInfo(userId, publicUserUpdate, idProperty, observableOptions);
        return result.toPromise();
    }

    /**
     * Modifies a user identified by `userId`. `userId` refers to the user\'s ID by default, or optionally email as specified by the `IdProperty` query param.
     * Modifies a user
     * @param userId Identifier of user to retrieve
     * @param publicUserUpdate
     * @param [idProperty] The name of a property with unique user values. Valid values are &#x60;USER_ID&#x60;(default) or &#x60;EMAIL&#x60;
     */
    public replace(userId: string, publicUserUpdate: PublicUserUpdate, idProperty?: 'USER_ID' | 'EMAIL', _options?: PromiseConfigurationOptions): Promise<PublicUser> {
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
        const result = this.api.replace(userId, publicUserUpdate, idProperty, observableOptions);
        return result.toPromise();
    }


}



