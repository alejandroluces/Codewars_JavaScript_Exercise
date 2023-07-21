

/*  Crea un array de objetos que representen ciudades. Cada objeto debe tener 
propiedades como "nombre", "población" y "país". Luego, utiliza un método para 
crear una nueva propiedad en cada objeto que indique la densidad de población de 
la ciudad (población dividida entre la superficie de la ciudad). 
*/

 /*  Ejemplo de salida: // 
 [ { nombre: "Ciudad de México", población: 8918653, país: "México", superficie: 1485, densidad: 6009.7 }, 
 // { nombre: "Buenos Aires", población: 2891082, país: "Argentina", superficie: 203, densidad: 14239.6 }, 
 // { nombre: "Madrid", población: 6559748, país: "España", superficie: 604, densidad: 10856.4 } ]
*/

//Ejemplo de entrada: 

const citys =[ 
    { nombre: "Ciudad de México", población: 8918653, país: "México", superficie: 1485 }, 
    { nombre: "Buenos Aires", población: 2891082, país: "Argentina", superficie: 203 }, 
    { nombre: "Madrid", población: 6559748, país: "España", superficie: 604 } 

]




  let cityMasden= citys.map(item=>{ 
    let densidad= item.población/item.superficie;
   
     return{ ...item, densidad };
  })
  
    console.log(cityMasden);
    





