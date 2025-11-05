const { use } = require("react");


function sayMayname(){
console.log("h");
console.log("i");
console.log("t");
console.log("e");
console.log("s");
console.log("h");

}
//sayMayname()

// function addtwoNumber(num1,num2){
//    console.log(num1 + num2 );
// }
function addtwoNumber(num1,num2){
//   let result = num1 + num2
//   return result
return num1 + num2
}

const result = addtwoNumber(3,5)

// console.log("Result: ",result);

// addtwoNumber(3,"a")

function loginUserMessage(username){
    return `${username}just logged in`
}

// console.log(loginUserMessage("hitesh"));
console.log(loginUserMessage(""));


//   FUNCTION WITH OBJECTS AND ARRAY JS  20 PART


function calculateCartPrice(...num1){
    return num1
}
 //console.log(calculateCartPrice(200,400,500));


 const user = {
    username: "hitesh",
    price: 199
 }

 function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
 }

 //handleobject(user)

 handleobject(
    {
        username: "sam",
        price: 399

    } )

    const myNewArray = [200,400,100,600]

    function returnSecondValue(getArray){
       return  getArray[1] 
    }
    //console.log(returnSecondValue(myNewArray));

    console.log(returnSecondValue([200,400,500,600]));
    
    