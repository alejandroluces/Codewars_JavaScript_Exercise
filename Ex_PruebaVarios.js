/*Realizar una funcion que reciba como parametros dos numeros, debe realizar una operacion de suma, resta, multiplicacion y division de los dos numeros. validar que los argumentos recibidos en la funcion sean numeros, de lo contrario, retornar un texto que diga:" no se puede realizar la operacion matematicas, porque uno o los dos parametros no son numeros."*/

const operacionMatematica = (num1, num2) => {

  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "no se puede realizar la operacion matematicas, porque uno o los dos parametros no son numeros."
  }

    const suma = num1 + num2;
    const resta = num1 - num2;
    const multiplicacion = num1 * num2;
    const division = num1 / num2;

    return `La suma de los numeros es: ${suma}, la resta de los numeros es: ${resta}, la multiplicacion de los numeros es: ${multiplicacion}, la division de los numeros es: ${division}.`

}

console.log(operacionMatematica(2, 2));


/* Crear una funcion que reciba como parametros un array donde cada uno de sus elementos son strings, la funcion debe retornar un array con aquellos elementos que son palindromos. ejemplos(anitalavalatina, lata, arepera, carro, ala, oso)  no tanar en cuenta las mayusculas*/

const palindromo = (array) => {

    const validarPalindromo = array.filter((elemento) => {
        const elementoMinuscula = elemento.toLowerCase();
        const elementoInvertido = elementoMinuscula.split("").reverse().join("");
        return elementoMinuscula === elementoInvertido;
    });

    return validarPalindromo;   



}


console.log(palindromo(["Anitalavalatina", "lata", "arepera", "carro", "ala", "oso"]));



/* hacer una funcion que reciba como parametros un array de objetos con las propiedades nombre, apellido, y id, la funcion debe retornar todos los objetos en un array donde su id sea mayor a 10*/


const arrayObjetos = [
    {
        nombre: "Juan",
        apellido: "Perez",
        id: 1
    },
    {
        nombre: "Pedro",
        apellido: "Perez",
        id: 12
    },
    {
        nombre: "Maria",
        apellido: "Perez",
        id: 3
    },
    {
        nombre: "Jose",
        apellido: "Perez",
        id: 14
    }
]

const filtrarId = (array) => {
    
        const filtrar = array.filter((elemento) => {
            return elemento.id > 10;
        });
    
        return filtrar;
    
    }

console.log(filtrarId(arrayObjetos));



/*

Crear una funcion que reciba como parametro un array de objetos con las propiedades nombre, apellido, edad, y id, la funcion debe retornar todos los objetos en un array donde su edad sea mayor a 18 y su id sea par.

*/

const arrayObjetos2 = [
    {
        nombre: "Juan",
        apellido: "Perez",
        edad: 20,
        id: 2
    },
    {
        nombre: "Pedro",
        apellido: "Perez",
        edad: 15,
        id: 12
    },
    {
        nombre: "Maria",
        apellido: "Perez",
        edad: 25,
        id: 3
    },
    {
        nombre: "Jose",
        apellido: "Perez",
        edad: 30,
        id: 14
    }
]

const filtrarEdad = (array) => {

    const filtrar = array.filter((elemento) => {
        return elemento.edad > 18 && elemento.id % 2 === 0;
    });

    return filtrar;

}

console.log(filtrarEdad(arrayObjetos2));