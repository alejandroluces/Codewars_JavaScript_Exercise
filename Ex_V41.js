// Se le dan dos matrices arr1y arr2, donde arr2siempre contiene números enteros.

// Escribe una función tal que:

// Para arr1 = ['a', 'a', 'a', 'a', 'a'], arr2 = [2, 4] la función devuelve['a', 'a']

// Para arr1 = [0, 1, 5, 2, 1, 8, 9, 1, 5], arr2 = [1, 4, 7] la función devuelve[1, 1, 1]

// Para arr1 = [0, 3, 4], arr2 = [2, 6] la función devuelve[4]

// Para arr1=["a","b","c","d"], arr2=[2,2,2], la función devuelve["c","c","c"]

// Para arr1=["a","b","c","d"], arr2=[3,0,2] la función devuelve["d","a","c"]

// Tenga en cuenta que cuando un elemento interior arr2es mayor que el índice del último elemento de arr1ningún elemento 
// arr1debe agregarse a la matriz resultante. Si arr1o arr2está vacío, debe devolver un arr vacío (lista vacía en python,
//      vector vacío en c++). Nota para c++ use std::vector arr1, arr2.



const reverseseq =(n)=>{
    let result=[]
for (let index = n; index > 0; index--) {
    result.push(index)
    // cons t element = array[index];
    
}
return result

}
console.log(reverseseq(5))


    
