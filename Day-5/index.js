// Q. Given an number find out the number is even or odd.
// if number is even then print "Even" and if number is odd then print "Odd"
// var number = 345; Use if else conditional statement .

// var number = 17;

// console.log(number % 2 === 0)

// if (number % 2 === 0) {
//   console.log("Even");
// } else {
//   console.log("Odd");
// }

// 10 / 2 = 5 Quotient
// 10 % 2 = 0 remainder

//           ____ 5 -> Quotient
//        2 / 10
//            10
//             0 ->  remainder

//           ____ 8 -> Quotient
//        2 / 17
//            16
//             1 ->  remainder

//             ____ 7 -> Quotient
//         2 / 15
//             14
//              1 ->  remainder

// 2. Switch - conditional statement

function CheckNumber() {
  //   console.log(document.getElementById("number").value);
  //   alert("Function called.");
  const number = document.getElementById("number").value;
  console.log(number, "number");
  if (!number) {
    alert("Please type the number.");
  } else if (number % 2 === 0) {
    alert(`Number ${number} is Even.`);
  } else {
    alert(`Number ${number} is Odd.`);
  }
}
