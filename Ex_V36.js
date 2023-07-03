// Años bisiestos

// En este kata, simplemente debe determinar si un año determinado es un año bisiesto o no. Por si no conoces las reglas, aquí están:

// los años divisibles por 4 son años bisiestos
// pero los años divisibles por 100 no son bisiestos
// pero los años divisibles por 400 son años bisiestos
// Notas adicionales:

// Solo se probarán años válidos (enteros positivos), por lo que no tiene que validarlos
// Se pueden encontrar ejemplos en el accesorio de prueba.

const isLeapYear =(year) =>{

if(year%100!==0 && year%4===0){return true}
if(year%100===0 && year%400!==0){return false}
if(year%100===0 && year%400===0){return true}
else{
    return false
}

}

console.log(isLeapYear(2020));
console.log(isLeapYear(2000));
console.log(isLeapYear(2015));
console.log(isLeapYear(2100));




