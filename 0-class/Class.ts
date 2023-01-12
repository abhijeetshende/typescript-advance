class Person {
    age:number = 39;
    name: string;
    // name: any;
    constructor(name:string) {
        this.name = name;
    }
    sayHello(){
        console.log(`hello from  ${this.name}`);
        
    }
}

let p1 = new Person('Abhijeet ');
console.log(p1.sayHello());


