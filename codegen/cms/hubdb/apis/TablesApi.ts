// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi';
import {Configuration} from '../configuration';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import * as FormData from "form-data";
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {isCodeInRange} from '../util';

import { CollectionResponseWithTotalHubDbTableV3ForwardPaging } from '../models/CollectionResponseWithTotalHubDbTableV3ForwardPaging';
import { HubDbTableCloneRequest } from '../models/HubDbTableCloneRequest';
import { HubDbTableV3 } from '../models/HubDbTableV3';
import { HubDbTableV3Input } from '../models/HubDbTableV3Input';
import { HubDbTableV3LiveInput } from '../models/HubDbTableV3LiveInput';
import { ImportResult } from '../models/ImportResult';

/**
 * no description
 */
export class TablesApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Archive (soft delete) an existing HubDB table. This archives both the live and draft versions.
     * Archive a table
     * @param tableIdOrName The ID or name of the table to archive.
     */
    public async archiveTable(tableIdOrName: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError('Required parameter tableIdOrName was null or undefined when calling archiveTable.');
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Clone an existing HubDB table. The `newName` and `newLabel` of the new table can be sent as JSON in the `body` parameter. This will create the cloned table as a `draft`.
     * Clone a table
     * @param tableIdOrName The ID or name of the table to clone.
     * @param hubDbTableCloneRequest JSON object with the properties newName and newLabel. You can set copyRows to false to clone the table with copying rows and default is true.
     */
    public async cloneDraftTable(tableIdOrName: string, hubDbTableCloneRequest: HubDbTableCloneRequest, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError('Required parameter tableIdOrName was null or undefined when calling cloneDraftTable.');
        }


        // verify required parameter 'hubDbTableCloneRequest' is not null or undefined
        if (hubDbTableCloneRequest === null || hubDbTableCloneRequest === undefined) {
            throw new RequiredError('Required parameter hubDbTableCloneRequest was null or undefined when calling cloneDraftTable.');
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/draft/clone'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(hubDbTableCloneRequest, "HubDbTableCloneRequest", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Creates a new draft HubDB table given a JSON schema. The table name and label should be unique for each account.
     * Create a new table
     * @param hubDbTableV3Input The JSON schema for the table being created.
     */
    public async createTable(hubDbTableV3Input: HubDbTableV3Input, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'hubDbTableV3Input' is not null or undefined
        if (hubDbTableV3Input === null || hubDbTableV3Input === undefined) {
            throw new RequiredError('Required parameter hubDbTableV3Input was null or undefined when calling createTable.');
        }


        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(hubDbTableV3Input, "HubDbTableV3Input", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Exports the `draft` version of a table to CSV / EXCEL format.
     * Export a draft table
     * @param tableIdOrName The ID or name of the table to export.
     * @param format The file format to export. Possible values include &#x60;CSV&#x60;, &#x60;XLSX&#x60;, and &#x60;XLS&#x60;.
     */
    public async exportDraftTable(tableIdOrName: string, format?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError('Required parameter tableIdOrName was null or undefined when calling exportDraftTable.');
        }



        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/draft/export'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (format !== undefined) {
            requestContext.setQueryParam("format", ObjectSerializer.serialize(format, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Exports the `live` version of a table to CSV / EXCEL format.
     * Export a published version of a table
     * @param tableIdOrName The ID or name of the table to export.
     * @param format The file format to export. Possible values include &#x60;CSV&#x60;, &#x60;XLSX&#x60;, and &#x60;XLS&#x60;.
     */
    public async exportTable(tableIdOrName: string, format?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError('Required parameter tableIdOrName was null or undefined when calling exportTable.');
        }



        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/export'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (format !== undefined) {
            requestContext.setQueryParam("format", ObjectSerializer.serialize(format, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the details for each draft table defined in the specified account, including column definitions.
     * Return all draft tables
     * @param updatedAfter Only return tables last updated after the specified time.
     * @param updatedBefore Only return tables last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param createdAt Only return tables created at exactly the specified time.
     * @param createdAfter Only return tables created after the specified time.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param archived Specifies whether to return archived tables. Defaults to &#x60;false&#x60;.
     * @param createdBefore Only return tables created before the specified time.
     * @param updatedAt Only return tables last updated at exactly the specified time.
     * @param limit The maximum number of results to return. Default is 1000.
     */
    public async getAllDraftTables(updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, createdAt?: Date, createdAfter?: Date, after?: string, archived?: boolean, createdBefore?: Date, updatedAt?: Date, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;











        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/draft';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (updatedAfter !== undefined) {
            requestContext.setQueryParam("updatedAfter", ObjectSerializer.serialize(updatedAfter, "Date", "date-time"));
        }
        if (updatedBefore !== undefined) {
            requestContext.setQueryParam("updatedBefore", ObjectSerializer.serialize(updatedBefore, "Date", "date-time"));
        }
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }
        if (createdAt !== undefined) {
            requestContext.setQueryParam("createdAt", ObjectSerializer.serialize(createdAt, "Date", "date-time"));
        }
        if (createdAfter !== undefined) {
            requestContext.setQueryParam("createdAfter", ObjectSerializer.serialize(createdAfter, "Date", "date-time"));
        }
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer.serialize(after, "string", ""));
        }
        if (archived !== undefined) {
            requestContext.setQueryParam("archived", ObjectSerializer.serialize(archived, "boolean", ""));
        }
        if (createdBefore !== undefined) {
            requestContext.setQueryParam("createdBefore", ObjectSerializer.serialize(createdBefore, "Date", "date-time"));
        }
        if (updatedAt !== undefined) {
            requestContext.setQueryParam("updatedAt", ObjectSerializer.serialize(updatedAt, "Date", "date-time"));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the details for the `live` version of each table defined in an account, including column definitions.
     * Get all live tables
     * @param updatedAfter Only return tables last updated after the specified time.
     * @param updatedBefore Only return tables last updated before the specified time.
     * @param sort Specifies which fields to use for sorting results. Valid fields are &#x60;name&#x60;, &#x60;createdAt&#x60;, &#x60;updatedAt&#x60;, &#x60;createdBy&#x60;, &#x60;updatedBy&#x60;. &#x60;createdAt&#x60; will be used by default.
     * @param createdAt Only return tables created at exactly the specified time.
     * @param createdAfter Only return tables created after the specified time.
     * @param after The cursor token value to get the next set of results. You can get this from the &#x60;paging.next.after&#x60; JSON property of a paged response containing more results.
     * @param archived Specifies whether to return archived tables. Defaults to &#x60;false&#x60;.
     * @param createdBefore Only return tables created before the specified time.
     * @param updatedAt Only return tables last updated at exactly the specified time.
     * @param limit The maximum number of results to return. Default is 1000.
     */
    public async getAllTables(updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, createdAt?: Date, createdAfter?: Date, after?: string, archived?: boolean, createdBefore?: Date, updatedAt?: Date, limit?: number, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;











        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (updatedAfter !== undefined) {
            requestContext.setQueryParam("updatedAfter", ObjectSerializer.serialize(updatedAfter, "Date", "date-time"));
        }
        if (updatedBefore !== undefined) {
            requestContext.setQueryParam("updatedBefore", ObjectSerializer.serialize(updatedBefore, "Date", "date-time"));
        }
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "Array<string>", ""));
        }
        if (createdAt !== undefined) {
            requestContext.setQueryParam("createdAt", ObjectSerializer.serialize(createdAt, "Date", "date-time"));
        }
        if (createdAfter !== undefined) {
            requestContext.setQueryParam("createdAfter", ObjectSerializer.serialize(createdAfter, "Date", "date-time"));
        }
        if (after !== undefined) {
            requestContext.setQueryParam("after", ObjectSerializer.serialize(after, "string", ""));
        }
        if (archived !== undefined) {
            requestContext.setQueryParam("archived", ObjectSerializer.serialize(archived, "boolean", ""));
        }
        if (createdBefore !== undefined) {
            requestContext.setQueryParam("createdBefore", ObjectSerializer.serialize(createdBefore, "Date", "date-time"));
        }
        if (updatedAt !== undefined) {
            requestContext.setQueryParam("updatedAt", ObjectSerializer.serialize(updatedAt, "Date", "date-time"));
        }
        if (limit !== undefined) {
            requestContext.setQueryParam("limit", ObjectSerializer.serialize(limit, "number", "int32"));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Get the details for the `draft` version of a specific HubDB table. This will include the definitions for the columns in the table and the number of rows in the table.
     * Get details for a draft table
     * @param tableIdOrName The ID or name of the table to return.
     * @param archived Set this to &#x60;true&#x60; to return an archived table. Defaults to &#x60;false&#x60;.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     */
    public async getDraftTableDetailsById(tableIdOrName: string, archived?: boolean, includeForeignIds?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError('Required parameter tableIdOrName was null or undefined when calling getDraftTableDetailsById.');
        }




        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/draft'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (archived !== undefined) {
            requestContext.setQueryParam("archived", ObjectSerializer.serialize(archived, "boolean", ""));
        }
        if (includeForeignIds !== undefined) {
            requestContext.setQueryParam("includeForeignIds", ObjectSerializer.serialize(includeForeignIds, "boolean", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Returns the details for the `live` version of the specified table. This will include the definitions for the columns in the table and the number of rows in the table. **Note:** This endpoint can be accessed without any authentication if the table is set to be allowed for public access.
     * Get details for a live table
     * @param tableIdOrName The ID or name of the table to return.
     * @param archived Set this to &#x60;true&#x60; to return details for an archived table. Defaults to &#x60;false&#x60;.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     */
    public async getTableDetails(tableIdOrName: string, archived?: boolean, includeForeignIds?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError('Required parameter tableIdOrName was null or undefined when calling getTableDetails.');
        }




        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (archived !== undefined) {
            requestContext.setQueryParam("archived", ObjectSerializer.serialize(archived, "boolean", ""));
        }
        if (includeForeignIds !== undefined) {
            requestContext.setQueryParam("includeForeignIds", ObjectSerializer.serialize(includeForeignIds, "boolean", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Import the contents of a CSV file into an existing HubDB table. The data will always be imported into the `draft` version of the table. Use `/push-live` endpoint to push these changes to `live` version. This endpoint takes a multi-part POST request. The first part will be a set of JSON-formatted options for the import and you can specify this with the name as `config`.  The second part will be the CSV file you want to import and you can specify this with the name as `file`. Refer the overview section to check the details and format of the JSON-formatted options for the import.
     * Import data into draft table
     * @param tableIdOrName The ID of the destination table where data will be imported.
     * @param file The source CSV file to be imported.
     * @param config Configuration for the import in JSON format as described above.
     */
    public async importDraftTable(tableIdOrName: string, file?: HttpFile, config?: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError('Required parameter tableIdOrName was null or undefined when calling importDraftTable.');
        }




        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/draft/import'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params
        let localVarFormParams = new FormData();

        if (file !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('file', file.data, file.name);
        }
        if (config !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('config', config as any);
        }
        requestContext.setBody(localVarFormParams);

        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Copies the data from draft to live version of the table and also publishes the live version. This will immediately push the data to the `live` version of the table and publishes the live version, meaning any website pages using data from the table will be updated.
     * Publish a table from draft
     * @param tableIdOrName The ID or name of the table to publish.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the response.
     */
    public async publishDraftTable(tableIdOrName: string, includeForeignIds?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError('Required parameter tableIdOrName was null or undefined when calling publishDraftTable.');
        }



        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/draft/push-live'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeForeignIds !== undefined) {
            requestContext.setQueryParam("includeForeignIds", ObjectSerializer.serialize(includeForeignIds, "boolean", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Replaces the data in the `draft` version of the table with values from the `live` version. Any unpublished changes in the `draft` will be lost after this call is made.
     * Reset a draft table
     * @param tableIdOrName The ID or name of the table to reset.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the response.
     */
    public async resetDraftTable(tableIdOrName: string, includeForeignIds?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError('Required parameter tableIdOrName was null or undefined when calling resetDraftTable.');
        }



        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/draft/reset'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeForeignIds !== undefined) {
            requestContext.setQueryParam("includeForeignIds", ObjectSerializer.serialize(includeForeignIds, "boolean", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Update an existing HubDB table. You can use this endpoint to add or remove columns to the table. Tables updated using the endpoint will only modify the `draft` verion of the table. Use `push-live` endpoint to push all the changes to the `live` version. **Note:** You need to include all the columns in the input when you are adding/removing/updating a column. If you do not include an already existing column in the request, it will be deleted.
     * Update an existing table
     * @param tableIdOrName The ID or name of the table to update.
     * @param hubDbTableV3Input The JSON schema for the table being updated.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     */
    public async updateDraftTable(tableIdOrName: string, hubDbTableV3Input: HubDbTableV3Input, includeForeignIds?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError('Required parameter tableIdOrName was null or undefined when calling updateDraftTable.');
        }


        // verify required parameter 'hubDbTableV3Input' is not null or undefined
        if (hubDbTableV3Input === null || hubDbTableV3Input === undefined) {
            throw new RequiredError('Required parameter hubDbTableV3Input was null or undefined when calling updateDraftTable.');
        }



        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}/draft'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (includeForeignIds !== undefined) {
            requestContext.setQueryParam("includeForeignIds", ObjectSerializer.serialize(includeForeignIds, "boolean", ""));
        }

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(hubDbTableV3Input, "HubDbTableV3Input", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Use this endpoint to perform one of the following <ul><li> Publish a live version of a table (without copying table data from draft) </li><li>Un-publish a live version of a table (Leaving the data in the live version)</li><li>Restore an archived table</li></ul>  To publish a table, send `published` property in the JSON object with the value `true`. To unpublish a table, send `published` property in the JSON object with the value `false`.  To restore an archived table, send `archived` property in the JSON object with the value `false` along with the query parameter `archived=true`. When restoring an archived table, if an active table already exists with the same `name` or `label`, you will need to change the name of the archived table when restoring it using the `name` and `label` parameters with a new name and new label. When you restore a table, the table will be restored only in the `draft` version.  Examples:  Publish live version of a table:  ```     {       \"published\": true     } ``` Unpublish live version of a table: ```     {       \"published\": false     } ``` Restore a table: (send `archived=true` in query parameters) ```     {       \"archived\": false     } ``` Restore a table with a new name: (send `archived=true` in query parameters) ```     {       \"label\": \"New Table Name\",       \"name\": \"new_table_name\",       \"archived\": false     } ```
     * Publish or unpublish a live version of a table or restore an archived table
     * @param tableIdOrName The ID or name of the table to return.
     * @param hubDbTableV3LiveInput The JSON object as described.
     * @param archived Whether to return only results that have been archived.
     * @param includeForeignIds Set this to &#x60;true&#x60; to populate foreign ID values in the result.
     */
    public async updateTable(tableIdOrName: string, hubDbTableV3LiveInput: HubDbTableV3LiveInput, archived?: boolean, includeForeignIds?: boolean, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'tableIdOrName' is not null or undefined
        if (tableIdOrName === null || tableIdOrName === undefined) {
            throw new RequiredError('Required parameter tableIdOrName was null or undefined when calling updateTable.');
        }


        // verify required parameter 'hubDbTableV3LiveInput' is not null or undefined
        if (hubDbTableV3LiveInput === null || hubDbTableV3LiveInput === undefined) {
            throw new RequiredError('Required parameter hubDbTableV3LiveInput was null or undefined when calling updateTable.');
        }




        // Path Params
        const localVarPath = '/cms/v3/hubdb/tables/{tableIdOrName}'
            .replace('{' + 'tableIdOrName' + '}', encodeURIComponent(String(tableIdOrName)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (archived !== undefined) {
            requestContext.setQueryParam("archived", ObjectSerializer.serialize(archived, "boolean", ""));
        }
        if (includeForeignIds !== undefined) {
            requestContext.setQueryParam("includeForeignIds", ObjectSerializer.serialize(includeForeignIds, "boolean", ""));
        }

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(hubDbTableV3LiveInput, "HubDbTableV3LiveInput", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = _config.authMethods["hapikey"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }
        authMethod = _config.authMethods["oauth2"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class TablesApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to archiveTable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async archiveTable(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to cloneDraftTable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async cloneDraftTable(response: ResponseContext): Promise<HubDbTableV3 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HubDbTableV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableV3", ""
            ) as HubDbTableV3;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HubDbTableV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableV3", ""
            ) as HubDbTableV3;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createTable(response: ResponseContext): Promise<HubDbTableV3 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: HubDbTableV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableV3", ""
            ) as HubDbTableV3;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HubDbTableV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableV3", ""
            ) as HubDbTableV3;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exportDraftTable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportDraftTable(response: ResponseContext): Promise<HttpFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", "binary"
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpFile", "binary"
            ) as HttpFile;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to exportTable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportTable(response: ResponseContext): Promise<HttpFile > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HttpFile = await response.getBodyAsFile() as any as HttpFile;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", "binary"
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HttpFile = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HttpFile", "binary"
            ) as HttpFile;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllDraftTables
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllDraftTables(response: ResponseContext): Promise<CollectionResponseWithTotalHubDbTableV3ForwardPaging > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponseWithTotalHubDbTableV3ForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalHubDbTableV3ForwardPaging", ""
            ) as CollectionResponseWithTotalHubDbTableV3ForwardPaging;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CollectionResponseWithTotalHubDbTableV3ForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalHubDbTableV3ForwardPaging", ""
            ) as CollectionResponseWithTotalHubDbTableV3ForwardPaging;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllTables
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllTables(response: ResponseContext): Promise<CollectionResponseWithTotalHubDbTableV3ForwardPaging > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: CollectionResponseWithTotalHubDbTableV3ForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalHubDbTableV3ForwardPaging", ""
            ) as CollectionResponseWithTotalHubDbTableV3ForwardPaging;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: CollectionResponseWithTotalHubDbTableV3ForwardPaging = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "CollectionResponseWithTotalHubDbTableV3ForwardPaging", ""
            ) as CollectionResponseWithTotalHubDbTableV3ForwardPaging;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getDraftTableDetailsById
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getDraftTableDetailsById(response: ResponseContext): Promise<HubDbTableV3 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HubDbTableV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableV3", ""
            ) as HubDbTableV3;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HubDbTableV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableV3", ""
            ) as HubDbTableV3;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTableDetails
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTableDetails(response: ResponseContext): Promise<HubDbTableV3 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HubDbTableV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableV3", ""
            ) as HubDbTableV3;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HubDbTableV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableV3", ""
            ) as HubDbTableV3;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to importDraftTable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async importDraftTable(response: ResponseContext): Promise<ImportResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ImportResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImportResult", ""
            ) as ImportResult;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ImportResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ImportResult", ""
            ) as ImportResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to publishDraftTable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async publishDraftTable(response: ResponseContext): Promise<HubDbTableV3 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HubDbTableV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableV3", ""
            ) as HubDbTableV3;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HubDbTableV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableV3", ""
            ) as HubDbTableV3;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to resetDraftTable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async resetDraftTable(response: ResponseContext): Promise<HubDbTableV3 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HubDbTableV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableV3", ""
            ) as HubDbTableV3;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HubDbTableV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableV3", ""
            ) as HubDbTableV3;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateDraftTable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateDraftTable(response: ResponseContext): Promise<HubDbTableV3 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HubDbTableV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableV3", ""
            ) as HubDbTableV3;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HubDbTableV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableV3", ""
            ) as HubDbTableV3;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updateTable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updateTable(response: ResponseContext): Promise<HubDbTableV3 > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: HubDbTableV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableV3", ""
            ) as HubDbTableV3;
            return body;
        }
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: Error = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Error", ""
            ) as Error;
            throw new ApiException<Error>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: HubDbTableV3 = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "HubDbTableV3", ""
            ) as HubDbTableV3;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
