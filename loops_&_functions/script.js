console.log("Loops & Functions")

 let sum = 0
 let n = prompt("Enter Number?")
 n = Number.parseInt(n)
 for (let i = 0; i < n; i++){
    console.log(i + 1)
 }

//  factorial program
let n1 = parseInt(prompt("Enter a number:"));
let factorial = 1;

for (let i = 1; i <= n; i++) {
    factorial *= i;
}

console.log(`Factorial of ${n1} is: ${factorial}`);
