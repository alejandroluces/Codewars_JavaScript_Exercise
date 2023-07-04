// Escriba una función llamada setAlarm// ( según el idioma) que reciba dos parámetros set_alarm. 
// El primer parámetro, , es verdadero siempre que esté empleado y el segundo parámetro, es verdadero 
// siempre que esté de vacaciones.set-alarmsetalarmemployedvacation

// La función debería devolver verdadero si está empleado y no está de vacaciones (porque estas son las 
//     circunstancias en las que necesita configurar una alarma). De lo contrario, debería devolver falso. Ejemplos:

// employed | vacation 
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

const setAlarm =(employed, vacation) =>{
if(employed===true && vacation===true){return false}
if(employed===true && vacation===false){return true}
if(employed===false && vacation===true){return false}
if(employed===false && vacation===false){return false}


// Otra soluccion es:

// return employed && !vacation;

}
console.log(setAlarm(true, true));
console.log(setAlarm(false,true));
console.log(setAlarm(true, false));
