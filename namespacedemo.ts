namespace toDoModel1{

    export interface i1{
        id: number;
        name: string
    }
}

namespace toDoModel2{

    export enum e1{
        new=1
    }
}

namespace dataAccess{

    import model1 = toDoModel1;
    export interface d1{

        get(t1: model1.i1):model1.i1;
    }
}

class demoClass implements dataAccess.d1{

    id: number;
    name: string;

    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    get(this){
        return this;
    }
}

let obj = new demoClass(1, "Abhishek");

console.log(obj.get());