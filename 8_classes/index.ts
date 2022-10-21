// 1 - campos em classe

class User {
  name!: string;
  age!: number;
}

const matheus = new User();

console.log(matheus);

matheus.name = "Matheus";

console.log(matheus);

// 2 - constructor
class NewUser {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const joao = new NewUser("João", 22);
console.log(joao);

// 3 - campo readonly

class Car {
  name;
  readonly wheels = 4;

  constructor(name: string) {
    this.name = name;
  }
}

const fusca = new Car("Fusca");

console.log(fusca);

// 4 - herança e super

class Machine {
  name;
  constructor(name: string) {
    this.name = name;
  }
}
const trator = new Machine("Trator");

class KillerMachine extends Machine {
  numberOfGuns;
  constructor(name: string, numberOfGuns: number) {
    super(name);
    this.numberOfGuns = numberOfGuns;
  }
}
const destroyer = new KillerMachine("Destroyer", 4);

console.log(trator);
console.log(destroyer);

// 5 - métodos
class Dwarf {
  name;
  constructor(name: string) {
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
  model;
  hp;

  constructor(model: string, hp: number) {
    this.model = model;
    this.hp = hp;
  }
  showDetails() {
    console.log(
      `Caminhão do modelo ${this.model}, que tem ${this.hp} cavalos de potência`
    );
  }
}

const volvo = new Truck("Volvo", 400);

volvo.showDetails();

// 7 - getters
class Person {
  name;
  surname;
  constructor(name: string, surname: string) {
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
  x!: number;
  y!: number;
  set setX(x: number) {
    if (x === 0) {
      return;
    }
    this.x = x;
    console.log("X inserido com sucesso");
  }
  set setY(y: number) {
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

// 9 - implements (herança de classes)
interface showTitle {
  itemTitle(): string;
}

//blogPost herda itemTitle()
class blogPost implements showTitle {
  title;

  constructor(title: string) {
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
  // public x = 10
    x = 10
}
// o padrão já é public, ou seja, não é necessário
// inserí-lo antes dos parametros
const cInstance = new C()
console.log(cInstance.x)

// 12 - visibilidade: protected
class E {
  protected x = 20
  showProtectedX(){
    console.log("X: " + this.x)
  }
  }
  class F extends E {
    showProtectedX(): void {
        console.log("X: " + this.x)
    }    
  }
const eInstance = new E()
const fInstance = new F()
  
eInstance.showProtectedX()
fInstance.showProtectedX()
//propriedades protegidas só podem ser acessadas por subclasses
//e  pela própria classe 

// 13 - visibilidade: private

class PrivateClass { 
  private name = "Private"
  showName(){
    return this.name
  }
}

// propriedades privadas só podem ser acessadas pela própria classe
const pObj = new PrivateClass()
// console.log(pObj.name)
console.log(pObj.showName())

// 14 - static members
class StaticMembers{
  static prop = "Teste static"
}
//o static permite ao parametro ser utilizado mesmo fora da classe
console.log(StaticMembers.prop)

//15 - generic class
class Item<T,U>{
  first
  second
  constructor(first:T,second:U){
    this.first = first
    this.second = second  
  }
}
const newItem = new Item(false,1)
console.log(newItem)

// 16 - parameter properties
class ParameterProperties  {
  constructor (
    public name: string,
    private qty: number,
    private price: number
  )
  {
    this.name = name
    this.qty = qty
    this.price = price
  }
  get showQty(){
    return `Quantidade total: ${this.qty}`
  }
  
  get showPrice(){
    return `Preço total: R$${this.price}`
  }
}

const newParameter = new ParameterProperties("vitor",200,15)
console.log(newParameter.name)
console.log(newParameter.showQty)
console.log(newParameter.showPrice)
