var array = [1, 2, 3, 4, 5];
var target = 6;
// 1 + 4 =  5
// 2 +3  = 5
// 1 4
// 2 3
function FindTarget(array, target) {
  for (var i = 0; i < array.length - 1; i++) {
    //   console.log(array[i], "i");
    for (var j = i + 1; j < array.length; j++) {
      // console.log(array[j], "j");
      if (array[i] + array[j] === target) {
        console.log(array[i], array[j]);
      }
      // j++
    }
    //   i++
  }
}
FindTarget(array, target);

// 1 + 2 = 3 , 1 + 3 = 4, 1 + 4 = 5 , 1 + 5 = 6

// 2 + 3 = 5, 2 + 4 = 6, 2 + 5 = 7

// 3 + 4 = 7, 3 + 5 = 8

// 4 +5  = 9

var array = [5, 6, 7, 8, 9, 4, 5, 7, 6, 3, 8, 2, 4, 5, 9];

var target = 10;

// 5 + 6 + 7,  5 + 6 + 8 , 5 + 6 + 9 , 5 + 6 + 4 , ... , 5 + 6 + 9
// 5 + 7 + 8, 5 + 7 + 9, 5 + 7 + 4 , ... , 5 + 7 + 9
// 5 + 8 +

// 5 6 7

// Find 3 numbers from array whose addition is target .
function FindThreeNumber(array, target) {
  var results = [];
  for (var i = 0; i < array.length - 2; i++) {
    for (var j = i + 1; j < array.length - 1; j++) {
      for (var k = j + 1; k < array.length; k++) {
        console.log(array[i], array[j], array[k]);
        // if (array[i] + array[j] + array[k] === target) {
        //   results.push([array[i], array[j], array[k]]);
        // }
      }
    }
  }
  return results;
}

console.log(FindThreeNumber(array, target));

var array = [1, 2, 3];
array.push(4);
console.log(array);
array.pop();
array.pop();
console.log(array);
array.unshift(4, 5);
array.unshift(6);
console.log(array);
array.shift();
console.log(array);



var students = ["virat", "rohit", "rahul", "rishabh"];
// students.splice(1, 1, "Rahul");
// students.splice(2, 0, "Rishabh"); // ['v', R, Ri, r]
// students.splice(0, 1, "a"); // a R ri , r
// students.splice(3, 0, "b"); // a , r, ri, b,r
// console.log(students);

const newArray = students.slice(0, -1);
console.log(newArray);



const todo = ["Do assignment", "Eat lunch", "Go home"];
todo.splice(1, 1);
console.log(todo);

const array3 = [1, 2, "a", "1a"];
console.log(array3.toString());

// Expected output: "1,2,a,1a"

const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);

const array2 = [1, 30, 4, 21, 100000];
array2.sort();
console.log(array2);

const array1 = [1, 30, 4, 21, 100000];
array1.sort((a, b) => a - b);
array1.sort((a, b) => b - a);
console.log(array1);

// function(){}

// const Myfunction = (message) => {
//   console.log(message);
// };
// Myfunction("Hii");

function MyFunction() {
}
MyFunction();

const MyFunciton = () => {
};
MyFunciton();
