console.log("Conditional Statements");

// if statement
// let a = prompt("Enter Your age?");
// a = Number.parseInt(a);
// console.log(typeof a);

// if (a > 0) {
//   console.log("a is positive");
// }
// ------------------------------------------------------------
// // If else statement
// if (a > 0) {
//   console.log("a is positive");
// } else {
//   console.log("a is negative");
// }
// ---------------------------------------------------------------------
// if..else..if else statement
// let age = 20;
// if (age > 0) {
//   console.log("a is valig age");
// } else if (age > 10 && age < 15) {
//   console.log("But you are a kid");
// } else if (age > 18) {
//   console.log("Not a kid");
// } else {
//   console.log("Invalid Data");
// }

// output for the above code is : - Not a Kid.

// -----------------------------------------------------------------

// Switch Statement
// const expr = "Papaya";
// switch (expr) {
//   case "Apple":
//     console.log("Apple is red");
//     break;
//   case "Mango":
//   case "Papaya":
//     console.log("Mango and Papaya are out of stock");
//     break;
//   default:
//     console.log("No fruit is available");
// }

// output for the above code is : - Mango and Papaya are out of stock.

// -----------------------------------------------------------------

// Practice set 2

//Question 1 :- Use a logical operators to find the age of the person lies between the age 1- to 20
// let age = 35;
// if (age >= 1 && age <= 20) {
//   console.log("Age lies between 1 to 20");
// } else {
//   console.log("Age does not lies between 1 to 20");
// }

// -----------------------------------------------------------------

// Question 2 : - Demonstrate the use of switch case statement  in javascript
// const expr = "Papaya";
// switch (expr) {
//   case "Apple":
//     console.log("Apple is red");
//     break;
//   case "Mango":
//   case "Papaya":
//     console.log("Mango and Papaya are out of stock");
//     break;
//   default:
//     console.log("No fruit is available");
// }

// -----------------------------------------------------------------

// Question 3 : - Write a javascript program to find the whether a numbber  is divisible by 2 and 3.
// let num = 10;
// if (num % 2 == 0 && num % 3 == 0) {
//   console.log("Number is divisible by 2 and 3");
// } else {
//   console.log("Number is not divisible by 2 and 3");
// }

// -----------------------------------------------------------------

// Question 4 : -  Write a javascript program to find the whether a numbber  is divisible by either 2 and 3.
// let num = 10;
// if (num % 2 == 0 || num % 3 == 0) {
//   console.log("Number is divisible by either 2 or 3");
// } else {
//   console.log("Number is not divisible by either 2 or 3");
// }

// -----------------------------------------------------------------

// Question 5 : - Print "You can drive" 0r "You cannot drive" based on age being gretaer than 18 using tenary operator.

let age = 25;
let a  = age > 20 ? "You can Drive" : "You can not drive"
console.log(a)