"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack() {
        this.valueList = [];
    }
    Stack.prototype.Push = function (value) {
        this.valueList.push(value);
    };
    Stack.prototype.Pop = function () {
        return this.valueList.pop();
    };
    return Stack;
}());
exports.default = Stack;
