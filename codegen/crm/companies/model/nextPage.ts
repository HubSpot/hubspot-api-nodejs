/**
 * Companies
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

export class NextPage {
    'after': string;
    'link'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "after",
            "baseName": "after",
            "type": "string"
        },
        {
            "name": "link",
            "baseName": "link",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return NextPage.attributeTypeMap;
    }
}

