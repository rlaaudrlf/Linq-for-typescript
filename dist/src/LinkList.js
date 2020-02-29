"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LinkList = /** @class */ (function () {
    function LinkList() {
        var _this = this;
        this.length = 0;
        this[Symbol.iterator] = function () {
            if (!_this.root) {
                return {
                    value: undefined,
                    done: true
                };
            }
            var temp = new LinkNode(_this.root.value);
            temp.next = _this.root;
            var current = temp;
            var next = function () {
                current = current === null || current === void 0 ? void 0 : current.next;
                return {
                    value: current,
                    done: current == undefined
                };
            };
            return { next: next };
        };
        // deletes (value: T) {}
    }
    LinkList.prototype.Add = function (value) {
        if (this.end) {
            this.end.Add(value);
        }
        else {
            this.root = new LinkNode(value);
            this.end = this.root;
        }
        this.length++;
    };
    LinkList.prototype.Where = function (predicate) {
        if (!this.root) {
            return undefined;
        }
        return this.root.Where(predicate);
    };
    LinkList.prototype.Find = function (value) {
        if (!this.root) {
            return undefined;
        }
        return this.root.Find(value);
    };
    LinkList.prototype.Finds = function (value) {
        var result = [];
        var current = this.root;
        while (current) {
            var finded = current.Find(value);
            if (!finded) {
                return result;
            }
            result.push(finded);
            current = finded.next;
        }
    };
    LinkList.prototype.GetEnd = function () {
        return this.end;
    };
    LinkList.prototype.Delete = function (value) {
        var _a;
        if (!this.root) {
            return undefined;
        }
        var finded = this.Find(value);
        if (finded === this.root) {
            this.root = finded.next;
        }
        else {
            var next = (_a = finded === null || finded === void 0 ? void 0 : finded.pre) === null || _a === void 0 ? void 0 : _a.next;
            next = finded === null || finded === void 0 ? void 0 : finded.next;
        }
    };
    return LinkList;
}());
exports.LinkList = LinkList;
var LinkNode = /** @class */ (function () {
    function LinkNode(value) {
        this.value = value;
    }
    LinkNode.prototype.Add = function (value) {
        var node = new LinkNode(value);
        node.pre = this;
        this.next = node;
    };
    LinkNode.prototype.Find = function (value) {
        var current = this;
        while (current) {
            if (current.value === value) {
                return current;
            }
            current = current.next;
        }
        return current;
    };
    LinkNode.prototype.Where = function (predicate) {
        var current = this;
        while (current) {
            if (predicate(current.value)) {
                return current;
            }
            current = current.next;
        }
        return current;
    };
    return LinkNode;
}());
exports.LinkNode = LinkNode;
