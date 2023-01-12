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
let access_modifer_object = new ClassAccessModifier("abhijeet");
console.log(access_modifer_object.age); //39
access_modifer_object.age = 45;
console.log(access_modifer_object.age); //45 age can be modified easily as default access modifier is public
// console.log(access_modifer_object.address); // error cannot be accessed without getter 
access_modifer_object.setAddress = 'india';
console.log(access_modifer_object.getaddress);
//# sourceMappingURL=main.js.map