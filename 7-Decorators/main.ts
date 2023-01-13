function ngComponent(template:string,id:string){

  return function(constructor:Function){
    let elem = document.querySelector(id)!;
    // elem.textContent = 'hello world';
    elem.innerHTML = template;

  }
}


function Logger(LogString: string) {
  console.log("hello Logger 1");
  return function (constructor: Function) {
    console.log("Logger Factory 2");
    console.log(LogString);
  };
}

@ngComponent('<h1>hello form decorators</h1>','body')
@Logger("hello world")
class DecoratorExample {
  constructor() {
    console.log("hello from Decorator Class 3");
  }
}

let d = new DecoratorExample();
