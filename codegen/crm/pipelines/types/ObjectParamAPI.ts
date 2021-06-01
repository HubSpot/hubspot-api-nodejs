import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { CollectionResponsePipeline } from '../models/CollectionResponsePipeline';
import { CollectionResponsePipelineStage } from '../models/CollectionResponsePipelineStage';
import { ErrorDetail } from '../models/ErrorDetail';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { Paging } from '../models/Paging';
import { Pipeline } from '../models/Pipeline';
import { PipelineInput } from '../models/PipelineInput';
import { PipelinePatchInput } from '../models/PipelinePatchInput';
import { PipelineStage } from '../models/PipelineStage';
import { PipelineStageInput } from '../models/PipelineStageInput';
import { PipelineStagePatchInput } from '../models/PipelineStagePatchInput';

import { ObservablePipelineStagesApi } from "./ObservableAPI";
import { PipelineStagesApiRequestFactory, PipelineStagesApiResponseProcessor} from "../apis/PipelineStagesApi";

export interface PipelineStagesApiArchiveRequest {
    /**
     * 
     * @type string
     * @memberof PipelineStagesApiarchive
     */
    objectType: string
    /**
     * 
     * @type string
     * @memberof PipelineStagesApiarchive
     */
    pipelineId: string
    /**
     * 
     * @type string
     * @memberof PipelineStagesApiarchive
     */
    stageId: string
}

export interface PipelineStagesApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof PipelineStagesApicreate
     */
    objectType: string
    /**
     * 
     * @type string
     * @memberof PipelineStagesApicreate
     */
    pipelineId: string
    /**
     * 
     * @type PipelineStageInput
     * @memberof PipelineStagesApicreate
     */
    pipelineStageInput?: PipelineStageInput
}

export interface PipelineStagesApiGetAllRequest {
    /**
     * 
     * @type string
     * @memberof PipelineStagesApigetAll
     */
    objectType: string
    /**
     * 
     * @type string
     * @memberof PipelineStagesApigetAll
     */
    pipelineId: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof PipelineStagesApigetAll
     */
    archived?: boolean
}

export interface PipelineStagesApiGetByIdRequest {
    /**
     * 
     * @type string
     * @memberof PipelineStagesApigetById
     */
    objectType: string
    /**
     * 
     * @type string
     * @memberof PipelineStagesApigetById
     */
    pipelineId: string
    /**
     * 
     * @type string
     * @memberof PipelineStagesApigetById
     */
    stageId: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof PipelineStagesApigetById
     */
    archived?: boolean
}

export interface PipelineStagesApiReplaceRequest {
    /**
     * 
     * @type string
     * @memberof PipelineStagesApireplace
     */
    objectType: string
    /**
     * 
     * @type string
     * @memberof PipelineStagesApireplace
     */
    pipelineId: string
    /**
     * 
     * @type string
     * @memberof PipelineStagesApireplace
     */
    stageId: string
    /**
     * 
     * @type PipelineStageInput
     * @memberof PipelineStagesApireplace
     */
    pipelineStageInput?: PipelineStageInput
}

export interface PipelineStagesApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof PipelineStagesApiupdate
     */
    objectType: string
    /**
     * 
     * @type string
     * @memberof PipelineStagesApiupdate
     */
    pipelineId: string
    /**
     * 
     * @type string
     * @memberof PipelineStagesApiupdate
     */
    stageId: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof PipelineStagesApiupdate
     */
    archived?: boolean
    /**
     * 
     * @type PipelineStagePatchInput
     * @memberof PipelineStagesApiupdate
     */
    pipelineStagePatchInput?: PipelineStagePatchInput
}

export class ObjectPipelineStagesApi {
    private api: ObservablePipelineStagesApi

    public constructor(configuration: Configuration, requestFactory?: PipelineStagesApiRequestFactory, responseProcessor?: PipelineStagesApiResponseProcessor) {
        this.api = new ObservablePipelineStagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive the pipeline stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
     * Archive a pipeline stage
     * @param param the request object
     */
    public archive(param: PipelineStagesApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.objectType, param.pipelineId, param.stageId,  options).toPromise();
    }

    /**
     * Create a new stage associated with the pipeline identified by `{pipelineId}`. The entire stage object, including its unique ID, will be returned in the response.
     * Create a pipeline stage
     * @param param the request object
     */
    public create(param: PipelineStagesApiCreateRequest, options?: Configuration): Promise<PipelineStage> {
        return this.api.create(param.objectType, param.pipelineId, param.pipelineStageInput,  options).toPromise();
    }

    /**
     * Return all the stages associated with the pipeline identified by `{pipelineId}`.
     * Return all stages of a pipeline
     * @param param the request object
     */
    public getAll(param: PipelineStagesApiGetAllRequest, options?: Configuration): Promise<CollectionResponsePipelineStage> {
        return this.api.getAll(param.objectType, param.pipelineId, param.archived,  options).toPromise();
    }

    /**
     * Return the stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
     * Return a pipeline stage by ID
     * @param param the request object
     */
    public getById(param: PipelineStagesApiGetByIdRequest, options?: Configuration): Promise<PipelineStage> {
        return this.api.getById(param.objectType, param.pipelineId, param.stageId, param.archived,  options).toPromise();
    }

    /**
     * Replace all the properties of an existing pipeline stage with the values provided. The updated stage will be returned in the response.
     * Replace a pipeline stage
     * @param param the request object
     */
    public replace(param: PipelineStagesApiReplaceRequest, options?: Configuration): Promise<PipelineStage> {
        return this.api.replace(param.objectType, param.pipelineId, param.stageId, param.pipelineStageInput,  options).toPromise();
    }

    /**
     * Perform a partial update of the pipeline stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`. Any properties not included in this update will keep their existing values. The updated stage will be returned in the response.
     * Update a pipeline stage
     * @param param the request object
     */
    public update(param: PipelineStagesApiUpdateRequest, options?: Configuration): Promise<PipelineStage> {
        return this.api.update(param.objectType, param.pipelineId, param.stageId, param.archived, param.pipelineStagePatchInput,  options).toPromise();
    }

}

import { ObservablePipelinesApi } from "./ObservableAPI";
import { PipelinesApiRequestFactory, PipelinesApiResponseProcessor} from "../apis/PipelinesApi";

export interface PipelinesApiArchiveRequest {
    /**
     * 
     * @type string
     * @memberof PipelinesApiarchive
     */
    objectType: string
    /**
     * 
     * @type string
     * @memberof PipelinesApiarchive
     */
    pipelineId: string
}

export interface PipelinesApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof PipelinesApicreate
     */
    objectType: string
    /**
     * 
     * @type PipelineInput
     * @memberof PipelinesApicreate
     */
    pipelineInput?: PipelineInput
}

export interface PipelinesApiGetAllRequest {
    /**
     * 
     * @type string
     * @memberof PipelinesApigetAll
     */
    objectType: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof PipelinesApigetAll
     */
    archived?: boolean
}

export interface PipelinesApiGetByIdRequest {
    /**
     * 
     * @type string
     * @memberof PipelinesApigetById
     */
    objectType: string
    /**
     * 
     * @type string
     * @memberof PipelinesApigetById
     */
    pipelineId: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof PipelinesApigetById
     */
    archived?: boolean
}

export interface PipelinesApiReplaceRequest {
    /**
     * 
     * @type string
     * @memberof PipelinesApireplace
     */
    objectType: string
    /**
     * 
     * @type string
     * @memberof PipelinesApireplace
     */
    pipelineId: string
    /**
     * 
     * @type PipelineInput
     * @memberof PipelinesApireplace
     */
    pipelineInput?: PipelineInput
}

export interface PipelinesApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof PipelinesApiupdate
     */
    objectType: string
    /**
     * 
     * @type string
     * @memberof PipelinesApiupdate
     */
    pipelineId: string
    /**
     * Whether to return only results that have been archived.
     * @type boolean
     * @memberof PipelinesApiupdate
     */
    archived?: boolean
    /**
     * 
     * @type PipelinePatchInput
     * @memberof PipelinesApiupdate
     */
    pipelinePatchInput?: PipelinePatchInput
}

export class ObjectPipelinesApi {
    private api: ObservablePipelinesApi

    public constructor(configuration: Configuration, requestFactory?: PipelinesApiRequestFactory, responseProcessor?: PipelinesApiResponseProcessor) {
        this.api = new ObservablePipelinesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive the pipeline identified by `{pipelineId}`.
     * Archive a pipeline
     * @param param the request object
     */
    public archive(param: PipelinesApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.objectType, param.pipelineId,  options).toPromise();
    }

    /**
     * Create a new pipeline with the provided property values. The entire pipeline object, including its unique ID, will be returned in the response.
     * Create a pipeline
     * @param param the request object
     */
    public create(param: PipelinesApiCreateRequest, options?: Configuration): Promise<Pipeline> {
        return this.api.create(param.objectType, param.pipelineInput,  options).toPromise();
    }

    /**
     * Return all pipelines for the object type specified by `{objectType}`.
     * Retrieve all pipelines
     * @param param the request object
     */
    public getAll(param: PipelinesApiGetAllRequest, options?: Configuration): Promise<CollectionResponsePipeline> {
        return this.api.getAll(param.objectType, param.archived,  options).toPromise();
    }

    /**
     * Return a single pipeline object identified by its unique `{pipelineId}`.
     * Return a pipeline by ID
     * @param param the request object
     */
    public getById(param: PipelinesApiGetByIdRequest, options?: Configuration): Promise<Pipeline> {
        return this.api.getById(param.objectType, param.pipelineId, param.archived,  options).toPromise();
    }

    /**
     * Replace all the properties of an existing pipeline with the values provided. This will overwrite any existing pipeline stages. The updated pipeline will be returned in the response.
     * Replace a pipeline
     * @param param the request object
     */
    public replace(param: PipelinesApiReplaceRequest, options?: Configuration): Promise<Pipeline> {
        return this.api.replace(param.objectType, param.pipelineId, param.pipelineInput,  options).toPromise();
    }

    /**
     * Perform a partial update of the pipeline identified by `{pipelineId}`. The updated pipeline will be returned in the response.
     * Update a pipeline
     * @param param the request object
     */
    public update(param: PipelinesApiUpdateRequest, options?: Configuration): Promise<Pipeline> {
        return this.api.update(param.objectType, param.pipelineId, param.archived, param.pipelinePatchInput,  options).toPromise();
    }

}
