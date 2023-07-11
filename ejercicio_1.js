//realizar una funcion que reciba un array de strings y debe retornar un objeto
//enumerando las propiedades del 0 a la n donde su valor sea la longitud de cada string
// lo que recibe: ["Miami", "California"],
// lo que retorna: { '0': 5, '1': 10 }


const nce =(arr) =>{

    let longitudElment= arr.map((item)=>item.length)
    return {...longitudElment}
}

console.log(nce(["dato1", "dato2","dato3"]));
