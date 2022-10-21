// 1 - tipo de objeto para função com interface

interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}
function showProductDetails(product: Product) {
  console.log(
    `O nome do produto é: ${product.name} e seu preço é R$${product.price}`
  );
  if (product.isAvailable) {
    console.log("O produto está disponível");
  }
}

const shirt: Product = {
  name: "Camisa",
  price: 19.99,
  isAvailable: true,
};

showProductDetails(shirt);

// 2 - propriedade opcional em interface
interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  console.log(`O usuário tem o e-mail:`, user.email);
  if (user.role) {
    console.log(`A função do usuário é:`, user.role);
  } else {
    console.log(`O usuário não tem uma função`);
  }
}

const u1: User = { email: "matheus@email.com", role: "Admin" };
const u2: User = { email: "joão@gmail.com" };
showUserDetails(u1);
showUserDetails(u2);

// 3 - readonly
interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: "Volkswagen",
  wheels: 4,
};
console.log(fusca);

// 4 - index signature
interface CoordObject {
  [index: string]: number;
}

let coords: CoordObject = {
  x: 10,
};
// index é do tipo texto(string) mas os valores
// que ele pode receber são somente númericos

// 5 - Herança (Extending types)
interface Human {
  name: string;
  age: number;
}
interface SuperHuman extends Human {
  superpowers: string[];
}
const matheus: Human = {
  name: "Matheus",
  age: 30,
};
console.log(matheus);

const goku: SuperHuman = {
  name: "Goku",
  age: 50,
  superpowers: ["Kamehameha", "Genki Dama"],
};

console.log(goku);

// 6 - intersection types
interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type CharacterWithGun = Character & Gun;

const arnold: CharacterWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12,
};

console.log(arnold);

// 7 - readonly array
let myArray: ReadonlyArray<string> = ["Maçã", "Laranja", "Banana"];
// myArray[3] = "Mamão";
console.log(myArray);

myArray.forEach((item) => {
  console.log("Fruta: " + item);
});

myArray = myArray.map((item) => {
  return `Fruta: ${item}`;
});
console.log(myArray);

// 8 - tuplas: determina um item e cada um dos elementos dele

type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];
console.log(myNumberArray)

// 9 - tuplas com readonly

function showNumbers(numbers:readonly[number,number]){
  console.log(numbers[0])
  console.log(numbers[1])
}
showNumbers([1,2])


