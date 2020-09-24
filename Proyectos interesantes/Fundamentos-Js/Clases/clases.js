const ALTURA_MIN = 1.80;

function heredaDe(prototipoHijo, prototipoPadre) {
    var fn = function(){}
    fn.prototype = prototipoPadre.prototype;
    prototipoHijo.prototype =  new fn;
    prototipoHijo.prototype.constructor = prototipoHijo
}

function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

Persona.prototype.saludar = function() {
    return `Hola me llamo ${this.nombre} ${this.apellido}`;
}

Persona.prototype.soyAlto = function() {
    return this.altura >= ALTURA_MIN ? `${this.nombre} es alto` : `${this.nombre} no es alto`;
}

function Desarrollador(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

heredaDe(Desarrollador, Persona);

Desarrollador.prototype.saludar =  function() {
    return `Hola, me llamo ${this.nombre} y soy desarrollador`;
}


//var david = new Persona('David', 'Argote', 1.70);
var david = new Desarrollador('David', 'Argote', 1.70);

console.log(david.saludar());
console.log(david.soyAlto());