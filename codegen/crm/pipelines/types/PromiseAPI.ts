import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { CollectionResponsePipelineNoPaging } from '../models/CollectionResponsePipelineNoPaging';
import { CollectionResponsePipelineStageNoPaging } from '../models/CollectionResponsePipelineStageNoPaging';
import { CollectionResponsePublicAuditInfoNoPaging } from '../models/CollectionResponsePublicAuditInfoNoPaging';
import { ErrorDetail } from '../models/ErrorDetail';
import { ModelError } from '../models/ModelError';
import { Pipeline } from '../models/Pipeline';
import { PipelineInput } from '../models/PipelineInput';
import { PipelinePatchInput } from '../models/PipelinePatchInput';
import { PipelineStage } from '../models/PipelineStage';
import { PipelineStageInput } from '../models/PipelineStageInput';
import { PipelineStagePatchInput } from '../models/PipelineStagePatchInput';
import { PublicAuditInfo } from '../models/PublicAuditInfo';
import { ObservablePipelineAuditsApi } from './ObservableAPI';

import { PipelineAuditsApiRequestFactory, PipelineAuditsApiResponseProcessor} from "../apis/PipelineAuditsApi";
export class PromisePipelineAuditsApi {
    private api: ObservablePipelineAuditsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PipelineAuditsApiRequestFactory,
        responseProcessor?: PipelineAuditsApiResponseProcessor
    ) {
        this.api = new ObservablePipelineAuditsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return a reverse chronological list of all mutations that have occurred on the pipeline identified by `{pipelineId}`.
     * Return an audit of all changes to the pipeline
     * @param objectType 
     * @param pipelineId 
     */
    public getCrmV3PipelinesObjectTypePipelineIdAudit(objectType: string, pipelineId: string, _options?: Configuration): Promise<CollectionResponsePublicAuditInfoNoPaging> {
        const result = this.api.getCrmV3PipelinesObjectTypePipelineIdAudit(objectType, pipelineId, _options);
        return result.toPromise();
    }


}



import { ObservablePipelineStageAuditsApi } from './ObservableAPI';

import { PipelineStageAuditsApiRequestFactory, PipelineStageAuditsApiResponseProcessor} from "../apis/PipelineStageAuditsApi";
export class PromisePipelineStageAuditsApi {
    private api: ObservablePipelineStageAuditsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PipelineStageAuditsApiRequestFactory,
        responseProcessor?: PipelineStageAuditsApiResponseProcessor
    ) {
        this.api = new ObservablePipelineStageAuditsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return a reverse chronological list of all mutations that have occurred on the pipeline stage identified by `{stageId}`.
     * Return an audit of all changes to the pipeline stage
     * @param objectType 
     * @param stageId 
     */
    public getCrmV3PipelinesObjectTypePipelineIdStagesStageIdAudit(objectType: string, stageId: string, _options?: Configuration): Promise<CollectionResponsePublicAuditInfoNoPaging> {
        const result = this.api.getCrmV3PipelinesObjectTypePipelineIdStagesStageIdAudit(objectType, stageId, _options);
        return result.toPromise();
    }


}



import { ObservablePipelineStagesApi } from './ObservableAPI';

import { PipelineStagesApiRequestFactory, PipelineStagesApiResponseProcessor} from "../apis/PipelineStagesApi";
export class PromisePipelineStagesApi {
    private api: ObservablePipelineStagesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PipelineStagesApiRequestFactory,
        responseProcessor?: PipelineStagesApiResponseProcessor
    ) {
        this.api = new ObservablePipelineStagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive the pipeline stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
     * Archive a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     */
    public archive(objectType: string, pipelineId: string, stageId: string, _options?: Configuration): Promise<void> {
        const result = this.api.archive(objectType, pipelineId, stageId, _options);
        return result.toPromise();
    }

    /**
     * Create a new stage associated with the pipeline identified by `{pipelineId}`. The entire stage object, including its unique ID, will be returned in the response.
     * Create a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param pipelineStageInput 
     */
    public create(objectType: string, pipelineId: string, pipelineStageInput: PipelineStageInput, _options?: Configuration): Promise<PipelineStage> {
        const result = this.api.create(objectType, pipelineId, pipelineStageInput, _options);
        return result.toPromise();
    }

    /**
     * Return all the stages associated with the pipeline identified by `{pipelineId}`.
     * Return all stages of a pipeline
     * @param objectType 
     * @param pipelineId 
     * @param archived Whether to return only results that have been archived.
     */
    public getAll(objectType: string, pipelineId: string, archived?: boolean, _options?: Configuration): Promise<CollectionResponsePipelineStageNoPaging> {
        const result = this.api.getAll(objectType, pipelineId, archived, _options);
        return result.toPromise();
    }

    /**
     * Return the stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
     * Return a pipeline stage by ID
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     * @param archived Whether to return only results that have been archived.
     */
    public getById(objectType: string, pipelineId: string, stageId: string, archived?: boolean, _options?: Configuration): Promise<PipelineStage> {
        const result = this.api.getById(objectType, pipelineId, stageId, archived, _options);
        return result.toPromise();
    }

    /**
     * Replace all the properties of an existing pipeline stage with the values provided. The updated stage will be returned in the response.
     * Replace a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     * @param pipelineStageInput 
     */
    public replace(objectType: string, pipelineId: string, stageId: string, pipelineStageInput: PipelineStageInput, _options?: Configuration): Promise<PipelineStage> {
        const result = this.api.replace(objectType, pipelineId, stageId, pipelineStageInput, _options);
        return result.toPromise();
    }

    /**
     * Perform a partial update of the pipeline stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`. Any properties not included in this update will keep their existing values. The updated stage will be returned in the response.
     * Update a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     * @param pipelineStagePatchInput 
     * @param archived Whether to return only results that have been archived.
     */
    public update(objectType: string, pipelineId: string, stageId: string, pipelineStagePatchInput: PipelineStagePatchInput, archived?: boolean, _options?: Configuration): Promise<PipelineStage> {
        const result = this.api.update(objectType, pipelineId, stageId, pipelineStagePatchInput, archived, _options);
        return result.toPromise();
    }


}



import { ObservablePipelinesApi } from './ObservableAPI';

import { PipelinesApiRequestFactory, PipelinesApiResponseProcessor} from "../apis/PipelinesApi";
export class PromisePipelinesApi {
    private api: ObservablePipelinesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PipelinesApiRequestFactory,
        responseProcessor?: PipelinesApiResponseProcessor
    ) {
        this.api = new ObservablePipelinesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive the pipeline identified by `{pipelineId}`.
     * Archive a pipeline
     * @param objectType 
     * @param pipelineId 
     * @param validateReferencesBeforeDelete 
     */
    public archive(objectType: string, pipelineId: string, validateReferencesBeforeDelete?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.archive(objectType, pipelineId, validateReferencesBeforeDelete, _options);
        return result.toPromise();
    }

    /**
     * Create a new pipeline with the provided property values. The entire pipeline object, including its unique ID, will be returned in the response.
     * Create a pipeline
     * @param objectType 
     * @param pipelineInput 
     */
    public create(objectType: string, pipelineInput: PipelineInput, _options?: Configuration): Promise<Pipeline> {
        const result = this.api.create(objectType, pipelineInput, _options);
        return result.toPromise();
    }

    /**
     * Return all pipelines for the object type specified by `{objectType}`.
     * Retrieve all pipelines
     * @param objectType 
     * @param archived Whether to return only results that have been archived.
     */
    public getAll(objectType: string, archived?: boolean, _options?: Configuration): Promise<CollectionResponsePipelineNoPaging> {
        const result = this.api.getAll(objectType, archived, _options);
        return result.toPromise();
    }

    /**
     * Return a single pipeline object identified by its unique `{pipelineId}`.
     * Return a pipeline by ID
     * @param objectType 
     * @param pipelineId 
     * @param archived Whether to return only results that have been archived.
     */
    public getById(objectType: string, pipelineId: string, archived?: boolean, _options?: Configuration): Promise<Pipeline> {
        const result = this.api.getById(objectType, pipelineId, archived, _options);
        return result.toPromise();
    }

    /**
     * Replace all the properties of an existing pipeline with the values provided. This will overwrite any existing pipeline stages. The updated pipeline will be returned in the response.
     * Replace a pipeline
     * @param objectType 
     * @param pipelineId 
     * @param pipelineInput 
     * @param validateReferencesBeforeDelete 
     */
    public replace(objectType: string, pipelineId: string, pipelineInput: PipelineInput, validateReferencesBeforeDelete?: boolean, _options?: Configuration): Promise<Pipeline> {
        const result = this.api.replace(objectType, pipelineId, pipelineInput, validateReferencesBeforeDelete, _options);
        return result.toPromise();
    }

    /**
     * Perform a partial update of the pipeline identified by `{pipelineId}`. The updated pipeline will be returned in the response.
     * Update a pipeline
     * @param objectType 
     * @param pipelineId 
     * @param pipelinePatchInput 
     * @param archived Whether to return only results that have been archived.
     * @param validateReferencesBeforeDelete 
     */
    public update(objectType: string, pipelineId: string, pipelinePatchInput: PipelinePatchInput, archived?: boolean, validateReferencesBeforeDelete?: boolean, _options?: Configuration): Promise<Pipeline> {
        const result = this.api.update(objectType, pipelineId, pipelinePatchInput, archived, validateReferencesBeforeDelete, _options);
        return result.toPromise();
    }


}



