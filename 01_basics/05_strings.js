// toUpperCase(): Converts a string to uppercase.
let myString1 = "hello";
console.log(myString1.toUpperCase()); // Output: HELLO

// toLowerCase(): Converts a string to lowercase.
let myString2 = "HELLO";
console.log(myString2.toLowerCase()); // Output: hello

// charAt(index): Returns the character at a specified index.
let myString3 = "hello";
console.log(myString3.charAt(0)); // Output: h

// indexOf(substring): Returns the index of the first occurrence of a substring.
let myString4 = "hello world";
console.log(myString4.indexOf("world")); // Output: 6

// replace(old, new): Replaces a substring with another substring.
let myString5 = "Hello World";
console.log(myString5.replace("World", "JavaScript")); // Output: Hello

// slice(start, end): Extracts a section of a string.
let myString6 = "Hello World";
console.log(myString6.slice(0, 5)); // Output: Hello

// split(separator): Splits a string into an array of substrings.
let myString7 = "apple,banana,orange";
console.log(myString7.split(",")); // Output: ['apple', 'banana', 'orange']

// trim(): Removes whitespace from both ends of a string.
let myString8 = "  hello world   ";
console.log(myString8.trim()); // Output: hello
 world

// startsWith(prefix): Checks if a string starts with a specified prefix.
let myString9 = "Hello World";
console.log(myString9.startsWith("Hello")); // Output: true

// endsWith(suffix): Checks if a string ends with a specified suffix.
let myString10 = "Hello World";
console.log(myString10.endsWith("World")); // Output: true

// includes(substring): Checks if a string contains a specified substring.
let myString11 = "Hello World";
console.log(myString11.includes("World")); // Output: true
