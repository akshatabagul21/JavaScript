// const score = 400

// const balance = new Number(100)
// console.log(score);   400
// console.log(balance); [Number:100]
// both will give diff console

// balance.toString()
// balance.toFixed(1)  100.0    always two digits after decimal

// const otherNumber = 23.89378
// otherNumber.toPrecision(2) 24  (2 h toh 23 pe focus kiya but . ke bad 8 h toh usko round of karke 24 kar liya)

// const hundreds = 10000000
// hundreds.toLocaleString('en-IN');

// Number.MAX_VALUE  , MIN_VALUE


// ***************************************************** Maths *************************************************************************************************

// Math (Object hai)
// Math.abs(-4)  negative ko possitive karta h 
// Math.round(4.3,4.6) 4 5
// Math.ceil(4.2) 5  jara sa bhi 4 se jyada huaa toh voh uska top le leka 
// Math.floor(3.2) 3
// Math.min(4,2,6,6)
// Math.max(5,2,8,5,7)
// Math.random() always between 0 and 1

// (Math.random() *10) + 1 if wanted number between 0 to 10

//  ... many more functions . Check Math.__Proto__ 

// imp formula to use in calculation to get any number bwtn two numbers......

// const min = 10
// const max = 20
// number btn max and min 

// (Math.random() * (max -min +1)) + min