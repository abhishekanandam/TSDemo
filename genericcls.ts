class KeyValuePair<TKey, TValue>{

    id: TKey;
    name: TValue;
    constructor(key: TKey, value: TValue){
        
        this.id = key;
        this.name = value;
    }

    display(){
        console.log(this.id + " : " + this.name);
    }

}

let clsObj1 = new KeyValuePair(1, "Abhishek");
let clsObj2 = new KeyValuePair(1, new Date());

clsObj1.display();
clsObj2.display();