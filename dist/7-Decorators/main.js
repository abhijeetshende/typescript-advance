"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ngComponent(template, id) {
    return function (constructor) {
        let elem = document.querySelector(id);
        // elem.textContent = 'hello world';
        elem.innerHTML = template;
    };
}
function Logger(LogString) {
    console.log("hello Logger 1");
    return function (constructor) {
        console.log("Logger Factory 2");
        console.log(LogString);
    };
}
let DecoratorExample = class DecoratorExample {
    constructor() {
        console.log("hello from Decorator Class 3");
    }
};
DecoratorExample = __decorate([
    ngComponent('<h1>hello form decorators</h1>', 'body'),
    Logger("hello world")
], DecoratorExample);
let d = new DecoratorExample();
//# sourceMappingURL=main.js.map