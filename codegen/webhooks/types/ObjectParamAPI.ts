import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { BatchInputSubscriptionBatchUpdateRequest } from '../models/BatchInputSubscriptionBatchUpdateRequest';
import { BatchResponseSubscriptionResponse } from '../models/BatchResponseSubscriptionResponse';
import { BatchResponseSubscriptionResponseWithErrors } from '../models/BatchResponseSubscriptionResponseWithErrors';
import { SettingsChangeRequest } from '../models/SettingsChangeRequest';
import { SettingsResponse } from '../models/SettingsResponse';
import { SubscriptionCreateRequest } from '../models/SubscriptionCreateRequest';
import { SubscriptionListResponse } from '../models/SubscriptionListResponse';
import { SubscriptionPatchRequest } from '../models/SubscriptionPatchRequest';
import { SubscriptionResponse } from '../models/SubscriptionResponse';

import { ObservableSettingsApi } from "./ObservableAPI";
import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";

export interface SettingsApiClearRequest {
    /**
     * 
     * @type number
     * @memberof SettingsApiclear
     */
    appId: number
}

export interface SettingsApiConfigureRequest {
    /**
     * 
     * @type number
     * @memberof SettingsApiconfigure
     */
    appId: number
    /**
     * 
     * @type SettingsChangeRequest
     * @memberof SettingsApiconfigure
     */
    settingsChangeRequest: SettingsChangeRequest
}

export interface SettingsApiGetAllRequest {
    /**
     * 
     * @type number
     * @memberof SettingsApigetAll
     */
    appId: number
}

export class ObjectSettingsApi {
    private api: ObservableSettingsApi

    public constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public clearWithHttpInfo(param: SettingsApiClearRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.clearWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public clear(param: SettingsApiClearRequest, options?: Configuration): Promise<void> {
        return this.api.clear(param.appId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public configureWithHttpInfo(param: SettingsApiConfigureRequest, options?: Configuration): Promise<HttpInfo<SettingsResponse>> {
        return this.api.configureWithHttpInfo(param.appId, param.settingsChangeRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public configure(param: SettingsApiConfigureRequest, options?: Configuration): Promise<SettingsResponse> {
        return this.api.configure(param.appId, param.settingsChangeRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllWithHttpInfo(param: SettingsApiGetAllRequest, options?: Configuration): Promise<HttpInfo<SettingsResponse>> {
        return this.api.getAllWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAll(param: SettingsApiGetAllRequest, options?: Configuration): Promise<SettingsResponse> {
        return this.api.getAll(param.appId,  options).toPromise();
    }

}

import { ObservableSubscriptionsApi } from "./ObservableAPI";
import { SubscriptionsApiRequestFactory, SubscriptionsApiResponseProcessor} from "../apis/SubscriptionsApi";

export interface SubscriptionsApiArchiveRequest {
    /**
     * 
     * @type number
     * @memberof SubscriptionsApiarchive
     */
    subscriptionId: number
    /**
     * 
     * @type number
     * @memberof SubscriptionsApiarchive
     */
    appId: number
}

export interface SubscriptionsApiCreateRequest {
    /**
     * 
     * @type number
     * @memberof SubscriptionsApicreate
     */
    appId: number
    /**
     * 
     * @type SubscriptionCreateRequest
     * @memberof SubscriptionsApicreate
     */
    subscriptionCreateRequest: SubscriptionCreateRequest
}

export interface SubscriptionsApiGetAllRequest {
    /**
     * 
     * @type number
     * @memberof SubscriptionsApigetAll
     */
    appId: number
}

export interface SubscriptionsApiGetByIdRequest {
    /**
     * 
     * @type number
     * @memberof SubscriptionsApigetById
     */
    subscriptionId: number
    /**
     * 
     * @type number
     * @memberof SubscriptionsApigetById
     */
    appId: number
}

export interface SubscriptionsApiUpdateRequest {
    /**
     * 
     * @type number
     * @memberof SubscriptionsApiupdate
     */
    subscriptionId: number
    /**
     * 
     * @type number
     * @memberof SubscriptionsApiupdate
     */
    appId: number
    /**
     * 
     * @type SubscriptionPatchRequest
     * @memberof SubscriptionsApiupdate
     */
    subscriptionPatchRequest: SubscriptionPatchRequest
}

export interface SubscriptionsApiUpdateBatchRequest {
    /**
     * 
     * @type number
     * @memberof SubscriptionsApiupdateBatch
     */
    appId: number
    /**
     * 
     * @type BatchInputSubscriptionBatchUpdateRequest
     * @memberof SubscriptionsApiupdateBatch
     */
    batchInputSubscriptionBatchUpdateRequest: BatchInputSubscriptionBatchUpdateRequest
}

export class ObjectSubscriptionsApi {
    private api: ObservableSubscriptionsApi

    public constructor(configuration: Configuration, requestFactory?: SubscriptionsApiRequestFactory, responseProcessor?: SubscriptionsApiResponseProcessor) {
        this.api = new ObservableSubscriptionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public archiveWithHttpInfo(param: SubscriptionsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.subscriptionId, param.appId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public archive(param: SubscriptionsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.subscriptionId, param.appId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createWithHttpInfo(param: SubscriptionsApiCreateRequest, options?: Configuration): Promise<HttpInfo<SubscriptionResponse>> {
        return this.api.createWithHttpInfo(param.appId, param.subscriptionCreateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public create(param: SubscriptionsApiCreateRequest, options?: Configuration): Promise<SubscriptionResponse> {
        return this.api.create(param.appId, param.subscriptionCreateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAllWithHttpInfo(param: SubscriptionsApiGetAllRequest, options?: Configuration): Promise<HttpInfo<SubscriptionListResponse>> {
        return this.api.getAllWithHttpInfo(param.appId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAll(param: SubscriptionsApiGetAllRequest, options?: Configuration): Promise<SubscriptionListResponse> {
        return this.api.getAll(param.appId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: SubscriptionsApiGetByIdRequest, options?: Configuration): Promise<HttpInfo<SubscriptionResponse>> {
        return this.api.getByIdWithHttpInfo(param.subscriptionId, param.appId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getById(param: SubscriptionsApiGetByIdRequest, options?: Configuration): Promise<SubscriptionResponse> {
        return this.api.getById(param.subscriptionId, param.appId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateWithHttpInfo(param: SubscriptionsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<SubscriptionResponse>> {
        return this.api.updateWithHttpInfo(param.subscriptionId, param.appId, param.subscriptionPatchRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public update(param: SubscriptionsApiUpdateRequest, options?: Configuration): Promise<SubscriptionResponse> {
        return this.api.update(param.subscriptionId, param.appId, param.subscriptionPatchRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateBatchWithHttpInfo(param: SubscriptionsApiUpdateBatchRequest, options?: Configuration): Promise<HttpInfo<BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors>> {
        return this.api.updateBatchWithHttpInfo(param.appId, param.batchInputSubscriptionBatchUpdateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateBatch(param: SubscriptionsApiUpdateBatchRequest, options?: Configuration): Promise<BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors> {
        return this.api.updateBatch(param.appId, param.batchInputSubscriptionBatchUpdateRequest,  options).toPromise();
    }

}
