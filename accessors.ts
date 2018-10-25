class example{

    private _name: string;

    get name(): string{
        return this._name;
    }

    set name(value: string){
        this._name = value;
    }
}

let exampleObj = new example();

exampleObj.name = "Abhishek";

console.log(exampleObj.name);