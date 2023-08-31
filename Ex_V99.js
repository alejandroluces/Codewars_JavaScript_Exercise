// Calcular el factorial de un numero

const calculateFactorialNum=(num)=>{
    let factorial=1
    for(let i=1;i<=num;i++){
        factorial*=i
    }
    return factorial
}

console.log(calculateFactorialNum(5));
