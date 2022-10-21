"use strict";
// 1 - tipo de objeto para função com interface
function showProductDetails(product) {
    console.log(`O nome do produto é: ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponível");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true,
};
showProductDetails(shirt);
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail:`, user.email);
    if (user.role) {
        console.log(`A função do usuário é:`, user.role);
    }
    else {
        console.log(`O usuário não tem uma função`);
    }
}
const u1 = { email: "matheus@email.com", role: "Admin" };
const u2 = { email: "joão@gmail.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "Volkswagen",
    wheels: 4,
};
console.log(fusca);
let coords = {
    x: 10,
};
const matheus = {
    name: "Matheus",
    age: 30,
};
console.log(matheus);
const goku = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"],
};
console.log(goku);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12,
};
console.log(arnold);
// 7 - readonly array
let myArray = ["Maçã", "Laranja", "Banana"];
// myArray[3] = "Mamão";
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
console.log(myNumberArray);
// 9 - tuplas com readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
