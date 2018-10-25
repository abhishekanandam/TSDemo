function componentDecorator(options){

    return (target) =>{
        target.id = options.id;
        console.log(target);
        console.log(options);
    }
}

@componentDecorator({
    id: 123
})
class component{

    id: number;
    name: string;
    constructor(id, name){

        this.id = id;
        this.name = name;
    }

    disp(){
        console.log(this.id);
    }
}

let o = new component(1, "Abhishek");

o.disp();