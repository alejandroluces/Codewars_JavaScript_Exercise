/*
Arabian String
592091% of 415954 of 2,412dacoxall1 Issue Reported
 JavaScript
Node v18.x
VIM
EMACS
Instrucciones
Producción
You must create a method that can convert a string from any format into PascalCase. This must support symbols too.

Don't presume the separators too much or you could be surprised.

For example: (Input --> Output)

"example name" --> "ExampleName"
"your-NaMe-here" --> "YourNameHere"
"testing ABC" --> "TestingAbc"

*/

const camelize=(str)=> {
    return str.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  }
  
  console.log(camelize("example name"));
  console.log(camelize("your-NaMe-here"));
  
  console.log(camelize("java script"));