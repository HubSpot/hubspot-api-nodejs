import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { BatchInputSubscriptionBatchUpdateRequest } from '../models/BatchInputSubscriptionBatchUpdateRequest';
import { BatchResponseSubscriptionResponse } from '../models/BatchResponseSubscriptionResponse';
import { BatchResponseSubscriptionResponseWithErrors } from '../models/BatchResponseSubscriptionResponseWithErrors';
import { ErrorCategory } from '../models/ErrorCategory';
import { ErrorDetail } from '../models/ErrorDetail';
import { ModelError } from '../models/ModelError';
import { SettingsChangeRequest } from '../models/SettingsChangeRequest';
import { SettingsResponse } from '../models/SettingsResponse';
import { StandardError } from '../models/StandardError';
import { SubscriptionBatchUpdateRequest } from '../models/SubscriptionBatchUpdateRequest';
import { SubscriptionCreateRequest } from '../models/SubscriptionCreateRequest';
import { SubscriptionListResponse } from '../models/SubscriptionListResponse';
import { SubscriptionPatchRequest } from '../models/SubscriptionPatchRequest';
import { SubscriptionResponse } from '../models/SubscriptionResponse';
import { ThrottlingSettings } from '../models/ThrottlingSettings';

import { ObservableSettingsApi } from "./ObservableAPI";
import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";

export interface SettingsApiClearRequest {
    /**
     * 
     * @type number
     * @memberof SettingsApiclear
     */
    appId: number
    /**
     * 
     * @type number
     * @memberof SettingsApiclear
     */
    appId2: number
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
     * @type number
     * @memberof SettingsApiconfigure
     */
    appId2: number
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
    /**
     * 
     * @type number
     * @memberof SettingsApigetAll
     */
    appId2: number
}

export class ObjectSettingsApi {
    private api: ObservableSettingsApi

    public constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public clear(param: SettingsApiClearRequest, options?: Configuration): Promise<void> {
        return this.api.clear(param.appId, param.appId2,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public configure(param: SettingsApiConfigureRequest, options?: Configuration): Promise<SettingsResponse> {
        return this.api.configure(param.appId, param.appId2, param.settingsChangeRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAll(param: SettingsApiGetAllRequest, options?: Configuration): Promise<SettingsResponse> {
        return this.api.getAll(param.appId, param.appId2,  options).toPromise();
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
    /**
     * 
     * @type number
     * @memberof SubscriptionsApiarchive
     */
    appId2: number
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
     * @type number
     * @memberof SubscriptionsApicreate
     */
    appId2: number
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
    /**
     * 
     * @type number
     * @memberof SubscriptionsApigetAll
     */
    appId2: number
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
    /**
     * 
     * @type number
     * @memberof SubscriptionsApigetById
     */
    appId2: number
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
     * @type number
     * @memberof SubscriptionsApiupdate
     */
    appId2: number
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
     * @type number
     * @memberof SubscriptionsApiupdateBatch
     */
    appId2: number
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
    public archive(param: SubscriptionsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.subscriptionId, param.appId, param.appId2,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public create(param: SubscriptionsApiCreateRequest, options?: Configuration): Promise<SubscriptionResponse> {
        return this.api.create(param.appId, param.appId2, param.subscriptionCreateRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getAll(param: SubscriptionsApiGetAllRequest, options?: Configuration): Promise<SubscriptionListResponse> {
        return this.api.getAll(param.appId, param.appId2,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getById(param: SubscriptionsApiGetByIdRequest, options?: Configuration): Promise<SubscriptionResponse> {
        return this.api.getById(param.subscriptionId, param.appId, param.appId2,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public update(param: SubscriptionsApiUpdateRequest, options?: Configuration): Promise<SubscriptionResponse> {
        return this.api.update(param.subscriptionId, param.appId, param.appId2, param.subscriptionPatchRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public updateBatch(param: SubscriptionsApiUpdateBatchRequest, options?: Configuration): Promise<BatchResponseSubscriptionResponse | BatchResponseSubscriptionResponseWithErrors> {
        return this.api.updateBatch(param.appId, param.appId2, param.batchInputSubscriptionBatchUpdateRequest,  options).toPromise();
    }

}
