'use strict'

var persona =  { 
    nombre: 'David',
    edad: 20
}

function printNameUpperCase(persona) {
    var { nombre } = persona;
    return nombre.toUpperCase();
}

function printNameAndAge(persona) {
    var {nombre, edad } = persona;
    return `Hola, mi nombre es: ${nombre} y tengo ${edad} años`;
}

function birthDate(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

console.log(printNameUpperCase(persona));
console.log(printNameAndAge(persona));