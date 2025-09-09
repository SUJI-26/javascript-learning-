// // function sayhello(){
// //     console.log("Hello")
// // }

// // function parameter(message){
// //     console.log(message)
// // }
// // parameter("Epdi irukka")

// function add(a,b){
//     return a+b
// }
// let result =add(2,8)
// console.log(result)

// // clouser//

// function outer() {
// var b= 10;
// function inner() {
// var a = 20; Scope
// console.log(a+b);
// }
// }



/// problems//

// let name = "suji";
// let age = 20;
// let student = true;
// console.log(name)
// console.log(age)
// console.log(student)

// let a= 10;
// let b = 5;

// [a,b]=[b,a];
// console.log(a,b)

// console.log(x)
// var x = 20;

// console.log(b);
// let b = 39;

// console.log(a);
// let a = 47;

// {
//     let a = 29;
//     var b= 30;
//     const c = 30;
//     console.log(a)
//     console.log(b)
// }

// console.log(a)
// console.log(b)

// console.log(5 == "5");    // ?
// console.log(5 === "5");   // ?
// console.log(null == undefined);  // ?
// console.log(null === undefined); // ?

console.log(0 || "Hello");    // ?
console.log("" && "World");   // ?
console.log(true && false);   // ?
console.log(true || false);   // ?

let name = null;
let result = name ?? "Guest";
console.log(result);

name = "";
result = name ?? "Guest";
console.log(result);
console.log(typeof 100);
console.log(typeof "Suji");
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});


let str = "Javascript";

console.log(str.length)
console.log(str.toUpperCase())
console.log(str.substring(0,4))
console.log(str.charAt(5))

let str = "hello";
let reversed = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}

console.log(reversed); // "olleh"
