// ===============================
// ✅ Loops in JavaScript
// ===============================

// 👉 object create pannrom
let decoration = {
    color: 'red',
    radius: 10
};

// 👉 for...in loop → object properties iterate panna use pannuvom
for (const prop in decoration) {
    console.log(decoration[prop]); // output: red, 10
}


// ===============================
// ✅ Array with for...in loop
// ===============================

const arr = ["hello", 1, 'javascript', true];

// 👉 for...in → array la index (position) iterate pannum
for (let x in arr) {
    console.log(arr[x]); // output: hello, 1, javascript, true
}


// ===============================
// ✅ Spread Operator (...)
// ===============================
// Spread → array/object expand pannum (split pannitu podum)

const array = [1, 2, 4];
// 👉 oru array la irundhu ellam expand pannitu pudhu array la add panrom
const newArray = [...array, 4, 5];
console.log(newArray); // [1, 2, 4, 4, 5]

// 👉 object example
const obj = { name: "j", age: 25 };
// oru object oda properties expand pannitu pudhu property add pannuvom
const obj2 = { ...obj, city: "Delhi" };
console.log(obj2); // { name: "j", age: 25, city: "Delhi" }


// ===============================
// ✅ Rest Operator (...)
// ===============================
// Rest → remaining values collect pannum

const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1 (first element)
console.log(rest);  // [2, 3, 4] (remaining values array la store aagum)

// 👉 object la use panna
const { a, ...nest } = { a: 1, b: 2, c: 3 };
console.log(nest); // { b: 2, c: 3 } (a exclude pannitu rest collect pannum)


// ===============================
// ✅ Array Destructuring
// ===============================
// 👉 array values separate variables la assign pannuvom

const numbers = [1, 2, 3, 4];
const [a, b, c, d] = numbers;
console.log(a); // 1


// ===============================
// ✅ Object Destructuring
// ===============================
// 👉 object properties direct variable ku assign pannuvom

const person = { name: "john", age: 20 };
const { name, age } = person;
console.log(name); // john
console.log(age);  // 20


// ===============================
// ✅ Nested Destructuring
// ===============================
// 👉 object oda ulle object irundha athula irundhu values eduthukkalaam

const data = { user: { id: 1, email: "suji2727@gmail.com" } };
const { user: { id, email } } = data;
console.log(id, email); // 1 "suji2727@gmail.com"


// ===============================
// ✅ Optional Chaining (?.)
// ===============================
// 👉 oru object la property illa na direct access panna error varum,
// atha avoid panna ?. use pannuvom

const user1 = { address: { street: "2nd road" } };
console.log(user1.address?.street); // "2nd road"
console.log(user1.contact?.phone);  // undefined (error varama safe ah undefined return pannum)


// ===============================
// ✅ Try...Catch statement
// ===============================
// 👉 error handle panna use pannuvom

function add(a, b) {
    return a * b; // simple multiplication
}

try {
    let result = add(10, 20);
    console.log(result); // 200
    console.log('Bye');
} catch (e) {
    // 👉 error varum pothu catch block execute aagum
    console.log({ name: e.name, message: e.message });
}
console.log('Bye'); // error irundhalum run aagum


// ===============================
// ✅ Try...Catch...Finally
// ===============================
// 👉 finally → error varalum, varathalum eppavum run aagum

let result = 0;
try {
    result = add(10, 20);
    console.log(result); // 200
} catch (e) {
    console.log({ name: e.name, message: e.message });
} finally {
    // 👉 finally block eppavum execute aagum
    console.log(result); // 200
}
console.log('Bye');
