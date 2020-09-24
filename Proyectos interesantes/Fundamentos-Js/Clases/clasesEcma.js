const ALTURA_MIN = 1.80;

class Persona {
    constructor (nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    saludar() {
        return `Hola me llamo ${this.nombre} ${this.apellido}`;
    }

    soyAlto() {
        return this.altura >= ALTURA_MIN ? `${this.nombre} es alto` : `${this.nombre} no es alto`;
    }
}

class Desarollador extends Persona {
    constructor (nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }
    
    saludar(){
        return `Hola, me llamo ${this.nombre} y soy desarrollador`;
    }
}


var david = new Desarollador('David', 'Argote', 1.70);
console.log(david.saludar());
console.log(david.soyAlto());