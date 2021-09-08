import localVarRequest from 'request';

export * from './angle';
export * from './backgroundImage';
export * from './batchInputBlogPost';
export * from './batchInputJsonNode';
export * from './batchInputString';
export * from './batchResponseBlogPostWithErrors';
export * from './blogPost';
export * from './collectionResponseWithTotalBlogPostForwardPaging';
export * from './collectionResponseWithTotalVersionBlogPost';
export * from './colorStop';
export * from './contentCloneRequestVNext';
export * from './contentScheduleRequestVNext';
export * from './errorDetail';
export * from './forwardPaging';
export * from './gradient';
export * from './layoutSection';
export * from './modelError';
export * from './nextPage';
export * from './paging';
export * from './previousPage';
export * from './rGBAColor';
export * from './rowMetaData';
export * from './sideOrCorner';
export * from './standardError';
export * from './styles';
export * from './versionBlogPost';
export * from './versionUser';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Angle } from './angle';
import { BackgroundImage } from './backgroundImage';
import { BatchInputBlogPost } from './batchInputBlogPost';
import { BatchInputJsonNode } from './batchInputJsonNode';
import { BatchInputString } from './batchInputString';
import { BatchResponseBlogPostWithErrors } from './batchResponseBlogPostWithErrors';
import { BlogPost } from './blogPost';
import { CollectionResponseWithTotalBlogPostForwardPaging } from './collectionResponseWithTotalBlogPostForwardPaging';
import { CollectionResponseWithTotalVersionBlogPost } from './collectionResponseWithTotalVersionBlogPost';
import { ColorStop } from './colorStop';
import { ContentCloneRequestVNext } from './contentCloneRequestVNext';
import { ContentScheduleRequestVNext } from './contentScheduleRequestVNext';
import { ErrorDetail } from './errorDetail';
import { ForwardPaging } from './forwardPaging';
import { Gradient } from './gradient';
import { LayoutSection } from './layoutSection';
import { ModelError } from './modelError';
import { NextPage } from './nextPage';
import { Paging } from './paging';
import { PreviousPage } from './previousPage';
import { RGBAColor } from './rGBAColor';
import { RowMetaData } from './rowMetaData';
import { SideOrCorner } from './sideOrCorner';
import { StandardError } from './standardError';
import { Styles } from './styles';
import { VersionBlogPost } from './versionBlogPost';
import { VersionUser } from './versionUser';

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
        "Angle.UnitsEnum": Angle.UnitsEnum,
        "BackgroundImage.BackgroundPositionEnum": BackgroundImage.BackgroundPositionEnum,
        "BatchResponseBlogPostWithErrors.StatusEnum": BatchResponseBlogPostWithErrors.StatusEnum,
        "BlogPost.AbStatusEnum": BlogPost.AbStatusEnum,
        "BlogPost.LanguageEnum": BlogPost.LanguageEnum,
        "BlogPost.ContentTypeCategoryEnum": BlogPost.ContentTypeCategoryEnum,
        "BlogPost.CurrentStateEnum": BlogPost.CurrentStateEnum,
        "SideOrCorner.VerticalSideEnum": SideOrCorner.VerticalSideEnum,
        "SideOrCorner.HorizontalSideEnum": SideOrCorner.HorizontalSideEnum,
        "Styles.VerticalAlignmentEnum": Styles.VerticalAlignmentEnum,
        "Styles.FlexboxPositioningEnum": Styles.FlexboxPositioningEnum,
}

let typeMap: {[index: string]: any} = {
    "Angle": Angle,
    "BackgroundImage": BackgroundImage,
    "BatchInputBlogPost": BatchInputBlogPost,
    "BatchInputJsonNode": BatchInputJsonNode,
    "BatchInputString": BatchInputString,
    "BatchResponseBlogPostWithErrors": BatchResponseBlogPostWithErrors,
    "BlogPost": BlogPost,
    "CollectionResponseWithTotalBlogPostForwardPaging": CollectionResponseWithTotalBlogPostForwardPaging,
    "CollectionResponseWithTotalVersionBlogPost": CollectionResponseWithTotalVersionBlogPost,
    "ColorStop": ColorStop,
    "ContentCloneRequestVNext": ContentCloneRequestVNext,
    "ContentScheduleRequestVNext": ContentScheduleRequestVNext,
    "ErrorDetail": ErrorDetail,
    "ForwardPaging": ForwardPaging,
    "Gradient": Gradient,
    "LayoutSection": LayoutSection,
    "ModelError": ModelError,
    "NextPage": NextPage,
    "Paging": Paging,
    "PreviousPage": PreviousPage,
    "RGBAColor": RGBAColor,
    "RowMetaData": RowMetaData,
    "SideOrCorner": SideOrCorner,
    "StandardError": StandardError,
    "Styles": Styles,
    "VersionBlogPost": VersionBlogPost,
    "VersionUser": VersionUser,
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
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
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
            for (let index = 0; index < attributeTypes.length; index++) {
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
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
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
            for (let index = 0; index < attributeTypes.length; index++) {
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
