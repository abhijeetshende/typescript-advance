"use strict";
class ClassAccessModifier {
    // name: any;
    constructor(name) {
        this.age = 39;
        this.address = 'pune';
        this.name = name;
    }
    sayHello() {
        console.log(`hello from  ${this.name}`);
    }
    get getaddress() {
        return this.address;
    }
    set setAddress(v) {
        this.address = v;
    }
}
class ClassReadOnlyEx {
    constructor() {
        this.address = 'pune';
        // public set setAddress(v : string) {
        //   this.address= v;
        // }
    }
    // name: any;
    get getaddress() {
        return this.address;
    }
}
let readonlyEx = new ClassReadOnlyEx();
console.log(readonlyEx.getaddress);
//# sourceMappingURL=main.js.map