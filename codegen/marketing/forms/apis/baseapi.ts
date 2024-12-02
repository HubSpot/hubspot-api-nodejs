import { Configuration } from '../configuration'

/**
 * A collection of supported collection formats for API requests.
 *
 * @export
 * @constant
 * @type {{ csv: string; ssv: string; tsv: string; pipes: string }}
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 * A base class for API request factories that provides access to configuration settings.
 *
 * @export
 * @class BaseAPIRequestFactory
 */
export class BaseAPIRequestFactory {

    /**
     * Creates an instance of BaseAPIRequestFactory.
     *
     * @param {Configuration} configuration - The configuration object for the API requests.
     */
    constructor(protected configuration: Configuration) {
    }
}

/**
 * Represents an error thrown when a required parameter is missing during an API call.
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    /**
     * The name of the error.
     *
     * @type {"RequiredError"}
     */
    name: "RequiredError" = "RequiredError";

    /**
     * Creates an instance of RequiredError.
     *
     * @param {string} api - The name of the API where the error occurred.
     * @param {string} method - The name of the method where the error occurred.
     * @param {string} field - The name of the missing field causing the error.
     */
    constructor(public api: string, public method: string, public field: string) {
        super("Required parameter " + field + " was null or undefined when calling " + api + "." + method + ".");
    }
}
