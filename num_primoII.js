const numeros = [2, 4, 7, 9, 11, 15, 16, 17, 18];
//Extraer los numeros primos:
const primos = numeros.filter((numero) => {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
        return false;
        }
    }
    return numero !== 1;
    }
);
console.log(primos); // [2, 7, 11, 17]


// OTro Ejemplo:

const numPrimo=(num)=>{
    let primo=`Es Numero Primo ${num}`
    for(let i=2;i<num;i++){
        if(num%i===0){
            primo=false
        }
    }
    return primo
}

console.log(numPrimo(89));