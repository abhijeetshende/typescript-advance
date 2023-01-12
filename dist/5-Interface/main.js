"use strict";
let p2 = {
    name: "abhijeet",
    age: 32,
    sayHello: function () {
        console.log("hello world");
    },
};
p2.sayHello();
class PersonEx {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log("hello from PersonEx");
    }
}
let p3 = new PersonEx('abhijeet', 35);
p3.sayHello();
//# sourceMappingURL=main.js.map