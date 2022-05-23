import { Singleton } from "./singleton";

console.log("start");
const obj1 = Singleton.instance;
const obj2 = Singleton.instance;

console.log(obj1 === obj2 ? "同じインスタンスです" : "違うインスタンスです");
console.log("end");
