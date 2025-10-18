const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const OutsideTemp = null 
 let UserEmail ;


 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log( id === anotherId);



 // stack (primitive),  Heap(non-primitive)
 let myYoutubename = "hinteschoudarycom"
  
 let anothername = myYoutubename
 anothername = "chaiaurcode"

 console.log(myYoutubename);
 console.log(anothername);


 let userOne = {
    email : "user@googlecom",
    upi: "user@ybi"
 }
 let userTwo = userOne 

 userTwo.email = "hitesh@google.com"

 console.log(userOne.email);
 console.log(userTwo.email);


