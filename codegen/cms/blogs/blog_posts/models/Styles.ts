/**
 * Blog Post endpoints
 * Use these endpoints for interacting with Blog Posts, Blog Authors, and Blog Tags
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BackgroundImage } from '../models/BackgroundImage';
import { Gradient } from '../models/Gradient';
import { RGBAColor } from '../models/RGBAColor';

export class Styles {
    'verticalAlignment': string;
    'backgroundColor': RGBAColor;
    'backgroundImage': BackgroundImage;
    'backgroundGradient': Gradient;
    'maxWidthSectionCentering': number;
    'forceFullWidthSection': boolean;
    'flexboxPositioning': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "verticalAlignment",
            "baseName": "verticalAlignment",
            "type": "string",
            "format": ""
        },
        {
            "name": "backgroundColor",
            "baseName": "backgroundColor",
            "type": "RGBAColor",
            "format": ""
        },
        {
            "name": "backgroundImage",
            "baseName": "backgroundImage",
            "type": "BackgroundImage",
            "format": ""
        },
        {
            "name": "backgroundGradient",
            "baseName": "backgroundGradient",
            "type": "Gradient",
            "format": ""
        },
        {
            "name": "maxWidthSectionCentering",
            "baseName": "maxWidthSectionCentering",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "forceFullWidthSection",
            "baseName": "forceFullWidthSection",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "flexboxPositioning",
            "baseName": "flexboxPositioning",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Styles.attributeTypeMap;
    }

    public constructor() {
    }
}

