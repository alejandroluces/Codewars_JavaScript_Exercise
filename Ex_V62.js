/* 
Thinking & Testing : True or False
711586% of 447504 of 1,943myjinxin20151 Issue Reported
 JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
No Story

No Description

Only by Thinking and Testing

Look at result of testcase, guess the code!
*/

// const testit=(n)=>{
//     return n.toString(2).replace(/0/g, '').length;
// }

function testit(n){
    return n.toString(2).split('').filter(x => x == 1).length
  }

//Ookokokk?
console.log(testit(0));
console.log(testit(0));

