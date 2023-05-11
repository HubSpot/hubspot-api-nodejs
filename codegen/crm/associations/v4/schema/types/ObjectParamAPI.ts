import { Configuration} from '../configuration'

import { CollectionResponseAssociationSpecWithLabelNoPaging } from '../models/CollectionResponseAssociationSpecWithLabelNoPaging';
import { PublicAssociationDefinitionCreateRequest } from '../models/PublicAssociationDefinitionCreateRequest';
import { PublicAssociationDefinitionUpdateRequest } from '../models/PublicAssociationDefinitionUpdateRequest';

import { ObservableDefinitionsApi } from "./ObservableAPI";
import { DefinitionsApiRequestFactory, DefinitionsApiResponseProcessor} from "../apis/DefinitionsApi";

export interface DefinitionsApiDeleteRequest {
    /**
     * 
     * @type string
     * @memberof DefinitionsApi_delete
     */
    fromObjectType: string
    /**
     * 
     * @type string
     * @memberof DefinitionsApi_delete
     */
    toObjectType: string
    /**
     * 
     * @type number
     * @memberof DefinitionsApi_delete
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
    public _delete(param: DefinitionsApiDeleteRequest, options?: Configuration): Promise<void> {
        return this.api._delete(param.fromObjectType, param.toObjectType, param.associationTypeId,  options).toPromise();
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
    public getAll(param: DefinitionsApiGetAllRequest, options?: Configuration): Promise<CollectionResponseAssociationSpecWithLabelNoPaging> {
        return this.api.getAll(param.fromObjectType, param.toObjectType,  options).toPromise();
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
