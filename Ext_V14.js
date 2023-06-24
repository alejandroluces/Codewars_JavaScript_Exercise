//Ejemplos de callback

// const nombre1 =(nombre2) =>{
//     setTimeout(function(){console.log("Primero");
//     nombre2()
//     },3000)
// }
// const nombre2 =() =>{
//     console.log("segundo");
    
// }

// nombre1(nombre2);
// nombre2();

function buscar(dni,fn){

    setTimeout(()=>{
        fn ("alejandro Luces")
    },3000)
    
    
}

buscar("17648971",(numero)=>{
    console.log(numero);
    
});
for (let i = 0; i < 10; i++){
    console.log(`${i}x${5}=${i*5}`);
    
}
