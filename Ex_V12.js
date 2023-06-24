/* 
Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
*/
// Esta es la solucionrecomenda por el autor del ejercicio
// 
/* 
function peopleWithAgeDrink(age) {
    if (age < 14) return "drink toddy";
    if (age < 18) return "drink coke";
    if (age < 21) return "drink beer";
    return "drink whisky";
    }

*/

const peopleWithAgeDrink =(old) =>{
    if (old<14) return "drink toddy";
    if (old<18) return "drink coke";
    if (old<21) return "drink beer";
    if (old>=21) return "drink Whisky";
}


console.log(peopleWithAgeDrink(22));



