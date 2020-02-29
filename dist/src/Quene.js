"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Quene = /** @class */ (function () {
    function Quene() {
        this.valueList = [];
    }
    Quene.prototype.EnQuene = function (value) {
        this.valueList.unshift(value);
    };
    Quene.prototype.DeQuene = function () {
        return this.valueList.shift();
    };
    return Quene;
}());
exports.default = Quene;
