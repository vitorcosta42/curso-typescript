"use strict";
// 1 - campos em classe
class User {
}
const matheus = new User();
console.log(matheus);
matheus.name = "Matheus";
console.log(matheus);
// 2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const joao = new NewUser("João", 22);
console.log(joao);
// 3 - campo readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca);
// 4 - herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, numberOfGuns) {
        super(name);
        this.numberOfGuns = numberOfGuns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer);
// 5 - métodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey Stranger!");
    }
}
const gimli = new Dwarf("Gimli");
console.log(gimli.name);
console.log(gimli.greeting());
// 6 - this
class Truck {
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhão do modelo ${this.model}, que tem ${this.hp} cavalos de potência`);
    }
}
const volvo = new Truck("Volvo", 400);
volvo.showDetails();
// 7 - getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullName() {
        return this.name + " " + this.surname;
    }
}
const person = new Person("Matheus", "Battisti");
console.log(person.name);
console.log(person.fullName);
// 8 - setter
class Coords {
    set setX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set setY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso");
    }
    get getCoords() {
        return `X: ${this.x} e Y ${this.y}`;
    }
}
const myCoords = new Coords();
myCoords.setX = 20;
myCoords.setY = 15;
console.log(myCoords.getCoords);
//blogPost herda itemTitle()
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
const myPost = new blogPost("Hello World");
console.log(myPost.itemTitle());
// 10 - override de métodos, como o nome indica,
//  o override consiste em sobrescrever um método 
//  utilizando o extends
class Base {
    someMethod() {
        console.log("alguma coisa");
    }
}
class Nova extends Base {
    someMethod() {
        console.log("testando outra coisa");
    }
}
const myObject = new Nova();
myObject.someMethod();
// 11 - visibilidade : public
class C {
    constructor() {
        // public x = 10
        this.x = 10;
    }
}
// o padrão já é public, ou seja, não é necessário
// inserí-lo antes dos parametros
const cInstance = new C();
console.log(cInstance.x);
// 12 - visibilidade: protected
class E {
    constructor() {
        this.x = 20;
    }
}
const pInstance = new E();
console.log(pInstance.p);
//propriedades protegidas só podem ser acessadas por subclasses
// exemplo: 
