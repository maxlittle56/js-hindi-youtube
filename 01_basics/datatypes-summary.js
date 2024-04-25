// Primitive Types

// 7 types : String, Number, Boolean, undefined, null, Symbol, BigInt


const score = 100;
const scorevalue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('124');
const anotherId = Symbol('124');

console.log(id === anotherId);

const bigNumber = 324324234324234n;
console.log(typeof bigNumber);

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "hero"];

let myObj = {
    name: "Krishna",
    age: 21,
}

const myFunction = function(){
    console.log("Hello World");
}