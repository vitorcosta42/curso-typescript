"use strict";
// 1 - type guard
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível realizar a soma!");
    }
}
sum("4", "59");
sum(12, 45);
sum("5", 6);
// 2 - checando se valor existe
function operations(arr, operation) {
    if (operation === "sum") {
        const sum = arr.reduce((i, total) => i + total);
        console.log(sum);
    }
    else if (operation === "multiply") {
        const multiply = arr.reduce((i, total) => i * total);
        console.log(multiply);
    }
    else {
        console.log("Por favor, defina uma operação");
    }
}
operations([1, 2, 5]);
operations([1, 2, 10], "sum");
operations([1, 2, 10], "multiply");
// 3 - instance of
class User {
    constructor(name) {
        this.name = name;
    }
}
class SuperUser extends User {
    constructor(name) {
        super(name);
    }
}
const jhon = new User("Jhon");
const paul = new SuperUser("Paul");
console.log(jhon);
console.log(paul);
function userGreeting(user) {
    if (user instanceof SuperUser) {
        console.log(`Olá ${user.name}, você é um super usuário.`);
    }
    else if (user instanceof User) {
        console.log(`Olá ${user.name}, você é um usuário comum`);
    }
}
userGreeting(jhon);
userGreeting(paul);
// 4 - operador in
class Dog {
    constructor(name, breed) {
        this.name = name;
        if (breed) {
            this.breed = breed;
        }
    }
}
const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemão");
function showDogDetails(dog) {
    if ("breed" in dog) {
        console.log(dog.name, `é da raça ${dog.breed}.`);
    }
    else {
        console.log(dog.name, "é um SRD/vira-lata.");
    }
}
showDogDetails(turca);
showDogDetails(bob);
