// ===============================
// ✅ Object in JavaScript Revision Notes (Tamil + Tanglish)
// ===============================

// Object → key-value pair la data store pannuvom
// ellam data type (string, number, boolean, array, object) store pannalam
let person = {
    firstName: "logesh",
    lastName: "Suji",
    age: 27,
    isStudent: true
};

// 👉 object la value update panna dot(.) use pannuvom
person.firstName = "vijay";
person.lastName = "John";

console.log(person.firstName); // vijay
console.log(person.lastName);  // John
console.log(person);           // full object print aagum

// 👉 delete keyword use panna oru property remove aagum
delete person.isStudent;
console.log(person); // isStudent remove aagidum

// 👉 "in" operator → property iruka illaya check pannum
console.log("firstName" in person); // true (iruku)
console.log("fullName" in person);  // false (illa)


// ===============================
// ✅ Object.values()
// ===============================
// Object oda values (only values) array form la return pannum
const session = {
    id: 1,
    time: "29-sep-2025",
    device: "lap",
    browser: "chrome"
};
const values = Object.values(session);
console.log(values); // [1, "29-sep-2025", "lap", "chrome"]


// ===============================
// ✅ Object.keys()
// ===============================
// Object oda keys (only keys) array form la return pannum
const employees = {
    boss: "Michael",
    secretary: "Pam",
    sales: "Jim",
    accountant: "Oscar"
};
const keys = Object.keys(employees);
console.log(keys); // ["boss", "secretary", "sales", "accountant"]


// ===============================
// ✅ Object.entries()
// ===============================
// Object oda [key, value] pair array ah convert pannum
const obj = { name: "Adam", age: 23, location: "Trichy" };
const entries = Object.entries(obj);
console.log(entries); 
// [["name","Adam"], ["age",23], ["location","Trichy"]]


// ===============================
// ✅ Object.freeze()
// ===============================
// freeze → object la add / delete / update panna mudiyathu (total lock)
let frozenPerson = { name: "suji", age: 20 };
Object.freeze(frozenPerson);

frozenPerson.age = 23;  // ❌ update aagathu
console.log(frozenPerson); // { name: "suji", age: 20 }


// ===============================
// ✅ Object.seal()
// ===============================
// seal → object la add / delete panna mudiyathu, 
// aana existing value update panna mudiyum
let sealedPerson = { name: "suji", age: 20 };
Object.seal(sealedPerson);

sealedPerson.age = 23;  // ✅ update aagum
delete sealedPerson.name; // ❌ delete panna mudiyathu
console.log(sealedPerson); // { name: "suji", age: 23 }


// ===============================
// ✅ "this" keyword
// ===============================
// "this" → object itself ku point pannum
function createCharacter(name) {
    return {
        name,
        greet: function () {
            console.log(`${this.name} says hello!`);
        }
    };
}

const hero = createCharacter("Suji");
hero.greet(); // "Suji says hello!"
