import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AssociatedId } from '../models/AssociatedId';
import { AssociationSpec } from '../models/AssociationSpec';
import { AssociationSpecWithLabel } from '../models/AssociationSpecWithLabel';
import { BatchInputSimplePublicObjectBatchInput } from '../models/BatchInputSimplePublicObjectBatchInput';
import { BatchInputSimplePublicObjectId } from '../models/BatchInputSimplePublicObjectId';
import { BatchInputSimplePublicObjectInput } from '../models/BatchInputSimplePublicObjectInput';
import { BatchReadInputSimplePublicObjectId } from '../models/BatchReadInputSimplePublicObjectId';
import { BatchResponseSimplePublicObject } from '../models/BatchResponseSimplePublicObject';
import { BatchResponseSimplePublicObjectWithErrors } from '../models/BatchResponseSimplePublicObjectWithErrors';
import { CollectionResponseAssociatedId } from '../models/CollectionResponseAssociatedId';
import { CollectionResponseMultiAssociatedObjectWithLabelForwardPaging } from '../models/CollectionResponseMultiAssociatedObjectWithLabelForwardPaging';
import { CollectionResponseSimplePublicObjectWithAssociationsForwardPaging } from '../models/CollectionResponseSimplePublicObjectWithAssociationsForwardPaging';
import { CollectionResponseWithTotalSimplePublicObjectForwardPaging } from '../models/CollectionResponseWithTotalSimplePublicObjectForwardPaging';
import { ErrorCategory } from '../models/ErrorCategory';
import { ErrorDetail } from '../models/ErrorDetail';
import { Filter } from '../models/Filter';
import { FilterGroup } from '../models/FilterGroup';
import { ForwardPaging } from '../models/ForwardPaging';
import { LabelsBetweenObjectPair } from '../models/LabelsBetweenObjectPair';
import { ModelError } from '../models/ModelError';
import { MultiAssociatedObjectWithLabel } from '../models/MultiAssociatedObjectWithLabel';
import { NextPage } from '../models/NextPage';
import { Paging } from '../models/Paging';
import { PreviousPage } from '../models/PreviousPage';
import { PublicMergeInput } from '../models/PublicMergeInput';
import { PublicObjectSearchRequest } from '../models/PublicObjectSearchRequest';
import { SimplePublicObject } from '../models/SimplePublicObject';
import { SimplePublicObjectBatchInput } from '../models/SimplePublicObjectBatchInput';
import { SimplePublicObjectId } from '../models/SimplePublicObjectId';
import { SimplePublicObjectInput } from '../models/SimplePublicObjectInput';
import { SimplePublicObjectWithAssociations } from '../models/SimplePublicObjectWithAssociations';
import { StandardError } from '../models/StandardError';
import { ValueWithTimestamp } from '../models/ValueWithTimestamp';

import { AssociationsApiRequestFactory, AssociationsApiResponseProcessor} from "../apis/AssociationsApi";
export class ObservableAssociationsApi {
    private requestFactory: AssociationsApiRequestFactory;
    private responseProcessor: AssociationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AssociationsApiRequestFactory,
        responseProcessor?: AssociationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AssociationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AssociationsApiResponseProcessor();
    }

    /**
     * <span style='display: flex; justify-content: space-between;'><span style='flex: 1'><span style='display: inline-block;'>deletes all associations between two records.<br />Auth Level: external ([Docs](https://product.hubteam.com/docs/appsystems/auth-and-rest/auth-levels.html)) | [Source Code](https://private.hubteam.com/opengrok/search?project=all&path=PublicObjectResource&defs=deleteAllAssociations) | <a href='#operations-Associations-delete-%2Fcrm%2Fv4%2Fcompanies%2F%7BobjectType%7D%2F%7BcompanyId%7D%2Fassociations%2F%7BtoObjectType%7D%2F%7BtoObjectId%7D'>Permalink</a> | [API Goggles](https://tools.hubteam.com/api/delete/api.hubapi.com%2Fcrm%2Fv4%2Fcompanies%2F%28%28%7BobjectType%7D%29%29%2F%28%28%7BcompanyId%7D%29%29%2Fassociations%2F%28%28%7BtoObjectType%7D%29%29%2F%28%28%7BtoObjectId%7D%29%29?showRequestDetails=true&body=&authType=external)</span></span><span style='padding-left: 12px'><a href='https://looker.hubspotcentral.net/dashboards/4566?DeployConfig=CrmPublicObjects-Service-web&Resource=PublicObjectResource&Method=deleteAllAssociations&API%20Version=v4&Timeframe=90%20days%20ago%20for%2090%20days'>**7,481,227** external calls in the last 90 days</a></span></span>
     * Delete
     * @param companyId 
     * @param toObjectType 
     * @param toObjectId 
     */
    public archive(companyId: number, toObjectType: string, toObjectId: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.archive(companyId, toObjectType, toObjectId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archive(rsp)));
            }));
    }

    /**
     * <span style='display: flex; justify-content: space-between;'><span style='flex: 1'><span style='display: inline-block;'>Set association labels between two records.<br />Auth Level: external ([Docs](https://product.hubteam.com/docs/appsystems/auth-and-rest/auth-levels.html)) | [Source Code](https://private.hubteam.com/opengrok/search?project=all&path=PublicObjectResource&defs=setAssociationLabels) | <a href='#operations-Associations-put-%2Fcrm%2Fv4%2Fcompanies%2F%7BobjectType%7D%2F%7BcompanyId%7D%2Fassociations%2F%7BtoObjectType%7D%2F%7BtoObjectId%7D'>Permalink</a> | [API Goggles](https://tools.hubteam.com/api/put/api.hubapi.com%2Fcrm%2Fv4%2Fcompanies%2F%28%28%7BobjectType%7D%29%29%2F%28%28%7BcompanyId%7D%29%29%2Fassociations%2F%28%28%7BtoObjectType%7D%29%29%2F%28%28%7BtoObjectId%7D%29%29?showRequestDetails=true&body=&authType=external)</span></span><span style='padding-left: 12px'><a href='https://looker.hubspotcentral.net/dashboards/4566?DeployConfig=CrmPublicObjects-Service-web&Resource=PublicObjectResource&Method=setAssociationLabels&API%20Version=v4&Timeframe=90%20days%20ago%20for%2090%20days'>**84,046,482** external calls in the last 90 days</a></span></span>
     * Create
     * @param companyId 
     * @param toObjectType 
     * @param toObjectId 
     * @param associationSpec 
     */
    public create(companyId: number, toObjectType: string, toObjectId: number, associationSpec: Array<AssociationSpec>, _options?: Configuration): Observable<LabelsBetweenObjectPair> {
        const requestContextPromise = this.requestFactory.create(companyId, toObjectType, toObjectId, associationSpec, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create(rsp)));
            }));
    }

    /**
     * <span style='display: flex; justify-content: space-between;'><span style='flex: 1'><span style='display: inline-block;'>List all associations of a company by object type. Limit 1000 per call.<br />Auth Level: external ([Docs](https://product.hubteam.com/docs/appsystems/auth-and-rest/auth-levels.html)) | [Source Code](https://private.hubteam.com/opengrok/search?project=all&path=PublicObjectResource&defs=getAllAssociationsForObject) | <a href='#operations-Associations-get-%2Fcrm%2Fv4%2Fcompanies%2F%7BobjectType%7D%2F%7BcompanyId%7D%2Fassociations%2F%7BtoObjectType%7D'>Permalink</a> | [API Goggles](https://tools.hubteam.com/api/get/api.hubapi.com%2Fcrm%2Fv4%2Fcompanies%2F%28%28%7BobjectType%7D%29%29%2F%28%28%7BcompanyId%7D%29%29%2Fassociations%2F%28%28%7BtoObjectType%7D%29%29?showRequestDetails=true&body=&authType=external)</span></span><span style='padding-left: 12px'><a href='https://looker.hubspotcentral.net/dashboards/4566?DeployConfig=CrmPublicObjects-Service-web&Resource=PublicObjectResource&Method=getAllAssociationsForObject&API%20Version=v4&Timeframe=90%20days%20ago%20for%2090%20days'>**101,011,935** external calls in the last 90 days</a></span></span>
     * List
     * @param companyId 
     * @param toObjectType 
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to display per page.
     */
    public getAll(companyId: number, toObjectType: string, after?: string, limit?: number, _options?: Configuration): Observable<CollectionResponseMultiAssociatedObjectWithLabelForwardPaging> {
        const requestContextPromise = this.requestFactory.getAll(companyId, toObjectType, after, limit, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAll(rsp)));
            }));
    }

}

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
     * Move an Object identified by `{companyId}` to the recycling bin.
     * Archive
     * @param companyId 
     */
    public archive(companyId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.archive(companyId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archive(rsp)));
            }));
    }

    /**
     * Create a company with the given properties and return a copy of the object, including the ID. Documentation and examples for creating standard companies is provided.
     * Create
     * @param simplePublicObjectInput 
     */
    public create(simplePublicObjectInput: SimplePublicObjectInput, _options?: Configuration): Observable<SimplePublicObject> {
        const requestContextPromise = this.requestFactory.create(simplePublicObjectInput, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create(rsp)));
            }));
    }

    /**
     * Read an Object identified by `{companyId}`. `{companyId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param.  Control what is returned via the `properties` query param.
     * Read
     * @param companyId 
     * @param properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param propertiesWithHistory A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param archived Whether to return only results that have been archived.
     * @param idProperty The name of a property whose values are unique for this object type
     */
    public getById(companyId: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, idProperty?: string, _options?: Configuration): Observable<SimplePublicObjectWithAssociations> {
        const requestContextPromise = this.requestFactory.getById(companyId, properties, propertiesWithHistory, associations, archived, idProperty, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getById(rsp)));
            }));
    }

    /**
     * Read a page of companies. Control what is returned via the `properties` query param.
     * List
     * @param limit The maximum number of results to display per page.
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param properties A comma separated list of the properties to be returned in the response. If any of the specified properties are not present on the requested object(s), they will be ignored.
     * @param propertiesWithHistory A comma separated list of the properties to be returned along with their history of previous values. If any of the specified properties are not present on the requested object(s), they will be ignored. Usage of this parameter will reduce the maximum number of objects that can be read by a single request.
     * @param associations A comma separated list of object types to retrieve associated IDs for. If any of the specified associations do not exist, they will be ignored.
     * @param archived Whether to return only results that have been archived.
     */
    public getPage(limit?: number, after?: string, properties?: Array<string>, propertiesWithHistory?: Array<string>, associations?: Array<string>, archived?: boolean, _options?: Configuration): Observable<CollectionResponseSimplePublicObjectWithAssociationsForwardPaging> {
        const requestContextPromise = this.requestFactory.getPage(limit, after, properties, propertiesWithHistory, associations, archived, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPage(rsp)));
            }));
    }

    /**
     * Perform a partial update of an Object identified by `{companyId}`. `{companyId}` refers to the internal object ID by default, or optionally any unique property value as specified by the `idProperty` query param. Provided property values will be overwritten. Read-only and non-existent properties will be ignored. Properties values can be cleared by passing an empty string.
     * Update
     * @param companyId 
     * @param simplePublicObjectInput 
     * @param idProperty The name of a property whose values are unique for this object type
     */
    public update(companyId: string, simplePublicObjectInput: SimplePublicObjectInput, idProperty?: string, _options?: Configuration): Observable<SimplePublicObject> {
        const requestContextPromise = this.requestFactory.update(companyId, simplePublicObjectInput, idProperty, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update(rsp)));
            }));
    }

}

import { BatchApiRequestFactory, BatchApiResponseProcessor} from "../apis/BatchApi";
export class ObservableBatchApi {
    private requestFactory: BatchApiRequestFactory;
    private responseProcessor: BatchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BatchApiRequestFactory,
        responseProcessor?: BatchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BatchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BatchApiResponseProcessor();
    }

    /**
     * Archive a batch of companies by ID
     * @param batchInputSimplePublicObjectId 
     */
    public archive(batchInputSimplePublicObjectId: BatchInputSimplePublicObjectId, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.archive(batchInputSimplePublicObjectId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archive(rsp)));
            }));
    }

    /**
     * Create a batch of companies
     * @param batchInputSimplePublicObjectInput 
     */
    public create(batchInputSimplePublicObjectInput: BatchInputSimplePublicObjectInput, _options?: Configuration): Observable<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        const requestContextPromise = this.requestFactory.create(batchInputSimplePublicObjectInput, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.create(rsp)));
            }));
    }

    /**
     * Read a batch of companies by internal ID, or unique property values
     * @param batchReadInputSimplePublicObjectId 
     * @param archived Whether to return only results that have been archived.
     */
    public read(batchReadInputSimplePublicObjectId: BatchReadInputSimplePublicObjectId, archived?: boolean, _options?: Configuration): Observable<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        const requestContextPromise = this.requestFactory.read(batchReadInputSimplePublicObjectId, archived, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.read(rsp)));
            }));
    }

    /**
     * Update a batch of companies
     * @param batchInputSimplePublicObjectBatchInput 
     */
    public update(batchInputSimplePublicObjectBatchInput: BatchInputSimplePublicObjectBatchInput, _options?: Configuration): Observable<BatchResponseSimplePublicObject | BatchResponseSimplePublicObjectWithErrors> {
        const requestContextPromise = this.requestFactory.update(batchInputSimplePublicObjectBatchInput, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.update(rsp)));
            }));
    }

}

import { PublicObjectApiRequestFactory, PublicObjectApiResponseProcessor} from "../apis/PublicObjectApi";
export class ObservablePublicObjectApi {
    private requestFactory: PublicObjectApiRequestFactory;
    private responseProcessor: PublicObjectApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PublicObjectApiRequestFactory,
        responseProcessor?: PublicObjectApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PublicObjectApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PublicObjectApiResponseProcessor();
    }

    /**
     * Merge two companies with same type
     * @param publicMergeInput 
     */
    public merge(publicMergeInput: PublicMergeInput, _options?: Configuration): Observable<SimplePublicObject> {
        const requestContextPromise = this.requestFactory.merge(publicMergeInput, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.merge(rsp)));
            }));
    }

}

import { SearchApiRequestFactory, SearchApiResponseProcessor} from "../apis/SearchApi";
export class ObservableSearchApi {
    private requestFactory: SearchApiRequestFactory;
    private responseProcessor: SearchApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SearchApiRequestFactory,
        responseProcessor?: SearchApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SearchApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SearchApiResponseProcessor();
    }

    /**
     * @param publicObjectSearchRequest 
     */
    public doSearch(publicObjectSearchRequest: PublicObjectSearchRequest, _options?: Configuration): Observable<CollectionResponseWithTotalSimplePublicObjectForwardPaging> {
        const requestContextPromise = this.requestFactory.doSearch(publicObjectSearchRequest, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.doSearch(rsp)));
            }));
    }

}
