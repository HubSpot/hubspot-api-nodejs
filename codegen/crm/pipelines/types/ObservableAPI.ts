import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CollectionResponsePipelineNoPaging } from '../models/CollectionResponsePipelineNoPaging';
import { CollectionResponsePipelineStageNoPaging } from '../models/CollectionResponsePipelineStageNoPaging';
import { CollectionResponsePublicAuditInfoNoPaging } from '../models/CollectionResponsePublicAuditInfoNoPaging';
import { Pipeline } from '../models/Pipeline';
import { PipelineInput } from '../models/PipelineInput';
import { PipelinePatchInput } from '../models/PipelinePatchInput';
import { PipelineStage } from '../models/PipelineStage';
import { PipelineStageInput } from '../models/PipelineStageInput';
import { PipelineStagePatchInput } from '../models/PipelineStagePatchInput';

import { PipelineAuditsApiRequestFactory, PipelineAuditsApiResponseProcessor} from "../apis/PipelineAuditsApi";
export class ObservablePipelineAuditsApi {
    private requestFactory: PipelineAuditsApiRequestFactory;
    private responseProcessor: PipelineAuditsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PipelineAuditsApiRequestFactory,
        responseProcessor?: PipelineAuditsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PipelineAuditsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PipelineAuditsApiResponseProcessor();
    }

    /**
     * Return a reverse chronological list of all mutations that have occurred on the pipeline identified by `{pipelineId}`.
     * Return an audit of all changes to the pipeline
     * @param objectType 
     * @param pipelineId 
     */
    public getAuditWithHttpInfo(objectType: string, pipelineId: string, _options?: Configuration): Observable<HttpInfo<CollectionResponsePublicAuditInfoNoPaging>> {
        const requestContextPromise = this.requestFactory.getAudit(objectType, pipelineId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAuditWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return a reverse chronological list of all mutations that have occurred on the pipeline identified by `{pipelineId}`.
     * Return an audit of all changes to the pipeline
     * @param objectType 
     * @param pipelineId 
     */
    public getAudit(objectType: string, pipelineId: string, _options?: Configuration): Observable<CollectionResponsePublicAuditInfoNoPaging> {
        return this.getAuditWithHttpInfo(objectType, pipelineId, _options).pipe(map((apiResponse: HttpInfo<CollectionResponsePublicAuditInfoNoPaging>) => apiResponse.data));
    }

}

import { PipelineStageAuditsApiRequestFactory, PipelineStageAuditsApiResponseProcessor} from "../apis/PipelineStageAuditsApi";
export class ObservablePipelineStageAuditsApi {
    private requestFactory: PipelineStageAuditsApiRequestFactory;
    private responseProcessor: PipelineStageAuditsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PipelineStageAuditsApiRequestFactory,
        responseProcessor?: PipelineStageAuditsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PipelineStageAuditsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PipelineStageAuditsApiResponseProcessor();
    }

    /**
     * Return a reverse chronological list of all mutations that have occurred on the pipeline stage identified by `{stageId}`.
     * Return an audit of all changes to the pipeline stage
     * @param objectType 
     * @param stageId 
     */
    public getAuditWithHttpInfo(objectType: string, stageId: string, _options?: Configuration): Observable<HttpInfo<CollectionResponsePublicAuditInfoNoPaging>> {
        const requestContextPromise = this.requestFactory.getAudit(objectType, stageId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAuditWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return a reverse chronological list of all mutations that have occurred on the pipeline stage identified by `{stageId}`.
     * Return an audit of all changes to the pipeline stage
     * @param objectType 
     * @param stageId 
     */
    public getAudit(objectType: string, stageId: string, _options?: Configuration): Observable<CollectionResponsePublicAuditInfoNoPaging> {
        return this.getAuditWithHttpInfo(objectType, stageId, _options).pipe(map((apiResponse: HttpInfo<CollectionResponsePublicAuditInfoNoPaging>) => apiResponse.data));
    }

}

import { PipelineStagesApiRequestFactory, PipelineStagesApiResponseProcessor} from "../apis/PipelineStagesApi";
export class ObservablePipelineStagesApi {
    private requestFactory: PipelineStagesApiRequestFactory;
    private responseProcessor: PipelineStagesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PipelineStagesApiRequestFactory,
        responseProcessor?: PipelineStagesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PipelineStagesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PipelineStagesApiResponseProcessor();
    }

    /**
     * Delete the pipeline stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
     * Delete a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     */
    public archiveWithHttpInfo(objectType: string, pipelineId: string, stageId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(objectType, pipelineId, stageId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete the pipeline stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
     * Delete a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     */
    public archive(objectType: string, pipelineId: string, stageId: string, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(objectType, pipelineId, stageId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create a new stage associated with the pipeline identified by `{pipelineId}`. The entire stage object, including its unique ID, will be returned in the response.
     * Create a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param pipelineStageInput 
     */
    public createWithHttpInfo(objectType: string, pipelineId: string, pipelineStageInput: PipelineStageInput, _options?: Configuration): Observable<HttpInfo<PipelineStage>> {
        const requestContextPromise = this.requestFactory.create(objectType, pipelineId, pipelineStageInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new stage associated with the pipeline identified by `{pipelineId}`. The entire stage object, including its unique ID, will be returned in the response.
     * Create a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param pipelineStageInput 
     */
    public create(objectType: string, pipelineId: string, pipelineStageInput: PipelineStageInput, _options?: Configuration): Observable<PipelineStage> {
        return this.createWithHttpInfo(objectType, pipelineId, pipelineStageInput, _options).pipe(map((apiResponse: HttpInfo<PipelineStage>) => apiResponse.data));
    }

    /**
     * Return all the stages associated with the pipeline identified by `{pipelineId}`.
     * Return all stages of a pipeline
     * @param objectType 
     * @param pipelineId 
     */
    public getAllWithHttpInfo(objectType: string, pipelineId: string, _options?: Configuration): Observable<HttpInfo<CollectionResponsePipelineStageNoPaging>> {
        const requestContextPromise = this.requestFactory.getAll(objectType, pipelineId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return all the stages associated with the pipeline identified by `{pipelineId}`.
     * Return all stages of a pipeline
     * @param objectType 
     * @param pipelineId 
     */
    public getAll(objectType: string, pipelineId: string, _options?: Configuration): Observable<CollectionResponsePipelineStageNoPaging> {
        return this.getAllWithHttpInfo(objectType, pipelineId, _options).pipe(map((apiResponse: HttpInfo<CollectionResponsePipelineStageNoPaging>) => apiResponse.data));
    }

    /**
     * Return the stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
     * Return a pipeline stage by ID
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     */
    public getByIdWithHttpInfo(objectType: string, pipelineId: string, stageId: string, _options?: Configuration): Observable<HttpInfo<PipelineStage>> {
        const requestContextPromise = this.requestFactory.getById(objectType, pipelineId, stageId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return the stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`.
     * Return a pipeline stage by ID
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     */
    public getById(objectType: string, pipelineId: string, stageId: string, _options?: Configuration): Observable<PipelineStage> {
        return this.getByIdWithHttpInfo(objectType, pipelineId, stageId, _options).pipe(map((apiResponse: HttpInfo<PipelineStage>) => apiResponse.data));
    }

    /**
     * Replace all the properties of an existing pipeline stage with the values provided. The updated stage will be returned in the response.
     * Replace a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     * @param pipelineStageInput 
     */
    public replaceWithHttpInfo(objectType: string, pipelineId: string, stageId: string, pipelineStageInput: PipelineStageInput, _options?: Configuration): Observable<HttpInfo<PipelineStage>> {
        const requestContextPromise = this.requestFactory.replace(objectType, pipelineId, stageId, pipelineStageInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Replace all the properties of an existing pipeline stage with the values provided. The updated stage will be returned in the response.
     * Replace a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     * @param pipelineStageInput 
     */
    public replace(objectType: string, pipelineId: string, stageId: string, pipelineStageInput: PipelineStageInput, _options?: Configuration): Observable<PipelineStage> {
        return this.replaceWithHttpInfo(objectType, pipelineId, stageId, pipelineStageInput, _options).pipe(map((apiResponse: HttpInfo<PipelineStage>) => apiResponse.data));
    }

    /**
     * Perform a partial update of the pipeline stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`. Any properties not included in this update will keep their existing values. The updated stage will be returned in the response.
     * Update a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     * @param pipelineStagePatchInput 
     */
    public updateWithHttpInfo(objectType: string, pipelineId: string, stageId: string, pipelineStagePatchInput: PipelineStagePatchInput, _options?: Configuration): Observable<HttpInfo<PipelineStage>> {
        const requestContextPromise = this.requestFactory.update(objectType, pipelineId, stageId, pipelineStagePatchInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Perform a partial update of the pipeline stage identified by `{stageId}` associated with the pipeline identified by `{pipelineId}`. Any properties not included in this update will keep their existing values. The updated stage will be returned in the response.
     * Update a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     * @param pipelineStagePatchInput 
     */
    public update(objectType: string, pipelineId: string, stageId: string, pipelineStagePatchInput: PipelineStagePatchInput, _options?: Configuration): Observable<PipelineStage> {
        return this.updateWithHttpInfo(objectType, pipelineId, stageId, pipelineStagePatchInput, _options).pipe(map((apiResponse: HttpInfo<PipelineStage>) => apiResponse.data));
    }

}

import { PipelinesApiRequestFactory, PipelinesApiResponseProcessor} from "../apis/PipelinesApi";
export class ObservablePipelinesApi {
    private requestFactory: PipelinesApiRequestFactory;
    private responseProcessor: PipelinesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PipelinesApiRequestFactory,
        responseProcessor?: PipelinesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PipelinesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PipelinesApiResponseProcessor();
    }

    /**
     * Delete the pipeline identified by `{pipelineId}`.
     * Delete a pipeline
     * @param objectType 
     * @param pipelineId 
     * @param validateReferencesBeforeDelete 
     * @param validateDealStageUsagesBeforeDelete 
     */
    public archiveWithHttpInfo(objectType: string, pipelineId: string, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(objectType, pipelineId, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete the pipeline identified by `{pipelineId}`.
     * Delete a pipeline
     * @param objectType 
     * @param pipelineId 
     * @param validateReferencesBeforeDelete 
     * @param validateDealStageUsagesBeforeDelete 
     */
    public archive(objectType: string, pipelineId: string, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(objectType, pipelineId, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create a new pipeline with the provided property values. The entire pipeline object, including its unique ID, will be returned in the response.
     * Create a pipeline
     * @param objectType 
     * @param pipelineInput 
     */
    public createWithHttpInfo(objectType: string, pipelineInput: PipelineInput, _options?: Configuration): Observable<HttpInfo<Pipeline>> {
        const requestContextPromise = this.requestFactory.create(objectType, pipelineInput, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new pipeline with the provided property values. The entire pipeline object, including its unique ID, will be returned in the response.
     * Create a pipeline
     * @param objectType 
     * @param pipelineInput 
     */
    public create(objectType: string, pipelineInput: PipelineInput, _options?: Configuration): Observable<Pipeline> {
        return this.createWithHttpInfo(objectType, pipelineInput, _options).pipe(map((apiResponse: HttpInfo<Pipeline>) => apiResponse.data));
    }

    /**
     * Return all pipelines for the object type specified by `{objectType}`.
     * Retrieve all pipelines
     * @param objectType 
     */
    public getAllWithHttpInfo(objectType: string, _options?: Configuration): Observable<HttpInfo<CollectionResponsePipelineNoPaging>> {
        const requestContextPromise = this.requestFactory.getAll(objectType, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return all pipelines for the object type specified by `{objectType}`.
     * Retrieve all pipelines
     * @param objectType 
     */
    public getAll(objectType: string, _options?: Configuration): Observable<CollectionResponsePipelineNoPaging> {
        return this.getAllWithHttpInfo(objectType, _options).pipe(map((apiResponse: HttpInfo<CollectionResponsePipelineNoPaging>) => apiResponse.data));
    }

    /**
     * Return a single pipeline object identified by its unique `{pipelineId}`.
     * Return a pipeline by ID
     * @param objectType 
     * @param pipelineId 
     */
    public getByIdWithHttpInfo(objectType: string, pipelineId: string, _options?: Configuration): Observable<HttpInfo<Pipeline>> {
        const requestContextPromise = this.requestFactory.getById(objectType, pipelineId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return a single pipeline object identified by its unique `{pipelineId}`.
     * Return a pipeline by ID
     * @param objectType 
     * @param pipelineId 
     */
    public getById(objectType: string, pipelineId: string, _options?: Configuration): Observable<Pipeline> {
        return this.getByIdWithHttpInfo(objectType, pipelineId, _options).pipe(map((apiResponse: HttpInfo<Pipeline>) => apiResponse.data));
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
    public replaceWithHttpInfo(objectType: string, pipelineId: string, pipelineInput: PipelineInput, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Observable<HttpInfo<Pipeline>> {
        const requestContextPromise = this.requestFactory.replace(objectType, pipelineId, pipelineInput, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceWithHttpInfo(rsp)));
            }));
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
    public replace(objectType: string, pipelineId: string, pipelineInput: PipelineInput, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Observable<Pipeline> {
        return this.replaceWithHttpInfo(objectType, pipelineId, pipelineInput, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options).pipe(map((apiResponse: HttpInfo<Pipeline>) => apiResponse.data));
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
    public updateWithHttpInfo(objectType: string, pipelineId: string, pipelinePatchInput: PipelinePatchInput, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Observable<HttpInfo<Pipeline>> {
        const requestContextPromise = this.requestFactory.update(objectType, pipelineId, pipelinePatchInput, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWithHttpInfo(rsp)));
            }));
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
    public update(objectType: string, pipelineId: string, pipelinePatchInput: PipelinePatchInput, validateReferencesBeforeDelete?: boolean, validateDealStageUsagesBeforeDelete?: boolean, _options?: Configuration): Observable<Pipeline> {
        return this.updateWithHttpInfo(objectType, pipelineId, pipelinePatchInput, validateReferencesBeforeDelete, validateDealStageUsagesBeforeDelete, _options).pipe(map((apiResponse: HttpInfo<Pipeline>) => apiResponse.data));
    }

}
