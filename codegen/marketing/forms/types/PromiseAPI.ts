import { HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions, PromiseConfigurationOptions } from '../configuration'
import { PromiseMiddlewareWrapper } from '../middleware';

import { CollectionResponseFormDefinitionBaseForwardPaging } from '../models/CollectionResponseFormDefinitionBaseForwardPaging';
import { FormDefinitionBase } from '../models/FormDefinitionBase';
import { FormDefinitionCreateRequestBase } from '../models/FormDefinitionCreateRequestBase';
import { HubSpotFormDefinition } from '../models/HubSpotFormDefinition';
import { HubSpotFormDefinitionPatchRequest } from '../models/HubSpotFormDefinitionPatchRequest';
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
     * Archive a form definition. New submissions will not be accepted and the form definition will be permanently deleted after 3 months.
     * Archive a form definition
     * @param formId 
     */
    public archiveWithHttpInfo(formId: string, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
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
        const result = this.api.archiveWithHttpInfo(formId, observableOptions);
        return result.toPromise();
    }

    /**
     * Archive a form definition. New submissions will not be accepted and the form definition will be permanently deleted after 3 months.
     * Archive a form definition
     * @param formId 
     */
    public archive(formId: string, _options?: PromiseConfigurationOptions): Promise<void> {
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
        const result = this.api.archive(formId, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a form based on the form ID provided.
     * Get a form definition
     * @param formId 
     * @param [archived] Whether to return only results that have been archived.
     */
    public getByIdWithHttpInfo(formId: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FormDefinitionBase>> {
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
        const result = this.api.getByIdWithHttpInfo(formId, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * Returns a form based on the form ID provided.
     * Get a form definition
     * @param formId 
     * @param [archived] Whether to return only results that have been archived.
     */
    public getById(formId: string, archived?: boolean, _options?: PromiseConfigurationOptions): Promise<FormDefinitionBase> {
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
        const result = this.api.getById(formId, archived, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [after]
     * @param [archived]
     * @param [formTypes]
     * @param [limit]
     */
    public marketingV3FormsWithHttpInfo(after?: string, archived?: boolean, formTypes?: Array<'hubspot' | 'captured' | 'flow' | 'blog_comment' | 'all'>, limit?: number, _options?: PromiseConfigurationOptions): Promise<HttpInfo<CollectionResponseFormDefinitionBaseForwardPaging>> {
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
        const result = this.api.marketingV3FormsWithHttpInfo(after, archived, formTypes, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * @param [after]
     * @param [archived]
     * @param [formTypes]
     * @param [limit]
     */
    public marketingV3Forms(after?: string, archived?: boolean, formTypes?: Array<'hubspot' | 'captured' | 'flow' | 'blog_comment' | 'all'>, limit?: number, _options?: PromiseConfigurationOptions): Promise<CollectionResponseFormDefinitionBaseForwardPaging> {
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
        const result = this.api.marketingV3Forms(after, archived, formTypes, limit, observableOptions);
        return result.toPromise();
    }

    /**
     * @param formDefinitionCreateRequestBase
     */
    public marketingV3Forms_1WithHttpInfo(formDefinitionCreateRequestBase: FormDefinitionCreateRequestBase, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FormDefinitionBase>> {
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
        const result = this.api.marketingV3Forms_1WithHttpInfo(formDefinitionCreateRequestBase, observableOptions);
        return result.toPromise();
    }

    /**
     * @param formDefinitionCreateRequestBase
     */
    public marketingV3Forms_1(formDefinitionCreateRequestBase: FormDefinitionCreateRequestBase, _options?: PromiseConfigurationOptions): Promise<FormDefinitionBase> {
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
        const result = this.api.marketingV3Forms_1(formDefinitionCreateRequestBase, observableOptions);
        return result.toPromise();
    }

    /**
     * Update all fields of a hubspot form definition.
     * Update a form definition
     * @param formId 
     * @param hubSpotFormDefinition
     */
    public replaceWithHttpInfo(formId: string, hubSpotFormDefinition: HubSpotFormDefinition, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FormDefinitionBase>> {
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
        const result = this.api.replaceWithHttpInfo(formId, hubSpotFormDefinition, observableOptions);
        return result.toPromise();
    }

    /**
     * Update all fields of a hubspot form definition.
     * Update a form definition
     * @param formId 
     * @param hubSpotFormDefinition
     */
    public replace(formId: string, hubSpotFormDefinition: HubSpotFormDefinition, _options?: PromiseConfigurationOptions): Promise<FormDefinitionBase> {
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
        const result = this.api.replace(formId, hubSpotFormDefinition, observableOptions);
        return result.toPromise();
    }

    /**
     * Update some of the form definition components
     * Partially update a form definition
     * @param formId 
     * @param hubSpotFormDefinitionPatchRequest
     */
    public updateWithHttpInfo(formId: string, hubSpotFormDefinitionPatchRequest: HubSpotFormDefinitionPatchRequest, _options?: PromiseConfigurationOptions): Promise<HttpInfo<FormDefinitionBase>> {
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
        const result = this.api.updateWithHttpInfo(formId, hubSpotFormDefinitionPatchRequest, observableOptions);
        return result.toPromise();
    }

    /**
     * Update some of the form definition components
     * Partially update a form definition
     * @param formId 
     * @param hubSpotFormDefinitionPatchRequest
     */
    public update(formId: string, hubSpotFormDefinitionPatchRequest: HubSpotFormDefinitionPatchRequest, _options?: PromiseConfigurationOptions): Promise<FormDefinitionBase> {
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
        const result = this.api.update(formId, hubSpotFormDefinitionPatchRequest, observableOptions);
        return result.toPromise();
    }


}



