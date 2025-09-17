function calculate(operation, a, b) {
    return operation(a, b);
}

// Different operations
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

// Using calculate with different functions
console.log("Add:", calculate(add, 10, 5));
console.log("Subtract:", calculate(subtract, 10, 5));
console.log("Multiply:", calculate(multiply, 4, 5));
console.log("Divide:", calculate(divide, 20, 4));
