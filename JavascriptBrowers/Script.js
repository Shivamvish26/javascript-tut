// console.log("Helo World")
// console.assert("Hello" === true)
// console.assert("Hello" == false)

// const mobile1 = {name:"Iphone", model:"16"}
// const mobile2 = {name:"Samsung", model:"s24"}
// console.table([mobile1,mobile2])

console.log("Your Script Works");

// DOM and BOM

console.log(document);

console.log(document.body);

// console.log((document.body.style.background = "lightblue"));

// console.log(location.href="https://www.google.com")

// Question No:1,2,3

// let runagain = true;
// const candrive = (age) => {
//   return age >= 18 ? true : false;
// };
// while (runagain) {
//   let age = Number(parseInt(prompt("Enter Age")));
//   if (age < 0) {
//     console.error("Age cannot be negative");
//     break;
//   }

//   if (candrive(age)) {
//     alert("Yes you can drive car");
//   } else {
//     alert("No you can't drive car");
//   }
//   runagain = confirm("Do you want to play again?");
// }

// Question No:- 4
// let num = Number(parseInt(prompt("Enter digit number.")));
// if (num > 4) {
//   console.log((location.href = "https://www.google.com/"));
// } else {
//   console.log("Enter Valid Number");
// }

// question No:- 5
let color = prompt("Enter the page background color");
document.body.style.background = color;
console.log(color);