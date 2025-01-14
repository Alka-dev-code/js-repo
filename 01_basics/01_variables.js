const accountId=144553
let accountEmail= "alka.pandey@gmail.com"
var accountPassword="12345"
accountCity= "Mumbai"

let accountState

//accountId=3 =>not allowed, const can not be changed

accountEmail ="123@gmail.com"
accountPassword="9897"
accountCity="Pune"

console.log(accountId);
/* 
    prefer not to use var 
    because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity, accountState])