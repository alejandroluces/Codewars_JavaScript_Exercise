// // encontrar el promedio de los elementos de array
// // Entrada: [12, 13, 15, 17, 19, 20]

// const calculoAverage=notes=>notes.reduce((a,b)=>a+b)/notes.length

// console.log(calculoAverage([12, 13, 15, 17, 19, 20]));

// /*
// crear una función que reciba un array de números enteros y retorne un nuevd array donde los elementos que se encuentren en el rango de 10 a 15 sean reemplazados por la palabra "premio"
// */

// const premio=replaceNumbersRange=>replaceNumbersRange.map(item=>item>=10 && item<=15 ? "premio" : item)
// console.log(premio([12, 13, 15, 17, 19, 20]));



// /*

// // Hacer una función que tome como argumento un array de paiabras y retorne todas Las palabras que tienen una letra "a" a partir del 4to caracter en adelante.
// // ["apple", "banana", "avocado", "grape"]

// */

// const palabras=palabras=>palabras.filter(item=>item.includes("a",3))
// console.log(palabras(["apple", "banana", "avocado", "grape"]));

// /*
// Calcular el descuento de una comta, si el monto es mayor a 1000 se le aplica un 10% de descuento, si es menor a 1000 se le aplica un 5% de descuento
// */

// const descuento=descuento=>descuento.map(item=>item>1000 ? item*0.9 : item*0.95)
// console.log(descuento([1000, 2000, 3000, 4000, 5000]));

// /*

// // Escriba una función que reciba una cadena de una o más palabras y devuelva 
// // la misma cadena, pero con todas las palabras de cinco o más letras invertidas 
// // Los espacios se incluirán sólo cuando haya más de una palabra.
// // string : "Alejo un saludo"
// */

// const spinWords=string=>string.split(" ").map(item=>item.length>=5 ? item.split("").reverse().join("") : item).join(" ")

// console.log(spinWords("Alej un saludo"));



// // REPEAT_______________________

// // encontrar el promedio de los elementos de array
// // Entrada: [12, 13, 15, 17, 19, 20]

// const valueAverage=notes=>notes.reduce((a,b)=>a+b)/notes.length

// console.log(valueAverage([12, 13, 15, 17, 19, 20]));

// /*
// crear una función que reciba un array de números enteros y retorne un nuevd array donde los elementos que se encuentren en el rango de 10 a 15 sean reemplazados por la palabra "premio"
// */

// const searchNumbers=(num)=>num.map((item)=>item>=10 & item<=15?"premio":item)

// console.log(searchNumbers([99,13,5,1,12,60,4,55]));

// // Hacer una función que tome como argumento un array de paiabras y retorne todas Las palabras que tienen una letra "a" a partir del 4to caracter en adelante.
// // ["apple", "banana", "avocado", "grape"]

// const searchWords=fruit=>fruit.filter((item)=>item.includes("a",3))

// console.log(searchWords(["apple", "banana", "avocado", "grape"]));


// /*
// Calcular el descuento de una comta, si el monto es mayor a 1000 se le aplica un 10% de descuento, si es menor a 1000 se le aplica un 5% de descuento
// */

// const calculateDiscount=(purchase)=>purchase.map((item)=>item>1000?item*0.90:item*0.95)

// console.log(calculateDiscount([1000, 2000, 3000, 4000, 5000]));

// // Escriba una función que reciba una cadena de una o más palabras y devuelva 
// // la misma cadena, pero con todas las palabras de cinco o más letras invertidas 
// // Los espacios se incluirán sólo cuando haya más de una palabra.
// // string : "Alejo un saludo"

// const reverStringFiveChart=(str)=>str.split(" ").map((item)=>item.length>=5?item.split("").reverse().join(""):item).join(" ")

// console.log(reverStringFiveChart("Alej un saludo"));

// /*
// Enunciado:
// Escribe un programa en JavaScript que tome una temperatura en grados Celsius (temperaturaCelsius) y la convierta a grados Fahrenheit. 
// La fórmula para la conversión es: temperatura en Fahrenheit = (temperatura en Celsius * 9/5) + 32. 
// Luego, muestra el resultado de la conversión en la consola.

// Salida esperada en consola:

// La temperatura en grados Fahrenheit es: 82.4

// */

// const converTemperatureFah=(temperature)=>`LA temperatura es de ${temperature*9/5+32}`
// console.log(converTemperatureFah(28));


// /*

// A continuación, se presenta una entrada de datos:

// // Entrada de datos
// let frase = "El aprendizaje de programación es divertido y gratificante";
// Enunciado:
// Escribe un programa en JavaScript que tome una frase (frase) y cuente la cantidad de palabras en ella. Una palabra se define como una secuencia de caracteres separada por espacios en blanco. Luego, muestra el número total de palabras contadas en la consola.

// Salida esperada en consola:
// La cantidad de palabras en la frase es: 8

// */
// const countWords=words=>`La cantidad de palabras es:${words.split(" ").length}`

// console.log(countWords("El aprendizaje de programación es divertido y gratificante"));


// /*

// En este ejercicio, vamos a trabajar en un programa simple en JavaScript que calcula la suma de los dígitos de un número entero positivo dado.

// A continuación, se presenta una entrada de datos:

// // Entrada de datos
// let numero = 12345;

// */

// const sumDigitNumber=num=>num.toString().split("").reduce((a,b)=>parseInt(a)+parseInt(b))

// console.log(sumDigitNumber(12345));


// const numParImpar=num=>num.map((item)=>item%2===0 ? `El numero ${item} es Par `:`El numero ${item} es Impar`)

// console.log(numParImpar([7, 12, 5, 20, 9]));


// // Quiero crear una funcion para simar los sigueintes valores [5, 10, 15, 20, 25]

// const sumValues=num=>num.reduce((a,b)=>a+b)

// console.log(sumValues([5, 10, 15, 20, 25]));

// // Quiero sumar solo los numero pares de este array [5, 10, 15, 20, 25]

// const sumEvenValues=num=>num.filter((item)=>item%2===0).reduce((a,b)=>a+b)

// console.log(sumEvenValues([5, 10, 15, 20, 25]));


// // Crea un array de 4 palabras donde dos sean palindromos y dos no. Validar si cada palabra es palindromo o no

// const palindromo=words=>words.map((item)=>item.toLowerCase()===item.toLowerCase().split("").reverse().join("")?`${item} es palindromo`:`${item} no es palindromo`)
// console.log(palindromo(["oso","casa","ana","calle"]));


// /*

// Crear una funcion que calcule el promedio a partir de un array de numeros y luego crear otra funcion para evaluar si el resultado de la la primera funcion donde los numeros mayor o igual a 70 aprobado y menor a70 reprobado.
// const calificaciones = [85, 92, 88, 78, 90];
// Aprobado

// */

// const average=(notes)=>{
//     const result=notes.reduce((a,b)=>a+b)/notes.length
//     return result


// }

// const resultAverage=(notes)=>average(notes)>=70?`Aprobado`:`Reprobado`

// console.log(resultAverage([85, 92, 88, 78, 90]));

// /*
// /* esta función toma una cadena de texto como entrada y devolverá La cadena de texto mas grande encontrada */

// const findLongestWord=(str)=>str.split(" ").reduce((a,b)=>a.length>b.length?a:b)

// console.log(findLongestWord("El aprendizaje de programación es divertido y gratificante"));


// /* 
// Calcular el total de la compra de lo siguiente

// const productos = [
//     { nombre: "Camiseta", precio: 20, cantidad: 2 },
//     { nombre: "Pantalón", precio: 30, cantidad: 1 },
//     { nombre: "Zapatos", precio: 50, cantidad: 2 }
//   ];

//   */

//   const totalPurchase=(products)=>{

//     const total=products.map((item)=>item.precio*item.cantidad).reduce((a,b)=>a+b)
//     return total

//   }

//     console.log(totalPurchase(products))




// /*

// Crear una funcion que calcule el promedio a partir de un array de numeros y luego crear otra funcion para evaluar si el resultado de la la primera funcion donde los numeros mayor o igual a 70 aprobado y menor a70 reprobado.
// const calificaciones = [85, 92, 88, 78, 90];
// Aprobado

// */

const calificacion = [85, 92, 88, 78, 90]

const valueNote=(n)=>{
    let average= n.reduce((a,b)=>a+b)/n.length
    return average>=70?`aprobado`:`reprobado`
}

console.log(valueNote(calificacion));



