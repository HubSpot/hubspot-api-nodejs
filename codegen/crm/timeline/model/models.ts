export * from './addNumbers';
export * from './and';
export * from './batchInputTimelineEvent';
export * from './batchResponseTimelineEventResponse';
export * from './beginsWith';
export * from './booleanPropertyVariable';
export * from './collectionResponseTimelineEventTemplate';
export * from './concatStrings';
export * from './constantBoolean';
export * from './constantNumber';
export * from './constantString';
export * from './contains';
export * from './divideNumbers';
export * from './errorDetail';
export * from './eventDetail';
export * from './extractMostRecentEmailReplyHtml';
export * from './extractMostRecentEmailReplyText';
export * from './extractMostRecentPlainTextEmailReply';
export * from './fetchExchangeRate';
export * from './hasEmailReply';
export * from './hasPlainTextEmailReply';
export * from './ifBoolean';
export * from './ifNumber';
export * from './ifString';
export * from './isPresent';
export * from './lessThan';
export * from './lessThanOrEqual';
export * from './lowerCase';
export * from './maxNumbers';
export * from './minNumbers';
export * from './modelDate';
export * from './modelError';
export * from './month';
export * from './moreThan';
export * from './moreThanOrEqual';
export * from './multiplyNumbers';
export * from './nextPage';
export * from './not';
export * from './now';
export * from './numberEquals';
export * from './numberPropertyVariable';
export * from './numberToString';
export * from './or';
export * from './paging';
export * from './parseNumber';
export * from './periodToMonths';
export * from './pipelineProbability';
export * from './roundDownNumbers';
export * from './roundUpNumbers';
export * from './stringEquals';
export * from './stringPropertyVariable';
export * from './subtractNumbers';
export * from './timeBetween';
export * from './timelineEvent';
export * from './timelineEventIFrame';
export * from './timelineEventResponse';
export * from './timelineEventTemplate';
export * from './timelineEventTemplateCreateRequest';
export * from './timelineEventTemplateToken';
export * from './timelineEventTemplateTokenOption';
export * from './timelineEventTemplateTokenUpdateRequest';
export * from './timelineEventTemplateUpdateRequest';
export * from './upperCase';
export * from './xor';
export * from './year';

import localVarRequest = require('request');

import { AddNumbers } from './addNumbers';
import { And } from './and';
import { BatchInputTimelineEvent } from './batchInputTimelineEvent';
import { BatchResponseTimelineEventResponse } from './batchResponseTimelineEventResponse';
import { BeginsWith } from './beginsWith';
import { BooleanPropertyVariable } from './booleanPropertyVariable';
import { CollectionResponseTimelineEventTemplate } from './collectionResponseTimelineEventTemplate';
import { ConcatStrings } from './concatStrings';
import { ConstantBoolean } from './constantBoolean';
import { ConstantNumber } from './constantNumber';
import { ConstantString } from './constantString';
import { Contains } from './contains';
import { DivideNumbers } from './divideNumbers';
import { ErrorDetail } from './errorDetail';
import { EventDetail } from './eventDetail';
import { ExtractMostRecentEmailReplyHtml } from './extractMostRecentEmailReplyHtml';
import { ExtractMostRecentEmailReplyText } from './extractMostRecentEmailReplyText';
import { ExtractMostRecentPlainTextEmailReply } from './extractMostRecentPlainTextEmailReply';
import { FetchExchangeRate } from './fetchExchangeRate';
import { HasEmailReply } from './hasEmailReply';
import { HasPlainTextEmailReply } from './hasPlainTextEmailReply';
import { IfBoolean } from './ifBoolean';
import { IfNumber } from './ifNumber';
import { IfString } from './ifString';
import { IsPresent } from './isPresent';
import { LessThan } from './lessThan';
import { LessThanOrEqual } from './lessThanOrEqual';
import { LowerCase } from './lowerCase';
import { MaxNumbers } from './maxNumbers';
import { MinNumbers } from './minNumbers';
import { ModelDate } from './modelDate';
import { ModelError } from './modelError';
import { Month } from './month';
import { MoreThan } from './moreThan';
import { MoreThanOrEqual } from './moreThanOrEqual';
import { MultiplyNumbers } from './multiplyNumbers';
import { NextPage } from './nextPage';
import { Not } from './not';
import { Now } from './now';
import { NumberEquals } from './numberEquals';
import { NumberPropertyVariable } from './numberPropertyVariable';
import { NumberToString } from './numberToString';
import { Or } from './or';
import { Paging } from './paging';
import { ParseNumber } from './parseNumber';
import { PeriodToMonths } from './periodToMonths';
import { PipelineProbability } from './pipelineProbability';
import { RoundDownNumbers } from './roundDownNumbers';
import { RoundUpNumbers } from './roundUpNumbers';
import { StringEquals } from './stringEquals';
import { StringPropertyVariable } from './stringPropertyVariable';
import { SubtractNumbers } from './subtractNumbers';
import { TimeBetween } from './timeBetween';
import { TimelineEvent } from './timelineEvent';
import { TimelineEventIFrame } from './timelineEventIFrame';
import { TimelineEventResponse } from './timelineEventResponse';
import { TimelineEventTemplate } from './timelineEventTemplate';
import { TimelineEventTemplateCreateRequest } from './timelineEventTemplateCreateRequest';
import { TimelineEventTemplateToken } from './timelineEventTemplateToken';
import { TimelineEventTemplateTokenOption } from './timelineEventTemplateTokenOption';
import { TimelineEventTemplateTokenUpdateRequest } from './timelineEventTemplateTokenUpdateRequest';
import { TimelineEventTemplateUpdateRequest } from './timelineEventTemplateUpdateRequest';
import { UpperCase } from './upperCase';
import { Xor } from './xor';
import { Year } from './year';

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
        "AddNumbers.OperatorEnum": AddNumbers.OperatorEnum,
        "And.OperatorEnum": And.OperatorEnum,
        "BatchResponseTimelineEventResponse.StatusEnum": BatchResponseTimelineEventResponse.StatusEnum,
        "BeginsWith.OperatorEnum": BeginsWith.OperatorEnum,
        "BooleanPropertyVariable.OperatorEnum": BooleanPropertyVariable.OperatorEnum,
        "ConcatStrings.OperatorEnum": ConcatStrings.OperatorEnum,
        "ConstantBoolean.OperatorEnum": ConstantBoolean.OperatorEnum,
        "ConstantNumber.OperatorEnum": ConstantNumber.OperatorEnum,
        "ConstantString.OperatorEnum": ConstantString.OperatorEnum,
        "Contains.OperatorEnum": Contains.OperatorEnum,
        "DivideNumbers.OperatorEnum": DivideNumbers.OperatorEnum,
        "ExtractMostRecentEmailReplyHtml.OperatorEnum": ExtractMostRecentEmailReplyHtml.OperatorEnum,
        "ExtractMostRecentEmailReplyText.OperatorEnum": ExtractMostRecentEmailReplyText.OperatorEnum,
        "ExtractMostRecentPlainTextEmailReply.OperatorEnum": ExtractMostRecentPlainTextEmailReply.OperatorEnum,
        "FetchExchangeRate.OperatorEnum": FetchExchangeRate.OperatorEnum,
        "HasEmailReply.OperatorEnum": HasEmailReply.OperatorEnum,
        "HasPlainTextEmailReply.OperatorEnum": HasPlainTextEmailReply.OperatorEnum,
        "IfBoolean.OperatorEnum": IfBoolean.OperatorEnum,
        "IfNumber.OperatorEnum": IfNumber.OperatorEnum,
        "IfString.OperatorEnum": IfString.OperatorEnum,
        "IsPresent.OperatorEnum": IsPresent.OperatorEnum,
        "LessThan.OperatorEnum": LessThan.OperatorEnum,
        "LessThanOrEqual.OperatorEnum": LessThanOrEqual.OperatorEnum,
        "LowerCase.OperatorEnum": LowerCase.OperatorEnum,
        "MaxNumbers.OperatorEnum": MaxNumbers.OperatorEnum,
        "MinNumbers.OperatorEnum": MinNumbers.OperatorEnum,
        "ModelDate.OperatorEnum": ModelDate.OperatorEnum,
        "Month.OperatorEnum": Month.OperatorEnum,
        "MoreThan.OperatorEnum": MoreThan.OperatorEnum,
        "MoreThanOrEqual.OperatorEnum": MoreThanOrEqual.OperatorEnum,
        "MultiplyNumbers.OperatorEnum": MultiplyNumbers.OperatorEnum,
        "Not.OperatorEnum": Not.OperatorEnum,
        "Now.OperatorEnum": Now.OperatorEnum,
        "NumberEquals.OperatorEnum": NumberEquals.OperatorEnum,
        "NumberPropertyVariable.OperatorEnum": NumberPropertyVariable.OperatorEnum,
        "NumberToString.OperatorEnum": NumberToString.OperatorEnum,
        "Or.OperatorEnum": Or.OperatorEnum,
        "ParseNumber.OperatorEnum": ParseNumber.OperatorEnum,
        "PeriodToMonths.OperatorEnum": PeriodToMonths.OperatorEnum,
        "PipelineProbability.OperatorEnum": PipelineProbability.OperatorEnum,
        "RoundDownNumbers.OperatorEnum": RoundDownNumbers.OperatorEnum,
        "RoundUpNumbers.OperatorEnum": RoundUpNumbers.OperatorEnum,
        "StringEquals.OperatorEnum": StringEquals.OperatorEnum,
        "StringPropertyVariable.OperatorEnum": StringPropertyVariable.OperatorEnum,
        "SubtractNumbers.OperatorEnum": SubtractNumbers.OperatorEnum,
        "TimeBetween.OperatorEnum": TimeBetween.OperatorEnum,
        "TimelineEventTemplateToken.TypeEnum": TimelineEventTemplateToken.TypeEnum,
        "UpperCase.OperatorEnum": UpperCase.OperatorEnum,
        "Xor.OperatorEnum": Xor.OperatorEnum,
        "Year.OperatorEnum": Year.OperatorEnum,
}

let typeMap: {[index: string]: any} = {
    "AddNumbers": AddNumbers,
    "And": And,
    "BatchInputTimelineEvent": BatchInputTimelineEvent,
    "BatchResponseTimelineEventResponse": BatchResponseTimelineEventResponse,
    "BeginsWith": BeginsWith,
    "BooleanPropertyVariable": BooleanPropertyVariable,
    "CollectionResponseTimelineEventTemplate": CollectionResponseTimelineEventTemplate,
    "ConcatStrings": ConcatStrings,
    "ConstantBoolean": ConstantBoolean,
    "ConstantNumber": ConstantNumber,
    "ConstantString": ConstantString,
    "Contains": Contains,
    "DivideNumbers": DivideNumbers,
    "ErrorDetail": ErrorDetail,
    "EventDetail": EventDetail,
    "ExtractMostRecentEmailReplyHtml": ExtractMostRecentEmailReplyHtml,
    "ExtractMostRecentEmailReplyText": ExtractMostRecentEmailReplyText,
    "ExtractMostRecentPlainTextEmailReply": ExtractMostRecentPlainTextEmailReply,
    "FetchExchangeRate": FetchExchangeRate,
    "HasEmailReply": HasEmailReply,
    "HasPlainTextEmailReply": HasPlainTextEmailReply,
    "IfBoolean": IfBoolean,
    "IfNumber": IfNumber,
    "IfString": IfString,
    "IsPresent": IsPresent,
    "LessThan": LessThan,
    "LessThanOrEqual": LessThanOrEqual,
    "LowerCase": LowerCase,
    "MaxNumbers": MaxNumbers,
    "MinNumbers": MinNumbers,
    "ModelDate": ModelDate,
    "ModelError": ModelError,
    "Month": Month,
    "MoreThan": MoreThan,
    "MoreThanOrEqual": MoreThanOrEqual,
    "MultiplyNumbers": MultiplyNumbers,
    "NextPage": NextPage,
    "Not": Not,
    "Now": Now,
    "NumberEquals": NumberEquals,
    "NumberPropertyVariable": NumberPropertyVariable,
    "NumberToString": NumberToString,
    "Or": Or,
    "Paging": Paging,
    "ParseNumber": ParseNumber,
    "PeriodToMonths": PeriodToMonths,
    "PipelineProbability": PipelineProbability,
    "RoundDownNumbers": RoundDownNumbers,
    "RoundUpNumbers": RoundUpNumbers,
    "StringEquals": StringEquals,
    "StringPropertyVariable": StringPropertyVariable,
    "SubtractNumbers": SubtractNumbers,
    "TimeBetween": TimeBetween,
    "TimelineEvent": TimelineEvent,
    "TimelineEventIFrame": TimelineEventIFrame,
    "TimelineEventResponse": TimelineEventResponse,
    "TimelineEventTemplate": TimelineEventTemplate,
    "TimelineEventTemplateCreateRequest": TimelineEventTemplateCreateRequest,
    "TimelineEventTemplateToken": TimelineEventTemplateToken,
    "TimelineEventTemplateTokenOption": TimelineEventTemplateTokenOption,
    "TimelineEventTemplateTokenUpdateRequest": TimelineEventTemplateTokenUpdateRequest,
    "TimelineEventTemplateUpdateRequest": TimelineEventTemplateUpdateRequest,
    "UpperCase": UpperCase,
    "Xor": Xor,
    "Year": Year,
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
