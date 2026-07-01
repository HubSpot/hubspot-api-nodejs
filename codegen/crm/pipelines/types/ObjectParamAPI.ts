import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'

import { CollectionResponsePipelineNoPaging } from '../models/CollectionResponsePipelineNoPaging';
import { CollectionResponsePipelineStageNoPaging } from '../models/CollectionResponsePipelineStageNoPaging';
import { CollectionResponsePublicAuditInfoNoPaging } from '../models/CollectionResponsePublicAuditInfoNoPaging';
import { Pipeline } from '../models/Pipeline';
import { PipelineInput } from '../models/PipelineInput';
import { PipelinePatchInput } from '../models/PipelinePatchInput';
import { PipelineReplaceInput } from '../models/PipelineReplaceInput';
import { PipelineStage } from '../models/PipelineStage';
import { PipelineStageInput } from '../models/PipelineStageInput';
import { PipelineStagePatchInput } from '../models/PipelineStagePatchInput';
import { PipelineStageReplaceInput } from '../models/PipelineStageReplaceInput';

import { ObservableBasicApi } from "./ObservableAPI";
import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";

export interface BasicApiArchiveRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchive
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchive
     */
    pipelineId: string
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof BasicApiarchive
     */
    validateDealStageUsagesBeforeDelete?: boolean
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof BasicApiarchive
     */
    validateReferencesBeforeDelete?: boolean
}

export interface BasicApiArchive0Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchive_1
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchive_1
     */
    pipelineId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiarchive_1
     */
    stageId: string
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof BasicApiarchive_1
     */
    validateReferencesBeforeDelete?: boolean
}

export interface BasicApiCreateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicreate
     */
    objectType: string
    /**
     * 
     * @type PipelineInput
     * @memberof BasicApicreate
     */
    pipelineInput: PipelineInput
}

export interface BasicApiCreate0Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicreate_2
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApicreate_2
     */
    pipelineId: string
    /**
     * 
     * @type PipelineStageInput
     * @memberof BasicApicreate_2
     */
    pipelineStageInput: PipelineStageInput
}

export interface BasicApiGetAllRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetAll
     */
    objectType: string
}

export interface BasicApiGetAll0Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetAll_3
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetAll_3
     */
    pipelineId: string
}

export interface BasicApiGetAuditRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetAudit
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetAudit
     */
    pipelineId: string
}

export interface BasicApiGetAudit0Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetAudit_4
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetAudit_4
     */
    pipelineId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetAudit_4
     */
    stageId: string
}

export interface BasicApiGetByIdRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetById
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetById
     */
    pipelineId: string
}

export interface BasicApiGetById0Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetById_5
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetById_5
     */
    pipelineId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApigetById_5
     */
    stageId: string
}

export interface BasicApiReplaceRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApireplace
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApireplace
     */
    pipelineId: string
    /**
     * 
     * @type PipelineReplaceInput
     * @memberof BasicApireplace
     */
    pipelineReplaceInput: PipelineReplaceInput
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof BasicApireplace
     */
    validateDealStageUsagesBeforeDelete?: boolean
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof BasicApireplace
     */
    validateReferencesBeforeDelete?: boolean
}

export interface BasicApiReplace0Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApireplace_6
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApireplace_6
     */
    pipelineId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApireplace_6
     */
    stageId: string
    /**
     * 
     * @type PipelineStageReplaceInput
     * @memberof BasicApireplace_6
     */
    pipelineStageReplaceInput: PipelineStageReplaceInput
}

export interface BasicApiUpdateRequest {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiupdate
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiupdate
     */
    pipelineId: string
    /**
     * 
     * @type PipelinePatchInput
     * @memberof BasicApiupdate
     */
    pipelinePatchInput: PipelinePatchInput
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof BasicApiupdate
     */
    validateDealStageUsagesBeforeDelete?: boolean
    /**
     * 
     * Defaults to: false
     * @type boolean
     * @memberof BasicApiupdate
     */
    validateReferencesBeforeDelete?: boolean
}

export interface BasicApiUpdate0Request {
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiupdate_7
     */
    objectType: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiupdate_7
     */
    pipelineId: string
    /**
     * 
     * Defaults to: undefined
     * @type string
     * @memberof BasicApiupdate_7
     */
    stageId: string
    /**
     * 
     * @type PipelineStagePatchInput
     * @memberof BasicApiupdate_7
     */
    pipelineStagePatchInput: PipelineStagePatchInput
}

export class ObjectBasicApi {
    private api: ObservableBasicApi

    public constructor(configuration: Configuration, requestFactory?: BasicApiRequestFactory, responseProcessor?: BasicApiResponseProcessor) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a pipeline
     * @param param the request object
     */
    public archiveWithHttpInfo(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.objectType, param.pipelineId, param.validateDealStageUsagesBeforeDelete, param.validateReferencesBeforeDelete,  options).toPromise();
    }

    /**
     * Delete a pipeline
     * @param param the request object
     */
    public archive(param: BasicApiArchiveRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive(param.objectType, param.pipelineId, param.validateDealStageUsagesBeforeDelete, param.validateReferencesBeforeDelete,  options).toPromise();
    }

    /**
     * Delete a pipeline stage
     * @param param the request object
     */
    public archive_1WithHttpInfo(param: BasicApiArchive0Request, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.archive_1WithHttpInfo(param.objectType, param.pipelineId, param.stageId, param.validateReferencesBeforeDelete,  options).toPromise();
    }

    /**
     * Delete a pipeline stage
     * @param param the request object
     */
    public archive_1(param: BasicApiArchive0Request, options?: ConfigurationOptions): Promise<void> {
        return this.api.archive_1(param.objectType, param.pipelineId, param.stageId, param.validateReferencesBeforeDelete,  options).toPromise();
    }

    /**
     * Create a new pipeline with the provided property values. The entire pipeline object, including its unique ID, will be returned in the response.
     * Create a pipeline
     * @param param the request object
     */
    public createWithHttpInfo(param: BasicApiCreateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Pipeline>> {
        return this.api.createWithHttpInfo(param.objectType, param.pipelineInput,  options).toPromise();
    }

    /**
     * Create a new pipeline with the provided property values. The entire pipeline object, including its unique ID, will be returned in the response.
     * Create a pipeline
     * @param param the request object
     */
    public create(param: BasicApiCreateRequest, options?: ConfigurationOptions): Promise<Pipeline> {
        return this.api.create(param.objectType, param.pipelineInput,  options).toPromise();
    }

    /**
     * Create a pipeline stage
     * @param param the request object
     */
    public create_2WithHttpInfo(param: BasicApiCreate0Request, options?: ConfigurationOptions): Promise<HttpInfo<PipelineStage>> {
        return this.api.create_2WithHttpInfo(param.objectType, param.pipelineId, param.pipelineStageInput,  options).toPromise();
    }

    /**
     * Create a pipeline stage
     * @param param the request object
     */
    public create_2(param: BasicApiCreate0Request, options?: ConfigurationOptions): Promise<PipelineStage> {
        return this.api.create_2(param.objectType, param.pipelineId, param.pipelineStageInput,  options).toPromise();
    }

    /**
     * Return all pipelines for the object type specified by `{objectType}`.
     * Retrieve all pipelines
     * @param param the request object
     */
    public getAllWithHttpInfo(param: BasicApiGetAllRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePipelineNoPaging>> {
        return this.api.getAllWithHttpInfo(param.objectType,  options).toPromise();
    }

    /**
     * Return all pipelines for the object type specified by `{objectType}`.
     * Retrieve all pipelines
     * @param param the request object
     */
    public getAll(param: BasicApiGetAllRequest, options?: ConfigurationOptions): Promise<CollectionResponsePipelineNoPaging> {
        return this.api.getAll(param.objectType,  options).toPromise();
    }

    /**
     * Return all the stages associated with the pipeline identified by `{pipelineId}`.
     * Return all stages of a pipeline
     * @param param the request object
     */
    public getAll_3WithHttpInfo(param: BasicApiGetAll0Request, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePipelineStageNoPaging>> {
        return this.api.getAll_3WithHttpInfo(param.objectType, param.pipelineId,  options).toPromise();
    }

    /**
     * Return all the stages associated with the pipeline identified by `{pipelineId}`.
     * Return all stages of a pipeline
     * @param param the request object
     */
    public getAll_3(param: BasicApiGetAll0Request, options?: ConfigurationOptions): Promise<CollectionResponsePipelineStageNoPaging> {
        return this.api.getAll_3(param.objectType, param.pipelineId,  options).toPromise();
    }

    /**
     * Return a reverse chronological list of all mutations that have occurred on the pipeline identified by `{pipelineId}`.
     * Return an audit of all changes to the pipeline
     * @param param the request object
     */
    public getAuditWithHttpInfo(param: BasicApiGetAuditRequest, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicAuditInfoNoPaging>> {
        return this.api.getAuditWithHttpInfo(param.objectType, param.pipelineId,  options).toPromise();
    }

    /**
     * Return a reverse chronological list of all mutations that have occurred on the pipeline identified by `{pipelineId}`.
     * Return an audit of all changes to the pipeline
     * @param param the request object
     */
    public getAudit(param: BasicApiGetAuditRequest, options?: ConfigurationOptions): Promise<CollectionResponsePublicAuditInfoNoPaging> {
        return this.api.getAudit(param.objectType, param.pipelineId,  options).toPromise();
    }

    /**
     * Return a reverse chronological list of all mutations that have occurred on the pipeline stage identified by `{stageId}`.
     * @param param the request object
     */
    public getAudit_4WithHttpInfo(param: BasicApiGetAudit0Request, options?: ConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicAuditInfoNoPaging>> {
        return this.api.getAudit_4WithHttpInfo(param.objectType, param.pipelineId, param.stageId,  options).toPromise();
    }

    /**
     * Return a reverse chronological list of all mutations that have occurred on the pipeline stage identified by `{stageId}`.
     * @param param the request object
     */
    public getAudit_4(param: BasicApiGetAudit0Request, options?: ConfigurationOptions): Promise<CollectionResponsePublicAuditInfoNoPaging> {
        return this.api.getAudit_4(param.objectType, param.pipelineId, param.stageId,  options).toPromise();
    }

    /**
     * Return a single pipeline object identified by its unique `{pipelineId}`.
     * Return a pipeline by ID
     * @param param the request object
     */
    public getByIdWithHttpInfo(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<HttpInfo<Pipeline>> {
        return this.api.getByIdWithHttpInfo(param.objectType, param.pipelineId,  options).toPromise();
    }

    /**
     * Return a single pipeline object identified by its unique `{pipelineId}`.
     * Return a pipeline by ID
     * @param param the request object
     */
    public getById(param: BasicApiGetByIdRequest, options?: ConfigurationOptions): Promise<Pipeline> {
        return this.api.getById(param.objectType, param.pipelineId,  options).toPromise();
    }

    /**
     * Return a pipeline stage by ID
     * @param param the request object
     */
    public getById_5WithHttpInfo(param: BasicApiGetById0Request, options?: ConfigurationOptions): Promise<HttpInfo<PipelineStage>> {
        return this.api.getById_5WithHttpInfo(param.objectType, param.pipelineId, param.stageId,  options).toPromise();
    }

    /**
     * Return a pipeline stage by ID
     * @param param the request object
     */
    public getById_5(param: BasicApiGetById0Request, options?: ConfigurationOptions): Promise<PipelineStage> {
        return this.api.getById_5(param.objectType, param.pipelineId, param.stageId,  options).toPromise();
    }

    /**
     * Replace a pipeline
     * @param param the request object
     */
    public replaceWithHttpInfo(param: BasicApiReplaceRequest, options?: ConfigurationOptions): Promise<HttpInfo<Pipeline>> {
        return this.api.replaceWithHttpInfo(param.objectType, param.pipelineId, param.pipelineReplaceInput, param.validateDealStageUsagesBeforeDelete, param.validateReferencesBeforeDelete,  options).toPromise();
    }

    /**
     * Replace a pipeline
     * @param param the request object
     */
    public replace(param: BasicApiReplaceRequest, options?: ConfigurationOptions): Promise<Pipeline> {
        return this.api.replace(param.objectType, param.pipelineId, param.pipelineReplaceInput, param.validateDealStageUsagesBeforeDelete, param.validateReferencesBeforeDelete,  options).toPromise();
    }

    /**
     * Replace all the properties of an existing pipeline stage with the values provided. The updated stage will be returned in the response.
     * Replace a pipeline stage
     * @param param the request object
     */
    public replace_6WithHttpInfo(param: BasicApiReplace0Request, options?: ConfigurationOptions): Promise<HttpInfo<PipelineStage>> {
        return this.api.replace_6WithHttpInfo(param.objectType, param.pipelineId, param.stageId, param.pipelineStageReplaceInput,  options).toPromise();
    }

    /**
     * Replace all the properties of an existing pipeline stage with the values provided. The updated stage will be returned in the response.
     * Replace a pipeline stage
     * @param param the request object
     */
    public replace_6(param: BasicApiReplace0Request, options?: ConfigurationOptions): Promise<PipelineStage> {
        return this.api.replace_6(param.objectType, param.pipelineId, param.stageId, param.pipelineStageReplaceInput,  options).toPromise();
    }

    /**
     * Perform a partial update of the pipeline identified by `{pipelineId}`. The updated pipeline will be returned in the response.
     * @param param the request object
     */
    public updateWithHttpInfo(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<HttpInfo<Pipeline>> {
        return this.api.updateWithHttpInfo(param.objectType, param.pipelineId, param.pipelinePatchInput, param.validateDealStageUsagesBeforeDelete, param.validateReferencesBeforeDelete,  options).toPromise();
    }

    /**
     * Perform a partial update of the pipeline identified by `{pipelineId}`. The updated pipeline will be returned in the response.
     * @param param the request object
     */
    public update(param: BasicApiUpdateRequest, options?: ConfigurationOptions): Promise<Pipeline> {
        return this.api.update(param.objectType, param.pipelineId, param.pipelinePatchInput, param.validateDealStageUsagesBeforeDelete, param.validateReferencesBeforeDelete,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public update_7WithHttpInfo(param: BasicApiUpdate0Request, options?: ConfigurationOptions): Promise<HttpInfo<PipelineStage>> {
        return this.api.update_7WithHttpInfo(param.objectType, param.pipelineId, param.stageId, param.pipelineStagePatchInput,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public update_7(param: BasicApiUpdate0Request, options?: ConfigurationOptions): Promise<PipelineStage> {
        return this.api.update_7(param.objectType, param.pipelineId, param.stageId, param.pipelineStagePatchInput,  options).toPromise();
    }

}
