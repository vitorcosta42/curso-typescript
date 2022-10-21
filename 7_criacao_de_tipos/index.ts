// 1 - generics

function showData<T>(arg: T): string {
  return `O dado é ${arg}`;
}
console.log(showData(5));
console.log(showData("testando generic"));
console.log(showData(false));
console.log(showData(["teste"]));

// 2 - constraint em generic (o generic vai precisar possuir
//                                      o tipo em extends)
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`;
}

const myObj = { name: "Porta", cor: "Branca" };
const otherObj = { cor: "Branca" };

console.log(showProductName(myObj));
// console.log(showProductName(otherObj))

// 3 - generics com interface
interface MyObject<T, U, Q> {
  name: string;
  wheels: T;
  engine: U;
  color: Q;
}

type Car = MyObject<number, number, string>;
type Pen = MyObject<boolean, boolean, string>;

const myCar: Car = { name: "Fusca", wheels: 4, engine: 1.0, color: "azul" };
const myPen: Pen = {
  name: "Caneta BIC",
  wheels: false,
  engine: false,
  color: "black",
};

console.log(myCar);
console.log(myPen);

// 4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${key} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
  hd: "2TB",
  ram: "32GB",
};

console.log(getSomeKey(server, "ram"));
console.log(getSomeKey(server, "hd"));

// 5 - keyof type operator

type Character = { name: string; age: number; hasDriveLicense: boolean };
type C = keyof Character;
function showCharName(obj: Character, key: C): string {
  return `${obj[key]}`;
}
const myChar: Character = {
  name: "Matheus",
  age: 30,
  hasDriveLicense: true,
};
console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));

// 6 - typeof type operator (pega o tipo de outra variavel)

const userName:string="Matheus"
const userName2:typeof userName = "João"
// ^ precisa ser uma string graças ao typeof

// 7 - indexed acess types

type Truck = {km:number,kg:number,description:string}

//pega só uma chave do dado, diferente do keyof que pega todas
type Km = Truck['km']

const newTruck: Truck = { 
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
}
function showKm(km:Km){
    console.log(`O veículo tem a km de: ${km}`)
}

showKm(newTruck.km)

// 8 - conditional types
interface A{}
interface B extends A {}


type myType = B extends A ? number : string
const someVar:myType=5

// 9 - template literals type
type testA = "text"
type CustomType = `some ${testA}`
const testing: CustomType = "some text"
type a1 = "tipo1"
type a2 = "tipo2"
type a3 = `${a1}` | `${a2}`
