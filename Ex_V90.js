//Quiero calcular  el numero del dia del año. Por ejemplo si hoy es 20 de enero, el numero del dia del año es 20. Si hoy es 20 de febrero, el numero del dia del año es 51. Para solucionarlo evitar usar bucles y usar un array con los dias de cada mes.

const toDayOfYear = (arr) => {
    let arrDays = [31,28,31,30,31,30,31,31,30,31,30,31];
    let [d, m, y] = arr;
    let sum = 0;
    for (let i = 0; i < m - 1; i++) {
        sum += arrDays[i];
    }
    sum += d;
    if (m > 2 && y % 4 == 0 && (y % 100 != 0 || y % 400 == 0)) {
        sum++;
    }   
    return sum;
}
console.log(toDayOfYear([25, 12, 2017]));
console.log(toDayOfYear([14, 3, 1066]));


