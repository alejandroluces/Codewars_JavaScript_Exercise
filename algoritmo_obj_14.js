4.

// Crea un array de objetos que representen empleados de una empresa. Cada objeto debe tener propiedades como "nombre", "edad", "cargo" y "salario". Luego, utiliza un método para encontrar el empleado con el salario más alto y imprimir su nombre y cargo en la consola. 

//Ejemplo de entrada: const employees = [ { nombre: "Juan", edad: 27, cargo: "Gerente", salario: 50000 }, { nombre: "María", edad: 35, cargo: "Analista", salario: 40000 }, { nombre: "Pedro", edad: 32, cargo: "Desarrollador", salario: 45000 }, { nombre: "Ana", edad: 24, cargo: "Diseñadora", salario: 35000 } ] 

// Ejemplo de salida: // { nombre: "Juan", edad: 27, cargo: "Gerente", salario: 50000 }


const employees = [ 
    { nombre: "Juan", edad: 27, cargo: "Gerente", salario: 50000 }, 
    { nombre: "María", edad: 35, cargo: "Analista", salario: 40000 }, 
    { nombre: "Pedro", edad: 32, cargo: "Desarrollador", salario: 60000 }, 
    { nombre: "Ana", edad: 24, cargo: "Diseñadora", salario: 35000 } 
]


// employees.sort((a,b)=>a.salario<b.salario?1:-1)


const salrioMayor =(s) =>{

    let result= s.sort((a,b)=>a.salario<b.salario?1:-1)

    return  result[0]
}

console.log(salrioMayor(employees));
