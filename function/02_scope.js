//var c = 300

let a = 300

if(true){
let a = 10 
const b = 20 
var c = 30
console.log("inner:", a);

}


console.log(a);
// console.log(b);
// console.log(c);

// scope level and mini hoisting   part 22

function one(){
    const username = "hitesh"

   function two(){
    const website = "youtube"
   // console.log(username);
    
   }
//    console.log(website);

   two()
   
}
one()

if(true){
    const username = "jit"
    if(username === "jit"){
        const website = "youtube"
       // console.log(username + website);
        
    }
   // console.log(website);
    
}
//console.log(username);



// +++++++++++++++++++++++ inetersting ++++++++++++++++++++++++++++++++
addone(5)
function addone(num){
  return num +1 

}
console.log(addone(5));

addTwo(5)
const addTwo  =  function(num){
    return num + 2
}
console.log(addTwo(5));
