

// for(let i=1;i<10;i++){
//     console.log(i);

//     if(i%2===0){
//         console.log(`El numero ${i}es par` );
        
//     }else{
//         console.log(`El numero ${i} es Impar`);
        
//     }
    
// }

// 

function esPrimo(num) {
    for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++)
      if (num % i === 0) return false;
    return num > 1;
  }
  
  for(let i = 1; i <= 100; i++){
    if (esPrimo(i)) console.log(i + ' es un número primo');
    else console.log(i + ' no es un número primo');
  }

// //   for(let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) - Aquí, se está ejecutando un bucle for que comienza desde 2 
//     (porque los números primos son números mayores que 1 que solo tienen dos factores positivos: 1 y sí mismos, por lo 
//     que comenzar desde 2 ahorra tiempo de ejecución) y continúa hasta la raíz cuadrada del número en cuestión. La razón 
//     de ir solo hasta la raíz cuadrada es que, si un número no es primo, seguramente tendrá un factor menor o igual a su raíz 
//     cuadrada. Esto también ahorra tiempo de ejecución.
// // if (num % i === 0) return false; - Dentro del bucle for, este es un condicional que comprueba si nuestro número es 
// divisible por i (el contador en nuestro bucle). Si es así, el número no es primo (ya que los números primos solo pueden ser 
//     divididos por 1 y por sí mismos) y la función regresa false.
// // return num > 1; - Si el bucle termina sin encontrar ningún divisor para el número, el número es primo y la función 
// devuelve true. Sin embargo, como los números primos tienen que ser mayores que 1, se verifica num > 1 para excluir a 1.