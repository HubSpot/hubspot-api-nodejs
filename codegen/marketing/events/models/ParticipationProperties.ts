/**
 * Marketing Events
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export class ParticipationProperties {
    'occurredAt': number;
    'attendancePercentage'?: string;
    'attendanceState': ParticipationPropertiesAttendanceStateEnum;
    'attendanceDurationSeconds'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "occurredAt",
            "baseName": "occurredAt",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "attendancePercentage",
            "baseName": "attendancePercentage",
            "type": "string",
            "format": ""
        },
        {
            "name": "attendanceState",
            "baseName": "attendanceState",
            "type": "ParticipationPropertiesAttendanceStateEnum",
            "format": ""
        },
        {
            "name": "attendanceDurationSeconds",
            "baseName": "attendanceDurationSeconds",
            "type": "number",
            "format": "int32"
        }    ];

    static getAttributeTypeMap() {
        return ParticipationProperties.attributeTypeMap;
    }

    public constructor() {
    }
}


export enum ParticipationPropertiesAttendanceStateEnum {
    Registered = 'REGISTERED',
    Attended = 'ATTENDED',
    Cancelled = 'CANCELLED',
    Empty = 'EMPTY',
    NoShow = 'NO_SHOW'
}
