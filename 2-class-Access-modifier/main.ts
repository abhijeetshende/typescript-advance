class ClassAccessModifier {
  age: number = 39;
  name: string;
  private address ='pune';
  // name: any;
  constructor(name: string) {
    this.name = name;
  }
  sayHello() {
    console.log(`hello from  ${this.name}`);
  }
  
  public get getaddress() : string {
    return this.address;
  }
  
  public set setAddress(v : string) {
    this.address= v;
  }
  
}

class ClassReadOnlyEx {
  private readonly address ='pune';
  // name: any;
  
  public get getaddress() : string {
    return this.address;
  }
  
  // public set setAddress(v : string) {
  //   this.address= v;
  // }
  
}
let readonlyEx = new ClassReadOnlyEx();
console.log(readonlyEx.getaddress);



