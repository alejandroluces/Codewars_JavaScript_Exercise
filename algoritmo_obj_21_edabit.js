// Dado un objeto que contiene recuentos de votos positivos y negativos, devuelve el recuento de votos que se debe mostrar. 
// Esto se calcula restando el número de votos negativos de los votos positivos.

// Ejemplos
// getVoteCount({ upvotes: 13, downvotes: 0 }) ➞ 13

// getVoteCount({ upvotes: 2, downvotes: 33 }) ➞ -31

// getVoteCount({ upvotes: 132, downvotes: 132 }) ➞ 0
// downvotes:voto negativo
// upvotes:voto positivo


const getVoteCount =(a) =>{
    a.downvotes=-Math.abs(a.downvotes)//Con esta linea converti los numeros votos negativos con signo - negativo
    return Object.values(a).reduce((sum,acu)=>sum+acu)
 
}


console.log(getVoteCount({ upvotes: 13, downvotes: 0 }));
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }));
console.log(getVoteCount({ downvotes: 2, upvotes: 33 }));
