class ParentClass{

    private  _name:string;    
    protected city: string;
    constructor(city){
        this.city = city;
    }

    display(){
        console.log("parent class");
    }
}

class ChildClass extends ParentClass{

    constructor(city: string){
        super(city);        
    }

    display(){
        
        super.display();
    }

}

let childObj = new ChildClass("Bangalore");

childObj.display();
