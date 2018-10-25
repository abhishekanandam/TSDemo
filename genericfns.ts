function genericsExample<T>(arg: T): T{
    return arg;
}

console.log(genericsExample<number>(10));

console.log(genericsExample<string>("Generics Example"));

interface ToDoDemo{
    name: string;
}

var toDoDemo : ToDoDemo = {
    name: "Abhishek"
}

console.log(genericsExample(toDoDemo));