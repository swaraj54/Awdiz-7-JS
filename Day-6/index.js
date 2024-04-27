// Datatypes
// String
// Number
// Boolean
// undefined
// console.log()
// typeof()
// Varibles
// Var
// let
// const
// Scope
// block
// hoisting

// Conditional Statement
// 1. if else
// 2. switch



// 2. Switch - conditional statement

// switch(condition, 11){
//     case first 10  :
//     statement 1
//     case second 11:
//     statement 2
//     case third 12:
//     statement 3
//     default
//     statement
// }

var fruit = "HBHGVJ";

switch (fruit) {
  case "Watermelon":
    console.log("The fruit is watermelon.");
    break;
  case "Mango":
    console.log("The fruit is Mango.");
    break;
  case "Banana":
    console.log("The fruit is Banana.");
    break;
  default:
    console.log("Fruit not exist.");
}

// && || Operators

// && Logical Operator :

var first = 10;
var second = 20;
var third = 30;

console.log(first > second);
console.log(first > third);
console.log(second > third);

console.log(30 > 20 && 20 > 10 && 3 > 10); //true && true && true -> true, false
// if all values are true then only && operator will return true
// if even one value found false then && operator will return false

console.log(3 < 2 || 3 < 1 || 2 < 1); // false || false || false  -> true, false
// if even one true found then || operator will return true 
// when all conditions are false then only it'll return false


// Form -> number even or odd 

// number -> required 
// name 
// email 
// password 
// confrimPassword


if(number && name && email ){
  "All vvalues are exist"
}

if(!number || !name || !email ){
  "All vvalues are required."
}

