/*

Descripción:
Función completa findSequences. Acepta un número entero positivo n. Tu tarea es encontrar tales secuencias de números enteros:

Entero positivo continuo y su valor suma es igual a n

For example, n = 15 
valid integer sequences:
[1,2,3,4,5]  (1+2+3+4+5==15)
[4,5,6]          (4+5+6==15)
[7,8]              (7+8==15)
El resultado debe ser una matriz [sequence 1,sequence 2...sequence n], ordenada por orden ascendente de longitud de secuencias; Si no se encuentra ningún resultado, devuelve [].

*/

const findSequences = (n) => {
    for (let i = 1; i <= n; i++) {
        let sum = 0;
        let sequence = [];
        for (let j = i; j <= n; j++) {
            sum += j;
            sequence.push(j);
            if (sum === n) {
                return sequence;
            }
        }
    }
    

}
console.log(findSequences(100))


/*

2 entrada: ["Berlin", "Paris", "Prague", "milan", "rome", "London", "Maracaibo"]salida:// {//   b: [ 'Berlin' ],//   p: [ 'Paris', 'Prague' ],//   m: [ 'milan', 'Maracaibo' ],//   r: [ 'rome' ],//   l: [ 'London' ]// }

*/

const cities = ["Berlin", "Paris", "Prague", "milan", "rome", "London", "Maracaibo"];

const groupCities = (cities) => {
    
    const citiesByLetter = cities.reduce((acc, city) => {
        const letter = city[0].toLowerCase();
        if (!acc[letter]) {
            acc[letter] = [];
        }
        acc[letter].push(city);
        return acc;
    }, {});
    return citiesByLetter;
}

console.log(groupCities(cities));