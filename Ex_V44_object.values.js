// Alternancia entre tres valores
// Suponga que una variable xpuede tener solo tres posibles valores diferentes a, by c, y desea asignarle xun 
// valor diferente al actual, y desea que su código sea independiente de los valores de a, by c.

// ¿Cuál es la forma más eficiente de alternar entre tres valores? Escribe una función ftal que satisfaga

//   f(a) = b
//   f(b) = c
//   f(c) = a
// EJEMPLO
//   f( 3, { a:3, b:4, c:5 } ) => 4




const f =(x,cc) =>{
    console.log(cc);
    let arr=Object.values(cc)
    console.log(arr);
    let pos=arr.indexOf(x)
    console.log(pos);
    if(pos===-1){return null}
    else if(pos===arr.length-1){return arr[0]}
    else{return arr[pos+1]}


    
}


console.log(f( 3, { a:3, b:4, c:5 } ));//4
console.log(f( 4, { a:3, b:4, c:5 } ));//5
console.log(f( 5, { a:3, b:4, c:5 } ));//3

// const f =(x,cc) =>{
//     console.log(cc);
//     let arr=Object.values(cc)
//     console.log(arr);
//     if(x===3){return arr.length+1}
//     if(x===4){return arr.length+2}
//     if(x===5){return arr.length}
// }