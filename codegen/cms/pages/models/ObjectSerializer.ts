export * from '../models/AbTestCreateRequestVNext';
export * from '../models/AbTestEndRequestVNext';
export * from '../models/AbTestRerunRequestVNext';
export * from '../models/Angle';
export * from '../models/AttachToLangPrimaryRequestVNext';
export * from '../models/BackgroundImage';
export * from '../models/BatchInputContentFolder';
export * from '../models/BatchInputJsonNode';
export * from '../models/BatchInputPage';
export * from '../models/BatchInputString';
export * from '../models/BatchResponseContentFolder';
export * from '../models/BatchResponseContentFolderWithErrors';
export * from '../models/BatchResponsePage';
export * from '../models/BatchResponsePageWithErrors';
export * from '../models/CollectionResponseWithTotalContentFolderForwardPaging';
export * from '../models/CollectionResponseWithTotalPageForwardPaging';
export * from '../models/CollectionResponseWithTotalVersionContentFolder';
export * from '../models/CollectionResponseWithTotalVersionPage';
export * from '../models/ColorStop';
export * from '../models/ContentCloneRequestVNext';
export * from '../models/ContentFolder';
export * from '../models/ContentLanguageCloneRequestVNext';
export * from '../models/ContentLanguageVariation';
export * from '../models/ContentScheduleRequestVNext';
export * from '../models/DetachFromLangGroupRequestVNext';
export * from '../models/ErrorDetail';
export * from '../models/ForwardPaging';
export * from '../models/Gradient';
export * from '../models/LayoutSection';
export * from '../models/ModelError';
export * from '../models/NextPage';
export * from '../models/Page';
export * from '../models/Paging';
export * from '../models/PreviousPage';
export * from '../models/RGBAColor';
export * from '../models/RowMetaData';
export * from '../models/SetNewLanguagePrimaryRequestVNext';
export * from '../models/SideOrCorner';
export * from '../models/StandardError';
export * from '../models/Styles';
export * from '../models/UpdateLanguagesRequestVNext';
export * from '../models/VersionContentFolder';
export * from '../models/VersionPage';
export * from '../models/VersionUser';

import { AbTestCreateRequestVNext } from '../models/AbTestCreateRequestVNext';
import { AbTestEndRequestVNext } from '../models/AbTestEndRequestVNext';
import { AbTestRerunRequestVNext } from '../models/AbTestRerunRequestVNext';
import { Angle } from '../models/Angle';
import { AttachToLangPrimaryRequestVNext } from '../models/AttachToLangPrimaryRequestVNext';
import { BackgroundImage } from '../models/BackgroundImage';
import { BatchInputContentFolder } from '../models/BatchInputContentFolder';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputPage } from '../models/BatchInputPage';
import { BatchInputString } from '../models/BatchInputString';
import { BatchResponseContentFolder        } from '../models/BatchResponseContentFolder';
import { BatchResponseContentFolderWithErrors          } from '../models/BatchResponseContentFolderWithErrors';
import { BatchResponsePage        } from '../models/BatchResponsePage';
import { BatchResponsePageWithErrors          } from '../models/BatchResponsePageWithErrors';
import { CollectionResponseWithTotalContentFolderForwardPaging } from '../models/CollectionResponseWithTotalContentFolderForwardPaging';
import { CollectionResponseWithTotalPageForwardPaging } from '../models/CollectionResponseWithTotalPageForwardPaging';
import { CollectionResponseWithTotalVersionContentFolder } from '../models/CollectionResponseWithTotalVersionContentFolder';
import { CollectionResponseWithTotalVersionPage } from '../models/CollectionResponseWithTotalVersionPage';
import { ColorStop } from '../models/ColorStop';
import { ContentCloneRequestVNext } from '../models/ContentCloneRequestVNext';
import { ContentFolder } from '../models/ContentFolder';
import { ContentLanguageCloneRequestVNext } from '../models/ContentLanguageCloneRequestVNext';
import { ContentLanguageVariation } from '../models/ContentLanguageVariation';
import { ContentScheduleRequestVNext } from '../models/ContentScheduleRequestVNext';
import { DetachFromLangGroupRequestVNext } from '../models/DetachFromLangGroupRequestVNext';
import { ErrorDetail } from '../models/ErrorDetail';
import { ForwardPaging } from '../models/ForwardPaging';
import { Gradient } from '../models/Gradient';
import { LayoutSection } from '../models/LayoutSection';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { Page      } from '../models/Page';
import { Paging } from '../models/Paging';
import { PreviousPage } from '../models/PreviousPage';
import { RGBAColor } from '../models/RGBAColor';
import { RowMetaData } from '../models/RowMetaData';
import { SetNewLanguagePrimaryRequestVNext } from '../models/SetNewLanguagePrimaryRequestVNext';
import { SideOrCorner } from '../models/SideOrCorner';
import { StandardError } from '../models/StandardError';
import { Styles } from '../models/Styles';
import { UpdateLanguagesRequestVNext } from '../models/UpdateLanguagesRequestVNext';
import { VersionContentFolder } from '../models/VersionContentFolder';
import { VersionPage } from '../models/VersionPage';
import { VersionUser } from '../models/VersionUser';

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

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "BatchResponseContentFolderStatusEnum",
    "BatchResponseContentFolderWithErrorsStatusEnum",
    "BatchResponsePageStatusEnum",
    "BatchResponsePageWithErrorsStatusEnum",
    "PageLanguageEnum",
    "PageContentTypeCategoryEnum",
    "PageAbStatusEnum",
    "PageCurrentStateEnum",
]);

let typeMap: {[index: string]: any} = {
    "AbTestCreateRequestVNext": AbTestCreateRequestVNext,
    "AbTestEndRequestVNext": AbTestEndRequestVNext,
    "AbTestRerunRequestVNext": AbTestRerunRequestVNext,
    "Angle": Angle,
    "AttachToLangPrimaryRequestVNext": AttachToLangPrimaryRequestVNext,
    "BackgroundImage": BackgroundImage,
    "BatchInputContentFolder": BatchInputContentFolder,
    "BatchInputJsonNode": BatchInputJsonNode,
    "BatchInputPage": BatchInputPage,
    "BatchInputString": BatchInputString,
    "BatchResponseContentFolder": BatchResponseContentFolder,
    "BatchResponseContentFolderWithErrors": BatchResponseContentFolderWithErrors,
    "BatchResponsePage": BatchResponsePage,
    "BatchResponsePageWithErrors": BatchResponsePageWithErrors,
    "CollectionResponseWithTotalContentFolderForwardPaging": CollectionResponseWithTotalContentFolderForwardPaging,
    "CollectionResponseWithTotalPageForwardPaging": CollectionResponseWithTotalPageForwardPaging,
    "CollectionResponseWithTotalVersionContentFolder": CollectionResponseWithTotalVersionContentFolder,
    "CollectionResponseWithTotalVersionPage": CollectionResponseWithTotalVersionPage,
    "ColorStop": ColorStop,
    "ContentCloneRequestVNext": ContentCloneRequestVNext,
    "ContentFolder": ContentFolder,
    "ContentLanguageCloneRequestVNext": ContentLanguageCloneRequestVNext,
    "ContentLanguageVariation": ContentLanguageVariation,
    "ContentScheduleRequestVNext": ContentScheduleRequestVNext,
    "DetachFromLangGroupRequestVNext": DetachFromLangGroupRequestVNext,
    "ErrorDetail": ErrorDetail,
    "ForwardPaging": ForwardPaging,
    "Gradient": Gradient,
    "LayoutSection": LayoutSection,
    "ModelError": ModelError,
    "NextPage": NextPage,
    "Page": Page,
    "Paging": Paging,
    "PreviousPage": PreviousPage,
    "RGBAColor": RGBAColor,
    "RowMetaData": RowMetaData,
    "SetNewLanguagePrimaryRequestVNext": SetNewLanguagePrimaryRequestVNext,
    "SideOrCorner": SideOrCorner,
    "StandardError": StandardError,
    "Styles": Styles,
    "UpdateLanguagesRequestVNext": UpdateLanguagesRequestVNext,
    "VersionContentFolder": VersionContentFolder,
    "VersionPage": VersionPage,
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
            if (enumsMap.has(expectedType)) {
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

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
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
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
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
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "text/plain") {
            return String(data);
        }

        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "text/plain") {
            return rawData;
        }

        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
