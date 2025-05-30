/**
 * Cms Content Audit
 * Use this endpoint to query audit logs of CMS changes that occurred on your HubSpot account.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Paging } from '../models/Paging';
import { PublicAuditLog } from '../models/PublicAuditLog';

/**
* The collection of audit logs.
*/
export class CollectionResponsePublicAuditLog {
    'paging'?: Paging;
    /**
    * 
    */
    'results': Array<PublicAuditLog>;

    static readonly discriminator: string | undefined = undefined;

    static readonly mapping: {[index: string]: string} | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "paging",
            "baseName": "paging",
            "type": "Paging",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<PublicAuditLog>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponsePublicAuditLog.attributeTypeMap;
    }

    public constructor() {
    }
}
