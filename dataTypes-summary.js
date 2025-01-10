// primitive & non-primitive DataTypes

// difference on how it is store in memory and how it is access 
// primitive ==>  7 types (they are call by value , ref of original data in memory is not given , copy of that is given)

// String,
// Number, 
// Boolean, 
// undefined, 
// null, 
// Symbol(kisi bhi value ko unique banane ke liye use hota h),BigInt
// eg{
//     const id = Symbol('123') 
//     const anotherid = Symbol("123")
//     these both are not same
// },
// BigInt  (represent n in end of number)
// const bigNumber = 2342385729529356726n

// ***************************************************************************************************

// non-primitive || reference Type ==> memory ref is allocated

// Array, => const food = ["idly","dosa"]
// Objects, ==> let myObj = {
//     name:"hitesh",
//     age : 22
// }
// functions ==> const myFunction = function(){
//     console.log("Hellow World");
    
// }

// *******************************************************************************************************

// Q] is javaScript is dynamically typed lang or statistically typed lang?

// usually we define type of a variable in languages(Typescript or Java) , but in js we can define without it .
// so js is dynamic language, variables can hold values of different types during runtime.

// const score = 30 js
// const score:Number = 20 Typescript

// Q] 
// typeof(null) => Object
// typeof(Nan) => Number
// typeof(undefined) => undefined
// return type of all non-primitive types are object only 
// so , object || object function

// ************************************************************************************************************

// 2 types of memory

// Stack memory (Primitive)   variable ki copy milti h
// Heap mrmory (Non-Primitive) refernece milta h , jo change karenge voh original value me hoga 


// let myYoutTubename = "hitesh"