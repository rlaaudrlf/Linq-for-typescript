"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GUID = /** @class */ (function () {
    function GUID() {
        this.str = GUID.getNewGUIDString();
    }
    GUID.prototype.toString = function () {
        return this.str;
    };
    GUID.prototype.set = function (str) {
        this.str = str;
    };
    GUID.getNewGUIDString = function () {
        var currentDateMilliseconds = new Date().getTime();
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (currentChar) {
            var randomChar = (currentDateMilliseconds + Math.random() * 16) % 16 | 0;
            currentDateMilliseconds = Math.floor(currentDateMilliseconds / 16);
            return (currentChar === "x" ? randomChar : (randomChar & 0x7 | 0x8)).toString(16);
        });
        //   let d = new Date().getTime();
        //   if (globalThis.performance && typeof globalThis.performance.now === "function") {
        //     d += performance.now(); // use high-precision timer if available
        //   }
        //   return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
        //     const r = (d + Math.random() * 16) % 16 | 0;
        //     d = Math.floor(d / 16);
        //     return (c == "x" ? r : (r & 0x3 | 0x8)).toString(16);
        //   });
    };
    return GUID;
}());
exports.GUID = GUID;
