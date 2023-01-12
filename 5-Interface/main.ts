interface Person {
  name: string;
  age: number;
  sayHello: () => void;
}

let p2: Person = {
  name: "abhijeet",
  age: 32,
  sayHello: function (): void {
    console.log("hello world");
  },
};

p2.sayHello();

class PersonEx implements Person {
  constructor(public name: string, public age: number) {}
  sayHello() {
    console.log("hello from PersonEx");
  }
}


let p3 = new PersonEx('abhijeet',35)
p3.sayHello();