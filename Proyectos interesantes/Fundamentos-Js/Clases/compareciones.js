'use strict'

// Utilizar siempre el === !==

const AGE_MIN = 18;

var david = {
    nombre: 'David',
    edad: 20
}
 
// Function normal

function isAdult(persona) {
    var { nombre, edad } = persona;
    return `${nombre} es ${ edad >= AGE_MIN ? "mayor de edad" : "menor de edad" } `;
}

console.log(isAdult(david));

// Arrow functions

const isAdultArrow = ({ nombre, edad }) => `${nombre} es ${ edad >= AGE_MIN ? "mayor de edad" : "menor de edad" } `;

console.log(isAdultArrow(david));

// ! para neagar