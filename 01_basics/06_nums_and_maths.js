//  ++++++++++++++++++++++++++++ Basic Operation ++++++++++++++++++++++++++++++++++

let x = 5;
let y = 3;

// Addition
let sum = x + y; // Output: 8

// Subtraction
let difference = x - y; // Output: 2

// Multiplication
let product = x * y; // Output: 15

// Division
let quotient = x / y; // Output: 1.6666666666666667

// Modulus (Remainder)
let remainder = x % y; // Output: 2

//  ++++++++++++++++++++++++++++ Math Object ++++++++++++++++++++++++++++++++++

// Math.max() - Returns the largest of zero or more numbers.
let maxNumber = Math.max(10, 20, 5, 30); // Output: 30

// Math.min() - Returns the smallest of zero or more numbers.
let minNumber = Math.min(10, 20, 5, 30); // Output: 5

// Math.round() - Rounds a number to the nearest integer.
let roundedNumber = Math.round(4.7); // Output: 5

// Math.floor() - Rounds a number down to the nearest integer.
let floorNumber = Math.floor(4.7); // Output: 4

// Math.ceil() - Rounds a number up to the nearest integer.
let ceilNumber = Math.ceil(4.2); // Output: 5

// Math.random() - Returns a random number between 0 (inclusive) and 1 (exclusive).
let randomNumber = Math.random(); // Output: (random number between 0 and 1)

//  ++++++++++++++++++++++++++++ Number Conversions: ++++++++++++++++++++++++++++++++++

// parseInt() - Parses a string and returns an integer.
let parsedInt = parseInt("10"); // Output: 10

// parseFloat() - Parses a string and returns a floating point number.
let parsedFloat = parseFloat("10.5"); // Output: 10.5

// Number() - Converts an object's value to a number.
let convertedNumber = Number("10"); // Output: 10

//  ++++++++++++++++++++++++++++ Number Formatting ++++++++++++++++++++++++++++++++++

// toFixed() - Formats a number using fixed-point notation.
let num = 10.12345;
let formattedNum = num.toFixed(2); // Output: "10.12"

// toPrecision() - Formats a number to a specified length.
let preciseNum = num.toPrecision(4); // Output: "10.12"

//  ++++++++++++++++++++++++++++ Formula to choose number range ++++++++++++++++++++++++++++++++++

const min = 10;
const max = 30;

console.log(Math.floor(Math.random() * (max - min + 1) + min));