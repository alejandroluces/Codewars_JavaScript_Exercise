// https://www.codewars.com/kata/59342039eb450e39970000a6/train/javascript
// Dado un número n, devuelva el número de números impares positivos a continuación n, ¡FÁCIL!

// Ejemplos (Entrada -> Salida)
// 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
// ¡Espere grandes aportes!


const oddCount =(n) =>{
     let result=0;
    
        for (let i = 1; i < n; i++) {
            
                if (i%2!==0){
                    result++
                    

        }

}
return result
}

console.log(oddCount(15));
console.log(oddCount(15023));



/* usando el metodo map

const oddCount =(n) =>{
        // Usando el metodo map
        let arr = [...Array(n).keys()].map(x => ++x);
        let odd = arr.filter(x => x % 2 !== 0);
        return odd.length-1;
        
        }
        console.log(oddCount(15));

*/