node-js-assignment-2

Second Node.js practical: Hoisting, Functions, Arrow Functions, and Higher Order Functions

Node.js Assignment 2
📌 Student Info

Name: Dipanshu

Student ID: GF202345540
Task 1: Hoisting in Variables

Created hoisting_var.js file:

// Using var
console.log("var before declaration:", myVar); 
var myVar = 10;
console.log("var after declaration:", myVar);

// Using let
try {
    console.log("let before declaration:", myLet);
} catch (error) {
    console.log("Error with let before declaration:", error.message);
}
let myLet = 20;
console.log("let after declaration:", myLet);

// Using const
try {
    console.log("const before declaration:", myConst);
} catch (error) {
    console.log("Error with const before declaration:", error.message);
}
const myConst = 30;
console.log("const after declaration:", myConst);

Run with: node hoisting_var.js

Task 2: Function Declarations vs Expressions
Created function_dec.js file:
// Function Declaration
console.log("Calling add() before declaration:", add(5, 10));

function add(a, b) {
    return a + b;
}

console.log("Calling add() after declaration:", add(15, 20));

// Function Expression
try {
    console.log("Calling multiply() before declaration:", multiply(2, 3));
} catch (error) {
    console.log("Error when calling multiply() before declaration:", error.message);
}

const multiply = function(a, b) {
    return a * b;
};

console.log("Calling multiply() after declaration:", multiply(4, 5));

Run with: node function_dec.js


Task 3: Arrow Functions vs Normal Functions
Created arrow_normal.js file:
const obj = {
    name: "NodeJS",
    normalFunc: function() {
        console.log("Normal Function this.name:", this.name);
    },
    arrowFunc: () => {
        console.log("Arrow Function this.name:", this.name);
    }
};

obj.normalFunc();
obj.arrowFunc();
 Ran with: node function_dec.js 


 Task 4: Higher Order Functions

Created higher_order.js file:
function calculate(operation, a, b) {
    return operation(a, b);
}

// Different operations
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

console.log("Add:", calculate(add, 10, 5));
console.log("Subtract:", calculate(subtract, 10, 5));
console.log("Multiply:", calculate(multiply, 4, 5));
console.log("Divide:", calculate(divide, 20, 4));
Run with: node higher_order.js
