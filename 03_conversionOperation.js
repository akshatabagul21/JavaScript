// let score = "33"                 /////in this we know the type 
// let score = "33abc" 
// let score = null
let score = undefined

// const {score} = req.body  ///but if it came in this way , then don't know the type
// console.log(typeof NaN); ////////////////////////////////////////////////////////////////But type of NaN is number
// console.log(typeof (score));

let valueInNumber  = Number(score);      //string --> number
// console.log(typeof (valueInNumber),valueInNumber);    //////NaN (special type)

// null => 0
// so have to be very attentive about the conversion
//anything which cannot be converted in number will give NaN (string)


// let isLoggedIn = 1
// let isLoggedIn = ""
let isLoggedIn = "hitesh"
let booleanLoggedIn = Boolean(isLoggedIn)


let someNumber = 33;
let stringNumber = String(someNumber)



// ******************************************************** OPERATIONS ******************************************************************

let value = 3
let negValue = -value
// console.log(negValue)
// console.log(2+2,2-2,2*2,2**2,2**3,2/3,2%3)

let str1 = "hello"
let str2 = "hitesh"
let str3 = str1+str2


// problems
// console.log("1" +2 , 1+"2", "1"+"2"+2, 1+2+"2");    
// console.log(+"");  //1

let num1, num2, num3

// num1 = num2 = num3 = 2+2 confusion
let gameCounter = 100
gameCounter++             //postfix
++gameCounter            //prefix
console.log(gameCounter++); // this ++ here will not work


