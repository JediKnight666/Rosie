class Bunny{
    constructor(name){
       this._name = name;
       this._hops = 0;
    }
    get name(){
        return this._name;
    }
get hops(){
    return this._hops;
}
    
}

const rosie = new Bunny ("Lizzy");

console.log(lizzy.name);