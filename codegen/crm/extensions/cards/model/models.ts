export * from './actionConfirmationBody';
export * from './actionHookActionBody';
export * from './cardActions';
export * from './cardCreateRequest';
export * from './cardDisplayBody';
export * from './cardDisplayProperty';
export * from './cardFetchBody';
export * from './cardFetchBodyPatch';
export * from './cardListResponse';
export * from './cardObjectTypeBody';
export * from './cardPatchRequest';
export * from './cardResponse';
export * from './displayOption';
export * from './errorDetail';
export * from './iFrameActionBody';
export * from './integratorCardPayloadResponse';
export * from './integratorObjectResult';
export * from './modelError';
export * from './objectToken';
export * from './topLevelActions';

import localVarRequest = require('request');

import { ActionConfirmationBody } from './actionConfirmationBody';
import { ActionHookActionBody } from './actionHookActionBody';
import { CardActions } from './cardActions';
import { CardCreateRequest } from './cardCreateRequest';
import { CardDisplayBody } from './cardDisplayBody';
import { CardDisplayProperty } from './cardDisplayProperty';
import { CardFetchBody } from './cardFetchBody';
import { CardFetchBodyPatch } from './cardFetchBodyPatch';
import { CardListResponse } from './cardListResponse';
import { CardObjectTypeBody } from './cardObjectTypeBody';
import { CardPatchRequest } from './cardPatchRequest';
import { CardResponse } from './cardResponse';
import { DisplayOption } from './displayOption';
import { ErrorDetail } from './errorDetail';
import { IFrameActionBody } from './iFrameActionBody';
import { IntegratorCardPayloadResponse } from './integratorCardPayloadResponse';
import { IntegratorObjectResult } from './integratorObjectResult';
import { ModelError } from './modelError';
import { ObjectToken } from './objectToken';
import { TopLevelActions } from './topLevelActions';

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
        "ActionHookActionBody.TypeEnum": ActionHookActionBody.TypeEnum,
        "ActionHookActionBody.HttpMethodEnum": ActionHookActionBody.HttpMethodEnum,
        "CardDisplayProperty.DataTypeEnum": CardDisplayProperty.DataTypeEnum,
        "CardObjectTypeBody.NameEnum": CardObjectTypeBody.NameEnum,
        "DisplayOption.TypeEnum": DisplayOption.TypeEnum,
        "IFrameActionBody.TypeEnum": IFrameActionBody.TypeEnum,
        "IntegratorCardPayloadResponse.ResponseVersionEnum": IntegratorCardPayloadResponse.ResponseVersionEnum,
        "ObjectToken.DataTypeEnum": ObjectToken.DataTypeEnum,
}

let typeMap: {[index: string]: any} = {
    "ActionConfirmationBody": ActionConfirmationBody,
    "ActionHookActionBody": ActionHookActionBody,
    "CardActions": CardActions,
    "CardCreateRequest": CardCreateRequest,
    "CardDisplayBody": CardDisplayBody,
    "CardDisplayProperty": CardDisplayProperty,
    "CardFetchBody": CardFetchBody,
    "CardFetchBodyPatch": CardFetchBodyPatch,
    "CardListResponse": CardListResponse,
    "CardObjectTypeBody": CardObjectTypeBody,
    "CardPatchRequest": CardPatchRequest,
    "CardResponse": CardResponse,
    "DisplayOption": DisplayOption,
    "ErrorDetail": ErrorDetail,
    "IFrameActionBody": IFrameActionBody,
    "IntegratorCardPayloadResponse": IntegratorCardPayloadResponse,
    "IntegratorObjectResult": IntegratorObjectResult,
    "ModelError": ModelError,
    "ObjectToken": ObjectToken,
    "TopLevelActions": TopLevelActions,
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