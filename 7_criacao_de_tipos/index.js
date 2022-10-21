"use strict";
// 1 - generics
function showData(arg) {
    return `O dado é ${arg}`;
}
console.log(showData(5));
console.log(showData("testando generic"));
console.log(showData(false));
console.log(showData(["teste"]));
// 2 - constraint em generic (o generic vai precisar possuir
//                                      o tipo em extends)
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
const otherObj = { cor: "Branca" };
console.log(showProductName(myObj));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "azul" };
const myPen = {
    name: "Caneta BIC",
    wheels: false,
    engine: false,
    color: "black",
};
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, key) {
    return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "32GB",
};
console.log(getSomeKey(server, "ram"));
console.log(getSomeKey(server, "hd"));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "Matheus",
    age: 30,
    hasDriveLicense: true,
};
console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
// 6 - typeof type operator (pega o tipo de outra variavel)
const userName = "Matheus";
const userName2 = "João";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
};
function showKm(km) {
    console.log(`O veículo tem a km de: ${km}`);
}
showKm(newTruck.km);
const someVar = 5;
const testing = "some text";
