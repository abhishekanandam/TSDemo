export class exClass{

    id: number;
    name: string;

    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    display(){
        return this.id + " " + this.name;
    }
}