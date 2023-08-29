/* 



// 1)

const duplicateNumbers=(num)=>num.map((item=>item*2))

console.log(duplicateNumbers([3, 5, 7, 9]));


// 2)

const nameInit=(flname)=>{
    let divdName=flname.map((item=>item.split(" ")))
    return divdName.map(secondN=>secondN[0][0]+secondN[1][0])
}

console.log(nameInit(["John Doe", "Jane Smith", "Michael Johnson"]));

// 3

const numbersExpoTwo=(numtwo)=>numtwo.map((itenum)=>itenum*itenum)

console.log(numbersExpoTwo([2, 4, 6, 8]));

// 4

const numPrimo=(nump)=>nump.filter((x)=>x>1&&x<=3||x%2!=0&&x%3!==0)

console.log(numPrimo([2, 3, 4, 5, 6, 7, 8, 9]));

// 5

const filtWords=(words,ini)=>{
return words.filter(word=>word[0].toLowerCase()===ini.toLowerCase())
}
console.log(filtWords(["apple", "banana", "avocado", "grape"],"A"));

// 6

const filtNum=(filnumbers,minumb)=>filnumbers.filter(fil=>fil>20)

console.log(filtNum([12, 25, 6, 40, 8, 15]));

// 7

const firstMultip=(nummultipl,numobj)=>nummultipl.find(intem=>intem%numobj===0)

console.log(firstMultip([5, 10, 15, 20, 25],3));

// 8

const searchFname=(snames,valmin)=>snames.find(sname=>sname.length>valmin)

console.log(searchFname(["Alice", "Bob", "Charlie", "David", "Eve"],6));

// 9

const searchNumPar=(searnumpar,valminimo)=>searnumpar.find(item=>item>=valminimo&&item%2===0)

console.log(searchNumPar([5, 7, 8, 10, 12, 15],10));


// 10

const numSeverable=(numsev,divider)=>numsev.findIndex(item=>item %divider===0)

console.log(numSeverable([15, 25, 30, 35, 40],10));

// 11

const searchNameLength=(namelength,lengthmin)=>namelength.findIndex(item=>item.length>=lengthmin)


console.log(searchNameLength(["Alice", "Bob", "Charle", "Davidd", "Eve"],6));

// 12

const searFirshNumImpar=(arr,minum)=>arr.find(item=>item<minum&& item%2!=0)

console.log(searFirshNumImpar([5, 7, 8, 10, 12, 15],9));

// 13

const orderNameDesendent=(arrnamee)=>{

    return arrnamee.sort((ac,acc)=> acc.length-ac.length)
}

console.log(orderNameDesendent(["Alice", "Bob", "Charlie", "David", "Eve"]));


// 14

const orderNumbers=ordernum=> ordernum.sort((c,d)=>c-d)

console.log(orderNumbers([10, 7, 345, 23, 12, 4567]));

// 15

const OrderAlfab=letter=>letter.sort((or,der)=>or.localeCompare(der))

console.log(OrderAlfab(["apple", "banana", "Orange", "grape", "Kiwi"]));

// 16

const duplicateParTripImpar=numduplitrip=>numduplitrip.map(item=>item%2===0?item*2:item*3)

console.log(duplicateParTripImpar([1, 2, 3, 4, 5]));


// 17

const findValAverage=(numfind, start, end)=>{

    let subarray=numfind.slice(start,end+1)
    subarray
    return subarray.reduce((n,m)=>n+m)/subarray.length
    
}

console.log(findValAverage([5, 10, 15, 20, 25, 30, 35, 40],2,5));

// 18

const searchNumLong=num=>num.sort((mc,mcc)=>mcc-mc)[1]

console.log(searchNumLong([7, 12, 9, 2, 15, 30, 10]));





END
*/

// _____________________________________________________________








// RETEAT 
// 1)
const duplicarN=num=>num.map(item=>item*2)

console.log(duplicarN([3, 5, 7, 9]));

// 2

const converNomInici=nom=>{
    let divNombre= nom.map((item=>item.split(" ")))
    return divNombre.map((item=>item[0][0]+item[1][0]))
}
console.log(converNomInici(["John Doe", "Jane Smith", "Michael Johnson"]));

// 3

const calculateNumAlcuadrado=num=>num.map((item=>item+item))

console.log(calculateNumAlcuadrado([2, 4, 6, 8]));

// 4

const numPrimos=(num)=>num.filter((item)=>item>1&&item<=3|| item%2!==0&&item%3!==0)

console.log(numPrimos([2, 3, 4, 5, 6, 7, 8, 9]));


// 5

const filtrarPalabraConletra=(arr,inic)=>{
    return arr.filter(word=>word[0].toLowerCase()===inic.toLowerCase())
}

console.log(filtrarPalabraConletra(["apple", "banana", "avocado", "grape"],"a"));


// 6

const filtrarNumValEspe=(arr,valor)=>{

    return arr.filter((item)=>item>valor)

}

console.log(filtrarNumValEspe([12, 25, 6, 40, 8, 15],20));

// 7

const searchMultiploNum=(arr,numdado)=>{

    return arr.find(item=>item%numdado===0)

}

console.log(searchMultiploNum([5, 9, 15, 20, 25],3));

// 8

const nameLong=(namelong,min)=>{

    return namelong.find(item=>item.length>=min)

}

console.log(nameLong(["Alice", "Bob", "Charlie", "David", "Eve"],6));

// 9

const searchNumPar=(arr,val)=>{

    return arr.find(item=>item>=val)

}

console.log(searchNumPar([5, 7, 8, 10, 12, 15],9));


// 10

const serchIndicDiv=(arr,divsor)=>{

    return arr.find(item=>item%divsor===0)

}

console.log(serchIndicDiv([12, 24, 30, 35, 40],5));


// 11

const firstNameLonger=(names,long)=>{

    return names.find(item=>item.length>=long)

}

console.log(firstNameLonger(["Alice", "Bob", "Charlie", "David", "Eve"],6));


// 12

const searchFirshNumImpar=(arr,min)=>{

    return arr.findIndex(item=> item>=min && item%2!==0)

}


console.log(searchFirshNumImpar([5, 7, 8, 10, 12, 15],9));

// 13

const orderLongitud=(names)=>{

    return names.sort((a,b)=>b.length-a.length)

}

console.log(orderLongitud(["Alice", "Bob", "Charlie", "David", "Eve"]));

// 14

const orderNumAsc=num=>num.sort((a,b)=>a.toString()-b.toString())

console.log(orderNumAsc([10, 7, 345, 23, 12, 4567]));

// 15

const orderWordsAlb=arr=>arr.sort((a,b)=>a.localeCompare(b))

console.log(orderWordsAlb(["apple", "banana", "Orange", "grape", "Kiwi"]))

// 16

const duplicarParTripliImpar=numbers=>numbers.map((item)=>item%2===0?item*2:item*3)

console.log(duplicarParTripliImpar([1, 2, 3, 4, 5]));


// 17

const averageNum=(arr,inic,end)=>{

    let subarray= arr.slice(inic,end+1)

    return subarray.reduce((a,b)=>a+b)/subarray.length

}

console.log(averageNum([5, 10, 15, 20, 25, 30, 35, 40],2,5))


// 18

const secondVeryLong=number=>number.sort((a,b)=>b-a)[1]

console.log(secondVeryLong([7, 12, 9, 2, 15, 3, 10]));
