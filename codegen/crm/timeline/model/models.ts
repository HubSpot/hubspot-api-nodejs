export * from './batchInputTimelineEvent';
export * from './batchResponseTimelineEventResponse';
export * from './batchResponseTimelineEventResponseWithErrors';
export * from './collectionResponseTimelineEventTemplate';
export * from './errorCategory';
export * from './errorDetail';
export * from './eventDetail';
export * from './modelError';
export * from './nextPage';
export * from './paging';
export * from './previousPage';
export * from './standardError';
export * from './timelineEvent';
export * from './timelineEventIFrame';
export * from './timelineEventResponse';
export * from './timelineEventTemplate';
export * from './timelineEventTemplateCreateRequest';
export * from './timelineEventTemplateToken';
export * from './timelineEventTemplateTokenOption';
export * from './timelineEventTemplateTokenUpdateRequest';
export * from './timelineEventTemplateUpdateRequest';

import localVarRequest = require('request');

import { BatchInputTimelineEvent } from './batchInputTimelineEvent';
import { BatchResponseTimelineEventResponse } from './batchResponseTimelineEventResponse';
import { BatchResponseTimelineEventResponseWithErrors } from './batchResponseTimelineEventResponseWithErrors';
import { CollectionResponseTimelineEventTemplate } from './collectionResponseTimelineEventTemplate';
import { ErrorCategory } from './errorCategory';
import { ErrorDetail } from './errorDetail';
import { EventDetail } from './eventDetail';
import { ModelError } from './modelError';
import { NextPage } from './nextPage';
import { Paging } from './paging';
import { PreviousPage } from './previousPage';
import { StandardError } from './standardError';
import { TimelineEvent } from './timelineEvent';
import { TimelineEventIFrame } from './timelineEventIFrame';
import { TimelineEventResponse } from './timelineEventResponse';
import { TimelineEventTemplate } from './timelineEventTemplate';
import { TimelineEventTemplateCreateRequest } from './timelineEventTemplateCreateRequest';
import { TimelineEventTemplateToken } from './timelineEventTemplateToken';
import { TimelineEventTemplateTokenOption } from './timelineEventTemplateTokenOption';
import { TimelineEventTemplateTokenUpdateRequest } from './timelineEventTemplateTokenUpdateRequest';
import { TimelineEventTemplateUpdateRequest } from './timelineEventTemplateUpdateRequest';

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
        "BatchResponseTimelineEventResponse.StatusEnum": BatchResponseTimelineEventResponse.StatusEnum,
        "BatchResponseTimelineEventResponseWithErrors.StatusEnum": BatchResponseTimelineEventResponseWithErrors.StatusEnum,
        "ErrorCategory.HttpStatusEnum": ErrorCategory.HttpStatusEnum,
        "TimelineEventTemplateToken.TypeEnum": TimelineEventTemplateToken.TypeEnum,
}

let typeMap: {[index: string]: any} = {
    "BatchInputTimelineEvent": BatchInputTimelineEvent,
    "BatchResponseTimelineEventResponse": BatchResponseTimelineEventResponse,
    "BatchResponseTimelineEventResponseWithErrors": BatchResponseTimelineEventResponseWithErrors,
    "CollectionResponseTimelineEventTemplate": CollectionResponseTimelineEventTemplate,
    "ErrorCategory": ErrorCategory,
    "ErrorDetail": ErrorDetail,
    "EventDetail": EventDetail,
    "ModelError": ModelError,
    "NextPage": NextPage,
    "Paging": Paging,
    "PreviousPage": PreviousPage,
    "StandardError": StandardError,
    "TimelineEvent": TimelineEvent,
    "TimelineEventIFrame": TimelineEventIFrame,
    "TimelineEventResponse": TimelineEventResponse,
    "TimelineEventTemplate": TimelineEventTemplate,
    "TimelineEventTemplateCreateRequest": TimelineEventTemplateCreateRequest,
    "TimelineEventTemplateToken": TimelineEventTemplateToken,
    "TimelineEventTemplateTokenOption": TimelineEventTemplateTokenOption,
    "TimelineEventTemplateTokenUpdateRequest": TimelineEventTemplateTokenUpdateRequest,
    "TimelineEventTemplateUpdateRequest": TimelineEventTemplateUpdateRequest,
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
