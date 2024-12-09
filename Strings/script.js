//let name = "Shubham"  //Double Quote
// console.log(name.length)

//let animal = 'Dog'  //Single Quote
// console.log(animal)

// Template literal
// let name2 = "Shubham";
// let age = 20;

// let sentence = `The ${name2} age is ${age}`
// console.log(sentence)

// Strings Methods

// let name3 = "Shubham"
// console.log(name3.length)

// let name4 = "Shubham"
// console.log(name4.toUpperCase())

// let name5 = "Shubham"
// console.log(name5.toLowerCase())

// let name6 = "shivam"
// console.log(name6.slice(2,4))

// let name7 = "shivam"
// console.log(name7.slice(2))

// let name8 = "Shivam Bhai"
// let newname = name8.replace("Bhai","Dost")
// console.log(newname)

// let name9 = "Shivam"
// let name10 = "Sourabh"
// let nameshort = name9.concat(name10," yes")
// console.log(nameshort)

// let name11 = "    Shivam"
// let nameshort1 = name11.trim()
// console.log(nameshort1)

// let name12 = "Shivam"
// console.log(name12[0])
// console.log(name12[1])

// Practice Questions:-
// Question No 1:- Wjat will be the output of the following:-
console.log('har"'.length);

// output:- 4

// Question no 2:- Explore trh include , starts with and ends with function as a string?
const sentence = "The quick brown fox jumps over the lazy dog.";
const word = "fox";
console.log(
  `The word "${word}" ${
    sentence.includes(word) ? "is" : "is not"
  } in the sentence`
);


// Question 3:- Write a program  to convert a string into lower case
 const student = "Shubham"
 console.log(student.toLowerCase())

//  Question 4:- Extract the amount of the string "Please give me rupess 1000"
let str = "Please give me rupess 10000"
let amount = Number.parseInt(str.slice(22))
console.log(typeof amount)
console.log(amount)

// Output :- 1000

// Qquestion 4: - Ans : - The sting can not be converted in becaue it strings are immutable to it.