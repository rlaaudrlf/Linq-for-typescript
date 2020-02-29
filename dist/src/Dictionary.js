"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectMarker_1 = require("./ObjectMarker");
var Dictionary = /** @class */ (function () {
    function Dictionary() {
        var _this = this;
        this.keys = [];
        this.values = [];
        this[Symbol.iterator] = function () {
            var index = 0;
            var next = function () {
                if (index >= _this.keys.length) {
                    return {
                        done: true
                    };
                }
                var key = _this.keys[index++];
                return {
                    value: new KeyValuePair(key, _this.Get(key)),
                    done: false
                };
            };
            return { next: next };
        };
    }
    Dictionary.prototype.Add = function (key, value) {
        if (key == null || key == undefined) {
            return;
        }
        var strKey;
        if (typeof key == "object") {
            var obj = ObjectMarker_1.ObjectMarker.MarkObject(key);
            strKey = obj[ObjectMarker_1.OBJ_HASH];
        }
        else {
            strKey = key.toString();
        }
        this[strKey] = value;
        this.keys.push(key);
        this.values.push(value);
    };
    Dictionary.prototype.getKeyStr = function (key) {
        if (typeof key == "object") {
            if (ObjectMarker_1.ObjectMarker.IsMarkedObject(key)) {
                return key[ObjectMarker_1.OBJ_HASH];
            }
            var obj = ObjectMarker_1.ObjectMarker.MarkObject(key);
            return obj[ObjectMarker_1.OBJ_HASH];
        }
        return key.toString();
    };
    Dictionary.prototype.Get = function (key) {
        var strKey = this.getKeyStr(key);
        return this[strKey];
    };
    Dictionary.prototype.Remove = function (key) {
        if (key == null || key == undefined) {
            return;
        }
        var strKey = this.getKeyStr(key);
        if (this[strKey] == undefined) {
            return;
        }
        delete this[strKey];
        var index = this.keys.indexOf(key, 0);
        if (index >= 0 && index < this.keys.length) {
            this.keys.splice(index, 1);
            this.values.splice(index, 1);
        }
    };
    Dictionary.prototype.Keys = function () {
        return this.keys.slice();
    };
    Dictionary.prototype.Values = function () {
        return this.values.slice();
    };
    Dictionary.prototype.ContainsKey = function (key) {
        var strKey = this.getKeyStr(key);
        return this[strKey] != undefined;
    };
    Dictionary.prototype.ToList = function () {
        var result = [];
        for (var index = 0; index < this.keys.length; index++) {
            var key = this.keys[index];
            var value = this.values[index];
            var keyValuePair = new KeyValuePair(key, value);
            result.push(keyValuePair);
        }
        return result;
    };
    return Dictionary;
}());
exports.Dictionary = Dictionary;
var KeyValuePair = /** @class */ (function () {
    function KeyValuePair(key, value) {
        this.key = key;
        this.value = value;
    }
    return KeyValuePair;
}());
exports.KeyValuePair = KeyValuePair;
