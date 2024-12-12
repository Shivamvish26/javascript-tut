console.log("Array");

// Accessing the vlaues
// let number = [1, 2, 3, 4, 5];
// console.log(number)
// console.log(number[0])
// console.log(number[1])
// console.log(number[2])
// console.log(number[3])

// Finding the length of the number
// console.log(number.length)

// Changing the value of the current array
// console.log(number[2]=8)
// console.log(number)

// Methods in string
// let b = number.toString()
// console.log(b)

// Method join
// let b2 = number.join("_")
// console.log(b2)

// Pop Method in javascript
// let b3 = number.pop()
// console.log(b3)
// console.log(number)

// push method in javascript
// let c = number.push(53)
// console.log(c)
// console.log(number)

// Shift method in javascript
// let c = number.shift()
// console.log(c)
// console.log(number)

// Shift method in javascript
// let d = number.shift();
// console.log(d);
// console.log(number);

// Unshift method
// let e = number.unshift(53);
// console.log(e);
// console.log(number);

// delete method
// let f = delete number[1];
// console.log(f);
// console.log(number);
// console.log(number[1]);

// reverse methos
// console.log(number.reverse())

// Sort Method
// let a = ["a","c","b","e","d"]
// console.log(a.sort())

// Splice Method
// const number1 = [1,2,3,4,5]
// console.log(number1.splice(2,1,23,24))
// console.log(number1)

// Slice Method
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// console.log(fruits.slice(1,4))

// classic for loop keep it in mind in array

let num = [3, 4, 5, 6, 7, 8];

// for(let i=0; i<num.length; i++){
//     console.log(num[i])
// }

// output :- 3,4,5,6,7,8

// for each loop
// num.forEach(element => {
//     console.log(element*element)
// });

// Array . from
// document.getElementsByClassName("relative z-[15]")
// Array.from("a")

// map function
// let arr = [21,22,34];
// let a = arr.map((value,index,array)=>{
//     console.log(value,index,array)
//     return value + index
// })
// console.log(a)

// filter function
// let arr2 = [24,25,7,15,3,2,8]
// let a2 = arr2.filter((a2)=>{
//     return a2 < 10
// })
// console.log(a2)

// Practice Questions

// Question No:- 1
// let arr = [1,2,3,4,5,6,7,8,88]
// let a = prompt("Enter a number")
// a = Number.parseInt(a)
// arr.push(a)
// console.log(arr)

// Question No: - 2
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 88];
// let a;
// do {
//    a = prompt("Enter a number");
//   a = Number.parseInt(a);
//   arr.push(a);
// } while (a != 0);
// console.log(arr);

// Question No:- 3
// let arr = [11, 22, 36, 42, 56, 66, 47, 86, 88, 30, 50, 60, 10];
// let n = arr.filter((x) => {
//   return x % 10 == 0;
// });
// console.log(n);

// Question No:- 4
// let arr = [1, 3, 4, 5, 6, 7, 8, 9];
// let n = arr.map((x) => {
//   return x * x;
// });
// console.log(n);

// Question No:- 5
// let arr = [1, 3, 4];
// let n = arr.reduce((x1, x2) => {
//   return x1 * x2;
// });
// console.log(n);

// Generate a random number between 1 and 100
let number = Math.floor(Math.random() * 100) + 1;
let chances = 0;

while (true) {
  let guess = parseInt(prompt("Guess a number between 1 and 100:"), 10);

  chances++;

  if (guess === number) {
    alert(`Correct! The number was ${number}.`);
    break;
  } else if (guess < number) {
    alert("Too low! Try again.");
  } else if (guess > number) {
    alert("Too high! Try again.");
  } else {
    alert("Invalid input. Please enter a number.");
  }
}

// Display the result
totalPoints = 100 - chances;
alert(`Game over! Your score: ${totalPoints}. Actual number: ${number}.`);
