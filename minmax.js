/*
🧠 UNIQUE CHALLENGE (Level 🔥🔥🔥)

👉 User 4 numbers dega
👉 Fir user 2 choices dega:

"even" ya "odd" (filter)
"max" ya "min" (operation)
🎯 Kaam kya hai?
Pehle numbers me se sirf:
even numbers ya
odd numbers filter karo
Fir filtered numbers me:
max ya min find karo

*/

const n1 = Number(prompt("Enter first number: "));
const n2 = Number(prompt("Enter second number: "));
const n3 = Number(prompt("Enter third number: "));
const n4 = Number(prompt("Enter fourth number: "));

let filterChoice = prompt("Select filter (even/odd): ").toLowerCase();

function oddeven(x) {
    if (x % 2 !== 0) {
        x = true;
        return x;
    } else {
        x = false;
    }
}

let odd1, odd2, odd3, odd4, even1, even2, even3, even4;
if (oddeven(n1) === true) {
    odd1 = n1;
} else {
    even1 = n2;
}

if (oddeven(n2) === true) {
    odd2 = n2;
} else {
    even2 = n2;
}

if (oddeven(n3) === true) {
    odd3 = n3;
} else {
    even3 = n3;
}

if (oddeven(n4) === true) {
    odd4 = n4;
} else {
    even4 = n4;
}

let minmax = prompt("Enter Choice(min / max) : ").toLowerCase();
let min, max;

if (filterChoice === "odd") {
    if (minmax === "min") {

        min = odd1;
        if (min <= odd2) min = odd2;
        if (min <= odd3) min = odd3;
        console.log("Minimum Value Is : " + min);
    }
    else if (minmax === "max") {

        max = odd1;
        if (max <= odd2) max = odd2;
        if (max <= odd3) max = odd3;
        console.log("Maximum Value Is : " + max);
    }
}

if (filterChoice === "even") {
    if (minmax === "min") {
        min = even1;
        if (min <= even2) min = even2;
        if (min <= even3) min = even3;
        console.log("Minimum Value Is : " + min);
    }
    else if (minmax === "max") {
        max = even1;
        if (max <= even2) max = even2;
        if (max <= even3) max = even3;
        console.log("Maximum Value Is : " + max);
    }
}

