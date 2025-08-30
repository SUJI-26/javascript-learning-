// // // // function greetuser(){
// // // //     console.log("Hello Suji ")
// // // // } greetuser()


// // // // const Hello = function(){
// // // //     console.log("Hi suji")
// // // // };

// // // // function multiply(a,b){
// // // //     return a*b
// // // // }
// // // //  console.log(multiply(3,6))

// // // // function multiply(a,b){
// // // //     return a+b
 
// // // // }
// // // // console.log(multiply(4,8))


// // // function sayHello(){
// // //     console.log("hello suji")
// // // }sayHello()


// // // const Hello = function(){
// // //     console.log("hello suji");
// // // }

// // // function mul (a,b){
// // //     return a*b
// // // }
// // // console.log(mul(3,6))

// // // const multiply = function(a,b){
// // //     return a*b
// // // }
// // // console.log(multiply(5,9))

// // const sayhi =()=> 
// //     console.log("hello Suji")
// // sayhi()

// // const add = (a,b)=> a*b
// //     console.log(add(3,8))


// // const add =(a,b)=> a+b
// //     console.log(add(4,9))

// // function suji(name="No "){
// //     console.log("hello "+ name)
// // }suji("Leo")
// // suji("vijay")

// function addNumbers(a,b){
//     console.log(a+b)
// }addNumbers(1000,300)


function User(name){
    console.log(`Hello,${name}`)
}
function Call(back){
    const vijay ="Suji"
    back(vijay)
}
Call(User)

function displayResult(mark){
    console.log(`He fail in our Semester Exam ${mark}`)
}
function result(Pass){
    const fail = "inba"
    Pass(fail)
}
result(displayResult)