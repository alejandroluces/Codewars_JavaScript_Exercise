
// Un héroe se dirige al castillo para completar su misión. Sin embargo, le han dicho que el castillo está 
// rodeado por un par de poderosos dragones. cada dragón necesita 2 balas para ser derrotado, 
// nuestro héroe no tiene idea de cuántas balas debe cargar.

// Devuelva verdadero si es así, falso de lo contrario :)


const hero =(bullets, dragons) =>{


return bullets /dragons >=2? true:false

}

console.log(hero(10, 5));
console.log(hero(7, 4));
console.log(hero(4, 5));
console.log(hero(100, 40));
console.log(hero(1500, 751));
console.log(hero(0, 1));




