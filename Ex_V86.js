/*

Min Factor Distance
18291% of 155410 of 838aweleshetu2 Issues Reported
 JavaScript
Node v18.x
VIM
EMACS
Instructions
Output
Write a function that returns the smallest distance between two factors of a number. The input will always be a number greater than one.

Example:

13013 has factors: [ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]

Hence the asnwer will be 2 (=13-11)

*/

const minDistance = (num) => {
    let factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
        factors.push(i);
        }
    }
    let min = factors[1] - factors[0];
    for (let i = 1; i < factors.length; i++) {
        if (factors[i] - factors[i - 1] < min) {
        min = factors[i] - factors[i - 1];
        }
    }
    return min;
    }

    console.log(minDistance(13013)); // 2
    console.log(minDistance(8)); // 1
    console.log(minDistance(25)); // 2