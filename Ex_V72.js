/*

Enunciado:

Estás construyendo una aplicación para gestionar una biblioteca, y necesitas escribir una función en JavaScript que busque libros por título y autor. La función, llamada "buscarLibro", debe aceptar dos argumentos: un arreglo de objetos que represente los libros en la biblioteca, y una cadena que represente una consulta de búsqueda.

Cada objeto libro en el arreglo debe tener las siguientes propiedades:

titulo: Un string que representa el título del libro.
autor: Un string que representa el autor del libro.
disponible: Un booleano que representa si el libro está disponible para ser prestado.
La función debe devolver un arreglo de objetos que contengan los libros que coincidan con la consulta de búsqueda. La búsqueda debe ser insensible a mayúsculas y minúsculas, y debe coincidir si la cadena de consulta aparece en el título o en el nombre del autor.

Entrada Propuesta:

javascript
Copy code
const libros = [
  { titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", disponible: true },
  { titulo: "1984", autor: "George Orwell", disponible: false },
  { titulo: "La Odisea", autor: "Homero", disponible: true },
  { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", disponible: true }
];

const consulta = "Orwell";
Salida Esperada en Consola:

javascript
Copy code
[
  { titulo: "1984", autor: "George Orwell", disponible: false }
]
Explicación:

La función debe buscar libros que coincidan con la consulta "Orwell", ya sea en el título o en el autor. En este caso, el libro "1984" de George Orwell es el único que coincide, por lo que se devuelve en el resultado.

*/

const libros = [
    { titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", disponible: true },
    { titulo: "1984", autor: "George Orwell", disponible: false },
    { titulo: "La Odisea", autor: "Homero", disponible: true },
    { titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", disponible: true }
    ];

    const consulta = "gabriel";

    const buscarLibro = (libros, consulta) => {
        const resultado = libros.filter((libro) => {
            return libro.titulo.toLowerCase().includes(consulta.toLowerCase()) || libro.autor.toLowerCase().includes(consulta.toLowerCase());
        });
        return resultado;
    }

    console.log(buscarLibro(libros, consulta));


