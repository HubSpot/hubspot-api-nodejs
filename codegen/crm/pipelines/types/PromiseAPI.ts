import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

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
import { ObservableBasicApi } from './ObservableAPI';

import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";
export class PromiseBasicApi {
    private api: ObservableBasicApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicApiRequestFactory,
        responseProcessor?: BasicApiResponseProcessor
    ) {
        this.api = new ObservableBasicApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a pipeline
     * @param objectType 
     * @param pipelineId 
     * @param [validateDealStageUsagesBeforeDelete] 
     * @param [validateReferencesBeforeDelete] 
     */
    public archiveWithHttpInfo(objectType: string, pipelineId: string, validateDealStageUsagesBeforeDelete?: boolean, validateReferencesBeforeDelete?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archiveWithHttpInfo(objectType, pipelineId, validateDealStageUsagesBeforeDelete, validateReferencesBeforeDelete, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a pipeline
     * @param objectType 
     * @param pipelineId 
     * @param [validateDealStageUsagesBeforeDelete] 
     * @param [validateReferencesBeforeDelete] 
     */
    public archive(objectType: string, pipelineId: string, validateDealStageUsagesBeforeDelete?: boolean, validateReferencesBeforeDelete?: boolean, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archive(objectType, pipelineId, validateDealStageUsagesBeforeDelete, validateReferencesBeforeDelete, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     * @param [validateReferencesBeforeDelete] 
     */
    public archive_1WithHttpInfo(objectType: string, pipelineId: string, stageId: string, validateReferencesBeforeDelete?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archive_1WithHttpInfo(objectType, pipelineId, stageId, validateReferencesBeforeDelete, observableOptions);
        return result.toPromise();
    }

    /**
     * Delete a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     * @param [validateReferencesBeforeDelete] 
     */
    public archive_1(objectType: string, pipelineId: string, stageId: string, validateReferencesBeforeDelete?: boolean, _options?: PromiseConfigurationOptions): Promise<void> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.archive_1(objectType, pipelineId, stageId, validateReferencesBeforeDelete, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new pipeline with the provided property values. The entire pipeline object, including its unique ID, will be returned in the response.
     * Create a pipeline
     * @param objectType 
     * @param pipelineInput
     */
    public createWithHttpInfo(objectType: string, pipelineInput: PipelineInput, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Pipeline>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.createWithHttpInfo(objectType, pipelineInput, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a new pipeline with the provided property values. The entire pipeline object, including its unique ID, will be returned in the response.
     * Create a pipeline
     * @param objectType 
     * @param pipelineInput
     */
    public create(objectType: string, pipelineInput: PipelineInput, _options?: PromiseConfigurationOptions): Promise<Pipeline> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.create(objectType, pipelineInput, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param pipelineStageInput
     */
    public create_2WithHttpInfo(objectType: string, pipelineId: string, pipelineStageInput: PipelineStageInput, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PipelineStage>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.create_2WithHttpInfo(objectType, pipelineId, pipelineStageInput, observableOptions);
        return result.toPromise();
    }

    /**
     * Create a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param pipelineStageInput
     */
    public create_2(objectType: string, pipelineId: string, pipelineStageInput: PipelineStageInput, _options?: PromiseConfigurationOptions): Promise<PipelineStage> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.create_2(objectType, pipelineId, pipelineStageInput, observableOptions);
        return result.toPromise();
    }

    /**
     * Return all pipelines for the object type specified by `{objectType}`.
     * Retrieve all pipelines
     * @param objectType 
     */
    public getAllWithHttpInfo(objectType: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePipelineNoPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAllWithHttpInfo(objectType, observableOptions);
        return result.toPromise();
    }

    /**
     * Return all pipelines for the object type specified by `{objectType}`.
     * Retrieve all pipelines
     * @param objectType 
     */
    public getAll(objectType: string, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePipelineNoPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAll(objectType, observableOptions);
        return result.toPromise();
    }

    /**
     * Return all the stages associated with the pipeline identified by `{pipelineId}`.
     * Return all stages of a pipeline
     * @param objectType 
     * @param pipelineId 
     */
    public getAll_3WithHttpInfo(objectType: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePipelineStageNoPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAll_3WithHttpInfo(objectType, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Return all the stages associated with the pipeline identified by `{pipelineId}`.
     * Return all stages of a pipeline
     * @param objectType 
     * @param pipelineId 
     */
    public getAll_3(objectType: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePipelineStageNoPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAll_3(objectType, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Return a reverse chronological list of all mutations that have occurred on the pipeline identified by `{pipelineId}`.
     * Return an audit of all changes to the pipeline
     * @param objectType 
     * @param pipelineId 
     */
    public getAuditWithHttpInfo(objectType: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicAuditInfoNoPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAuditWithHttpInfo(objectType, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Return a reverse chronological list of all mutations that have occurred on the pipeline identified by `{pipelineId}`.
     * Return an audit of all changes to the pipeline
     * @param objectType 
     * @param pipelineId 
     */
    public getAudit(objectType: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicAuditInfoNoPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAudit(objectType, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Return a reverse chronological list of all mutations that have occurred on the pipeline stage identified by `{stageId}`.
     * @param objectType 
     * @param pipelineId
     * @param stageId 
     */
    public getAudit_4WithHttpInfo(objectType: string, pipelineId: string, stageId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponsePublicAuditInfoNoPaging>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAudit_4WithHttpInfo(objectType, pipelineId, stageId, observableOptions);
        return result.toPromise();
    }

    /**
     * Return a reverse chronological list of all mutations that have occurred on the pipeline stage identified by `{stageId}`.
     * @param objectType 
     * @param pipelineId
     * @param stageId 
     */
    public getAudit_4(objectType: string, pipelineId: string, stageId: string, _options?: PromiseConfigurationOptions): Promise<CollectionResponsePublicAuditInfoNoPaging> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getAudit_4(objectType, pipelineId, stageId, observableOptions);
        return result.toPromise();
    }

    /**
     * Return a single pipeline object identified by its unique `{pipelineId}`.
     * Return a pipeline by ID
     * @param objectType 
     * @param pipelineId 
     */
    public getByIdWithHttpInfo(objectType: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Pipeline>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getByIdWithHttpInfo(objectType, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Return a single pipeline object identified by its unique `{pipelineId}`.
     * Return a pipeline by ID
     * @param objectType 
     * @param pipelineId 
     */
    public getById(objectType: string, pipelineId: string, _options?: PromiseConfigurationOptions): Promise<Pipeline> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getById(objectType, pipelineId, observableOptions);
        return result.toPromise();
    }

    /**
     * Return a pipeline stage by ID
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     */
    public getById_5WithHttpInfo(objectType: string, pipelineId: string, stageId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PipelineStage>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getById_5WithHttpInfo(objectType, pipelineId, stageId, observableOptions);
        return result.toPromise();
    }

    /**
     * Return a pipeline stage by ID
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     */
    public getById_5(objectType: string, pipelineId: string, stageId: string, _options?: PromiseConfigurationOptions): Promise<PipelineStage> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.getById_5(objectType, pipelineId, stageId, observableOptions);
        return result.toPromise();
    }

    /**
     * Replace a pipeline
     * @param objectType 
     * @param pipelineId 
     * @param pipelineReplaceInput
     * @param [validateDealStageUsagesBeforeDelete] 
     * @param [validateReferencesBeforeDelete] 
     */
    public replaceWithHttpInfo(objectType: string, pipelineId: string, pipelineReplaceInput: PipelineReplaceInput, validateDealStageUsagesBeforeDelete?: boolean, validateReferencesBeforeDelete?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Pipeline>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.replaceWithHttpInfo(objectType, pipelineId, pipelineReplaceInput, validateDealStageUsagesBeforeDelete, validateReferencesBeforeDelete, observableOptions);
        return result.toPromise();
    }

    /**
     * Replace a pipeline
     * @param objectType 
     * @param pipelineId 
     * @param pipelineReplaceInput
     * @param [validateDealStageUsagesBeforeDelete] 
     * @param [validateReferencesBeforeDelete] 
     */
    public replace(objectType: string, pipelineId: string, pipelineReplaceInput: PipelineReplaceInput, validateDealStageUsagesBeforeDelete?: boolean, validateReferencesBeforeDelete?: boolean, _options?: PromiseConfigurationOptions): Promise<Pipeline> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.replace(objectType, pipelineId, pipelineReplaceInput, validateDealStageUsagesBeforeDelete, validateReferencesBeforeDelete, observableOptions);
        return result.toPromise();
    }

    /**
     * Replace all the properties of an existing pipeline stage with the values provided. The updated stage will be returned in the response.
     * Replace a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     * @param pipelineStageReplaceInput
     */
    public replace_6WithHttpInfo(objectType: string, pipelineId: string, stageId: string, pipelineStageReplaceInput: PipelineStageReplaceInput, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PipelineStage>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.replace_6WithHttpInfo(objectType, pipelineId, stageId, pipelineStageReplaceInput, observableOptions);
        return result.toPromise();
    }

    /**
     * Replace all the properties of an existing pipeline stage with the values provided. The updated stage will be returned in the response.
     * Replace a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     * @param pipelineStageReplaceInput
     */
    public replace_6(objectType: string, pipelineId: string, stageId: string, pipelineStageReplaceInput: PipelineStageReplaceInput, _options?: PromiseConfigurationOptions): Promise<PipelineStage> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.replace_6(objectType, pipelineId, stageId, pipelineStageReplaceInput, observableOptions);
        return result.toPromise();
    }

    /**
     * Perform a partial update of the pipeline identified by `{pipelineId}`. The updated pipeline will be returned in the response.
     * @param objectType 
     * @param pipelineId 
     * @param pipelinePatchInput
     * @param [validateDealStageUsagesBeforeDelete] 
     * @param [validateReferencesBeforeDelete] 
     */
    public updateWithHttpInfo(objectType: string, pipelineId: string, pipelinePatchInput: PipelinePatchInput, validateDealStageUsagesBeforeDelete?: boolean, validateReferencesBeforeDelete?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<Pipeline>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.updateWithHttpInfo(objectType, pipelineId, pipelinePatchInput, validateDealStageUsagesBeforeDelete, validateReferencesBeforeDelete, observableOptions);
        return result.toPromise();
    }

    /**
     * Perform a partial update of the pipeline identified by `{pipelineId}`. The updated pipeline will be returned in the response.
     * @param objectType 
     * @param pipelineId 
     * @param pipelinePatchInput
     * @param [validateDealStageUsagesBeforeDelete] 
     * @param [validateReferencesBeforeDelete] 
     */
    public update(objectType: string, pipelineId: string, pipelinePatchInput: PipelinePatchInput, validateDealStageUsagesBeforeDelete?: boolean, validateReferencesBeforeDelete?: boolean, _options?: PromiseConfigurationOptions): Promise<Pipeline> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.update(objectType, pipelineId, pipelinePatchInput, validateDealStageUsagesBeforeDelete, validateReferencesBeforeDelete, observableOptions);
        return result.toPromise();
    }

    /**
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     * @param pipelineStagePatchInput
     */
    public update_7WithHttpInfo(objectType: string, pipelineId: string, stageId: string, pipelineStagePatchInput: PipelineStagePatchInput, _options?: PromiseConfigurationOptions): Promise<HttpInfo<PipelineStage>> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.update_7WithHttpInfo(objectType, pipelineId, stageId, pipelineStagePatchInput, observableOptions);
        return result.toPromise();
    }

    /**
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     * @param pipelineStagePatchInput
     */
    public update_7(objectType: string, pipelineId: string, stageId: string, pipelineStagePatchInput: PipelineStagePatchInput, _options?: PromiseConfigurationOptions): Promise<PipelineStage> {
        let observableOptions: undefined | ConfigurationOptions
        if (_options){
	    observableOptions = {
                baseServer: _options.baseServer,
                httpApi: _options.httpApi,
                middleware: _options.middleware?.map(
                    m => new PromiseMiddlewareWrapper(m)
		),
		middlewareMergeStrategy: _options.middlewareMergeStrategy,
                authMethods: _options.authMethods
	    }
	}
        const result = this.api.update_7(objectType, pipelineId, stageId, pipelineStagePatchInput, observableOptions);
        return result.toPromise();
    }


}



