import { Configuration} from '../configuration'

import { BatchInputCallbackCompletionBatchRequest } from '../models/BatchInputCallbackCompletionBatchRequest';
import { CallbackCompletionRequest } from '../models/CallbackCompletionRequest';
import { CollectionResponsePublicActionDefinitionForwardPaging } from '../models/CollectionResponsePublicActionDefinitionForwardPaging';
import { CollectionResponsePublicActionFunctionIdentifierNoPaging } from '../models/CollectionResponsePublicActionFunctionIdentifierNoPaging';
import { CollectionResponsePublicActionRevisionForwardPaging } from '../models/CollectionResponsePublicActionRevisionForwardPaging';
import { PublicActionDefinition } from '../models/PublicActionDefinition';
import { PublicActionDefinitionEgg } from '../models/PublicActionDefinitionEgg';
import { PublicActionDefinitionPatch } from '../models/PublicActionDefinitionPatch';
import { PublicActionFunction } from '../models/PublicActionFunction';
import { PublicActionFunctionIdentifier } from '../models/PublicActionFunctionIdentifier';
import { PublicActionRevision } from '../models/PublicActionRevision';

import { ObservablePublicActionDefinitionsApi } from "./ObservableAPI";
import { PublicActionDefinitionsApiRequestFactory, PublicActionDefinitionsApiResponseProcessor} from "../apis/PublicActionDefinitionsApi";

export interface PublicActionDefinitionsApiArchiveRequest {
    /**
     * 
     * @type string
     * @memberof PublicActionDefinitionsApiarchive
     */
    definitionId: string
    /**
     * 
     * @type number
     * @memberof PublicActionDefinitionsApiarchive
     */
    appId: number
}

export interface PublicActionDefinitionsApiCreateRequest {
    /**
     * 
     * @type number
     * @memberof PublicActionDefinitionsApicreate
     */
    appId: number
    /**
     * 
     * @type PublicActionDefinitionEgg
     * @memberof PublicActionDefinitionsApicreate
     */
    publicActionDefinitionEgg: PublicActionDefinitionEgg
}

export interface PublicActionDefinitionsApiGetByIdRequest {
    /**
     * 
     * @type string
     * @memberof PublicActionDefinitionsApigetById
     */
    definitionId: string
    /**
     * 
     * @type number
     * @memberof PublicActionDefinitionsApigetById
     */
    appId: number
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof PublicActionDefinitionsApigetById
     */
    archived?: boolean
}

export interface PublicActionDefinitionsApiGetPageRequest {
    /**
     * 
     * @type number
     * @memberof PublicActionDefinitionsApigetPage
     */
    appId: number
    /**
     * The maximum number of results to display per page.
     * @type number
     * @memberof PublicActionDefinitionsApigetPage
     */
    limit?: number
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof PublicActionDefinitionsApigetPage
     */
    after?: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof PublicActionDefinitionsApigetPage
     */
    archived?: boolean
}

export interface PublicActionDefinitionsApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof PublicActionDefinitionsApiupdate
     */
    definitionId: string
    /**
     * 
     * @type number
     * @memberof PublicActionDefinitionsApiupdate
     */
    appId: number
    /**
     * 
     * @type PublicActionDefinitionPatch
     * @memberof PublicActionDefinitionsApiupdate
     */
    publicActionDefinitionPatch: PublicActionDefinitionPatch
}

export class ObjectPublicActionDefinitionsApi {
    private api: ObservablePublicActionDefinitionsApi

    public constructor(configuration: Configuration, requestFactory?: PublicActionDefinitionsApiRequestFactory, responseProcessor?: PublicActionDefinitionsApiResponseProcessor) {
        this.api = new ObservablePublicActionDefinitionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public archive(param: PublicActionDefinitionsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.definitionId, param.appId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public create(param: PublicActionDefinitionsApiCreateRequest, options?: Configuration): Promise<PublicActionDefinition> {
        return this.api.create(param.appId, param.publicActionDefinitionEgg,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getById(param: PublicActionDefinitionsApiGetByIdRequest, options?: Configuration): Promise<PublicActionDefinition> {
        return this.api.getById(param.definitionId, param.appId, param.archived,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getPage(param: PublicActionDefinitionsApiGetPageRequest, options?: Configuration): Promise<CollectionResponsePublicActionDefinitionForwardPaging> {
        return this.api.getPage(param.appId, param.limit, param.after, param.archived,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public update(param: PublicActionDefinitionsApiUpdateRequest, options?: Configuration): Promise<PublicActionDefinition> {
        return this.api.update(param.definitionId, param.appId, param.publicActionDefinitionPatch,  options).toPromise();
    }

}

import { ObservablePublicActionFunctionsApi } from "./ObservableAPI";
import { PublicActionFunctionsApiRequestFactory, PublicActionFunctionsApiResponseProcessor} from "../apis/PublicActionFunctionsApi";

export interface PublicActionFunctionsApiArchiveRequest {
    /**
     * 
     * @type string
     * @memberof PublicActionFunctionsApiarchive
     */
    definitionId: string
    /**
     * 
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof PublicActionFunctionsApiarchive
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * 
     * @type string
     * @memberof PublicActionFunctionsApiarchive
     */
    functionId: string
    /**
     * 
     * @type number
     * @memberof PublicActionFunctionsApiarchive
     */
    appId: number
}

export interface PublicActionFunctionsApiArchiveByFunctionTypeRequest {
    /**
     * 
     * @type string
     * @memberof PublicActionFunctionsApiarchiveByFunctionType
     */
    definitionId: string
    /**
     * 
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof PublicActionFunctionsApiarchiveByFunctionType
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * 
     * @type number
     * @memberof PublicActionFunctionsApiarchiveByFunctionType
     */
    appId: number
}

export interface PublicActionFunctionsApiCreateOrReplaceRequest {
    /**
     * 
     * @type string
     * @memberof PublicActionFunctionsApicreateOrReplace
     */
    definitionId: string
    /**
     * 
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof PublicActionFunctionsApicreateOrReplace
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * 
     * @type string
     * @memberof PublicActionFunctionsApicreateOrReplace
     */
    functionId: string
    /**
     * 
     * @type number
     * @memberof PublicActionFunctionsApicreateOrReplace
     */
    appId: number
    /**
     * 
     * @type string
     * @memberof PublicActionFunctionsApicreateOrReplace
     */
    body: string
}

export interface PublicActionFunctionsApiCreateOrReplaceByFunctionTypeRequest {
    /**
     * 
     * @type string
     * @memberof PublicActionFunctionsApicreateOrReplaceByFunctionType
     */
    definitionId: string
    /**
     * 
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof PublicActionFunctionsApicreateOrReplaceByFunctionType
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * 
     * @type number
     * @memberof PublicActionFunctionsApicreateOrReplaceByFunctionType
     */
    appId: number
    /**
     * 
     * @type string
     * @memberof PublicActionFunctionsApicreateOrReplaceByFunctionType
     */
    body: string
}

export interface PublicActionFunctionsApiGetByFunctionTypeRequest {
    /**
     * 
     * @type string
     * @memberof PublicActionFunctionsApigetByFunctionType
     */
    definitionId: string
    /**
     * 
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof PublicActionFunctionsApigetByFunctionType
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * 
     * @type number
     * @memberof PublicActionFunctionsApigetByFunctionType
     */
    appId: number
}

export interface PublicActionFunctionsApiGetByIdRequest {
    /**
     * 
     * @type string
     * @memberof PublicActionFunctionsApigetById
     */
    definitionId: string
    /**
     * 
     * @type &#39;PRE_ACTION_EXECUTION&#39; | &#39;PRE_FETCH_OPTIONS&#39; | &#39;POST_FETCH_OPTIONS&#39; | &#39;POST_ACTION_EXECUTION&#39;
     * @memberof PublicActionFunctionsApigetById
     */
    functionType: 'PRE_ACTION_EXECUTION' | 'PRE_FETCH_OPTIONS' | 'POST_FETCH_OPTIONS' | 'POST_ACTION_EXECUTION'
    /**
     * 
     * @type string
     * @memberof PublicActionFunctionsApigetById
     */
    functionId: string
    /**
     * 
     * @type number
     * @memberof PublicActionFunctionsApigetById
     */
    appId: number
}

export interface PublicActionFunctionsApiGetPageRequest {
    /**
     * 
     * @type string
     * @memberof PublicActionFunctionsApigetPage
     */
    definitionId: string
    /**
     * 
     * @type number
     * @memberof PublicActionFunctionsApigetPage
     */
    appId: number
}

export class ObjectPublicActionFunctionsApi {
    private api: ObservablePublicActionFunctionsApi

    public constructor(configuration: Configuration, requestFactory?: PublicActionFunctionsApiRequestFactory, responseProcessor?: PublicActionFunctionsApiResponseProcessor) {
        this.api = new ObservablePublicActionFunctionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public archive(param: PublicActionFunctionsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.definitionId, param.functionType, param.functionId, param.appId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public archiveByFunctionType(param: PublicActionFunctionsApiArchiveByFunctionTypeRequest, options?: Configuration): Promise<void> {
        return this.api.archiveByFunctionType(param.definitionId, param.functionType, param.appId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createOrReplace(param: PublicActionFunctionsApiCreateOrReplaceRequest, options?: Configuration): Promise<PublicActionFunctionIdentifier> {
        return this.api.createOrReplace(param.definitionId, param.functionType, param.functionId, param.appId, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public createOrReplaceByFunctionType(param: PublicActionFunctionsApiCreateOrReplaceByFunctionTypeRequest, options?: Configuration): Promise<PublicActionFunctionIdentifier> {
        return this.api.createOrReplaceByFunctionType(param.definitionId, param.functionType, param.appId, param.body,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getByFunctionType(param: PublicActionFunctionsApiGetByFunctionTypeRequest, options?: Configuration): Promise<PublicActionFunction> {
        return this.api.getByFunctionType(param.definitionId, param.functionType, param.appId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getById(param: PublicActionFunctionsApiGetByIdRequest, options?: Configuration): Promise<PublicActionFunction> {
        return this.api.getById(param.definitionId, param.functionType, param.functionId, param.appId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getPage(param: PublicActionFunctionsApiGetPageRequest, options?: Configuration): Promise<CollectionResponsePublicActionFunctionIdentifierNoPaging> {
        return this.api.getPage(param.definitionId, param.appId,  options).toPromise();
    }

}

import { ObservablePublicActionRevisionsApi } from "./ObservableAPI";
import { PublicActionRevisionsApiRequestFactory, PublicActionRevisionsApiResponseProcessor} from "../apis/PublicActionRevisionsApi";

export interface PublicActionRevisionsApiGetByIdRequest {
    /**
     * 
     * @type string
     * @memberof PublicActionRevisionsApigetById
     */
    definitionId: string
    /**
     * 
     * @type string
     * @memberof PublicActionRevisionsApigetById
     */
    revisionId: string
    /**
     * 
     * @type number
     * @memberof PublicActionRevisionsApigetById
     */
    appId: number
}

export interface PublicActionRevisionsApiGetPageRequest {
    /**
     * 
     * @type string
     * @memberof PublicActionRevisionsApigetPage
     */
    definitionId: string
    /**
     * 
     * @type number
     * @memberof PublicActionRevisionsApigetPage
     */
    appId: number
    /**
     * The maximum number of results to display per page.
     * @type number
     * @memberof PublicActionRevisionsApigetPage
     */
    limit?: number
    /**
     * The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @type string
     * @memberof PublicActionRevisionsApigetPage
     */
    after?: string
}

export class ObjectPublicActionRevisionsApi {
    private api: ObservablePublicActionRevisionsApi

    public constructor(configuration: Configuration, requestFactory?: PublicActionRevisionsApiRequestFactory, responseProcessor?: PublicActionRevisionsApiResponseProcessor) {
        this.api = new ObservablePublicActionRevisionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public getById(param: PublicActionRevisionsApiGetByIdRequest, options?: Configuration): Promise<PublicActionRevision> {
        return this.api.getById(param.definitionId, param.revisionId, param.appId,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public getPage(param: PublicActionRevisionsApiGetPageRequest, options?: Configuration): Promise<CollectionResponsePublicActionRevisionForwardPaging> {
        return this.api.getPage(param.definitionId, param.appId, param.limit, param.after,  options).toPromise();
    }

}

import { ObservablePublicCallbacksApi } from "./ObservableAPI";
import { PublicCallbacksApiRequestFactory, PublicCallbacksApiResponseProcessor} from "../apis/PublicCallbacksApi";

export interface PublicCallbacksApiCompleteRequest {
    /**
     * 
     * @type string
     * @memberof PublicCallbacksApicomplete
     */
    callbackId: string
    /**
     * 
     * @type CallbackCompletionRequest
     * @memberof PublicCallbacksApicomplete
     */
    callbackCompletionRequest: CallbackCompletionRequest
}

export interface PublicCallbacksApiCompleteBatchRequest {
    /**
     * 
     * @type BatchInputCallbackCompletionBatchRequest
     * @memberof PublicCallbacksApicompleteBatch
     */
    batchInputCallbackCompletionBatchRequest: BatchInputCallbackCompletionBatchRequest
}

export class ObjectPublicCallbacksApi {
    private api: ObservablePublicCallbacksApi

    public constructor(configuration: Configuration, requestFactory?: PublicCallbacksApiRequestFactory, responseProcessor?: PublicCallbacksApiResponseProcessor) {
        this.api = new ObservablePublicCallbacksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public complete(param: PublicCallbacksApiCompleteRequest, options?: Configuration): Promise<void> {
        return this.api.complete(param.callbackId, param.callbackCompletionRequest,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public completeBatch(param: PublicCallbacksApiCompleteBatchRequest, options?: Configuration): Promise<void> {
        return this.api.completeBatch(param.batchInputCallbackCompletionBatchRequest,  options).toPromise();
    }

}
