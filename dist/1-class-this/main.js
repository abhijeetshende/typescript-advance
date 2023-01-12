"use strict";
class ClassThis {
    // name: any;
    constructor(name) {
        this.age = 39;
        this.name = name;
    }
    sayHello() {
        console.log(`hello from  ${this.name}`);
    }
}
let this_ex = new ClassThis('abhijeet');
this_ex.sayHello();
//# sourceMappingURL=main.js.map