// Crear una clase de estudiante que herede de Persona: Crear una clase Estudiante que herede de 
// la clase Persona y tenga propiedades adicionales como grado y promedio. 
// Implementar métodos para actualizar el promedio y obtener detalles del estudiante.

class Persona {
    // Elementos de la tabla persona
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }

    // Función para llamar a todos los elementos
    detalles() {
        console.log(`${this.nombre} es ${this.genero} y tiene ${this.edad} años.`);
    }
}

class Estudiante extends Persona {
    constructor(nombre, edad, genero, grado, promedio) {
        // Heredo elementos de la clase Persona.
        super(nombre, edad, genero);
        this.grado = grado;
        this.promedio = promedio;
    }

    // Función para modificar el promedio del alumno.
    actualizarPromedio(nuevoPromedio) {
        this.promedio = nuevoPromedio;
    }

    detallesEstudiante() {
        console.log(`Nombre del alumno: ${this.nombre}`,
        `\nEdad: ${this.edad}\nGénero: ${this.genero}`,
        `\nGrado: ${this.grado}\nPromedio: ${this.promedio}`);
    }
}

estudiante1 = new Estudiante("Rodrigo", 14, "hombre", "3°", null);
estudiante1.actualizarPromedio(8.5);
estudiante1.detallesEstudiante();