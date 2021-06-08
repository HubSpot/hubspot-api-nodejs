function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./CollectionResponseSmtpApiTokenView'));
__export(require('./EmailSendStatusView'));
__export(require('./ErrorDetail'));
__export(require('./EventIdView'));
__export(require('./ModelError'));
__export(require('./NextPage'));
__export(require('./Paging'));
__export(require('./PublicSingleSendEmail'));
__export(require('./PublicSingleSendRequestEgg'));
__export(require('./SmtpApiTokenRequestEgg'));
__export(require('./SmtpApiTokenView'));
var CollectionResponseSmtpApiTokenView_2 = require('./CollectionResponseSmtpApiTokenView');
var EmailSendStatusView_2 = require('./EmailSendStatusView');
var ErrorDetail_2 = require('./ErrorDetail');
var EventIdView_2 = require('./EventIdView');
var ModelError_2 = require('./ModelError');
var NextPage_2 = require('./NextPage');
var Paging_2 = require('./Paging');
var PublicSingleSendEmail_2 = require('./PublicSingleSendEmail');
var PublicSingleSendRequestEgg_2 = require('./PublicSingleSendRequestEgg');
var SmtpApiTokenRequestEgg_2 = require('./SmtpApiTokenRequestEgg');
var SmtpApiTokenView_2 = require('./SmtpApiTokenView');
/* tslint:disable:no-unused-variable */
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var supportedMediaTypes = {
    "application/json": Infinity,
    "application/octet-stream": 0
};
var enumsMap = new Set([
    "EmailSendStatusViewSendResultEnum",
    "EmailSendStatusViewStatusEnum",
]);
var typeMap = {
    "CollectionResponseSmtpApiTokenView": CollectionResponseSmtpApiTokenView_2.CollectionResponseSmtpApiTokenView,
    "EmailSendStatusView": EmailSendStatusView_2.EmailSendStatusView,
    "ErrorDetail": ErrorDetail_2.ErrorDetail,
    "EventIdView": EventIdView_2.EventIdView,
    "ModelError": ModelError_2.ModelError,
    "NextPage": NextPage_2.NextPage,
    "Paging": Paging_2.Paging,
    "PublicSingleSendEmail": PublicSingleSendEmail_2.PublicSingleSendEmail,
    "PublicSingleSendRequestEgg": PublicSingleSendRequestEgg_2.PublicSingleSendRequestEgg,
    "SmtpApiTokenRequestEgg": SmtpApiTokenRequestEgg_2.SmtpApiTokenRequestEgg,
    "SmtpApiTokenView": SmtpApiTokenView_2.SmtpApiTokenView
};
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }
            // Check the discriminator
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType; // use the type given in the discriminator
                    }
                    else {
                        return expectedType; // discriminator did not map to a type
                    }
                }
                else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                var month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                var day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            // Get the actual type of this object
            type = this.findCorrectType(data, type);
            // get the map for the correct type.
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type, format) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            var transformedData = [];
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
            }
            return instance;
        }
    };
    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    ObjectSerializer.normalizeMediaType = function (mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    };
    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    ObjectSerializer.getPreferredMediaType = function (mediaTypes) {
        /** According to OAS 3 we should default to json */
        if (!mediaTypes) {
            return "application/json";
        }
        var normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        var selectedMediaType = undefined;
        var selectedRank = -Infinity;
        for (var _i = 0; _i < normalMediaTypes.length; _i++) {
            var mediaType = normalMediaTypes[_i];
            if (supportedMediaTypes[mediaType])
                !;
             > selectedRank;
            {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
                !;
                ;
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
        !;
    };
    /**
     * Convert data to a string according the given media type
     */
    ObjectSerializer.stringify = function (data, mediaType) {
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    };
    /**
     * Parse data from a string according to the given media type
     */
    ObjectSerializer.parse = function (rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    };
    return ObjectSerializer;
})();
exports.ObjectSerializer = ObjectSerializer;
