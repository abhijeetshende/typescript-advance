"use strict";
class SingleTonDesignEx {
    constructor() { }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new SingleTonDesignEx();
            return this.instance;
        }
    }
    sayHello() {
        console.log('hello singleTon instance');
    }
}
let singletonex = SingleTonDesignEx.getInstance();
let singletonex2 = SingleTonDesignEx.getInstance();
// let singletonex3 = new SingleTonDesignEx(); // to disable new use private with constructor
singletonex.sayHello();
singletonex2.sayHello();
// singletonex3.sayHello();
//# sourceMappingURL=main.js.map