/*
Mientras usamos el transporte público, pudimos ver pantallas simples con un teletipo. A menudo proporciona información sobre las próximas estaciones y la hora prevista de llegada.

Implementemos una función que devolverá un fragmento de texto para que se muestre en una pantalla de ancho fijo. La función debe tomar textpara mostrar, widthde la pantalla y tickcomo paso del ticker. La función se llamará muchas veces con tickel parámetro aumentando constantemente.

Al principio, la pantalla está vacía. En el primer paso, solo se debe mostrar un carácter en la posición más a la derecha y así sucesivamente. Cuando se muestra el mensaje, debe desaparecer carácter por carácter a la posición izquierda y volver al estado en blanco de la pantalla. Después de ese ciclo debe comenzar de nuevo.



*/

function ticker(text, width, tick) {
    // Your code here
    let result = '';
    if (tick > text.length + width) {
        tick = tick % (text.length + width);
    }
    if (tick < width) {
        result = ' '.repeat(width - tick) + text.slice(0, tick);
    } else if (tick >= width && tick <= text.length + width) {
        result = text.slice(tick - width, tick);
    } else {
        result = text.slice(-1 * (tick - text.length - width));
    }
    return result.length < width ? result + ' '.repeat(width - result.length) : result;
}
// OTRA SOLUCION
// const ticker=(s,w,t)=>(' '.repeat(w)+s).repeat(~~(t/2+1||1)).slice(t,t+w)
// OTRA SOLUCION

// const ticker = (text,width,tick) => ( " ".repeat(width) + text + " ".repeat(width) ).substr( tick%(text.length+width), width ) ;

console.log(ticker('Hello world!', 10, 4)); // '    Hell'
console.log(ticker('Hello world!', 10, 5)); // '   Hello'



