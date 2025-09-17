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
