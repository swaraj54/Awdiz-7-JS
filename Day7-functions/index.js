// cd filename ,  cd ..- change directory (folder)

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
// Arrow function
// Traditional function

// var number = 1;
// console.log(number);

// Set of codes

// Calculator

// addition -> { code }
// subtraction -> {code }

// cupboard -> function -> addition
// cupboard -> subtraction
// cupboard -> mutil
// cupboard ->
// cupboard ->

// varible -> to store data
// function -> to store multiple lines of code

// Traditional function

function addition() {
  var number1 = 10;
  var number2 = 10;
  return number1 + number2;
  console.log("Hiii");
}
const answer = addition();

function IncreaseNumberOfProduct() {
  var product = 1000;
  return product + product;
}
const price = IncreaseNumberOfProduct();

// const number1 = 10;
// const number2 = 20;

// function Subtraction() {
//   return;
// }

function Addition(kuchbhi, secondValue) {
  return kuchbhi + secondValue;
}
function Subtract(kuchbhi, secondValue) {
  return kuchbhi - secondValue;
}
function Multi(kuchbhi, secondValue) {
  return kuchbhi * secondValue;
}
function Divid(kuchbhi, secondValue) {
  return kuchbhi / secondValue;
}

console.log(Addition(number1, number2));
console.log(Subtract(number1, number2));
console.log(Multi(number1, number2));
console.log(Divid(number1, number2));

function CheckNumberIsEvenOrOdd(number) {
  if (number % 2 === 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}
CheckNumberIsEvenOrOdd(10);

// Array

// [data, data, data];

var students = ["Virat", "Rohit", "Rahul"];
console.log(students, "students");
console.log(students.length); // 3
console.log(students[0]);
console.log(students[1]);
console.log(students[students.length - 1]);

// Map()
// foreach()
// filter()

// Loops :
// for
// while

// for (starting; ending; sequence) {
//   code;
// }

// Q. Print numbers from 1 to 100, by using for loop.

for (var number = 1; number <= 5; number++) {
  console.log(number);
  //   number++;
}
// // 1st Iteration :
// var number = 1;
// number <= 5, 1 <= 5, true;
// console.log(number);  1
// number++; 1 => 2

// 2nd Iteration :
// number = 2
// number <= 5; 2 <= 5;  true
// console.log(number ) 2
// number++; 2 => 3

// 3rd Iteration

// number = 3
// number <= 5 ; 3 <= 5; true
// console.log(number)  3
// number++; 3 => 4

// 4 th Iteration

// number = 4
// number <= 5 ; 4 <= 5 ; true
// console.log(number)  4
// number++. 4 -> 5

// 5th iteration

// number = 5
// number <=  5; 5 <= 5; true
// console.log(numberm) 5
// number++; 5 -> 6

// 6 th iteration

// number = 6
// number <= 5 ; 6 <= 5 : false

// stop

// Q Print number from 10 to 60 with gap of 4;

for (var i = 10; i <= 60; i += 4) {
  console.log(i);
}

// Q . Print number from 33 to 76 with gap of 3 but number also must be even

for (var i = 33; i <= 76; i += 3) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// 1+2+3+4+5+6+7+8+9+10

// 120

// Whats the addition of number from 23 to 89 with gap of 2 and number must be odd.

var finalCount = 0;
for (var i = 23; i <= 89; i += 2) {
  if (i % 2 === 1) {
    console.log(i);
    finalCount += i;
  }
}
console.log(finalCount);

// 1 - 5; 1 * 2 *  3 *  4 *  5  -> 120

var finalCount;
for (var i = 1; i <= 5; i++) {
  if (finalCount == undefined) {
    finalCount = i;
  } else {
    finalCount = finalCount * i;
  }
}
console.log(finalCount);

var number = 10;
number = number + 1;
number += 3;
number++;
number++;
number++;
console.log(number);

var number = 10;
number = number - 1;
number -= 10;
number--;
console.log(number);
