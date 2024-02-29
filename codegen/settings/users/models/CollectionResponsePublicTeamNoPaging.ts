/**
 * Settings User Provisioning
 * Add, manage, and remove users from your account
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { PublicTeam } from '../models/PublicTeam';

export class CollectionResponsePublicTeamNoPaging {
    'results': Array<PublicTeam>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<PublicTeam>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CollectionResponsePublicTeamNoPaging.attributeTypeMap;
    }

    public constructor() {
    }
}
