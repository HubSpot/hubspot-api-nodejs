import { ResponseContext, RequestContext, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AbTestCreateRequestVNext } from '../models/AbTestCreateRequestVNext';
import { AbTestEndRequestVNext } from '../models/AbTestEndRequestVNext';
import { AbTestRerunRequestVNext } from '../models/AbTestRerunRequestVNext';
import { AttachToLangPrimaryRequestVNext } from '../models/AttachToLangPrimaryRequestVNext';
import { BatchInputContentFolder } from '../models/BatchInputContentFolder';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputPage } from '../models/BatchInputPage';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseContentFolder } from '../models/BatchResponseContentFolder';
import { BatchResponseContentFolderWithErrors } from '../models/BatchResponseContentFolderWithErrors';
import { BatchResponsePage } from '../models/BatchResponsePage';
import { BatchResponsePageWithErrors } from '../models/BatchResponsePageWithErrors';
import { CollectionResponseWithTotalContentFolderForwardPaging } from '../models/CollectionResponseWithTotalContentFolderForwardPaging';
import { CollectionResponseWithTotalPageForwardPaging } from '../models/CollectionResponseWithTotalPageForwardPaging';
import { CollectionResponseWithTotalVersionContentFolder } from '../models/CollectionResponseWithTotalVersionContentFolder';
import { CollectionResponseWithTotalVersionPage } from '../models/CollectionResponseWithTotalVersionPage';
import { ContentCloneRequestVNext } from '../models/ContentCloneRequestVNext';
import { ContentFolder } from '../models/ContentFolder';
import { ContentLanguageCloneRequestVNext } from '../models/ContentLanguageCloneRequestVNext';
import { ContentScheduleRequestVNext } from '../models/ContentScheduleRequestVNext';
import { DetachFromLangGroupRequestVNext } from '../models/DetachFromLangGroupRequestVNext';
import { Page } from '../models/Page';
import { SetNewLanguagePrimaryRequestVNext } from '../models/SetNewLanguagePrimaryRequestVNext';
import { UpdateLanguagesRequestVNext } from '../models/UpdateLanguagesRequestVNext';
import { VersionContentFolder } from '../models/VersionContentFolder';
import { VersionPage } from '../models/VersionPage';

import { LandingPagesApiRequestFactory, LandingPagesApiResponseProcessor} from "../apis/LandingPagesApi";
export class ObservableLandingPagesApi {
    private requestFactory: LandingPagesApiRequestFactory;
    private responseProcessor: LandingPagesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: LandingPagesApiRequestFactory,
        responseProcessor?: LandingPagesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new LandingPagesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new LandingPagesApiResponseProcessor();
    }

    /**
     * Delete the Landing Page object identified by the id in the path.
     * Delete a Landing Page
     * @param objectId The Landing Page id.
     * @param archived Whether to return only results that have been archived.
     */
    public archiveWithHttpInfo(objectId: string, archived?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(objectId, archived, _options);

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
     * Delete the Landing Page object identified by the id in the path.
     * Delete a Landing Page
     * @param objectId The Landing Page id.
     * @param archived Whether to return only results that have been archived.
     */
    public archive(objectId: string, archived?: boolean, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(objectId, archived, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete the Landing Page objects identified in the request body. Note: This is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to true.
     * Delete a batch of Landing Pages
     * @param batchInputString The JSON array of Landing Page ids.
     */
    public archiveBatchWithHttpInfo(batchInputString: BatchInputString, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archiveBatch(batchInputString, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete the Landing Page objects identified in the request body. Note: This is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to true.
     * Delete a batch of Landing Pages
     * @param batchInputString The JSON array of Landing Page ids.
     */
    public archiveBatch(batchInputString: BatchInputString, _options?: Configuration): Observable<void> {
        return this.archiveBatchWithHttpInfo(batchInputString, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete the Folder object identified by the id in the path.
     * Delete a Folder
     * @param objectId The Folder id.
     * @param archived Whether to return only results that have been archived.
     */
    public archiveFolderWithHttpInfo(objectId: string, archived?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archiveFolder(objectId, archived, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveFolderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete the Folder object identified by the id in the path.
     * Delete a Folder
     * @param objectId The Folder id.
     * @param archived Whether to return only results that have been archived.
     */
    public archiveFolder(objectId: string, archived?: boolean, _options?: Configuration): Observable<void> {
        return this.archiveFolderWithHttpInfo(objectId, archived, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete the Folder objects identified in the request body.
     * Delete a batch of Folders
     * @param batchInputString The JSON array of Folder ids.
     */
    public archiveFoldersWithHttpInfo(batchInputString: BatchInputString, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archiveFolders(batchInputString, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveFoldersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete the Folder objects identified in the request body.
     * Delete a batch of Folders
     * @param batchInputString The JSON array of Folder ids.
     */
    public archiveFolders(batchInputString: BatchInputString, _options?: Configuration): Observable<void> {
        return this.archiveFoldersWithHttpInfo(batchInputString, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Attach a landing page to a multi-language group.
     * Attach a landing page to a multi-language group
     * @param attachToLangPrimaryRequestVNext The JSON representation of the AttachToLangPrimaryRequest object.
     */
    public attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.attachToLangGroup(attachToLangPrimaryRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.attachToLangGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Attach a landing page to a multi-language group.
     * Attach a landing page to a multi-language group
     * @param attachToLangPrimaryRequestVNext The JSON representation of the AttachToLangPrimaryRequest object.
     */
    public attachToLangGroup(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: Configuration): Observable<void> {
        return this.attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Clone a Landing Page
     * Clone a Landing Page
     * @param contentCloneRequestVNext The JSON representation of the ContentCloneRequest object.
     */
    public cloneWithHttpInfo(contentCloneRequestVNext: ContentCloneRequestVNext, _options?: Configuration): Observable<HttpInfo<Page>> {
        const requestContextPromise = this.requestFactory.clone(contentCloneRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloneWithHttpInfo(rsp)));
            }));
    }

    /**
     * Clone a Landing Page
     * Clone a Landing Page
     * @param contentCloneRequestVNext The JSON representation of the ContentCloneRequest object.
     */
    public clone(contentCloneRequestVNext: ContentCloneRequestVNext, _options?: Configuration): Observable<Page> {
        return this.cloneWithHttpInfo(contentCloneRequestVNext, _options).pipe(map((apiResponse: HttpInfo<Page>) => apiResponse.data));
    }

    /**
     * Create a new Landing Page
     * Create a new Landing Page
     * @param page The JSON representation of a new Landing Page.
     */
    public createWithHttpInfo(page: Page, _options?: Configuration): Observable<HttpInfo<void | Page>> {
        const requestContextPromise = this.requestFactory.create(page, _options);

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
     * Create a new Landing Page
     * Create a new Landing Page
     * @param page The JSON representation of a new Landing Page.
     */
    public create(page: Page, _options?: Configuration): Observable<void | Page> {
        return this.createWithHttpInfo(page, _options).pipe(map((apiResponse: HttpInfo<void | Page>) => apiResponse.data));
    }

    /**
     * Create a new A/B test variation based on the information provided in the request body. 
     * Create a new A/B test variation
     * @param abTestCreateRequestVNext The JSON representation of the AbTestCreateRequest object.
     */
    public createABTestVariationWithHttpInfo(abTestCreateRequestVNext: AbTestCreateRequestVNext, _options?: Configuration): Observable<HttpInfo<Page>> {
        const requestContextPromise = this.requestFactory.createABTestVariation(abTestCreateRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createABTestVariationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new A/B test variation based on the information provided in the request body. 
     * Create a new A/B test variation
     * @param abTestCreateRequestVNext The JSON representation of the AbTestCreateRequest object.
     */
    public createABTestVariation(abTestCreateRequestVNext: AbTestCreateRequestVNext, _options?: Configuration): Observable<Page> {
        return this.createABTestVariationWithHttpInfo(abTestCreateRequestVNext, _options).pipe(map((apiResponse: HttpInfo<Page>) => apiResponse.data));
    }

    /**
     * Create the Landing Page objects detailed in the request body.
     * Create a batch of Landing Pages
     * @param batchInputPage The JSON array of new Landing Pages to create.
     */
    public createBatchWithHttpInfo(batchInputPage: BatchInputPage, _options?: Configuration): Observable<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        const requestContextPromise = this.requestFactory.createBatch(batchInputPage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create the Landing Page objects detailed in the request body.
     * Create a batch of Landing Pages
     * @param batchInputPage The JSON array of new Landing Pages to create.
     */
    public createBatch(batchInputPage: BatchInputPage, _options?: Configuration): Observable<BatchResponsePage | BatchResponsePageWithErrors> {
        return this.createBatchWithHttpInfo(batchInputPage, _options).pipe(map((apiResponse: HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>) => apiResponse.data));
    }

    /**
     * Create a new Folder
     * Create a new Folder
     * @param contentFolder The JSON representation of a new Folder.
     */
    public createFolderWithHttpInfo(contentFolder: ContentFolder, _options?: Configuration): Observable<HttpInfo<ContentFolder>> {
        const requestContextPromise = this.requestFactory.createFolder(contentFolder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createFolderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new Folder
     * Create a new Folder
     * @param contentFolder The JSON representation of a new Folder.
     */
    public createFolder(contentFolder: ContentFolder, _options?: Configuration): Observable<ContentFolder> {
        return this.createFolderWithHttpInfo(contentFolder, _options).pipe(map((apiResponse: HttpInfo<ContentFolder>) => apiResponse.data));
    }

    /**
     * Create the Folder objects detailed in the request body.
     * Create a batch of Folders
     * @param batchInputContentFolder The JSON array of new Folders to create.
     */
    public createFoldersWithHttpInfo(batchInputContentFolder: BatchInputContentFolder, _options?: Configuration): Observable<HttpInfo<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>> {
        const requestContextPromise = this.requestFactory.createFolders(batchInputContentFolder, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createFoldersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create the Folder objects detailed in the request body.
     * Create a batch of Folders
     * @param batchInputContentFolder The JSON array of new Folders to create.
     */
    public createFolders(batchInputContentFolder: BatchInputContentFolder, _options?: Configuration): Observable<BatchResponseContentFolder | BatchResponseContentFolderWithErrors> {
        return this.createFoldersWithHttpInfo(batchInputContentFolder, _options).pipe(map((apiResponse: HttpInfo<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>) => apiResponse.data));
    }

    /**
     * Create a new language variation from an existing landing page
     * Create a new language variation
     * @param contentLanguageCloneRequestVNext The JSON representation of the ContentLanguageCloneRequest object.
     */
    public createLangVariationWithHttpInfo(contentLanguageCloneRequestVNext: ContentLanguageCloneRequestVNext, _options?: Configuration): Observable<HttpInfo<Page>> {
        const requestContextPromise = this.requestFactory.createLangVariation(contentLanguageCloneRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createLangVariationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new language variation from an existing landing page
     * Create a new language variation
     * @param contentLanguageCloneRequestVNext The JSON representation of the ContentLanguageCloneRequest object.
     */
    public createLangVariation(contentLanguageCloneRequestVNext: ContentLanguageCloneRequestVNext, _options?: Configuration): Observable<Page> {
        return this.createLangVariationWithHttpInfo(contentLanguageCloneRequestVNext, _options).pipe(map((apiResponse: HttpInfo<Page>) => apiResponse.data));
    }

    /**
     * Detach a landing page from a multi-language group.
     * Detach a landing page from a multi-language group
     * @param detachFromLangGroupRequestVNext The JSON representation of the DetachFromLangGroupRequest object.
     */
    public detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.detachFromLangGroup(detachFromLangGroupRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.detachFromLangGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Detach a landing page from a multi-language group.
     * Detach a landing page from a multi-language group
     * @param detachFromLangGroupRequestVNext The JSON representation of the DetachFromLangGroupRequest object.
     */
    public detachFromLangGroup(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: Configuration): Observable<void> {
        return this.detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * End an active A/B test and designate a winner.
     * End an active A/B test
     * @param abTestEndRequestVNext The JSON representation of the AbTestEndRequest object.
     */
    public endActiveABTestWithHttpInfo(abTestEndRequestVNext: AbTestEndRequestVNext, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.endActiveABTest(abTestEndRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.endActiveABTestWithHttpInfo(rsp)));
            }));
    }

    /**
     * End an active A/B test and designate a winner.
     * End an active A/B test
     * @param abTestEndRequestVNext The JSON representation of the AbTestEndRequest object.
     */
    public endActiveABTest(abTestEndRequestVNext: AbTestEndRequestVNext, _options?: Configuration): Observable<void> {
        return this.endActiveABTestWithHttpInfo(abTestEndRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve the Landing Page object identified by the id in the path.
     * Retrieve a Landing Page
     * @param objectId The Landing Page id.
     * @param archived Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getByIdWithHttpInfo(objectId: string, archived?: boolean, property?: string, _options?: Configuration): Observable<HttpInfo<Page>> {
        const requestContextPromise = this.requestFactory.getById(objectId, archived, property, _options);

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
     * Retrieve the Landing Page object identified by the id in the path.
     * Retrieve a Landing Page
     * @param objectId The Landing Page id.
     * @param archived Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getById(objectId: string, archived?: boolean, property?: string, _options?: Configuration): Observable<Page> {
        return this.getByIdWithHttpInfo(objectId, archived, property, _options).pipe(map((apiResponse: HttpInfo<Page>) => apiResponse.data));
    }

    /**
     * Retrieve the full draft version of the Landing Page.
     * Retrieve the full draft version of the Landing Page
     * @param objectId The Landing Page id.
     */
    public getDraftByIdWithHttpInfo(objectId: string, _options?: Configuration): Observable<HttpInfo<Page>> {
        const requestContextPromise = this.requestFactory.getDraftById(objectId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDraftByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the full draft version of the Landing Page.
     * Retrieve the full draft version of the Landing Page
     * @param objectId The Landing Page id.
     */
    public getDraftById(objectId: string, _options?: Configuration): Observable<Page> {
        return this.getDraftByIdWithHttpInfo(objectId, _options).pipe(map((apiResponse: HttpInfo<Page>) => apiResponse.data));
    }

    /**
     * Retrieve the Folder object identified by the id in the path.
     * Retrieve a Folder
     * @param objectId The Folder id.
     * @param archived Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getFolderByIdWithHttpInfo(objectId: string, archived?: boolean, property?: string, _options?: Configuration): Observable<HttpInfo<ContentFolder>> {
        const requestContextPromise = this.requestFactory.getFolderById(objectId, archived, property, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFolderByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the Folder object identified by the id in the path.
     * Retrieve a Folder
     * @param objectId The Folder id.
     * @param archived Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getFolderById(objectId: string, archived?: boolean, property?: string, _options?: Configuration): Observable<ContentFolder> {
        return this.getFolderByIdWithHttpInfo(objectId, archived, property, _options).pipe(map((apiResponse: HttpInfo<ContentFolder>) => apiResponse.data));
    }

    /**
     * Retrieves a previous version of a Folder
     * Retrieves a previous version of a Folder
     * @param objectId The Folder id.
     * @param revisionId The Folder version id.
     */
    public getFolderPreviousVersionWithHttpInfo(objectId: string, revisionId: string, _options?: Configuration): Observable<HttpInfo<VersionContentFolder>> {
        const requestContextPromise = this.requestFactory.getFolderPreviousVersion(objectId, revisionId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFolderPreviousVersionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a previous version of a Folder
     * Retrieves a previous version of a Folder
     * @param objectId The Folder id.
     * @param revisionId The Folder version id.
     */
    public getFolderPreviousVersion(objectId: string, revisionId: string, _options?: Configuration): Observable<VersionContentFolder> {
        return this.getFolderPreviousVersionWithHttpInfo(objectId, revisionId, _options).pipe(map((apiResponse: HttpInfo<VersionContentFolder>) => apiResponse.data));
    }

    /**
     * Retrieves all the previous versions of a Folder.
     * Retrieves all the previous versions of a Folder
     * @param objectId The Folder id.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to return. Default is 100.
     */
    public getFolderPreviousVersionsWithHttpInfo(objectId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<CollectionResponseWithTotalVersionContentFolder>> {
        const requestContextPromise = this.requestFactory.getFolderPreviousVersions(objectId, after, before, limit, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFolderPreviousVersionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all the previous versions of a Folder.
     * Retrieves all the previous versions of a Folder
     * @param objectId The Folder id.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to return. Default is 100.
     */
    public getFolderPreviousVersions(objectId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Observable<CollectionResponseWithTotalVersionContentFolder> {
        return this.getFolderPreviousVersionsWithHttpInfo(objectId, after, before, limit, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalVersionContentFolder>) => apiResponse.data));
    }

    /**
     * Get the list of Landing Page Folders. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Landing Page Folders
     * @param createdAt Only return Folders created at exactly the specified time.
     * @param createdAfter Only return Folders created after the specified time.
     * @param createdBefore Only return Folders created before the specified time.
     * @param updatedAt Only return Folders last updated at exactly the specified time.
     * @param updatedAfter Only return Folders last updated after the specified time.
     * @param updatedBefore Only return Folders last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 100.
     * @param archived Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getFoldersPageWithHttpInfo(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, property?: string, _options?: Configuration): Observable<HttpInfo<CollectionResponseWithTotalContentFolderForwardPaging>> {
        const requestContextPromise = this.requestFactory.getFoldersPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFoldersPageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the list of Landing Page Folders. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Landing Page Folders
     * @param createdAt Only return Folders created at exactly the specified time.
     * @param createdAfter Only return Folders created after the specified time.
     * @param createdBefore Only return Folders created before the specified time.
     * @param updatedAt Only return Folders last updated at exactly the specified time.
     * @param updatedAfter Only return Folders last updated after the specified time.
     * @param updatedBefore Only return Folders last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 100.
     * @param archived Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getFoldersPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, property?: string, _options?: Configuration): Observable<CollectionResponseWithTotalContentFolderForwardPaging> {
        return this.getFoldersPageWithHttpInfo(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalContentFolderForwardPaging>) => apiResponse.data));
    }

    /**
     * Get the list of landing pages. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Landing Pages
     * @param createdAt Only return Landing Pages created at exactly the specified time.
     * @param createdAfter Only return Landing Pages created after the specified time.
     * @param createdBefore Only return Landing Pages created before the specified time.
     * @param updatedAt Only return Landing Pages last updated at exactly the specified time.
     * @param updatedAfter Only return Landing Pages last updated after the specified time.
     * @param updatedBefore Only return Landing Pages last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 100.
     * @param archived Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getPageWithHttpInfo(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, property?: string, _options?: Configuration): Observable<HttpInfo<CollectionResponseWithTotalPageForwardPaging>> {
        const requestContextPromise = this.requestFactory.getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the list of landing pages. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Landing Pages
     * @param createdAt Only return Landing Pages created at exactly the specified time.
     * @param createdAfter Only return Landing Pages created after the specified time.
     * @param createdBefore Only return Landing Pages created before the specified time.
     * @param updatedAt Only return Landing Pages last updated at exactly the specified time.
     * @param updatedAfter Only return Landing Pages last updated after the specified time.
     * @param updatedBefore Only return Landing Pages last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 100.
     * @param archived Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, property?: string, _options?: Configuration): Observable<CollectionResponseWithTotalPageForwardPaging> {
        return this.getPageWithHttpInfo(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalPageForwardPaging>) => apiResponse.data));
    }

    /**
     * Retrieves a previous version of a Landing Page
     * Retrieves a previous version of a Landing Page
     * @param objectId The Landing Page id.
     * @param revisionId The Landing Page version id.
     */
    public getPreviousVersionWithHttpInfo(objectId: string, revisionId: string, _options?: Configuration): Observable<HttpInfo<VersionPage>> {
        const requestContextPromise = this.requestFactory.getPreviousVersion(objectId, revisionId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPreviousVersionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a previous version of a Landing Page
     * Retrieves a previous version of a Landing Page
     * @param objectId The Landing Page id.
     * @param revisionId The Landing Page version id.
     */
    public getPreviousVersion(objectId: string, revisionId: string, _options?: Configuration): Observable<VersionPage> {
        return this.getPreviousVersionWithHttpInfo(objectId, revisionId, _options).pipe(map((apiResponse: HttpInfo<VersionPage>) => apiResponse.data));
    }

    /**
     * Retrieves all the previous versions of a Landing Page.
     * Retrieves all the previous versions of a Landing Page
     * @param objectId The Landing Page id.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to return. Default is 100.
     */
    public getPreviousVersionsWithHttpInfo(objectId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<CollectionResponseWithTotalVersionPage>> {
        const requestContextPromise = this.requestFactory.getPreviousVersions(objectId, after, before, limit, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPreviousVersionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all the previous versions of a Landing Page.
     * Retrieves all the previous versions of a Landing Page
     * @param objectId The Landing Page id.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to return. Default is 100.
     */
    public getPreviousVersions(objectId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Observable<CollectionResponseWithTotalVersionPage> {
        return this.getPreviousVersionsWithHttpInfo(objectId, after, before, limit, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalVersionPage>) => apiResponse.data));
    }

    /**
     * Take any changes from the draft version of the Landing Page and apply them to the live version.
     * Push Landing Page draft edits live
     * @param objectId The id of the Landing Page for which it\&#39;s draft will be pushed live.
     */
    public pushLiveWithHttpInfo(objectId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.pushLive(objectId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pushLiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Take any changes from the draft version of the Landing Page and apply them to the live version.
     * Push Landing Page draft edits live
     * @param objectId The id of the Landing Page for which it\&#39;s draft will be pushed live.
     */
    public pushLive(objectId: string, _options?: Configuration): Observable<void> {
        return this.pushLiveWithHttpInfo(objectId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve the Landing Page objects identified in the request body.
     * Retrieve a batch of Landing Pages
     * @param batchInputString The JSON array of Landing Page ids.
     * @param archived Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     */
    public readBatchWithHttpInfo(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Observable<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        const requestContextPromise = this.requestFactory.readBatch(batchInputString, archived, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the Landing Page objects identified in the request body.
     * Retrieve a batch of Landing Pages
     * @param batchInputString The JSON array of Landing Page ids.
     * @param archived Specifies whether to return deleted Landing Pages. Defaults to &#x60;false&#x60;.
     */
    public readBatch(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Observable<BatchResponsePage | BatchResponsePageWithErrors> {
        return this.readBatchWithHttpInfo(batchInputString, archived, _options).pipe(map((apiResponse: HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>) => apiResponse.data));
    }

    /**
     * Update the Folder objects identified in the request body.
     * Retrieve a batch of Folders
     * @param batchInputString The JSON array of Folder ids.
     * @param archived Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     */
    public readFoldersWithHttpInfo(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Observable<HttpInfo<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>> {
        const requestContextPromise = this.requestFactory.readFolders(batchInputString, archived, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readFoldersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the Folder objects identified in the request body.
     * Retrieve a batch of Folders
     * @param batchInputString The JSON array of Folder ids.
     * @param archived Specifies whether to return deleted Folders. Defaults to &#x60;false&#x60;.
     */
    public readFolders(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Observable<BatchResponseContentFolder | BatchResponseContentFolderWithErrors> {
        return this.readFoldersWithHttpInfo(batchInputString, archived, _options).pipe(map((apiResponse: HttpInfo<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>) => apiResponse.data));
    }

    /**
     * Rerun a previous A/B test.
     * Rerun a previous A/B test
     * @param abTestRerunRequestVNext The JSON representation of the AbTestRerunRequest object.
     */
    public rerunPreviousABTestWithHttpInfo(abTestRerunRequestVNext: AbTestRerunRequestVNext, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.rerunPreviousABTest(abTestRerunRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.rerunPreviousABTestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Rerun a previous A/B test.
     * Rerun a previous A/B test
     * @param abTestRerunRequestVNext The JSON representation of the AbTestRerunRequest object.
     */
    public rerunPreviousABTest(abTestRerunRequestVNext: AbTestRerunRequestVNext, _options?: Configuration): Observable<void> {
        return this.rerunPreviousABTestWithHttpInfo(abTestRerunRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Discards any edits and resets the draft to the live version.
     * Reset the Landing Page draft to the live version
     * @param objectId The id of the Landing Page for which it\&#39;s draft will be reset.
     */
    public resetDraftWithHttpInfo(objectId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.resetDraft(objectId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resetDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Discards any edits and resets the draft to the live version.
     * Reset the Landing Page draft to the live version
     * @param objectId The id of the Landing Page for which it\&#39;s draft will be reset.
     */
    public resetDraft(objectId: string, _options?: Configuration): Observable<void> {
        return this.resetDraftWithHttpInfo(objectId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Takes a specified version of a Folder and restores it.
     * Restore a previous version of a Folder
     * @param objectId The Folder id.
     * @param revisionId The Folder version id to restore.
     */
    public restoreFolderPreviousVersionWithHttpInfo(objectId: string, revisionId: string, _options?: Configuration): Observable<HttpInfo<ContentFolder>> {
        const requestContextPromise = this.requestFactory.restoreFolderPreviousVersion(objectId, revisionId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restoreFolderPreviousVersionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Takes a specified version of a Folder and restores it.
     * Restore a previous version of a Folder
     * @param objectId The Folder id.
     * @param revisionId The Folder version id to restore.
     */
    public restoreFolderPreviousVersion(objectId: string, revisionId: string, _options?: Configuration): Observable<ContentFolder> {
        return this.restoreFolderPreviousVersionWithHttpInfo(objectId, revisionId, _options).pipe(map((apiResponse: HttpInfo<ContentFolder>) => apiResponse.data));
    }

    /**
     * Takes a specified version of a Landing Page and restores it.
     * Restore a previous version of a Landing Page
     * @param objectId The Landing Page id.
     * @param revisionId The Landing Page version id to restore.
     */
    public restorePreviousVersionWithHttpInfo(objectId: string, revisionId: string, _options?: Configuration): Observable<HttpInfo<Page>> {
        const requestContextPromise = this.requestFactory.restorePreviousVersion(objectId, revisionId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restorePreviousVersionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Takes a specified version of a Landing Page and restores it.
     * Restore a previous version of a Landing Page
     * @param objectId The Landing Page id.
     * @param revisionId The Landing Page version id to restore.
     */
    public restorePreviousVersion(objectId: string, revisionId: string, _options?: Configuration): Observable<Page> {
        return this.restorePreviousVersionWithHttpInfo(objectId, revisionId, _options).pipe(map((apiResponse: HttpInfo<Page>) => apiResponse.data));
    }

    /**
     * Takes a specified version of a Landing Page, sets it as the new draft version of the Landing Page.
     * Restore a previous version of a Landing Page, to the draft version of the Landing Page
     * @param objectId The Landing Page id.
     * @param revisionId The Landing Page version id to restore.
     */
    public restorePreviousVersionToDraftWithHttpInfo(objectId: string, revisionId: number, _options?: Configuration): Observable<HttpInfo<Page>> {
        const requestContextPromise = this.requestFactory.restorePreviousVersionToDraft(objectId, revisionId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restorePreviousVersionToDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Takes a specified version of a Landing Page, sets it as the new draft version of the Landing Page.
     * Restore a previous version of a Landing Page, to the draft version of the Landing Page
     * @param objectId The Landing Page id.
     * @param revisionId The Landing Page version id to restore.
     */
    public restorePreviousVersionToDraft(objectId: string, revisionId: number, _options?: Configuration): Observable<Page> {
        return this.restorePreviousVersionToDraftWithHttpInfo(objectId, revisionId, _options).pipe(map((apiResponse: HttpInfo<Page>) => apiResponse.data));
    }

    /**
     * Schedule a Landing Page to be Published
     * Schedule a Landing Page to be Published
     * @param contentScheduleRequestVNext The JSON representation of the ContentScheduleRequestVNext object.
     */
    public scheduleWithHttpInfo(contentScheduleRequestVNext: ContentScheduleRequestVNext, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.schedule(contentScheduleRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.scheduleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Schedule a Landing Page to be Published
     * Schedule a Landing Page to be Published
     * @param contentScheduleRequestVNext The JSON representation of the ContentScheduleRequestVNext object.
     */
    public schedule(contentScheduleRequestVNext: ContentScheduleRequestVNext, _options?: Configuration): Observable<void> {
        return this.scheduleWithHttpInfo(contentScheduleRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Set a landing page as the primary language of a multi-language group.
     * Set a new primary language
     * @param setNewLanguagePrimaryRequestVNext The JSON representation of the SetNewLanguagePrimaryRequest object.
     */
    public setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.setLangPrimary(setNewLanguagePrimaryRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setLangPrimaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set a landing page as the primary language of a multi-language group.
     * Set a new primary language
     * @param setNewLanguagePrimaryRequestVNext The JSON representation of the SetNewLanguagePrimaryRequest object.
     */
    public setLangPrimary(setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext, _options?: Configuration): Observable<void> {
        return this.setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Sparse updates a single Landing Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Landing Page
     * @param objectId The Landing Page id.
     * @param page The JSON representation of the updated Landing Page.
     * @param archived Specifies whether to update deleted Landing Pages. Defaults to &#x60;false&#x60;.
     */
    public updateWithHttpInfo(objectId: string, page: Page, archived?: boolean, _options?: Configuration): Observable<HttpInfo<Page>> {
        const requestContextPromise = this.requestFactory.update(objectId, page, archived, _options);

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
     * Sparse updates a single Landing Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Landing Page
     * @param objectId The Landing Page id.
     * @param page The JSON representation of the updated Landing Page.
     * @param archived Specifies whether to update deleted Landing Pages. Defaults to &#x60;false&#x60;.
     */
    public update(objectId: string, page: Page, archived?: boolean, _options?: Configuration): Observable<Page> {
        return this.updateWithHttpInfo(objectId, page, archived, _options).pipe(map((apiResponse: HttpInfo<Page>) => apiResponse.data));
    }

    /**
     * Update the Landing Page objects identified in the request body.
     * Update a batch of Landing Pages
     * @param batchInputJsonNode The JSON representation of the updated Landing Pages.
     * @param archived Specifies whether to update deleted Landing Pages. Defaults to &#x60;false&#x60;.
     */
    public updateBatchWithHttpInfo(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Observable<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        const requestContextPromise = this.requestFactory.updateBatch(batchInputJsonNode, archived, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the Landing Page objects identified in the request body.
     * Update a batch of Landing Pages
     * @param batchInputJsonNode The JSON representation of the updated Landing Pages.
     * @param archived Specifies whether to update deleted Landing Pages. Defaults to &#x60;false&#x60;.
     */
    public updateBatch(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Observable<BatchResponsePage | BatchResponsePageWithErrors> {
        return this.updateBatchWithHttpInfo(batchInputJsonNode, archived, _options).pipe(map((apiResponse: HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>) => apiResponse.data));
    }

    /**
     * Sparse updates the draft version of a single Landing Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Landing Page draft
     * @param objectId The Landing Page id.
     * @param page The JSON representation of the updated Landing Page to be applied to the draft.
     */
    public updateDraftWithHttpInfo(objectId: string, page: Page, _options?: Configuration): Observable<HttpInfo<Page>> {
        const requestContextPromise = this.requestFactory.updateDraft(objectId, page, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sparse updates the draft version of a single Landing Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Landing Page draft
     * @param objectId The Landing Page id.
     * @param page The JSON representation of the updated Landing Page to be applied to the draft.
     */
    public updateDraft(objectId: string, page: Page, _options?: Configuration): Observable<Page> {
        return this.updateDraftWithHttpInfo(objectId, page, _options).pipe(map((apiResponse: HttpInfo<Page>) => apiResponse.data));
    }

    /**
     * Sparse updates a single Folder object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Folder
     * @param objectId The Folder id.
     * @param contentFolder The JSON representation of the updated Folder.
     * @param archived Specifies whether to update deleted Folders. Defaults to &#x60;false&#x60;.
     */
    public updateFolderWithHttpInfo(objectId: string, contentFolder: ContentFolder, archived?: boolean, _options?: Configuration): Observable<HttpInfo<ContentFolder>> {
        const requestContextPromise = this.requestFactory.updateFolder(objectId, contentFolder, archived, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateFolderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sparse updates a single Folder object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Folder
     * @param objectId The Folder id.
     * @param contentFolder The JSON representation of the updated Folder.
     * @param archived Specifies whether to update deleted Folders. Defaults to &#x60;false&#x60;.
     */
    public updateFolder(objectId: string, contentFolder: ContentFolder, archived?: boolean, _options?: Configuration): Observable<ContentFolder> {
        return this.updateFolderWithHttpInfo(objectId, contentFolder, archived, _options).pipe(map((apiResponse: HttpInfo<ContentFolder>) => apiResponse.data));
    }

    /**
     * Update the Folder objects identified in the request body.
     * Update a batch of Folders
     * @param batchInputJsonNode 
     * @param archived Whether to return only results that have been archived.
     */
    public updateFoldersWithHttpInfo(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Observable<HttpInfo<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>> {
        const requestContextPromise = this.requestFactory.updateFolders(batchInputJsonNode, archived, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateFoldersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the Folder objects identified in the request body.
     * Update a batch of Folders
     * @param batchInputJsonNode 
     * @param archived Whether to return only results that have been archived.
     */
    public updateFolders(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Observable<BatchResponseContentFolder | BatchResponseContentFolderWithErrors> {
        return this.updateFoldersWithHttpInfo(batchInputJsonNode, archived, _options).pipe(map((apiResponse: HttpInfo<BatchResponseContentFolder | BatchResponseContentFolderWithErrors>) => apiResponse.data));
    }

    /**
     * Explicitly set new languages for each landing page in a multi-language group.
     * Update languages of multi-language group
     * @param updateLanguagesRequestVNext The JSON representation of the UpdateLanguagesRequest object.
     */
    public updateLangsWithHttpInfo(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateLangs(updateLanguagesRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateLangsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Explicitly set new languages for each landing page in a multi-language group.
     * Update languages of multi-language group
     * @param updateLanguagesRequestVNext The JSON representation of the UpdateLanguagesRequest object.
     */
    public updateLangs(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: Configuration): Observable<void> {
        return this.updateLangsWithHttpInfo(updateLanguagesRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { SitePagesApiRequestFactory, SitePagesApiResponseProcessor} from "../apis/SitePagesApi";
export class ObservableSitePagesApi {
    private requestFactory: SitePagesApiRequestFactory;
    private responseProcessor: SitePagesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SitePagesApiRequestFactory,
        responseProcessor?: SitePagesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SitePagesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SitePagesApiResponseProcessor();
    }

    /**
     * Delete the Site Page object identified by the id in the path.
     * Delete a Site Page
     * @param objectId The Site Page id.
     * @param archived Whether to return only results that have been archived.
     */
    public archiveWithHttpInfo(objectId: string, archived?: boolean, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archive(objectId, archived, _options);

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
     * Delete the Site Page object identified by the id in the path.
     * Delete a Site Page
     * @param objectId The Site Page id.
     * @param archived Whether to return only results that have been archived.
     */
    public archive(objectId: string, archived?: boolean, _options?: Configuration): Observable<void> {
        return this.archiveWithHttpInfo(objectId, archived, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete the Site Page objects identified in the request body. Note: This is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to true.
     * Delete a batch of Site Pages
     * @param batchInputString The JSON array of Site Page ids.
     */
    public archiveBatchWithHttpInfo(batchInputString: BatchInputString, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.archiveBatch(batchInputString, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.archiveBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete the Site Page objects identified in the request body. Note: This is not the same as the dashboard `archive` function. To perform a dashboard `archive` send an normal update with the `archivedInDashboard` field set to true.
     * Delete a batch of Site Pages
     * @param batchInputString The JSON array of Site Page ids.
     */
    public archiveBatch(batchInputString: BatchInputString, _options?: Configuration): Observable<void> {
        return this.archiveBatchWithHttpInfo(batchInputString, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Attach a site page to a multi-language group.
     * Attach a site page to a multi-language group
     * @param attachToLangPrimaryRequestVNext The JSON representation of the AttachToLangPrimaryRequest object.
     */
    public attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.attachToLangGroup(attachToLangPrimaryRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.attachToLangGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Attach a site page to a multi-language group.
     * Attach a site page to a multi-language group
     * @param attachToLangPrimaryRequestVNext The JSON representation of the AttachToLangPrimaryRequest object.
     */
    public attachToLangGroup(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: Configuration): Observable<void> {
        return this.attachToLangGroupWithHttpInfo(attachToLangPrimaryRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Clone a Site Page
     * Clone a Site Page
     * @param contentCloneRequestVNext The JSON representation of the ContentCloneRequest object.
     */
    public cloneWithHttpInfo(contentCloneRequestVNext: ContentCloneRequestVNext, _options?: Configuration): Observable<HttpInfo<Page>> {
        const requestContextPromise = this.requestFactory.clone(contentCloneRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.cloneWithHttpInfo(rsp)));
            }));
    }

    /**
     * Clone a Site Page
     * Clone a Site Page
     * @param contentCloneRequestVNext The JSON representation of the ContentCloneRequest object.
     */
    public clone(contentCloneRequestVNext: ContentCloneRequestVNext, _options?: Configuration): Observable<Page> {
        return this.cloneWithHttpInfo(contentCloneRequestVNext, _options).pipe(map((apiResponse: HttpInfo<Page>) => apiResponse.data));
    }

    /**
     * Create a new Site Page
     * Create a new Site Page
     * @param page The JSON representation of a new Site Page.
     */
    public createWithHttpInfo(page: Page, _options?: Configuration): Observable<HttpInfo<void | Page>> {
        const requestContextPromise = this.requestFactory.create(page, _options);

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
     * Create a new Site Page
     * Create a new Site Page
     * @param page The JSON representation of a new Site Page.
     */
    public create(page: Page, _options?: Configuration): Observable<void | Page> {
        return this.createWithHttpInfo(page, _options).pipe(map((apiResponse: HttpInfo<void | Page>) => apiResponse.data));
    }

    /**
     * Create a new A/B test variation based on the information provided in the request body. 
     * Create a new A/B test variation
     * @param abTestCreateRequestVNext The JSON representation of the AbTestCreateRequest object.
     */
    public createABTestVariationWithHttpInfo(abTestCreateRequestVNext: AbTestCreateRequestVNext, _options?: Configuration): Observable<HttpInfo<Page>> {
        const requestContextPromise = this.requestFactory.createABTestVariation(abTestCreateRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createABTestVariationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new A/B test variation based on the information provided in the request body. 
     * Create a new A/B test variation
     * @param abTestCreateRequestVNext The JSON representation of the AbTestCreateRequest object.
     */
    public createABTestVariation(abTestCreateRequestVNext: AbTestCreateRequestVNext, _options?: Configuration): Observable<Page> {
        return this.createABTestVariationWithHttpInfo(abTestCreateRequestVNext, _options).pipe(map((apiResponse: HttpInfo<Page>) => apiResponse.data));
    }

    /**
     * Create the Site Page objects detailed in the request body.
     * Create a batch of Site Pages
     * @param batchInputPage The JSON array of new Site Pages to create.
     */
    public createBatchWithHttpInfo(batchInputPage: BatchInputPage, _options?: Configuration): Observable<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        const requestContextPromise = this.requestFactory.createBatch(batchInputPage, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create the Site Page objects detailed in the request body.
     * Create a batch of Site Pages
     * @param batchInputPage The JSON array of new Site Pages to create.
     */
    public createBatch(batchInputPage: BatchInputPage, _options?: Configuration): Observable<BatchResponsePage | BatchResponsePageWithErrors> {
        return this.createBatchWithHttpInfo(batchInputPage, _options).pipe(map((apiResponse: HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>) => apiResponse.data));
    }

    /**
     * Create a new language variation from an existing site page
     * Create a new language variation
     * @param contentLanguageCloneRequestVNext The JSON representation of the ContentLanguageCloneRequest object.
     */
    public createLangVariationWithHttpInfo(contentLanguageCloneRequestVNext: ContentLanguageCloneRequestVNext, _options?: Configuration): Observable<HttpInfo<Page>> {
        const requestContextPromise = this.requestFactory.createLangVariation(contentLanguageCloneRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createLangVariationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create a new language variation from an existing site page
     * Create a new language variation
     * @param contentLanguageCloneRequestVNext The JSON representation of the ContentLanguageCloneRequest object.
     */
    public createLangVariation(contentLanguageCloneRequestVNext: ContentLanguageCloneRequestVNext, _options?: Configuration): Observable<Page> {
        return this.createLangVariationWithHttpInfo(contentLanguageCloneRequestVNext, _options).pipe(map((apiResponse: HttpInfo<Page>) => apiResponse.data));
    }

    /**
     * Detach a site page from a multi-language group.
     * Detach a site page from a multi-language group
     * @param detachFromLangGroupRequestVNext The JSON representation of the DetachFromLangGroupRequest object.
     */
    public detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.detachFromLangGroup(detachFromLangGroupRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.detachFromLangGroupWithHttpInfo(rsp)));
            }));
    }

    /**
     * Detach a site page from a multi-language group.
     * Detach a site page from a multi-language group
     * @param detachFromLangGroupRequestVNext The JSON representation of the DetachFromLangGroupRequest object.
     */
    public detachFromLangGroup(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: Configuration): Observable<void> {
        return this.detachFromLangGroupWithHttpInfo(detachFromLangGroupRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * End an active A/B test and designate a winner.
     * End an active A/B test
     * @param abTestEndRequestVNext The JSON representation of the AbTestEndRequest object.
     */
    public endActiveABTestWithHttpInfo(abTestEndRequestVNext: AbTestEndRequestVNext, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.endActiveABTest(abTestEndRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.endActiveABTestWithHttpInfo(rsp)));
            }));
    }

    /**
     * End an active A/B test and designate a winner.
     * End an active A/B test
     * @param abTestEndRequestVNext The JSON representation of the AbTestEndRequest object.
     */
    public endActiveABTest(abTestEndRequestVNext: AbTestEndRequestVNext, _options?: Configuration): Observable<void> {
        return this.endActiveABTestWithHttpInfo(abTestEndRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve the Site Page object identified by the id in the path.
     * Retrieve a Site Page
     * @param objectId The Site Page id.
     * @param archived Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getByIdWithHttpInfo(objectId: string, archived?: boolean, property?: string, _options?: Configuration): Observable<HttpInfo<Page>> {
        const requestContextPromise = this.requestFactory.getById(objectId, archived, property, _options);

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
     * Retrieve the Site Page object identified by the id in the path.
     * Retrieve a Site Page
     * @param objectId The Site Page id.
     * @param archived Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getById(objectId: string, archived?: boolean, property?: string, _options?: Configuration): Observable<Page> {
        return this.getByIdWithHttpInfo(objectId, archived, property, _options).pipe(map((apiResponse: HttpInfo<Page>) => apiResponse.data));
    }

    /**
     * Retrieve the full draft version of the Site Page.
     * Retrieve the full draft version of the Site Page
     * @param objectId The Site Page id.
     */
    public getDraftByIdWithHttpInfo(objectId: string, _options?: Configuration): Observable<HttpInfo<Page>> {
        const requestContextPromise = this.requestFactory.getDraftById(objectId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDraftByIdWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the full draft version of the Site Page.
     * Retrieve the full draft version of the Site Page
     * @param objectId The Site Page id.
     */
    public getDraftById(objectId: string, _options?: Configuration): Observable<Page> {
        return this.getDraftByIdWithHttpInfo(objectId, _options).pipe(map((apiResponse: HttpInfo<Page>) => apiResponse.data));
    }

    /**
     * Get the list of site pages. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Site Pages
     * @param createdAt Only return Site Pages created at exactly the specified time.
     * @param createdAfter Only return Site Pages created after the specified time.
     * @param createdBefore Only return Site Pages created before the specified time.
     * @param updatedAt Only return Site Pages last updated at exactly the specified time.
     * @param updatedAfter Only return Site Pages last updated after the specified time.
     * @param updatedBefore Only return Site Pages last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 100.
     * @param archived Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getPageWithHttpInfo(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, property?: string, _options?: Configuration): Observable<HttpInfo<CollectionResponseWithTotalPageForwardPaging>> {
        const requestContextPromise = this.requestFactory.getPage(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPageWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get the list of site pages. Supports paging and filtering. This method would be useful for an integration that examined these models and used an external service to suggest edits. 
     * Get all Site Pages
     * @param createdAt Only return Site Pages created at exactly the specified time.
     * @param createdAfter Only return Site Pages created after the specified time.
     * @param createdBefore Only return Site Pages created before the specified time.
     * @param updatedAt Only return Site Pages last updated at exactly the specified time.
     * @param updatedAfter Only return Site Pages last updated after the specified time.
     * @param updatedBefore Only return Site Pages last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to return. Default is 100.
     * @param archived Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     * @param property 
     */
    public getPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, property?: string, _options?: Configuration): Observable<CollectionResponseWithTotalPageForwardPaging> {
        return this.getPageWithHttpInfo(createdAt, createdAfter, createdBefore, updatedAt, updatedAfter, updatedBefore, sort, after, limit, archived, property, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalPageForwardPaging>) => apiResponse.data));
    }

    /**
     * Retrieves a previous version of a Site Page
     * Retrieves a previous version of a Site Page
     * @param objectId The Site Page id.
     * @param revisionId The Site Page version id.
     */
    public getPreviousVersionWithHttpInfo(objectId: string, revisionId: string, _options?: Configuration): Observable<HttpInfo<VersionPage>> {
        const requestContextPromise = this.requestFactory.getPreviousVersion(objectId, revisionId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPreviousVersionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves a previous version of a Site Page
     * Retrieves a previous version of a Site Page
     * @param objectId The Site Page id.
     * @param revisionId The Site Page version id.
     */
    public getPreviousVersion(objectId: string, revisionId: string, _options?: Configuration): Observable<VersionPage> {
        return this.getPreviousVersionWithHttpInfo(objectId, revisionId, _options).pipe(map((apiResponse: HttpInfo<VersionPage>) => apiResponse.data));
    }

    /**
     * Retrieves all the previous versions of a Site Page.
     * Retrieves all the previous versions of a Site Page
     * @param objectId The Site Page id.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to return. Default is 100.
     */
    public getPreviousVersionsWithHttpInfo(objectId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Observable<HttpInfo<CollectionResponseWithTotalVersionPage>> {
        const requestContextPromise = this.requestFactory.getPreviousVersions(objectId, after, before, limit, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPreviousVersionsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all the previous versions of a Site Page.
     * Retrieves all the previous versions of a Site Page
     * @param objectId The Site Page id.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param before 
     * @param limit The maximum number of results to return. Default is 100.
     */
    public getPreviousVersions(objectId: string, after?: string, before?: string, limit?: number, _options?: Configuration): Observable<CollectionResponseWithTotalVersionPage> {
        return this.getPreviousVersionsWithHttpInfo(objectId, after, before, limit, _options).pipe(map((apiResponse: HttpInfo<CollectionResponseWithTotalVersionPage>) => apiResponse.data));
    }

    /**
     * Take any changes from the draft version of the Site Page and apply them to the live version.
     * Push Site Page draft edits live
     * @param objectId The id of the Site Page for which it\&#39;s draft will be pushed live.
     */
    public pushLiveWithHttpInfo(objectId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.pushLive(objectId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.pushLiveWithHttpInfo(rsp)));
            }));
    }

    /**
     * Take any changes from the draft version of the Site Page and apply them to the live version.
     * Push Site Page draft edits live
     * @param objectId The id of the Site Page for which it\&#39;s draft will be pushed live.
     */
    public pushLive(objectId: string, _options?: Configuration): Observable<void> {
        return this.pushLiveWithHttpInfo(objectId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieve the Site Page objects identified in the request body.
     * Retrieve a batch of Site Pages
     * @param batchInputString The JSON array of Site Page ids.
     * @param archived Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     */
    public readBatchWithHttpInfo(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Observable<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        const requestContextPromise = this.requestFactory.readBatch(batchInputString, archived, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.readBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieve the Site Page objects identified in the request body.
     * Retrieve a batch of Site Pages
     * @param batchInputString The JSON array of Site Page ids.
     * @param archived Specifies whether to return deleted Site Pages. Defaults to &#x60;false&#x60;.
     */
    public readBatch(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Observable<BatchResponsePage | BatchResponsePageWithErrors> {
        return this.readBatchWithHttpInfo(batchInputString, archived, _options).pipe(map((apiResponse: HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>) => apiResponse.data));
    }

    /**
     * Rerun a previous A/B test.
     * Rerun a previous A/B test
     * @param abTestRerunRequestVNext The JSON representation of the AbTestRerunRequest object.
     */
    public rerunPreviousABTestWithHttpInfo(abTestRerunRequestVNext: AbTestRerunRequestVNext, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.rerunPreviousABTest(abTestRerunRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.rerunPreviousABTestWithHttpInfo(rsp)));
            }));
    }

    /**
     * Rerun a previous A/B test.
     * Rerun a previous A/B test
     * @param abTestRerunRequestVNext The JSON representation of the AbTestRerunRequest object.
     */
    public rerunPreviousABTest(abTestRerunRequestVNext: AbTestRerunRequestVNext, _options?: Configuration): Observable<void> {
        return this.rerunPreviousABTestWithHttpInfo(abTestRerunRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Discards any edits and resets the draft to the live version.
     * Reset the Site Page draft to the live version
     * @param objectId The id of the Site Page for which it\&#39;s draft will be reset.
     */
    public resetDraftWithHttpInfo(objectId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.resetDraft(objectId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resetDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Discards any edits and resets the draft to the live version.
     * Reset the Site Page draft to the live version
     * @param objectId The id of the Site Page for which it\&#39;s draft will be reset.
     */
    public resetDraft(objectId: string, _options?: Configuration): Observable<void> {
        return this.resetDraftWithHttpInfo(objectId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Takes a specified version of a Site Page and restores it.
     * Restore a previous version of a Site Page
     * @param objectId The Site Page id.
     * @param revisionId The Site Page version id to restore.
     */
    public restorePreviousVersionWithHttpInfo(objectId: string, revisionId: string, _options?: Configuration): Observable<HttpInfo<Page>> {
        const requestContextPromise = this.requestFactory.restorePreviousVersion(objectId, revisionId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restorePreviousVersionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Takes a specified version of a Site Page and restores it.
     * Restore a previous version of a Site Page
     * @param objectId The Site Page id.
     * @param revisionId The Site Page version id to restore.
     */
    public restorePreviousVersion(objectId: string, revisionId: string, _options?: Configuration): Observable<Page> {
        return this.restorePreviousVersionWithHttpInfo(objectId, revisionId, _options).pipe(map((apiResponse: HttpInfo<Page>) => apiResponse.data));
    }

    /**
     * Takes a specified version of a Site Page, sets it as the new draft version of the Site Page.
     * Restore a previous version of a Site Page, to the draft version of the Site Page
     * @param objectId The Site Page id.
     * @param revisionId The Site Page version id to restore.
     */
    public restorePreviousVersionToDraftWithHttpInfo(objectId: string, revisionId: number, _options?: Configuration): Observable<HttpInfo<Page>> {
        const requestContextPromise = this.requestFactory.restorePreviousVersionToDraft(objectId, revisionId, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restorePreviousVersionToDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Takes a specified version of a Site Page, sets it as the new draft version of the Site Page.
     * Restore a previous version of a Site Page, to the draft version of the Site Page
     * @param objectId The Site Page id.
     * @param revisionId The Site Page version id to restore.
     */
    public restorePreviousVersionToDraft(objectId: string, revisionId: number, _options?: Configuration): Observable<Page> {
        return this.restorePreviousVersionToDraftWithHttpInfo(objectId, revisionId, _options).pipe(map((apiResponse: HttpInfo<Page>) => apiResponse.data));
    }

    /**
     * Schedule a Site Page to be Published
     * Schedule a Site Page to be Published
     * @param contentScheduleRequestVNext The JSON representation of the ContentScheduleRequestVNext object.
     */
    public scheduleWithHttpInfo(contentScheduleRequestVNext: ContentScheduleRequestVNext, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.schedule(contentScheduleRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.scheduleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Schedule a Site Page to be Published
     * Schedule a Site Page to be Published
     * @param contentScheduleRequestVNext The JSON representation of the ContentScheduleRequestVNext object.
     */
    public schedule(contentScheduleRequestVNext: ContentScheduleRequestVNext, _options?: Configuration): Observable<void> {
        return this.scheduleWithHttpInfo(contentScheduleRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Set a site page as the primary language of a multi-language group.
     * Set a new primary language
     * @param setNewLanguagePrimaryRequestVNext The JSON representation of the SetNewLanguagePrimaryRequest object.
     */
    public setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.setLangPrimary(setNewLanguagePrimaryRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setLangPrimaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Set a site page as the primary language of a multi-language group.
     * Set a new primary language
     * @param setNewLanguagePrimaryRequestVNext The JSON representation of the SetNewLanguagePrimaryRequest object.
     */
    public setLangPrimary(setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext, _options?: Configuration): Observable<void> {
        return this.setLangPrimaryWithHttpInfo(setNewLanguagePrimaryRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Sparse updates a single Site Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Site Page
     * @param objectId The Site Page id.
     * @param page The JSON representation of the updated Site Page.
     * @param archived Specifies whether to update deleted Site Pages. Defaults to &#x60;false&#x60;.
     */
    public updateWithHttpInfo(objectId: string, page: Page, archived?: boolean, _options?: Configuration): Observable<HttpInfo<Page>> {
        const requestContextPromise = this.requestFactory.update(objectId, page, archived, _options);

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
     * Sparse updates a single Site Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Site Page
     * @param objectId The Site Page id.
     * @param page The JSON representation of the updated Site Page.
     * @param archived Specifies whether to update deleted Site Pages. Defaults to &#x60;false&#x60;.
     */
    public update(objectId: string, page: Page, archived?: boolean, _options?: Configuration): Observable<Page> {
        return this.updateWithHttpInfo(objectId, page, archived, _options).pipe(map((apiResponse: HttpInfo<Page>) => apiResponse.data));
    }

    /**
     * Update the Site Page objects identified in the request body.
     * Update a batch of Site Pages
     * @param batchInputJsonNode The JSON representation of the updated Site Pages.
     * @param archived Specifies whether to update deleted Site Pages. Defaults to &#x60;false&#x60;.
     */
    public updateBatchWithHttpInfo(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Observable<HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>> {
        const requestContextPromise = this.requestFactory.updateBatch(batchInputJsonNode, archived, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateBatchWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update the Site Page objects identified in the request body.
     * Update a batch of Site Pages
     * @param batchInputJsonNode The JSON representation of the updated Site Pages.
     * @param archived Specifies whether to update deleted Site Pages. Defaults to &#x60;false&#x60;.
     */
    public updateBatch(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Observable<BatchResponsePage | BatchResponsePageWithErrors> {
        return this.updateBatchWithHttpInfo(batchInputJsonNode, archived, _options).pipe(map((apiResponse: HttpInfo<BatchResponsePage | BatchResponsePageWithErrors>) => apiResponse.data));
    }

    /**
     * Sparse updates the draft version of a single Site Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Site Page draft
     * @param objectId The Site Page id.
     * @param page The JSON representation of the updated Site Page to be applied to the draft.
     */
    public updateDraftWithHttpInfo(objectId: string, page: Page, _options?: Configuration): Observable<HttpInfo<Page>> {
        const requestContextPromise = this.requestFactory.updateDraft(objectId, page, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sparse updates the draft version of a single Site Page object identified by the id in the path. You only need to specify the column values that you are modifying. 
     * Update a Site Page draft
     * @param objectId The Site Page id.
     * @param page The JSON representation of the updated Site Page to be applied to the draft.
     */
    public updateDraft(objectId: string, page: Page, _options?: Configuration): Observable<Page> {
        return this.updateDraftWithHttpInfo(objectId, page, _options).pipe(map((apiResponse: HttpInfo<Page>) => apiResponse.data));
    }

    /**
     * Explicitly set new languages for each site page in a multi-language group.
     * Update languages of multi-language group
     * @param updateLanguagesRequestVNext The JSON representation of the UpdateLanguagesRequest object.
     */
    public updateLangsWithHttpInfo(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateLangs(updateLanguagesRequestVNext, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateLangsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Explicitly set new languages for each site page in a multi-language group.
     * Update languages of multi-language group
     * @param updateLanguagesRequestVNext The JSON representation of the UpdateLanguagesRequest object.
     */
    public updateLangs(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: Configuration): Observable<void> {
        return this.updateLangsWithHttpInfo(updateLanguagesRequestVNext, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
