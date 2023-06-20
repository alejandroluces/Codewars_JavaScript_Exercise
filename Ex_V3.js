// Contando ovejas...
// Considere una matriz/lista de ovejas donde algunas ovejas pueden faltar en su lugar. 
// Necesitamos una función que cuente el número de ovejas presentes en la matriz (verdadero significa presente).

// Por ejemplo,
let array1 =
[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
// La solución debe ser 17.

// Hint: Don't forget to check for bad values like null/undefined

const countSheeps =(arrayOfSheep) =>{

    let count = 0
    for (let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] === true) {
            count++
        }
    }
    return count
}
console.log(countSheeps(array1))







// Path: Ex_V4.js
