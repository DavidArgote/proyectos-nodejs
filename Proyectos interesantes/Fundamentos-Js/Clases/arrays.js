var david = {
  nombre: "David",
  apellido: "Argote",
  altura: 1.68,
  cantidadLibros: 12,
};

var alex = {
  nombre: "Alex",
  apellido: "Argote",
  altura: 1.78,
  cantidadLibros: 12,
};

var wilder = {
  nombre: "Wilder",
  apellido: "Argote",
  altura: 1.74,
  cantidadLibros: 45,
};

var personas = [david, alex, wilder];

const esAlta = (persona) => persona.altura > 1.7;

// Sacar altura de personas
for (var persona of personas) {
  console.log(`La altura de ${persona.nombre} es de ${persona.altura}`);
}

// Filtrar
var personasAltas = personas.filter(esAlta); // Devuelve array nuevo
console.log(personasAltas);

// Map
const pasarAlturasACms = (persona) => ({
  ...persona,
  altura: persona.altura * 100,
});

var personasCms = personas.map(pasarAlturasACms);
console.log(personasCms);

// Reduce
const reducer = (acum, { cantidadLibros }) => acum + cantidadLibros;

var totalDeLibros = personas.reduce(reducer, 0);
console.log(`En total todos tienen ${totalDeLibros} libros`);


var nombre = "Sacha";
var apellido = "Lifszyc";

function pasarAMayusculas(nombre) {
  return nombre.toUpperCase();
}

pasarAMayusculas(nombre + " " + apellido);
pasarAMayusculas("Lucía");
pasarAMayusculas("");

