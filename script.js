// a. String methods
const str = "Hello, JavaScript!";
console.log("String Length:", str.length);
console.log("Uppercase:", str.toUpperCase());
console.log("Lowercase:", str.toLowerCase());
console.log("Substring:", str.substring(7, 11));
console.log("Split:", str.split(" "));

// b. Number methods
const num = 123.456;
console.log("Fixed Decimal:", num.toFixed(2));
console.log("Exponential Notation:", num.toExponential(2));
console.log("Rounded Value:", Math.round(num));
console.log("Square Root:", Math.sqrt(num));
console.log("Random Number (0-1):", Math.random());

// c. Array methods
const array1 = [1, 2, 3, 4, 5];
console.log("Array Length:", array1.length);
console.log("Array Index of 3:", array1.indexOf(3));
console.log("Array Includes 4:", array1.includes(4));
console.log("Array to String:", array1.toString());
console.log("Array Joined with '-' separator:", array1.join("-"));

// d. Date methods
const today = new Date();
console.log("Current Date:", today.toDateString());
console.log("Current Time:", today.toTimeString());
console.log("Day of the Month:", today.getDate());
console.log("Day of the Week:", today.getDay());
console.log("Current Month:", today.getMonth());

// e. Function methods
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}

const result1 = add(5, 3);
console.log("Addition Result:", result1);

const result2 = subtract(10, 4);
console.log("Subtraction Result:", result2);