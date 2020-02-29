"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GUID_1 = require("./GUID");
exports.OBJ_HASH = Symbol("objHash");
var ObjectMarker = /** @class */ (function () {
    function ObjectMarker() {
    }
    ObjectMarker.MarkObject = function (obj) {
        var markedObj = obj;
        if (markedObj[exports.OBJ_HASH] == undefined) {
            markedObj[exports.OBJ_HASH] = new GUID_1.GUID().toString();
        }
        return markedObj;
    };
    ObjectMarker.IsMarkedObject = function (obj) {
        var markedObj = obj;
        return markedObj[exports.OBJ_HASH] != undefined;
    };
    return ObjectMarker;
}());
exports.ObjectMarker = ObjectMarker;
