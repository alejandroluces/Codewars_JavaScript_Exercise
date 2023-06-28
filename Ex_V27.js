// triple problema
// Cree una función que devolverá una cadena que combine todas las letras de las 
// tres cadenas ingresadas en grupos. Tomando la primera letra de todas las entradas 
// y agrupándolas una al lado de la otra. ¡Haga esto para cada letra, vea el ejemplo a continuación!

// Por ejemplo, Entrada: "aa", "bb", "cc" => Salida: "abcabc"

// Nota: Puede esperar que todas las entradas tengan la misma longitud.


const tripleTrouble =(one, two, three) =>{
  
    // return one[l0]+two[0]+three[0]+one[1]+two[1]+three[1]+one[2]+two[2]+three[2];
    return one.split("").map((letter,index)=>letter+two[index]+three[index]).join("")

    
    
    
}

console.log(tripleTrouble("aaa","bbb","ccc"));
console.log(tripleTrouble("aaaaaa","bbbbbb","cccccc"));
console.log(tripleTrouble("burn", "reds", "roll"));

// El resultado de la función es la concatenación de los tres parámetros. 
// 4.   Dividimos()split cada parámetro en una matriz de letras. 
// 5.   Mapeamos(Map) a través del primer parámetro y devolvemos la concatenación 
//      de cada letra con la letra correspondiente de los otros dos parámetros.
// 6. Finalmente, unimos(join) las tres matrices de letras resultantes en una cadena
