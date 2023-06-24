// // Cree una función que devolverá una cadena que combine todas las letras de las tres cadenas ingresadas en grupos. 
// Tomando la primera letra de todas las entradas y agrupándolas una al lado de la otra. 
// ¡Haga esto para cada letra, vea el ejemplo a continuación!

// Por ejemplo, Entrada: "aa", "bb", "cc" => Salida: "abcabc"
// la solucion es:
/* 
function tripleTrouble(one, two, three){
    let result = '';
    for(let i = 0; i < one.length; i++){
      result += one[i] + two[i] + three[i];
    }
    return result;
  }

  */

//   otra solucion es:

 

    // otra solucion con menos codigo es:
    function tripleTrouble(one, two, three){
        return one.split("").map((letter, index) => letter + two[index] + three[index]).join("");
      } 
      console.log(tripleTrouble("aaaaaa","bbbbbb","cccccc"));
      
/* He aquí la explicación del código anterior:
1. Uso el método split() para dividir la cadena en una matriz de caracteres simples.
2. Luego uso el método map() para iterar a través del array y devolver un nuevo array con los resultados de la función callback. 
3. La función callback toma como argumentos el carácter actual y su índice. 
4. Luego devolvemos el carácter de la primera cadena más el carácter de la segunda cadena más el carácter de la tercera cadena. 
5. Por último, utilizamos el método join() para volver a unir la matriz de caracteres en una cadena. */





