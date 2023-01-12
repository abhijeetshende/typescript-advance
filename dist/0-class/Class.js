"use strict";
class Person {
    // name: any;
    constructor(name) {
        this.age = 39;
        this.name = name;
    }
    sayHello() {
        console.log(`hello from  ${this.name}`);
    }
}
let p1 = new Person('Abhijeet ');
console.log(p1.sayHello());
//# sourceMappingURL=Class.js.map