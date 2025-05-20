import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { CollectionResponsePipelineNoPaging } from '../models/CollectionResponsePipelineNoPaging';
import { CollectionResponsePipelineStageNoPaging } from '../models/CollectionResponsePipelineStageNoPaging';
import { CollectionResponsePublicAuditInfoNoPaging } from '../models/CollectionResponsePublicAuditInfoNoPaging';
import { Pipeline } from '../models/Pipeline';
import { PipelineInput } from '../models/PipelineInput';
import { PipelinePatchInput } from '../models/PipelinePatchInput';
import { PipelineStage } from '../models/PipelineStage';
import { PipelineStageInput } from '../models/PipelineStageInput';
import { PipelineStagePatchInput } from '../models/PipelineStagePatchInput';

import { ObservablePipelineAuditsApi } from "./ObservableAPI";
import { PipelineAuditsApiRequestFactory, PipelineAuditsApiResponseProcessor} from "../apis/PipelineAuditsApi";

export interface PipelineAuditsApiGetAuditRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelineAuditsApigetAudit
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelineAuditsApigetAudit
     */
    pipelineId: string
}

export class ObjectPipelineAuditsApi {
    private api: ObservablePipelineAuditsApi

    public constructor(configuration: Configuration, requestFactory?: PipelineAuditsApiRequestFactory, responseProcessor?: PipelineAuditsApiResponseProcessor) {
        this.api = new ObservablePipelineAuditsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return a reverse chronological list of all mutations that have occurred on the pipeline identified by `{pipelineId}`.
     * Return an audit of all changes to the pipeline
     * @param param the request object
     */
    public getAuditWithHttpInfo(param: PipelineAuditsApiGetAuditRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicAuditInfoNoPaging>> {
        return this.api.getAuditWithHttpInfo(param.objectType, param.pipelineId,  options).toPromise();
    }

    /**
     * Return a reverse chronological list of all mutations that have occurred on the pipeline identified by `{pipelineId}`.
     * Return an audit of all changes to the pipeline
     * @param param the request object
     */
    public getAudit(param: PipelineAuditsApiGetAuditRequest, options?: ConfigurationOptions): Promise<CollectionResponsePublicAuditInfoNoPaging> {
        return this.api.getAudit(param.objectType, param.pipelineId,  options).toPromise();
    }

}

import { ObservablePipelineStageAuditsApi } from "./ObservableAPI";
import { PipelineStageAuditsApiRequestFactory, PipelineStageAuditsApiResponseProcessor} from "../apis/PipelineStageAuditsApi";

export interface PipelineStageAuditsApiGetAuditRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelineStageAuditsApigetAudit
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelineStageAuditsApigetAudit
     */
    stageId: string
}

export class ObjectPipelineStageAuditsApi {
    private api: ObservablePipelineStageAuditsApi

    public constructor(configuration: Configuration, requestFactory?: PipelineStageAuditsApiRequestFactory, responseProcessor?: PipelineStageAuditsApiResponseProcessor) {
        this.api = new ObservablePipelineStageAuditsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return a reverse chronological list of all mutations that have occurred on the pipeline stage identified by `{stageId}`.
     * Return an audit of all changes to the pipeline stage
     * @param param the request object
     */
    public getAuditWithHttpInfo(param: PipelineStageAuditsApiGetAuditRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicAuditInfoNoPaging>> {
        return this.api.getAuditWithHttpInfo(param.objectType, param.stageId,  options).toPromise();
    }

    /**
     * Return a reverse chronological list of all mutations that have occurred on the pipeline stage identified by `{stageId}`.
     * Return an audit of all changes to the pipeline stage
     * @param param the request object
     */
    public getAudit(param: PipelineStageAuditsApiGetAuditRequest, options?: ConfigurationOptions): Promise<CollectionResponsePublicAuditInfoNoPaging> {
        return this.api.getAudit(param.objectType, param.stageId,  options).toPromise();
    }

}

import { ObservablePipelineStagesApi } from "./ObservableAPI";
import { PipelineStagesApiRequestFactory, PipelineStagesApiResponseProcessor} from "../apis/PipelineStagesApi";

export interface PipelineStagesApiArchiveRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelineStagesApiarchive
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelineStagesApiarchive
     */
    pipelineId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelineStagesApiarchive
     */
    stageId: string
}

export interface PipelineStagesApiCreateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelineStagesApicreate
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelineStagesApicreate
     */
    pipelineId: string
    /**
     * 
     * @type PipelineStageInput
     * @memberof PipelineStagesApicreate
     */
    pipelineStageInput: PipelineStageInput
}

export interface PipelineStagesApiGetAllRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelineStagesApigetAll
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelineStagesApigetAll
     */
    pipelineId: string
}

export interface PipelineStagesApiGetByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelineStagesApigetById
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelineStagesApigetById
     */
    pipelineId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelineStagesApigetById
     */
    stageId: string
}

export interface PipelineStagesApiReplaceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelineStagesApireplace
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelineStagesApireplace
     */
    pipelineId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelineStagesApireplace
     */
    stageId: string
    /**
     * 
     * @type PipelineStageInput
     * @memberof PipelineStagesApireplace
     */
    pipelineStageInput: PipelineStageInput
}

export interface PipelineStagesApiUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelineStagesApiupdate
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelineStagesApiupdate
     */
    pipelineId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelineStagesApiupdate
     */
    stageId: string
    /**
     * 
     * @type PipelineStagePatchInput
     * @memberof PipelineStagesApiupdate
     */
    pipelineStagePatchInput: PipelineStagePatchInput
}

export class ObjectPipelineStagesApi {
    private api: ObservablePipelineStagesApi

    public constructor(configuration: Configuration, requestFactory?: PipelineStagesApiRequestFactory, responseProcessor?: PipelineStagesApiResponseProcessor) {
        this.api = new ObservablePipelineStagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete the pipeline stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
     * Delete a pipeline stage
     * @param param the request object
     */
    public archiveWithHttpInfo(param: PipelineStagesApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.objectType, param.pipelineId, param.stageId,  options).toPromise();
    }

    /**
     * Delete the pipeline stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
     * Delete a pipeline stage
     * @param param the request object
     */
    public archive(param: PipelineStagesApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.objectType, param.pipelineId, param.stageId,  options).toPromise();
    }

    /**
     * Create a new stage associated with the pipeline identified by `{pipelineId}`. The entire stage object, including its unique ID, will be returned in the response.
     * Create a pipeline stage
     * @param param the request object
     */
    public createWithHttpInfo(param: PipelineStagesApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<PipelineStage>> {
        return this.api.createWithHttpInfo(param.objectType, param.pipelineId, param.pipelineStageInput,  options).toPromise();
    }

    /**
     * Create a new stage associated with the pipeline identified by `{pipelineId}`. The entire stage object, including its unique ID, will be returned in the response.
     * Create a pipeline stage
     * @param param the request object
     */
    public create(param: PipelineStagesApiCreateRequest, options?: ConfigurationOptions): Promise<PipelineStage> {
        return this.api.create(param.objectType, param.pipelineId, param.pipelineStageInput,  options).toPromise();
    }

    /**
     * Return all the stages associated with the pipeline identified by `{pipelineId}`.
     * Return all stages of a pipeline
     * @param param the request object
     */
    public getAllWithHttpInfo(param: PipelineStagesApiGetAllRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePipelineStageNoPaging>> {
        return this.api.getAllWithHttpInfo(param.objectType, param.pipelineId,  options).toPromise();
    }

    /**
     * Return all the stages associated with the pipeline identified by `{pipelineId}`.
     * Return all stages of a pipeline
     * @param param the request object
     */
    public getAll(param: PipelineStagesApiGetAllRequest, options?: ConfigurationOptions): Promise<CollectionResponsePipelineStageNoPaging> {
        return this.api.getAll(param.objectType, param.pipelineId,  options).toPromise();
    }

    /**
     * Return the stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
     * Return a pipeline stage by ID
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: PipelineStagesApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<PipelineStage>> {
        return this.api.getByIdWithHttpInfo(param.objectType, param.pipelineId, param.stageId,  options).toPromise();
    }

    /**
     * Return the stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
     * Return a pipeline stage by ID
     * @param param the request object
     */
    public getById(param: PipelineStagesApiGetByIdRequest, options?: ConfigurationOptions): Promise<PipelineStage> {
        return this.api.getById(param.objectType, param.pipelineId, param.stageId,  options).toPromise();
    }

    /**
     * Replace all the properties of an existing pipeline stage with the values provided. The updated stage will be returned in the response.
     * Replace a pipeline stage
     * @param param the request object
     */
    public replaceWithHttpInfo(param: PipelineStagesApiReplaceRequest, options?: ConfigurationOptions): Promise<HttpInfo<PipelineStage>> {
        return this.api.replaceWithHttpInfo(param.objectType, param.pipelineId, param.stageId, param.pipelineStageInput,  options).toPromise();
    }

    /**
     * Replace all the properties of an existing pipeline stage with the values provided. The updated stage will be returned in the response.
     * Replace a pipeline stage
     * @param param the request object
     */
    public replace(param: PipelineStagesApiReplaceRequest, options?: ConfigurationOptions): Promise<PipelineStage> {
        return this.api.replace(param.objectType, param.pipelineId, param.stageId, param.pipelineStageInput,  options).toPromise();
    }

    /**
     * Perform a partial update of the pipeline stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`. Any properties not included in this update will keep their existing values. The updated stage will be returned in the response.
     * Update a pipeline stage
     * @param param the request object
     */
    public updateWithHttpInfo(param: PipelineStagesApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<PipelineStage>> {
        return this.api.updateWithHttpInfo(param.objectType, param.pipelineId, param.stageId, param.pipelineStagePatchInput,  options).toPromise();
    }

    /**
     * Perform a partial update of the pipeline stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`. Any properties not included in this update will keep their existing values. The updated stage will be returned in the response.
     * Update a pipeline stage
     * @param param the request object
     */
    public update(param: PipelineStagesApiUpdateRequest, options?: ConfigurationOptions): Promise<PipelineStage> {
        return this.api.update(param.objectType, param.pipelineId, param.stageId, param.pipelineStagePatchInput,  options).toPromise();
    }

}

import { ObservablePipelinesApi } from "./ObservableAPI";
import { PipelinesApiRequestFactory, PipelinesApiResponseProcessor} from "../apis/PipelinesApi";

export interface PipelinesApiArchiveRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiarchive
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiarchive
     */
    pipelineId: string
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof PipelinesApiarchive
     */
    validateReferencesBeforeDelete?: boolean
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof PipelinesApiarchive
     */
    validateDealStageUsagesBeforeDelete?: boolean
}

export interface PipelinesApiCreateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApicreate
     */
    objectType: string
    /**
     * 
     * @type PipelineInput
     * @memberof PipelinesApicreate
     */
    pipelineInput: PipelineInput
}

export interface PipelinesApiGetAllRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetAll
     */
    objectType: string
}

export interface PipelinesApiGetByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetById
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApigetById
     */
    pipelineId: string
}

export interface PipelinesApiReplaceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApireplace
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApireplace
     */
    pipelineId: string
    /**
     * 
     * @type PipelineInput
     * @memberof PipelinesApireplace
     */
    pipelineInput: PipelineInput
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof PipelinesApireplace
     */
    validateReferencesBeforeDelete?: boolean
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof PipelinesApireplace
     */
    validateDealStageUsagesBeforeDelete?: boolean
}

export interface PipelinesApiUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiupdate
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof PipelinesApiupdate
     */
    pipelineId: string
    /**
     * 
     * @type PipelinePatchInput
     * @memberof PipelinesApiupdate
     */
    pipelinePatchInput: PipelinePatchInput
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof PipelinesApiupdate
     */
    validateReferencesBeforeDelete?: boolean
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof PipelinesApiupdate
     */
    validateDealStageUsagesBeforeDelete?: boolean
}

export class ObjectPipelinesApi {
    private api: ObservablePipelinesApi

    public constructor(configuration: Configuration, requestFactory?: PipelinesApiRequestFactory, responseProcessor?: PipelinesApiResponseProcessor) {
        this.api = new ObservablePipelinesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete the pipeline identified by `{pipelineId}`.
     * Delete a pipeline
     * @param param the request object
     */
    public archiveWithHttpInfo(param: PipelinesApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.objectType, param.pipelineId, param.validateReferencesBeforeDelete, param.validateDealStageUsagesBeforeDelete,  options).toPromise();
    }

    /**
     * Delete the pipeline identified by `{pipelineId}`.
     * Delete a pipeline
     * @param param the request object
     */
    public archive(param: PipelinesApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.objectType, param.pipelineId, param.validateReferencesBeforeDelete, param.validateDealStageUsagesBeforeDelete,  options).toPromise();
    }

    /**
     * Create a new pipeline with the provided property values. The entire pipeline object, including its unique ID, will be returned in the response.
     * Create a pipeline
     * @param param the request object
     */
    public createWithHttpInfo(param: PipelinesApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Pipeline>> {
        return this.api.createWithHttpInfo(param.objectType, param.pipelineInput,  options).toPromise();
    }

    /**
     * Create a new pipeline with the provided property values. The entire pipeline object, including its unique ID, will be returned in the response.
     * Create a pipeline
     * @param param the request object
     */
    public create(param: PipelinesApiCreateRequest, options?: ConfigurationOptions): Promise<Pipeline> {
        return this.api.create(param.objectType, param.pipelineInput,  options).toPromise();
    }

    /**
     * Return all pipelines for the object type specified by `{objectType}`.
     * Retrieve all pipelines
     * @param param the request object
     */
    public getAllWithHttpInfo(param: PipelinesApiGetAllRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePipelineNoPaging>> {
        return this.api.getAllWithHttpInfo(param.objectType,  options).toPromise();
    }

    /**
     * Return all pipelines for the object type specified by `{objectType}`.
     * Retrieve all pipelines
     * @param param the request object
     */
    public getAll(param: PipelinesApiGetAllRequest, options?: ConfigurationOptions): Promise<CollectionResponsePipelineNoPaging> {
        return this.api.getAll(param.objectType,  options).toPromise();
    }

    /**
     * Return a single pipeline object identified by its unique `{pipelineId}`.
     * Return a pipeline by ID
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: PipelinesApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<Pipeline>> {
        return this.api.getByIdWithHttpInfo(param.objectType, param.pipelineId,  options).toPromise();
    }

    /**
     * Return a single pipeline object identified by its unique `{pipelineId}`.
     * Return a pipeline by ID
     * @param param the request object
     */
    public getById(param: PipelinesApiGetByIdRequest, options?: ConfigurationOptions): Promise<Pipeline> {
        return this.api.getById(param.objectType, param.pipelineId,  options).toPromise();
    }

    /**
     * Replace all the properties of an existing pipeline with the values provided. This will overwrite any existing pipeline stages. The updated pipeline will be returned in the response.
     * Replace a pipeline
     * @param param the request object
     */
    public replaceWithHttpInfo(param: PipelinesApiReplaceRequest, options?: ConfigurationOptions): Promise<HttpInfo<Pipeline>> {
        return this.api.replaceWithHttpInfo(param.objectType, param.pipelineId, param.pipelineInput, param.validateReferencesBeforeDelete, param.validateDealStageUsagesBeforeDelete,  options).toPromise();
    }

    /**
     * Replace all the properties of an existing pipeline with the values provided. This will overwrite any existing pipeline stages. The updated pipeline will be returned in the response.
     * Replace a pipeline
     * @param param the request object
     */
    public replace(param: PipelinesApiReplaceRequest, options?: ConfigurationOptions): Promise<Pipeline> {
        return this.api.replace(param.objectType, param.pipelineId, param.pipelineInput, param.validateReferencesBeforeDelete, param.validateDealStageUsagesBeforeDelete,  options).toPromise();
    }

    /**
     * Perform a partial update of the pipeline identified by `{pipelineId}`. The updated pipeline will be returned in the response.
     * Update a pipeline
     * @param param the request object
     */
    public updateWithHttpInfo(param: PipelinesApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Pipeline>> {
        return this.api.updateWithHttpInfo(param.objectType, param.pipelineId, param.pipelinePatchInput, param.validateReferencesBeforeDelete, param.validateDealStageUsagesBeforeDelete,  options).toPromise();
    }

    /**
     * Perform a partial update of the pipeline identified by `{pipelineId}`. The updated pipeline will be returned in the response.
     * Update a pipeline
     * @param param the request object
     */
    public update(param: PipelinesApiUpdateRequest, options?: ConfigurationOptions): Promise<Pipeline> {
        return this.api.update(param.objectType, param.pipelineId, param.pipelinePatchInput, param.validateReferencesBeforeDelete, param.validateDealStageUsagesBeforeDelete,  options).toPromise();
    }

}
