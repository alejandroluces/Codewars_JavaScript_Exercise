// Write a function that checks if a given string (case insensitive) is a palindrome. 
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same 
// backwards as forwards, such as madam or racecar, the date and time 12/21/33 12:21, and the 
// sentence: "A man, a plan, a canal – Panama".


// const isPalindrome =(x) =>{
//     let separarCad= x.split("");
//     let invertirCad=separarCad.reverse();
//     let unirCad=invertirCad.join("")
    
//     return unirCad
// }

// console.log(isPalindrome("hola"));//Resultado____ aloh
//El Split te separa la cadena___ El reverse la invierte____ el join las une de nuevo

/* 

const isPalindrome =(x) =>{
    wordMinuscula=x.toLowerCase()
    separarInvrCad= wordMinuscula.split("").reverse().join("")
    // Valor booleano sino es igual devuelve falso
    return worldMinuscula === separarInvrCad
}
let x="aNa"

console.log(isPalindrome(x));

*/
// Otra Forma de gestionarlo

const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false;
  }

  let x="aBa"
  console.log(isPalindrome(x));
  