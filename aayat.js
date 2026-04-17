/*

let n = 10; // Size of the square 
for (let i = 0; i < n; i++) {
    let line = "";

    for (let j = 0; j < n; j++) {

        let isBorder = i === 0 || i === n - 1 || j === 0 || j === n - 1; // Check if it's a border position
        let isDiagonal = i === j || i + j === n - 1; // Check if it's a diagonal position

        if (isBorder || isDiagonal) { // If it's a border or diagonal position, add a star
            line += "* "; // Add a star followed by a space for better visibility
        } else {
            line += "  "; // Add two spaces for non-border and non-diagonal positions to maintain alignment
        }
    }

    console.log(line);
}

// let x = 5; // Size
// let line = "3 ";

// for (let i = 0; i < x; i++) {
//     // Check: Agar 'i' last index (x-1) ke barabar NAHI hai
//     if (!(i === x - 1)) {
//         console.log("Line " + (i + 1) + ": " + line);
//     } 
//     else {
//         console.log("Ye last line hai (g)");
//     }
// }

// // 1. User se number mangna
// let userInput = prompt("Ek number enter karein:");

// // 2. Input hamesha string (text) hota hai, use number mein badalna
// let number = Number(userInput);

// // 3. Logic: ! (NOT) operator ka use karke
// if (!(number % 2)) {
//     // Agar number % 2 zero (0) hai, toh !0 'true' ban jayega
//     alert(number + " ek SUM (Even) number hai.");
// } else {
//     // Agar number % 2 zero nahi hai, toh logic false ho jayega
//     alert(number + " ek ODD (Visham) number hai.");
// }

////////////////////////////////////////////////////////////////

let no = prompt("Enter Size Of Box : ");
let nn = Number(no);
console.log("");




// let n = 10; // Size of the square 
for (let i = 0; i < nn; i++) {
    let line = "";

    for (let j = 0; j < nn; j++) {

        let isBorder = i === 0 || i === nn - 1 || j === 0 || j === nn - 1; // Check if it's a border position
        let isDiagonal = i === j || i + j === n - 1; // Check if it's a diagonal position

        if (isBorder || isDiagonal) { // If it's a border or diagonal position, add a star
            line += "* "; // Add a star followed by a space for better visibility
        } else {
            line += "  "; // Add two spaces for non-border and non-diagonal positions to maintain alignment
        }
    }

    console.log(line);
}

*/
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter Your Name: ", (num) => {
  console.log(num);
  console.log("Hello " + num + ", Welcome to JavaScript Programming!");
  rl.close();
});