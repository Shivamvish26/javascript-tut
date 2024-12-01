// Primitive Data Types

let a = null;
let b = 1234;
let c = Symbol("Symbol");
let d = "Shubham";
let e = true; // it can be true or false
let f = BigInt("5") + BigInt("5");
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(typeof e)

// Non primitive data types

const students = {
  name: "Shubham",
  number: "9960636478",
  marks: "56",
};
console.log(students["marks"]);


// Practice set 1

// Question 1:- Create a variable of type string and try to add a number to it?
let a1 = "Shubham";
let b1 = 56
console.log(a1 + b1)


// Question 2:- Use type of operator to find the datatype of the string in last question?
console.log(typeof (a1 + b1))

// Question 3:- Create a const object in javascript can you change it to hold a number later?
const set = {
    name : "Rahul",
    number : "1234567890"
}
// set = 45  //Assignment to constant variable. it will through the error

// Question 4:- Try to add a new key to the const object in problem 3 where you are able to do it?
set ["friends"] = "Shubham"
set ["name"] = "Sourabh"
set ["number"] = "9960636478"
console.log(set)

// Question 5:- Write a Js projram to create a word meaning dictionary of 5 words?
const dist = {
    work:"Hardwork",
    sleep:"Have a good nap",
    raise:"Sun raise"
}
console.log(dist.raise)
