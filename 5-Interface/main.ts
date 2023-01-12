interface Person {
  name: string;
  age: number;
  sayHello: () => void;
}

let p2:Person ={
  name: 'abhijeet',
  age: 32,
  sayHello: function (): void {
    console.log('hello world');
    
  }
}

p2.sayHello();
