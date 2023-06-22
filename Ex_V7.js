// Cuando se le proporciona una letra, devuelve su posición en el alfabeto.
// Entrada :: "a" Salida :: "Posición del alfabeto: 1"

const position=(letter)=>{
    //Write your own Code!
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let position = alphabet.indexOf(letter) + 1;
    return `Position of alphabet: ${position}`;
    
}

console.log(position("a"));
console.log(position("z"));
console.log(position("e"));

// Otra forma de hacerlo

const position2=(letter2)=> {
    return `Position of alphabet: ${letter2.charCodeAt(0) - 96}`
  }

  console.log(position2("a"));