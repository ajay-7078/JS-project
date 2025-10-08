const accountId= 1142
let accountEmail = "ajay@gmail.com"
var accountPassword = "1234"
accountCity= "jaipur"
let accountState;

//accountId = 2  // not allowed

accountEmail = "hc@g.com"
accountPassword = "22221"
accountCity = "pinkcity"

console.log(accountId);

/*prefer not to use var 
because of issue in block scope and functional scope*/

console.table([accountEmail,accountId, accountPassword,accountCity,accountState]);