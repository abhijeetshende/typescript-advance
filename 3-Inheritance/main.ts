class SingleTonDesignEx {
  static instance: SingleTonDesignEx;
   static getInstance() {
    if (this.instance) {
      return this.instance;
    } else {
      this.instance = new SingleTonDesignEx();
      return this.instance;
    }
  }
  sayHello(){
    console.log('hello singleTon instance');
    
  }
}
let singletonex = SingleTonDesignEx.getInstance();
let singletonex2 = SingleTonDesignEx.getInstance();
singletonex.sayHello();
singletonex2.sayHello();