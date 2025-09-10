// // Object in Javascript //

// // objact is store all the data dype and varivable //


// let person = {
//     firstName: "logesh",
//     lastName :"Suji",
//     age : 27,
//     isStudent:true
// };
// person.firstName = "vijay";
// person.lastName = "John";
// console.log(person.firstName)
// console.log(person.lastName)
// console.log(person)

// delete person.isStudent; // delete key word  //
// console.log(person)

// console.log("firstName" in person)
// console.log("fullName" in person)

// Object value method //
// const session = {
//     id: 1,
//     time: "29-sep-2025",
//     device: "lap",
//     browser: "chrome"
// };
// const values = Object.values(session);
// console.log(values)

// // Object Key method //

// const exployees = {
//     boss:'Michael',
//     secreatary :'pam',
//     sales :'Jim',
//     accountant:'occar'
// }
// const keys = Object.keys(exployees);
// console.log(keys)

// // Object entries Method //
// const obj = { name :"Adam", age:23, location:"Trichy"};
// const enty = Object.entries(obj)
// console.log(enty); // this is order small number vice Ex = 33,45,88 //

// Object freeze// this is freese frist time assign varible and not delete //
// let person = {name:"suji",age :20};
// console.log(Object.freeze(person))
// person.age = 23;

// object seal// 
let person = {name:"suji",age :20};
console.log((Object.seal(person))) // freeze patha mathalm ana delete panna mudiyathu  not delte value chage pannalam//


// JS this keyword - //