import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CollectionResponsePipelineNoPaging } from '../models/CollectionResponsePipelineNoPaging';
import { CollectionResponsePipelineStageNoPaging } from '../models/CollectionResponsePipelineStageNoPaging';
import { CollectionResponsePublicAuditInfoNoPaging } from '../models/CollectionResponsePublicAuditInfoNoPaging';
import { Pipeline } from '../models/Pipeline';
import { PipelineInput } from '../models/PipelineInput';
import { PipelinePatchInput } from '../models/PipelinePatchInput';
import { PipelineStage } from '../models/PipelineStage';
import { PipelineStageInput } from '../models/PipelineStageInput';
import { PipelineStagePatchInput } from '../models/PipelineStagePatchInput';
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
    public getAuditWithHttpInfo(objectType: string, pipelineId: string, _options?: Configuration): Promise<HttpInfo<CollectionResponsePublicAuditInfoNoPaging>> {
        const result = this.api.getAuditWithHttpInfo(objectType, pipelineId, _options);
        return result.toPromise();
    }

    /**
     * Return a reverse chronological list of all mutations that have occurred on the pipeline identified by `{pipelineId}`.
     * Return an audit of all changes to the pipeline
     * @param objectType 
     * @param pipelineId 
     */
    public getAudit(objectType: string, pipelineId: string, _options?: Configuration): Promise<CollectionResponsePublicAuditInfoNoPaging> {
        const result = this.api.getAudit(objectType, pipelineId, _options);
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
    public getAuditWithHttpInfo(objectType: string, stageId: string, _options?: Configuration): Promise<HttpInfo<CollectionResponsePublicAuditInfoNoPaging>> {
        const result = this.api.getAuditWithHttpInfo(objectType, stageId, _options);
        return result.toPromise();
    }

    /**
     * Return a reverse chronological list of all mutations that have occurred on the pipeline stage identified by `{stageId}`.
     * Return an audit of all changes to the pipeline stage
     * @param objectType 
     * @param stageId 
     */
    public getAudit(objectType: string, stageId: string, _options?: Configuration): Promise<CollectionResponsePublicAuditInfoNoPaging> {
        const result = this.api.getAudit(objectType, stageId, _options);
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
     * Delete the pipeline stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
     * Delete a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     */
    public archiveWithHttpInfo(objectType: string, pipelineId: string, stageId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(objectType, pipelineId, stageId, _options);
        return result.toPromise();
    }

    /**
     * Delete the pipeline stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
     * Delete a pipeline stage
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
    public createWithHttpInfo(objectType: string, pipelineId: string, pipelineStageInput: PipelineStageInput, _options?: Configuration): Promise<HttpInfo<PipelineStage>> {
        const result = this.api.createWithHttpInfo(objectType, pipelineId, pipelineStageInput, _options);
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
     */
    public getAllWithHttpInfo(objectType: string, pipelineId: string, _options?: Configuration): Promise<HttpInfo<CollectionResponsePipelineStageNoPaging>> {
        const result = this.api.getAllWithHttpInfo(objectType, pipelineId, _options);
        return result.toPromise();
    }

    /**
     * Return all the stages associated with the pipeline identified by `{pipelineId}`.
     * Return all stages of a pipeline
     * @param objectType 
     * @param pipelineId 
     */
    public getAll(objectType: string, pipelineId: string, _options?: Configuration): Promise<CollectionResponsePipelineStageNoPaging> {
        const result = this.api.getAll(objectType, pipelineId, _options);
        return result.toPromise();
    }

    /**
     * Return the stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
     * Return a pipeline stage by ID
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     */
    public getByIdWithHttpInfo(objectType: string, pipelineId: string, stageId: string, _options?: Configuration): Promise<HttpInfo<PipelineStage>> {
        const result = this.api.getByIdWithHttpInfo(objectType, pipelineId, stageId, _options);
        return result.toPromise();
    }

    /**
     * Return the stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
     * Return a pipeline stage by ID
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     */
    public getById(objectType: string, pipelineId: string, stageId: string, _options?: Configuration): Promise<PipelineStage> {
        const result = this.api.getById(objectType, pipelineId, stageId, _options);
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
    public replaceWithHttpInfo(objectType: string, pipelineId: string, stageId: string, pipelineStageInput: PipelineStageInput, _options?: Configuration): Promise<HttpInfo<PipelineStage>> {
        const result = this.api.replaceWithHttpInfo(objectType, pipelineId, stageId, pipelineStageInput, _options);
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
     */
    public updateWithHttpInfo(objectType: string, pipelineId: string, stageId: string, pipelineStagePatchInput: PipelineStagePatchInput, _options?: Configuration): Promise<HttpInfo<PipelineStage>> {
        const result = this.api.updateWithHttpInfo(objectType, pipelineId, stageId, pipelineStagePatchInput, _options);
        return result.toPromise();
    }

    /**
     * Perform a partial update of the pipeline stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`. Any properties not included in this update will keep their existing values. The updated stage will be returned in the response.
     * Update a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     * @param pipelineStagePatchInput 
     */
    public update(objectType: string, pipelineId: string, stageId: string, pipelineStagePatchInput: PipelineStagePatchInput, _options?: Configuration): Promise<PipelineStage> {
        const result = this.api.update(objectType, pipelineId, stageId, pipelineStagePatchInput, _options);
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
     * Delete the pipeline identified by `{pipelineId}`.
     * Delete a pipeline
     * @param objectType 
     * @param pipelineId 
     * @param validateReferencesBeforeDelete 
     * @param validateDealStageUsagesBeforeDelete 
     */
    public archiveWithHttpInfo(objectType: string, pipelineId: string, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.archiveWithHttpInfo(objectType, pipelineId, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options);
        return result.toPromise();
    }

    /**
     * Delete the pipeline identified by `{pipelineId}`.
     * Delete a pipeline
     * @param objectType 
     * @param pipelineId 
     * @param validateReferencesBeforeDelete 
     * @param validateDealStageUsagesBeforeDelete 
     */
    public archive(objectType: string, pipelineId: string, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Promise<void> {
        const result = this.api.archive(objectType, pipelineId, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options);
        return result.toPromise();
    }

    /**
     * Create a new pipeline with the provided property values. The entire pipeline object, including its unique ID, will be returned in the response.
     * Create a pipeline
     * @param objectType 
     * @param pipelineInput 
     */
    public createWithHttpInfo(objectType: string, pipelineInput: PipelineInput, _options?: Configuration): Promise<HttpInfo<Pipeline>> {
        const result = this.api.createWithHttpInfo(objectType, pipelineInput, _options);
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
     */
    public getAllWithHttpInfo(objectType: string, _options?: Configuration): Promise<HttpInfo<CollectionResponsePipelineNoPaging>> {
        const result = this.api.getAllWithHttpInfo(objectType, _options);
        return result.toPromise();
    }

    /**
     * Return all pipelines for the object type specified by `{objectType}`.
     * Retrieve all pipelines
     * @param objectType 
     */
    public getAll(objectType: string, _options?: Configuration): Promise<CollectionResponsePipelineNoPaging> {
        const result = this.api.getAll(objectType, _options);
        return result.toPromise();
    }

    /**
     * Return a single pipeline object identified by its unique `{pipelineId}`.
     * Return a pipeline by ID
     * @param objectType 
     * @param pipelineId 
     */
    public getByIdWithHttpInfo(objectType: string, pipelineId: string, _options?: Configuration): Promise<HttpInfo<Pipeline>> {
        const result = this.api.getByIdWithHttpInfo(objectType, pipelineId, _options);
        return result.toPromise();
    }

    /**
     * Return a single pipeline object identified by its unique `{pipelineId}`.
     * Return a pipeline by ID
     * @param objectType 
     * @param pipelineId 
     */
    public getById(objectType: string, pipelineId: string, _options?: Configuration): Promise<Pipeline> {
        const result = this.api.getById(objectType, pipelineId, _options);
        return result.toPromise();
    }

    /**
     * Replace all the properties of an existing pipeline with the values provided. This will overwrite any existing pipeline stages. The updated pipeline will be returned in the response.
     * Replace a pipeline
     * @param objectType 
     * @param pipelineId 
     * @param pipelineInput 
     * @param validateReferencesBeforeDelete 
     * @param validateDealStageUsagesBeforeDelete 
     */
    public replaceWithHttpInfo(objectType: string, pipelineId: string, pipelineInput: PipelineInput, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Promise<HttpInfo<Pipeline>> {
        const result = this.api.replaceWithHttpInfo(objectType, pipelineId, pipelineInput, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options);
        return result.toPromise();
    }

    /**
     * Replace all the properties of an existing pipeline with the values provided. This will overwrite any existing pipeline stages. The updated pipeline will be returned in the response.
     * Replace a pipeline
     * @param objectType 
     * @param pipelineId 
     * @param pipelineInput 
     * @param validateReferencesBeforeDelete 
     * @param validateDealStageUsagesBeforeDelete 
     */
    public replace(objectType: string, pipelineId: string, pipelineInput: PipelineInput, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Promise<Pipeline> {
        const result = this.api.replace(objectType, pipelineId, pipelineInput, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options);
        return result.toPromise();
    }

    /**
     * Perform a partial update of the pipeline identified by `{pipelineId}`. The updated pipeline will be returned in the response.
     * Update a pipeline
     * @param objectType 
     * @param pipelineId 
     * @param pipelinePatchInput 
     * @param validateReferencesBeforeDelete 
     * @param validateDealStageUsagesBeforeDelete 
     */
    public updateWithHttpInfo(objectType: string, pipelineId: string, pipelinePatchInput: PipelinePatchInput, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Promise<HttpInfo<Pipeline>> {
        const result = this.api.updateWithHttpInfo(objectType, pipelineId, pipelinePatchInput, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options);
        return result.toPromise();
    }

    /**
     * Perform a partial update of the pipeline identified by `{pipelineId}`. The updated pipeline will be returned in the response.
     * Update a pipeline
     * @param objectType 
     * @param pipelineId 
     * @param pipelinePatchInput 
     * @param validateReferencesBeforeDelete 
     * @param validateDealStageUsagesBeforeDelete 
     */
    public update(objectType: string, pipelineId: string, pipelinePatchInput: PipelinePatchInput, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Promise<Pipeline> {
        const result = this.api.update(objectType, pipelineId, pipelinePatchInput, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options);
        return result.toPromise();
    }


}



