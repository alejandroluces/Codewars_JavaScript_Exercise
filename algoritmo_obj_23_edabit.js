// // Extraer datos de la ciudad
// Cree una función que tome un objeto como argumento y devuelva una cadena con datos sobre la ciudad. 
// Los datos de la ciudad deberán extraerse de las tres propiedades del objeto:

// name
// population
// continent
// La cadena debe tener el siguiente formato: X tiene una población de Y y está situada en Z (donde X es el nombre de la ciudad, 
//     Y es la población y Z es el continente en el que se encuentra la ciudad).

// Ejemplos
// cityFacts({
//   name: "Paris",
//   population: "2,140,526",
//   continent: "Europe"
// }) ➞ "Paris has a population of 2,140,526 and is situated in Europe"

// cityFacts({
//   name: "Tokyo",
//   population: "13,929,286",
//   continent: "Asia"
// }) ➞ "Tokyo has a population of 13,929,286 and is situated in Asia"

const citys=({
  name: "Paris",
  population: "2,140,526",
  continent: "Europe"
},
{
    name: "Tokyo",
    population: "13,929,286",
    continent: "Asia"
  })

// const cityFacts =(a) =>{
//   let city=Object.values(a)[0]
//   let poblacion=Object.values(a)[1]
//   let continem=Object.values(a)[2]
  
  
  
//   return `${city} has a population of ${poblacion} and is situated in ${continem}`
// }
const cityFacts =(a) =>{
  let values = Object.values(a)
  
  return `${values[0]} has a population of ${values[1]} and is situated in ${values[2]}` 
  }

console.log(cityFacts(citys));



