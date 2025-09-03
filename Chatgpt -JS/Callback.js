// // function movie(hero,heroine){
// //     console.log(`Ayan movie hero ${hero} ,heroine ${heroine}`)
// // }
// // movie("Surya","Tamana")

// function starbucks(callback){
//     console.log("Your order please");
//     callback();
// }

// function User(){
//     console.log("White mocha")
// }
// starbucks(User)

// // SetTimeout//

// console.log("Briyani Ordered")

// setTimeout(function briyani(){
//     console.log("your Briyani is ready");
// },2000);


// // Arroe function in Setinterval//
// // console.log("Briyani Ordered")
// // setTimeout(()=>{
// //     console.log("your Briyani is ready");
// // },2000);

// // setInterval(function clock(){
// //     console.log("remind me ")
// // },2000)



const water =setInterval(()=>{
    console.log("drink water!!!")
},3000)

setTimeout(()=>clearInterval(water),15000);