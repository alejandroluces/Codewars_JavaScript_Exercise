/*

Enunciado:

Estás trabajando en un sistema de registro de estudiantes para una universidad y necesitas escribir una función en JavaScript que tome una lista de estudiantes con sus calificaciones en diferentes asignaturas y calcule el promedio de cada estudiante.

La función debe llamarse "calcularPromedioEstudiantes" y debe aceptar como entrada un arreglo de objetos. Cada objeto debe representar a un estudiante y contener las siguientes propiedades:

nombre: Un string que representa el nombre del estudiante.
calificaciones: Un objeto que contiene las calificaciones del estudiante en diferentes asignaturas. Cada asignatura es una clave, y su valor asociado es la calificación, la cual es un número entre 0 y 100.
La función debe devolver un nuevo arreglo de objetos. Cada objeto en el arreglo resultante debe tener las siguientes propiedades:

nombre: El nombre del estudiante.
promedio: El promedio de calificaciones del estudiante.
Entrada Propuesta:

javascript
Copy code
const estudiantes = [
  {
    nombre: "Juan Pérez",
    calificaciones: {
      matematicas: 85,
      historia: 70,
      ciencias: 90
    }
  },
  {
    nombre: "María González",
    calificaciones: {
      matematicas: 95,
      historia: 88,
      ciencias: 76
    }
  }
];
Salida Esperada en Consola:

javascript
Copy code
[
  {
    nombre: "Juan Pérez",
    promedio: 81.66666666666667
  },
  {
    nombre: "María González",
    promedio: 86.33333333333333
  }
]

*/

const estudiantes = [
    {
        nombre: "Juan Pérez",
        calificaciones: {
            matematicas: 85,
            historia: 70,
            ciencias: 90
        }
    },
    {
        nombre: "María González",
        calificaciones: {
            matematicas: 95,
            historia: 88,
            ciencias: 76
        }
    }
];

const calcularPromedioEstudiantes = (estudiantes) => {
    return estudiantes.map(estudiante => {
        const calificaciones = Object.values(estudiante.calificaciones);
        const promedio = calificaciones.reduce((acc, calificacion) => acc + calificacion) / calificaciones.length;
        return {
            nombre: estudiante.nombre,
            promedio
        }
    });
}

console.log(calcularPromedioEstudiantes(estudiantes));