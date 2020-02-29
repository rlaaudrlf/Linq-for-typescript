"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var List = /** @class */ (function () {
    function List(array) {
        if (array === void 0) { array = undefined; }
        this.array = [];
        if (array) {
            this.array = __spread(array);
        }
    }
    List.prototype.get = function (index) {
        return this.array[index];
    };
    List.prototype.Add = function (value) {
        this.array.push(value);
        return value;
    };
    List.prototype.AddRange = function (value) {
        var _a;
        (_a = this.array).push.apply(_a, __spread(value));
    };
    List.prototype.ToList = function () {
        return __spread(this.array);
    };
    List.prototype.Change = function (changer) {
        var e_1, _a;
        var result = new List();
        try {
            for (var _b = __values(this.array), _c = _b.next(); !_c.done; _c = _b.next()) {
                var value = _c.value;
                var data = changer(value);
                if (data == undefined || data == null) {
                    continue;
                }
                result.Add(data);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return result;
    };
    List.prototype.Foreach = function (on) {
        var e_2, _a;
        var index = 0;
        try {
            for (var _b = __values(this.array), _c = _b.next(); !_c.done; _c = _b.next()) {
                var value = _c.value;
                on(value, index);
                index++;
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return this;
    };
    List.prototype.Where = function (predicate, log) {
        var e_3, _a;
        if (log === void 0) { log = false; }
        var array = [];
        try {
            for (var _b = __values(this.array), _c = _b.next(); !_c.done; _c = _b.next()) {
                var value = _c.value;
                if (predicate(value)) {
                    array.push(value);
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        this.array = array;
        if (log) {
        }
        return this;
    };
    List.prototype.Sum = function (func) {
        var e_4, _a;
        var value = 0;
        try {
            for (var _b = __values(this.array), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                value += func(item);
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_4) throw e_4.error; }
        }
        return value;
    };
    List.prototype.Avg = function (func) {
        var value = this.Sum(func);
        return value / this.array.length;
    };
    List.prototype.Take = function (count) {
        if (!count) {
            return this;
        }
        var length = Math.min(count, this.array.length);
        var result = new List(this.array.slice(0, length));
        return result;
    };
    List.prototype.Count = function (to, target) {
        var e_5, _a;
        try {
            for (var _b = __values(this.array), _c = _b.next(); !_c.done; _c = _b.next()) {
                var value = _c.value;
                var count = target(value);
                to(value, count);
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_5) throw e_5.error; }
        }
        return this;
    };
    List.prototype.Sort = function (sort) {
        this.array.sort(sort);
        return this;
    };
    List.prototype.Length = function () {
        return this.array.length;
    };
    List.prototype.GroupBy = function (getKeys, getKey) {
        var e_6, _a, e_7, _b;
        var group = {};
        var keys = getKeys();
        try {
            for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
                var key = keys_1_1.value;
                group[key] = new List();
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
            }
            finally { if (e_6) throw e_6.error; }
        }
        try {
            for (var _c = __values(this.array), _d = _c.next(); !_d.done; _d = _c.next()) {
                var value = _d.value;
                var key = getKey(value);
                if (key) {
                    var list = group[key];
                    if (list) {
                        list.Add(value);
                        group[key] = list;
                    }
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
            }
            finally { if (e_7) throw e_7.error; }
        }
        var result = new List();
        for (var key in group) {
            result.Add({ key: key,
                value: group[key] });
        }
        return result;
    };
    List.prototype.ToArray = function () {
        return __spread(this.array);
    };
    return List;
}());
exports.List = List;
