class StaticExample{

    static staticCounter: number = 0;
    publicNumber : number = 0;
    constructor(){
        console.log(StaticExample.staticCounter++);
    }

    publicMethod(){
        console.log("This is a public method");
    }

    static staticMethod(){
        console.log("This is a console method");
    }

}

StaticExample.staticMethod();

let static1 = new StaticExample();

let static2 = new StaticExample();

static1.publicMethod();

