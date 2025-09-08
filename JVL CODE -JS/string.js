// Declare a string variable
let text = "Hello world";

// Get the length of the string
console.log(text.length);        // 11  (Counts all characters including spaces)

// Convert string to uppercase
console.log(text.toUpperCase()); // "HELLO WORLD"

// Convert string to lowercase
console.log(text.toLowerCase()); // "hello world"

// Get character at a specific index (index starts from 0)
console.log(text.charAt(6));     // "w"

// Get part of string using substring (start index, end index)
console.log(text.substring(0,7)); // "Hello w"

// Declare another string
let newText = "javascript ,Learn for fun";

// Declare another string for replacement
let love = "I love web development";

// Replace first occurrence of a word in the string
let newlove = love.replace("web","Ai"); // "I love Ai development"

// Split string into an array based on space
let sep = love.split(" ");  // ["I", "love", "web", "development"]

// Print original and modified strings
console.log(love);        // "I love web development" (original remains same)
console.log(newlove);     // "I love Ai development" (modified)
console.log(sep);         // ["I", "love", "web", "development"]

// Remove extra spaces from start and end
let text2 = "     Hello World      ";
console.log(text2.trim()); // "Hello World"
