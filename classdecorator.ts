function classDecorator<T extends {new (...args: any[]): {}}>(constructor: T){

    return class extends constructor{
        newProperty = "new propertry";
        hello = "overrides";
    }
}

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log(value);
        descriptor.enumerable = value;
    };
}


@classDecorator
class Greeter{
    
    property = "property";
    hello: string;
    greeting: string;
    constructor(m: string){

        this.hello = m;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }

}

let obj1 = new Greeter("world");

console.log(obj1.hello);
console.log(obj1.greet());