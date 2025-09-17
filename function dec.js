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
