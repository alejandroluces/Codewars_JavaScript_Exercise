


// const array =(string)=>{
//  let qtyPos= string.split(",").length
//     console.log(qtyPos);
    
//     if(qtyPos<=2){return null}
//     else{return string.slice(2,-2).split(",").join(" ").trim()}
//     //El slice da problemas



// }

const array =(string)=>{
    let arr=string.split(",").splice(-1, 1)
    console.log(arr);
    
    let qtyPos= string.split(",").length
       console.log(qtyPos);
       
       if(qtyPos<=2){return null}
       if (qtyPos>2) {return arr.splice(1,-1)
        
       }
       //El slice da problemas
   
   
   
   }


// console.log(array(''));
// console.log(array('1'));
// console.log(array('A1,B2'));
// console.log(array('1,2,3'));
// console.log(array('1,2,3,4'));
// console.log(array('A1,B2,C3,D4,E5'));
// console.log(array('A,1,23,456,78,9,Z'));
console.log(array('NY3S0,3XW,O7,TL,J65OM'));

