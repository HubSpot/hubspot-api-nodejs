/**
 * Represents an error caused by an API call, including attributes for an HTTP status code,
 * the returned body object, and the response headers.
 *
 * Example:
 * If the API returns an error message object when the HTTP status code is not in [200, 299]:
 * => new ApiException(404, "Not Found", someErrorMessageObject, { "Content-Type": "application/json" })
 *
 * @template T - The type of the response body.
 * @extends {Error}
 */
export class ApiException<T> extends Error {
    /**
     * Creates an instance of ApiException.
     *
     * @param {number} code - The HTTP status code of the response.
     * @param {string} message - A descriptive message for the error.
     * @param {T} body - The response body object returned by the API.
     * @param {{ [key: string]: string }} headers - The headers returned in the API response.
     */
    public constructor(
        public code: number,
        message: string,
        public body: T,
        public headers: { [key: string]: string }
    ) {
        super(
            "HTTP-Code: " + code +
            "\nMessage: " + message +
            "\nBody: " + JSON.stringify(body) +
            "\nHeaders: " + JSON.stringify(headers)
        );
    }
}
