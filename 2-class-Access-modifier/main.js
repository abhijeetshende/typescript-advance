var ClassAccessModifier = /** @class */ (function () {
    // name: any;
    function ClassAccessModifier(name) {
        this.age = 39;
        this.address = 'pune';
        this.name = name;
    }
    ClassAccessModifier.prototype.sayHello = function () {
        console.log("hello from  ".concat(this.name));
    };
    Object.defineProperty(ClassAccessModifier.prototype, "getaddress", {
        get: function () {
            return this.address;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClassAccessModifier.prototype, "setAddress", {
        set: function (v) {
            this.address = v;
        },
        enumerable: false,
        configurable: true
    });
    return ClassAccessModifier;
}());
var access_modifer_object = new ClassAccessModifier("abhijeet");
console.log(access_modifer_object.age); //39
access_modifer_object.age = 45;
console.log(access_modifer_object.age); //45 age can be modified easily as default access modifier is public
// console.log(access_modifer_object.address); // error cannot be accessed without getter 
access_modifer_object.setAddress = 'india';
console.log(access_modifer_object.getaddress);
