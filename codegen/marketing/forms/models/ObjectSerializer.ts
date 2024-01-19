export * from '../models/CollectionResponseFormDefinitionBaseForwardPaging';
export * from '../models/CollectionResponseFormDefinitionBaseForwardPagingResultsInner';
export * from '../models/DatepickerField';
export * from '../models/DependentField';
export * from '../models/DependentFieldDependentField';
export * from '../models/DependentFieldFilter';
export * from '../models/DropdownField';
export * from '../models/EmailField';
export * from '../models/EmailFieldValidation';
export * from '../models/EnumeratedFieldOption';
export * from '../models/ErrorDetail';
export * from '../models/FieldGroup';
export * from '../models/FileField';
export * from '../models/FormDefinitionBase';
export * from '../models/FormDefinitionCreateRequestBase';
export * from '../models/FormDisplayOptions';
export * from '../models/FormPostSubmitAction';
export * from '../models/FormStyle';
export * from '../models/ForwardPaging';
export * from '../models/HubSpotFormConfiguration';
export * from '../models/HubSpotFormDefinition';
export * from '../models/HubSpotFormDefinitionAllOf';
export * from '../models/HubSpotFormDefinitionCreateRequest';
export * from '../models/HubSpotFormDefinitionCreateRequestAllOf';
export * from '../models/HubSpotFormDefinitionPatchRequest';
export * from '../models/HubSpotFormDefinitionPatchRequestLegalConsentOptions';
export * from '../models/LegalConsentCheckbox';
export * from '../models/LegalConsentOptionsExplicitConsentToProcess';
export * from '../models/LegalConsentOptionsImplicitConsentToProcess';
export * from '../models/LegalConsentOptionsLegitimateInterest';
export * from '../models/LegalConsentOptionsNone';
export * from '../models/LifecycleStage';
export * from '../models/MobilePhoneField';
export * from '../models/ModelError';
export * from '../models/MultiLineTextField';
export * from '../models/MultipleCheckboxesField';
export * from '../models/NextPage';
export * from '../models/NumberField';
export * from '../models/NumberFieldValidation';
export * from '../models/PaymentLinkRadioField';
export * from '../models/PhoneField';
export * from '../models/PhoneFieldValidation';
export * from '../models/RadioField';
export * from '../models/SingleCheckboxField';
export * from '../models/SingleLineTextField';

import { CollectionResponseFormDefinitionBaseForwardPaging } from '../models/CollectionResponseFormDefinitionBaseForwardPaging';
import { CollectionResponseFormDefinitionBaseForwardPagingResultsInner             } from '../models/CollectionResponseFormDefinitionBaseForwardPagingResultsInner';
import { DatepickerField            } from '../models/DatepickerField';
import { DependentField } from '../models/DependentField';
import { DependentFieldDependentField                 } from '../models/DependentFieldDependentField';
import { DependentFieldFilter       } from '../models/DependentFieldFilter';
import { DropdownField             } from '../models/DropdownField';
import { EmailField             } from '../models/EmailField';
import { EmailFieldValidation } from '../models/EmailFieldValidation';
import { EnumeratedFieldOption } from '../models/EnumeratedFieldOption';
import { ErrorDetail } from '../models/ErrorDetail';
import { FieldGroup     } from '../models/FieldGroup';
import { FileField             } from '../models/FileField';
import { FormDefinitionBase             } from '../models/FormDefinitionBase';
import { FormDefinitionCreateRequestBase            } from '../models/FormDefinitionCreateRequestBase';
import { FormDisplayOptions       } from '../models/FormDisplayOptions';
import { FormPostSubmitAction    } from '../models/FormPostSubmitAction';
import { FormStyle              } from '../models/FormStyle';
import { ForwardPaging } from '../models/ForwardPaging';
import { HubSpotFormConfiguration              } from '../models/HubSpotFormConfiguration';
import { HubSpotFormDefinition             } from '../models/HubSpotFormDefinition';
import { HubSpotFormDefinitionAllOf             } from '../models/HubSpotFormDefinitionAllOf';
import { HubSpotFormDefinitionCreateRequest            } from '../models/HubSpotFormDefinitionCreateRequest';
import { HubSpotFormDefinitionCreateRequestAllOf            } from '../models/HubSpotFormDefinitionCreateRequestAllOf';
import { HubSpotFormDefinitionPatchRequest } from '../models/HubSpotFormDefinitionPatchRequest';
import { HubSpotFormDefinitionPatchRequestLegalConsentOptions         } from '../models/HubSpotFormDefinitionPatchRequestLegalConsentOptions';
import { LegalConsentCheckbox } from '../models/LegalConsentCheckbox';
import { LegalConsentOptionsExplicitConsentToProcess         } from '../models/LegalConsentOptionsExplicitConsentToProcess';
import { LegalConsentOptionsImplicitConsentToProcess       } from '../models/LegalConsentOptionsImplicitConsentToProcess';
import { LegalConsentOptionsLegitimateInterest    } from '../models/LegalConsentOptionsLegitimateInterest';
import { LegalConsentOptionsNone   } from '../models/LegalConsentOptionsNone';
import { LifecycleStage } from '../models/LifecycleStage';
import { MobilePhoneField             } from '../models/MobilePhoneField';
import { ModelError } from '../models/ModelError';
import { MultiLineTextField            } from '../models/MultiLineTextField';
import { MultipleCheckboxesField            } from '../models/MultipleCheckboxesField';
import { NextPage } from '../models/NextPage';
import { NumberField             } from '../models/NumberField';
import { NumberFieldValidation } from '../models/NumberFieldValidation';
import { PaymentLinkRadioField            } from '../models/PaymentLinkRadioField';
import { PhoneField              } from '../models/PhoneField';
import { PhoneFieldValidation } from '../models/PhoneFieldValidation';
import { RadioField             } from '../models/RadioField';
import { SingleCheckboxField           } from '../models/SingleCheckboxField';
import { SingleLineTextField            } from '../models/SingleLineTextField';

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
    "CollectionResponseFormDefinitionBaseForwardPagingResultsInnerFormTypeEnum",
    "DatepickerFieldFieldTypeEnum",
    "DependentFieldDependentFieldFieldTypeEnum",
    "DependentFieldFilterOperatorEnum",
    "DropdownFieldFieldTypeEnum",
    "EmailFieldFieldTypeEnum",
    "FieldGroupGroupTypeEnum",
    "FieldGroupRichTextTypeEnum",
    "FileFieldFieldTypeEnum",
    "FormDefinitionBaseFormTypeEnum",
    "FormDefinitionCreateRequestBaseFormTypeEnum",
    "FormDisplayOptionsThemeEnum",
    "FormPostSubmitActionTypeEnum",
    "FormStyleSubmitAlignmentEnum",
    "HubSpotFormConfigurationLanguageEnum",
    "HubSpotFormDefinitionFormTypeEnum",
    "HubSpotFormDefinitionAllOfFormTypeEnum",
    "HubSpotFormDefinitionCreateRequestFormTypeEnum",
    "HubSpotFormDefinitionCreateRequestAllOfFormTypeEnum",
    "HubSpotFormDefinitionPatchRequestLegalConsentOptionsTypeEnum",
    "HubSpotFormDefinitionPatchRequestLegalConsentOptionsLawfulBasisEnum",
    "LegalConsentOptionsExplicitConsentToProcessTypeEnum",
    "LegalConsentOptionsImplicitConsentToProcessTypeEnum",
    "LegalConsentOptionsLegitimateInterestTypeEnum",
    "LegalConsentOptionsLegitimateInterestLawfulBasisEnum",
    "LegalConsentOptionsNoneTypeEnum",
    "MobilePhoneFieldFieldTypeEnum",
    "MultiLineTextFieldFieldTypeEnum",
    "MultipleCheckboxesFieldFieldTypeEnum",
    "NumberFieldFieldTypeEnum",
    "PaymentLinkRadioFieldFieldTypeEnum",
    "PhoneFieldFieldTypeEnum",
    "RadioFieldFieldTypeEnum",
    "SingleCheckboxFieldFieldTypeEnum",
    "SingleLineTextFieldFieldTypeEnum",
]);

let typeMap: {[index: string]: any} = {
    "CollectionResponseFormDefinitionBaseForwardPaging": CollectionResponseFormDefinitionBaseForwardPaging,
    "CollectionResponseFormDefinitionBaseForwardPagingResultsInner": CollectionResponseFormDefinitionBaseForwardPagingResultsInner,
    "DatepickerField": DatepickerField,
    "DependentField": DependentField,
    "DependentFieldDependentField": DependentFieldDependentField,
    "DependentFieldFilter": DependentFieldFilter,
    "DropdownField": DropdownField,
    "EmailField": EmailField,
    "EmailFieldValidation": EmailFieldValidation,
    "EnumeratedFieldOption": EnumeratedFieldOption,
    "ErrorDetail": ErrorDetail,
    "FieldGroup": FieldGroup,
    "FileField": FileField,
    "FormDefinitionBase": FormDefinitionBase,
    "FormDefinitionCreateRequestBase": FormDefinitionCreateRequestBase,
    "FormDisplayOptions": FormDisplayOptions,
    "FormPostSubmitAction": FormPostSubmitAction,
    "FormStyle": FormStyle,
    "ForwardPaging": ForwardPaging,
    "HubSpotFormConfiguration": HubSpotFormConfiguration,
    "HubSpotFormDefinition": HubSpotFormDefinition,
    "HubSpotFormDefinitionAllOf": HubSpotFormDefinitionAllOf,
    "HubSpotFormDefinitionCreateRequest": HubSpotFormDefinitionCreateRequest,
    "HubSpotFormDefinitionCreateRequestAllOf": HubSpotFormDefinitionCreateRequestAllOf,
    "HubSpotFormDefinitionPatchRequest": HubSpotFormDefinitionPatchRequest,
    "HubSpotFormDefinitionPatchRequestLegalConsentOptions": HubSpotFormDefinitionPatchRequestLegalConsentOptions,
    "LegalConsentCheckbox": LegalConsentCheckbox,
    "LegalConsentOptionsExplicitConsentToProcess": LegalConsentOptionsExplicitConsentToProcess,
    "LegalConsentOptionsImplicitConsentToProcess": LegalConsentOptionsImplicitConsentToProcess,
    "LegalConsentOptionsLegitimateInterest": LegalConsentOptionsLegitimateInterest,
    "LegalConsentOptionsNone": LegalConsentOptionsNone,
    "LifecycleStage": LifecycleStage,
    "MobilePhoneField": MobilePhoneField,
    "ModelError": ModelError,
    "MultiLineTextField": MultiLineTextField,
    "MultipleCheckboxesField": MultipleCheckboxesField,
    "NextPage": NextPage,
    "NumberField": NumberField,
    "NumberFieldValidation": NumberFieldValidation,
    "PaymentLinkRadioField": PaymentLinkRadioField,
    "PhoneField": PhoneField,
    "PhoneFieldValidation": PhoneFieldValidation,
    "RadioField": RadioField,
    "SingleCheckboxField": SingleCheckboxField,
    "SingleLineTextField": SingleLineTextField,
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
