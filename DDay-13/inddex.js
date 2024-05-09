const array = [1, 2, 3, 4];

const output = array.map((awdiz) => awdiz * 2);

console.log(output);






const array = [1, 2, 3, 4, 5];

array.forEach((ele) => console.log(ele));






const array = [1, 2, 3, 4, 5];
// 1 3 6 10 15
const sum = array.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum);





const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const combinedArray = array2.concat(array1);
console.log(combinedArray);



const numbers = [1, 2, 3, 4, 5, 6];

const output = numbers.find((number) => number > 3);

console.log(output);




const number = [5, 6, 7, 8, 9];
const index = number.findIndex((value) => value > 4);
console.log(index);





const data = [1, 2, 3, 4, "cat", "dog"];

const isExist = data.includes("abc");
console.log(isExist);
