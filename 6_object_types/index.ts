// 1 - void

function withoutReturn(): void {
  console.log("Esta função não tem retorno!");
}

withoutReturn();

// 2 - callback com argumento

function greeting(name: string): string {
  return `Olá ${name}`;
}
// função e variavel do tipo string
function preGreeting(f: (name: string) => string, userName: string) {
  console.log("Preparando a função!");
  const greet = f(userName);
  console.log(greet);
}

preGreeting(greeting, "Matheus");

// 3 - generic function
function firstElement<T>(arr: T[]): T {
  return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
console.log(firstElement([false, true, false]));

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2,
  };
}

const newObject = mergeObjects({ name: "Matheus" }, { age: "30" });

console.log(newObject);

// 4 - contraints

function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T;

  if (+a > +b) {
    biggest = a;
  } else {
    biggest = b;
  }
  return biggest;
}
console.log("O maior número é o " + biggestNumber(4, 10));
console.log("O maior número é o " + biggestNumber("5", "10"));

// 5 - especificar tipo de argumento

function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2);
}
console.log(mergeArrays<number | string>([1, 2, 3], ["a", "b", "c"]));
//^ permite concatenar diferentes tipos

// 6 - parametros opcionais
function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `Olá ${greet} ${name}`;
  }
}

console.log(modernGreeting("Matheus"));
console.log(modernGreeting("Matheus", "caro"));

// 7 - parametro default
function somaDefault(n: number, m = 10): number {
  return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(10, 20));

// 8 - unknown
function doSomething(x: unknown) {
  if (Array.isArray(x)) {
    console.log(x);
  } else if (typeof x === "number") {
    console.log("X é um número");
  }
}
doSomething([1, 2, 3]);
doSomething(5);

// 9 - never
function showErrorMessage(msg: string): never {
  throw new Error(msg);
}

//showErrorMessage("Algum erro!")

// 10 - Rest operator
// o rest (...) envia quantos parametros vierem
function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number);
  //o reduce soma todos os numeros em um array
}

console.log(sumAll(1, 2, 3, 4, 5, 6));
console.log(sumAll(5, 348, 2348));

// 11 - Destructuring como parametro
function showProductDetails({ name, price }: { name: string, price: number }):string {
  return `O nome do produto é ${name} e ele custa R$${price}`
}

const shirt = {name: "Camisa", price: 49.99 }
console.log(showProductDetails(shirt))