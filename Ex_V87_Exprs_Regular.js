

const frase = 'El conocimiento es poder, pero la practica es la clave para desbloquearlo.';
// De esta frase, reemplazar las vocales donde a=1, e=2, i=3, o=4, u=5 tomar en cuenta mayúsculas y minúsculas.
// Mostrar el resultado en consola.
const reemplazarVocales = (frase) => {

 return frase.replace(/a/gi, '1').replace(/e/gi, '2').replace(/i/gi, '3').replace(/o/gi, '4').replace(/u/gi, '5');

}
console.log(reemplazarVocales(frase));

