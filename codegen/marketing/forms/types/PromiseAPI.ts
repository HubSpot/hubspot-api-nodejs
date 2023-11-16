import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import { Configuration} from '../configuration'

import { CollectionResponseFormDefinitionBaseForwardPaging } from '../models/CollectionResponseFormDefinitionBaseForwardPaging';
import { CollectionResponseFormDefinitionBaseForwardPagingResultsInner } from '../models/CollectionResponseFormDefinitionBaseForwardPagingResultsInner';
import { DatepickerField } from '../models/DatepickerField';
import { DependentField } from '../models/DependentField';
import { DependentFieldDependentField } from '../models/DependentFieldDependentField';
import { DependentFieldFilter } from '../models/DependentFieldFilter';
import { DropdownField } from '../models/DropdownField';
import { EmailField } from '../models/EmailField';
import { EmailFieldValidation } from '../models/EmailFieldValidation';
import { EnumeratedFieldOption } from '../models/EnumeratedFieldOption';
import { ErrorDetail } from '../models/ErrorDetail';
import { FieldGroup } from '../models/FieldGroup';
import { FileField } from '../models/FileField';
import { FormDefinitionBase } from '../models/FormDefinitionBase';
import { FormDefinitionCreateRequestBase } from '../models/FormDefinitionCreateRequestBase';
import { FormDisplayOptions } from '../models/FormDisplayOptions';
import { FormPostSubmitAction } from '../models/FormPostSubmitAction';
import { FormStyle } from '../models/FormStyle';
import { ForwardPaging } from '../models/ForwardPaging';
import { HubSpotFormConfiguration } from '../models/HubSpotFormConfiguration';
import { HubSpotFormDefinition } from '../models/HubSpotFormDefinition';
import { HubSpotFormDefinitionAllOf } from '../models/HubSpotFormDefinitionAllOf';
import { HubSpotFormDefinitionCreateRequest } from '../models/HubSpotFormDefinitionCreateRequest';
import { HubSpotFormDefinitionCreateRequestAllOf } from '../models/HubSpotFormDefinitionCreateRequestAllOf';
import { HubSpotFormDefinitionPatchRequest } from '../models/HubSpotFormDefinitionPatchRequest';
import { HubSpotFormDefinitionPatchRequestLegalConsentOptions } from '../models/HubSpotFormDefinitionPatchRequestLegalConsentOptions';
import { LegalConsentCheckbox } from '../models/LegalConsentCheckbox';
import { LegalConsentOptionsExplicitConsentToProcess } from '../models/LegalConsentOptionsExplicitConsentToProcess';
import { LegalConsentOptionsImplicitConsentToProcess } from '../models/LegalConsentOptionsImplicitConsentToProcess';
import { LegalConsentOptionsLegitimateInterest } from '../models/LegalConsentOptionsLegitimateInterest';
import { LegalConsentOptionsNone } from '../models/LegalConsentOptionsNone';
import { MobilePhoneField } from '../models/MobilePhoneField';
import { ModelError } from '../models/ModelError';
import { MultiLineTextField } from '../models/MultiLineTextField';
import { MultipleCheckboxesField } from '../models/MultipleCheckboxesField';
import { NextPage } from '../models/NextPage';
import { NumberField } from '../models/NumberField';
import { NumberFieldValidation } from '../models/NumberFieldValidation';
import { PaymentLinkRadioField } from '../models/PaymentLinkRadioField';
import { PhoneField } from '../models/PhoneField';
import { PhoneFieldValidation } from '../models/PhoneFieldValidation';
import { RadioField } from '../models/RadioField';
import { SingleCheckboxField } from '../models/SingleCheckboxField';
import { SingleLineTextField } from '../models/SingleLineTextField';
import { ObservableFormsApi } from './ObservableAPI';

import { FormsApiRequestFactory, FormsApiResponseProcessor} from "../apis/FormsApi";
export class PromiseFormsApi {
    private api: ObservableFormsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FormsApiRequestFactory,
        responseProcessor?: FormsApiResponseProcessor
    ) {
        this.api = new ObservableFormsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Archive a form definition. New submissions will not be accepted and the form definition will be permanently deleted after 3 months.
     * Archive a form definition
     * @param formId The ID of the form to archive.
     */
    public archive(formId: string, _options?: Configuration): Promise<void> {
        const result = this.api.archive(formId, _options);
        return result.toPromise();
    }

    /**
     * Add a new `hubspot` form
     * Create a form
     * @param formDefinitionCreateRequestBase 
     */
    public create(formDefinitionCreateRequestBase: FormDefinitionCreateRequestBase, _options?: Configuration): Promise<FormDefinitionBase> {
        const result = this.api.create(formDefinitionCreateRequestBase, _options);
        return result.toPromise();
    }

    /**
     * Returns a form based on the form ID provided.
     * Get a form definition
     * @param formId The unique identifier of the form
     * @param archived Whether to return only results that have been archived.
     */
    public getById(formId: string, archived?: boolean, _options?: Configuration): Promise<FormDefinitionBase> {
        const result = this.api.getById(formId, archived, _options);
        return result.toPromise();
    }

    /**
     * Returns a list of forms based on the search filters. By default, it returns the first 20 `hubspot` forms
     * Get a list of forms
     * @param after The paging cursor token of the last successfully read resource will be returned as the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param limit The maximum number of results to display per page.
     * @param archived Whether to return only results that have been archived.
     * @param formTypes The form types to be included in the results.
     */
    public getPage(after?: string, limit?: number, archived?: boolean, formTypes?: Array<'hubspot' | 'captured' | 'flow' | 'blog_comment' | 'all'>, _options?: Configuration): Promise<CollectionResponseFormDefinitionBaseForwardPaging> {
        const result = this.api.getPage(after, limit, archived, formTypes, _options);
        return result.toPromise();
    }

    /**
     * Update all fields of a hubspot form definition.
     * Update a form definition
     * @param formId 
     * @param hubSpotFormDefinition 
     */
    public replace(formId: string, hubSpotFormDefinition: HubSpotFormDefinition, _options?: Configuration): Promise<FormDefinitionBase> {
        const result = this.api.replace(formId, hubSpotFormDefinition, _options);
        return result.toPromise();
    }

    /**
     * Update some of the form definition components
     * Partially update a form definition
     * @param formId The ID of the form to update.
     * @param hubSpotFormDefinitionPatchRequest 
     */
    public update(formId: string, hubSpotFormDefinitionPatchRequest: HubSpotFormDefinitionPatchRequest, _options?: Configuration): Promise<FormDefinitionBase> {
        const result = this.api.update(formId, hubSpotFormDefinitionPatchRequest, _options);
        return result.toPromise();
    }


}



