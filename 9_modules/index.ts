// 1 - importação de arquivos

import importGreet from "./greet";
importGreet();

//2 - importação de variáveis

import { x } from "./variable";
console.log(x);

//3 - multiplas importações
import { a, b, myFunction } from "./multiple";
console.log(a);
console.log(b);
myFunction();

//4 - alias para importações (facilitar importações)
import { someName as name } from "./changename";
// o "as" é o alias
console.log(name);

// 5 - import all *
import * as myNumbers from "./numbers";
// o asterisco precisa de um alias para importar
console.log(myNumbers);

// 6 - importando tipos
import { Human } from "./mytype";

class User implements Human {
  name;
  age;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const joao = new User("João", 25);
console.log(joao);
