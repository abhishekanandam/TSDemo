interface ToDo{
    name: string,
    completed: boolean
}

var toDo : ToDo = {
    name: "Abc",
    completed: false
};

console.log(toDo);

interface jquery{
    (selector: string): HTMLElement;
    version: number;
}

let $ = <jquery>function(selector){

}

$.version = 1;
