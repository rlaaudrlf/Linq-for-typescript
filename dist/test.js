"use strict";
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
var e_1, _a, e_2, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
var dic = new index_1.Dictionary();
dic.Add(1, 1);
console.log(dic[1]);
var obj = {};
dic.Add(obj, obj);
try {
    for (var dic_1 = __values(dic), dic_1_1 = dic_1.next(); !dic_1_1.done; dic_1_1 = dic_1.next()) {
        var iter_1 = dic_1_1.value;
        console.log(iter_1);
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (dic_1_1 && !dic_1_1.done && (_a = dic_1.return)) _a.call(dic_1);
    }
    finally { if (e_1) throw e_1.error; }
}
var linkList = new index_1.LinkList();
linkList.Add(1);
linkList.Add(2);
var iter = linkList[Symbol.iterator]();
try {
    // console.log(iter.next());
    for (var linkList_1 = __values(linkList), linkList_1_1 = linkList_1.next(); !linkList_1_1.done; linkList_1_1 = linkList_1.next()) {
        var value = linkList_1_1.value;
        console.log(value);
    }
}
catch (e_2_1) { e_2 = { error: e_2_1 }; }
finally {
    try {
        if (linkList_1_1 && !linkList_1_1.done && (_b = linkList_1.return)) _b.call(linkList_1);
    }
    finally { if (e_2) throw e_2.error; }
}
var stack = new index_1.Stack();
stack.Push(1);
console.log("stack:" + stack.Pop());
console.log("stack:" + stack.Pop());
var quene = new index_1.Quene();
quene.EnQuene(1);
console.log("quene:" + quene.DeQuene());
console.log("quene:" + quene.DeQuene());
// dic.Add(obj, obj);
// console.log(dic.Get(obj));
