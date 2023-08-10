/* 
Dado un array de correos electrónicos
Retornar un obj por cada usuario con las propiedades nombre ,correo y clave
Nota el nombre debe ser  extraido de cada correo y la clave  es la longitud de el nombre multiplicada por el numero en el correo
 si el correo no tiene numero solo coloca la longitud
["Kenier22@gmail.com", "Josue32@gmail.com","oliver47@gmail.com","Francisco@gmail.com"]
*/
const correos = ["Kenier22@gmail.com", "Josue32@gmail.com","oliver47@gmail.com","Francisco@gmail.com"]

const usuarios = (correos) => {
    return correos.map((correo)=> {
        // const nombre = correo.split("@")[0];
        //Quiero quitarme los numeros del nombre. El codigo seria asi:
        const nombre = correo.split("@")[0].replace(/\d+/g, '');
        console.log(nombre);
       // Para sacar el numero del correo se realiza lo siguiente:
        let numero = correo.split("@")[0].match(/\d+/)
        numero = numero ? numero[0] : nombre.length;
        console.log(numero);
        // const clave = nombre.length * numero
        // const clave = nombre.length * (correo.split("@")[1].split(".")[0].match(/\d+/) || nombre.length);
        if (numero===nombre.length ){ clave = numero}else{clave = nombre.length * numero}
        
        return {nombre, correo, clave};
    })
}

console.log(usuarios(correos));