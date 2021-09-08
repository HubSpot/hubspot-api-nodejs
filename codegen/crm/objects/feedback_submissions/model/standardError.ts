/**
 * Feedback Submissions
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { ErrorCategory } from './errorCategory';
import { ErrorDetail } from './errorDetail';

export class StandardError {
    'status': string;
    'id'?: string;
    'category': ErrorCategory;
    'subCategory'?: object;
    'message': string;
    'errors': Array<ErrorDetail>;
    'context': { [key: string]: Array<string>; };
    'links': { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "ErrorCategory"
        },
        {
            "name": "subCategory",
            "baseName": "subCategory",
            "type": "object"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<ErrorDetail>"
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "{ [key: string]: Array<string>; }"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return StandardError.attributeTypeMap;
    }
}

