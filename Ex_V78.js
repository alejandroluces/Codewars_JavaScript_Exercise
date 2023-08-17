/*

Arabian String
592091% of 415954 of 2,412dacoxall1 Issue Reported
 JavaScript
Node v18.x
VIM
EMACS
Instructions
Output
You must create a method that can convert a string from any format into PascalCase. This must support symbols too.

Don't presume the separators too much or you could be surprised.

For example: (Input --> Output)

"example name" --> "ExampleName"
"your-NaMe-here" --> "YourNameHere"
"testing ABC" --> "TestingAbc"
STRINGSALGORITHMS

*/

function camelize(str) {
    return str.toLowerCase()
    .split(/[^a-zA-Z0-9]/)
    .filter((el) => el !== "")
    .map((word) => word[0].toUpperCase() + word.substring(1))
    .join("")
    }

    console.log(camelize("example name"));
    console.log(camelize("your-NaMe-here"));
    console.log(camelize("g,ot3Z6hSc 9!4gZ1hNNkq;I:!Mx'ofK0 !2SmwRs63J "))