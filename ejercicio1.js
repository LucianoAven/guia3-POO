// Crear una clase de persona: Crear una clase Persona con propiedades como nombre, edad y género. 
// Implementar un método para imprimir los detalles de la persona.

class Persona {
    // Elementos de la tabla persona
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    detalles() {
        console.log(`${this.nombre} es ${this.genero} y tiene ${this.edad} años.`);
    }
}

// Creo una variable que almacene la clase con elementos definidios.
persona1 = new Persona("Eduardo", 37, "varón");
// Activo la función dentro de la clase.
persona1.detalles();
