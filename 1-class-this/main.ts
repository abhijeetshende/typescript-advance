class ClassThis {
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

let this_ex = new ClassThis('abhijeet')
this_ex.sayHello();


