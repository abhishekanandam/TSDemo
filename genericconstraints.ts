interface extendConstraints{
    length: number
}

function demo<T extends extendConstraints>(arg: T){
    
    return arg.length;
}

console.log(demo("Abhishek"));