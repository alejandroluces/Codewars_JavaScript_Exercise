// Crear una funcion que retorne lo sigueinte
// 5, True , false --> true, false, true , false, true, false, true, false, true, false
// 3, true, false --> true, false, true, false, true, false
// 2 rojo, blanco --> rojo, blanco, rojo, blanco
// */

const repeatW = (num, palabra1, palabra2) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        if (i % 2 === 0) {
        arr.push(palabra1);
        } else {
        arr.push(palabra2);
        }
    }
    return arr;
    }




    console.log(repeatW(5, "rojo", false));
    
//Otra manera de resolverlo

const repeaTw2 = (num, palabra1, palabra2) => {

  return  Array(num).fill().map((_, i) => i % 2 === 0 ? palabra1 : palabra2)
  
}

console.log(repeaTw2(5, true, false));

