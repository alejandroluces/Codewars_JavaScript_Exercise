// 7.

// Crea un array de objetos que representen estudiantes. Cada objeto debe tener propiedades como "nombre", "promedio" y "materias". La propiedad "materias" debe ser un array de objetos que representen las materias que el estudiante está cursando, cada uno con propiedades como "nombre" y "calificación". Luego, utiliza un método para calcular el promedio general de cada estudiante (promedio de las calificaciones de todas las materias) y agregarlo al objeto correspondiente. 

//Ejemplo de entrada: const students = [ { nombre: "Juan", promedio: null, materias: [ { nombre: "Matemáticas", calificación: 8 }, { nombre: "Ciencias", calificación: 7 }, { nombre: "Historia", calificación: 9 } ] }, { nombre: "María", promedio: null, materias: [ { nombre: "Matemáticas", calificación: 9 }, { nombre: "Ciencias", calificación: 8 }, { nombre: "Historia", calificación: 8 } ] }, { nombre: "Pedro", promedio: null, materias: [ { nombre: "Matemáticas", calificación: 7 }, { nombre: "Ciencias", calificación: 6 }, { nombre: "Historia", calificación: 7 } ] } ] 

// Ejemplo de salida: // [ // { nombre: "Juan", promedio: 8 }, // { nombre: "María", promedio: 8.33 }, // { nombre: "Pedro", promedio: 6.67 } // ]


const students = [ 
    { nombre: "Juan", promedio: null, materias: [ { nombre: "Matemáticas", calificacion: 8 }, { nombre: "Ciencias", calificacion: 7 }, { nombre: "Historia", calificacion: 9 } ] }, 
    { nombre: "María", promedio: null, materias: [ { nombre: "Matemáticas", calificacion: 9 }, { nombre: "Ciencias", calificacion: 8 }, { nombre: "Historia", calificacion: 8 } ] }, 
    { nombre: "Pedro", promedio: null, materias: [ { nombre: "Matemáticas", calificacion: 7 }, { nombre: "Ciencias", calificacion: 6 }, { nombre: "Historia", calificacion: 7 } ] }
    
    
     
] 

const calcAvg =(a) =>{
    
    for (let i = 0; i < a.length; i++) {
       
        let avgAll = a[i].materias.reduce((total,student)=>total+student.calificacion,0)/a[i].materias.length
        a[i].promedio= avgAll
}

return a

}

console.log(calcAvg(students));
