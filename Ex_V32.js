// Tenga en cuenta
// n y m son números naturales (enteros positivos)
// m se excluye de los múltiplos

// Ejemplos             
// sumMul(2, 9)   ==> 2 + 4 + 6 + 8 = 20
// sumMul(3, 13)  ==> 3 + 6 + 9 + 12 = 30
// sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
// sumMul(4, -7)  ==> "INVALID"

// La solucion de este ejercicio es la siguiente:




const sumMul =(n,m) =>{
    if ( n,m <= 0) {
        return "INVALID";
    }
    else if (m>n){
        let suma=0
         for(let i = n; i<m;i+=n){
             suma+=i;
    }
    return suma
    }
}
console.log(sumMul(0,0));//"INVALID"
console.log(sumMul(2,9));//20
console.log(sumMul(4,-7));//"INVALID"
console.log(sumMul(4,123));
console.log(sumMul(27,4347));

/*
1. Creamos una función llamada sumaMul que toma dos parámetros, n y m
2. Creamos una sentencia if que comprueba si n y m son menores o iguales que cero, 
    si la condición es cierta, la función devolverá "INVÁLIDO"
3. Creamos otra sentencia if que compruebe si m es mayor que n, si la condición es cierta, 
    la función creará una variable llamada suma y le asignará el valor 0
4. Creamos un bucle for que comenzará en n, se incrementará en n y se detendrá en m, añadiendo el valor de i a suma
5. La función devolverá el valor de suma */

