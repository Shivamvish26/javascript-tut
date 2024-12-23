console.log("DOM Manuplation Script Working");

let b = document.body;
// console.log("First Child of b is", b.firstChild)
// console.log("First Element Child node is",b.firstElementChild)
// console.log("Last elelment Child",b.lastElementChild)
// console.log("Next Element Sibling",b.nextElementSibling)
// console.log("Previous Element sting",b.previousElementSibling)

// Tabbles links

// let table = document.body.firstElementChild.firstElementChild;
// console.log("The first element child is:", table);
// console.log("Caption text:", table.caption.innerText);
// console.log("The Number of rows in table is", table.rows);
// console.log("Thhe head os the table is", table.thead);
// console.log("The body of the table is", table.tBodies[0]);

// console.log(typeof document);
// object
// console.log(typeof window);
// object

// Practice Questions :-
// Question no 1:-
// Create a navbar and change the color of the first element.
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red";

// Question 2:-
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green";

// Question 3:-
Array.from(document.getElementsByTagName("li")).forEach((element) => {
  element.style.background = "cyan";
});

function getdate() {
  var currentDate = new Date();
  console.log(currentDate);
}

getdate();

console.log(Math.floor(Math.random() * 10));

console.log(Math.floor(Math.random() * 100) + 1);

console.log(Math.random() < 0.5);
