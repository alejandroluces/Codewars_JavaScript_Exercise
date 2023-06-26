// Implemente una función que acepte 3 valores enteros a, b, c. La función debería devolver verdadero si se 
// puede construir un triángulo con los lados de la longitud dada y falso en cualquier otro caso.

// (En este caso, todos los triángulos deben tener una superficie mayor que 0 para ser aceptados).



const isTriangle =(a,b,c) =>{
    return a+b>c && c+b>a && c+a>b
 }
 
 
 console.log((isTriangle(1,2,2)));
 console.log((isTriangle(7,2,1)));
 console.log((isTriangle(3,8,-2)));
 
 