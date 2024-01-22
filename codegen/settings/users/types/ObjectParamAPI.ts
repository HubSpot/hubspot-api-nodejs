import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CollectionResponsePublicPermissionSetNoPaging } from '../models/CollectionResponsePublicPermissionSetNoPaging';
import { CollectionResponsePublicTeamNoPaging } from '../models/CollectionResponsePublicTeamNoPaging';
import { CollectionResponsePublicUserForwardPaging } from '../models/CollectionResponsePublicUserForwardPaging';
import { PublicUser } from '../models/PublicUser';
import { PublicUserUpdate } from '../models/PublicUserUpdate';
import { UserProvisionRequest } from '../models/UserProvisionRequest';

import { ObservableRolesApi } from "./ObservableAPI";
import { RolesApiRequestFactory, RolesApiResponseProcessor} from "../apis/RolesApi";

export interface RolesApiGetAllRequest {
}

export class ObjectRolesApi {
    private api: ObservableRolesApi

    public constructor(configuration: Configuration, requestFactory?: RolesApiRequestFactory, responseProcessor?: RolesApiResponseProcessor) {
        this.api = new ObservableRolesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the roles on an account
     * Retrieves the roles on an account
     * @param param the request object
     */
    public getAllWithHttpInfo(param: RolesApiGetAllRequest = {}, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicPermissionSetNoPaging>> {
        return this.api.getAllWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieves the roles on an account
     * Retrieves the roles on an account
     * @param param the request object
     */
    public getAll(param: RolesApiGetAllRequest = {}, options?: Configuration): Promise<CollectionResponsePublicPermissionSetNoPaging> {
        return this.api.getAll( options).toPromise();
    }

}

import { ObservableTeamsApi } from "./ObservableAPI";
import { TeamsApiRequestFactory, TeamsApiResponseProcessor} from "../apis/TeamsApi";

export interface TeamsApiGetAllRequest {
}

export class ObjectTeamsApi {
    private api: ObservableTeamsApi

    public constructor(configuration: Configuration, requestFactory?: TeamsApiRequestFactory, responseProcessor?: TeamsApiResponseProcessor) {
        this.api = new ObservableTeamsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * View teams for this account
     * See details about this account\'s teams
     * @param param the request object
     */
    public getAllWithHttpInfo(param: TeamsApiGetAllRequest = {}, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicTeamNoPaging>> {
        return this.api.getAllWithHttpInfo( options).toPromise();
    }

    /**
     * View teams for this account
     * See details about this account\'s teams
     * @param param the request object
     */
    public getAll(param: TeamsApiGetAllRequest = {}, options?: Configuration): Promise<CollectionResponsePublicTeamNoPaging> {
        return this.api.getAll( options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiArchiveRequest {
    /**
     * Identifier of user to delete
     * @type string
     * @memberof UsersApiarchive
     */
    userId: string
    /**
     * The name of a property with unique user values. Valid values are &#x60;USER_ID&#x60;(default) or &#x60;EMAIL&#x60;
     * @type string
     * @memberof UsersApiarchive
     */
    idProperty?: string
}

export interface UsersApiCreateRequest {
    /**
     * 
     * @type UserProvisionRequest
     * @memberof UsersApicreate
     */
    userProvisionRequest: UserProvisionRequest
}

export interface UsersApiGetByIdRequest {
    /**
     * Identifier of user to retrieve
     * @type string
     * @memberof UsersApigetById
     */
    userId: string
    /**
     * The name of a property with unique user values. Valid values are &#x60;USER_ID&#x60;(default) or &#x60;EMAIL&#x60;
     * @type string
     * @memberof UsersApigetById
     */
    idProperty?: string
}

export interface UsersApiGetPageRequest {
    /**
     * The number of users to retrieve
     * @type number
     * @memberof UsersApigetPage
     */
    limit?: number
    /**
     * Results will display maximum 100 users per page. Additional results will be on the next page.
     * @type string
     * @memberof UsersApigetPage
     */
    after?: string
}

export interface UsersApiReplaceRequest {
    /**
     * Identifier of user to retrieve
     * @type string
     * @memberof UsersApireplace
     */
    userId: string
    /**
     * 
     * @type PublicUserUpdate
     * @memberof UsersApireplace
     */
    publicUserUpdate: PublicUserUpdate
    /**
     * The name of a property with unique user values. Valid values are &#x60;USER_ID&#x60;(default) or &#x60;EMAIL&#x60;
     * @type string
     * @memberof UsersApireplace
     */
    idProperty?: string
}

export class ObjectUsersApi {
    private api: ObservableUsersApi

    public constructor(configuration: Configuration, requestFactory?: UsersApiRequestFactory, responseProcessor?: UsersApiResponseProcessor) {
        this.api = new ObservableUsersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Removes a user identified by `userId`. `userId` refers to the user\'s ID by default, or optionally email as specified by the `IdProperty` query param.
     * Removes a user
     * @param param the request object
     */
    public archiveWithHttpInfo(param: UsersApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.userId, param.idProperty,  options).toPromise();
    }

    /**
     * Removes a user identified by `userId`. `userId` refers to the user\'s ID by default, or optionally email as specified by the `IdProperty` query param.
     * Removes a user
     * @param param the request object
     */
    public archive(param: UsersApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.userId, param.idProperty,  options).toPromise();
    }

    /**
     * New users will only have minimal permissions, which is contacts-base. A welcome email will prompt them to set a password and log in to HubSpot.
     * Adds a user
     * @param param the request object
     */
    public createWithHttpInfo(param: UsersApiCreateRequest, options?: Configuration): Promise<HttpInfo<PublicUser>> {
        return this.api.createWithHttpInfo(param.userProvisionRequest,  options).toPromise();
    }

    /**
     * New users will only have minimal permissions, which is contacts-base. A welcome email will prompt them to set a password and log in to HubSpot.
     * Adds a user
     * @param param the request object
     */
    public create(param: UsersApiCreateRequest, options?: Configuration): Promise<PublicUser> {
        return this.api.create(param.userProvisionRequest,  options).toPromise();
    }

    /**
     * Retrieves a user identified by `userId`. `userId` refers to the user\'s ID by default, or optionally email as specified by the `IdProperty` query param.
     * Retrieves a user
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: UsersApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<PublicUser>> {
        return this.api.getByIdWithHttpInfo(param.userId, param.idProperty,  options).toPromise();
    }

    /**
     * Retrieves a user identified by `userId`. `userId` refers to the user\'s ID by default, or optionally email as specified by the `IdProperty` query param.
     * Retrieves a user
     * @param param the request object
     */
    public getById(param: UsersApiGetByIdRequest, options?: Configuration): Promise<PublicUser> {
        return this.api.getById(param.userId, param.idProperty,  options).toPromise();
    }

    /**
     * Retrieves a list of users from an account
     * Retrieves a list of users from an account
     * @param param the request object
     */
    public getPageWithHttpInfo(param: UsersApiGetPageRequest = {}, options?: Configuration): Promise<HttpInfo<CollectionResponsePublicUserForwardPaging>> {
        return this.api.getPageWithHttpInfo(param.limit, param.after,  options).toPromise();
    }

    /**
     * Retrieves a list of users from an account
     * Retrieves a list of users from an account
     * @param param the request object
     */
    public getPage(param: UsersApiGetPageRequest = {}, options?: Configuration): Promise<CollectionResponsePublicUserForwardPaging> {
        return this.api.getPage(param.limit, param.after,  options).toPromise();
    }

    /**
     * Modifies a user identified by `userId`. `userId` refers to the user\'s ID by default, or optionally email as specified by the `IdProperty` query param.
     * Modifies a user
     * @param param the request object
     */
    public replaceWithHttpInfo(param: UsersApiReplaceRequest, options?: Configuration): Promise<HttpInfo<PublicUser>> {
        return this.api.replaceWithHttpInfo(param.userId, param.publicUserUpdate, param.idProperty,  options).toPromise();
    }

    /**
     * Modifies a user identified by `userId`. `userId` refers to the user\'s ID by default, or optionally email as specified by the `IdProperty` query param.
     * Modifies a user
     * @param param the request object
     */
    public replace(param: UsersApiReplaceRequest, options?: Configuration): Promise<PublicUser> {
        return this.api.replace(param.userId, param.publicUserUpdate, param.idProperty,  options).toPromise();
    }

}
