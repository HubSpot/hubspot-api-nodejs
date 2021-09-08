/**
 * URL redirects
 * URL redirect operations
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export class UrlMappingCreateRequestBody {
    'routePrefix': string;
    'destination': string;
    'redirectStyle': number;
    'precedence'?: number;
    'isOnlyAfterNotFound'?: boolean;
    'isMatchFullUrl'?: boolean;
    'isMatchQueryString'?: boolean;
    'isPattern'?: boolean;
    'isTrailingSlashOptional'?: boolean;
    'isProtocolAgnostic'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "routePrefix",
            "baseName": "routePrefix",
            "type": "string"
        },
        {
            "name": "destination",
            "baseName": "destination",
            "type": "string"
        },
        {
            "name": "redirectStyle",
            "baseName": "redirectStyle",
            "type": "number"
        },
        {
            "name": "precedence",
            "baseName": "precedence",
            "type": "number"
        },
        {
            "name": "isOnlyAfterNotFound",
            "baseName": "isOnlyAfterNotFound",
            "type": "boolean"
        },
        {
            "name": "isMatchFullUrl",
            "baseName": "isMatchFullUrl",
            "type": "boolean"
        },
        {
            "name": "isMatchQueryString",
            "baseName": "isMatchQueryString",
            "type": "boolean"
        },
        {
            "name": "isPattern",
            "baseName": "isPattern",
            "type": "boolean"
        },
        {
            "name": "isTrailingSlashOptional",
            "baseName": "isTrailingSlashOptional",
            "type": "boolean"
        },
        {
            "name": "isProtocolAgnostic",
            "baseName": "isProtocolAgnostic",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return UrlMappingCreateRequestBody.attributeTypeMap;
    }
}

