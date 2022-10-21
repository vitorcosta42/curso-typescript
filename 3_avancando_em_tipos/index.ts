// 1 - arrays

let numbers: number[] = [1, 2, 3];
numbers.push(5);
const x = 2;
console.log(`No índice ${x} o valor é `, numbers[x]);

// numbers = "teste"

const nomes: string[] = ["Matheus", "João"];

// nomes.push(4)

// 5 - retorno de função
function greeting(name: string): string {
  return `Olá ${name}`;
}
console.log(greeting("Matheus"));

// 6 - função anonima
setTimeout(function () {
  const salary: number = 1000;
  //console.log(parseFloat(salary));
  // console.log(salary);
}, 2000);

// 7 - tipos de objeto
function passCoordinates(coord: { x: number; y: number }) {
  console.log("X coordinates: " + coord.x);
  console.log("Y coordinates: " + coord.y);
}

const objCoord = { x: 329, y: 82.4 };

passCoordinates(objCoord);

const pessoaObj: { nome: string; surname: string } = {
  nome: "Matheus",
  surname: "Battisti",
};

// 8 - props opcionais
function showNumbers(a: number, b: number, c?: number) {
  console.log("A:", a);
  console.log("B:", b);
  console.log("C:", c);
}
showNumbers(1, 2, 3);
showNumbers(4, 5);

// 9 - validando argumento opcional

function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Olá, ${firstName} ${lastName}, tudo bem?`;
  }
  return `Olá, ${firstName}, tudo bem?`;
}

console.log(advancedGreeting("Matheus", "Battisti"));
console.log(advancedGreeting("Joaquim"));

// 10 - union type
function showBalance(balance: string | number) {
  console.log(`O saldo da conta é R$${balance}`);
}

showBalance(100);
showBalance("500");
//showBalance(true)

// 11 - avancando em union types
function showUserRole(role: boolean | string) {
  if (typeof role === "boolean") {
    return "Usuário não aprovado!";
  }
  return `A função do usuário é ${role}`;
}

showUserRole(false);
showUserRole("Admin");

// 12 - type alias
type ID = string | number;

function showId(id: ID) {
  console.log(`O ID é ${id}`);
}

showId(1);
showId("200");

// 13 - interface
interface Point {
  x: number;
  y: number;
  z: number;
}

function showCoords(obj: Point) {
  console.log(`X: ${obj.x}, Y: ${obj.y}, Z: ${obj.z}`);
}

const coordObj: Point = {
  x: 10,
  y: 15,
  z: 20,
};

showCoords(coordObj);

// 14 - interface x type alias

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const somePerson: Person = { name: "Matheus", age: 30 };
console.log(somePerson);

// -----------------

type personType = { name: string };

// type personType = {
//     age: number
// }
//o union type não pode
//receber novos parametros depois de instanciado

// 15 - literal types

function showDirection(direction: "left" | "right"){
    console.log(`A direção é: ${direction}`)
}

showDirection("left")

//16 - non null assertion operators
const p = document.getElementById("some-p")
console.log(p!.innerText)

//17 - bigint

let n: bigint

// n = 1

n = 1000n

console.log(n)

// 18 - symbol

let symbolA:symbol = Symbol("a")
let symbolB = Symbol("a")
console.log(symbolA==symbolB)
console.log(symbolA===symbolB)
