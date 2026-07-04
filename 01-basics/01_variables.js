const accountId = 144553
let accountEmail = "hitesh@outlook.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState
// accountId = 2  // not allowed

accountEmail = "hc@.com"
accountPassword = "9876543"
accountCity = "Hyderabad"
console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional
*/
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])
