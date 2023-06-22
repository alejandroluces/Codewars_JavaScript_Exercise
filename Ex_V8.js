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




    console.log(repeatW(5, true, false));
    
//Otra manera de resolverlo

    function alternate(n, firstValue, secondValue){
        const array = [];
        for (let i = 0; i < n; i++) {
          array.push(i % 2 === 0 ? firstValue : secondValue)
        }
        return array;
      }