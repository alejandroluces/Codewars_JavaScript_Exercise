// Debe crear una función, helloWorldque devolverá la cadena Hello, World!sin usar cadenas sin formato. Esto incluye comillas, 
// comillas dobles y cadenas de plantilla. 
// Sin embargo, puede usar el Stringconstructor y cualquier función relacionada.

// Ejemplo de solución:



// const saludo= "Hello, World!"

// const helloWorld =() =>{
//     return  saludo
// }
// console.log(saludo);

const PHRASE = 'Hello, World!'

const helloWorld = () => {
  return PHRASE
}
console.log(PHRASE);

// Otra forma de solucionar___________________

const helloWorld2 = () => {
    // feel free to change this into a function :)
        return String.fromCharCode(72, 101, 108, 108, 111, 44, 32, 87, 111, 114, 108, 100, 33);
    
  };
  
  console.log(helloWorld2());
  
    
      



