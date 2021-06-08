/**
 * Timeline events
 * This feature allows an app to create and configure custom events that can show up in the timelines of certain CRM objects like contacts, companies, tickets, or deals. You'll find multiple use cases for this API in the sections below.
 *
 * OpenAPI spec version: v3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
var TimelineEventIFrame = (function () {
    function TimelineEventIFrame() {
    }
    TimelineEventIFrame.readonly = discriminator;
    return TimelineEventIFrame;
})();
exports.TimelineEventIFrame = TimelineEventIFrame;
string | undefined;
undefined;
readonly;
attributeTypeMap: Array < { name: string, baseName: string, type: string, format: string } > ;
[
    {
        "name": "linkLabel",
        "baseName": "linkLabel",
        "type": "string",
        "format": ""
    },
    {
        "name": "headerLabel",
        "baseName": "headerLabel",
        "type": "string",
        "format": ""
    },
    {
        "name": "url",
        "baseName": "url",
        "type": "string",
        "format": ""
    },
    {
        "name": "width",
        "baseName": "width",
        "type": "number",
        "format": "int32"
    },
    {
        "name": "height",
        "baseName": "height",
        "type": "number",
        "format": "int32"
    }];
getAttributeTypeMap();
{
    return TimelineEventIFrame.attributeTypeMap;
}
constructor();
{
}
