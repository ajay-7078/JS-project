const userEmail = "hahitesh.ai"


// if (userEmail) {
//     console.log("got user email");
    
// }else{
//     console.log("don't have user email");
    
// }


//falsy value

// //false, 0 -0, BigInt 0n, "", null, undefined,NaN

// truthy value

//true "0", "false", "  ",[], {},  function(){},

// if (userEmail.length === 0) {
//     console.log("array is empty");
    
// }

const emtyObj = {}
 
if (Object.keys(emtyObj).length === 0) {
    console.log("emty is object");
    
}



// nillish Coalescing Operator (??): null underfined

let val1;
//  val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ??  15



// terniary Operator

 console.log(val1);
 
const iceTeaPrice = 100 
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80")

