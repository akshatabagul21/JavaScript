// console.log(2>1);
// console.log(2>=1);
console.log("2">1);      //auto 2 is converted to number,such writting is not allowed , and hence typeScript

// > ans >= works differently    comparision convert null to a number , treating it as 0 
// so null >  0 ==> false | null >=0 ===> true

//=== check dataType and value also 
console.log("2" === 2);    //false
console.log("2" == 2);      // true
