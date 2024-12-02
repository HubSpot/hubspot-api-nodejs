// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from "./baseapi";
import { Configuration } from "../configuration";
import {
  RequestContext,
  HttpMethod,
  ResponseContext,
  HttpInfo,
} from "../http/http";
import { ObjectSerializer } from "../models/ObjectSerializer";
import { ApiException } from "./exception";
import { isCodeInRange } from "../util";
import { SecurityAuthentication } from "../auth/auth";
import { CollectionResponseFormDefinitionBaseForwardPaging } from "../models/CollectionResponseFormDefinitionBaseForwardPaging";
import { FormDefinitionBase } from "../models/FormDefinitionBase";
import { FormDefinitionCreateRequestBase } from "../models/FormDefinitionCreateRequestBase";
import { HubSpotFormDefinition } from "../models/HubSpotFormDefinition";
import { HubSpotFormDefinitionPatchRequest } from "../models/HubSpotFormDefinitionPatchRequest";

export class FormsApiRequestFactory extends BaseAPIRequestFactory {
  /**
   * Archive a form definition. New submissions will not be accepted, and the form will be permanently deleted after 3 months.
   * @param {string} formId - The ID of the form to archive.
   * @param {Object} [_options] - Optional configuration overrides.
   * @returns {Promise<Object>} A promise resolving to the response schema:
   * {
   *   subCategory: {string}, // A specific category that contains more specific detail about the error.
   *   context: {Object},      // Context about the error condition.
   *   correlationId: {string}, // A unique identifier for the request.
   *   links: {Object},        // A map of link names to associated URIs containing documentation.
   *   message: {string},      // A human-readable message describing the error and remediation steps.
   *   category: {string},     // The error category.
   *   errors: [
   *     {
   *       subCategory: {string}, // A specific category containing more specific detail about the error.
   *       code: {string},        // The status code associated with the error detail.
   *       in: {string},          // The name of the field or parameter in which the error was found.
   *       context: {Object},     // Context about the error condition.
   *       message: {string}      // A human-readable message describing the error and remediation steps.
   *     }
   *   ]
   * }.
   * @throws {RequiredError} If the formId parameter is null or undefined.
   * @see {@link https://developers.hubspot.com/beta-docs/reference/api/marketing/forms#delete-%2Fmarketing%2Fv3%2Fforms%2F%7Bformid%7D|HubSpot Forms API Documentation}
   */
  public async archive(
    formId: string,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'formId' is not null or undefined
    if (formId === null || formId === undefined) {
      throw new RequiredError("FormsApi", "archive", "formId");
    }

    // Path Params
    const localVarPath = "/marketing/v3/forms/{formId}".replace(
      "{" + "formId" + "}",
      encodeURIComponent(String(formId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.DELETE,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["oauth2"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Create a new HubSpot form.
   * @param {Object} formDefinitionCreateRequestBase - The definition of the form to be created.
   * @param {Object} [_options] - Optional configuration overrides.
   * @returns {Promise<Object>} A promise resolving to the response schema:
   * {
   *   formType: {string}, // The type of the form.
   *   id: {string},       // The unique identifier of the form.
   *   name: {string},     // The name of the form.
   *   createdAt: {string}, // The timestamp when the form was created.
   *   updatedAt: {string}, // The timestamp when the form was last updated.
   *   archived: {boolean}, // Whether the form is archived.
   *   archivedAt: {string}, // The timestamp when the form was archived.
   *   fieldGroups: [
   *     {
   *       groupType: {string},       // The type of the field group.
   *       richTextType: {string},    // The type of rich text included.
   *       richText: {string},        // A block of rich text or an image.
   *       fields: [Object]           // The form fields included in the group.
   *     }
   *   ],
   *   configuration: {
   *     createNewContactForNewEmail: {boolean}, // Whether to create a new contact for a new email.
   *     editable: {boolean},                  // Whether the form is editable.
   *     allowLinkToResetKnownValues: {boolean}, // Whether a reset link can be added.
   *     lifecycleStages: [
   *       {
   *         objectTypeId: {string}, // The object type ID.
   *         value: {string}         // The lifecycle stage value.
   *       }
   *     ],
   *     postSubmitAction: {
   *       type: {string}, // The action to take after submission.
   *       value: {string} // The thank-you text or redirection URL.
   *     },
   *     language: {string},               // The language of the form.
   *     prePopulateKnownValues: {boolean}, // Whether known values are pre-populated.
   *     cloneable: {boolean},              // Whether the form can be cloned.
   *     notifyContactOwner: {boolean},     // Whether to notify the contact owner.
   *     recaptchaEnabled: {boolean},       // Whether CAPTCHA is enabled.
   *     archivable: {boolean}              // Whether the form can be archived.
   *   },
   *   displayOptions: {
   *     renderRawHtml: {boolean}, // Whether the form renders as raw HTML.
   *     cssClass: {string},       // The CSS class for styling.
   *     theme: {string},          // The theme for input fields.
   *     submitButtonText: {string}, // The submit button text.
   *     style: {
   *       labelTextSize: {string},          // The label text size.
   *       legalConsentTextColor: {string}, // The color of the legal consent text.
   *       fontFamily: {string},            // The font family used.
   *       legalConsentTextSize: {string},  // The size of the legal consent text.
   *       backgroundWidth: {string},       // The background width.
   *       helpTextSize: {string},          // The help text size.
   *       submitFontColor: {string},       // The submit button font color.
   *       labelTextColor: {string},        // The label text color.
   *       submitAlignment: {string},       // The alignment of the submit button.
   *       submitSize: {string},            // The size of the submit button.
   *       helpTextColor: {string},         // The help text color.
   *       submitColor: {string}            // The color of the submit button.
   *     }
   *   },
   *   legalConsentOptions: {
   *     type: {string}, // The type of legal consent options (e.g., "none").
   *     legitimateInterest: {
   *       lawfulBasis: {string}, // The lawful basis for legitimate interest.
   *       type: {string},         // The type of legitimate interest.
   *       privacyText: {string}   // The privacy text associated with the option.
   *     },
   *     explicitConsentToProcess: {
   *       communicationsCheckboxes: [
   *         {
   *           subscriptionTypeId: {number}, // The subscription type ID.
   *           label: {string},              // The main label for the form field.
   *           required: {boolean}           // Whether the checkbox is required.
   *         }
   *       ],
   *       communicationConsentText: {string}, // The consent text for communication.
   *       consentToProcessCheckboxLabel: {string}, // The label for the consent checkbox.
   *       consentToProcessFooterText: {string},    // The footer text for consent processing.
   *       type: {string},                      // The type of explicit consent.
   *       privacyText: {string},               // The privacy text.
   *       consentToProcessText: {string}       // The text for processing consent.
   *     },
   *     implicitConsentToProcess: {
   *       communicationsCheckboxes: [
   *         {
   *           subscriptionTypeId: {number}, // The subscription type ID.
   *           label: {string},              // The main label for the form field.
   *           required: {boolean}           // Whether the checkbox is required.
   *         }
   *       ],
   *       communicationConsentText: {string}, // The consent text for communication.
   *       type: {string},                      // The type of implicit consent.
   *       privacyText: {string},               // The privacy text.
   *       consentToProcessText: {string}       // The text for processing consent.
   *     }
   *   }
   * }.
   * @throws {RequiredError} If the `formDefinitionCreateRequestBase` parameter is null or undefined.
   * @see {@link https://developers.hubspot.com/beta-docs/reference/api/marketing/forms#post-%2Fmarketing%2Fv3%2Fforms%2F|HubSpot Forms API Documentation}
   */

  public async create(
    formDefinitionCreateRequestBase: FormDefinitionCreateRequestBase,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'formDefinitionCreateRequestBase' is not null or undefined
    if (
      formDefinitionCreateRequestBase === null ||
      formDefinitionCreateRequestBase === undefined
    ) {
      throw new RequiredError(
        "FormsApi",
        "create",
        "formDefinitionCreateRequestBase",
      );
    }

    // Path Params
    const localVarPath = "/marketing/v3/forms/";

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.POST,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        formDefinitionCreateRequestBase,
        "FormDefinitionCreateRequestBase",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["oauth2"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Retrieve a form definition by its ID.
   * @param {string} formId - The unique identifier of the form.
   * @param {boolean} [archived] - Whether to return only results that have been archived.
   * @param {Object} [_options] - Optional configuration overrides.
   * @returns {Promise<Object>} A promise resolving to the response schema:
   * {
   *   formType: {string}, // The type of the form.
   *   id: {string},       // The unique identifier of the form.
   *   name: {string},     // The name of the form.
   *   createdAt: {string}, // The timestamp when the form was created.
   *   updatedAt: {string}, // The timestamp when the form was last updated.
   *   archived: {boolean}, // Whether the form is archived.
   *   archivedAt: {string}, // The timestamp when the form was archived.
   *   fieldGroups: [
   *     {
   *       groupType: {string},       // The type of the field group.
   *       richTextType: {string},    // The type of rich text included.
   *       richText: {string},        // A block of rich text or an image.
   *       fields: [Object]           // The form fields included in the group.
   *     }
   *   ],
   *   configuration: {
   *     createNewContactForNewEmail: {boolean}, // Whether to create a new contact for a new email.
   *     editable: {boolean},                  // Whether the form is editable.
   *     allowLinkToResetKnownValues: {boolean}, // Whether a reset link can be added.
   *     lifecycleStages: [
   *       {
   *         objectTypeId: {string}, // The object type ID.
   *         value: {string}         // The lifecycle stage value.
   *       }
   *     ],
   *     postSubmitAction: {
   *       type: {string}, // The action to take after submission.
   *       value: {string} // The thank-you text or redirection URL.
   *     },
   *     language: {string},               // The language of the form.
   *     prePopulateKnownValues: {boolean}, // Whether known values are pre-populated.
   *     cloneable: {boolean},              // Whether the form can be cloned.
   *     notifyContactOwner: {boolean},     // Whether to notify the contact owner.
   *     recaptchaEnabled: {boolean},       // Whether CAPTCHA is enabled.
   *     archivable: {boolean}              // Whether the form can be archived.
   *   },
   *   displayOptions: {
   *     renderRawHtml: {boolean}, // Whether the form renders as raw HTML.
   *     cssClass: {string},       // The CSS class for styling.
   *     theme: {string},          // The theme for input fields.
   *     submitButtonText: {string}, // The submit button text.
   *     style: {
   *       labelTextSize: {string},          // The label text size.
   *       legalConsentTextColor: {string}, // The color of the legal consent text.
   *       fontFamily: {string},            // The font family used.
   *       legalConsentTextSize: {string},  // The size of the legal consent text.
   *       backgroundWidth: {string},       // The background width.
   *       helpTextSize: {string},          // The help text size.
   *       submitFontColor: {string},       // The submit button font color.
   *       labelTextColor: {string},        // The label text color.
   *       submitAlignment: {string},       // The alignment of the submit button.
   *       submitSize: {string},            // The size of the submit button.
   *       helpTextColor: {string},         // The help text color.
   *       submitColor: {string}            // The color of the submit button.
   *     }
   *   },
   *   legalConsentOptions: {
   *     type: {string}, // The type of legal consent options (e.g., "none").
   *     legitimateInterest: {
   *       lawfulBasis: {string}, // The lawful basis for legitimate interest.
   *       type: {string},         // The type of legitimate interest.
   *       privacyText: {string}   // The privacy text associated with the option.
   *     },
   *     explicitConsentToProcess: {
   *       communicationsCheckboxes: [
   *         {
   *           subscriptionTypeId: {number}, // The subscription type ID.
   *           label: {string},              // The main label for the form field.
   *           required: {boolean}           // Whether the checkbox is required.
   *         }
   *       ],
   *       communicationConsentText: {string}, // The consent text for communication.
   *       consentToProcessCheckboxLabel: {string}, // The label for the consent checkbox.
   *       consentToProcessFooterText: {string},    // The footer text for consent processing.
   *       type: {string},                      // The type of explicit consent.
   *       privacyText: {string},               // The privacy text.
   *       consentToProcessText: {string}       // The text for processing consent.
   *     },
   *     implicitConsentToProcess: {
   *       communicationsCheckboxes: [
   *         {
   *           subscriptionTypeId: {number}, // The subscription type ID.
   *           label: {string},              // The main label for the form field.
   *           required: {boolean}           // Whether the checkbox is required.
   *         }
   *       ],
   *       communicationConsentText: {string}, // The consent text for communication.
   *       type: {string},                      // The type of implicit consent.
   *       privacyText: {string},               // The privacy text.
   *       consentToProcessText: {string}       // The text for processing consent.
   *     }
   *   },
   *   subCategory: {string},          // A specific category detailing the error.
   *   context: {Object},              // Context about the error condition.
   *   correlationId: {string},        // A unique identifier for the request.
   *   links: {Object},                // A map of links with remediation documentation.
   *   message: {string},              // A human-readable error message.
   *   category: {string},             // The error category.
   *   errors: [
   *     {
   *       subCategory: {string},      // Specific sub-category of the error.
   *       code: {string},             // The status code for the error detail.
   *       in: {string},               // The parameter in which the error was found.
   *       context: {Object},          // Context about the error condition.
   *       message: {string}           // The human-readable error message.
   *     }
   *   ]
   * }.
   * @throws {RequiredError} If the `formId` parameter is null or undefined.
   * @see {@link https://developers.hubspot.com/beta-docs/reference/api/marketing/forms#get-%2Fmarketing%2Fv3%2Fforms%2F%7Bformid%7D|HubSpot Forms API Documentation}
   */

  public async getById(
    formId: string,
    archived?: boolean,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'formId' is not null or undefined
    if (formId === null || formId === undefined) {
      throw new RequiredError("FormsApi", "getById", "formId");
    }

    // Path Params
    const localVarPath = "/marketing/v3/forms/{formId}".replace(
      "{" + "formId" + "}",
      encodeURIComponent(String(formId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (archived !== undefined) {
      requestContext.setQueryParam(
        "archived",
        ObjectSerializer.serialize(archived, "boolean", ""),
      );
    }

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["oauth2"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Retrieve a list of forms based on search filters.
   * By default, returns the first 20 HubSpot forms.
   * @param {string} [after] - The paging cursor token for the last successfully read resource.
   * @param {number} [limit=20] - The maximum number of results to display per page.
   * @param {boolean} [archived] - Whether to return only results that have been archived.
   * @param {string[]} [formTypes] - The types of forms to include in the results.
   * @param {Object} [_options] - Optional configuration overrides.
   * @returns {Promise<Object>} A promise resolving to the response schema:
   * {
   *   paging: {
   *     next: {
   *       link: {string}, // The URL for the next page of results.
   *       after: {string} // The cursor token for the next page of results.
   *     }
   *   },
   *   results: [
   *     {
   *       formType: {string},       // The type of the form.
   *       id: {string},             // The unique identifier of the form.
   *       name: {string},           // The name of the form.
   *       createdAt: {string},      // The timestamp when the form was created.
   *       updatedAt: {string},      // The timestamp when the form was last updated.
   *       archived: {boolean},      // Whether the form is archived.
   *       archivedAt: {string},     // The timestamp when the form was archived.
   *       fieldGroups: [
   *         {
   *           groupType: {string},      // The type of the field group.
   *           richTextType: {string},   // The type of rich text included.
   *           richText: {string},       // A block of rich text or an image.
   *           fields: [Object]          // The form fields included in the group.
   *         }
   *       ],
   *       configuration: {
   *         createNewContactForNewEmail: {boolean}, // Whether to create a new contact for a new email.
   *         editable: {boolean},                  // Whether the form is editable.
   *         allowLinkToResetKnownValues: {boolean}, // Whether a reset link can be added.
   *         lifecycleStages: [
   *           {
   *             objectTypeId: {string}, // The object type ID.
   *             value: {string}         // The lifecycle stage value.
   *           }
   *         ],
   *         postSubmitAction: {
   *           type: {string}, // The action to take after submission.
   *           value: {string} // The thank-you text or redirection URL.
   *         },
   *         language: {string},               // The language of the form.
   *         prePopulateKnownValues: {boolean}, // Whether known values are pre-populated.
   *         cloneable: {boolean},              // Whether the form can be cloned.
   *         notifyContactOwner: {boolean},     // Whether to notify the contact owner.
   *         recaptchaEnabled: {boolean},       // Whether CAPTCHA is enabled.
   *         archivable: {boolean}              // Whether the form can be archived.
   *       },
   *       displayOptions: {
   *         renderRawHtml: {boolean}, // Whether the form renders as raw HTML.
   *         cssClass: {string},       // The CSS class for styling.
   *         theme: {string},          // The theme for input fields.
   *         submitButtonText: {string}, // The submit button text.
   *         style: {
   *           labelTextSize: {string},          // The label text size.
   *           legalConsentTextColor: {string}, // The color of the legal consent text.
   *           fontFamily: {string},            // The font family used.
   *           legalConsentTextSize: {string},  // The size of the legal consent text.
   *           backgroundWidth: {string},       // The background width.
   *           helpTextSize: {string},          // The help text size.
   *           submitFontColor: {string},       // The submit button font color.
   *           labelTextColor: {string},        // The label text color.
   *           submitAlignment: {string},       // The alignment of the submit button.
   *           submitSize: {string},            // The size of the submit button.
   *           helpTextColor: {string},         // The help text color.
   *           submitColor: {string}            // The color of the submit button.
   *         }
   *       },
   *       legalConsentOptions: {
   *         type: {string}, // The type of legal consent options (e.g., "none").
   *         legitimateInterest: {
   *           lawfulBasis: {string}, // The lawful basis for legitimate interest.
   *           type: {string},         // The type of legitimate interest.
   *           privacyText: {string}   // The privacy text associated with the option.
   *         },
   *         explicitConsentToProcess: {
   *           communicationsCheckboxes: [
   *             {
   *               subscriptionTypeId: {number}, // The subscription type ID.
   *               label: {string},              // The main label for the form field.
   *               required: {boolean}           // Whether the checkbox is required.
   *             }
   *           ],
   *           communicationConsentText: {string}, // The consent text for communication.
   *           consentToProcessCheckboxLabel: {string}, // The label for the consent checkbox.
   *           consentToProcessFooterText: {string},    // The footer text for consent processing.
   *           type: {string},                      // The type of explicit consent.
   *           privacyText: {string},               // The privacy text.
   *           consentToProcessText: {string}       // The text for processing consent.
   *         },
   *         implicitConsentToProcess: {
   *           communicationsCheckboxes: [
   *             {
   *               subscriptionTypeId: {number}, // The subscription type ID.
   *               label: {string},              // The main label for the form field.
   *               required: {boolean}           // Whether the checkbox is required.
   *             }
   *           ],
   *           communicationConsentText: {string}, // The consent text for communication.
   *           type: {string},                      // The type of implicit consent.
   *           privacyText: {string},               // The privacy text.
   *           consentToProcessText: {string}       // The text for processing consent.
   *         }
   *       }
   *     }
   *   ],
   *   subCategory: {string},          // A specific category detailing the error.
   *   context: {Object},              // Context about the error condition.
   *   correlationId: {string},        // A unique identifier for the request.
   *   links: {Object},                // A map of links with remediation documentation.
   *   message: {string},              // A human-readable error message.
   *   category: {string},             // The error category.
   *   errors: [
   *     {
   *       subCategory: {string},      // Specific sub-category of the error.
   *       code: {string},             // The status code for the error detail.
   *       in: {string},               // The parameter in which the error was found.
   *       context: {Object},          // Context about the error condition.
   *       message: {string}           // The human-readable error message.
   *     }
   *   ]
   * }.
   * @see {@link https://developers.hubspot.com/beta-docs/reference/api/marketing/forms#get-%2Fmarketing%2Fv3%2Fforms%2F|HubSpot Forms API Documentation}
   */
  public async getPage(
    after?: string,
    limit?: number,
    archived?: boolean,
    formTypes?: Array<"hubspot" | "captured" | "flow" | "blog_comment" | "all">,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // Path Params
    const localVarPath = "/marketing/v3/forms/";

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.GET,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Query Params
    if (after !== undefined) {
      requestContext.setQueryParam(
        "after",
        ObjectSerializer.serialize(after, "string", ""),
      );
    }

    // Query Params
    if (limit !== undefined) {
      requestContext.setQueryParam(
        "limit",
        ObjectSerializer.serialize(limit, "number", "int32"),
      );
    }

    // Query Params
    if (archived !== undefined) {
      requestContext.setQueryParam(
        "archived",
        ObjectSerializer.serialize(archived, "boolean", ""),
      );
    }

    // Query Params
    if (formTypes !== undefined) {
      requestContext.setQueryParam(
        "formTypes",
        ObjectSerializer.serialize(
          formTypes,
          "Array<'hubspot' | 'captured' | 'flow' | 'blog_comment' | 'all'>",
          "",
        ),
      );
    }

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["oauth2"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Update all fields of a HubSpot form definition.
   * @param {string} formId - The unique identifier of the form to update.
   * @param {Object} hubSpotFormDefinition - The updated HubSpot form definition.
   * @param {Object} [_options] - Optional configuration overrides.
   * @returns {Promise<Object>} A promise resolving to the request context:
   * {
   *   id: {string},             // The unique identifier of the updated form.
   *   formType: {string},       // The type of the form.
   *   name: {string},           // The name of the form.
   *   createdAt: {string},      // The timestamp when the form was created.
   *   updatedAt: {string},      // The timestamp when the form was last updated.
   *   archived: {boolean},      // Whether the form is archived.
   *   archivedAt: {string},     // The timestamp when the form was archived.
   *   fieldGroups: [
   *     {
   *       groupType: {string},      // The type of the field group.
   *       richTextType: {string},   // The type of rich text included.
   *       richText: {string},       // A block of rich text or an image.
   *       fields: [Object]          // The form fields included in the group.
   *     }
   *   ],
   *   configuration: {
   *     createNewContactForNewEmail: {boolean}, // Whether to create a new contact for a new email.
   *     editable: {boolean},                  // Whether the form is editable.
   *     allowLinkToResetKnownValues: {boolean}, // Whether a reset link can be added.
   *     lifecycleStages: [
   *       {
   *         objectTypeId: {string}, // The object type ID.
   *         value: {string}         // The lifecycle stage value.
   *       }
   *     ],
   *     postSubmitAction: {
   *       type: {string}, // The action to take after submission.
   *       value: {string} // The thank-you text or redirection URL.
   *     },
   *     language: {string},               // The language of the form.
   *     prePopulateKnownValues: {boolean}, // Whether known values are pre-populated.
   *     cloneable: {boolean},              // Whether the form can be cloned.
   *     notifyContactOwner: {boolean},     // Whether to notify the contact owner.
   *     recaptchaEnabled: {boolean},       // Whether CAPTCHA is enabled.
   *     archivable: {boolean}              // Whether the form can be archived.
   *   },
   *   displayOptions: {
   *     renderRawHtml: {boolean}, // Whether the form renders as raw HTML.
   *     cssClass: {string},       // The CSS class for styling.
   *     theme: {string},          // The theme for input fields.
   *     submitButtonText: {string}, // The submit button text.
   *     style: {
   *       labelTextSize: {string},          // The label text size.
   *       legalConsentTextColor: {string}, // The color of the legal consent text.
   *       fontFamily: {string},            // The font family used.
   *       legalConsentTextSize: {string},  // The size of the legal consent text.
   *       backgroundWidth: {string},       // The background width.
   *       helpTextSize: {string},          // The help text size.
   *       submitFontColor: {string},       // The submit button font color.
   *       labelTextColor: {string},        // The label text color.
   *       submitAlignment: {string},       // The alignment of the submit button.
   *       submitSize: {string},            // The size of the submit button.
   *       helpTextColor: {string},         // The help text color.
   *       submitColor: {string}            // The color of the submit button.
   *     }
   *   },
   *   legalConsentOptions: {
   *     type: {string}, // The type of legal consent options (e.g., "none").
   *     legitimateInterest: {
   *       lawfulBasis: {string}, // The lawful basis for legitimate interest.
   *       type: {string},         // The type of legitimate interest.
   *       privacyText: {string}   // The privacy text associated with the option.
   *     },
   *     explicitConsentToProcess: {
   *       communicationsCheckboxes: [
   *         {
   *           subscriptionTypeId: {number}, // The subscription type ID.
   *           label: {string},              // The main label for the form field.
   *           required: {boolean}           // Whether the checkbox is required.
   *         }
   *       ],
   *       communicationConsentText: {string}, // The consent text for communication.
   *       consentToProcessCheckboxLabel: {string}, // The label for the consent checkbox.
   *       consentToProcessFooterText: {string},    // The footer text for consent processing.
   *       type: {string},                      // The type of explicit consent.
   *       privacyText: {string},               // The privacy text.
   *       consentToProcessText: {string}       // The text for processing consent.
   *     },
   *     implicitConsentToProcess: {
   *       communicationsCheckboxes: [
   *         {
   *           subscriptionTypeId: {number}, // The subscription type ID.
   *           label: {string},              // The main label for the form field.
   *           required: {boolean}           // Whether the checkbox is required.
   *         }
   *       ],
   *       communicationConsentText: {string}, // The consent text for communication.
   *       type: {string},                      // The type of implicit consent.
   *       privacyText: {string},               // The privacy text.
   *       consentToProcessText: {string}       // The text for processing consent.
   *     }
   *   }
   * }.
   * @throws {RequiredError} If the `formId` or `hubSpotFormDefinition` parameter is null or undefined.
   * @see {@link https://developers.hubspot.com/beta-docs/reference/api/marketing/forms#put-%2Fmarketing%2Fv3%2Fforms%2F%7Bformid%7D|HubSpot Forms API Documentation}
   */

  public async replace(
    formId: string,
    hubSpotFormDefinition: HubSpotFormDefinition,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'formId' is not null or undefined
    if (formId === null || formId === undefined) {
      throw new RequiredError("FormsApi", "replace", "formId");
    }

    // verify required parameter 'hubSpotFormDefinition' is not null or undefined
    if (hubSpotFormDefinition === null || hubSpotFormDefinition === undefined) {
      throw new RequiredError("FormsApi", "replace", "hubSpotFormDefinition");
    }

    // Path Params
    const localVarPath = "/marketing/v3/forms/{formId}".replace(
      "{" + "formId" + "}",
      encodeURIComponent(String(formId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PUT,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        hubSpotFormDefinition,
        "HubSpotFormDefinition",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["oauth2"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }

  /**
   * Partially update a HubSpot form definition.
   * @param {string} formId - The unique identifier of the form to update.
   * @param {Object} hubSpotFormDefinitionPatchRequest - The partial updates to apply to the form definition.
   * @param {Object} [_options] - Optional configuration overrides.
   * @returns {Promise<Object>} A promise resolving to the response schema:
   * {
   *   id: {string},             // The unique identifier of the updated form.
   *   formType: {string},       // The type of the form.
   *   name: {string},           // The name of the form.
   *   createdAt: {string},      // The timestamp when the form was created.
   *   updatedAt: {string},      // The timestamp when the form was last updated.
   *   archived: {boolean},      // Whether the form is archived.
   *   archivedAt: {string},     // The timestamp when the form was archived.
   *   fieldGroups: [
   *     {
   *       groupType: {string},      // The type of the field group.
   *       richTextType: {string},   // The type of rich text included.
   *       richText: {string},       // A block of rich text or an image.
   *       fields: [Object]          // The form fields included in the group.
   *     }
   *   ],
   *   configuration: {
   *     createNewContactForNewEmail: {boolean}, // Whether to create a new contact for a new email.
   *     editable: {boolean},                  // Whether the form is editable.
   *     allowLinkToResetKnownValues: {boolean}, // Whether a reset link can be added.
   *     lifecycleStages: [
   *       {
   *         objectTypeId: {string}, // The object type ID.
   *         value: {string}         // The lifecycle stage value.
   *       }
   *     ],
   *     postSubmitAction: {
   *       type: {string}, // The action to take after submission.
   *       value: {string} // The thank-you text or redirection URL.
   *     },
   *     language: {string},               // The language of the form.
   *     prePopulateKnownValues: {boolean}, // Whether known values are pre-populated.
   *     cloneable: {boolean},              // Whether the form can be cloned.
   *     notifyContactOwner: {boolean},     // Whether to notify the contact owner.
   *     recaptchaEnabled: {boolean},       // Whether CAPTCHA is enabled.
   *     archivable: {boolean}              // Whether the form can be archived.
   *   },
   *   displayOptions: {
   *     renderRawHtml: {boolean}, // Whether the form renders as raw HTML.
   *     cssClass: {string},       // The CSS class for styling.
   *     theme: {string},          // The theme for input fields.
   *     submitButtonText: {string}, // The submit button text.
   *     style: {
   *       labelTextSize: {string},          // The label text size.
   *       legalConsentTextColor: {string}, // The color of the legal consent text.
   *       fontFamily: {string},            // The font family used.
   *       legalConsentTextSize: {string},  // The size of the legal consent text.
   *       backgroundWidth: {string},       // The background width.
   *       helpTextSize: {string},          // The help text size.
   *       submitFontColor: {string},       // The submit button font color.
   *       labelTextColor: {string},        // The label text color.
   *       submitAlignment: {string},       // The alignment of the submit button.
   *       submitSize: {string},            // The size of the submit button.
   *       helpTextColor: {string},         // The help text color.
   *       submitColor: {string}            // The color of the submit button.
   *     }
   *   },
   *   legalConsentOptions: {
   *     type: {string}, // The type of legal consent options (e.g., "none").
   *     legitimateInterest: {
   *       lawfulBasis: {string}, // The lawful basis for legitimate interest.
   *       type: {string},         // The type of legitimate interest.
   *       privacyText: {string}   // The privacy text associated with the option.
   *     },
   *     explicitConsentToProcess: {
   *       communicationsCheckboxes: [
   *         {
   *           subscriptionTypeId: {number}, // The subscription type ID.
   *           label: {string},              // The main label for the form field.
   *           required: {boolean}           // Whether the checkbox is required.
   *         }
   *       ],
   *       communicationConsentText: {string}, // The consent text for communication.
   *       consentToProcessCheckboxLabel: {string}, // The label for the consent checkbox.
   *       consentToProcessFooterText: {string},    // The footer text for consent processing.
   *       type: {string},                      // The type of explicit consent.
   *       privacyText: {string},               // The privacy text.
   *       consentToProcessText: {string}       // The text for processing consent.
   *     },
   *     implicitConsentToProcess: {
   *       communicationsCheckboxes: [
   *         {
   *           subscriptionTypeId: {number}, // The subscription type ID.
   *           label: {string},              // The main label for the form field.
   *           required: {boolean}           // Whether the checkbox is required.
   *         }
   *       ],
   *       communicationConsentText: {string}, // The consent text for communication.
   *       type: {string},                      // The type of implicit consent.
   *       privacyText: {string},               // The privacy text.
   *       consentToProcessText: {string}       // The text for processing consent.
   *     }
   *   }
   * }.
   * @throws {RequiredError} If the `formId` or `hubSpotFormDefinitionPatchRequest` parameter is null or undefined.
   * @see {@link https://developers.hubspot.com/beta-docs/reference/api/marketing/forms#patch-%2Fmarketing%2Fv3%2Fforms%2F%7Bformid%7D|HubSpot Forms API Documentation}
   */

  public async update(
    formId: string,
    hubSpotFormDefinitionPatchRequest: HubSpotFormDefinitionPatchRequest,
    _options?: Configuration,
  ): Promise<RequestContext> {
    let _config = _options || this.configuration;

    // verify required parameter 'formId' is not null or undefined
    if (formId === null || formId === undefined) {
      throw new RequiredError("FormsApi", "update", "formId");
    }

    // verify required parameter 'hubSpotFormDefinitionPatchRequest' is not null or undefined
    if (
      hubSpotFormDefinitionPatchRequest === null ||
      hubSpotFormDefinitionPatchRequest === undefined
    ) {
      throw new RequiredError(
        "FormsApi",
        "update",
        "hubSpotFormDefinitionPatchRequest",
      );
    }

    // Path Params
    const localVarPath = "/marketing/v3/forms/{formId}".replace(
      "{" + "formId" + "}",
      encodeURIComponent(String(formId)),
    );

    // Make Request Context
    const requestContext = _config.baseServer.makeRequestContext(
      localVarPath,
      HttpMethod.PATCH,
    );
    requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8");

    // Body Params
    const contentType = ObjectSerializer.getPreferredMediaType([
      "application/json",
    ]);
    requestContext.setHeaderParam("Content-Type", contentType);
    const serializedBody = ObjectSerializer.stringify(
      ObjectSerializer.serialize(
        hubSpotFormDefinitionPatchRequest,
        "HubSpotFormDefinitionPatchRequest",
        "",
      ),
      contentType,
    );
    requestContext.setBody(serializedBody);

    let authMethod: SecurityAuthentication | undefined;
    // Apply auth methods
    authMethod = _config.authMethods["oauth2"];
    if (authMethod?.applySecurityAuthentication) {
      await authMethod?.applySecurityAuthentication(requestContext);
    }

    const defaultAuth: SecurityAuthentication | undefined =
      _options?.authMethods?.default ||
      this.configuration?.authMethods?.default;
    if (defaultAuth?.applySecurityAuthentication) {
      await defaultAuth?.applySecurityAuthentication(requestContext);
    }

    return requestContext;
  }
}

export class FormsApiResponseProcessor {
  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects for a request to archive.
   * @param {Object} response - Response returned by the server for a request to archive.
   * @returns {Promise<Object>} A promise resolving to an HttpInfo object:
   * {
   *   statusCode: {number},    // The HTTP status code of the response.
   *   headers: {Object},       // The headers of the response.
   *   body: {string|Buffer},   // The raw body content of the response.
   *   parsedBody: {void|Error} // The deserialized response content.
   * }.
   * @throws {ApiException<Error>} If the response code is 0 or indicates an error.
   * @throws {ApiException} If the response code was not in [200, 299].
   */
  public async archiveWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<void>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("204", response.httpStatusCode)) {
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        undefined,
      );
    }
    if (isCodeInRange("0", response.httpStatusCode)) {
      const body: Error = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Error",
        "",
      ) as Error;
      throw new ApiException<Error>(
        response.httpStatusCode,
        "An error occurred.",
        body,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g., for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: void = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "void",
        "",
      ) as void;
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        body,
      );
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

/**
 * Unwraps the actual response sent by the server from the response context and deserializes the response content
 * to the expected objects for a "create" request.
 *
 * @param {ResponseContext} response - The response returned by the server for a "create" request.
   * @returns {Promise<Object>} A promise resolving to an HttpInfo object:
   * {
   *   statusCode: {number},          // The HTTP status code of the response.
   *   headers: {Object},             // The headers of the response.
   *   body: {string|Buffer},         // The raw body content of the response.
   *   parsedBody: {FormDefinitionBase|Error} // The deserialized response content.
   * }.
   * @t
 * @throws {ApiException<Error>} If the response code is `0` or indicates a generic error.
 * @throws {ApiException<string | Buffer | undefined>} If the response code is outside the expected range [200, 299].
 */
public async createWithHttpInfo(response: ResponseContext): Promise<HttpInfo<FormDefinitionBase>> {
    const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
    if (isCodeInRange("201", response.httpStatusCode)) {
        const body: FormDefinitionBase = ObjectSerializer.deserialize(
            ObjectSerializer.parse(await response.body.text(), contentType),
            "FormDefinitionBase", ""
        ) as FormDefinitionBase;
        return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
    }
    if (isCodeInRange("0", response.httpStatusCode)) {
        const body: Error = ObjectSerializer.deserialize(
            ObjectSerializer.parse(await response.body.text(), contentType),
            "Error", ""
        ) as Error;
        throw new ApiException<Error>(response.httpStatusCode, "An error occurred.", body, response.headers);
    }

    // Workaround for missing responses in specification, e.g., for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
        const body: FormDefinitionBase = ObjectSerializer.deserialize(
            ObjectSerializer.parse(await response.body.text(), contentType),
            "FormDefinitionBase", ""
        ) as FormDefinitionBase;
        return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
    }

    throw new ApiException<string | Buffer | undefined>(
        response.httpStatusCode,
        "Unknown API Status Code!",
        await response.getBodyAsAny(),
        response.headers
    );
}

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects for a request to getById.
   * @param {Object} response - Response returned by the server for a request to getById.
   * @returns {Promise<Object>} A promise resolving to an HttpInfo object:
   * {
   *   statusCode: {number},          // The HTTP status code of the response.
   *   headers: {Object},             // The headers of the response.
   *   body: {string|Buffer},         // The raw body content of the response.
   *   parsedBody: {FormDefinitionBase|Error} // The deserialized response content.
   * }.
   * @throws {ApiException<Error>} If the response code is 0 or indicates an error.
   * @throws {ApiException} If the response code was not in [200, 299].
   */
  public async getByIdWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<FormDefinitionBase>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: FormDefinitionBase = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FormDefinitionBase",
        "",
      ) as FormDefinitionBase;
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        body,
      );
    }
    if (isCodeInRange("0", response.httpStatusCode)) {
      const body: Error = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Error",
        "",
      ) as Error;
      throw new ApiException<Error>(
        response.httpStatusCode,
        "An error occurred.",
        body,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g., for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: FormDefinitionBase = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FormDefinitionBase",
        "",
      ) as FormDefinitionBase;
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        body,
      );
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects for getPageWithHttpInfo.
   *
   * @async
   * @param {ResponseContext} response - Response returned by the server for a request to getPage.
   * @returns {Promise<HttpInfo<CollectionResponseFormDefinitionBaseForwardPaging>>} - The deserialized HTTP information with the response body.
   * @throws {ApiException<Error>} If the response code is 0 or indicates an error.
   * @throws {ApiException<string | Buffer | undefined>} If the response status code is unknown.
   */
  public async getPageWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<CollectionResponseFormDefinitionBaseForwardPaging>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: CollectionResponseFormDefinitionBaseForwardPaging =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "CollectionResponseFormDefinitionBaseForwardPaging",
          "",
        ) as CollectionResponseFormDefinitionBaseForwardPaging;
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        body,
      );
    }
    if (isCodeInRange("0", response.httpStatusCode)) {
      const body: Error = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Error",
        "",
      ) as Error;
      throw new ApiException<Error>(
        response.httpStatusCode,
        "An error occurred.",
        body,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: CollectionResponseFormDefinitionBaseForwardPaging =
        ObjectSerializer.deserialize(
          ObjectSerializer.parse(await response.body.text(), contentType),
          "CollectionResponseFormDefinitionBaseForwardPaging",
          "",
        ) as CollectionResponseFormDefinitionBaseForwardPaging;
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        body,
      );
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects for replaceWithHttpInfo.
   *
   * @async
   * @param {ResponseContext} response - Response returned by the server for a request to replace.
   * @returns {Promise<HttpInfo<FormDefinitionBase>>} - The deserialized HTTP information with the response body.
   * @throws {ApiException<Error>} If the response code is 0 or indicates an error.
   * @throws {ApiException<string | Buffer | undefined>} If the response status code is unknown.
   */
  public async replaceWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<FormDefinitionBase>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: FormDefinitionBase = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FormDefinitionBase",
        "",
      ) as FormDefinitionBase;
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        body,
      );
    }
    if (isCodeInRange("0", response.httpStatusCode)) {
      const body: Error = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Error",
        "",
      ) as Error;
      throw new ApiException<Error>(
        response.httpStatusCode,
        "An error occurred.",
        body,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: FormDefinitionBase = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FormDefinitionBase",
        "",
      ) as FormDefinitionBase;
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        body,
      );
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }

  /**
   * Unwraps the actual response sent by the server from the response context and deserializes the response content
   * to the expected objects for updateWithHttpInfo.
   *
   * @async
   * @param {ResponseContext} response - Response returned by the server for a request to update.
   * @returns {Promise<HttpInfo<FormDefinitionBase>>} - The deserialized HTTP information with the response body.
   * @throws {ApiException<Error>} If the response code is 0 or indicates an error.
   * @throws {ApiException<string | Buffer | undefined>} If the response status code is unknown.
   */
  public async updateWithHttpInfo(
    response: ResponseContext,
  ): Promise<HttpInfo<FormDefinitionBase>> {
    const contentType = ObjectSerializer.normalizeMediaType(
      response.headers["content-type"],
    );
    if (isCodeInRange("200", response.httpStatusCode)) {
      const body: FormDefinitionBase = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FormDefinitionBase",
        "",
      ) as FormDefinitionBase;
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        body,
      );
    }
    if (isCodeInRange("0", response.httpStatusCode)) {
      const body: Error = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "Error",
        "",
      ) as Error;
      throw new ApiException<Error>(
        response.httpStatusCode,
        "An error occurred.",
        body,
        response.headers,
      );
    }

    // Work around for missing responses in specification, e.g. for petstore.yaml
    if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
      const body: FormDefinitionBase = ObjectSerializer.deserialize(
        ObjectSerializer.parse(await response.body.text(), contentType),
        "FormDefinitionBase",
        "",
      ) as FormDefinitionBase;
      return new HttpInfo(
        response.httpStatusCode,
        response.headers,
        response.body,
        body,
      );
    }

    throw new ApiException<string | Buffer | undefined>(
      response.httpStatusCode,
      "Unknown API Status Code!",
      await response.getBodyAsAny(),
      response.headers,
    );
  }
}