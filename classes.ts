function sample(){
    this.todo = [];
}

sample.prototype.getAll = function(){
    return "prototype";
}

let sampleService = new sample();
console.log(sampleService.getAll());

class Parent{


    constructor(private todo: ToDo[]){
        this.todo = [];
    }

    getAll(){

    }
}


