import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { BasicApiRequestFactory, BasicApiResponseProcessor} from "../apis/BasicApi";
export class ObservableBasicApi {
    private requestFactory: BasicApiRequestFactory;
    private responseProcessor: BasicApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BasicApiRequestFactory,
        responseProcessor?: BasicApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BasicApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BasicApiResponseProcessor();
    }

    /**
     * Delete a pipeline
     * @param objectType 
     * @param pipelineId 
     * @param [validateDealStageUsagesBeforeDelete] 
     * @param [validateReferencesBeforeDelete] 
     */
    public archiveWithHttpInfo(objectType: string, pipelineId: string, validateDealStageUsagesBeforeDelete?: boolean, validateReferencesBeforeDelete?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.archive(objectType, pipelineId, validateDealStageUsagesBeforeDelete, validateReferencesBeforeDelete, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a pipeline
     * @param objectType 
     * @param pipelineId 
     * @param [validateDealStageUsagesBeforeDelete] 
     * @param [validateReferencesBeforeDelete] 
     */
    public archive(objectType: string, pipelineId: string, validateDealStageUsagesBeforeDelete?: boolean, validateReferencesBeforeDelete?: boolean, _options?: ConfigurationOptions): Observable<void> {
        return this.archiveWithHttpInfo(objectType, pipelineId, validateDealStageUsagesBeforeDelete, validateReferencesBeforeDelete, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     * @param [validateReferencesBeforeDelete] 
     */
    public archive_1WithHttpInfo(objectType: string, pipelineId: string, stageId: string, validateReferencesBeforeDelete?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<void>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.archive_1(objectType, pipelineId, stageId, validateReferencesBeforeDelete, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archive_1WithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     * @param [validateReferencesBeforeDelete] 
     */
    public archive_1(objectType: string, pipelineId: string, stageId: string, validateReferencesBeforeDelete?: boolean, _options?: ConfigurationOptions): Observable<void> {
        return this.archive_1WithHttpInfo(objectType, pipelineId, stageId, validateReferencesBeforeDelete, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Create a new pipeline with the provided property values. The entire pipeline object, including its unique ID, will be returned in the response.
     * Create a pipeline
     * @param objectType 
     * @param pipelineInput
     */
    public createWithHttpInfo(objectType: string, pipelineInput: PipelineInput, _options?: ConfigurationOptions): Observable<HttpInfo<Pipeline>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.create(objectType, pipelineInput, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
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
    public create(objectType: string, pipelineInput: PipelineInput, _options?: ConfigurationOptions): Observable<Pipeline> {
        return this.createWithHttpInfo(objectType, pipelineInput, _options).pipe(map((apiResponse: HttpInfo<Pipeline>) => apiResponse.data));
    }

    /**
     * Create a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param pipelineStageInput
     */
    public create_2WithHttpInfo(objectType: string, pipelineId: string, pipelineStageInput: PipelineStageInput, _options?: ConfigurationOptions): Observable<HttpInfo<PipelineStage>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.create_2(objectType, pipelineId, pipelineStageInput, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create_2WithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param pipelineStageInput
     */
    public create_2(objectType: string, pipelineId: string, pipelineStageInput: PipelineStageInput, _options?: ConfigurationOptions): Observable<PipelineStage> {
        return this.create_2WithHttpInfo(objectType, pipelineId, pipelineStageInput, _options).pipe(map((apiResponse: HttpInfo<PipelineStage>) => apiResponse.data));
    }

    /**
     * Return all pipelines for the object type specified by `{objectType}`.
     * Retrieve all pipelines
     * @param objectType 
     */
    public getAllWithHttpInfo(objectType: string, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionResponsePipelineNoPaging>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.getAll(objectType, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
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
    public getAll(objectType: string, _options?: ConfigurationOptions): Observable<CollectionResponsePipelineNoPaging> {
        return this.getAllWithHttpInfo(objectType, _options).pipe(map((apiResponse: HttpInfo<CollectionResponsePipelineNoPaging>) => apiResponse.data));
    }

    /**
     * Return all the stages associated with the pipeline identified by `{pipelineId}`.
     * Return all stages of a pipeline
     * @param objectType 
     * @param pipelineId 
     */
    public getAll_3WithHttpInfo(objectType: string, pipelineId: string, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionResponsePipelineStageNoPaging>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.getAll_3(objectType, pipelineId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAll_3WithHttpInfo(rsp)));
            }));
    }

    /**
     * Return all the stages associated with the pipeline identified by `{pipelineId}`.
     * Return all stages of a pipeline
     * @param objectType 
     * @param pipelineId 
     */
    public getAll_3(objectType: string, pipelineId: string, _options?: ConfigurationOptions): Observable<CollectionResponsePipelineStageNoPaging> {
        return this.getAll_3WithHttpInfo(objectType, pipelineId, _options).pipe(map((apiResponse: HttpInfo<CollectionResponsePipelineStageNoPaging>) => apiResponse.data));
    }

    /**
     * Return a reverse chronological list of all mutations that have occurred on the pipeline identified by `{pipelineId}`.
     * Return an audit of all changes to the pipeline
     * @param objectType 
     * @param pipelineId 
     */
    public getAuditWithHttpInfo(objectType: string, pipelineId: string, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionResponsePublicAuditInfoNoPaging>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.getAudit(objectType, pipelineId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
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
    public getAudit(objectType: string, pipelineId: string, _options?: ConfigurationOptions): Observable<CollectionResponsePublicAuditInfoNoPaging> {
        return this.getAuditWithHttpInfo(objectType, pipelineId, _options).pipe(map((apiResponse: HttpInfo<CollectionResponsePublicAuditInfoNoPaging>) => apiResponse.data));
    }

    /**
     * Return a reverse chronological list of all mutations that have occurred on the pipeline stage identified by `{stageId}`.
     * @param objectType 
     * @param pipelineId
     * @param stageId 
     */
    public getAudit_4WithHttpInfo(objectType: string, pipelineId: string, stageId: string, _options?: ConfigurationOptions): Observable<HttpInfo<CollectionResponsePublicAuditInfoNoPaging>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.getAudit_4(objectType, pipelineId, stageId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAudit_4WithHttpInfo(rsp)));
            }));
    }

    /**
     * Return a reverse chronological list of all mutations that have occurred on the pipeline stage identified by `{stageId}`.
     * @param objectType 
     * @param pipelineId
     * @param stageId 
     */
    public getAudit_4(objectType: string, pipelineId: string, stageId: string, _options?: ConfigurationOptions): Observable<CollectionResponsePublicAuditInfoNoPaging> {
        return this.getAudit_4WithHttpInfo(objectType, pipelineId, stageId, _options).pipe(map((apiResponse: HttpInfo<CollectionResponsePublicAuditInfoNoPaging>) => apiResponse.data));
    }

    /**
     * Return a single pipeline object identified by its unique `{pipelineId}`.
     * Return a pipeline by ID
     * @param objectType 
     * @param pipelineId 
     */
    public getByIdWithHttpInfo(objectType: string, pipelineId: string, _options?: ConfigurationOptions): Observable<HttpInfo<Pipeline>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.getById(objectType, pipelineId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
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
    public getById(objectType: string, pipelineId: string, _options?: ConfigurationOptions): Observable<Pipeline> {
        return this.getByIdWithHttpInfo(objectType, pipelineId, _options).pipe(map((apiResponse: HttpInfo<Pipeline>) => apiResponse.data));
    }

    /**
     * Return a pipeline stage by ID
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     */
    public getById_5WithHttpInfo(objectType: string, pipelineId: string, stageId: string, _options?: ConfigurationOptions): Observable<HttpInfo<PipelineStage>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.getById_5(objectType, pipelineId, stageId, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getById_5WithHttpInfo(rsp)));
            }));
    }

    /**
     * Return a pipeline stage by ID
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     */
    public getById_5(objectType: string, pipelineId: string, stageId: string, _options?: ConfigurationOptions): Observable<PipelineStage> {
        return this.getById_5WithHttpInfo(objectType, pipelineId, stageId, _options).pipe(map((apiResponse: HttpInfo<PipelineStage>) => apiResponse.data));
    }

    /**
     * Replace a pipeline
     * @param objectType 
     * @param pipelineId 
     * @param pipelineReplaceInput
     * @param [validateDealStageUsagesBeforeDelete] 
     * @param [validateReferencesBeforeDelete] 
     */
    public replaceWithHttpInfo(objectType: string, pipelineId: string, pipelineReplaceInput: PipelineReplaceInput, validateDealStageUsagesBeforeDelete?: boolean, validateReferencesBeforeDelete?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<Pipeline>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.replace(objectType, pipelineId, pipelineReplaceInput, validateDealStageUsagesBeforeDelete, validateReferencesBeforeDelete, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replaceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Replace a pipeline
     * @param objectType 
     * @param pipelineId 
     * @param pipelineReplaceInput
     * @param [validateDealStageUsagesBeforeDelete] 
     * @param [validateReferencesBeforeDelete] 
     */
    public replace(objectType: string, pipelineId: string, pipelineReplaceInput: PipelineReplaceInput, validateDealStageUsagesBeforeDelete?: boolean, validateReferencesBeforeDelete?: boolean, _options?: ConfigurationOptions): Observable<Pipeline> {
        return this.replaceWithHttpInfo(objectType, pipelineId, pipelineReplaceInput, validateDealStageUsagesBeforeDelete, validateReferencesBeforeDelete, _options).pipe(map((apiResponse: HttpInfo<Pipeline>) => apiResponse.data));
    }

    /**
     * Replace all the properties of an existing pipeline stage with the values provided. The updated stage will be returned in the response.
     * Replace a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     * @param pipelineStageReplaceInput
     */
    public replace_6WithHttpInfo(objectType: string, pipelineId: string, stageId: string, pipelineStageReplaceInput: PipelineStageReplaceInput, _options?: ConfigurationOptions): Observable<HttpInfo<PipelineStage>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.replace_6(objectType, pipelineId, stageId, pipelineStageReplaceInput, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.replace_6WithHttpInfo(rsp)));
            }));
    }

    /**
     * Replace all the properties of an existing pipeline stage with the values provided. The updated stage will be returned in the response.
     * Replace a pipeline stage
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     * @param pipelineStageReplaceInput
     */
    public replace_6(objectType: string, pipelineId: string, stageId: string, pipelineStageReplaceInput: PipelineStageReplaceInput, _options?: ConfigurationOptions): Observable<PipelineStage> {
        return this.replace_6WithHttpInfo(objectType, pipelineId, stageId, pipelineStageReplaceInput, _options).pipe(map((apiResponse: HttpInfo<PipelineStage>) => apiResponse.data));
    }

    /**
     * Perform a partial update of the pipeline identified by `{pipelineId}`. The updated pipeline will be returned in the response.
     * @param objectType 
     * @param pipelineId 
     * @param pipelinePatchInput
     * @param [validateDealStageUsagesBeforeDelete] 
     * @param [validateReferencesBeforeDelete] 
     */
    public updateWithHttpInfo(objectType: string, pipelineId: string, pipelinePatchInput: PipelinePatchInput, validateDealStageUsagesBeforeDelete?: boolean, validateReferencesBeforeDelete?: boolean, _options?: ConfigurationOptions): Observable<HttpInfo<Pipeline>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.update(objectType, pipelineId, pipelinePatchInput, validateDealStageUsagesBeforeDelete, validateReferencesBeforeDelete, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateWithHttpInfo(rsp)));
            }));
    }

    /**
     * Perform a partial update of the pipeline identified by `{pipelineId}`. The updated pipeline will be returned in the response.
     * @param objectType 
     * @param pipelineId 
     * @param pipelinePatchInput
     * @param [validateDealStageUsagesBeforeDelete] 
     * @param [validateReferencesBeforeDelete] 
     */
    public update(objectType: string, pipelineId: string, pipelinePatchInput: PipelinePatchInput, validateDealStageUsagesBeforeDelete?: boolean, validateReferencesBeforeDelete?: boolean, _options?: ConfigurationOptions): Observable<Pipeline> {
        return this.updateWithHttpInfo(objectType, pipelineId, pipelinePatchInput, validateDealStageUsagesBeforeDelete, validateReferencesBeforeDelete, _options).pipe(map((apiResponse: HttpInfo<Pipeline>) => apiResponse.data));
    }

    /**
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     * @param pipelineStagePatchInput
     */
    public update_7WithHttpInfo(objectType: string, pipelineId: string, stageId: string, pipelineStagePatchInput: PipelineStagePatchInput, _options?: ConfigurationOptions): Observable<HttpInfo<PipelineStage>> {
    let _config = this.configuration;
    let allMiddleware: Middleware[] = [...this.configuration.middleware];
    if (_options && _options.middleware){
      const middlewareMergeStrategy = _options.middlewareMergeStrategy || 'replace' // default to replace behavior
      // call-time middleware provided
      const calltimeMiddleware: Middleware[] = _options.middleware;

      switch(middlewareMergeStrategy){
      case 'append':
        allMiddleware = this.configuration.middleware.concat(calltimeMiddleware);
        break;
      case 'prepend':
        allMiddleware = calltimeMiddleware.concat(this.configuration.middleware)
        break;
      case 'replace':
        allMiddleware = [...calltimeMiddleware]
        break;
      default: 
        throw new Error(`unrecognized middleware merge strategy '${middlewareMergeStrategy}'`)
      }
	}
	if (_options){
    _config = {
      baseServer: _options.baseServer || this.configuration.baseServer,
      httpApi: _options.httpApi || this.configuration.httpApi,
      authMethods: _options.authMethods || this.configuration.authMethods,
      middleware: allMiddleware
		};
	}

        const requestContextPromise = this.requestFactory.update_7(objectType, pipelineId, stageId, pipelineStagePatchInput, _config);
        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (const middleware of allMiddleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (const middleware of allMiddleware.reverse()) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update_7WithHttpInfo(rsp)));
            }));
    }

    /**
     * @param objectType 
     * @param pipelineId 
     * @param stageId 
     * @param pipelineStagePatchInput
     */
    public update_7(objectType: string, pipelineId: string, stageId: string, pipelineStagePatchInput: PipelineStagePatchInput, _options?: ConfigurationOptions): Observable<PipelineStage> {
        return this.update_7WithHttpInfo(objectType, pipelineId, stageId, pipelineStagePatchInput, _options).pipe(map((apiResponse: HttpInfo<PipelineStage>) => apiResponse.data));
    }

}
