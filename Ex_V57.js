// // Suma de múltiplos: Dado un array de números y un número multiplicador, 
// evuelve la suma de todos los números que sean múltiplos de ese multiplicador.
// Entrada:

const array = [1,2,3,4,5,6,7,8,9,10]
const munltiplicador = 3

const multiplicador =(array) =>{
    let extrar= array.filter((elemento) => elemento % munltiplicador === 0)
    let suma = extrar.reduce((a,b) => a + b)
    return suma



}
console.log(multiplicador(array));

// otra forma de hacerlo
let sumaDos = 0;
for (let i = 1; i < 10; i++) {
   if(i % 3===0){
        sumaDos+=i
        
   }
}
console.log(sumaDos);
