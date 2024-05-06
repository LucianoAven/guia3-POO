// Crear una clase de libro: Crear una clase Libro con propiedades como título, autor y año de 
// publicación. Implementar métodos para obtener y establecer estas propiedades.

class Libro {
    constructor(titulo, autor, anio) {
        this.titulo = titulo
        this.autor = autor
        this.anio = anio

        // Funciones alamcenadas en elementos para ver y modificar los elementos principales.

        // Agregar o modificar elemento.
        this.setTitulo = function(titulo) {
            this.titulo = titulo;
        }

        // Ver elemento
        this.getTitulo = function() {
            if (this.titulo !== null) {
                return this.titulo;
            } else {
                return `No hay titulo ingresado.`;
            }
        }

        this.setAutor = function(autor) {
            this.autor = autor;
        }

        this.getAutor = function() {
            if (this.autor !== null) {
                return this.autor;
            } else {
                return `No hay autor ingresado.`;
            }
        }
 
        this.setAnio = function(anio) {
            this.anio = anio;
        }

        this.getAnio = function() {
            if (this.anio !== null) {
                return this.anio;
            } else {
                return `No hay año de publicación ingresado.`;
            }
        }
    }
}

// Variable que almacena la clase Libro sin elementos.
const libro1 = new Libro(null, null, null);
// Llamo a las variables con funciones de la clase para agregar, modificar o ver información del elemento.
console.log(libro1.getTitulo());
libro1.setTitulo(`El Señor De Los Anillos`)
console.log(libro1.getTitulo());
libro1.setAutor(`George R.R. Tolkien`)
libro1.setAnio(1954)
console.log(libro1.getAutor());
console.log(libro1.getAnio());
