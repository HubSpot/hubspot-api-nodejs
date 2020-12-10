export * from './batchInputPropertyCreate';
export * from './batchInputPropertyName';
export * from './batchReadInputPropertyName';
export * from './batchResponseProperty';
export * from './collectionResponseProperty';
export * from './collectionResponsePropertyGroup';
export * from './errorCategory';
export * from './errorDetail';
export * from './modelError';
export * from './nextPage';
export * from './option';
export * from './optionInput';
export * from './paging';
export * from './property';
export * from './propertyCreate';
export * from './propertyGroup';
export * from './propertyGroupCreate';
export * from './propertyGroupUpdate';
export * from './propertyModificationMetadata';
export * from './propertyName';
export * from './propertyUpdate';
export * from './standardError';

import localVarRequest = require('request');

import { BatchInputPropertyCreate } from './batchInputPropertyCreate';
import { BatchInputPropertyName } from './batchInputPropertyName';
import { BatchReadInputPropertyName } from './batchReadInputPropertyName';
import { BatchResponseProperty } from './batchResponseProperty';
import { CollectionResponseProperty } from './collectionResponseProperty';
import { CollectionResponsePropertyGroup } from './collectionResponsePropertyGroup';
import { ErrorCategory } from './errorCategory';
import { ErrorDetail } from './errorDetail';
import { ModelError } from './modelError';
import { NextPage } from './nextPage';
import { Option } from './option';
import { OptionInput } from './optionInput';
import { Paging } from './paging';
import { Property } from './property';
import { PropertyCreate } from './propertyCreate';
import { PropertyGroup } from './propertyGroup';
import { PropertyGroupCreate } from './propertyGroupCreate';
import { PropertyGroupUpdate } from './propertyGroupUpdate';
import { PropertyModificationMetadata } from './propertyModificationMetadata';
import { PropertyName } from './propertyName';
import { PropertyUpdate } from './propertyUpdate';
import { StandardError } from './standardError';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "BatchResponseProperty.StatusEnum": BatchResponseProperty.StatusEnum,
        "ErrorCategory.HttpStatusEnum": ErrorCategory.HttpStatusEnum,
        "PropertyCreate.TypeEnum": PropertyCreate.TypeEnum,
        "PropertyCreate.FieldTypeEnum": PropertyCreate.FieldTypeEnum,
        "PropertyUpdate.TypeEnum": PropertyUpdate.TypeEnum,
        "PropertyUpdate.FieldTypeEnum": PropertyUpdate.FieldTypeEnum,
}

let typeMap: {[index: string]: any} = {
    "BatchInputPropertyCreate": BatchInputPropertyCreate,
    "BatchInputPropertyName": BatchInputPropertyName,
    "BatchReadInputPropertyName": BatchReadInputPropertyName,
    "BatchResponseProperty": BatchResponseProperty,
    "CollectionResponseProperty": CollectionResponseProperty,
    "CollectionResponsePropertyGroup": CollectionResponsePropertyGroup,
    "ErrorCategory": ErrorCategory,
    "ErrorDetail": ErrorDetail,
    "ModelError": ModelError,
    "NextPage": NextPage,
    "Option": Option,
    "OptionInput": OptionInput,
    "Paging": Paging,
    "Property": Property,
    "PropertyCreate": PropertyCreate,
    "PropertyGroup": PropertyGroup,
    "PropertyGroupCreate": PropertyGroupCreate,
    "PropertyGroupUpdate": PropertyGroupUpdate,
    "PropertyModificationMetadata": PropertyModificationMetadata,
    "PropertyName": PropertyName,
    "PropertyUpdate": PropertyUpdate,
    "StandardError": StandardError,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
