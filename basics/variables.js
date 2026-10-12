const accountId = 144553
let accountEmail = "arpit@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 // not allowed

let accountState;

console.log(accountId);

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

/*
Note - prefer not to use var , because of issue in block scope
and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState ])

