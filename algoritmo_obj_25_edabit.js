
const countTrue =(array) =>{

    // let count = 0;
    // array.forEach(element => {
    //     if(element === true){
    //         count++;
    //     }
    // });
    // return count;

    return array.filter((item)=> item == true).reduce((acc,item)=> acc+item,0)


}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));

