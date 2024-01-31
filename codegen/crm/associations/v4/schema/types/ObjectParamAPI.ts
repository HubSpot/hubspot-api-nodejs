import { HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CollectionResponseAssociationSpecWithLabelNoPaging } from '../models/CollectionResponseAssociationSpecWithLabelNoPaging';
import { PublicAssociationDefinitionCreateRequest } from '../models/PublicAssociationDefinitionCreateRequest';
import { PublicAssociationDefinitionUpdateRequest } from '../models/PublicAssociationDefinitionUpdateRequest';

import { ObservableDefinitionsApi } from "./ObservableAPI";
import { DefinitionsApiRequestFactory, DefinitionsApiResponseProcessor} from "../apis/DefinitionsApi";

export interface DefinitionsApiArchiveRequest {
    /**
     * 
     * @type string
     * @memberof DefinitionsApiarchive
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof DefinitionsApiarchive
     */
    toObjectType: string
    /**
     * 
     * @type number
     * @memberof DefinitionsApiarchive
     */
    associationTypeId: number
}

export interface DefinitionsApiCreateRequest {
    /**
     * 
     * @type string
     * @memberof DefinitionsApicreate
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof DefinitionsApicreate
     */
    toObjectType: string
    /**
     * 
     * @type PublicAssociationDefinitionCreateRequest
     * @memberof DefinitionsApicreate
     */
    publicAssociationDefinitionCreateRequest: PublicAssociationDefinitionCreateRequest
}

export interface DefinitionsApiGetAllRequest {
    /**
     * 
     * @type string
     * @memberof DefinitionsApigetAll
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof DefinitionsApigetAll
     */
    toObjectType: string
}

export interface DefinitionsApiUpdateRequest {
    /**
     * 
     * @type string
     * @memberof DefinitionsApiupdate
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof DefinitionsApiupdate
     */
    toObjectType: string
    /**
     * 
     * @type PublicAssociationDefinitionUpdateRequest
     * @memberof DefinitionsApiupdate
     */
    publicAssociationDefinitionUpdateRequest: PublicAssociationDefinitionUpdateRequest
}

export class ObjectDefinitionsApi {
    private api: ObservableDefinitionsApi

    public constructor(configuration: Configuration, requestFactory?: DefinitionsApiRequestFactory, responseProcessor?: DefinitionsApiResponseProcessor) {
        this.api = new ObservableDefinitionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Deletes an association definition
     * Delete
     * @param param the request object
     */
    public archiveWithHttpInfo(param: DefinitionsApiArchiveRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.archiveWithHttpInfo(param.fromObjectType, param.toObjectType, param.associationTypeId,  options).toPromise();
    }

    /**
     * Deletes an association definition
     * Delete
     * @param param the request object
     */
    public archive(param: DefinitionsApiArchiveRequest, options?: Configuration): Promise<void> {
        return this.api.archive(param.fromObjectType, param.toObjectType, param.associationTypeId,  options).toPromise();
    }

    /**
     * Create a user defined association definition
     * Create
     * @param param the request object
     */
    public createWithHttpInfo(param: DefinitionsApiCreateRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>> {
        return this.api.createWithHttpInfo(param.fromObjectType, param.toObjectType, param.publicAssociationDefinitionCreateRequest,  options).toPromise();
    }

    /**
     * Create a user defined association definition
     * Create
     * @param param the request object
     */
    public create(param: DefinitionsApiCreateRequest, options?: Configuration): Promise<CollectionResponseAssociationSpecWithLabelNoPaging> {
        return this.api.create(param.fromObjectType, param.toObjectType, param.publicAssociationDefinitionCreateRequest,  options).toPromise();
    }

    /**
     * Returns all association types between two object types
     * Read
     * @param param the request object
     */
    public getAllWithHttpInfo(param: DefinitionsApiGetAllRequest, options?: Configuration): Promise<HttpInfo<CollectionResponseAssociationSpecWithLabelNoPaging>> {
        return this.api.getAllWithHttpInfo(param.fromObjectType, param.toObjectType,  options).toPromise();
    }

    /**
     * Returns all association types between two object types
     * Read
     * @param param the request object
     */
    public getAll(param: DefinitionsApiGetAllRequest, options?: Configuration): Promise<CollectionResponseAssociationSpecWithLabelNoPaging> {
        return this.api.getAll(param.fromObjectType, param.toObjectType,  options).toPromise();
    }

    /**
     * Update a user defined association definition
     * Update
     * @param param the request object
     */
    public updateWithHttpInfo(param: DefinitionsApiUpdateRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateWithHttpInfo(param.fromObjectType, param.toObjectType, param.publicAssociationDefinitionUpdateRequest,  options).toPromise();
    }

    /**
     * Update a user defined association definition
     * Update
     * @param param the request object
     */
    public update(param: DefinitionsApiUpdateRequest, options?: Configuration): Promise<void> {
        return this.api.update(param.fromObjectType, param.toObjectType, param.publicAssociationDefinitionUpdateRequest,  options).toPromise();
    }

}
