const accountId = 144553
let accountEmail = "hitesh21@gmail.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

// accountId = 2  not allowed
accountEmail = "hdfc"
accountPassword = "212121"
accountCity = "bengaluru"


/*
prefer not to use var , because of issue in block scope and functional scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
