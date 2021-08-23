"use strict";

const { Animal, AnimalShelter } = require("../animalShelter");

describe("animal shelter", () => {
  test("enqueue dog", () => {
    let shelter = new AnimalShelter();
    let dog = new Animal("dog");

    shelter.enqueue(dog);
    expect(shelter.dog.pushStack.length).toEqual(1);
  });

  test('dequeue dog',()=>{
    let shelter = new AnimalShelter();
    let dog = new Animal("dog");
    let dog2 = new Animal("dog");
    shelter.enqueue(dog);
    shelter.enqueue(dog2);
    
    shelter.dequeue(dog2);
    expect(shelter.dog.popStack.length).toEqual(1);
  });

  test('enqueue cat',()=>{
    let shelter = new AnimalShelter();
    let cat = new Animal("cat");

    shelter.enqueue(cat);

    expect(shelter.cat.pushStack.length).toEqual(1);
  });

  test('dequeue cat',()=>{
    let shelter = new AnimalShelter();
    let cat = new Animal("cat");
    let cat1 = new Animal("cat");

    shelter.enqueue(cat);
    shelter.enqueue(cat1);
    shelter.dequeue(cat1);

    expect(shelter.cat.popStack.length).toEqual(1);
  });

  test(' enqueue not cat or dog',()=>{
    let shelter = new AnimalShelter();
    let lizerd = new Animal("lizerd");
    
    expect(shelter.enqueue(lizerd)).toEqual('Sorry this must be cay an dog only');
  });

  test(' dequeue not cat or dog',()=>{
    let shelter = new AnimalShelter();
    let lizerd = new Animal("lizerd");
    
    expect(shelter.dequeue(lizerd)).toEqual(null);
  });
});