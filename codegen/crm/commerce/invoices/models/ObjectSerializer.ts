export * from '../models/AssociatedId';
export * from '../models/AssociationSpec';
export * from '../models/BatchInputSimplePublicObjectBatchInput';
export * from '../models/BatchInputSimplePublicObjectBatchInputForCreate';
export * from '../models/BatchInputSimplePublicObjectBatchInputUpsert';
export * from '../models/BatchInputSimplePublicObjectId';
export * from '../models/BatchReadInputSimplePublicObjectId';
export * from '../models/BatchResponseSimplePublicObject';
export * from '../models/BatchResponseSimplePublicObjectWithErrors';
export * from '../models/BatchResponseSimplePublicUpsertObject';
export * from '../models/BatchResponseSimplePublicUpsertObjectWithErrors';
export * from '../models/CollectionResponseAssociatedId';
export * from '../models/CollectionResponseSimplePublicObjectWithAssociationsForwardPaging';
export * from '../models/CollectionResponseWithTotalSimplePublicObjectForwardPaging';
export * from '../models/ErrorDetail';
export * from '../models/Filter';
export * from '../models/FilterGroup';
export * from '../models/ForwardPaging';
export * from '../models/ModelError';
export * from '../models/NextPage';
export * from '../models/Paging';
export * from '../models/PreviousPage';
export * from '../models/PublicAssociationsForObject';
export * from '../models/PublicObjectId';
export * from '../models/PublicObjectSearchRequest';
export * from '../models/SimplePublicObject';
export * from '../models/SimplePublicObjectBatchInput';
export * from '../models/SimplePublicObjectBatchInputForCreate';
export * from '../models/SimplePublicObjectBatchInputUpsert';
export * from '../models/SimplePublicObjectId';
export * from '../models/SimplePublicObjectInput';
export * from '../models/SimplePublicObjectInputForCreate';
export * from '../models/SimplePublicObjectWithAssociations';
export * from '../models/SimplePublicUpsertObject';
export * from '../models/StandardError';
export * from '../models/ValueWithTimestamp';

import { AssociatedId } from '../models/AssociatedId';
import { AssociationSpec    } from '../models/AssociationSpec';
import { BatchInputSimplePublicObjectBatchInput } from '../models/BatchInputSimplePublicObjectBatchInput';
import { BatchInputSimplePublicObjectBatchInputForCreate } from '../models/BatchInputSimplePublicObjectBatchInputForCreate';
import { BatchInputSimplePublicObjectBatchInputUpsert } from '../models/BatchInputSimplePublicObjectBatchInputUpsert';
import { BatchInputSimplePublicObjectId } from '../models/BatchInputSimplePublicObjectId';
import { BatchReadInputSimplePublicObjectId } from '../models/BatchReadInputSimplePublicObjectId';
import { BatchResponseSimplePublicObject        } from '../models/BatchResponseSimplePublicObject';
import { BatchResponseSimplePublicObjectWithErrors          } from '../models/BatchResponseSimplePublicObjectWithErrors';
import { BatchResponseSimplePublicUpsertObject        } from '../models/BatchResponseSimplePublicUpsertObject';
import { BatchResponseSimplePublicUpsertObjectWithErrors          } from '../models/BatchResponseSimplePublicUpsertObjectWithErrors';
import { CollectionResponseAssociatedId } from '../models/CollectionResponseAssociatedId';
import { CollectionResponseSimplePublicObjectWithAssociationsForwardPaging } from '../models/CollectionResponseSimplePublicObjectWithAssociationsForwardPaging';
import { CollectionResponseWithTotalSimplePublicObjectForwardPaging } from '../models/CollectionResponseWithTotalSimplePublicObjectForwardPaging';
import { ErrorDetail } from '../models/ErrorDetail';
import { Filter       } from '../models/Filter';
import { FilterGroup } from '../models/FilterGroup';
import { ForwardPaging } from '../models/ForwardPaging';
import { ModelError } from '../models/ModelError';
import { NextPage } from '../models/NextPage';
import { Paging } from '../models/Paging';
import { PreviousPage } from '../models/PreviousPage';
import { PublicAssociationsForObject } from '../models/PublicAssociationsForObject';
import { PublicObjectId } from '../models/PublicObjectId';
import { PublicObjectSearchRequest } from '../models/PublicObjectSearchRequest';
import { SimplePublicObject } from '../models/SimplePublicObject';
import { SimplePublicObjectBatchInput } from '../models/SimplePublicObjectBatchInput';
import { SimplePublicObjectBatchInputForCreate } from '../models/SimplePublicObjectBatchInputForCreate';
import { SimplePublicObjectBatchInputUpsert } from '../models/SimplePublicObjectBatchInputUpsert';
import { SimplePublicObjectId } from '../models/SimplePublicObjectId';
import { SimplePublicObjectInput } from '../models/SimplePublicObjectInput';
import { SimplePublicObjectInputForCreate } from '../models/SimplePublicObjectInputForCreate';
import { SimplePublicObjectWithAssociations } from '../models/SimplePublicObjectWithAssociations';
import { SimplePublicUpsertObject } from '../models/SimplePublicUpsertObject';
import { StandardError } from '../models/StandardError';
import { ValueWithTimestamp } from '../models/ValueWithTimestamp';

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

let enumsMap: Set<string> = new Set<string>([
    "AssociationSpecAssociationCategoryEnum",
    "BatchResponseSimplePublicObjectStatusEnum",
    "BatchResponseSimplePublicObjectWithErrorsStatusEnum",
    "BatchResponseSimplePublicUpsertObjectStatusEnum",
    "BatchResponseSimplePublicUpsertObjectWithErrorsStatusEnum",
    "FilterOperatorEnum",
]);

let typeMap: {[index: string]: any} = {
    "AssociatedId": AssociatedId,
    "AssociationSpec": AssociationSpec,
    "BatchInputSimplePublicObjectBatchInput": BatchInputSimplePublicObjectBatchInput,
    "BatchInputSimplePublicObjectBatchInputForCreate": BatchInputSimplePublicObjectBatchInputForCreate,
    "BatchInputSimplePublicObjectBatchInputUpsert": BatchInputSimplePublicObjectBatchInputUpsert,
    "BatchInputSimplePublicObjectId": BatchInputSimplePublicObjectId,
    "BatchReadInputSimplePublicObjectId": BatchReadInputSimplePublicObjectId,
    "BatchResponseSimplePublicObject": BatchResponseSimplePublicObject,
    "BatchResponseSimplePublicObjectWithErrors": BatchResponseSimplePublicObjectWithErrors,
    "BatchResponseSimplePublicUpsertObject": BatchResponseSimplePublicUpsertObject,
    "BatchResponseSimplePublicUpsertObjectWithErrors": BatchResponseSimplePublicUpsertObjectWithErrors,
    "CollectionResponseAssociatedId": CollectionResponseAssociatedId,
    "CollectionResponseSimplePublicObjectWithAssociationsForwardPaging": CollectionResponseSimplePublicObjectWithAssociationsForwardPaging,
    "CollectionResponseWithTotalSimplePublicObjectForwardPaging": CollectionResponseWithTotalSimplePublicObjectForwardPaging,
    "ErrorDetail": ErrorDetail,
    "Filter": Filter,
    "FilterGroup": FilterGroup,
    "ForwardPaging": ForwardPaging,
    "ModelError": ModelError,
    "NextPage": NextPage,
    "Paging": Paging,
    "PreviousPage": PreviousPage,
    "PublicAssociationsForObject": PublicAssociationsForObject,
    "PublicObjectId": PublicObjectId,
    "PublicObjectSearchRequest": PublicObjectSearchRequest,
    "SimplePublicObject": SimplePublicObject,
    "SimplePublicObjectBatchInput": SimplePublicObjectBatchInput,
    "SimplePublicObjectBatchInputForCreate": SimplePublicObjectBatchInputForCreate,
    "SimplePublicObjectBatchInputUpsert": SimplePublicObjectBatchInputUpsert,
    "SimplePublicObjectId": SimplePublicObjectId,
    "SimplePublicObjectInput": SimplePublicObjectInput,
    "SimplePublicObjectInputForCreate": SimplePublicObjectInputForCreate,
    "SimplePublicObjectWithAssociations": SimplePublicObjectWithAssociations,
    "SimplePublicUpsertObject": SimplePublicUpsertObject,
    "StandardError": StandardError,
    "ValueWithTimestamp": ValueWithTimestamp,
}

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type, subtype] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

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
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
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

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
