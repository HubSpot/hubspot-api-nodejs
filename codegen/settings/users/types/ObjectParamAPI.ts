import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { CollectionResponsePublicPermissionSetNoPaging } from '../models/CollectionResponsePublicPermissionSetNoPaging';
import { CollectionResponsePublicTeamNoPaging } from '../models/CollectionResponsePublicTeamNoPaging';
import { CollectionResponsePublicUserForwardPaging } from '../models/CollectionResponsePublicUserForwardPaging';
import { PublicUser } from '../models/PublicUser';
import { PublicUserUpdate } from '../models/PublicUserUpdate';
import { UserProvisionRequest } from '../models/UserProvisionRequest';

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiSettingsUsersV3Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApisettingsUsersV3
     */
    after?: string
    /**
     * 
     * Defaults to: undefined
     * @type number
     * @memberof BasicApisettingsUsersV3
     */
    limit?: number
}

export interface BasicApiSettingsUsersV30Request {
    /**
     * 
     * @type UserProvisionRequest
     * @memberof BasicApisettingsUsersV3_1
     */
    userProvisionRequest: UserProvisionRequest
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public settingsUsersV3WithHttpInfo(param: BasicApiSettingsUsersV3Request = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicUserForwardPaging>> {
        return this.api.settingsUsersV3WithHttpInfo(param.after, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public settingsUsersV3(param: BasicApiSettingsUsersV3Request = {}, options?: ConfigurationOptions): Promise<CollectionResponsePublicUserForwardPaging> {
        return this.api.settingsUsersV3(param.after, param.limit,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public settingsUsersV3_1WithHttpInfo(param: BasicApiSettingsUsersV30Request, options?: ConfigurationOptions): Promise<HttpInfo<PublicUser>> {
        return this.api.settingsUsersV3_1WithHttpInfo(param.userProvisionRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public settingsUsersV3_1(param: BasicApiSettingsUsersV30Request, options?: ConfigurationOptions): Promise<PublicUser> {
        return this.api.settingsUsersV3_1(param.userProvisionRequest,  options).toPromise();
    }

}

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
    public getAllWithHttpInfo(param: RolesApiGetAllRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicPermissionSetNoPaging>> {
        return this.api.getAllWithHttpInfo( options).toPromise();
    }

    /**
     * Retrieves the roles on an account
     * Retrieves the roles on an account
     * @param param the request object
     */
    public getAll(param: RolesApiGetAllRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponsePublicPermissionSetNoPaging> {
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
    public getAllWithHttpInfo(param: TeamsApiGetAllRequest = {}, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicTeamNoPaging>> {
        return this.api.getAllWithHttpInfo( options).toPromise();
    }

    /**
     * View teams for this account
     * See details about this account\'s teams
     * @param param the request object
     */
    public getAll(param: TeamsApiGetAllRequest = {}, options?: ConfigurationOptions): Promise<CollectionResponsePublicTeamNoPaging> {
        return this.api.getAll( options).toPromise();
    }

}

import { ObservableUsersApi } from "./ObservableAPI";
import { UsersApiRequestFactory, UsersApiResponseProcessor} from "../apis/UsersApi";

export interface UsersApiArchiveRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiarchive
     */
    userId: string
    /**
     * 
     * Defaults to: undefined
     * @type &#39;EMAIL&#39; | &#39;USER_ID&#39;
     * @memberof UsersApiarchive
     */
    idProperty?: 'EMAIL' | 'USER_ID'
}

export interface UsersApiGetByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApigetById
     */
    userId: string
    /**
     * 
     * Defaults to: undefined
     * @type &#39;EMAIL&#39; | &#39;USER_ID&#39;
     * @memberof UsersApigetById
     */
    idProperty?: 'EMAIL' | 'USER_ID'
}

export interface UsersApiUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof UsersApiupdate
     */
    userId: string
    /**
     * 
     * @type PublicUserUpdate
     * @memberof UsersApiupdate
     */
    publicUserUpdate: PublicUserUpdate
    /**
     * 
     * Defaults to: undefined
     * @type &#39;EMAIL&#39; | &#39;USER_ID&#39;
     * @memberof UsersApiupdate
     */
    idProperty?: 'EMAIL' | 'USER_ID'
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
    public archiveWithHttpInfo(param: UsersApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.userId, param.idProperty,  options).toPromise();
    }

    /**
     * Removes a user identified by `userId`. `userId` refers to the user\'s ID by default, or optionally email as specified by the `IdProperty` query param.
     * Removes a user
     * @param param the request object
     */
    public archive(param: UsersApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.userId, param.idProperty,  options).toPromise();
    }

    /**
     * Retrieves a user identified by `userId`. `userId` refers to the user\'s ID by default, or optionally email as specified by the `IdProperty` query param.
     * Retrieves a user
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: UsersApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicUser>> {
        return this.api.getByIdWithHttpInfo(param.userId, param.idProperty,  options).toPromise();
    }

    /**
     * Retrieves a user identified by `userId`. `userId` refers to the user\'s ID by default, or optionally email as specified by the `IdProperty` query param.
     * Retrieves a user
     * @param param the request object
     */
    public getById(param: UsersApiGetByIdRequest, options?: ConfigurationOptions): Promise<PublicUser> {
        return this.api.getById(param.userId, param.idProperty,  options).toPromise();
    }

    /**
     * Modifies a user identified by `userId`. `userId` refers to the user\'s ID by default, or optionally email as specified by the `IdProperty` query param.
     * Modifies a user
     * @param param the request object
     */
    public updateWithHttpInfo(param: UsersApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<PublicUser>> {
        return this.api.updateWithHttpInfo(param.userId, param.publicUserUpdate, param.idProperty,  options).toPromise();
    }

    /**
     * Modifies a user identified by `userId`. `userId` refers to the user\'s ID by default, or optionally email as specified by the `IdProperty` query param.
     * Modifies a user
     * @param param the request object
     */
    public update(param: UsersApiUpdateRequest, options?: ConfigurationOptions): Promise<PublicUser> {
        return this.api.update(param.userId, param.publicUserUpdate, param.idProperty,  options).toPromise();
    }

}
