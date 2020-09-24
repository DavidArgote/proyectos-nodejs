'use strict'

const INCREMENTO_PESO = 0.3;
const DIAS_ANIO = 356;

var david = {
    nombre: 'David',
    apellido: 'Argote',
    edad: 20,
    peso: 58
}

const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO;
const adelgazar = persona => persona.peso -= INCREMENTO_PESO;
const comeMucho = () => Math.random() < 0.3;
const realizaDeporte = () => Math.random() < 0.4;

console.log(`Al inicio del año ${david.nombre} pesa ${david.peso} kg`);

// For
for (var i=1; i <= DIAS_ANIO; i++) {
    var random = Math.random();
    if(random < 0.25) {
        aumentarDePeso(david);
    } else if (random < 0.5){
        adelgazar(david);
    }
}

console.log(`Al final del año ${david.nombre} pesa ${david.peso.toFixed(1)} kg`);

const META = david.peso - 3;
var dias = 0;

// While 
while (david.peso > META) {
    if (comeMucho()) {
        aumentarDePeso(david);
    }

    if (realizaDeporte()) {
        adelgazar(david);
    }

    dias++;
}

console.log(`Pasaron ${dias} dias`)
console.log(`Al final del año ${david.nombre} pesa ${david.peso.toFixed(1)} kg`);
