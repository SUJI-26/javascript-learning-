// ==================== ARRAY BASICS ====================

// 1. Update value in an array
let color = ["Red", "blue", "Greeen"];
color[2] = "Violet"; // Change value at index 2
console.log(color[2]); // Output: Violet

// 2. Access array element by index
let arry = ["red", "yellow", "black", "white"];
console.log(arry[2]); // Output: black

// ==================== ARRAY ADD & REMOVE ====================

// 3. push() → Add element at the END of the array
let insert = ["red", "blue", "green", "violet"];
insert.push("black");
console.log("After push:", insert); 
// Output: [ 'red', 'blue', 'green', 'violet', 'black' ]

// 4. unshift() → Add element at the START of the array
let insert2 = ["red", "blue", "green"];
insert2.unshift("violet");
console.log("After unshift:", insert2); 
// Output: [ 'violet', 'red', 'blue', 'green' ]

// 5. pop() → Remove the LAST element
let popArray = ["red", "blue", "green", "violet"];
popArray.pop(); 
console.log("After pop:", popArray); 
// Output: [ 'red', 'blue', 'green' ]

// 6. shift() → Remove the FIRST element
let suji = ["zeho", "wibro", "tcs"];
suji.shift();
console.log("After shift:", suji); 
// Output: [ 'wibro', 'tcs' ]

// ==================== ARRAY SEARCH ====================

// 7. indexOf() → Find the index of a value
let index = ["red", "green"];
console.log("Index of green:", index.indexOf("green")); 
// Output: 1

// ==================== ARRAY LOOP ====================

// 8. forEach() → Loop through each element
let number = [2, 3, 5];
number.forEach(function(element) {
    console.log(element * 2); // Multiply each element by 2
});

// ==================== ARRAY TRANSFORM ====================

// 9. map() → Creates NEW array by changing values
const product = ["rice", "water", "sweet"];
const resultMap = product.map((el) => {
    return el + ' *'; // Add * to each element
});
console.log("Mapped array:", resultMap); 
// Output: [ 'rice *', 'water *', 'sweet *' ]

// Another map() example with discount
const price = [2, 3, 4, 5, 6, 5];
const discountAmount = 1;
const discountPrice = price.map((p) => p - discountAmount);
console.log("Discounted prices:", discountPrice); 
// Output: [ 1, 2, 3, 4, 5, 4 ]

// ==================== ARRAY FILTERING ====================

// 10. filter() → Creates NEW array with matching condition
var numbers = [1, 2, 4, 4, 5, 6];
var filtered = numbers.filter((num) => num > 4);
console.log("Filtered:", filtered); 
// Output: [5, 6]

// filter() with objects
var creatures = [
    { name: "Shark", habitat: "Ocean" },
    { name: "Whale", habitat: "Ocean" },
    { name: "Lion", habitat: "Savanna" },
    { name: "Monkey", habitat: "Jungle" }
];
const oceanAnimals = creatures.filter((c) => c.habitat === 'Ocean');
console.log("Ocean animals:", oceanAnimals); 
// Output: Shark and Whale objects

// ==================== ARRAY SEARCH (FIRST MATCH) ====================

// 11. find() → Returns FIRST element that matches
let num = [10, 20, 30, 40];
let found = num.find((element) => element > 20);
console.log("First element > 20:", found); 
// Output: 30

// ==================== ARRAY CONDITION CHECK ====================

// 12. some() → TRUE if ANY element matches
let num2 = [20, 202, 20, 20];
let hasBig = num2.some((el) => el > 100);
console.log("Has element > 100:", hasBig); 
// Output: true

// ==================== ARRAY REDUCE ====================

// 13. reduce() → Reduce array to single value (sum, etc.)
const newnumber = [20, 202, 20];
let sum = newnumber.reduce((acc, current) => acc + current, 0);
console.log("Sum:", sum); 
// Output: 242
