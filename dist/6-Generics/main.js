"use strict";
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // return resolve("abhijeet shende");
        return resolve("string a");
    }, 1000);
});
promise.then((data) => {
    let a = data.split(" ");
});
//<T,U>  -> creates intersections so return object properties can be resolved via generics
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
let a1 = {
    'name': 'abhijeet'
};
let b = {
    'age': 34
};
// console.log(merge(a1,b));
let output1 = merge(a1, b);
let output2 = merge(a1, '30'); // this should thrown error as b is a string not an object
output2.name;
function merge1(obj1, obj2) {
    return Object.assign(obj1, obj2);
}
// let output3 = merge1(a1,'string'); // as U is extending object this is now throwing mess
// console.log(output3);
function merge3(obj1, obj2) {
    return obj1[obj2];
}
console.log(merge3({ name: 'asdsad' }, 'name'));
//# sourceMappingURL=main.js.map