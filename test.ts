import linq, {Dictionary, LinkList, List, Quene, Stack} from "./index";

const dic = new Dictionary();

dic.Add(1, 1);
console.log(dic[1]);
const obj = {};

dic.Add(obj, obj);

for (const iter of dic) {
    console.log(iter);
}


const linkList = new LinkList<any>();

linkList.Add(1);
linkList.Add(2);

const iter = linkList[Symbol.iterator]();

// console.log(iter.next());


for (const value of linkList) {
    console.log(value);
}


const stack = new Stack();

stack.Push(1);
console.log(`stack:${stack.Pop()}`);
console.log(`stack:${stack.Pop()}`);

const quene = new Quene();

quene.EnQuene(1);
console.log(`quene:${quene.DeQuene()}`);
console.log(`quene:${quene.DeQuene()}`);
// dic.Add(obj, obj);
// console.log(dic.Get(obj));
