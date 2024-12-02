console.log("Conditional Statements");

// if statement
let a = prompt("Enter Your age?");
a = Number.parseInt(a);
console.log(typeof a);
// if (a > 0) {
//   console.log("a is positive");
// }

// If else statement
// if (a > 0) {
//   console.log("a is positive");
// } else {
//   console.log("a is negative");
// }

// if..else..if else statement
let age = 20
if (age > 0) {
    console.log("a is valig age");
} else if (age > 10 && age < 15) {
    console.log("But you are a kid");
} else if (age > 18) {
    console.log("Not a kid");
} else {
    console.log("Invalid Data");
}
