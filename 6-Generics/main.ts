let promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    // return resolve("abhijeet shende");
    return resolve("string a");
  }, 1000);
});

promise.then((data) => {
  let a = data.split(" ");
});

//<T,U>  -> creates intersections so return object properties can be resolved via generics
function merge<T, U>(obj1: T, obj2: U) {
  return { ...obj1, ...obj2 };
}

let a1 = {
  name: "abhijeet",
};
let b = {
  age: 34,
};
// console.log(merge(a1,b));
let output1 = merge(a1, b);
let output2 = merge(a1, "30"); // this should thrown error as b is a string not an object
output2.name;

function merge1<T extends object, U extends object>(obj1: T, obj2: U) {
  return Object.assign(obj1, obj2);
}

// let output3 = merge1(a1,'string'); // as U is extending object this is now throwing mess
// console.log(output3);

function merge3<T extends object, U extends keyof T>(obj1: T, obj2: U) {
  return obj1[obj2];
}
console.log(merge3({ name: "asdsad" }, "name"));

class DataStorage {
  public data: Array<any> = [];
  addItem(item: string) {
    this.data.push(item);
  }
  removeItem(item: string) {
    this.data.slice(this.data.indexOf(item), 1);
  }

  getItem() {
    return this.data;
  }
}

let datastorage1 = new DataStorage();
datastorage1.addItem('one')
datastorage1.addItem('two')
datastorage1.removeItem('one')
console.log(datastorage1.getItem());


/***
 *  datatype number showing error as 
 */

// let datastorage2 = new DataStorage();
// datastorage2.addItem(1)
// datastorage2.addItem(2)
// datastorage2.removeItem(3)
// console.log(datastorage2.getItem());


class DataStorageGeneric<T> {
  public data: Array<T> = [];
  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    this.data.slice(this.data.indexOf(item), 1);
  }

  getItem() {
    return this.data;
  }
}


let datastorageGeneric = new DataStorage();
datastorage1.addItem('one')
datastorage1.addItem('two')
datastorage1.removeItem('one')
console.log(datastorage1.getItem());


interface PartialEx {
  name:string;
  age:number;
}


function paritalExampleFn() :PartialEx{
  let a:  Partial <PartialEx> = { };   //Partial  can be used when object key at this time not fully added
  a.name = 'abhijeet';
  a.age=25;
  return a as PartialEx;
}

let n:Readonly<string[]> = ['leela','abhijeet'];
n.push('la'); // push is not allowed for readonly array

