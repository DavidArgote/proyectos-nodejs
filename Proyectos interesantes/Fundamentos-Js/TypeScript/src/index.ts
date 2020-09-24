// Boolean

let muted: boolean = true;

// Numbers

let a: number = 34;
let b: number = 55;
let result: number = a + b;

// Arrays

let people: string[] = [];
people = ["David", "Alex", "Argote"];

people.push("Wilder");

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push('David');
peopleAndNumbers.push(20);

// Enum

enum Color {
    Red = "Rojo",
    Green = "Verde",
    Blue = "Azul",
}

let colorFav: Color = Color.Blue;
console.log(`Mi color favorito es ${colorFav}`);

// Any

let comodin: any = 'Joker';
comodin = {type: 'Wildcard'};


// Object

let someObject: Object = {type: 'Wildcard'};

// Functions

function add (a: number, b: number) : number{
    return a + b;
}

const sum = add(5, 6);

function createAdder(a: number): (number) => number {
    return function(b: number) {
        return a + b;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

// Parametro opcional

function fullName(firstName: string, lastName?:string): string {
    return `${firstName} ${lastName}`;
}

const david = fullName('David');

// Interface

interface Rectangulo {
    ancho: number
    alto: number
}

let rect : Rectangulo = {
    ancho: 4,
    alto: 6
}

function area(r: Rectangulo): number {
    return r.alto * r.ancho;
}

const areaRect =  area(rect);
console.log(areaRect);

// Class

// private 