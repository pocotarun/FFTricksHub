let a = Number(prompt("Enter Value of a : "));
let b = Number(prompt("Enter Value of b : "));
let c = Number(prompt("Enter Value of c : "));
let d = Number(prompt("Enter Value of d : "));

let operation1 = (prompt("Select Value ONE (A,B,C,D) : "));
let operation2 = (prompt("Select Value TWO (A,B,C,D) : "));

// let op1, op2;
// op1 = operation1;
// op2 = operation2;
let op1 = operation1, op2 = operation2;

if (operation1 === "A" || operation1 === "a") {
    operation1 = a;
} else if (operation1 === "B" || operation1 === "b") {
    operation1 = b;
} else if (operation1 === "C" || operation1 === "c") {
    operation1 = c;
} else if (operation1 === "D" || operation1 === "d") {
    operation1 = d;
}


if (operation2 === "A" || operation2 === "a") {
    operation2 = a;
} else if (operation2 === "B" || operation2 === "b") {
    operation2 = b;
} else if (operation2 === "C" || operation2 === "c") {
    operation2 = c;
} else if (operation2 === "D" || operation2 === "d") {
    operation2 = d;
}


// functions for operations
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function multiply(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}



// user input ke hisaab se operations perform karna

let pop;
givepop: while (true) {
    pop = String(prompt("Select operator (+, -, *, /) : "));
    if (pop === "+" || pop === "-" || pop === "*" || pop === "/") {
        true;
        break givepop;
    } else {
        console.log("Invalid operator selected. Please choose one of +, -, *, /.");
        continue givepop;
    }
}


let result;

/*
Coding ka rule: "Don't Repeat Yourself" (DRY). Agar aap ek hi cheez baar-baar copy-paste kar rahe hain,
 toh samajh jaiye ki usse chhota karne ka koi na koi tarika zaroor hai.
*/

if ((op1 === "a" || op1 === "A") && (op2 === "a" || op2 === "b" || op2 === "c" || op2 === "d" || op2 === "A" || op2 === "B" || op2 === "C" || op2 === "D")) {
    if (pop === "+") {
        result = add(operation1, operation2);
        console.log(result);
    }
    if (pop === "-") {
        result = subtract(operation1, operation2);
        console.log(result);
    }
    if (pop === "*") {
        result = multiply(operation1, operation2);
        console.log(result);
    }
    if (pop === "/") {
        result = divide(operation1, operation2);
        console.log(result);
    }
}

else if ((op1 === "b" || op1 === "B") && (op2 === "a" || op2 === "b" || op2 === "c" || op2 === "d" || op2 === "A" || op2 === "B" || op2 === "C" || op2 === "D")) {
    if (pop === "+") {
        result = add(operation1, operation2);
        console.log(result);
    }
    if (pop === "-") {
        result = subtract(operation1, operation2);
        console.log(result);
    }
    if (pop === "*") {
        result = multiply(operation1, operation2);
        console.log(result);
    }
    if (pop === "/") {
        result = divide(operation1, operation2);
        console.log(result);
    }
}

else if ((op1 === "c" || op1 === "C") && (op2 === "a" || op2 === "b" || op2 === "c" || op2 === "d" || op2 === "A" || op2 === "B" || op2 === "C" || op2 === "D")) {
    if (pop === "+") {
        result = add(operation1, operation2);
        console.log(result);
    }
    if (pop === "-") {
        result = subtract(operation1, operation2);
        console.log(result);
    }
    if (pop === "*") {
        result = multiply(operation1, operation2);
        console.log(result);
    }
    if (pop === "/") {
        result = divide(operation1, operation2);
        console.log(result);
    }
}

else if ((op1 === "d" || op1 === "D") && (op2 === "a" || op2 === "b" || op2 === "c" || op2 === "d" || op2 === "A" || op2 === "B" || op2 === "C" || op2 === "D")) {
    if (pop === "+") {
        result = add(operation1, operation2);
        console.log(result);
    }
    if (pop === "-") {
        result = subtract(operation1, operation2);
        console.log(result);
    }
    if (pop === "*") {
        result = multiply(operation1, operation2);
        console.log(result);
    }
    if (pop === "/") {
        result = divide(operation1, operation2);
        console.log(result);
    }
}


