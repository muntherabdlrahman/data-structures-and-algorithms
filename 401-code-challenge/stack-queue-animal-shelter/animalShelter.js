"use strict";

const Queue=require('./queue');
const Animal=require('./animal');

class AnimalShelter{
    constructor(){
        this.cat=new Queue();
        this.dog=new Queue();
    }

    enqueue(animal){
        if(animal.type==='dog'){
            this.dog.enqueue(animal);
            return this.dog;
        }else if(animal.type==='cat'){
            this.cat.enqueue(animal);
            return this.cat;
        }else{
            return 'Sorry this must be cay an dog only'; 
        }
    }

    dequeue(pref){
        if(pref.type==='dog'){
            this.dog.dequeue(pref);
        }else if(pref.type==='cat'){
            this.cat.dequeue(pref);
        }else{
            return null;
        }
    }
}

let shelter= new AnimalShelter();
let dog=new Animal('dog');
let cat=new Animal('cat');
let cat2=new Animal('cat');

shelter.enqueue(dog);
shelter.enqueue(cat);
shelter.enqueue(cat2);
shelter.dequeue(cat2);

console.log(shelter);


module.exports={
    Animal,
    AnimalShelter
}