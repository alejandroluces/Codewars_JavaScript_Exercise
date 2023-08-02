// Dada una hora en formato AM/PM como una cadena, conviértala a hora militar (24 horas) como una cadena.

// La medianoche es las 12:00:00 a. m. en un reloj de 12 horas y las 00:00:00 en un reloj de 24 horas. El mediodía es 12:00:00 p. m. en un reloj de 12 horas y 12:00:00 en un reloj de 24 horas

// Ejemplo de entrada: 07:05:45 p. m. Ejemplo de salida: 19:05:45

// Trate de no usar bibliotecas DateTime integradas.

// convertur 12:00:01AM to 00:00:01
// USA ECMAScript 6

const getMilitaryTime =(time)=> {
    let timeArr = time.split(':');
    
    let hours = timeArr[0];
    
    let minutes = timeArr[1];
    
    let seconds = timeArr[2].slice(0, 2);
    
    let meridiem = timeArr[2].slice(2, 4);
   
    let newTime = '';

    if (meridiem === 'AM') {
        if (hours === '12') {
            hours = '00';
        }
        newTime = `${hours}:${minutes}:${seconds}`;
    }

    if (meridiem === 'PM') {
        if (hours !== '12') {
            hours = parseInt(hours) + 12;
        }
        newTime = `${hours}:${minutes}:${seconds}`;
    }

    return newTime;


}

console.log(getMilitaryTime('12:00:01AM'));

console.log(getMilitaryTime('9:00:01PM'));
