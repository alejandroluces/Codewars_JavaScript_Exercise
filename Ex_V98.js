/*

Cuente el número de duplicados
Escriba una función que devuelva el recuento de caracteres alfabéticos y dígitos numéricos distintos que no distinguen entre mayúsculas y minúsculas y que aparecen más de una vez en la cadena de entrada. Se puede suponer que la cadena de entrada contiene sólo alfabetos (tanto mayúsculas como minúsculas) y dígitos numéricos.

*/

const countDuplicates=(str)=>{

    let strLow=str.toLowerCase()
    let strSplit=strLow.split("")
    let strFilter=strSplit.filter((item,index)=>strSplit.indexOf(item)!=index)
    let strSet=new Set(strFilter)
    return strSet.size

}

console.log(countDuplicates("Indivisibillllitttties"));

