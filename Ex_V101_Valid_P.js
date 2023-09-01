/*

Escriba una función que tome una cadena de paréntesis y determine si el orden de los paréntesis es válido. La función debería devolver truesi la cadena es válida y falsesi no es válida.

Ejemplos
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

*/

const validParentheses=(parenStr)=>{

    // El codigo debe considerar lo sguiente Como false ")("

    let count=0

    for(let i=0;i<parenStr.length;i++){
        if(parenStr[i]==="("){
            count++
        }else if(parenStr[i]===")"){
            count--
        }
        if(count<0){
            return false
        }
    }
    return count===0

}
console.log(validParentheses(")("));
