// es6
function newFunction(name = "David", age = 20, country = "CO") {
  console.log(name, age, country);
}

newFunction();
newFunction("Alex", 21, "CO");

//  Templates literales
// `${}`

// Multilinea
let lorem = `Frase epica que necesitamos,
ahora es otra frase`;

console.log(lorem);

// Desustructuracion
let person = {
  name: "David",
  age: 20,
  country: "CO",
};

let { name, age, country } = person;
console.log(name, age, country);

// Operador de propagacion

let team1 = ["Andres", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];

let education = ["David", ...team1, ...team2];

console.log(education);

// Objetos

let name = "David";
let age = 20;

objeto = { name, age };

console.log(objeto);

//Arrow functions
const names = [
  { name: "David", age: 21 },
  { name: "Alex", age: 22 },
];

let listOfNames = names.map((item) => console.log(item.name));

// Promesas
const hellowPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ups!");
    }
  });
};

hellowPromise()
  .then((response) => console.log(response))
  .catch((error) => console.log(error));

// clases 2

class Calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;
    return this.valueA + this.valueB;
  }
}

const calc = new Calculator();

console.log(calc.sum(10, 20));

import { hello } from "./module";

hello();

// Generators

function* helloWorld() {
  if (true) {
    yield "Hello, ";
  }
  if (true) {
    yield "World";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

// Esc 7
// include
let nums = [1, 2, 5, 6, 7, 8];

let contains = nums.includes(11);
console.log(contains);

// exponenete
let result = 4 ** 3;
console.log(result);

// Esc 8
// entries
const data = {
  frontend: "Oscar",
  backend: "David",
  design: "Ana",
};

const entries = Object.entries(data);
console.log(entries);
console.log(entries.length);

// Object bios
const data = {
  frontend: "Oscar",
  backend: "David",
  design: "Ana",
};

const values = Object.values(data);
console.log(values);

// add to String

const str = "hello";
console.log(str.padStart(7, "hi"));
console.log(str.padEnd(12, "hiddd"));

// async y await

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World!"), 3000)
      : reject(new Error("Test Error"));
  });
};

const helloAsync = async () => {
  const hello = await helloWorld();
  console.log(hello);
};

helloAsync();

const anotherFunction = async () => {
  try {
    const hello = await helloWorld();
    console.log(hello);
  } catch (error) {
      console.log(error);
  }
};

anotherFunction();

// Es9
//operador de reposo

let obj = {
    name: "David",
    age: 20,
    country: "CO",
  };

let {name, ...all } = obj;
console.log(name, all);

// Anidar objetos

const obj = {
    name: 'David',
    age: 20
}

const obj2 = {
    ...obj,
    country: 'CO'
}

console.log(obj2);

// promise.finaly

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)
        ? resolve ('Hello World!')
        : reject(new Error('Test Error'))
    });
};

helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => {
    console.log("Terminooooo");
});

// regex

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-02');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);

// ecs 10

let array = [1,2,3, [1,2,3, [1,2,3] ] ];
console.log(array.flat(3));

let array = [1,2,3,4,5,6];
console.log(array.flatMap(value => [value, value * 2]));

let hello = '          Hello world';
console.log(hello.trimStart()); // trimEnd