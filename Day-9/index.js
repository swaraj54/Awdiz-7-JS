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

// Logical Operators
// && ||

// Function;
// Traditional function
// array
// loops - for
// ++ --

// nested for loops

// for (Start; end; sequence) {
//   for (start; end; sequence) {
//     for (start; end; sequence) {}
//   }
// }

// Q Given an array, find two numbers whose addition is target.

var array = [1, 2, 3, 4, 5, 6];
var target = 25;

// 1st iteration : 1 (i) + 2 (j),  1 (i) + 3 (j), 1 (i) + 4 (j), 1 (i) + 5 (j), 1 (i) + 6 (j)
// 2nd iteration : 2 (i) + 3 (j), 2 (i) + 4 (j), 2 (i) + 5 (j), 2 (i) + 6 (j)
// 3rd iteration : 3 (i) + 4 (j), 3 (i) + 5 (j), 3 (i) + 6 (j)
// 4th iteration : 4 (i) + 5 (j), 4 (i) + 6 (j)
// 5th iteration : 5 (i) + 6 (j)

// 1 + 4 -> 5
// 2 + 3 -> 5
var count = 0;
for (var i = 0; i < array.length; i++) {
  // 0 - 5 = 6
  
  for (var j = i + 1; j < array.length; j++) {
    //0 - 5 = 6
    console.log("Inner for loop.");
    count++
    // j++
    console.log(array[i], "+", array[j], "=", array[i] + array[j]);

    // put conditional statement here
  }
  // i++
}
console.log(count)

// 6

// 1 st iteration :
// i = 0;
// i < array.length ; 0 < 6 ; true

// j += 1; j = 1
// j < array.length ; 1 < 6 ; true
// console.log("Inner for loop.");
// j =2
// j < array.length ; 2 < 6 ; true
// console.log("Inner for loop.");
// j =5
// j < array.length ; 5 < 6 ; true
// console.log("Inner for loop.");
// j++
// j = 6
// j < array.length ; 6 < 6 : false

// 2nd iteration

// i = 1;

// i < array.length ; 1 < 6 : true

// j=>
// j = i + 1
// j = 1 + 1 = 2

// j < array.length ; 2 < 6 : true
// console.log("Inside inner function")

// j = 3

// j < array.length ; 3 < 6 : true
// console.log("Inside inner function")

// j = 4

// j < array.length ; 4 < 6 : true
// console.log("Inside inner function")

// j = 5

// j < array.length ; 5 < 6 : true
// console.log("Inside inner function")

// j = 6

// j < array.length ; 6 < 6 : false

// 3 rd iteration

// i = 2 ;

// // target = 5

// // 1 + 2 = 3 , 1 + 3 = 4, 1 + 4 = 5, 1 + 5 = 6, 1 +6 = 7
// // 2 + 3 = 5, 2 + 4 = 6, 2 + 5 = 7, 2 + 6 = 8
// // 3 + 4 = 7, 3 + 5 = 8 , 3 + 6 = 9
// // 4 + 5 = 9, 4 + 6 = 10
// // 5 + 6 =11
