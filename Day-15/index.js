// Binary Search

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var target = 10;
function BinarySearch(array, target) {
  var left = 0;
  var right = array.length - 1;
  while (left <= right) {
    var midIndex = Math.floor((left + right) / 2);
    console.log(midIndex, "midIndex", array[midIndex]);
    if (array[midIndex] === target) {
      return midIndex;
    } else if (array[midIndex] < target) {
      console.log(array[midIndex], target, "element is lesser than target");
      left = midIndex + 1;
    } else if (array[midIndex] > target) {
      console.log(array[midIndex], target, "element is greater than target");
      right = midIndex - 1;
    }
  }
}

// function BinarySearch(array, target) {
//   const middleIndex = Math.floor(array.length / 2);
//   console.log(middleIndex, array[middleIndex]);
//   if (target == array[middleIndex]) {
//     console.log(middleIndex);
//   }
// }

console.log(BinarySearch(numbers, target));
