"use strict";
// 1 - arrays
let numbers = [1, 2, 3];
numbers.push(5);
const x = 2;
console.log(`No índice ${x} o valor é `, numbers[x]);
// numbers = "teste"
const nomes = ["Matheus", "João"];
// nomes.push(4)
// 5 - retorno de função
function greeting(name) {
    return `Olá ${name}`;
}
console.log(greeting("Matheus"));
// 6 - função anonima
setTimeout(function () {
    const salary = 1000;
    //console.log(parseFloat(salary));
    // console.log(salary);
}, 2000);
// 7 - tipos de objeto
function passCoordinates(coord) {
    console.log("X coordinates: " + coord.x);
    console.log("Y coordinates: " + coord.y);
}
const objCoord = { x: 329, y: 82.4 };
passCoordinates(objCoord);
const pessoaObj = {
    nome: "Matheus",
    surname: "Battisti",
};
// 8 - props opcionais
function showNumbers(a, b, c) {
    console.log("A:", a);
    console.log("B:", b);
    console.log("C:", c);
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// 9 - validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`;
    }
    return `Olá, ${firstName}, tudo bem?`;
}
console.log(advancedGreeting("Matheus", "Battisti"));
console.log(advancedGreeting("Joaquim"));
// 10 - union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
showBalance(100);
showBalance("500");
//showBalance(true)
// 11 - avancando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return `A função do usuário é ${role}`;
}
showUserRole(false);
showUserRole("Admin");
function showId(id) {
    console.log(`O ID é ${id}`);
}
showId(1);
showId("200");
function showCoords(obj) {
    console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`);
}
const coordObj = {
    x: 10,
    y: 15,
    z: 20,
};
showCoords(coordObj);
const somePerson = { name: "Matheus", age: 30 };
console.log(somePerson);
// type personType = {
//     age: number
// }
//o union type não pode
//receber novos parametros depois de instanciado
// 15 - literal types
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("left");
//16 - non null assertion operators
const p = document.getElementById("some-p");
console.log(p.innerText);
//17 - bigint
let n;
// n = 1
n = 1000n;
console.log(n);
// 18 - symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
