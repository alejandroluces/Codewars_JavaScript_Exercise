// Dada una cadena en minúsculas que tiene solo caracteres alfabéticos y sin espacios, 
// devuelve el valor más alto de las subcadenas de consonantes. 
// Las consonantes son cualquier letra del alfabeto excepto "aeiou".

// Asignaremos los siguientes valores: a = 1, b = 2, c = 3, .... z = 26.

// Por ejemplo, para la palabra "zodíacos", tachemos las vocales. Obtenemos: "z d cs" "26 4 y 22=3+19"

 const solve = (s)=> {
  let maxVal = 0;
  let currentVal = 0;

  for (let i = 0; i < s.length; i++) {
    currentVal = /[b-df-hj-np-tv-z]/.test(s[i]) ? currentVal + s.charCodeAt(i) - 96 : 0;
    if (currentVal > maxVal) {
      maxVal = currentVal;
    }
  }

  return maxVal;
}
  
  console.log(solve("zodiac")); // 26
  console.log(solve("chruschtschov")); // 80
  console.log(solve("khrushchev")); // 38
  console.log(solve("strength")); // 57
  console.log(solve("catchphrase")); // 73
  console.log(solve("twelfthstreet")); // 103
  console.log(solve("mischtschenkoana")); // 80
  

/*   Explicación:

He aquí la explicación del código anterior:

2. A continuación, definimos dos variables: maxVal y currentVal. Ponemos ambas a 0.
3. A continuación, iteramos la cadena, empezando por el primer carácter, hasta el final de la cadena.
4. 4. Comprobamos si el carácter actual es una consonante, y si lo es, sumamos el valor 
  actual de currentVal al valor ASCII del carácter actual menos 96. Esto se debe a que el valor 
  ASCII del carácter actual es 96. Esto se debe a que el valor ASCII de "a" es 97, y 
  queremos empezar a contar desde 1, por lo que le restamos 96. Si el carácter actual 
  no es una consonante, ponemos currentVal a 0.
5. A continuación, comprobamos si currentVal es mayor que maxVal, y si lo es, establecemos maxVal al valor de currentVal.
6. Después de iterar toda la cadena, devolvemos maxVal. */




// Otra Solucion mas simplificada





/* 

const solve = s => s.split(/[aeiou]+/).reduce((s,n)=> Math.max(s, n.split('').reduce((a,b)=> a + b.charCodeAt(0) - 96, 0)), 0);

console.log(solve("zodiac")); // 26
console.log(solve("chruschtschov")); // 80
console.log(solve("khrushchev")); // 38
console.log(solve("strength")); // 57
console.log(solve("catchphrase")); // 73
console.log(solve("twelfthstreet")); // 103
console.log(solve("mischtschenkoana")); // 80


*/

/* He aquí la explicación del código anterior:

1. s.split(/[aeiou]+/) divide la cadena en una matriz de cadenas, utilizando las vocales como separadores.

2. reduce((s,n)=> Math.max(s, n.split('').reduce((a,b)=> a + b.charCodeAt(0) - 96, 0)), 0) reduce la matriz 
   de cadenas a la suma máxima de los códigos de carácter de cada cadena.

3. n.split('').reduce((a,b)=> a + b.charCodeAt(0) - 96, 0) divide cada cadena en una matriz de caracteres, 
   luego reduce la matriz a la suma de los códigos de carácter de cada carácter, usando 0 como valor inicial.

4. Math.max(s, n.split('').reduce((a,b)=> a + b.charCodeAt(0) - 96, 0)) toma el máximo del máximo actual y 
   la suma de los códigos de carácter.

5. El máximo de las sumas de los códigos de caracteres es la respuesta. 

*/