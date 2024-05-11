// Q . Linear Searach
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var target = 2; // Compare  number.length / 2 -> 3

function find(array, target) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === target) {
      console.log(i);
    }
  }
}
find(numbers, target);

// Time complixicity - time

// Space complixicity - memory O(1)

// On^2
// On

// While Loop

// Q Print numbers from 1-10 by using while loop

// for(starting, ending, sequence){
//     code
// }

// starting
// while(ending ){
//     code
//  sequence
// }




var number = 4; //7 10 13 16 19 22

while (number < 24) {
  console.log(number);
  number += 3;
}






var number = 10;

while (number > 0) {
  console.log(number);
  number--;
}





// Binary Search

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var target = 8;

function BinarySearch(array, target) {
  const middleIndex = Math.floor(array.length / 2);
  //   console.log(array[middleIndex]);
  if (target == array[middleIndex]) {
    console.log(middleIndex);
  }
}

BinarySearch(numbers, target);
